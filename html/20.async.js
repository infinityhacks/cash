(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"20P0":function(e,t,a){"use strict";var l=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var d=l(a("bx4M"));a("+L6B");var n=l(a("2/Rp")),s=l(a("pVnL"));a("5NDa");var i=l(a("5rEg"));a("y8nQ");var u,p,o,m,f=l(a("Vl3Y")),c=r(a("q1tI")),h=a("MuoO"),E=a("TJpk"),b=f.default.Item,g=i.default.TextArea,v={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},w={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}},y=(u=(0,h.connect)(e=>{var t=e.adminSetting;return{adminSetting:t}}),p=f.default.create(),u(o=p((m=class extends c.Component{constructor(){super(...arguments),this.handleSubmit=(e=>{e.preventDefault(),this.props.form.validateFields((e,t)=>{if(!e){var a=this.props.dispatch;a({type:"adminSetting/update",payload:t})}})})}componentDidMount(){var e=this.props.dispatch;e({type:"adminSetting/get"})}render(){var e=this.props.adminSetting.data,t=this.props.form.getFieldDecorator;return c.default.createElement(d.default,{bordered:!1},c.default.createElement(E.Helmet,null,c.default.createElement("title",null,"\u7ad9\u70b9\u8bbe\u7f6e - \u7ba1\u7406\u540e\u53f0")),c.default.createElement(f.default,{onSubmit:this.handleSubmit,hideRequiredMark:!0,style:{marginTop:8}},c.default.createElement(b,(0,s.default)({label:"\u6807\u9898"},v),t("title",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7ad9\u70b9\u6807\u9898"}],initialValue:e["title"]})(c.default.createElement(i.default,{placeholder:"\u7ad9\u70b9\u6807\u9898"}))),c.default.createElement(b,(0,s.default)({label:"\u5173\u952e\u5b57"},v),t("keywords",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5173\u952e\u5b57"}],initialValue:e["keywords"]})(c.default.createElement(g,{placeholder:"\u5173\u952e\u5b57",rows:2}))),c.default.createElement(b,(0,s.default)({label:"\u63cf\u8ff0"},v),t("description",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u63cf\u8ff0"}],initialValue:e["description"]})(c.default.createElement(g,{placeholder:"\u63cf\u8ff0",rows:3}))),c.default.createElement(b,(0,s.default)({},w,{style:{marginTop:32}}),c.default.createElement(n.default,{type:"primary",htmlType:"submit"},"\u4fdd\u5b58"))))}},o=m))||o)||o),S=y;t.default=S}}]);