(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/to_do_app_vuecli/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},1206:function(t,e,n){"use strict";var a=n("2eb1"),i=n.n(a);i.a},"2eb1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"mainTitle"}},[t._v("To Do App")]),n("Calendar",{on:{visibilityChange:t.updateVisibility}})],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"calendarComp"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.calendarShowing,expression:"calendarShowing"}],attrs:{id:"calendar"}},t._l(t.days,(function(e){return n("div",{key:e[0],staticClass:"day"},[0!=e.length?n("div",{staticClass:"dateLabel"},[t._v(" "+t._s(e[0])+" "),e.length>1?n("div",t._l(e.length-1,(function(a){return n("div",{key:a,staticClass:"task"},[n("button",{on:{click:function(n){return t.taskClick(e[a][0])}}},[t._v(t._s(e[a][1]))])])})),0):t._e()]):t._e()])})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:t.taskShowing,expression:"taskShowing"}],attrs:{id:"task"}},[n("Task",{attrs:{task:t.clickedTask}}),n("button",{attrs:{id:"goBack"},on:{click:t.goBack}},[t._v("Go Back")])],1)])},o=[],c=(n("7db0"),n("4160"),n("d3b7"),n("ac1f"),n("1276"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!=t.task?n("div",{attrs:{id:"task"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.editing,expression:"!editing"}],attrs:{id:"taskData"}},[t._v(" Task Name: "+t._s(t.task[1])),n("br"),t._v(" Due Date: "+t._s(this.date)+" "),1===t.task[3]?n("div",{attrs:{id:"completed"}},[t._v(" Completed ")]):t._e(),0===t.task[3]?n("div",{attrs:{id:"notCompleted"}},[t._v(" Not Completed ")]):t._e()]),n("button",{directives:[{name:"show",rawName:"v-show",value:!t.editing,expression:"!editing"}],attrs:{id:"editButton"},on:{click:t.editClick}},[t._v("Edit")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"}],attrs:{id:"editTask"}},[n("label",{attrs:{for:"taskName"}},[t._v("Task Name")]),n("input",{attrs:{type:"text",id:"taskName",name:"taskName"}}),n("label",{attrs:{for:"dueDate"}},[t._v("Due Date")]),n("input",{attrs:{type:"date",id:"dueDate",name:"dueDate"}}),n("br"),n("label",{attrs:{for:"completed"}},[t._v("Completed")]),n("input",{attrs:{type:"checkbox",name:"completed",id:"completed"}}),n("br"),n("br"),n("br"),n("button",{attrs:{id:"cancel"},on:{click:t.cancelClick}},[t._v("Cancel")]),n("button",{attrs:{id:"submit"},on:{click:t.submitClick}},[t._v("Submit")])])]):t._e()}),l=[],d=(n("99af"),{name:"Task",props:{task:{required:!0}},data:function(){return{completed:!1,editing:!1,date:null}},watch:{task:function(t){this.editing=!1,1===t[3]?(console.log("True"),this.completed=!0):this.completed=!1;var e=this.task[2].split("-");this.date="".concat(e[1],"-").concat(e[2],"-").concat(e[0])}},methods:{editClick:function(){document.getElementById("taskName").value=this.task[1],document.getElementById("dueDate").value=this.task[2],document.getElementById("completed").value=this.task[3],this.editing=!0},cancelClick:function(){this.editing=!1},submitClick:function(){var t={id:this.task[0],name:document.getElementById("taskName").value,due:document.getElementById("dueDate").value,completed:document.getElementById("completed").value};fetch("http://127.0.0.1:5000/updatetask",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),this.editing=!1}}}),u=d,p=(n("bd8d"),n("2877")),h=Object(p["a"])(u,c,l,!1,null,null,null),f=h.exports,v={name:"Calendar",components:{Task:f},data:function(){return{days:[],calendarShowing:!0,taskShowing:!1,taskList:null,clickedTask:null}},methods:{taskClick:function(t){this.calendarShowing=!1,this.clickedTask=this.taskList.find((function(e){return e[0]===t})),this.taskShowing=!0},goBack:function(){this.taskShowing=!1,this.calendarShowing=!0}},created:function(){for(var t=this,e=new Date,n=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),a=0;a<n;a++)this.days[a]=[a+1];fetch("https://tranquil-mountain-10354.herokuapp.com/gettasks").then((function(t){return t.json()})).then((function(n){t.taskList=n,n.forEach((function(n){var a=n[2].split("-");e.getFullYear()===parseInt(a[0])&&e.getMonth()+1===parseInt(a[1])&&t.days[parseInt(a[2])-1].push(n)}));for(var a=new Date(e.getFullYear(),e.getMonth(),1).getDay(),i=0;i<a;i++)t.days.unshift([]);for(var s=t.days.length;s<35;s++)t.days.push([])}))}},m=v,k=(n("1206"),Object(p["a"])(m,r,o,!1,null,null,null)),g=k.exports,b={name:"App",components:{Calendar:g},data:function(){return{calendarShow:!1,taskShow:!1}},methods:{updateVisibility:function(t,e){"calendar"===t?this.calendarShow=e:"task"===t&&(this.taskShow=e)}}},w=b,y=(n("034f"),Object(p["a"])(w,i,s,!1,null,null,null)),_=y.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(_)}}).$mount("#app")},"85ec":function(t,e,n){},bd8d:function(t,e,n){"use strict";var a=n("f224"),i=n.n(a);i.a},f224:function(t,e,n){}});
//# sourceMappingURL=app.0f0d5d1c.js.map