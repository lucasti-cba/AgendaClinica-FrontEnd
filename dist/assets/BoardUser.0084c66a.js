import{_ as a,U as n}from"./index.c66dda8d.js";import{o,c,a as t,t as r}from"./vendor.c8b68da7.js";const d={name:"User",data(){return{content:""}},mounted(){n.getUserBoard().then(e=>{this.content=e.data},e=>{this.content=e.response&&e.response.data&&e.response.data.message||e.message||e.toString()})}},i={class:"container"},p={class:"jumbotron"};function _(e,m,l,h,s,u){return o(),c("div",i,[t("header",p,[t("h3",null,r(s.content),1)])])}var B=a(d,[["render",_]]);export{B as default};