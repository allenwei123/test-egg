webpackJsonp([12],{"5nZn":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"班次详情",visible:t.msg,"before-close":t.handleClose},on:{"update:visible":function(e){t.msg=e}}},[a("ul",[a("li",{staticClass:"c-list"},[a("span",{staticClass:"c-label"},[t._v("岗位:")]),t._v(" "),a("span",{staticClass:"c-content"},[t._v(" "+t._s(t._f("postCode")(t.data.postCode))+" ")])]),t._v(" "),a("li",{staticClass:"c-list"},[a("span",{staticClass:"c-label"},[t._v("班次:")]),t._v(" "),a("span",{staticClass:"c-content"},[t._v(" "+t._s(t.data.name)+" ")])]),t._v(" "),a("li",{staticClass:"c-list"},[a("span",{staticClass:"c-label"},[t._v("值班时间:")]),t._v(" "),a("span",{staticClass:"c-content"},[t._v(" "+t._s(t.data.attendTime)+" - "+t._s(t.data.offTime)+" ")])]),t._v(" "),a("li",{staticClass:"c-list"},[a("span",{staticClass:"c-label"},[t._v("出勤地点:")]),t._v(" "),a("span",{staticClass:"c-content"},[t._v(" "+t._s(t.data.attendPlace)+" ")])]),t._v(" "),a("li",{staticClass:"c-list"},[a("span",{staticClass:"c-label"},[t._v("任务:")]),t._v(" "),a("span",{staticClass:"c-content"},[t._v(" "+t._s(t.data.task)+" ")])]),t._v(" "),a("li",{staticClass:"c-list"},[a("span",{staticClass:"c-label"},[t._v("退勤地点:")]),t._v(" "),a("span",{staticClass:"c-content"},[t._v(" "+t._s(t.data.offPlace)+" ")])]),t._v(" "),a("li",{staticClass:"c-list"},[a("span",{staticClass:"c-label"},[t._v("备注信息:")]),t._v(" "),a("span",{staticClass:"c-content"},[t._v(" "+t._s(t.data.remark))])])])])},staticRenderFns:[]};var o=a("VU/8")({name:"ClassSee",data:function(){return{arr:[1,2,4,5]}},props:["msg","data"],created:function(){},methods:{handleClose:function(){this.$emit("upsee",!1)}}},s,!1,function(t){a("NSyF")},"data-v-52dd0407",null).exports,l=[{key:"1",value:"轮班"},{key:"2",value:"长班"}],i={name:"ClassAdd",isShow:!1,data:function(){return{formLabelWidth:"120px",titleFont:"添加班次",show:!1,form:{postCode:"SECURITY",name:"",type:"1",attendPlace:"",attendTime:"",offPlace:"",offTime:"",task:"",remark:"",communityId:this.$store.getters.communityId,propertyId:localStorage.getItem("propertyId")},postOptions:[],current:1,typeOptions:l}},props:["msg","add"],created:function(){this.initRole(),this.add&&(this.form=this.add,this.titleFont="编辑班次")},mounted:function(){},methods:{handleClose:function(){this.$emit("upup",this.current)},showInfo:function(t){this.$message({message:t,type:"warning"})},save:function(){""!=this.form.name?""!=this.form.postCode?""!=this.form.attendTime?""!=this.form.offTime?this.postData():this.showInfo("请选择退勤时间"):this.showInfo("请选择出勤时间"):this.showInfo("请选择岗位"):this.showInfo("请输入班次")},find:function(){var t=this,e=this.formInline.role,a=this.$store.getters.communityId;this.$xttp.post("/task/class/page",{params:{communityId:a,postCode:e}}).then(function(e){e.errorCode||(t.tableData=e.data.records),t.loading=!1}).catch(function(e){t.loading=!1})},postData:function(){var t=this,e=this.add?"编辑":"添加",a=this.add?"/task/class/edit":"/task/class/add";this.$xttp.post(a,this.form).then(function(a){0===a.errorCode?(t.$message({message:e+"班次成功",type:"success"}),t.current=2,t.handleClose(),t.$emit("reload")):t.$message({message:a.data.errorMsg,type:"error"})}).catch(function(t){console.log(t)})},initRole:function(){var t=this,e=this.$store.getters.communityId;this.$xttp.get("/user/property/"+e+"/post-list").then(function(e){e.errorCode||(t.postOptions=e.data)})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.titleFont,visible:t.msg,"before-close":t.handleClose},on:{"update:visible":function(e){t.msg=e}}},[a("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{model:t.form}},[t.show?a("el-form-item",{staticClass:"c-must",attrs:{label:"社区ID:","label-width":t.formLabelWidth,prop:"communityId"}},[a("el-input",{model:{value:t.form.communityId,callback:function(e){t.$set(t.form,"communityId",e)},expression:"form.communityId"}})],1):t._e(),t._v(" "),t.show?a("el-form-item",{staticClass:"c-must",attrs:{label:"物业ID:","label-width":t.formLabelWidth,prop:"propertyId"}},[a("el-input",{model:{value:t.form.propertyId,callback:function(e){t.$set(t.form,"propertyId",e)},expression:"form.propertyId"}})],1):t._e(),t._v(" "),a("el-form-item",{staticClass:"c-must",attrs:{label:"岗位：","label-width":t.formLabelWidth,prop:"postCode"}},[a("el-select",{attrs:{placeholder:"postOptions"},model:{value:t.form.postCode,callback:function(e){t.$set(t.form,"postCode",e)},expression:"form.postCode"}},t._l(t.postOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.name,value:t.key}})}))],1),t._v(" "),a("el-form-item",{staticClass:"c-must",attrs:{label:"班次：","label-width":t.formLabelWidth,prop:"name"}},[a("el-col",{attrs:{span:14}},[a("el-input",{attrs:{placeholder:"请输入班次"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name","string"==typeof e?e.trim():e)},expression:"form.name"}})],1)],1),t._v(" "),t.show?a("el-form-item",{staticClass:"c-must",attrs:{label:"班次类型：","label-width":t.formLabelWidth,prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.typeOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.value,value:t.key}})}))],1):t._e(),t._v(" "),a("el-form-item",{staticClass:"c-must",attrs:{label:"出勤时间：","label-width":t.formLabelWidth}},[a("el-time-select",{attrs:{placeholder:"出勤时间","picker-options":{start:"00:00",step:"00:05",end:"24:00"}},model:{value:t.form.attendTime,callback:function(e){t.$set(t.form,"attendTime",e)},expression:"form.attendTime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"出勤地点：","label-width":t.formLabelWidth,prop:"attendPlace"}},[a("el-col",{attrs:{span:14}},[a("el-input",{attrs:{placeholder:"请输入出勤地点"},model:{value:t.form.attendPlace,callback:function(e){t.$set(t.form,"attendPlace","string"==typeof e?e.trim():e)},expression:"form.attendPlace"}})],1)],1),t._v(" "),a("el-form-item",{staticClass:"c-must",attrs:{label:"退勤时间：","label-width":t.formLabelWidth}},[a("el-time-select",{attrs:{placeholder:"退勤时间","picker-options":{start:"00:00",step:"00:05",end:"24:00"}},model:{value:t.form.offTime,callback:function(e){t.$set(t.form,"offTime",e)},expression:"form.offTime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"退勤地点：","label-width":t.formLabelWidth,prop:"offPlace"}},[a("el-col",{attrs:{span:14}},[a("el-input",{attrs:{placeholder:"请输入退勤地点"},model:{value:t.form.offPlace,callback:function(e){t.$set(t.form,"offPlace","string"==typeof e?e.trim():e)},expression:"form.offPlace"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"任务：","label-width":t.formLabelWidth,prop:"task"}},[a("el-col",{attrs:{span:14}},[a("el-input",{attrs:{placeholder:"请输入任务"},model:{value:t.form.task,callback:function(e){t.$set(t.form,"task","string"==typeof e?e.trim():e)},expression:"form.task"}})],1)],1),t._v(" "),a("el-form-item",{staticClass:"c-nomust",attrs:{label:"备注：","label-width":t.formLabelWidth,prop:"remark"}},[a("el-col",{attrs:{span:14}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入备注"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark","string"==typeof e?e.trim():e)},expression:"form.remark"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{"label-width":t.formLabelWidth}},[a("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.save()}}},[t._v("保存")])],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(i,n,!1,function(t){a("rAXJ")},"data-v-22205087",null).exports,c=a("NYxO"),d=(a("2hfY"),{name:"class",data:function(){return{loading:!1,show:!1,navDetailData:[{id:0,name:"物业管理"},{id:1,name:"作业管理"},{id:2,name:"班次管理"}],formInline:{postCode:"SECURITY"},postOptions:[],tableData:[],pageSize:10,total:0,currentPage:1,input:"",q_input:null,isSee:!1,seeData:null,classData:null,isShow:!1,visible2:!1,delData:null}},computed:Object(c.b)(["showAside"]),components:{SeePage:o,AddPage:r},methods:{query:function(){1!==this.currentPage?this.currentPage=1:this.getTableList()},getTableList:function(){var t=this;this.loading=!0;var e={};e.communityId=this.$store.getters.communityId,e.postCode=this.formInline.postCode;var a="/task/class/page?page="+this.currentPage+"&size="+this.pageSize;this.$xttp.post(a,e).then(function(e){t.loading=!1,0===e.errorCode&&(t.tableData=e.data.records,t.total=e.data.total)}).catch(function(){t.loading=!1})},initPost:function(){var t=this,e=this.$store.getters.communityId;this.$xttp.get("/user/property/"+e+"/post-list").then(function(e){e.errorCode||(t.postOptions=e.data)})},changePostCode:function(){this.query()},addClass:function(){this.classData=null,this.isShow=!this.isShow},seeHandle:function(t){this.isSee=!0,this.seeData=t},editHandle:function(t){this.isShow=!0,this.classData=t},upsee:function(t){this.isSee=!1},change:function(t){1==t?this.isShow=!1:2!=t&&3!=t||(this.isShow=!1)},delHandle:function(t){this.visible2=!0,this.delData=t},confirmDel:function(){var t=this;this.delData.id&&this.$xttp.get("/task/class/"+this.delData.id+"/delete").then(function(e){t.visible2=!1,t.delData=null,t.$message({message:e.data,type:"success"}),t.query()}).catch(function(){t.loading=!1})}},created:function(){this.initPost(),this.query()}}),m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",[a("div",[a("ul",{staticClass:"c-navDetail clear"},t._l(t.navDetailData,function(e,s){return a("li",{key:s},[t._v(t._s(e.name)+" "),s!==t.navDetailData.length-1?a("span",[t._v(" > ")]):t._e()])})),t._v(" "),a("div",{staticClass:"c-search"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[a("el-form-item",{attrs:{label:"岗位"}},[a("el-select",{attrs:{placeholder:"岗位"},on:{change:t.changePostCode},model:{value:t.formInline.postCode,callback:function(e){t.$set(t.formInline,"postCode","string"==typeof e?e.trim():e)},expression:"formInline.postCode"}},t._l(t.postOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.name,value:t.key}})}))],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.query}},[t._v("查询")])],1)],1),t._v(" "),a("el-button",{staticClass:"c-addBtn",attrs:{type:"primary"},on:{click:t.addClass}},[t._v("新增班次")])],1)]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"c-table",staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{label:"序号",width:"80","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s((t.currentPage-1)*t.pageSize+e.$index+1))]}}])}),t._v(" "),t.show?a("el-table-column",{attrs:{label:"ID","min-width":"80",align:"center","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}):t._e(),t._v(" "),a("el-table-column",{attrs:{label:"创建时间","min-width":"160",align:"center","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("time")(e.row.createAt,"yyyy-MM-dd HH:mm:ss")))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"岗位","min-width":"200",align:"center","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("postCode")(e.row.postCode)))]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"班次",align:"center",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"值班时间","min-width":"200",align:"center","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.attendTime)+"~"+t._s(e.row.offTime))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"备注信息",align:"center",width:"250","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.remark))]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",align:"center",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(a){t.editHandle(e.row)}}},[t._v("编辑")])]}}])})],1),t._v(" "),a("div",{staticClass:"c-pagination"},[a("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper",total:t.total,"page-size":t.pageSize,"current-page":t.currentPage},on:{"current-change":t.getTableList,"update:currentPage":function(e){t.currentPage=e}}})],1),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.isSee?a("SeePage",{attrs:{msg:t.isSee,data:t.seeData},on:{upsee:t.upsee}}):t._e(),t._v(" "),t.isShow?a("AddPage",{attrs:{msg:t.isShow,add:t.classData},on:{reload:t.query,upup:t.change,"update:add":function(e){t.classData=e}}}):t._e()],1),t._v(" "),a("el-dialog",{attrs:{title:"温馨提示",visible:t.visible2},on:{"update:visible":function(e){t.visible2=e}}},[a("p",[t._v("请问您确定要删除这条数据吗？")]),t._v(" "),a("div",{staticStyle:{"text-align":"right",marigin:"0"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.visible2=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.confirmDel}},[t._v("确定")])],1)])],1)],1)},staticRenderFns:[]};var f=a("VU/8")(d,m,!1,function(t){a("dgyw")},"data-v-3cc77774",null);e.default=f.exports},NSyF:function(t,e){},dgyw:function(t,e){},rAXJ:function(t,e){}});
//# sourceMappingURL=12.2032c0b2800a10fea5dc.js.map