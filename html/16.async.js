(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"9wYp":function(e,a,t){e.exports={wrapper:"wrapper___2r1ow"}},mna2:function(e,a,t){"use strict";t.r(a);t("14J3");var r,n,l=t("BMrR"),c=(t("jCWc"),t("kPKH")),p=t("q1tI"),s=t.n(p),i=t("mOP9"),m=t.n(i),o=t("MuoO"),u=t("9wYp"),v=t.n(u),w=t("TJpk"),h=(r=Object(o["connect"])(e=>{var a=e.archive;return{archive:a}}),r(n=class extends p["Component"]{componentDidMount(){var e=this.props.dispatch;e({type:"archive/getArchive"})}render(){var e=this.props.archive.data;return s.a.createElement(l["a"],{gutter:8},s.a.createElement(w["Helmet"],null,s.a.createElement("title",null,"\u5f52\u6863 - ansheng\u2019s blog!")),s.a.createElement(c["a"],{span:17},s.a.createElement("div",{className:v.a.wrapper},Object.keys(e).reverse().map(a=>s.a.createElement("div",{key:a},s.a.createElement("h2",null,a),s.a.createElement("ul",null,e[a].map((e,a)=>s.a.createElement("li",{key:a},s.a.createElement("span",null,e["release_time"]),s.a.createElement(m.a,{to:`/article/${e.url}/`},e.title)))))))))}})||n);a["default"]=h}}]);