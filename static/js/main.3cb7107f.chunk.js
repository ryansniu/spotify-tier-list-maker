(this["webpackJsonpspotify-tier-list-maker"]=this["webpackJsonpspotify-tier-list-maker"]||[]).push([[0],{136:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);var r,a,c,s,o,i,l,u,d,m,j,b,h=n(0),p=n.n(h),O=n(15),f=n.n(O),x=n(39),g=n(26),v=n(96),y=n(30),k=n(2),I="SET_TRACKS",S="ADD_TRACKS",C="SET_ALBUMS",w="ADD_ALBUMS",D="SET_ARTISTS",E="ADD_ARTISTS",A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.tracks;switch(t.type){case I:return n;case S:return Object(k.a)(Object(k.a)({},e),{},{next:n.next,items:[].concat(Object(y.a)(e.items),Object(y.a)(n.items))});default:return e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.albums;switch(t.type){case C:return n;case w:return Object(k.a)(Object(k.a)({},e),{},{next:n.next,items:[].concat(Object(y.a)(e.items),Object(y.a)(n.items))});default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.artists;switch(t.type){case D:return n;case E:return Object(k.a)(Object(k.a)({},e),{},{next:n.next,items:[].concat(Object(y.a)(e.items),Object(y.a)(n.items))});default:return e}},B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.d,R=Object(g.e)(Object(g.c)({tracks:A,albums:N,artists:T}),B(Object(g.a)(v.a))),_=n(13),F=n(18),L=n(19),P=n(21),H=n(20),U=n(16),M=(n(111),n(17)),J=n(27),V=n(33),z=n(153),G=n(142),q=n(143),W=n(100),K=n.p+"static/media/music.b2fe7d4d.jpeg",X=n(1),Y=M.a.div(r||(r=Object(U.a)(["\n  background-color: ",";\n  border-radius: 4px;\n"])),(function(e){return e.isDragging?"#535353":"none"})),Q=M.a.small(a||(a=Object(U.a)(["\n  color: ",";\n"])),(function(e){return e.isDragging?"white !important":"#A4A4A4"})),Z=function(e){Object(P.a)(n,e);var t=Object(H.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){var e=this;return Object(X.jsx)(J.b,{draggableId:this.props.item.id,index:this.props.index,children:function(t,n){return Object(X.jsx)(Y,Object(k.a)(Object(k.a)(Object(k.a)({},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,isDragging:n.isDragging,children:Object(X.jsx)(z.a,{style:{margin:0},children:Object(X.jsx)(G.a,{children:Object(X.jsxs)(q.a,{children:[Object(X.jsx)(W.a,{xs:"auto",children:Object(X.jsx)("a",{target:"_blank",href:e.props.item.songURL,rel:"noopener noreferrer",children:e.props.item.imgURL?Object(X.jsx)(z.a.Img,{src:e.props.item.imgURL,alt:""}):Object(X.jsx)("img",{src:K,alt:""})})}),Object(X.jsx)(W.a,{children:Object(X.jsxs)(z.a.Body,{children:[Object(X.jsx)(z.a.Title,{children:e.props.item.title}),e.props.item.subtitle&&Object(X.jsx)(z.a.Text,{children:Object(X.jsx)(Q,{isDragging:n.isDragging,children:e.props.item.subtitle})})]})})]})})})}))}})}}]),n}(p.a.Component),$=n(10),ee=n(102),te=n(144),ne=n(152),re=n(145),ae=n(146),ce=n(147),se=n.p+"static/media/tool.f60e7b86.svg",oe=n.p+"static/media/palette.c614a1c8.svg",ie=(n(113),n(84),M.a.h3.attrs((function(e){return{style:{backgroundColor:e.color}}}))(c||(c=Object(U.a)(["padding: 8px;\nmargin-bottom: 0;\ndisplay: flex;\nmax-width: 21rem;\nuser-select: none;"])))),le=M.a.textarea(s||(s=Object(U.a)(["\n    flex-grow: 1;\n    overflow: hidden;\n    word-break: break-all;\n    min-height: 40px;\n    max-width: 14.25rem;\n    height: 40px;\n    resize: both;\n"]))),ue=M.a.button(o||(o=Object(U.a)(["\n    width: 40px;\n    min-width: 40px;\n    height: 40px;\n    float: right;\n    margin-left: 8px;\n    outline: none;\n    background: transparent no-repeat;\n    border: none;\n    border-radius: 50%;\n"]))),de=function(e){var t=Object(h.useRef)(null),n=Object(h.useState)(e.colData.id),r=Object($.a)(n,2),a=r[0],c=r[1],s=Object(h.useState)(e.colData.title),o=Object($.a)(s,2),i=o[0],l=o[1],u=Object(h.useState)(e.colData.color),d=Object($.a)(u,2),m=d[0],j=d[1],b=Object(V.c)("hex",e.colData.color),O=Object($.a)(b,2),f=O[0],x=O[1],g=Object(h.useState)(!1),v=Object($.a)(g,2),y=v[0],k=v[1],I=Object(h.useState)(!1),S=Object($.a)(I,2),C=S[0],w=S[1],D=e.updateHeader,E=e.presetColors;function A(n){t.current&&!t.current.contains(n.target)&&(k(!1),C&&(w(!1),D(a,i,f.hex)),e.setEditing(!1))}return Object(h.useEffect)((function(){return y&&document.addEventListener("mousedown",A),function(){document.removeEventListener("mousedown",A)}})),Object(h.useEffect)((function(){c(e.colData.id),l(e.colData.title),j(e.colData.color)}),[e.colData]),Object(X.jsx)(ie,{color:f.hex,children:Object(X.jsx)(p.a.Fragment,{children:y?Object(X.jsxs)("form",{style:{width:"100%",display:"flex",alignItems:"center"},onSubmit:function(){k(!1),e.setEditing(!1)},ref:t,children:[Object(X.jsx)(le,{value:i,onChange:function(e){l(e.target.value),D(a,e.target.value,m)}}),Object(X.jsxs)(ee.a,{autoClose:"inside",as:te.a,drop:"right",onToggle:function(e){w(e),e||D(a,i,f.hex)},children:[Object(X.jsx)(ne.a,{placement:"top",overlay:Object(X.jsx)(re.a,{children:"Edit Color"}),children:Object(X.jsx)(ee.a.Toggle,{id:"color-toggle",variant:"secondary",children:Object(X.jsx)(ae.a,{src:oe,fluid:!0,alt:"colors",style:{width:"100%",height:"100%"}})})}),Object(X.jsxs)(ee.a.Menu,{id:"color-dropdown",variant:"dark",children:[Object(X.jsx)(V.a,{height:160,width:240,color:f,onChange:function(e){if(e.hsv.h>=360){var t=e.hsv;t.h=360,e=Object(V.b)("hsv",t)}x(e)},hideRGB:!0,hideHSV:!0,dark:!0}),Object(X.jsx)("div",{id:"preset-colors",children:E.map((function(e,t){return Object(X.jsx)(ce.a,{className:"preset-color-button",id:"color-".concat(t),type:"radio",variant:"light",style:{backgroundColor:e},onChange:function(t){return x(Object(V.b)("hex",e))}},t)}))})]})]})]}):Object(X.jsxs)("div",{style:{width:"100%",display:"flex",alignItems:"center"},children:[Object(X.jsx)("div",{style:{color:"white",textShadow:"0 0 4px black",wordBreak:"break-all",flexGrow:"1",overflow:"hidden"},children:i}),Object(X.jsx)(ne.a,{placement:"top",overlay:Object(X.jsx)(re.a,{children:"Edit Column"}),children:Object(X.jsx)(ue,{onClick:function(){k(!0),e.setEditing(!0)},children:Object(X.jsx)(ae.a,{src:se,fluid:!0,alt:"settings",style:{width:"100%",height:"100%"}})})})]})})})},me=M.a.div(i||(i=Object(U.a)(["\n  border: 4px solid ",";\n  transition: border 0.2s ease;\n  margin: 8px;\n  background-color: none;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){return e.isDragging?e.bgColor:"black"})),je=M.a.div(l||(l=Object(U.a)(["\n  padding: 8px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n  flex-grow: 1;\n  min-width: 18.25rem;\n  min-height: 20rem;\n"])),(function(e){return e.isDraggingOver?e.bgColor:"none"})),be=function(e){Object(P.a)(n,e);var t=Object(H.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"shouldComponentUpdate",value:function(e){return e.items!==this.props.items}},{key:"render",value:function(){return this.props.items.map((function(e,t){return Object(X.jsx)(Z,{item:e,index:t},e.id)}))}}]),n}(p.a.Component),he=function(e){Object(P.a)(n,e);var t=Object(H.a)(n);function n(e){var r;return Object(F.a)(this,n),(r=t.call(this,e)).state={isEditing:!1},r}return Object(L.a)(n,[{key:"getBorderColor",value:function(e){var t=Object(V.b)("hex",e).hsv;return t.v=75,t.a=.75,Object(V.b)("hsv",t).hex}},{key:"getBodyColor",value:function(e){var t=Object(V.b)("hex",e).hsv;return t.v=t.v/2,t.a=.5,Object(V.b)("hsv",t).hex}},{key:"render",value:function(){var e=this;return Object(X.jsx)(J.b,{draggableId:this.props.column.id,index:this.props.index,isDragDisabled:this.state.isEditing,children:function(t,n){return Object(X.jsxs)(me,Object(k.a)(Object(k.a)({},t.draggableProps),{},{ref:t.innerRef,isDragging:n.isDragging,bgColor:e.getBorderColor(e.props.column.color),children:[Object(X.jsx)("div",Object(k.a)(Object(k.a)({},t.dragHandleProps),{},{children:Object(X.jsx)(de,{colData:e.props.column,updateHeader:e.props.updateHeader,deleteHandler:e.props.deleteHandler,presetColors:e.props.presetColors,setEditing:function(t){return e.setState({isEditing:t})}})})),Object(X.jsx)(J.c,{droppableId:e.props.column.id,type:"item",children:function(t,n){return Object(X.jsxs)(je,Object(k.a)(Object(k.a)({ref:t.innerRef},t.droppableProps),{},{isDraggingOver:n.isDraggingOver,bgColor:e.getBodyColor(e.props.column.color),children:[Object(X.jsx)(be,{items:e.props.items}),t.placeholder]}))}})]}))}})}}]),n}(p.a.Component),pe=M.a.div(u||(u=Object(U.a)(["\n  margin: 0 auto;\n  border: 1px solid #1DB954;\n  background-color: none;\n  border-radius: 2px;\n  display: flex;\n  flex-direction: column;\n  width: 19.43rem;\n  height: calc(100vh - 11.5rem);\n  overflow-y: scroll;\n"]))),Oe=M.a.div(d||(d=Object(U.a)(["\n  padding: 8px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n  flex-grow: 1;\n"])),(function(e){return e.isDraggingOver?"#282828":"none"})),fe=function(e){Object(P.a)(n,e);var t=Object(H.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"shouldComponentUpdate",value:function(e){return e.items!==this.props.items}},{key:"render",value:function(){return this.props.items.map((function(e,t){return Object(X.jsx)(Z,{item:e,index:t},e.id)}))}}]),n}(p.a.Component),xe=function(e){Object(P.a)(n,e);var t=Object(H.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){var e=this;return Object(X.jsx)("div",{children:Object(X.jsx)(pe,{children:Object(X.jsx)(J.c,{droppableId:"item-pool",type:"item",children:function(t,n){return Object(X.jsxs)(Oe,Object(k.a)(Object(k.a)({ref:t.innerRef},t.droppableProps),{},{isDraggingOver:n.isDraggingOver,children:[Object(X.jsx)(fe,{items:e.props.items}),t.placeholder]}))}})})})}}]),n}(p.a.Component),ge=M.a.div(m||(m=Object(U.a)(["\n  margin: 0.5rem auto;\n  border: 1px solid #1DB954;\n  background-color: none;\n  border-radius: 2px;\n  display: flex;\n  flex-direction: column;\n  width: 18.25rem;\n"]))),ve=M.a.div(j||(j=Object(U.a)(["\n  padding: 8px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n  flex-grow: 1;\n  height: 4.75rem;\n"])),(function(e){return e.isDraggingOver?"darkred":"none"})),ye=function(e){Object(P.a)(n,e);var t=Object(H.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){return Object(X.jsx)("div",{children:Object(X.jsx)(ge,{children:Object(X.jsx)(J.c,{droppableId:"trash-can",type:"item",children:function(e,t){return Object(X.jsxs)(ve,Object(k.a)(Object(k.a)({ref:e.innerRef},e.droppableProps),{},{isDraggingOver:t.isDraggingOver,children:[Object(X.jsx)("h1",{className:"main-heading",children:"\ud83d\uddd1\ufe0fTrash"}),e.placeholder]}))}})})})}}]),n}(p.a.Component),ke={data:{items:{},columns:{"column-1":{id:"column-1",title:"S",color:"#DC3CA0",itemIds:[]},"column-2":{id:"column-2",title:"A",color:"#F63E02",itemIds:[]},"column-3":{id:"column-3",title:"B",color:"#F5B700",itemIds:[]},"column-4":{id:"column-4",title:"C",color:"#1DB954",itemIds:[]},"item-pool":{id:"item-pool",itemIds:[]}},columnOrder:["column-1","column-2","column-3","column-4"]},containsItem:function(e){},addToItemPool:function(e,t,n,r,a,c){},deleteFromItemPool:function(e,t){}},Ie=p.a.createContext(ke),Se=n(65),Ce=n(149),we=n(150),De=n(75),Ee=n(80),Ae=n.n(Ee),Ne=n(8),Te=n.n(Ne),Be=n(24),Re=n(49),_e=n.n(Re),Fe=n(101),Le=n.n(Fe),Pe=function(){try{var e=JSON.parse(localStorage.getItem("params"));e&&(_e.a.defaults.headers.common.Authorization="Bearer ".concat(e))}catch(t){console.log("Error setting auth",t)}},He=function(){var e=Object(Be.a)(Te.a.mark((function e(t,n){var r;return Te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Pe(),e.next=3,_e.a.get(t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(Be.a)(Te.a.mark((function e(){var t,n,r;return Te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"2d6518050da043db89266dc384c2a3c2","79747dd7e39645f0b19ff179ff55a075",t={headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},auth:{username:"2d6518050da043db89266dc384c2a3c2",password:"79747dd7e39645f0b19ff179ff55a075"}},n={grant_type:"client_credentials"},e.prev=4,e.next=7,_e.a.post("https://accounts.spotify.com/api/token",Le.a.stringify(n),t);case 7:return r=e.sent,e.abrupt("return",r.data);case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(){return e.apply(this,arguments)}}(),Me=function(e){return{type:I,tracks:e}},Je=function(e){return{type:C,albums:e}},Ve=function(e){return{type:D,artists:e}},ze=function(e){return function(){var t=Object(Be.a)(Te.a.mark((function t(n){var r,a,c,s,o;return Te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.spotify.com/v1/search?query=".concat(encodeURIComponent(e),"&type=track,album,artist&limit=24"),t.next=4,He(r);case 4:return a=t.sent,console.log(a),c=a.tracks,s=a.albums,o=a.artists,n(Me(c)),n(Je(s)),t.abrupt("return",n(Ve(o)));case 12:t.prev=12,t.t0=t.catch(0),console.log("error",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},Ge=function(e){return function(){var t=Object(Be.a)(Te.a.mark((function t(n){var r;return Te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("url",e),t.next=4,He(e);case 4:return r=t.sent,console.log("categories",r),t.abrupt("return",n((a=r.tracks,{type:S,tracks:a})));case 9:t.prev=9,t.t0=t.catch(0),console.log("error",t.t0);case 12:case"end":return t.stop()}var a}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},qe=function(e){return function(){var t=Object(Be.a)(Te.a.mark((function t(n){var r;return Te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("url",e),t.next=4,He(e);case 4:return r=t.sent,console.log("categories",r),t.abrupt("return",n((a=r.albums,{type:w,albums:a})));case 9:t.prev=9,t.t0=t.catch(0),console.log("error",t.t0);case 12:case"end":return t.stop()}var a}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},We=function(e){return function(){var t=Object(Be.a)(Te.a.mark((function t(n){var r;return Te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("url",e),t.next=4,He(e);case 4:return r=t.sent,console.log("categories",r),t.abrupt("return",n((a=r.artists,{type:E,artists:a})));case 9:t.prev=9,t.t0=t.catch(0),console.log("error",t.t0);case 12:case"end":return t.stop()}var a}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},Ke=n(148),Xe=n(22),Ye=n.n(Xe),Qe=function(e){var t=e.tracks,n=Object(h.useState)(!1),r=Object($.a)(n,2),a=r[0],c=r[1];return Object(X.jsx)(p.a.Fragment,{children:Object.keys(t).length>0&&Object(X.jsx)("div",{className:"tracks",children:t.items.map((function(e,t){var n=e.id,r="track",s=e.external_urls.spotify,o=e.name,i=e.artists.map((function(e){return e.name})).join(", "),l=Ye.a.isEmpty(e.album.images)?null:e.album.images[0].url;return Object(X.jsx)(p.a.Fragment,{children:Object(X.jsx)(Ie.Consumer,{children:function(t){var u=t.containsItem,d=t.addToItemPool,m=t.deleteFromItemPool;return Object(X.jsx)(z.a,{className:"search-card",style:{margin:"0.25rem 0",backgroundColor:u(n,r)?"black":""},children:Object(X.jsx)(G.a,{children:Object(X.jsxs)(q.a,{children:[Object(X.jsx)(W.a,{xs:"auto",children:Object(X.jsx)("a",{target:"_blank",href:s,rel:"noopener noreferrer",style:{filter:u(n,r)?"brightness(50%)":"brightness(100%)"},children:Ye.a.isEmpty(e.album.images)?Object(X.jsx)("img",{src:K,alt:"default album cover"}):Object(X.jsx)(z.a.Img,{src:l,alt:"track album cover"})})}),Object(X.jsx)(W.a,{children:Object(X.jsxs)(z.a.Body,{children:[Object(X.jsx)(z.a.Title,{style:{color:u(n,r)?"#555":""},children:o}),Object(X.jsx)(z.a.Text,{children:Object(X.jsx)("small",{style:{color:u(n,r)?"#555":""},children:i})}),Object(X.jsx)("div",{children:u(n,r)?Object(X.jsx)("button",{className:"remove-buttons",onClick:function(){m(n,r),c(!a)},children:"\xd7"}):Object(X.jsx)("button",{className:"item-buttons",onClick:function(){d(n,r,s,l,o,i),c(!a)},children:"+"})})]})})]})})})}})},t)}))})})},Ze=function(e){var t=e.albums,n=Object(h.useState)(!1),r=Object($.a)(n,2),a=r[0],c=r[1];return Object(X.jsx)(p.a.Fragment,{children:Object.keys(t).length>0&&Object(X.jsx)("div",{className:"albums",children:t.items.map((function(e,t){var n=e.id,r="album",s=e.external_urls.spotify,o=e.name,i=e.artists.map((function(e){return e.name})).join(", "),l=Ye.a.isEmpty(e.images)?null:e.images[0].url;return Object(X.jsx)(p.a.Fragment,{children:Object(X.jsx)(Ie.Consumer,{children:function(t){var u=t.containsItem,d=t.addToItemPool,m=t.deleteFromItemPool;return Object(X.jsx)(z.a,{className:"search-card",style:{margin:"0.25rem 0",backgroundColor:u(n,r)?"black":""},children:Object(X.jsx)(G.a,{children:Object(X.jsxs)(q.a,{children:[Object(X.jsx)(W.a,{xs:"auto",children:Object(X.jsx)("a",{target:"_blank",href:s,rel:"noopener noreferrer",style:{filter:u(n,r)?"brightness(50%)":"brightness(100%)"},children:Ye.a.isEmpty(e.images)?Object(X.jsx)("img",{src:K,alt:"default album cover"}):Object(X.jsx)(z.a.Img,{src:e.images[0].url,alt:"album cover"})})}),Object(X.jsx)(W.a,{children:Object(X.jsxs)(z.a.Body,{children:[Object(X.jsx)(z.a.Title,{style:{color:u(n,r)?"#555":""},children:o}),Object(X.jsx)(z.a.Text,{children:Object(X.jsx)("small",{style:{color:u(n,r)?"#555":""},children:i})}),Object(X.jsx)("div",{children:u(n,r)?Object(X.jsx)("button",{className:"remove-buttons",onClick:function(){m(n,r),c(!a)},children:"\xd7"}):Object(X.jsx)("button",{className:"item-buttons",onClick:function(){d(n,r,s,l,o,i),c(!a)},children:"+"})})]})}),Object(X.jsx)(W.a,{xs:"auto"})]})})})}})},t)}))})})},$e=function(e){var t=e.artists,n=Object(h.useState)(!1),r=Object($.a)(n,2),a=r[0],c=r[1];return Object(X.jsx)(p.a.Fragment,{children:Object.keys(t).length>0&&Object(X.jsx)("div",{className:"artists",children:t.items.map((function(e,t){var n=e.id,r="artist",s=e.external_urls.spotify,o=e.name,i=Ye.a.isEmpty(e.images)?null:e.images[0].url;return Object(X.jsx)(p.a.Fragment,{children:Object(X.jsx)(Ie.Consumer,{children:function(t){var l=t.containsItem,u=t.addToItemPool,d=t.deleteFromItemPool;return Object(X.jsx)(z.a,{className:"search-card",style:{margin:"0.25rem 0",backgroundColor:l(n,r)?"black":""},children:Object(X.jsx)(G.a,{children:Object(X.jsxs)(q.a,{children:[Object(X.jsx)(W.a,{xs:"auto",children:Object(X.jsx)("a",{target:"_blank",href:s,rel:"noopener noreferrer",style:{filter:l(n,r)?"brightness(50%)":"brightness(100%)"},children:Ye.a.isEmpty(e.images)?Object(X.jsx)("img",{src:K,alt:"default artist"}):Object(X.jsx)(z.a.Img,{src:e.images[0].url,alt:"artist"})})}),Object(X.jsx)(W.a,{children:Object(X.jsxs)(z.a.Body,{children:[Object(X.jsx)(z.a.Title,{style:{color:l(n,r)?"#555":""},children:o}),Object(X.jsx)("div",{children:l(n,r)?Object(X.jsx)("button",{className:"remove-buttons",onClick:function(){d(n,r),c(!a)},children:"\xd7"}):Object(X.jsx)("button",{className:"item-buttons",onClick:function(){u(n,r,s,i,o,null),c(!a)},children:"+"})})]})})]})})})}})},t)}))})})},et=function(e){var t=e.loadMore,n=e.result,r=e.setCategory,a=e.selectedCategory,c=n.tracks,s=n.albums,o=n.artists;return Object(X.jsxs)(p.a.Fragment,{children:[Object(X.jsxs)("div",{className:"search-buttons",children:[!Ye.a.isEmpty(c.items)&&Object(X.jsx)("button",{className:"".concat("tracks"===a?"btn active":"btn"),onClick:function(){return r("tracks")},children:"Songs"}),!Ye.a.isEmpty(s.items)&&Object(X.jsx)("button",{className:"".concat("albums"===a?"btn active":"btn"),onClick:function(){return r("albums")},children:"Albums"}),!Ye.a.isEmpty(o.items)&&Object(X.jsx)("button",{className:"".concat("artists"===a?"btn active":"btn"),onClick:function(){return r("artists")},children:"Artists"})]}),Object(X.jsx)("div",{className:"".concat("tracks"===a?"":"hide"),children:s&&Object(X.jsx)(Qe,{tracks:c})}),Object(X.jsx)("div",{className:"".concat("albums"===a?"":"hide"),children:s&&Object(X.jsx)(Ze,{albums:s})}),Object(X.jsx)("div",{className:"".concat("artists"===a?"":"hide"),children:o&&Object(X.jsx)($e,{artists:o})}),!Ye.a.isEmpty(n[a])&&!Ye.a.isEmpty(n[a].next)&&Object(X.jsx)("div",{className:"load-more",children:Object(X.jsx)(Se.a,{variant:"info",type:"button",onClick:function(){return t(a)},children:"Load More"})})]})},tt=n(151),nt=function(e){var t=Object(h.useState)(""),n=Object($.a)(t,2),r=n[0],a=n[1],c=Object(h.useState)(""),s=Object($.a)(c,2),o=s[0],i=s[1];return Object(X.jsx)("div",{children:Object(X.jsxs)(tt.a,{onSubmit:function(t){t.preventDefault(),""!==r.trim()?(i(""),e.handleSearch(r)):i("Please enter a search term.")},children:[o&&Object(X.jsx)("p",{className:"errorMsg",children:o}),Object(X.jsx)(tt.a.Group,{controlId:"formBasicEmail",children:Object(X.jsx)(tt.a.Control,{type:"search",name:"searchTerm",value:r,placeholder:"Search here!",onChange:function(e){var t=e.target.value;a(t)},autoComplete:"off"})})]})})},rt=function(e){var t=Object(h.useState)(document.createElement("div")),n=Object($.a)(t,1)[0],r=document.querySelector("#loader");return Object(h.useEffect)((function(){r.appendChild(n).classList.add("message")}),[r,n]),Object(h.useEffect)((function(){e.show?(r.classList.remove("hide"),document.body.classList.add("loader-open")):(r.classList.add("hide"),document.body.classList.remove("loader-open"))}),[r,e.show]),f.a.createPortal(e.children,n)},at=Object(x.b)((function(e){return{tracks:e.tracks,albums:e.albums,artists:e.artists}}))((function(e){var t=Object(h.useState)(!1),n=Object($.a)(t,2),r=n[0],a=n[1],c=[e.selectedCategory,e.updateCategory],s=c[0],o=c[1],i=e.isValidSession,l=e.refreshSession,u=function(){var t=Object(Be.a)(Te.a.mark((function t(n){return Te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a(!0),i()){t.next=10;break}return t.prev=2,t.next=5,l();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),console.log(t.t0);case 10:e.dispatch(ze(n)).then((function(){a(!1)}));case 11:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(Be.a)(Te.a.mark((function t(n){var r,c,s,o;return Te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.dispatch,c=e.tracks,s=e.albums,o=e.artists,a(!0),i()){t.next=11;break}return t.prev=3,t.next=6,l();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),console.log(t.t0);case 11:t.t1=n,t.next="tracks"===t.t1?14:"albums"===t.t1?17:"artists"===t.t1?20:23;break;case 14:return t.next=16,r(Ge(c.next));case 16:return t.abrupt("break",23);case 17:return t.next=19,r(qe(s.next));case 19:return t.abrupt("break",23);case 20:return t.next=22,r(We(o.next));case 22:return t.abrupt("break",23);case 23:a(!1);case 24:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}(),m={tracks:e.tracks,albums:e.albums,artists:e.artists};return Object(X.jsx)(p.a.Fragment,{children:Object(X.jsxs)("div",{children:[Object(X.jsx)(nt,{handleSearch:u}),Object(X.jsxs)(rt,{show:r,children:[Object(X.jsx)(Ke.a,{animation:"border",role:"status",style:{marginRight:"0.5rem"}}),"Loading..."]}),Object(X.jsx)(et,{result:m,loadMore:d,setCategory:function(e){o(e)},selectedCategory:s})]})})})),ct=function(e){Object(P.a)(n,e);var t=Object(H.a)(n);function n(e){var r;return Object(F.a)(this,n),(r=t.call(this,e)).updateCategory=function(e){var t=Object(k.a)(Object(k.a)({},r.state),{},{selectedCategory:e});r.setState(t)},r.refreshSession=Object(Be.a)(Te.a.mark((function e(){var t,n,a,c;return Te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ue();case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:t&&(a=(n=t).access_token,c=n.expires_in,localStorage.setItem("params",JSON.stringify(a)),localStorage.setItem("expiry_time",(new Date).getTime()+1e3*c),r.loaded||r.setState({loaded:!0}));case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),r.isValidSession=function(){var e;try{e=JSON.parse(localStorage.getItem("expiry_time"))}catch(n){e="0"}var t=(new Date).getTime();return t>=e&&r.loaded&&r.setState({loaded:!1}),t<e},r.state={loaded:!1,selectedCategory:"tracks"},r}return Object(L.a)(n,[{key:"render",value:function(){return this.isValidSession()?Object(X.jsx)("div",{className:"sidebar-search",children:Object(X.jsx)(at,{isValidSession:this.isValidSession,refreshSession:this.refreshSession,selectedCategory:this.state.selectedCategory,updateCategory:this.updateCategory},this.props.refreshSidebar)}):(this.refreshSession(),Object(X.jsx)("div",{className:"sidebar-search",children:"Loading..."}))}}]),n}(p.a.Component),st=function(){return Object(X.jsx)("h1",{className:"main-heading",children:"Search"})},ot=M.a.div(b||(b=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),it=["#F63E02","#F5B700","#1DB954","#4D9DE0","#360568","#DC3CA0"],lt=function(e){Object(P.a)(n,e);var t=Object(H.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){var e=this.props,t=e.column,n=e.itemMap,r=e.index,a=e.updateHeader,c=t.itemIds.map((function(e){return n[e]}));return Object(X.jsx)(he,{column:t,items:c,index:r,updateHeader:a,presetColors:it})}}]),n}(p.a.PureComponent),ut=!1,dt=!1,mt=!1,jt=!1,bt=["jpeg","png","svg"],ht=function(e){Object(P.a)(n,e);var t=Object(H.a)(n);function n(){var e;Object(F.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state=null!==sessionStorage.getItem("saveState")?JSON.parse(Ae.a.decompress(sessionStorage.getItem("saveState"))):e.context.data,e.saveStateInSessionStorage=function(){return sessionStorage.setItem("saveState",Ae.a.compress(JSON.stringify(e.state)))},e.importFromJson=function(t){var n=new FileReader;n.readAsText(t.target.files[0],"UTF-8"),n.onload=function(t){var n=JSON.parse(t.target.result);if("columnOrder"in n&&"items"in n&&"columns"in n&&"item-pool"in n.columns&&"id"in n.columns["item-pool"]&&"item-pool"===n.columns["item-pool"].id&&"itemIds"in n.columns["item-pool"]&&Array.isArray(n.columns["item-pool"].itemIds)){var r=!0,a=["id","title","color","itemIds"];if(Object.keys(n.columns).forEach((function(e){if(r&&"item-pool"!==e){var t=Object.keys(n.columns[e]);r=t.length===a.length&&t.every((function(e,t){return e===a[t]}))}})),r){var c=n.columnOrder,s=Object.keys(n.columns);if(s.splice(s.indexOf("item-pool"),1),c.length===s.length&&c.every((function(e){return s.includes(e)}))){var o=!0,i=["id","type","songURL","imgURL","title","subtitle"];if(Object.keys(n.items).forEach((function(e){if(o){var t=Object.keys(n.items[e]);o=t.length===i.length&&t.every((function(e,t){return e===i[t]}))}})),o){var l=Object.keys(n.items),u=[];Object.keys(n.columns).forEach((function(e){u=u.concat(n.columns[e].itemIds)})),u.length===l.length&&u.every((function(e){return l.includes(e)}))?(ut=!ut,e.setState(n),console.log(e.state)):console.log("items and itemIds don't match!")}else console.log("missing required item information!")}else console.log("columnOrder and columns don't match!")}else console.log("missing required column information!")}else console.log("missing item pool!")}},e.deleteItem=function(t,n,r){var a=Array.from(r.itemIds);a.splice(n.index,1);var c=Object(k.a)(Object(k.a)({},r),{},{itemIds:a}),s=e.state.items,o=Object.keys(s).reduce((function(e,n){return n!==t&&(e[n]=s[n]),e}),{}),i=Object(k.a)(Object(k.a)({},e.state),{},{items:o,columns:Object(k.a)(Object(k.a)({},e.state.columns),{},Object(_.a)({},c.id,c))});ut=!ut,e.setState(i)},e.updateColHeader=function(t,n,r){var a=e.state.columns[t],c=Object(k.a)(Object(k.a)({},a),{},{title:n,color:r}),s=Object(k.a)(Object(k.a)({},e.state),{},{columns:Object(k.a)(Object(k.a)({},e.state.columns),{},Object(_.a)({},t,c))});e.setState(s)},e.addNewGroup=function(){var t="column-".concat((new Date).getTime()),n=Array.from(e.state.columnOrder).concat(t),r=Object(k.a)(Object(k.a)({},e.state),{},{columnOrder:n});r.columns[t]={id:t,title:"NEW",color:"gray",itemIds:[]},e.setState(r)},e.removeCol=function(t){var n=e.state.items,r=Object.keys(n).reduce((function(r,a){return e.state.columns[t].itemIds.includes(a)||(r[a]=n[a]),r}),{}),a=Array.from(e.state.columnOrder);a.splice(a.indexOf(t),1);var c=e.state.columns,s=Object.keys(c).reduce((function(e,n){return n!==t&&(e[n]=c[n]),e}),{}),o=Object(k.a)(Object(k.a)({},e.state),{},{items:r,columns:s,columnOrder:a});ut=!ut,e.setState(o)},e.resetAllItems=function(){var t=e.state.columns;Object.keys(t).forEach((function(e){"item-pool"!==e&&(t["item-pool"].itemIds=t["item-pool"].itemIds.concat(t[e].itemIds),t[e].itemIds=[])}));var n=Object(k.a)(Object(k.a)({},e.state),{},{columns:t});dt=!dt,e.setState(n)},e.removeAllItems=function(){e.resetAllItems();var t=Object(k.a)(Object(k.a)({},e.state),{},{columns:Object(k.a)(Object(k.a)({},e.state.columns),{},{"item-pool":{id:"item-pool",itemIds:[]}}),items:{}});ut=!ut,e.setState(t)},e.resetAllColumns=function(){e.resetAllItems();var t=Object(k.a)(Object(k.a)({},e.state),{},{columns:Object(k.a)(Object(k.a)({},e.state.columns),{},{"column-1":{id:"column-1",title:"S",color:"#DC3CA0",itemIds:[]},"column-2":{id:"column-2",title:"A",color:"#F63E02",itemIds:[]},"column-3":{id:"column-3",title:"B",color:"#F5B700",itemIds:[]},"column-4":{id:"column-4",title:"C",color:"#1DB954",itemIds:[]}}),columnOrder:["column-1","column-2","column-3","column-4"]});dt=!dt,e.setState(t)},e.resetTierList=function(){e.resetAllItems();var t=Object(k.a)(Object(k.a)({},e.state),{},{columns:Object(k.a)(Object(k.a)({},e.state.columns),{},{"column-1":{id:"column-1",title:"S",color:"#DC3CA0",itemIds:[]},"column-2":{id:"column-2",title:"A",color:"#F63E02",itemIds:[]},"column-3":{id:"column-3",title:"B",color:"#F5B700",itemIds:[]},"column-4":{id:"column-4",title:"C",color:"#1DB954",itemIds:[]},"item-pool":{id:"item-pool",itemIds:[]}}),items:{},columnOrder:["column-1","column-2","column-3","column-4"]});dt=!dt,ut=!ut,e.setState(t)},e.showSearch=function(t){mt=t,e.setState(e.state)},e.showItems=function(t){jt=t,e.setState(e.state)},e.onDragEnd=function(t){var n,r=t.destination,a=t.source,c=t.draggableId,s=t.type;if(r&&(r.droppableId!==a.droppableId||r.index!==a.index))if("column"!==s){var o=e.state.columns[a.droppableId],i=e.state.columns[r.droppableId];if("trash-can"!==r.droppableId)if(o!==i){var l=Array.from(o.itemIds);l.splice(a.index,1);var u=Object(k.a)(Object(k.a)({},o),{},{itemIds:l}),d=Array.from(i.itemIds);d.splice(r.index,0,c);var m=Object(k.a)(Object(k.a)({},i),{},{itemIds:d}),j=Object(k.a)(Object(k.a)({},e.state),{},{columns:Object(k.a)(Object(k.a)({},e.state.columns),{},(n={},Object(_.a)(n,u.id,u),Object(_.a)(n,m.id,m),n))});e.setState(j)}else{var b=Array.from(o.itemIds);b.splice(a.index,1),b.splice(r.index,0,c);var h=Object(k.a)(Object(k.a)({},o),{},{itemIds:b}),p=Object(k.a)(Object(k.a)({},e.state),{},{columns:Object(k.a)(Object(k.a)({},e.state.columns),{},Object(_.a)({},h.id,h))});e.setState(p)}else e.deleteItem(c,a,o)}else{var O=Array.from(e.state.columnOrder);O.splice(a.index,1),O.splice(r.index,0,c);var f=Object(k.a)(Object(k.a)({},e.state),{},{columnOrder:O});e.setState(f)}},e}return Object(L.a)(n,[{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.saveStateInSessionStorage)}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",this.saveStateInSessionStorage),this.context.containsItem=function(t,n){return t in e.state.items&&e.state.items[t].type===n},this.context.addToItemPool=function(t,n,r,a,c,s){if(!e.context.containsItem(t,n)){var o=Object(k.a)(Object(k.a)({},e.state.items),{},Object(_.a)({},t,{id:t,type:n,songURL:r,imgURL:a,title:c,subtitle:s})),i=Array.from(e.state.columns["item-pool"].itemIds).concat(t),l=Object(k.a)(Object(k.a)({},e.state.columns["item-pool"]),{},{itemIds:i}),u=Object(k.a)(Object(k.a)({},e.state),{},{items:o,columns:Object(k.a)(Object(k.a)({},e.state.columns),{},{"item-pool":l})});e.setState(u)}},this.context.deleteFromItemPool=function(t,n){if(e.context.containsItem(t,n)){var r=e.state.items;delete r[t];var a=e.state.columns;Object.keys(a).forEach((function(e){var n=a[e].itemIds.indexOf(t);-1!==n&&a[e].itemIds.splice(n,1)}));var c=Object(k.a)(Object(k.a)({},e.state),{},{items:r,columns:a});console.log(c),dt=!dt,e.setState(c)}}}},{key:"saveAsIMG",value:function(e){var t=function(t){var n=document.createElement("a");n.download="tierlist.".concat(e),n.href=t,n.click()},n=document.getElementById("tierlist_inner"),r=n.getBoundingClientRect().width,a=n.scrollWidth,c=n.scrollHeight;a>r&&(a+=8),"jpeg"===e&&Object(De.a)(n,{backgroundColor:"#121212",pixelRatio:2,width:a,height:c}).then(t).catch((function(e){console.log(e)})),"png"===e&&Object(De.b)(n,{backgroundColor:"#121212",pixelRatio:2,width:a,height:c}).then(t).catch((function(e){console.log(e)})),"svg"===e&&Object(De.c)(n,{backgroundColor:"#121212",width:a,height:c}).then(t).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(X.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[Object(X.jsxs)(ot,{style:{margin:"1.5rem 0 0.5rem 0"},children:[Object(X.jsx)("h1",{className:"title-heading",children:"Spotify Tier List Maker"}),Object(X.jsx)("button",{type:"button",onClick:function(){return e.showItems(!0)},children:"Items"}),Object(X.jsxs)(te.a,{className:"toolbar-button",children:[Object(X.jsx)(ne.a,{placement:"top",overlay:Object(X.jsx)(re.a,{children:"Add Columns"}),children:Object(X.jsx)(Se.a,{size:"lg",variant:"outline-secondary",onClick:this.addNewGroup,children:"Add"})}),Object(X.jsx)(ne.a,{placement:"top",overlay:Object(X.jsx)(re.a,{children:"Delete Columns"}),children:Object(X.jsx)(Se.a,{size:"lg",variant:"outline-secondary",onClick:this.addNewGroup,children:"Delete"})})]}),Object(X.jsx)(ne.a,{placement:"top",overlay:Object(X.jsx)(re.a,{children:"Reset Placements"}),children:Object(X.jsxs)(Ce.a,{className:"toolbar-dropdown",size:"lg",variant:"outline-secondary",menuVariant:"dark",title:"Reset",menuRole:"Reset placements",children:[Object(X.jsx)(ee.a.Item,{as:"button",onClick:this.resetAllItems,children:"Reset All Items"}),Object(X.jsx)(ee.a.Item,{as:"button",onClick:this.removeAllItems,children:"Delete All Items"}),Object(X.jsx)(ee.a.Item,{as:"button",onClick:this.resetAllColumns,children:"Reset All Columns"}),Object(X.jsx)(ee.a.Item,{as:"button",onClick:this.resetTierList,children:"Reset Tier List"})]})}),Object(X.jsx)(ne.a,{placement:"top",overlay:Object(X.jsx)(re.a,{children:"Save Image"}),children:Object(X.jsx)(Ce.a,{className:"toolbar-dropdown",size:"lg",variant:"outline-secondary",menuVariant:"dark",title:"Save",menuRole:"Save as image",children:bt.map((function(t){return Object(X.jsxs)(ee.a.Item,{as:"button",type:"button",onClick:function(){return e.saveAsIMG(t)},children:["Save as .",t]},t)}))})}),Object(X.jsx)(ne.a,{placement:"top",overlay:Object(X.jsx)(re.a,{children:"Import/Export Data"}),children:Object(X.jsxs)(Ce.a,{className:"toolbar-dropdown",size:"lg",variant:"outline-secondary",menuVariant:"dark",title:"Data",menuRole:"Import/export .json data",children:[Object(X.jsx)(ee.a.Item,{href:"data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(this.state))),download:"tierlist.json",id:"export-data",children:"Export as Json"}),Object(X.jsxs)(ee.a.ItemText,{id:"import-data",children:[Object(X.jsx)("label",{style:{width:"100%"},htmlFor:"import_tierlist",children:"Import from Json"}),Object(X.jsx)("br",{}),Object(X.jsx)("input",{style:{display:"flex"},type:"file",id:"import_tierlist",name:"import_tierlist",accept:".json",onChange:this.importFromJson})]})]})}),Object(X.jsx)("button",{type:"button",onClick:function(){return e.showSearch(!0)},children:"Search"})]}),Object(X.jsxs)(J.a,{onDragEnd:this.onDragEnd,children:[Object(X.jsx)("div",{id:"tierlist_outer",children:Object(X.jsx)("div",{id:"tierlist_holder",children:Object(X.jsx)(J.c,{droppableId:"tiers",direction:"horizontal",type:"column",children:function(t){return Object(h.createElement)("div",Object(k.a)(Object(k.a)({},t.droppableProps),{},{ref:t.innerRef,key:dt,id:"tierlist_inner"}),e.state.columnOrder.map((function(t,n){var r=e.state.columns[t];return Object(X.jsx)(lt,{column:r,itemMap:e.state.items,index:n,updateHeader:e.updateColHeader},r.id)})),t.placeholder)}})})}),Object(X.jsxs)(we.a,{id:"itempool-overlay",show:jt,onHide:function(){return e.showItems(!1)},placement:"start",scroll:!0,backdrop:!1,children:[Object(X.jsx)(we.a.Header,{closeButton:!0,closeVariant:"white",style:{paddingBottom:"0.5rem"},children:Object(X.jsx)(we.a.Title,{children:Object(X.jsx)("h1",{className:"main-heading",children:"Items"})})}),Object(X.jsxs)(we.a.Body,{style:{padding:"0.5rem 0 0 0"},children:[Object(X.jsx)(xe,{items:this.state.columns["item-pool"].itemIds.map((function(t){return e.state.items[t]}))}),Object(X.jsx)(ye,{})]})]})]}),Object(X.jsxs)(we.a,{id:"sidebar-overlay",show:mt,onHide:function(){return e.showSearch(!1)},placement:"end",scroll:!0,backdrop:!1,children:[Object(X.jsx)(we.a.Header,{closeButton:!0,closeVariant:"white",style:{paddingBottom:"0.5rem"},children:Object(X.jsx)(we.a.Title,{children:Object(X.jsx)(st,{})})}),Object(X.jsx)(we.a.Body,{style:{padding:"0.5rem 0 0 0",overflowY:"scroll"},children:Object(X.jsx)(ct,{refreshSidebar:ut})})]})]})}}]),n}(p.a.Component);ht.contextType=Ie;var pt=ht;n(135),n(136);f.a.render(Object(X.jsx)(Ie.Provider,{value:ke,children:Object(X.jsx)(x.a,{store:R,children:Object(X.jsx)(pt,{})})}),document.getElementById("root"))},84:function(e,t,n){}},[[137,1,2]]]);
//# sourceMappingURL=main.3cb7107f.chunk.js.map