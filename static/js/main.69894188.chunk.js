(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},132:function(e,t,n){e.exports=n(279)},141:function(e,t,n){},278:function(e,t,n){},279:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),i=n(26),l=n.n(i),c=n(38),u=n(24),s=n(111),d=n(10),m=n(62),p=n(16),f=function(e){return{REQUEST:"".concat(e,"_REQUEST"),SUCCESS:"".concat(e,"_SUCCESS"),FAILURE:"".concat(e,"_FAILURE")}},E=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(a,r){var o=n.resolver,i=f(e),l=i.REQUEST,c=i.SUCCESS,u=i.FAILURE;return a({type:l}),t(r()).then(function(e){return a({type:c,payload:o?o(e):e})}).catch(function(e){return a({type:u,payload:{error:e}})})}},h=f("FETCH_ALL_STUDENTS"),b=f("ADD_STUDENT"),O=f("UPDATE_STUDENT"),g=f("REMOVE_STUDENT"),S=function(){return E("FETCH_ALL_STUDENTS",function(){return Promise.resolve([{id:1,first:"Dmitry",last:"Tuzenkov",birthday:new Date("1990-03-13T06:30:00.000Z").toLocaleDateString()},{id:2,first:"Oleg",last:"Voronko",birthday:new Date("1987-11-04T16:40:00.000Z").toLocaleDateString()}])})},j=function(e){return E("ADD_STUDENT",function(){return Promise.resolve(Object(p.a)({id:Date.now()},e))})},v=function(e,t){return E("UPDATE_STUDENT",function(){return Promise.resolve(Object(p.a)({id:e},t))})},y=function(e){return E("REMOVE_STUDENT",function(){return Promise.resolve(e)},{resolver:function(){return{id:e}}})};function C(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1?arguments[1]:void 0;return t.hasOwnProperty(a.type)?t[a.type](n,a):n}}var D,A=C({error:null,loading:!1,data:[]},(a={},Object(d.a)(a,h.REQUEST,function(e,t){return Object(p.a)({},e,{error:null,loading:!0})}),Object(d.a)(a,h.SUCCESS,function(e,t){return{data:t.payload,error:null,loading:!1}}),Object(d.a)(a,h.FAILURE,function(e,t){return{data:[],error:t.payload.error,loading:!1}}),Object(d.a)(a,b.SUCCESS,function(e,t){return{data:[].concat(Object(m.a)(e.data),[t.payload]),error:null,loading:!1}}),Object(d.a)(a,O.SUCCESS,function(e,t){return{data:e.data.map(function(e){return e.id===t.payload.id?Object(p.a)({},e,t.payload):e}),error:null,loading:!1}}),Object(d.a)(a,g.SUCCESS,function(e,t){return{data:e.data.filter(function(e){return e.id!==t.payload.id}),error:null,loading:!1}}),Object(d.a)(a,O.FAILURE,function(e,t){return Object(p.a)({},e,{error:t.payload.error,loading:!1})}),Object(d.a)(a,g.FAILURE,function(e,t){return Object(p.a)({},e,{error:t.payload.error,loading:!1})}),a)),U=f("FETCH_ALL_GRADES"),w=f("ADD_GRADE"),T=f("UPDATE_GRADE"),_=f("REMOVE_GRADE"),k=function(){return E("FETCH_ALL_GRADES",function(){return Promise.resolve([{id:1,student_id:1,student_name:"Dmitry Tuzenkov",grade:"A",profession:"chemistry",completed_at:new Date("2019-01-04T16:40:00.000Z").toLocaleString()},{id:2,student_id:1,student_name:"Dmitry Tuzenkov",grade:"A",profession:"math",completed_at:new Date("2019-01-04T16:50:00.000Z").toLocaleString()}])})},R=function(e){return E("ADD_GRADE",function(){return Promise.resolve(Object(p.a)({id:Date.now()},e))})},L=function(e,t){return E("UPDATE_GRADE",function(){return Promise.resolve(Object(p.a)({id:e},t))})},F=function(e){return E("REMOVE_GRADE",function(){return Promise.resolve(e)},{resolver:function(){return{id:e}}})},N=C({error:null,loading:!1,data:[]},(D={},Object(d.a)(D,U.REQUEST,function(e,t){return Object(p.a)({},e,{error:null,loading:!0})}),Object(d.a)(D,U.SUCCESS,function(e,t){return{data:t.payload,error:null,loading:!1}}),Object(d.a)(D,U.FAILURE,function(e,t){return{data:[],error:t.payload.error,loading:!1}}),Object(d.a)(D,w.SUCCESS,function(e,t){return{data:[].concat(Object(m.a)(e.data),[t.payload]),error:null,loading:!1}}),Object(d.a)(D,T.SUCCESS,function(e,t){return{data:e.data.map(function(e){return e.id===t.payload.id?Object(p.a)({},e,t.payload):e}),error:null,loading:!1}}),Object(d.a)(D,_.SUCCESS,function(e,t){return{data:e.data.filter(function(e){return e.id!==t.payload.id}),error:null,loading:!1}}),Object(d.a)(D,T.FAILURE,function(e,t){return Object(p.a)({},e,{error:t.payload.error,loading:!1})}),Object(d.a)(D,_.FAILURE,function(e,t){return Object(p.a)({},e,{error:t.payload.error,loading:!1})}),D)),P=Object(u.c)({students:A,grades:N}),G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d;var I=n(282),M=n(281),V=n(19),Q=n(20),H=n(23),Z=n(21),x=n(22),z=n(112),X=n.n(z),q=(n(141),r.Component,n(30)),B=n(59),J=n.n(B),W=n(60),Y=n.n(W),$=n(122),K=n.n($),ee=n(126),te=n.n(ee),ne=n(124),ae=n.n(ne),re=n(125),oe=n.n(re),ie=n(123),le=n.n(ie),ce=n(27),ue=n.n(ce),se=n(113),de=n.n(se),me=n(114),pe=n.n(me),fe=n(56),Ee=n.n(fe),he=n(39),be=n.n(he),Oe=n(115),ge=n.n(Oe),Se=n(116),je=n.n(Se),ve=n(280),ye=function(e){function t(){return Object(V.a)(this,t),Object(H.a)(this,Object(Z.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(de.a,{position:"static"},o.a.createElement(pe.a,null,o.a.createElement(be.a,{color:"inherit","aria-label":"Menu"},o.a.createElement(ge.a,null)),o.a.createElement(Ee.a,{variant:"h6",color:"inherit"},this.props.pageName),o.a.createElement(ue.a,{component:ve.a,to:"/students",color:"inherit"}," Students "),o.a.createElement(ue.a,{component:ve.a,to:"/grades",color:"inherit"}," Grades "),o.a.createElement(be.a,{color:"inherit"},o.a.createElement(je.a,null)))))}}]),t}(o.a.Component),Ce=n(117),De=n.n(Ce),Ae=n(119),Ue=n.n(Ae),we=n(45),Te=n.n(we),_e=n(118),ke=n.n(_e),Re=n(74),Le=n.n(Re),Fe=n(120),Ne=n.n(Fe),Pe=n(121),Ge=n.n(Pe),Ie=function(e){function t(){return Object(V.a)(this,t),Object(H.a)(this,Object(Z.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){var e=this.props,t=e.fields,n=e.rows,a=e.actions;return o.a.createElement("div",null,o.a.createElement(De.a,null,o.a.createElement(ke.a,null,o.a.createElement(Le.a,null,t.map(function(e){return o.a.createElement(Te.a,{key:e}," ",e," ")}),o.a.createElement(Te.a,null," actions "))),o.a.createElement(Ue.a,null,n.map(function(e){return o.a.createElement(Le.a,{key:e.id},t.map(function(t){return o.a.createElement(Te.a,{key:t}," ",e[t]," ")}),o.a.createElement(Te.a,null,o.a.createElement(be.a,{onClick:function(){return a.editAction(e)}},"  ",o.a.createElement(Ne.a,null),"  "),o.a.createElement(be.a,{onClick:function(){return a.deleteAction(e)}},"  ",o.a.createElement(Ge.a,null),"  ")))}))))}}]),t}(o.a.Component),Me=n(32),Ve=n.n(Me),Qe=n(29),He=n.n(Qe),Ze=n(33),xe=n.n(Ze),ze=function(e){function t(){var e,n;Object(V.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(H.a)(this,(e=Object(Z.a)(t)).call.apply(e,[this].concat(r)))).state={first:"",last:"",birthday:(new Date).toLocaleDateString()},n.handleChange=function(e){return function(t){n.setState(Object(d.a)({},e,t.target.value))}},n.submit=function(){(0,n.props.createOrUpdate)({first:n.state.first,last:n.state.last,birthday:n.state.birthday}),n.setState({first:"",last:"",birthday:(new Date).toLocaleDateString()})},n}return Object(x.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){var e=this.props.isCreate;return o.a.createElement("div",null,o.a.createElement(Ve.a,null,o.a.createElement(xe.a,{htmlFor:"component-simple"}," First "),o.a.createElement(He.a,{id:"component-simple",value:this.state.first,onChange:this.handleChange("first")})),o.a.createElement(Ve.a,null,o.a.createElement(xe.a,{htmlFor:"component-simple"}," Last "),o.a.createElement(He.a,{id:"component-simple",value:this.state.last,onChange:this.handleChange("last")})),o.a.createElement(ue.a,{onClick:this.submit}," ",e?"Add":"Update"," student "))}}]),t}(o.a.Component),Xe=Object(q.withStyles)(function(e){return{}},{withTheme:!0})(ze),qe=["id","first","last","age","birthday"],Be=function(e){function t(){var e,n;Object(V.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(H.a)(this,(e=Object(Z.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},n.handleClickOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n}return Object(x.a)(t,e),Object(Q.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchAll()}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.add,a=e.update,r=e.remove,i=this.props.students.map(function(e){return Object(p.a)({age:(t=e.birthday,n=Date.now(),new Date(n).getYear()-new Date(t).getYear())},e);var t,n});return o.a.createElement("div",null,o.a.createElement(ye,{pageName:"Students"}),o.a.createElement(Xe,{isCreate:!0,createOrUpdate:n}),o.a.createElement(Ie,{fields:qe,rows:i,actions:{editAction:function(e){return a(e.id,e)},deleteAction:function(e){return r(e.id)}}}),o.a.createElement(J.a,{onClick:this.handleClickOpen,color:"primary","aria-label":"Add",className:t.fab},o.a.createElement(Y.a,null)),o.a.createElement(K.a,{fullScreen:!1,open:this.state.open,onClose:this.handleClose,"aria-labelledby":"responsive-dialog-title"},o.a.createElement(le.a,{id:"responsive-dialog-title"},"New student"),o.a.createElement(ae.a,null,o.a.createElement(oe.a,null,"For better UI/UX form should be in modal.")),o.a.createElement(te.a,null,o.a.createElement(ue.a,{onClick:this.handleClose,color:"secondary"},"Cancel"),o.a.createElement(ue.a,{onClick:this.handleClose,color:"primary",autoFocus:!0},"Create"))))}}]),t}(o.a.Component),Je=Object(q.withStyles)(function(e){return{fab:{position:"absolute",bottom:2*e.spacing.unit,right:2*e.spacing.unit}}},{withTheme:!0})(Be),We=Object(c.b)(function(e){return{students:e.students.data}},function(e){return Object(u.b)({add:j,update:v,remove:y,fetchAll:S},e)})(Je),Ye=n(2),$e=n.n(Ye),Ke=n(128),et=n.n(Ke),tt=n(127),nt=n.n(tt),at=function(e){return"".concat(e.first," ").concat(e.last)},rt=function(e){function t(e){var n;return Object(V.a)(this,t),(n=Object(H.a)(this,Object(Z.a)(t).call(this,e))).handleChange=function(e){return function(t){n.setState(Object(d.a)({},e,t.target.value))}},n.submit=function(){var e=n.props,t=e.createOrUpdate,a=e.students;t({student_name:n.state.studentName,profession:n.state.profession,grade:n.state.grade,completed_at:n.state.completedAt}),n.setState({studentName:at(a[0]),profession:"",grade:"",completedAt:(new Date).toLocaleDateString()})},n.state={studentName:at(e.students[0]),profession:"",grade:"",completedAt:(new Date).toLocaleDateString()},n}return Object(x.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isCreate,n=e.students;return o.a.createElement("div",null,o.a.createElement(Ve.a,null,o.a.createElement(xe.a,{htmlFor:"component-simple"}," Student "),o.a.createElement(nt.a,{value:this.state.studentName,onChange:this.handleChange("studentName"),inputProps:{name:"age",id:"age-simple"}},n.map(function(e){return o.a.createElement(et.a,{key:e.id,value:at(e)},at(e))}))),o.a.createElement(Ve.a,null,o.a.createElement(xe.a,{htmlFor:"component-simple"}," Profession "),o.a.createElement(He.a,{id:"component-simple",value:this.state.profession,onChange:this.handleChange("profession")})),o.a.createElement(Ve.a,null,o.a.createElement(xe.a,{htmlFor:"component-simple"}," Grade "),o.a.createElement(He.a,{id:"component-simple",value:this.state.grade,onChange:this.handleChange("grade")})),o.a.createElement(ue.a,{onClick:this.submit}," ",t?"Add":"Update"," grade "))}}]),t}(o.a.Component),ot=Object(q.withStyles)(function(e){return{}},{withTheme:!0})(rt),it=["id","student_name","profession","grade","completed_at"],lt=function(e){function t(){return Object(V.a)(this,t),Object(H.a)(this,Object(Z.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(Q.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchAllGrades(),this.props.fetchAllStudents()}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.grades,a=e.students,r=e.add,i=e.remove;return o.a.createElement("div",null,o.a.createElement(ye,{pageName:"Grades"}),a.length&&o.a.createElement(ot,{isCreate:!0,createOrUpdate:r,students:a}),o.a.createElement(Ie,{fields:it,rows:n,actions:{editAction:function(e){return console.log("update",e.id,e)},deleteAction:function(e){return i(e.id)}}}),o.a.createElement(J.a,{color:"primary","aria-label":"Add",className:t.fab},o.a.createElement(Y.a,null)))}}]),t}(o.a.Component);lt.reactProps={grades:$e.a.array,students:$e.a.array.isRequred,fetchAll:$e.a.func.isRequred};var ct=Object(q.withStyles)(function(e){return{fab:{position:"absolute",bottom:2*e.spacing.unit,right:2*e.spacing.unit}}},{withTheme:!0})(lt),ut={Students:We,Grades:Object(c.b)(function(e){return{students:e.students.data,grades:e.grades.data}},function(e){return Object(u.b)({add:R,update:L,remove:F,fetchAllGrades:k,fetchAllStudents:S},e)})(ct)},st=o.a.createElement(I.a,null,o.a.createElement("div",null,o.a.createElement(M.a,{exact:!0,path:"/",component:ut.Students}),o.a.createElement(M.a,{path:"/grades",component:ut.Grades}),o.a.createElement(M.a,{path:"/students",component:ut.Students})));n(278),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(c.a,{store:Object(u.e)(P,G(Object(u.a)(s.a)))},st),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[132,1,2]]]);
//# sourceMappingURL=main.69894188.chunk.js.map