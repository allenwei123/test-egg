webpackJsonp([28],{"3+ly":function(t,e){},UyfU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("2hfY"),n={data:function(){return{data:{},value:"",makeAt:""}},methods:{handleClose:function(){this.$emit("change")},submitForm:function(){},getTime:function(t,e){return null==t?"/":l.a.timestampToFormat(t,e)}},created:function(){},props:["msg"]},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"新增监控",visible:t.msg,"before-close":t.handleClose},on:{"update:visible":function(e){t.msg=e}}},[a("el-form",{attrs:{model:t.data,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"监控",prop:"faultItem"}},[a("el-input",{attrs:{"auto-complete":"off"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"所属楼栋","label-width":"120px"}},[a("el-input",{attrs:{"auto-complete":"off"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"厂商","label-width":"120px"}},[a("el-input",{attrs:{"auto-complete":"off"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"型号","label-width":"120px"}},[a("el-input",{attrs:{"auto-complete":"off"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"设备编号","label-width":"120px"}},[a("el-input",{attrs:{"auto-complete":"off"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")])],1)],1)},staticRenderFns:[]};var i={components:{AddPage:a("VU/8")(n,o,!1,function(t){a("3+ly")},"data-v-2710db1e",null).exports},name:"other",data:function(){return{show:!1,isSou:!1,tableData:[],value1:"",options:[{value:"0",label:"戈尔"},{value:"1",label:"格尔马"},{value:"-1",label:"taiger"}],value2:"",options2:[{value:"0",label:"l"},{value:"1",label:"s"},{value:"-1",label:"sss"}],navDetailData:[{id:1,name:"社区物联"},{id:0,name:"监控管理"},{id:2,name:"监控档案"}],input:"",q_input:"",currentPage:1,loading:!1,isShow:!1,total:0,delData:null,pageSize:10,value3:"",options3:""}},methods:{getPublishStatusName:function(t){return{0:"未运行",1:"正在运行",2:"故障",3:"未知"}[t]},handleClick:function(t){},editHandle:function(t){},add:function(){this.show=!0},addChange:function(){this.show=!1},seeChange:function(t){this.see=!1},query:function(){this.q_input=this.input,1!==this.currentPage?this.currentPage=1:this.getTableList(1)},changeStatus:function(){this.query()},confirmDel:function(){var t=this;this.delData.id&&this.$xttp.get("/community/"+this.delData.id+"/delete").then(function(e){e.errorCode||(t.visible2=!1,t.delData=null,t.$message({message:e.data,type:"success"}),t.query())})},build:function(){var t=this,e="community/building/page?communityId="+this.$store.getters.communityId;this.$xttp.get(e).then(function(e){0===e.errorCode&&(t.loading=!1,t.options3=e.data.records)}).catch(function(){t.loading=!1})},getTableList:function(t){var e=this,a="communityIoT/camera/page?page="+t+"&size="+this.pageSize,l={},n=this.$store.getters.communityId;l.communityId=n,name?l.name=this.input:delete l.name,this.loading=!0,this.$xttp.post(a,l).then(function(t){t.errorCode||(e.tableData=t.data.records,e.currentPage=t.data.currentPage,e.total=t.data.total,e.$router.push({path:e.$route.path,query:{page:nPage}})),e.loading=!1}).catch(function(t){e.loading=!1})}},created:function(){this.query(),this.build()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-main",[a("div",[a("ul",{staticClass:"c-navDetail clear"},t._l(t.navDetailData,function(e,l){return a("li",{key:l},[t._v(t._s(e.name)+" "),l!==t.navDetailData.length-1?a("span",[t._v(" > ")]):t._e()])})),t._v(" "),a("div",{staticClass:"c-search"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-select",{attrs:{placeholder:"品牌",clearable:""},on:{change:t.changeStatus},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("el-select",{attrs:{placeholder:"型号",clearable:""},on:{change:t.changeStatus},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},t._l(t.options2,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("el-select",{attrs:{placeholder:"全部楼栋",clearable:""},on:{change:t.changeStatus},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}},t._l(t.options3,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"监控设备名称"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.query}},[a("i",{staticClass:"iconfont icon-sousuo"},[t._v(" ")]),t._v("查询")])],1),t._v(" "),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("新增监控")])],1)],1)],1)]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{label:"序号",width:"50","show-overflow-tooltip":!0,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s((t.currentPage-1)*t.pageSize+e.$index+1))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"监控设备名称","show-overflow-tooltip":!0,width:"130",align:"center",prop:"name"}}),t._v(" "),a("el-table-column",{attrs:{label:"设备厂商","show-overflow-tooltip":!0,align:"center",prop:"brand"}}),t._v(" "),a("el-table-column",{attrs:{label:"型号","show-overflow-tooltip":!0,align:"center",prop:"brandNo"}}),t._v(" "),a("el-table-column",{attrs:{label:"设备编号","show-overflow-tooltip":!0,align:"center",prop:"deviceId"}}),t._v(" "),a("el-table-column",{attrs:{label:"运行状态","show-overflow-tooltip":!0,align:"center",prop:"cameraStatus"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.getPublishStatusName(e.row.cameraStatus)))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"120",fixed:"right",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handleClick(e.row)}}},[t._v("查看录像")])]}}])})],1),t._v(" "),a("div",{staticClass:"c-block"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.getTableList,"update:currentPage":function(e){t.currentPage=e}}})],1),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.show?a("AddPage",{attrs:{msg:t.show},on:{change:t.addChange}}):t._e()],1)],1)},staticRenderFns:[]};var s=a("VU/8")(i,r,!1,function(t){a("sBLC")},"data-v-07aacf2b",null);e.default=s.exports},sBLC:function(t,e){}});
//# sourceMappingURL=28.b9217752f5529f2d70f6.js.map