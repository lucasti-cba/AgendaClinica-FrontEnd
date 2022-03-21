import{F as _,i as h,E as g,j as u,k as c,r,o as d,c as l,a as s,b as a,w as f,l as b,v,t as w,d as k}from"./vendor.c8b68da7.js";import{_ as F}from"./index.c66dda8d.js";const x={name:"Login",components:{Form:_,Field:h,ErrorMessage:g},data(){const t=u().shape({username:c().required("Username is required!"),password:c().required("Password is required!")});return{loading:!1,message:"",schema:t}},computed:{loggedIn(){return this.$store.state.auth.status.loggedIn}},created(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin(t){this.loading=!0,this.$store.dispatch("auth/login",t).then(()=>{this.$router.push("/profile")},e=>{this.loading=!1,this.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString()})}}},y={class:"col-md-12"},E={class:"card card-container"},S=s("img",{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",class:"profile-img-card"},null,-1),q={class:"form-group"},L=s("label",{for:"username"},"Username",-1),B={class:"form-group"},C=s("label",{for:"password"},"Password",-1),I={class:"form-group"},M=["disabled"],N={class:"spinner-border spinner-border-sm"},P=s("span",null,"Login",-1),V={class:"form-group"},$={key:0,class:"alert alert-danger",role:"alert"};function D(t,e,U,j,o,m){const n=r("Field"),i=r("ErrorMessage"),p=r("Form");return d(),l("div",y,[s("div",E,[S,a(p,{onSubmit:m.handleLogin,"validation-schema":o.schema},{default:f(()=>[s("div",q,[L,a(n,{name:"username",type:"text",class:"form-control"}),a(i,{name:"username",class:"error-feedback"})]),s("div",B,[C,a(n,{name:"password",type:"password",class:"form-control"}),a(i,{name:"password",class:"error-feedback"})]),s("div",I,[s("button",{class:"btn btn-primary btn-block",disabled:o.loading},[b(s("span",N,null,512),[[v,o.loading]]),P],8,M)]),s("div",V,[o.message?(d(),l("div",$,w(o.message),1)):k("",!0)])]),_:1},8,["onSubmit","validation-schema"])])])}var G=F(x,[["render",D]]);export{G as default};