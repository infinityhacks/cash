from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework_extensions.cache.decorators import cache_response
from rest_framework_extensions.cache.mixins import CacheResponseMixin

from utils.common import get_object_or_none, get_comments
from utils.page_cache import calculate_cache_key
from utils.pagination import LimitPagePagination
from .models import Article
from .serializers import HotArticleViewSetListSerializer, TopicArticleViewSetListSerializer, \
    ArticleViewSetListSerializer, ArchiveViewSetListSerializer, ArticleViewSetRetrieveSerializer, \
    ArticleCommentViewSetListSerializer


# Create your views here.

class ArticleViewSet(mixins.ListModelMixin,
                     mixins.RetrieveModelMixin,
                     viewsets.GenericViewSet):
    """
    list:
    文章列表
    """
    lookup_field = 'url__iexact'
    pagination_class = LimitPagePagination

    def get_serializer_class(self):
        if self.action == "list":
            return ArticleViewSetListSerializer
        return ArticleViewSetRetrieveSerializer

    def get_queryset(self):
        queryset = Article.objects.filter(is_del=False).order_by("-release_time")
        return queryset.filter(type=1, status=1) if self.action == 'list' else queryset


class HotArticleViewSet(CacheResponseMixin,
                        mixins.ListModelMixin,
                        viewsets.GenericViewSet):
    """
    list:
    热门文章列表
    """
    queryset = Article.objects.filter(is_del=False, type=1, status=1).order_by("-view_count")[:5]
    serializer_class = HotArticleViewSetListSerializer


class TopicArticleViewSet(CacheResponseMixin,
                          mixins.ListModelMixin,
                          viewsets.GenericViewSet):
    """
    list:
    专题文章
    """
    queryset = Article.objects.filter(is_del=False, type=2, status=1)
    serializer_class = TopicArticleViewSetListSerializer


class ArchiveViewSet(mixins.ListModelMixin,
                     viewsets.GenericViewSet):
    queryset = Article.objects.filter(is_del=False, type=1, status=1).order_by("-release_time")
    serializer_class = ArchiveViewSetListSerializer

    @cache_response(key_func=calculate_cache_key)
    def list(self, request, *args, **kwargs):
        """
        归档
        """
        resp_data = {}
        serializer = self.get_serializer(self.get_queryset(), many=True)
        for article in serializer.data:
            year = article["release_time"][:4]
            if year not in resp_data:
                resp_data[year] = []
            resp_data[year].append(article)
        return Response(resp_data)


class ArticleCommentViewSet(mixins.ListModelMixin,
                            viewsets.GenericViewSet):
    queryset = Article.objects.filter(is_del=False, status=1).order_by("-release_time")
    serializer_class = ArticleCommentViewSetListSerializer

    @cache_response(key_func=calculate_cache_key)
    def list(self, request, *args, **kwargs):
        """
        获取文章评论-列表
        """
        queryset = self.get_queryset()
        article = get_object_or_none(queryset, url__iexact=kwargs.get("article_url__iexact"))
        if not article:
            return Response([])
        comments = article.comment_set.filter(is_del=False)
        return Response(get_comments(self.get_serializer(comments, many=True).data))
