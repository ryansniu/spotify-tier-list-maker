(this["webpackJsonpspotify-tier-list-maker"]=this["webpackJsonpspotify-tier-list-maker"]||[]).push([[0],{126:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var r,a,c,s,i,o,l,u,d,m,j,b=n(0),O=n.n(b),p=n(15),h=n.n(p),f=n(36),x=n(26),g=n(85),v=n(30),y=n(2),k="SET_TRACKS",I="ADD_TRACKS",S="SET_ALBUMS",C="ADD_ALBUMS",w="SET_ARTISTS",E="ADD_ARTISTS",D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.tracks;switch(t.type){case k:return n;case I:return Object(y.a)(Object(y.a)({},e),{},{next:n.next,items:[].concat(Object(v.a)(e.items),Object(v.a)(n.items))});default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.albums;switch(t.type){case S:return n;case C:return Object(y.a)(Object(y.a)({},e),{},{next:n.next,items:[].concat(Object(v.a)(e.items),Object(v.a)(n.items))});default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.artists;switch(t.type){case w:return n;case E:return Object(y.a)(Object(y.a)({},e),{},{next:n.next,items:[].concat(Object(v.a)(e.items),Object(v.a)(n.items))});default:return e}},N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d,_=Object(x.e)(Object(x.c)({tracks:D,albums:A,artists:T}),N(Object(x.a)(g.a))),R=n(13),L=n(16),B=n(17),P=n(19),F=n(18),H=n(20),U=(n(102),n(21)),M=n(27),J=n(141),V=n(132),G=n(133),q=n(89),W=n.p+"static/media/music.b2fe7d4d.jpeg",z=n(1),K=U.a.div(r||(r=Object(H.a)(["\n  margin-bottom: 8px;\n  background-color: ",";\n  border-radius: 4px;\n"])),(function(e){return e.isDragging?"#1DB954":"none"})),X=function(e){Object(P.a)(n,e);var t=Object(F.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"render",value:function(){var e=this;return Object(z.jsx)(M.b,{draggableId:this.props.item.id,index:this.props.index,children:function(t,n){return Object(z.jsx)(K,Object(y.a)(Object(y.a)(Object(y.a)({},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,isDragging:n.isDragging,children:Object(z.jsx)(J.a,{style:{margin:0},children:Object(z.jsx)(V.a,{children:Object(z.jsxs)(G.a,{children:[Object(z.jsx)(q.a,{xs:"auto",children:Object(z.jsx)("a",{target:"_blank",href:e.props.item.songURL,rel:"noopener noreferrer",children:e.props.item.imgURL?Object(z.jsx)(J.a.Img,{src:e.props.item.imgURL,alt:""}):Object(z.jsx)("img",{src:W,alt:""})})}),Object(z.jsx)(q.a,{children:Object(z.jsxs)(J.a.Body,{children:[Object(z.jsx)(J.a.Title,{children:e.props.item.title}),e.props.item.subtitle&&Object(z.jsx)(J.a.Text,{children:Object(z.jsx)("small",{children:e.props.item.subtitle})})]})})]})})})}))}})}}]),n}(O.a.Component),Y=n(10),Q=n(138),Z=n(134),$=n(140),ee=n(135),te=n(136),ne=n(68),re=(n(72),function(e){var t=Object(ne.b)("hex",e.color),n=Object(Y.a)(t,2),r=n[0],a=n[1];return Object(z.jsx)(ne.a,{height:160,width:240,color:r,onChange:function(t){e.updateColor(t.hex),a(t)},hideHSV:!0,hideRGB:!0,dark:!0})}),ae=n.p+"static/media/tool.f60e7b86.svg",ce=n.p+"static/media/palette.c614a1c8.svg",se=(n(73),U.a.h3.attrs((function(e){return{style:{backgroundColor:e.color}}}))(a||(a=Object(H.a)(["padding: 8px;\nmargin-bottom: 0;\ndisplay: flex;\nmax-width: 21rem;\nuser-select: none;"])))),ie=U.a.textarea(c||(c=Object(H.a)(["\n    flex-grow: 1;\n    overflow: hidden;\n    word-break: break-all;\n    min-height: 40px;\n    max-width: 17rem;\n    height: 40px;\n    resize: both;\n"]))),oe=U.a.button(s||(s=Object(H.a)(["\n    width: 40px;\n    min-width: 40px;\n    height: 40px;\n    float: right;\n    margin-left: 8px;\n    outline: none;\n    background: transparent no-repeat;\n    border: none;\n    border-radius: 50%;\n"]))),le=function(e){var t=Object(b.useRef)(null),n=Object(b.useState)(e.colData.id),r=Object(Y.a)(n,2),a=r[0],c=r[1],s=Object(b.useState)(e.colData.title),i=Object(Y.a)(s,2),o=i[0],l=i[1],u=Object(b.useState)(e.colData.color),d=Object(Y.a)(u,2),m=d[0],j=d[1],p=Object(b.useState)(!1),h=Object(Y.a)(p,2),f=h[0],x=h[1],g=e.updateHeader,v=e.deleteHandler;function y(n){t.current&&!t.current.contains(n.target)&&(x(!1),e.setEditing(!1))}return Object(b.useEffect)((function(){return f&&document.addEventListener("mousedown",y),function(){document.removeEventListener("mousedown",y)}})),Object(b.useEffect)((function(){c(e.colData.id),l(e.colData.title),j(e.colData.color)}),[e.colData]),Object(z.jsx)(se,{color:m,children:Object(z.jsx)(O.a.Fragment,{children:f?Object(z.jsxs)("form",{style:{width:"100%",display:"flex",alignItems:"center"},onSubmit:function(){x(!1),e.setEditing(!1)},ref:t,children:[Object(z.jsx)(ie,{value:o,onChange:function(e){l(e.target.value),g(a,e.target.value,m)}}),Object(z.jsxs)(Q.a,{autoClose:"inside",as:Z.a,drop:"right",children:[Object(z.jsx)($.a,{placement:"top",overlay:Object(z.jsx)(ee.a,{children:"Edit Color/Delete Column"}),children:Object(z.jsx)(Q.a.Toggle,{id:"color-toggle",variant:"secondary",children:Object(z.jsx)(te.a,{src:ce,fluid:!0,alt:"colors",style:{width:"100%",height:"100%"}})})}),Object(z.jsxs)(Q.a.Menu,{id:"color-dropdown",variant:"dark",children:[Object(z.jsx)(re,{color:m,updateColor:function(e){j(e),g(a,o,e)}}),Object(z.jsx)(Q.a.Item,{id:"delete-col-item",onClick:function(){v(a)},children:"\ud83d\uddd1\ufe0f DELETE COLUMN"})]})]})]}):Object(z.jsxs)("div",{style:{width:"100%",display:"flex",alignItems:"center"},children:[Object(z.jsx)("div",{style:{color:"white",textShadow:"0 0 4px black",wordBreak:"break-all",flexGrow:"1",overflow:"hidden"},children:o}),Object(z.jsx)($.a,{placement:"top",overlay:Object(z.jsx)(ee.a,{children:"Edit Column"}),children:Object(z.jsx)(oe,{onClick:function(){x(!0),e.setEditing(!0)},children:Object(z.jsx)(te.a,{src:ae,fluid:!0,alt:"settings",style:{width:"100%",height:"100%"}})})})]})})})},ue=U.a.div(i||(i=Object(H.a)(["\n  margin: 8px;\n  border: 3px solid black;\n  background-color: none;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n"]))),de=U.a.div(o||(o=Object(H.a)(["\n  padding: 8px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n  flex-grow: 1;\n  min-width: 21rem;\n  min-height: 24rem;\n"])),(function(e){return e.isDraggingOver?"lightgrey":"none"})),me=function(e){Object(P.a)(n,e);var t=Object(F.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"shouldComponentUpdate",value:function(e){return e.items!==this.props.items}},{key:"render",value:function(){return this.props.items.map((function(e,t){return Object(z.jsx)(X,{item:e,index:t},e.id)}))}}]),n}(O.a.Component),je=function(e){Object(P.a)(n,e);var t=Object(F.a)(n);function n(e){var r;return Object(L.a)(this,n),(r=t.call(this,e)).state={isEditing:!1},r}return Object(B.a)(n,[{key:"render",value:function(){var e=this;return Object(z.jsx)(M.b,{draggableId:this.props.column.id,index:this.props.index,isDragDisabled:this.state.isEditing,children:function(t){return Object(z.jsxs)(ue,Object(y.a)(Object(y.a)({},t.draggableProps),{},{ref:t.innerRef,children:[Object(z.jsx)("div",Object(y.a)(Object(y.a)({},t.dragHandleProps),{},{children:Object(z.jsx)(le,{colData:e.props.column,updateHeader:e.props.updateHeader,deleteHandler:e.props.deleteHandler,setEditing:function(t){return e.setState({isEditing:t})}})})),Object(z.jsx)(M.c,{droppableId:e.props.column.id,type:"item",children:function(t,n){return Object(z.jsxs)(de,Object(y.a)(Object(y.a)({ref:t.innerRef},t.droppableProps),{},{isDraggingOver:n.isDraggingOver,children:[Object(z.jsx)(me,{items:e.props.items}),t.placeholder]}))}})]}))}})}}]),n}(O.a.Component),be=U.a.div(l||(l=Object(H.a)(["\n  margin: 8px;\n  border: 1px solid #1DB954;\n  background-color: none;\n  border-radius: 2px;\n  display: flex;\n  flex-direction: column;\n  min-width: 21.125rem;\n"]))),Oe=U.a.div(u||(u=Object(H.a)(["\n  padding: 8px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n  flex-grow: 1;\n  min-height: 16rem;\n"])),(function(e){return e.isDraggingOver?"lightgrey":"none"})),pe=function(e){Object(P.a)(n,e);var t=Object(F.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"shouldComponentUpdate",value:function(e){return e.items!==this.props.items}},{key:"render",value:function(){return this.props.items.map((function(e,t){return Object(z.jsx)(X,{item:e,index:t},e.id)}))}}]),n}(O.a.Component),he=function(e){Object(P.a)(n,e);var t=Object(F.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"render",value:function(){var e=this;return Object(z.jsxs)("div",{children:[Object(z.jsx)("h1",{className:"main-heading",children:"Items"}),Object(z.jsx)(be,{children:Object(z.jsx)(M.c,{droppableId:"item-pool",type:"item",children:function(t,n){return Object(z.jsxs)(Oe,Object(y.a)(Object(y.a)({ref:t.innerRef},t.droppableProps),{},{isDraggingOver:n.isDraggingOver,children:[Object(z.jsx)(pe,{items:e.props.items}),t.placeholder]}))}})})]})}}]),n}(O.a.Component),fe=U.a.div(d||(d=Object(H.a)(["\n  margin: 8px;\n  border: 1px solid #1DB954;\n  background-color: none;\n  border-radius: 2px;\n  display: flex;\n  flex-direction: column;\n  width: 21.2rem;\n"]))),xe=U.a.div(m||(m=Object(H.a)(["\n  padding: 8px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n  flex-grow: 1;\n  height: 5rem;\n"])),(function(e){return e.isDraggingOver?"pink":"none"})),ge=function(e){Object(P.a)(n,e);var t=Object(F.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"render",value:function(){return Object(z.jsxs)("div",{children:[Object(z.jsx)("h1",{className:"main-heading",children:"Trash Can"}),Object(z.jsx)(fe,{children:Object(z.jsx)(M.c,{droppableId:"trash-can",type:"item",children:function(e,t){return Object(z.jsx)(xe,Object(y.a)(Object(y.a)({ref:e.innerRef},e.droppableProps),{},{isDraggingOver:t.isDraggingOver,children:e.placeholder}))}})})]})}}]),n}(O.a.Component),ve={data:{items:{},columns:{"column-1":{id:"column-1",title:"S",color:"purple",itemIds:[]},"column-2":{id:"column-2",title:"A",color:"#1DB954",itemIds:[]},"column-3":{id:"column-3",title:"B",color:"blue",itemIds:[]},"column-4":{id:"column-4",title:"C",color:"grey",itemIds:[]},"item-pool":{id:"item-pool",itemIds:[]},"trash-can":{id:"trash-can"}},columnOrder:["column-1","column-2","column-3","column-4"]},containsItem:function(e){},addToItemPool:function(e,t,n,r,a,c){},deleteFromItemPool:function(e,t){}},ye=O.a.createContext(ve),ke=n(137),Ie=n(92),Se=n(7),Ce=n.n(Se),we=n(24),Ee=n(46),De=n.n(Ee),Ae=n(91),Te=n.n(Ae),Ne=function(){try{var e=JSON.parse(localStorage.getItem("params"));e&&(De.a.defaults.headers.common.Authorization="Bearer ".concat(e))}catch(t){console.log("Error setting auth",t)}},_e=function(){var e=Object(we.a)(Ce.a.mark((function e(t,n){var r;return Ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ne(),e.next=3,De.a.get(t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Re=function(){var e=Object(we.a)(Ce.a.mark((function e(){var t,n,r;return Ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"2d6518050da043db89266dc384c2a3c2","79747dd7e39645f0b19ff179ff55a075",t={headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},auth:{username:"2d6518050da043db89266dc384c2a3c2",password:"79747dd7e39645f0b19ff179ff55a075"}},n={grant_type:"client_credentials"},e.prev=4,e.next=7,De.a.post("https://accounts.spotify.com/api/token",Te.a.stringify(n),t);case 7:return r=e.sent,e.abrupt("return",r.data);case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(){return e.apply(this,arguments)}}(),Le=function(e){return{type:k,tracks:e}},Be=function(e){return{type:S,albums:e}},Pe=function(e){return{type:w,artists:e}},Fe=function(e){return function(){var t=Object(we.a)(Ce.a.mark((function t(n){var r,a,c,s,i;return Ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.spotify.com/v1/search?query=".concat(encodeURIComponent(e),"&type=track,album,artist&limit=24"),t.next=4,_e(r);case 4:return a=t.sent,console.log(a),c=a.tracks,s=a.albums,i=a.artists,n(Le(c)),n(Be(s)),t.abrupt("return",n(Pe(i)));case 12:t.prev=12,t.t0=t.catch(0),console.log("error",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},He=function(e){return function(){var t=Object(we.a)(Ce.a.mark((function t(n){var r;return Ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("url",e),t.next=4,_e(e);case 4:return r=t.sent,console.log("categories",r),t.abrupt("return",n((a=r.tracks,{type:I,tracks:a})));case 9:t.prev=9,t.t0=t.catch(0),console.log("error",t.t0);case 12:case"end":return t.stop()}var a}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},Ue=function(e){return function(){var t=Object(we.a)(Ce.a.mark((function t(n){var r;return Ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("url",e),t.next=4,_e(e);case 4:return r=t.sent,console.log("categories",r),t.abrupt("return",n((a=r.albums,{type:C,albums:a})));case 9:t.prev=9,t.t0=t.catch(0),console.log("error",t.t0);case 12:case"end":return t.stop()}var a}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},Me=function(e){return function(){var t=Object(we.a)(Ce.a.mark((function t(n){var r;return Ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("url",e),t.next=4,_e(e);case 4:return r=t.sent,console.log("categories",r),t.abrupt("return",n((a=r.artists,{type:E,artists:a})));case 9:t.prev=9,t.t0=t.catch(0),console.log("error",t.t0);case 12:case"end":return t.stop()}var a}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},Je=n(90),Ve=n(22),Ge=n.n(Ve),qe=function(e){var t=e.tracks,n=Object(b.useState)(!1),r=Object(Y.a)(n,2),a=r[0],c=r[1];return Object(z.jsx)(O.a.Fragment,{children:Object.keys(t).length>0&&Object(z.jsx)("div",{className:"tracks",children:t.items.map((function(e,t){var n=e.id,r="track",s=e.external_urls.spotify,i=e.name,o=e.artists.map((function(e){return e.name})).join(", "),l=Ge.a.isEmpty(e.album.images)?null:e.album.images[0].url;return Object(z.jsx)(O.a.Fragment,{children:Object(z.jsx)(ye.Consumer,{children:function(t){var u=t.containsItem,d=t.addToItemPool,m=t.deleteFromItemPool;return Object(z.jsx)(J.a,{style:{maxWidth:"22rem",width:"22rem",marginLeft:"0.5rem",marginRight:"0.5rem"},children:Object(z.jsx)(V.a,{children:Object(z.jsxs)(G.a,{children:[Object(z.jsx)(q.a,{xs:"auto",children:Object(z.jsx)("a",{target:"_blank",href:s,rel:"noopener noreferrer",children:Ge.a.isEmpty(e.album.images)?Object(z.jsx)("img",{src:W,alt:""}):Object(z.jsx)(J.a.Img,{src:l,alt:""})})}),Object(z.jsx)(q.a,{children:Object(z.jsxs)(J.a.Body,{children:[Object(z.jsx)(J.a.Title,{children:i}),Object(z.jsx)(J.a.Text,{children:Object(z.jsx)("small",{children:o})})]})}),Object(z.jsx)(q.a,{xs:"auto",children:Object(z.jsx)("div",{children:u(n,r)?Object(z.jsx)("button",{className:"remove-buttons",onClick:function(){m(n,r),c(!a)},children:"x"}):Object(z.jsx)("button",{className:"item-buttons",onClick:function(){d(n,r,s,l,i,o),c(!a)},children:"+"})})})]})})})}})},t)}))})})},We=function(e){var t=e.albums,n=Object(b.useState)(!1),r=Object(Y.a)(n,2),a=r[0],c=r[1];return Object(z.jsx)(O.a.Fragment,{children:Object.keys(t).length>0&&Object(z.jsx)("div",{className:"albums",children:t.items.map((function(e,t){var n=e.id,r="album",s=e.external_urls.spotify,i=e.name,o=e.artists.map((function(e){return e.name})).join(", "),l=Ge.a.isEmpty(e.images)?null:e.images[0].url;return Object(z.jsx)(O.a.Fragment,{children:Object(z.jsx)(ye.Consumer,{children:function(t){var u=t.containsItem,d=t.addToItemPool,m=t.deleteFromItemPool;return Object(z.jsx)(J.a,{style:{maxWidth:"22rem",width:"22rem",marginLeft:"0.5rem",marginRight:"0.5rem"},children:Object(z.jsx)(V.a,{children:Object(z.jsxs)(G.a,{children:[Object(z.jsx)(q.a,{xs:"auto",children:Object(z.jsx)("a",{target:"_blank",href:s,rel:"noopener noreferrer",children:Ge.a.isEmpty(e.images)?Object(z.jsx)("img",{src:W,alt:""}):Object(z.jsx)(J.a.Img,{src:e.images[0].url,alt:""})})}),Object(z.jsx)(q.a,{children:Object(z.jsxs)(J.a.Body,{children:[Object(z.jsx)(J.a.Title,{style:{margin:"0"},children:i}),Object(z.jsx)(J.a.Text,{children:Object(z.jsx)("small",{children:o})})]})}),Object(z.jsx)(q.a,{xs:"auto",children:Object(z.jsx)("div",{children:u(n,r)?Object(z.jsx)("button",{className:"remove-buttons",onClick:function(){m(n,r),c(!a)},children:"x"}):Object(z.jsx)("button",{className:"item-buttons",onClick:function(){d(n,r,s,l,i,o),c(!a)},children:"+"})})})]})})})}})},t)}))})})},ze=function(e){var t=e.artists,n=Object(b.useState)(!1),r=Object(Y.a)(n,2),a=r[0],c=r[1];return Object(z.jsx)(O.a.Fragment,{children:Object.keys(t).length>0&&Object(z.jsx)("div",{className:"artists",children:t.items.map((function(e,t){var n=e.id,r="artist",s=e.external_urls.spotify,i=e.name,o=Ge.a.isEmpty(e.images)?null:e.images[0].url;return Object(z.jsx)(O.a.Fragment,{children:Object(z.jsx)(ye.Consumer,{children:function(t){var l=t.containsItem,u=t.addToItemPool,d=t.deleteFromItemPool;return Object(z.jsx)(J.a,{style:{maxWidth:"22rem",width:"22rem",marginLeft:"0.5rem",marginRight:"0.5rem"},children:Object(z.jsx)(V.a,{children:Object(z.jsxs)(G.a,{children:[Object(z.jsx)(q.a,{xs:"auto",children:Object(z.jsx)("a",{target:"_blank",href:s,rel:"noopener noreferrer",children:Ge.a.isEmpty(e.images)?Object(z.jsx)("img",{src:W,alt:""}):Object(z.jsx)(J.a.Img,{src:e.images[0].url,alt:""})})}),Object(z.jsx)(q.a,{children:Object(z.jsx)(J.a.Body,{children:Object(z.jsx)(J.a.Title,{style:{margin:"0"},children:i})})}),Object(z.jsx)(q.a,{xs:"auto",children:Object(z.jsx)("div",{children:l(n,r)?Object(z.jsx)("button",{className:"remove-buttons",onClick:function(){d(n,r),c(!a)},children:"x"}):Object(z.jsx)("button",{className:"item-buttons",onClick:function(){u(n,r,s,o,i,null),c(!a)},children:"+"})})})]})})})}})},t)}))})})},Ke=function(e){var t=e.loadMore,n=e.result,r=e.setCategory,a=e.selectedCategory,c=n.tracks,s=n.albums,i=n.artists;return Object(z.jsxs)(O.a.Fragment,{children:[Object(z.jsxs)("div",{className:"search-buttons",children:[!Ge.a.isEmpty(c.items)&&Object(z.jsx)("button",{className:"".concat("tracks"===a?"btn active":"btn"),onClick:function(){return r("tracks")},children:"Songs"}),!Ge.a.isEmpty(s.items)&&Object(z.jsx)("button",{className:"".concat("albums"===a?"btn active":"btn"),onClick:function(){return r("albums")},children:"Albums"}),!Ge.a.isEmpty(i.items)&&Object(z.jsx)("button",{className:"".concat("artists"===a?"btn active":"btn"),onClick:function(){return r("artists")},children:"Artists"})]}),Object(z.jsx)("div",{className:"".concat("tracks"===a?"":"hide"),children:s&&Object(z.jsx)(qe,{tracks:c})}),Object(z.jsx)("div",{className:"".concat("albums"===a?"":"hide"),children:s&&Object(z.jsx)(We,{albums:s})}),Object(z.jsx)("div",{className:"".concat("artists"===a?"":"hide"),children:i&&Object(z.jsx)(ze,{artists:i})}),!Ge.a.isEmpty(n[a])&&!Ge.a.isEmpty(n[a].next)&&Object(z.jsx)("div",{className:"load-more",children:Object(z.jsx)(Je.a,{variant:"info",type:"button",onClick:function(){return t(a)},children:"Load More"})})]})},Xe=n(139),Ye=function(e){var t=Object(b.useState)(""),n=Object(Y.a)(t,2),r=n[0],a=n[1],c=Object(b.useState)(""),s=Object(Y.a)(c,2),i=s[0],o=s[1];return Object(z.jsx)("div",{children:Object(z.jsxs)(Xe.a,{onSubmit:function(t){t.preventDefault(),""!==r.trim()?(o(""),e.handleSearch(r)):o("Please enter a search term.")},children:[i&&Object(z.jsx)("p",{className:"errorMsg",children:i}),Object(z.jsx)(Xe.a.Group,{controlId:"formBasicEmail",children:Object(z.jsx)(Xe.a.Control,{type:"search",name:"searchTerm",value:r,placeholder:"Search here!",onChange:function(e){var t=e.target.value;a(t)},autoComplete:"off"})})]})})},Qe=function(e){var t=Object(b.useState)(document.createElement("div")),n=Object(Y.a)(t,1)[0],r=document.querySelector("#loader");return Object(b.useEffect)((function(){r.appendChild(n).classList.add("message")}),[r,n]),Object(b.useEffect)((function(){e.show?(r.classList.remove("hide"),document.body.classList.add("loader-open")):(r.classList.add("hide"),document.body.classList.remove("loader-open"))}),[r,e.show]),h.a.createPortal(e.children,n)},Ze=Object(f.b)((function(e){return{tracks:e.tracks,albums:e.albums,artists:e.artists}}))((function(e){var t=Object(b.useState)(!1),n=Object(Y.a)(t,2),r=n[0],a=n[1],c=[e.selectedCategory,e.updateCategory],s=c[0],i=c[1],o=e.isValidSession,l=e.refreshSession,u=function(){var t=Object(we.a)(Ce.a.mark((function t(n){return Ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a(!0),o()){t.next=10;break}return t.prev=2,t.next=5,l();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),console.log(t.t0);case 10:e.dispatch(Fe(n)).then((function(){a(!1)}));case 11:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(we.a)(Ce.a.mark((function t(n){var r,c,s,i;return Ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.dispatch,c=e.tracks,s=e.albums,i=e.artists,a(!0),o()){t.next=11;break}return t.prev=3,t.next=6,l();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),console.log(t.t0);case 11:t.t1=n,t.next="tracks"===t.t1?14:"albums"===t.t1?17:"artists"===t.t1?20:23;break;case 14:return t.next=16,r(He(c.next));case 16:return t.abrupt("break",23);case 17:return t.next=19,r(Ue(s.next));case 19:return t.abrupt("break",23);case 20:return t.next=22,r(Me(i.next));case 22:return t.abrupt("break",23);case 23:a(!1);case 24:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}(),m={tracks:e.tracks,albums:e.albums,artists:e.artists};return Object(z.jsx)(O.a.Fragment,{children:Object(z.jsxs)("div",{children:[Object(z.jsx)(Ye,{handleSearch:u}),Object(z.jsx)(Qe,{show:r,children:"Loading..."}),Object(z.jsx)(Ke,{result:m,loadMore:d,setCategory:function(e){i(e)},selectedCategory:s})]})})})),$e=function(e){Object(P.a)(n,e);var t=Object(F.a)(n);function n(e){var r;return Object(L.a)(this,n),(r=t.call(this,e)).updateCategory=function(e){var t=Object(y.a)(Object(y.a)({},r.state),{},{selectedCategory:e});r.setState(t)},r.refreshSession=Object(we.a)(Ce.a.mark((function e(){var t,n,a,c;return Ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Re();case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:t&&(a=(n=t).access_token,c=n.expires_in,localStorage.setItem("params",JSON.stringify(a)),localStorage.setItem("expiry_time",(new Date).getTime()+1e3*c),r.loaded||r.setState({loaded:!0}));case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),r.isValidSession=function(){var e;try{e=JSON.parse(localStorage.getItem("expiry_time"))}catch(n){e="0"}var t=(new Date).getTime();return t>=e&&r.loaded&&r.setState({loaded:!1}),t<e},r.state={loaded:!1,selectedCategory:"tracks"},r}return Object(B.a)(n,[{key:"render",value:function(){return this.isValidSession()?Object(z.jsx)("div",{className:"sidebar-search",children:Object(z.jsx)(Ze,{isValidSession:this.isValidSession,refreshSession:this.refreshSession,selectedCategory:this.state.selectedCategory,updateCategory:this.updateCategory},this.props.refreshSidebar)}):(this.refreshSession(),Object(z.jsx)("div",{className:"sidebar-search",children:"Loading..."}))}}]),n}(O.a.Component),et=function(){return Object(z.jsx)("h1",{className:"main-heading",children:"Search"})},tt=U.a.div(j||(j=Object(H.a)(["\n  display: flex;\n"]))),nt=function(e){Object(P.a)(n,e);var t=Object(F.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"render",value:function(){var e=this.props,t=e.column,n=e.itemMap,r=e.index,a=e.updateHeader,c=e.deleteHandler,s=t.itemIds.map((function(e){return n[e]}));return Object(z.jsx)(je,{column:t,items:s,index:r,updateHeader:a,deleteHandler:c})}}]),n}(O.a.PureComponent),rt=!1,at=!1,ct=!1,st=function(e){Object(P.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(L.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state=e.context.data,e.importFromJson=function(t){var n=new FileReader;n.readAsText(t.target.files[0],"UTF-8"),n.onload=function(t){var n=JSON.parse(t.target.result);if("columnOrder"in n&&"items"in n&&"columns"in n&&"item-pool"in n.columns&&"trash-can"in n.columns&&"id"in n.columns["item-pool"]&&"item-pool"===n.columns["item-pool"].id&&"itemIds"in n.columns["item-pool"]&&Array.isArray(n.columns["item-pool"].itemIds)&&"id"in n.columns["trash-can"]&&"trash-can"===n.columns["trash-can"].id){var r=!0,a=["id","title","color","itemIds"];if(Object.keys(n.columns).forEach((function(e){if(r&&"item-pool"!==e&&"trash-can"!==e){var t=Object.keys(n.columns[e]);r=t.length===a.length&&t.every((function(e,t){return e===a[t]}))}})),r){var c=n.columnOrder,s=Object.keys(n.columns);if(s.splice(s.indexOf("item-pool"),1),s.splice(s.indexOf("trash-can"),1),c.length===s.length&&c.every((function(e){return s.includes(e)}))){var i=!0,o=["id","type","songURL","imgURL","title","subtitle"];if(Object.keys(n.items).forEach((function(e){if(i){var t=Object.keys(n.items[e]);i=t.length===o.length&&t.every((function(e,t){return e===o[t]}))}})),i){var l=Object.keys(n.items),u=[];Object.keys(n.columns).forEach((function(e){"trash-can"!==e&&(u=u.concat(n.columns[e].itemIds))})),u.length===l.length&&u.every((function(e){return l.includes(e)}))?(rt=!rt,e.setState(n),console.log(e.state)):console.log("items and itemIds don't match!")}else console.log("missing required item information!")}else console.log("columnOrder and columns don't match!")}else console.log("missing required column information!")}else console.log("missing required information!")}},e.deleteItem=function(t,n,r){var a=Array.from(r.itemIds);a.splice(n.index,1);var c=Object(y.a)(Object(y.a)({},r),{},{itemIds:a}),s=e.state.items,i=Object.keys(s).reduce((function(e,n){return n!==t&&(e[n]=s[n]),e}),{}),o=Object(y.a)(Object(y.a)({},e.state),{},{items:i,columns:Object(y.a)(Object(y.a)({},e.state.columns),{},Object(R.a)({},c.id,c))});rt=!rt,e.setState(o)},e.updateColHeader=function(t,n,r){var a=e.state.columns[t],c=Object(y.a)(Object(y.a)({},a),{},{title:n,color:r}),s=Object(y.a)(Object(y.a)({},e.state),{},{columns:Object(y.a)(Object(y.a)({},e.state.columns),{},Object(R.a)({},t,c))});e.setState(s)},e.removeCol=function(t){var n=Array.from(e.state.columnOrder);n.splice(n.indexOf(t),1);var r=e.state.columns,a=Object.keys(r).reduce((function(e,n){return n!==t&&(e[n]=r[n]),e}),{}),c=Object(y.a)(Object(y.a)({},e.state),{},{columns:a,columnOrder:n});e.setState(c)},e.onDragEnd=function(t){var n,r=t.destination,a=t.source,c=t.draggableId,s=t.type;if(r&&(r.droppableId!==a.droppableId||r.index!==a.index))if("column"!==s){var i=e.state.columns[a.droppableId],o=e.state.columns[r.droppableId];if("trash-can"!==r.droppableId)if(i!==o){var l=Array.from(i.itemIds);l.splice(a.index,1);var u=Object(y.a)(Object(y.a)({},i),{},{itemIds:l}),d=Array.from(o.itemIds);d.splice(r.index,0,c);var m=Object(y.a)(Object(y.a)({},o),{},{itemIds:d}),j=Object(y.a)(Object(y.a)({},e.state),{},{columns:Object(y.a)(Object(y.a)({},e.state.columns),{},(n={},Object(R.a)(n,u.id,u),Object(R.a)(n,m.id,m),n))});e.setState(j)}else{var b=Array.from(i.itemIds);b.splice(a.index,1),b.splice(r.index,0,c);var O=Object(y.a)(Object(y.a)({},i),{},{itemIds:b}),p=Object(y.a)(Object(y.a)({},e.state),{},{columns:Object(y.a)(Object(y.a)({},e.state.columns),{},Object(R.a)({},O.id,O))});e.setState(p)}else e.deleteItem(c,a,i)}else{var h=Array.from(e.state.columnOrder);h.splice(a.index,1),h.splice(r.index,0,c);var f=Object(y.a)(Object(y.a)({},e.state),{},{columnOrder:h});e.setState(f)}},e.addNewGroup=function(){var t="column-".concat((new Date).getTime()),n=Array.from(e.state.columnOrder).concat(t),r=Object(y.a)(Object(y.a)({},e.state),{},{columnOrder:n});r.columns[t]={id:t,title:"NEW",color:"#1DB954",itemIds:[]},e.setState(r)},e.resetAllItems=function(){var t=e.state.columns;Object.keys(t).forEach((function(e){"trash-can"!==e&&"item-pool"!==e&&(t["item-pool"].itemIds=t["item-pool"].itemIds.concat(t[e].itemIds),t[e].itemIds=[])}));var n=Object(y.a)(Object(y.a)({},e.state),{},{columns:t});at=!at,e.setState(n)},e.removeAllItems=function(){e.resetAllItems();var t=Object(y.a)(Object(y.a)({},e.state),{},{columns:Object(y.a)(Object(y.a)({},e.state.columns),{},{"item-pool":{id:"item-pool",itemIds:[]}}),items:{}});rt=!rt,e.setState(t)},e.resetAllColumns=function(){e.resetAllItems();var t=Object(y.a)(Object(y.a)({},e.state),{},{columns:Object(y.a)(Object(y.a)({},e.state.columns),{},{"column-1":{id:"column-1",title:"S",color:"purple",itemIds:[]},"column-2":{id:"column-2",title:"A",color:"#1DB954",itemIds:[]},"column-3":{id:"column-3",title:"B",color:"blue",itemIds:[]},"column-4":{id:"column-4",title:"C",color:"grey",itemIds:[]}}),columnOrder:["column-1","column-2","column-3","column-4"]});at=!at,e.setState(t)},e.resetTierList=function(){e.resetAllItems();var t=Object(y.a)(Object(y.a)({},e.state),{},{columns:Object(y.a)(Object(y.a)({},e.state.columns),{},{"column-1":{id:"column-1",title:"S",color:"purple",itemIds:[]},"column-2":{id:"column-2",title:"A",color:"#1DB954",itemIds:[]},"column-3":{id:"column-3",title:"B",color:"blue",itemIds:[]},"column-4":{id:"column-4",title:"C",color:"grey",itemIds:[]},"item-pool":{id:"item-pool",itemIds:[]}}),items:{},columnOrder:["column-1","column-2","column-3","column-4"]});at=!at,rt=!rt,e.setState(t)},e.showSearch=function(t){ct=t,e.setState(e.state)},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.context.containsItem=function(t,n){return t in e.state.items&&e.state.items[t].type===n},this.context.addToItemPool=function(t,n,r,a,c,s){if(!e.context.containsItem(t,n)){var i=Object(y.a)(Object(y.a)({},e.state.items),{},Object(R.a)({},t,{id:t,type:n,songURL:r,imgURL:a,title:c,subtitle:s})),o=Array.from(e.state.columns["item-pool"].itemIds).concat(t),l=Object(y.a)(Object(y.a)({},e.state.columns["item-pool"]),{},{itemIds:o}),u=Object(y.a)(Object(y.a)({},e.state),{},{items:i,columns:Object(y.a)(Object(y.a)({},e.state.columns),{},{"item-pool":l})});e.setState(u)}},this.context.deleteFromItemPool=function(t,n){if(e.context.containsItem(t,n)){var r=e.state.items;delete r[t];var a=e.state.columns;Object.keys(a).forEach((function(e){if("trash-can"!==e){var n=a[e].itemIds.indexOf(t);-1!==n&&a[e].itemIds.splice(n,1)}}));var c=Object(y.a)(Object(y.a)({},e.state),{},{items:r,columns:a});console.log(c),at=!at,e.setState(c)}}}},{key:"saveAsSVG",value:function(){Object(Ie.a)(document.getElementById("tierlist_all"),{backgroundColor:"#121212"}).then((function(e){var t=document.createElement("a");t.download="tierlist.svg",t.href=e,t.click()})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(z.jsx)("div",{children:Object(z.jsxs)(M.a,{onDragEnd:this.onDragEnd,children:[Object(z.jsxs)(tt,{children:[Object(z.jsx)("button",{type:"button",onClick:this.addNewGroup,children:"Add new group"}),Object(z.jsx)("button",{type:"button",onClick:this.resetAllItems,children:"Reset All Items"}),Object(z.jsx)("button",{type:"button",onClick:this.removeAllItems,children:"Remove All Items"}),Object(z.jsx)("button",{type:"button",onClick:this.resetAllColumns,children:"Reset All Columns"}),Object(z.jsx)("button",{type:"button",onClick:this.resetTierList,children:"Reset TierList"}),Object(z.jsx)("a",{href:"data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(this.state))),download:"tierlist.json",children:"Export as Json"}),Object(z.jsxs)("div",{children:[Object(z.jsx)("label",{htmlFor:"import_tierlist",children:"Import from Json"}),Object(z.jsx)("input",{type:"file",id:"import_tierlist",name:"import_tierlist",accept:".json",onChange:this.importFromJson})]}),Object(z.jsx)("button",{type:"button",onClick:this.saveAsSVG,children:"Save as .svg"}),Object(z.jsx)("button",{type:"button",onClick:function(){return e.showSearch(!0)},children:"Search"})]}),Object(z.jsx)(tt,{children:Object(z.jsx)(M.c,{droppableId:"tiers",direction:"horizontal",type:"column",children:function(t){return Object(b.createElement)(tt,Object(y.a)(Object(y.a)({},t.droppableProps),{},{ref:t.innerRef,id:"tierlist_all",key:at}),e.state.columnOrder.map((function(t,n){var r=e.state.columns[t];return Object(z.jsx)(nt,{column:r,itemMap:e.state.items,index:n,updateHeader:e.updateColHeader,deleteHandler:e.removeCol},r.id)})),t.placeholder)}})}),Object(z.jsxs)(tt,{children:[Object(z.jsx)(ge,{}),Object(z.jsx)(he,{items:this.state.columns["item-pool"].itemIds.map((function(t){return e.state.items[t]}))})]}),Object(z.jsxs)(ke.a,{id:"sidebar-overlay",show:ct,onHide:function(){return e.showSearch(!1)},placement:"end",children:[Object(z.jsx)(ke.a.Header,{closeButton:!0,closeVariant:"white",children:Object(z.jsx)(ke.a.Title,{children:Object(z.jsx)(et,{})})}),Object(z.jsx)(ke.a.Body,{style:{padding:0,overflowY:"scroll"},children:Object(z.jsx)($e,{refreshSidebar:rt})})]})]})})}}]),n}(O.a.Component);st.contextType=ye;var it=st;n(125),n(126);h.a.render(Object(z.jsxs)(ye.Provider,{value:ve,children:[Object(z.jsx)("h1",{className:"title-heading",children:"Spotify Tier List Maker"}),Object(z.jsx)(f.a,{store:_,children:Object(z.jsx)(it,{})})]}),document.getElementById("root"))},73:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.c41b225a.chunk.js.map