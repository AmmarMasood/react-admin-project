(this.webpackJsonpfiverapp=this.webpackJsonpfiverapp||[]).push([[0],{150:function(e,t,a){},382:function(e,t,a){e.exports=a(528)},387:function(e,t,a){},528:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=(a(387),a(15)),i=a(287),s=a(41),m=a(68),u=a(333),E=a(128),d=a(352),p=a(625),f=a(627),h=a(620),g=a(619),y=a(332),b=a(25),v="http://localhost:8080",I={login:function(e){var t=e.username,a=e.password,n=new Request("".concat(v,"/api/v1/auth/login"),{method:"POST",body:JSON.stringify({username:t,password:a}),headers:new Headers({"Content-Type":"application/json"})});return fetch(n).then((function(e){if(e.status<200||e.status>=300)throw new Error(e.statusText);return e.json()})).then((function(e){var t=e.token;localStorage.setItem("token",t)}))},logout:function(){return localStorage.removeItem("token"),Promise.resolve()},checkError:function(e){var t=e.status;return 401===t||403===t?(localStorage.removeItem("token"),Promise.reject()):Promise.resolve()},checkAuth:function(){return localStorage.getItem("token")?Promise.resolve():Promise.reject()},getPermissions:function(){return Promise.resolve()}},S=a(621),w=a(622),O=a(600),j=a(601),A=a(629),k=a(624),C=a(635),T=a(633),P=a(606),x=a(636),D=a(632),B=a(630),N=a(623),L=a(321),z=a(637),H=a(532),F=a(19),M=function(){return r.a.createElement("span",null,"Agent Overview")},U=function(e){return r.a.createElement(S.a,Object.assign({title:r.a.createElement(M,null),sort:{order:"AESC"}},e),r.a.createElement(w.a,{rowClick:"show"},r.a.createElement(O.a,{source:"Identifier"}),r.a.createElement(O.a,{source:"Description"}),r.a.createElement(O.a,{source:"Status"}),r.a.createElement(j.a,null)))},_=function(e){return r.a.createElement(A.a,e,r.a.createElement(k.a,{label:"PropertyTypes",source:"propertytypeId",reference:"propertytypes",allowEmpty:!0,alwaysOn:!0},r.a.createElement(C.a,{optionText:"Identifier"})))},V=function(e){return r.a.createElement(T.a,e,r.a.createElement(P.a,null,r.a.createElement(O.a,{source:"id"}),r.a.createElement(O.a,{source:"Identifier"}),r.a.createElement(O.a,{source:"Description"}),r.a.createElement(O.a,{source:"Status"}),r.a.createElement(x.a,{source:"propertyIds",reference:"property"},r.a.createElement(S.a,Object.assign({filters:r.a.createElement(_,null),filterDefaultValues:{agentId:e.id}},e),r.a.createElement(w.a,null,r.a.createElement(O.a,{source:"id"}),r.a.createElement(D.a,{source:"propertytypeId",reference:"propertytypes"},r.a.createElement(O.a,{source:"Identifier"})),r.a.createElement(O.a,{source:"Identifier"}),r.a.createElement(O.a,{source:"value"}),r.a.createElement(O.a,{source:"valueType"}),r.a.createElement(O.a,{source:"lastEdited"}),r.a.createElement(j.a,null)))),r.a.createElement(F.a,{style:{textDecoration:"none"},to:{pathname:"/AgentCopy",state:{agentId:e.id}}},r.a.createElement(H.a,{variant:"contained",color:"primary"},"Agent Copy"))))},R=function(e){var t=e.record;return r.a.createElement("span",null,"User ",t?'"'.concat(t.Name,'"'):"")},X=function(e){return r.a.createElement(B.a,Object.assign({title:r.a.createElement(R,null)},e),r.a.createElement(N.a,null,r.a.createElement(L.a,{disabled:!0,source:"id"}),r.a.createElement(L.a,{source:"Identifier"}),r.a.createElement(L.a,{source:"Description"}),r.a.createElement(C.a,{source:"Status",choices:[{id:"ACTIVE",name:"ACTIVE"},{id:"INACTIVE",name:"INACTIVE"},{id:"DISABLED",name:"DISABLED"}]})))},W=function(e){return r.a.createElement(z.a,e,r.a.createElement(N.a,{redirect:"list"},r.a.createElement(L.a,{disabled:!0,source:"id"}),r.a.createElement(L.a,{source:"Identifier"}),r.a.createElement(L.a,{source:"Description"}),r.a.createElement(C.a,{source:"Status",choices:[{id:"ACTIVE",name:"ACTIVE"},{id:"INACTIVE",name:"INACTIVE"},{id:"DISABLED",name:"DISABLED"}]})))},J=a(615),q=a(616),G=function(e){return r.a.createElement(A.a,e,r.a.createElement(k.a,{label:"Agents",source:"agentId",reference:"agents",allowEmpty:!0,alwaysOn:!0},r.a.createElement(C.a,{optionText:"Identifier"})),r.a.createElement(k.a,{label:"PropertyTypes",source:"propertytypeId",reference:"propertytypes",allowEmpty:!0,alwaysOn:!0},r.a.createElement(C.a,{optionText:"Identifier"})))},K=function(){return r.a.createElement("span",null,"Properties")},Q=function(e){return r.a.createElement(S.a,Object.assign({title:r.a.createElement(K,null),filters:r.a.createElement(G,null)},e),r.a.createElement(w.a,{rowClick:"edit"},r.a.createElement(D.a,{source:"agentId",reference:"agents"},r.a.createElement(O.a,{source:"Identifier"})),r.a.createElement(D.a,{source:"propertytypeId",reference:"propertytypes"},r.a.createElement(O.a,{source:"Identifier"})),r.a.createElement(O.a,{source:"Identifier"}),r.a.createElement(O.a,{source:"value"}),r.a.createElement(O.a,{source:"valueType"}),r.a.createElement(O.a,{source:"lastEdited"}),r.a.createElement(j.a,null)))},Y=function(e){return"TRUE"===e.value||"FALSE"===e.value||"false"===e.value||"true"===e.value},Z=function(e){if(void 0!==e)return!isNaN(e)},$=function(e){var t={};return e.type?"Boolean"===e.type?Y(e)||(t.value=["Please enter a Boolean that is true/false"]):"Numeric"===e.type?Z(e.value)||(t.value=["Please enter a Numeric Value"]):"Text"===e.type&&(Z(e.value)||Y(e))&&(t.value=["Please enter a String Value"]):t.type=["Please select the type of value you want to input"],t},ee=function(e){return r.a.createElement(B.a,e,r.a.createElement(N.a,{redirect:"list",validate:$},r.a.createElement(L.a,{disabled:!0,source:"id"}),r.a.createElement(k.a,{key:"agentId",source:"agentId",reference:"agents"},r.a.createElement(C.a,{optionText:"Identifier"})),r.a.createElement(k.a,{key:"propertytypeId",source:"propertytypeId",reference:"propertytypes"},r.a.createElement(C.a,{optionText:"Identifier"})),r.a.createElement(L.a,{source:"Identifier"}),r.a.createElement(C.a,{source:"type",choices:[{id:"Boolean",name:"Boolean"},{id:"Text",name:"Text"},{id:"Numeric",name:"Numeric"}]}),r.a.createElement(L.a,{source:"value"}),r.a.createElement(L.a,{disabled:!0,source:"lastEdited"})))},te=function(e){return r.a.createElement(z.a,e,r.a.createElement(N.a,{redirect:"list",validate:$},r.a.createElement(L.a,{disabled:!0,source:"id"}),r.a.createElement(L.a,{source:"Identifier"}),r.a.createElement(k.a,{source:"agentId",reference:"agents"},r.a.createElement(C.a,{optionText:"Identifier"})),r.a.createElement(k.a,{source:"propertytypeId",reference:"propertytypes"},r.a.createElement(C.a,{optionText:"Identifier"})),r.a.createElement(C.a,{source:"type",choices:[{id:"Boolean",name:"Boolean"},{id:"Text",name:"Text"},{id:"Numeric",name:"Numeric"}]}),r.a.createElement(L.a,{source:"value"})))},ae=function(){return r.a.createElement("span",null,"Property Types")},ne=function(e){return r.a.createElement(S.a,Object.assign({title:r.a.createElement(ae,null)},e),r.a.createElement(w.a,{rowClick:"edit"},r.a.createElement(O.a,{source:"Identifier"}),r.a.createElement(O.a,{source:"Description"}),r.a.createElement(j.a,null)))},re=function(e){return r.a.createElement(B.a,e,r.a.createElement(N.a,{redirect:"list"},r.a.createElement(L.a,{source:"Identifier"}),r.a.createElement(L.a,{source:"Description"})))},le=function(e){return r.a.createElement(z.a,e,r.a.createElement(N.a,{redirect:"list"},r.a.createElement(L.a,{disabled:!0,source:"id"}),r.a.createElement(L.a,{source:"Identifier"}),r.a.createElement(L.a,{source:"Description"})))},ce=a(608),oe=function(){return r.a.createElement("span",null,"User")},ie=function(e){return r.a.createElement(S.a,Object.assign({title:r.a.createElement(oe,null)},e),r.a.createElement(w.a,{rowClick:"edit"},r.a.createElement(O.a,{source:"id"}),r.a.createElement(O.a,{source:"Username"}),r.a.createElement(j.a,null)))},se=function(e){return r.a.createElement(B.a,e,r.a.createElement(N.a,null,r.a.createElement(L.a,{disabled:!0,source:"id"}),r.a.createElement(L.a,{source:"Username"}),r.a.createElement(ce.a,{label:"Old Password",source:"OldPassword"}),r.a.createElement(ce.a,{label:"New Password",source:"NewPassword"})))},me=a(609),ue=function(){return r.a.createElement("span",null,"System")},Ee=function(e){return r.a.createElement(S.a,Object.assign({title:r.a.createElement(ue,null)},e),r.a.createElement(w.a,{rowClick:"edit"},r.a.createElement(O.a,{source:"id"}),r.a.createElement(O.a,{source:"Name"}),r.a.createElement(me.a,{source:"IframeUrl"}),r.a.createElement(j.a,null)))},de=function(e){return r.a.createElement(B.a,e,r.a.createElement(N.a,{redirect:"list"},r.a.createElement(L.a,{source:"id",disabled:!0}),r.a.createElement(L.a,{source:"Name",disabled:!0}),r.a.createElement(L.a,{source:"IframeUrl"})))},pe=a(351),fe=a(225),he=a.n(fe),ge=a(8),ye=a(5),be=a(165),ve=a(83),Ie=a(324),Se=a(325),we=a(353),Oe=a(175),je=a(599),Ae=a(536),ke=a(540),Ce=a(610),Te=a(613),Pe=a(611),xe=a(612),De=a(174),Be=a.n(De),Ne=a(326),Le=a.n(Ne),ze=a(327),He=a.n(ze),Fe=function(e){function t(e){var a;return Object(be.a)(this,t),(a=Object(Ie.a)(this,Object(Se.a)(t).call(this,e))).menuList=[{name:"A",label:"Agents",icon:r.a.createElement(Le.a,{fontSize:"small"})},{name:"B",label:"Settings",icon:r.a.createElement(He.a,{fontSize:"small"})},{name:"D",label:"Dashboard",icon:r.a.createElement(Be.a,{fontSize:"small"})}],a.state={openA:!1,openB:!1,openD:!1},a}return Object(we.a)(t,e),Object(ve.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.resources,n=t.onMenuClick;return r.a.createElement("div",null,r.a.createElement(je.a,{component:"nav"},r.a.createElement("div",{key:this.menuList[2].name},r.a.createElement(Ae.a,{button:!0,onClick:function(){e.setState({openD:!e.state.openD})}},r.a.createElement(ke.a,null,this.menuList[2].icon),r.a.createElement(Ce.a,{primary:this.menuList[2].label}),this.state.openD?r.a.createElement(Pe.a,null):r.a.createElement(xe.a,null)),r.a.createElement(Te.a,{in:this.state.openD,timeout:"auto",unmountOnExit:!0},r.a.createElement(je.a,{component:"div",disablePadding:!0},a.filter((function(t){return t.options.menu===e.menuList[2].name})).map((function(t,a){return r.a.createElement(Oe.a,{key:"m"+a,to:"/".concat(t.name),primaryText:t.options.label||t.name,leftIcon:t.options.icon?t.options.icon:void 0,onClick:n,className:e.props.classes.nested})}))))),r.a.createElement("div",{key:this.menuList[0].name},r.a.createElement(Ae.a,{button:!0,onClick:function(){e.setState({openA:!e.state.openA})}},r.a.createElement(ke.a,null,this.menuList[0].icon),r.a.createElement(Ce.a,{primary:this.menuList[0].label}),this.state.openA?r.a.createElement(Pe.a,null):r.a.createElement(xe.a,null)),r.a.createElement(Te.a,{in:this.state.openA,timeout:"auto",unmountOnExit:!0},r.a.createElement(je.a,{component:"div",disablePadding:!0},a.filter((function(t){return t.options.menu===e.menuList[0].name})).map((function(t,a){return r.a.createElement(Oe.a,{key:"m"+a,to:"/".concat(t.name),primaryText:t.options.label||t.name,leftIcon:t.options.icon?t.options.icon:void 0,onClick:n,className:e.props.classes.nested})}))))),r.a.createElement("div",{key:this.menuList[1].name},r.a.createElement(Ae.a,{button:!0,onClick:function(){e.setState({openB:!e.state.openB})}},r.a.createElement(ke.a,null,this.menuList[1].icon),r.a.createElement(Ce.a,{primary:this.menuList[1].label}),this.state.openB?r.a.createElement(Pe.a,null):r.a.createElement(xe.a,null)),r.a.createElement(Te.a,{in:this.state.openB,timeout:"auto",unmountOnExit:!0},r.a.createElement(je.a,{component:"div",disablePadding:!0},a.filter((function(t){return t.options.menu===e.menuList[1].name})).map((function(t,a){return r.a.createElement(Oe.a,{key:"n"+a,to:"/".concat(t.name),primaryText:t.options.label||t.name,leftIcon:t.options.icon?t.options.icon:void 0,onClick:n,className:e.props.classes.nested})})))))))}}]),t}(n.Component),Me=Object(b.i)(Fe),Ue=a(345),_e=a.n(Ue),Ve=a(347),Re=a.n(Ve),Xe=a(348),We=a.n(Xe),Je=a(346),qe=a.n(Je),Ge=a(349),Ke=a.n(Ge),Qe=a(350),Ye=a.n(Qe),Ze=a(130),$e=a(328),et=a.n($e),tt=a(329),at=a.n(tt),nt=a(330),rt=a.n(nt),lt=a(331),ct=a.n(lt),ot=a(595),it=a(82),st=(a(150),function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");fetch("".concat(v,"/system/4"),{method:"get",headers:new Headers({"X-Authorization":"Bearer ".concat(e)})}).then((function(e){return e.json()})).then((function(e){var t=e.IframeUrl.replace("watch?v=","embed/");l(t)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{fontSize:"1.25rem",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"500",color:"white",lineHeight:"1.6",letterSpacing:"0.0075em"}},"System Health"),r.a.createElement(ot.a,{style:{height:"80vh",width:"100%"}},r.a.createElement(it.a,{url:a,width:"100%",height:"100%",id:"myId",allowFullScreen:!0,className:"myClassname",display:"initial",position:"relative"})))}),mt=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");fetch("".concat(v,"/system/3"),{method:"get",headers:new Headers({"X-Authorization":"Bearer ".concat(e)})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.IframeUrl.replace("watch?v=","embed/");l(t)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{fontSize:"1.25rem",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"500",color:"white",lineHeight:"1.6",letterSpacing:"0.0075em"}},"Market Analysis"),r.a.createElement(ot.a,{style:{height:"80vh",width:"100%"}},r.a.createElement(it.a,{url:a,width:"100%",height:"100%",id:"myId",allowFullScreen:!0,className:"myClassname",display:"initial",position:"relative"})))},ut=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");fetch("".concat(v,"/system/2"),{method:"get",headers:new Headers({"X-Authorization":"Bearer ".concat(e)})}).then((function(e){return e.json()})).then((function(e){var t=e.IframeUrl.replace("watch?v=","embed/");l(t)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{fontSize:"1.25rem",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"500",color:"white",lineHeight:"1.6",letterSpacing:"0.0075em"}},"Agent Performance"),r.a.createElement(ot.a,{style:{height:"80vh",width:"100%"}},r.a.createElement(it.a,{url:a,width:"100%",height:"100%",id:"myId",allowFullScreen:!0,className:"myClassname",display:"initial",position:"relative"})))},Et=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");fetch("".concat(v,"/system/1"),{method:"get",headers:new Headers({"X-Authorization":"Bearer ".concat(e)})}).then((function(e){return e.json()})).then((function(e){var t=e.IframeUrl.replace("watch?v=","embed/");l(t)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{fontSize:"1.25rem",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"500",color:"white",lineHeight:"1.6",letterSpacing:"0.0075em"}},"Status Overview"),r.a.createElement(ot.a,{style:{height:"80vh",width:"100%"}},r.a.createElement(it.a,{url:a,width:"100%",height:"100%",id:"myId",allowFullScreen:!0,className:"myClassname",display:"initial",position:"relative"})))},dt=a(98),pt=a(543),ft=a(535),ht=a(538),gt=a(628),yt=a(614),bt=Object(dt.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:150},selectEmpty:{marginTop:e.spacing(2)}}})),vt=Object(b.i)((function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),m=i[0],u=i[1],E=Object(n.useState)([]),d=Object(s.a)(E,2),p=d[0],f=d[1],h=bt();Object(n.useEffect)((function(){var t=localStorage.getItem("token");fetch("".concat(v,"/agents?_end=25&_order=DESC&_sort=id&_start=0"),{method:"get",headers:new Headers({"X-Authorization":"Bearer ".concat(t)})}).then((function(e){return e.json()})).then((function(t){f(t),c(e.history.location.state.agentId)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{fontSize:"1.25rem",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"500",color:"white",lineHeight:"1.6",letterSpacing:"0.0075em"}},"Agent Copy"),r.a.createElement(ot.a,null,r.a.createElement(ht.a,{className:h.formControl},r.a.createElement(pt.a,{id:"demo-simple-select-label"},"Copy from"),r.a.createElement(gt.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:l,onChange:function(e){c(e.target.value)}},p.map((function(e){return r.a.createElement(ft.a,{key:e.id,value:e.id},e.Identifier)})))),r.a.createElement(yt.a,null),r.a.createElement(ht.a,{className:h.formControl},r.a.createElement(pt.a,{id:"demo-simple-select-label"},"Copy to"),r.a.createElement(gt.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:m,onChange:function(e){u(e.target.value)}},p.map((function(e){return r.a.createElement(ft.a,{key:e.id,value:e.id},e.Identifier)})))),r.a.createElement(yt.a,null),r.a.createElement(H.a,{style:{marginTop:"30px",marginLeft:"10px",marginBottom:"10px"},variant:"contained",color:"primary",onClick:function(){if(0!==l.length&&0!==m.length){var t={agent1:l,agent2:m},a=localStorage.getItem("token");fetch("".concat(v,"/agentCopy/"),{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json","X-Authorization":"Bearer ".concat(a)},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){c(""),u(""),console.log("done"),e.history.push("/agents")}))}else console.log("cant")}},"Copy")))})),It=a(35),St=Object(It.a)(),wt=Object(y.a)(v,(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.headers||(t.headers=new Headers({Accept:"application/json"}));var a=localStorage.getItem("token");return t.headers.set("X-Authorization","Bearer ".concat(a)),m.a.fetchJson(e,t)})),Ot=function(){var e=r.a.useState({lightMode:!1}),t=Object(s.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){localStorage.getItem("lightMode")===!0+""?l({lightMode:!0}):l({lightMode:!1})}),[]);var c=r.a.forwardRef((function(e,t){var n;e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{control:r.a.createElement(q.a,{checked:a.lightMode,onChange:(n="lightMode",function(e){localStorage.setItem("lightMode",e.target.checked+""),l(Object(i.a)({},a,Object(o.a)({},n,e.target.checked)))}),value:"lightMode",color:"#212121"}),style:{marginLeft:"5px"},label:"Light Mode"}))})),m=function(e){return r.a.createElement(u.a,e,r.a.createElement(c,null))},y=Object(ye.a)((function(e){return{nested:{paddingLeft:e.spacing(3)}}}))(Me),v=Object(b.i)(Object(ge.c)((function(e){return{resources:Object(E.d)(e)}}))(y)),S=function(e){return r.a.createElement(d.a,Object.assign({},e,{userMenu:r.a.createElement(m,null)}))},w=Object(pe.a)({palette:{type:a.lightMode?"light":"dark",primary:he.a,secondary:he.a}}),O=[r.a.createElement(b.b,{exact:!0,path:"/AgentCopy",component:vt}),r.a.createElement(b.b,{exact:!0,path:"/status_Overview",component:Et}),r.a.createElement(b.b,{exact:!0,path:"/agent_Performance",component:ut}),r.a.createElement(b.b,{exact:!0,path:"/market_Analysis",component:mt}),r.a.createElement(b.b,{exact:!0,path:"/system_Health",component:st})];return r.a.createElement(h.a,{history:St,theme:w,layout:function(e){return r.a.createElement(p.a,Object.assign({},e,{appBar:S,menu:v}))},customRoutes:O,loginPage:function(e){return r.a.createElement(f.a,Object.assign({},e,{backgroundImage:"",style:{backgroundColor:localStorage.getItem("lightMode")===!0+""?"":"#424242"}}))},authProvider:I,dataProvider:wt},r.a.createElement(g.a,{name:"status_Overview",options:{label:"Status Overview",menu:"D",icon:r.a.createElement(Ze.Icon,{icon:et.a,width:"1.1em",height:"1.1em"})}}),r.a.createElement(g.a,{name:"agent_Performance",options:{label:"Agent Performance",menu:"D",icon:r.a.createElement(Ze.Icon,{icon:at.a,width:"1.1em",height:"1.1em"})}}),r.a.createElement(g.a,{name:"market_Analysis",options:{label:"Market Analysis",menu:"D",icon:r.a.createElement(Ze.Icon,{icon:rt.a,width:"1.1em",height:"1.1em"})}}),r.a.createElement(g.a,{name:"system_Health",options:{label:"System Health",menu:"D",icon:r.a.createElement(Ze.Icon,{icon:ct.a,width:"1.1em",height:"1.1em"})}}),r.a.createElement(g.a,{name:"agents",list:U,edit:X,create:W,show:V,options:{label:"Agent Overview",menu:"A",icon:r.a.createElement(_e.a,{fontSize:"small"})}}),r.a.createElement(g.a,{name:"AgentCopy",options:{label:"Agent Copy",menu:"f",icon:r.a.createElement(qe.a,{fontSize:"small"})}}),r.a.createElement(g.a,{name:"propertytypes",list:ne,edit:re,create:le,options:{label:"Property Types",menu:"A",icon:r.a.createElement(Re.a,{fontSize:"small"})}}),r.a.createElement(g.a,{name:"property",list:Q,edit:ee,create:te,options:{label:"Properties",menu:"A",icon:r.a.createElement(We.a,{fontSize:"small"})}}),r.a.createElement(g.a,{name:"admin",list:ie,edit:se,options:{label:"User",menu:"B",icon:r.a.createElement(Ke.a,{fontSize:"small"})}}),r.a.createElement(g.a,{name:"system",list:Ee,edit:de,options:{label:"System",menu:"B",icon:r.a.createElement(Ye.a,{fontSize:"small"})}}))};c.a.render(r.a.createElement(Ot,null),document.getElementById("root"))}},[[382,1,2]]]);
//# sourceMappingURL=main.31758fd6.chunk.js.map