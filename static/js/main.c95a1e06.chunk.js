(this["webpackJsonpspotify-tier-list-maker"]=this["webpackJsonpspotify-tier-list-maker"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),s=n(22),i=n.n(s),o=n(24),l=n(20),u=n(56),d=n(21),j=n(4),b="SET_TRACKS",m="ADD_TRACKS",p="SET_ALBUMS",O="ADD_ALBUMS",h="SET_ARTISTS",x="ADD_ARTISTS",f="SET_PLAYLIST",g="ADD_PLAYLIST",v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.tracks;switch(t.type){case b:return n;case m:return Object(j.a)(Object(j.a)({},e),{},{next:n.next,items:[].concat(Object(d.a)(e.items),Object(d.a)(n.items))});default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.albums;switch(t.type){case p:return n;case O:return Object(j.a)(Object(j.a)({},e),{},{next:n.next,items:[].concat(Object(d.a)(e.items),Object(d.a)(n.items))});default:return e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.artists;switch(t.type){case h:return n;case x:return Object(j.a)(Object(j.a)({},e),{},{next:n.next,items:[].concat(Object(d.a)(e.items),Object(d.a)(n.items))});default:return e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.playlists;switch(t.type){case f:return n;case g:return Object(j.a)(Object(j.a)({},e),{},{next:n.next,items:[].concat(Object(d.a)(e.items),Object(d.a)(n.items))});default:return e}},I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,S=Object(l.e)(Object(l.c)({tracks:v,albums:y,artists:k,playlist:w}),I(Object(l.a)(u.a))),C=n(25),D=n(16),E=n(17),T=n(19),N=n(18),_=n(13),L=(n(75),n(14)),A=n(23),B=n(111),P=n(105),R=n(106),H=n(60),M=n.p+"static/media/music.b2fe7d4d.jpeg";function U(){var e=Object(_.a)(["\n  margin-bottom: 8px;\n  background-color: ",";\n"]);return U=function(){return e},e}var F=L.a.div(U(),(function(e){return e.isDragging?"lightgreen":"none"})),G=function(e){Object(T.a)(n,e);var t=Object(N.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsx)(A.b,{draggableId:this.props.item.id,index:this.props.index,children:function(t,n){return Object(r.jsx)(F,Object(j.a)(Object(j.a)(Object(j.a)({},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,isDragging:n.isDragging,children:Object(r.jsx)(B.a,{style:{margin:0},children:Object(r.jsx)(P.a,{children:Object(r.jsxs)(R.a,{noGutters:!0,children:[Object(r.jsx)(H.a,{xs:"auto",children:Object(r.jsx)("a",{target:"_blank",href:e.props.item.songURL,rel:"noopener noreferrer",children:e.props.item.imgURL?Object(r.jsx)(B.a.Img,{src:e.props.item.imgURL,alt:""}):Object(r.jsx)("img",{src:M,alt:""})})}),Object(r.jsx)(H.a,{children:Object(r.jsxs)(B.a.Body,{children:[Object(r.jsx)(B.a.Title,{children:e.props.item.title}),e.props.item.subtitle&&Object(r.jsx)(B.a.Text,{children:Object(r.jsx)("small",{children:e.props.item.subtitle})})]})})]})})})}))}})}}]),n}(c.a.Component),V=n(10),J=n(109),W=n(107),z=n(108),q=n.p+"static/media/tool.f60e7b86.svg",K=n.p+"static/media/palette.c614a1c8.svg";n(44);function X(){var e=Object(_.a)(["\n    width: 40px;\n    min-width: 40px;\n    height: 40px;\n    float: right;\n    margin-left: 8px;\n    outline: none;\n    background: transparent no-repeat;\n    border: none;\n    border-radius: 50%;\n"]);return X=function(){return e},e}function Y(){var e=Object(_.a)(["\n    flex-grow: 1;\n    overflow: hidden;\n    word-break: break-all;\n    min-height: 40px;\n    max-width: 17rem;\n    height: 40px;\n    resize: both;\n"]);return Y=function(){return e},e}function Q(){var e=Object(_.a)(["\n    background-color: ",";\n    padding: 8px;\n    margin-bottom: 0;\n    display: flex;\n    max-width: 21rem;\n    user-select: none;\n"]);return Q=function(){return e},e}var Z=L.a.h3(Q(),(function(e){return e.color})),$=L.a.textarea(Y()),ee=L.a.button(X()),te=function(e){var t=Object(a.useRef)(null),n=Object(a.useState)(e.colData.id),s=Object(V.a)(n,1)[0],i=Object(a.useState)(e.colData.title),o=Object(V.a)(i,2),l=o[0],u=o[1],d=Object(a.useState)(e.colData.color),j=Object(V.a)(d,2),b=j[0],m=j[1],p=Object(a.useState)(!1),O=Object(V.a)(p,2),h=O[0],x=O[1],f=e.updateHeader,g=e.deleteHandler;function v(e){t.current&&!t.current.contains(e.target)&&x(!1)}return Object(a.useEffect)((function(){return h&&document.addEventListener("mousedown",v),function(){document.removeEventListener("mousedown",v)}})),Object(r.jsx)(Z,{color:b,children:Object(r.jsx)(c.a.Fragment,{children:h?Object(r.jsxs)("form",{style:{width:"100%",display:"flex",alignItems:"center"},onSubmit:function(){return x(!1)},ref:t,children:[Object(r.jsx)($,{value:l,onChange:function(e){u(e.target.value),f(s,e.target.value,b)}}),Object(r.jsxs)(J.a,{as:W.a,drop:"right",children:[Object(r.jsx)(J.a.Toggle,{id:"color-toggle",children:Object(r.jsx)(z.a,{src:K,fluid:!0,alt:"colors",style:{width:"100%",height:"100%"}})}),Object(r.jsxs)(J.a.Menu,{children:[Object(r.jsx)(J.a.Item,{style:{backgroundColor:"gray"},onClick:function(){m("gray"),f(s,l,"gray")},children:"Gray"}),Object(r.jsx)(J.a.Item,{style:{backgroundColor:"blue"},onClick:function(){m("blue"),f(s,l,"blue")},children:"Blue"}),Object(r.jsx)(J.a.Item,{style:{backgroundColor:"purple"},onClick:function(){m("purple"),f(s,l,"purple")},children:"Purple"}),Object(r.jsx)(J.a.Divider,{}),Object(r.jsx)(J.a.Item,{style:{backgroundColor:"#1DB954"},onClick:function(){m("#1DB954"),f(s,l,"#1DB954")},children:"Default"}),Object(r.jsx)(J.a.Divider,{}),Object(r.jsx)(J.a.Item,{onClick:function(){g(s)},children:"DELETE THIS"})]})]})]}):Object(r.jsxs)("div",{style:{width:"100%",display:"flex",alignItems:"center"},children:[Object(r.jsx)("div",{style:{color:"white",textShadow:"0 0 4px black",wordBreak:"break-all",flexGrow:"1",overflow:"hidden"},children:l}),Object(r.jsx)(ee,{onClick:function(){return x(!0)},children:Object(r.jsx)(z.a,{src:q,fluid:!0,alt:"settings",style:{width:"100%",height:"100%"}})})]})})})};function ne(){var e=Object(_.a)(["\n  padding: 8px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n  flex-grow: 1;\n  min-height: 400px;\n"]);return ne=function(){return e},e}function re(){var e=Object(_.a)(["\n  margin: 8px;\n  border: 1px solid #1DB954;\n  background-color: none;\n  border-radius: 2px;\n  display: flex;\n  flex-direction: column;\n"]);return re=function(){return e},e}var ae=L.a.div(re()),ce=L.a.div(ne(),(function(e){return e.isDraggingOver?"lightgrey":"none"})),se=function(e){Object(T.a)(n,e);var t=Object(N.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"shouldComponentUpdate",value:function(e){return e.items!==this.props.items}},{key:"render",value:function(){return this.props.items.map((function(e,t){return Object(r.jsx)(G,{item:e,index:t},e.id)}))}}]),n}(c.a.Component),ie=function(e){Object(T.a)(n,e);var t=Object(N.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsx)(A.b,{draggableId:this.props.column.id,index:this.props.index,children:function(t){return Object(r.jsxs)(ae,Object(j.a)(Object(j.a)({},t.draggableProps),{},{ref:t.innerRef,children:[Object(r.jsx)("div",Object(j.a)(Object(j.a)({},t.dragHandleProps),{},{children:Object(r.jsx)(te,{colData:e.props.column,updateHeader:e.props.updateHeader,deleteHandler:e.props.deleteHandler})})),Object(r.jsx)(A.c,{droppableId:e.props.column.id,type:"item",children:function(t,n){return Object(r.jsxs)(ce,Object(j.a)(Object(j.a)({ref:t.innerRef},t.droppableProps),{},{isDraggingOver:n.isDraggingOver,children:[Object(r.jsx)(se,{items:e.props.items}),t.placeholder]}))}})]}))}})}}]),n}(c.a.Component);function oe(){var e=Object(_.a)(["\n  padding: 8px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n  flex-grow: 1;\n  min-height: 16rem;\n"]);return oe=function(){return e},e}function le(){var e=Object(_.a)(["\n  margin: 8px;\n  border: 1px solid #1DB954;\n  background-color: none;\n  border-radius: 2px;\n  display: flex;\n  flex-direction: column;\n  min-width: 21.1rem;\n"]);return le=function(){return e},e}var ue=L.a.div(le()),de=L.a.div(oe(),(function(e){return e.isDraggingOver?"lightgrey":"none"})),je=function(e){Object(T.a)(n,e);var t=Object(N.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"shouldComponentUpdate",value:function(e){return e.items!==this.props.items}},{key:"render",value:function(){return this.props.items.map((function(e,t){return Object(r.jsx)(G,{item:e,index:t},e.id)}))}}]),n}(c.a.Component),be=function(e){Object(T.a)(n,e);var t=Object(N.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"main-heading",children:"Items"}),Object(r.jsx)(ue,{children:Object(r.jsx)(A.c,{droppableId:"item-pool",type:"item",children:function(t,n){return Object(r.jsxs)(de,Object(j.a)(Object(j.a)({ref:t.innerRef},t.droppableProps),{},{isDraggingOver:n.isDraggingOver,children:[Object(r.jsx)(je,{items:e.props.items}),t.placeholder]}))}})})]})}}]),n}(c.a.Component),me={data:{items:{},columns:{"column-1":{id:"column-1",title:"S",color:"purple",itemIds:[]},"column-2":{id:"column-2",title:"A",color:"#1DB954",itemIds:[]},"column-3":{id:"column-3",title:"B",color:"blue",itemIds:[]},"column-4":{id:"column-4",title:"C",color:"grey",itemIds:[]},"item-pool":{id:"item-pool",itemIds:[]}},columnOrder:["column-1","column-2","column-3","column-4"]},containsItem:function(e){},addToItemPool:function(e,t,n,r,a){}},pe=c.a.createContext(me),Oe=n(8),he=n.n(Oe),xe=n(11),fe=n(29),ge=n.n(fe),ve=n(65),ye=n.n(ve),ke=function(){try{var e=JSON.parse(localStorage.getItem("params"));e&&(ge.a.defaults.headers.common.Authorization="Bearer ".concat(e))}catch(t){console.log("Error setting auth",t)}},we=function(){var e=Object(xe.a)(he.a.mark((function e(t,n){var r;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ke(),e.next=3,ge.a.get(t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(xe.a)(he.a.mark((function e(){var t,n,r;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"2d6518050da043db89266dc384c2a3c2","79747dd7e39645f0b19ff179ff55a075",t={headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},auth:{username:"2d6518050da043db89266dc384c2a3c2",password:"79747dd7e39645f0b19ff179ff55a075"}},n={grant_type:"client_credentials"},e.prev=4,e.next=7,ge.a.post("https://accounts.spotify.com/api/token",ye.a.stringify(n),t);case 7:return r=e.sent,e.abrupt("return",r.data);case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(){return e.apply(this,arguments)}}(),Se=function(e){return{type:b,tracks:e}},Ce=function(e){return{type:p,albums:e}},De=function(e){return{type:h,artists:e}},Ee=function(e){return{type:f,playlists:e}},Te=function(e){return function(){var t=Object(xe.a)(he.a.mark((function t(n){var r,a,c,s,i,o;return he.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.spotify.com/v1/search?query=".concat(encodeURIComponent(e),"&type=track,album,artist,playlist&limit=24"),t.next=4,we(r);case 4:return a=t.sent,console.log(a),c=a.tracks,s=a.albums,i=a.artists,o=a.playlists,n(Se(c)),n(Ce(s)),n(De(i)),t.abrupt("return",n(Ee(o)));case 13:t.prev=13,t.t0=t.catch(0),console.log("error",t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()},Ne=function(e){return function(){var t=Object(xe.a)(he.a.mark((function t(n){var r;return he.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("url",e),t.next=4,we(e);case 4:return r=t.sent,console.log("categoriess",r),t.abrupt("return",n((a=r.tracks,{type:m,tracks:a})));case 9:t.prev=9,t.t0=t.catch(0),console.log("error",t.t0);case 12:case"end":return t.stop()}var a}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},_e=function(e){return function(){var t=Object(xe.a)(he.a.mark((function t(n){var r;return he.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("url",e),t.next=4,we(e);case 4:return r=t.sent,console.log("categoriess",r),t.abrupt("return",n((a=r.albums,{type:O,albums:a})));case 9:t.prev=9,t.t0=t.catch(0),console.log("error",t.t0);case 12:case"end":return t.stop()}var a}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},Le=function(e){return function(){var t=Object(xe.a)(he.a.mark((function t(n){var r;return he.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("url",e),t.next=4,we(e);case 4:return r=t.sent,console.log("categoriess",r),t.abrupt("return",n((a=r.artists,{type:x,artists:a})));case 9:t.prev=9,t.t0=t.catch(0),console.log("error",t.t0);case 12:case"end":return t.stop()}var a}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},Ae=function(e){return function(){var t=Object(xe.a)(he.a.mark((function t(n){var r;return he.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("url",e),t.next=4,we(e);case 4:return r=t.sent,console.log("categoriess",r),t.abrupt("return",n((a=r.playlists,{type:g,playlists:a})));case 9:t.prev=9,t.t0=t.catch(0),console.log("error",t.t0);case 12:case"end":return t.stop()}var a}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},Be=n(64),Pe=n(9),Re=n.n(Pe),He=function(e){var t=e.tracks;return Object(r.jsx)(c.a.Fragment,{children:Object.keys(t).length>0&&Object(r.jsx)("div",{className:"tracks",children:t.items.map((function(e,t){var n=e.id,a=e.external_urls.spotify,s=e.name,i=e.artists.map((function(e){return e.name})).join(", "),o=Re.a.isEmpty(e.album.images)?null:e.album.images[0].url;return Object(r.jsx)(c.a.Fragment,{children:Object(r.jsx)(pe.Consumer,{children:function(t){var c=t.containsItem,l=t.addToItemPool;return Object(r.jsx)(B.a,{style:{maxWidth:"22rem",width:"22rem",marginLeft:"0.5rem",marginRight:"0.5rem"},children:Object(r.jsx)(P.a,{children:Object(r.jsxs)(R.a,{noGutters:!0,children:[Object(r.jsx)(H.a,{xs:"auto",children:Object(r.jsx)("a",{target:"_blank",href:a,rel:"noopener noreferrer",children:Re.a.isEmpty(e.album.images)?Object(r.jsx)("img",{src:M,alt:""}):Object(r.jsx)(B.a.Img,{src:o,alt:""})})}),Object(r.jsx)(H.a,{children:Object(r.jsxs)(B.a.Body,{children:[Object(r.jsx)(B.a.Title,{children:s}),Object(r.jsx)(B.a.Text,{children:Object(r.jsx)("small",{children:i})})]})}),Object(r.jsx)(H.a,{xs:"auto",children:Object(r.jsxs)("div",{children:[c(n)?Object(r.jsx)("button",{disabled:!0,className:"item-buttons",children:"x"}):Object(r.jsx)("button",{className:"item-buttons",onClick:function(){return l(n,a,o,s,i)},children:"+"}),Object(r.jsx)("button",{className:"item-buttons",children:"v"})]})})]})})})}})},t)}))})})},Me=function(e){var t=e.albums;return Object(r.jsx)(c.a.Fragment,{children:Object.keys(t).length>0&&Object(r.jsx)("div",{className:"albums",children:t.items.map((function(e,t){var n=e.id,a=e.external_urls.spotify,s=e.name,i=e.artists.map((function(e){return e.name})).join(", "),o=Re.a.isEmpty(e.images)?null:e.images[0].url;return Object(r.jsx)(c.a.Fragment,{children:Object(r.jsx)(pe.Consumer,{children:function(t){var c=t.containsItem,l=t.addToItemPool;return Object(r.jsx)(B.a,{style:{maxWidth:"22rem",width:"22rem",marginLeft:"0.5rem",marginRight:"0.5rem"},children:Object(r.jsx)(P.a,{children:Object(r.jsxs)(R.a,{noGutters:!0,children:[Object(r.jsx)(H.a,{xs:"auto",children:Object(r.jsx)("a",{target:"_blank",href:a,rel:"noopener noreferrer",children:Re.a.isEmpty(e.images)?Object(r.jsx)("img",{src:M,alt:""}):Object(r.jsx)(B.a.Img,{src:e.images[0].url,alt:""})})}),Object(r.jsx)(H.a,{children:Object(r.jsxs)(B.a.Body,{children:[Object(r.jsx)(B.a.Title,{style:{margin:"0"},children:s}),Object(r.jsx)(B.a.Text,{children:Object(r.jsx)("small",{children:i})})]})}),Object(r.jsx)(H.a,{xs:"auto",children:Object(r.jsxs)("div",{children:[c(n)?Object(r.jsx)("button",{disabled:!0,className:"item-buttons",children:"x"}):Object(r.jsx)("button",{className:"item-buttons",onClick:function(){return l(n,a,o,s,i)},children:"+"}),Object(r.jsx)("button",{className:"item-buttons",children:"v"})]})})]})})})}})},t)}))})})},Ue=function(e){var t=e.artists;return Object(r.jsx)(c.a.Fragment,{children:Object.keys(t).length>0&&Object(r.jsx)("div",{className:"artists",children:t.items.map((function(e,t){var n=e.id,a=e.external_urls.spotify,s=e.name,i=Re.a.isEmpty(e.images)?null:e.images[0].url;return Object(r.jsx)(c.a.Fragment,{children:Object(r.jsx)(pe.Consumer,{children:function(t){var c=t.containsItem,o=t.addToItemPool;return Object(r.jsx)(B.a,{style:{maxWidth:"22rem",width:"22rem",marginLeft:"0.5rem",marginRight:"0.5rem"},children:Object(r.jsx)(P.a,{children:Object(r.jsxs)(R.a,{noGutters:!0,children:[Object(r.jsx)(H.a,{xs:"auto",children:Object(r.jsx)("a",{target:"_blank",href:a,rel:"noopener noreferrer",children:Re.a.isEmpty(e.images)?Object(r.jsx)("img",{src:M,alt:""}):Object(r.jsx)(B.a.Img,{src:e.images[0].url,alt:""})})}),Object(r.jsx)(H.a,{children:Object(r.jsx)(B.a.Body,{children:Object(r.jsx)(B.a.Title,{style:{margin:"0"},children:s})})}),Object(r.jsx)(H.a,{xs:"auto",children:Object(r.jsxs)("div",{children:[c(n)?Object(r.jsx)("button",{disabled:!0,className:"item-buttons",children:"x"}):Object(r.jsx)("button",{className:"item-buttons",onClick:function(){return o(n,a,i,s,null)},children:"+"}),Object(r.jsx)("button",{className:"item-buttons",children:"v"})]})})]})})})}})},t)}))})})},Fe=function(e){var t=e.playlist;return Object(r.jsx)("div",{children:Object.keys(t).length>0&&Object(r.jsx)("div",{className:"playlist",children:t.items.map((function(e,t){var n=e.id,a=e.external_urls.spotify,s=e.name,i="By "+e.owner.display_name,o=Re.a.isEmpty(e.images)?null:e.images[0].url;return Object(r.jsx)(c.a.Fragment,{children:Object(r.jsx)(pe.Consumer,{children:function(t){var c=t.containsItem,l=t.addToItemPool;return Object(r.jsx)(B.a,{style:{maxWidth:"22rem",width:"22rem",marginLeft:"0.5rem",marginRight:"0.5rem"},children:Object(r.jsx)(P.a,{children:Object(r.jsxs)(R.a,{noGutters:!0,children:[Object(r.jsx)(H.a,{xs:"auto",children:Object(r.jsx)("a",{target:"_blank",href:a,rel:"noopener noreferrer",children:Re.a.isEmpty(e.images)?Object(r.jsx)("img",{src:M,alt:""}):Object(r.jsx)(B.a.Img,{src:e.images[0].url,alt:""})})}),Object(r.jsx)(H.a,{children:Object(r.jsxs)(B.a.Body,{children:[Object(r.jsx)(B.a.Title,{style:{margin:"0"},children:s}),Object(r.jsx)(B.a.Text,{children:i})]})}),Object(r.jsx)(H.a,{xs:"auto",children:Object(r.jsxs)("div",{children:[c(n)?Object(r.jsx)("button",{disabled:!0,className:"item-buttons",children:"x"}):Object(r.jsx)("button",{className:"item-buttons",onClick:function(){return l(n,a,o,s,i)},children:"+"}),Object(r.jsx)("button",{className:"item-buttons",children:"v"})]})})]})})})}})},t)}))})})},Ge=function(e){var t=e.loadMore,n=e.result,a=e.setCategory,s=e.selectedCategory,i=n.tracks,o=n.albums,l=n.artists,u=n.playlist;return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsxs)("div",{className:"search-buttons",children:[!Re.a.isEmpty(i.items)&&Object(r.jsx)("button",{className:"".concat("tracks"===s?"btn active":"btn"),onClick:function(){return a("tracks")},children:"Songs"}),!Re.a.isEmpty(o.items)&&Object(r.jsx)("button",{className:"".concat("albums"===s?"btn active":"btn"),onClick:function(){return a("albums")},children:"Albums"}),!Re.a.isEmpty(l.items)&&Object(r.jsx)("button",{className:"".concat("artists"===s?"btn active":"btn"),onClick:function(){return a("artists")},children:"Artists"}),!Re.a.isEmpty(u.items)&&Object(r.jsx)("button",{className:"".concat("playlist"===s?"btn active":"btn"),onClick:function(){return a("playlist")},children:"PlayLists"})]}),Object(r.jsx)("div",{className:"".concat("tracks"===s?"":"hide"),children:o&&Object(r.jsx)(He,{tracks:i})}),Object(r.jsx)("div",{className:"".concat("albums"===s?"":"hide"),children:o&&Object(r.jsx)(Me,{albums:o})}),Object(r.jsx)("div",{className:"".concat("artists"===s?"":"hide"),children:l&&Object(r.jsx)(Ue,{artists:l})}),Object(r.jsx)("div",{className:"".concat("playlist"===s?"":"hide"),children:u&&Object(r.jsx)(Fe,{playlist:u})}),!Re.a.isEmpty(n[s])&&!Re.a.isEmpty(n[s].next)&&Object(r.jsx)("div",{className:"load-more",children:Object(r.jsx)(Be.a,{variant:"info",type:"button",onClick:function(){return t(s)},children:"Load More"})})]})},Ve=n(110),Je=function(e){var t=Object(a.useState)(""),n=Object(V.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),o=Object(V.a)(i,2),l=o[0],u=o[1];return Object(r.jsx)("div",{children:Object(r.jsxs)(Ve.a,{onSubmit:function(t){t.preventDefault(),""!==c.trim()?(u(""),e.handleSearch(c)):u("Please enter a search term.")},children:[l&&Object(r.jsx)("p",{className:"errorMsg",children:l}),Object(r.jsx)(Ve.a.Group,{controlId:"formBasicEmail",children:Object(r.jsx)(Ve.a.Control,{type:"search",name:"searchTerm",value:c,placeholder:"Search here!",onChange:function(e){var t=e.target.value;s(t)},autoComplete:"off"})})]})})},We=function(){return Object(r.jsx)("h1",{className:"main-heading",style:{marginBottom:"8px"},children:"Search"})},ze=function(e){var t=Object(a.useState)(document.createElement("div")),n=Object(V.a)(t,1)[0],r=document.querySelector("#loader");return Object(a.useEffect)((function(){r.appendChild(n).classList.add("message")}),[r,n]),Object(a.useEffect)((function(){e.show?(r.classList.remove("hide"),document.body.classList.add("loader-open")):(r.classList.add("hide"),document.body.classList.remove("loader-open"))}),[r,e.show]),i.a.createPortal(e.children,n)},qe=Object(o.b)((function(e){return{tracks:e.tracks,albums:e.albums,artists:e.artists,playlist:e.playlist}}))((function(e){var t=Object(a.useState)(!1),n=Object(V.a)(t,2),s=n[0],i=n[1],o=Object(a.useState)("tracks"),l=Object(V.a)(o,2),u=l[0],d=l[1],j=e.isValidSession,b=e.refreshSession,m=function(){var t=Object(xe.a)(he.a.mark((function t(n){return he.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i(!0),j()){t.next=10;break}return t.prev=2,t.next=5,b();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),console.log(t.t0);case 10:e.dispatch(Te(n)).then((function(){i(!1)}));case 11:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(xe.a)(he.a.mark((function t(n){var r,a,c,s,o;return he.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.dispatch,a=e.tracks,c=e.albums,s=e.artists,o=e.playlist,i(!0),j()){t.next=11;break}return t.prev=3,t.next=6,b();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),console.log(t.t0);case 11:t.t1=n,t.next="tracks"===t.t1?14:"albums"===t.t1?17:"artists"===t.t1?20:"playlist"===t.t1?23:26;break;case 14:return t.next=16,r(Ne(a.next));case 16:return t.abrupt("break",26);case 17:return t.next=19,r(_e(c.next));case 19:return t.abrupt("break",26);case 20:return t.next=22,r(Le(s.next));case 22:return t.abrupt("break",26);case 23:return t.next=25,r(Ae(o.next));case 25:return t.abrupt("break",26);case 26:i(!1);case 27:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}(),O={tracks:e.tracks,albums:e.albums,artists:e.artists,playlist:e.playlist};return Object(r.jsx)(c.a.Fragment,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(We,{}),Object(r.jsx)(Je,{handleSearch:m}),Object(r.jsx)(ze,{show:s,children:"Loading..."}),Object(r.jsx)(Ge,{result:O,loadMore:p,setCategory:function(e){d(e)},selectedCategory:u})]})})})),Ke=function(e){Object(T.a)(n,e);var t=Object(N.a)(n);function n(e){var r;return Object(D.a)(this,n),(r=t.call(this,e)).refreshSession=Object(xe.a)(he.a.mark((function e(){var t,n,a,c;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ie();case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:t&&(a=(n=t).access_token,c=n.expires_in,localStorage.setItem("params",JSON.stringify(a)),localStorage.setItem("expiry_time",(new Date).getTime()+1e3*c),r.loaded||r.setState({loaded:!0}));case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),r.isValidSession=function(){var e;try{e=JSON.parse(localStorage.getItem("expiry_time"))}catch(n){e="0"}var t=(new Date).getTime();return t>=e&&r.loaded&&r.setState({loaded:!1}),t<e},r.state={loaded:!1},r}return Object(E.a)(n,[{key:"render",value:function(){return this.isValidSession()?Object(r.jsx)("div",{className:"sidebar-search",children:Object(r.jsx)(qe,{isValidSession:this.isValidSession,refreshSession:this.refreshSession})}):(this.refreshSession(),Object(r.jsx)("div",{className:"sidebar-search",children:"Loading..."}))}}]),n}(c.a.Component);function Xe(){var e=Object(_.a)(["\n  display: flex;\n"]);return Xe=function(){return e},e}var Ye=L.a.div(Xe()),Qe=function(e){Object(T.a)(n,e);var t=Object(N.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){var e=this.props,t=e.column,n=e.itemMap,a=e.index,c=e.updateHeader,s=e.deleteHandler,i=t.itemIds.map((function(e){return n[e]}));return Object(r.jsx)(ie,{column:t,items:i,index:a,updateHeader:c,deleteHandler:s})}}]),n}(c.a.PureComponent),Ze=function(e){Object(T.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(D.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state=e.context.data,e.deleteItem=function(e){},e.updateColHeader=function(t,n,r){var a=e.state.columns[t],c=Object(j.a)(Object(j.a)({},a),{},{title:n,color:r}),s=Object(j.a)(Object(j.a)({},e.state),{},{columns:Object(j.a)(Object(j.a)({},e.state.columns),{},Object(C.a)({},t,c))});e.setState(s)},e.removeCol=function(t){var n=Array.from(e.state.columnOrder);n.splice(n.indexOf(t),1);var r=e.state.columns,a=Object.keys(r).reduce((function(e,n){return n!==t&&(e[n]=r[n]),e}),{}),c=Object(j.a)(Object(j.a)({},e.state),{},{columns:a,columnOrder:n});e.setState(c)},e.onDragEnd=function(t){var n,r=t.destination,a=t.source,c=t.draggableId,s=t.type;if(r&&(r.droppableId!==a.droppableId||r.index!==a.index))if("column"!==s){var i=e.state.columns[a.droppableId],o=e.state.columns[r.droppableId];if(i!==o){var l=Array.from(i.itemIds);l.splice(a.index,1);var u=Object(j.a)(Object(j.a)({},i),{},{itemIds:l}),d=Array.from(o.itemIds);d.splice(r.index,0,c);var b=Object(j.a)(Object(j.a)({},o),{},{itemIds:d}),m=Object(j.a)(Object(j.a)({},e.state),{},{columns:Object(j.a)(Object(j.a)({},e.state.columns),{},(n={},Object(C.a)(n,u.id,u),Object(C.a)(n,b.id,b),n))});e.setState(m)}else{var p=Array.from(i.itemIds);p.splice(a.index,1),p.splice(r.index,0,c);var O=Object(j.a)(Object(j.a)({},i),{},{itemIds:p}),h=Object(j.a)(Object(j.a)({},e.state),{},{columns:Object(j.a)(Object(j.a)({},e.state.columns),{},Object(C.a)({},O.id,O))});e.setState(h)}}else{var x=Array.from(e.state.columnOrder);x.splice(a.index,1),x.splice(r.index,0,c);var f=Object(j.a)(Object(j.a)({},e.state),{},{columnOrder:x});e.setState(f)}},e}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.context.containsItem=function(t){return t in e.state.items},this.context.addToItemPool=function(t,n,r,a,c){if(!(t in e.state.items)){var s=Object(j.a)(Object(j.a)({},e.state.items),{},Object(C.a)({},t,{id:t,songURL:n,imgURL:r,title:a,subtitle:c})),i=Array.from(e.state.columns["item-pool"].itemIds).concat(t),o=Object(j.a)(Object(j.a)({},e.state.columns["item-pool"]),{},{itemIds:i}),l=Object(j.a)(Object(j.a)({},e.state),{},{items:s,columns:Object(j.a)(Object(j.a)({},e.state.columns),{},{"item-pool":o})});e.setState(l)}}}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{type:"button",onClick:function(){var t="column-".concat((new Date).getTime()),n=Array.from(e.state.columnOrder).concat(t),r=Object(j.a)(Object(j.a)({},e.state),{},{columnOrder:n});r.columns[t]={id:t,title:"NEW",color:"#1DB954",itemIds:[]},e.setState(r)},children:"Add new group"}),Object(r.jsxs)(A.a,{onDragEnd:this.onDragEnd,children:[Object(r.jsx)(Ye,{children:Object(r.jsx)(A.c,{droppableId:"tiers",direction:"horizontal",type:"column",children:function(t){return Object(r.jsxs)(Ye,Object(j.a)(Object(j.a)({},t.droppableProps),{},{ref:t.innerRef,children:[e.state.columnOrder.map((function(t,n){var a=e.state.columns[t];return Object(r.jsx)(Qe,{column:a,itemMap:e.state.items,index:n,updateHeader:e.updateColHeader,deleteHandler:e.removeCol},a.id)})),t.placeholder]}))}})}),Object(r.jsxs)(Ye,{children:[Object(r.jsx)(be,{items:this.state.columns["item-pool"].itemIds.map((function(t){return e.state.items[t]}))}),Object(r.jsx)(Ke,{})]})]})]})}}]),n}(c.a.Component);Ze.contextType=pe;var $e=Ze;n(99),n(100);i.a.render(Object(r.jsxs)(pe.Provider,{value:me,children:[Object(r.jsx)("h1",{className:"main-heading",children:"Spotify Tier List Maker (under construction)"}),Object(r.jsx)(o.a,{store:S,children:Object(r.jsx)($e,{})})]}),document.getElementById("root"))},44:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.c95a1e06.chunk.js.map