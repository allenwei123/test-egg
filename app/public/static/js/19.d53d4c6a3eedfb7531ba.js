webpackJsonp([19],{"2OOh":function(t,e){},"93E2":function(t,e){},Bkht:function(t,e){},g4Q9:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("2hfY"),l={data:function(){return{billDetailList:"",propertyBill:"",pay:"",roomLocation:"",proprietorName:""}},methods:{handleClose:function(){this.$emit("upsee")},print:function(){var t=document.getElementsByClassName("printOrder-data")[0].innerHTML;return document.body.innerHTML=t,window.print(),window.location.reload(),!1},payBillStatus:function(t){return{1:"线上收费",2:"人工收费"}[t]},getBillStatusName:function(t){return{0:"待缴费",1:"已缴费","-1":"待生效",2:"已超期"}[t]},getTime:function(t,e){return null==t?"/":a.a.timestampToFormat(t,e)}},props:["msg","detail"],created:function(){console.log(this.detail),this.propertyBill=this.detail.propertyBill,this.billDetailList=this.detail.billDetailList;var t=this.propertyBill;this.pay=this.getBillStatusName(t.billStatus),this.roomLocation=t.roomLocation,this.proprietorName=t.proprietorName}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:t.pay+"账单",visible:t.msg,"before-close":t.handleClose},on:{"update:visible":function(e){t.msg=e}}},[i("div",{staticClass:"printOrder-data"},[i("div",{staticClass:"title"},[i("h1",[t._v(t._s(t.$store.getters.communityName)+t._s(t.detail.feeItemName)+"账单")])]),t._v(" "),i("div",{staticClass:"bill"},[i("div",{staticClass:"header"},[i("ul",[i("li",[t._v("楼栋房号："+t._s(t.roomLocation))]),t._v(" "),i("li",[t._v("姓名："+t._s(t.proprietorName))])])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("项目")]),t._v(" "),i("th",[t._v("用量")]),t._v(" "),i("th",[t._v("单价")]),t._v(" "),i("th",[t._v("金额")]),t._v(" "),i("th",[t._v("备注")])])]),t._v(" "),i("tbody",[t._l(t.billDetailList,function(e,a){return i("tr",{key:a},[i("td",[t._v(t._s(e.feeItemName))]),t._v(" "),i("td",[t._v(t._s(e.used))]),t._v(" "),i("td",[t._v(t._s((e.unitPrice/1e4).toFixed(2)))]),t._v(" "),i("td",[t._v(t._s((e.currentFee/1e4).toFixed(2)))]),t._v(" "),i("td",[t._v(t._s(e.remark))])])}),t._v(" "),i("tr",[i("td",[t._v("合计")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"4"}},[t._v(t._s((t.propertyBill.totalPrice/1e4).toFixed(2)))])]),t._v(" "),i("tr",[i("td",[t._v("大写金额")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"4"}},[t._v(t._s(t._f("digitUppercase")((t.propertyBill.totalPrice/1e4).toFixed(2))))])]),t._v(" "),i("tr",[i("td",[t._v("缴纳状态")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"4"}},[t._v(t._s(t.getBillStatusName(t.propertyBill.billStatus)))])]),t._v(" "),i("tr",[i("td",[t._v("缴纳人")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"4"}},[t._v(t._s(t.propertyBill.proprietorName))])]),t._v(" "),i("tr",[i("td",[t._v("缴纳方式")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"4"}},[t._v(t._s(t.payBillStatus(t.propertyBill.receiveWay)))])]),t._v(" "),"已缴费"===t.pay?i("tr",[i("td",[t._v("缴纳时间")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"4"}},[t._v(t._s(t.getTime(t.propertyBill.updateAt,"yyyy-MM-dd HH:mm")))])]):t._e()],2)])])]),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.handleClose}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.print}},[t._v("打印账单")])],1)])},staticRenderFns:[]};var s={data:function(){return{value:"",makeAt:"",area:"",totalPrice:"",options:"",fees:""}},methods:{handleClose:function(){this.$emit("change")},submitForm:function(){this.$emit("edit")},getTime:function(t,e){return null==t?"/":a.a.timestampToFormat(t,e)},postData:function(){var t=this,e="fees/property-bill/"+this.data.id+"/details/list";this.$xttp.get(e).then(function(e){0===e.errorCode&&(t.loading=!1,t.totalPrice=e.data.propertyBill.totalPrice,t.options=e.data.billDetailList,console.log("res",t.options))}).catch(function(){t.loading=!1})},roomArea:function(){var t=this,e="community/room/"+this.data.roomId+"/detail";this.$xttp.get(e).then(function(e){0===e.errorCode&&(t.loading=!1,t.area=e.data.area)}).catch(function(){t.loading=!1})}},created:function(){this.makeAt=this.getTime(this.data.makeAt,"yyyy-MM-dd HH:mm"),this.postData(),this.roomArea(),console.log(22,this)},props:["msg","data"]},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:"编辑账单",visible:t.msg,"before-close":t.handleClose},on:{"update:visible":function(e){t.msg=e}}},[i("el-form",{attrs:{model:t.data,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"账单日期",prop:"faultItem",required:""}},[i("span",[t._v(t._s(t.makeAt))])]),t._v(" "),i("el-form-item",{attrs:{label:"楼栋房号","label-width":"120px",required:""}},[i("span",[t._v(t._s(t.data.roomLocation))])]),t._v(" "),i("el-form-item",{attrs:{label:"住房面积","label-width":"120px",required:""}},[i("span",[t._v(t._s(t.area/100+"平方"))])]),t._v(" "),t._l(t.options,function(e,a){return 3!==e.type?i("el-form-item",{key:a,attrs:{label:e.feeItemName,"label-width":"120px",required:""}},[i("span",{staticClass:"fee1"},[t._v(t._s((e.currentFee/1e4).toFixed(2)+"元"))]),t._v(" "),i("span",{staticClass:"fee2"},[t._v(t._s((e.unitPrice/1e4).toFixed(2)+"元/平方"))])]):t._e()}),t._v(" "),t._l(t.options,function(e,a){return 3===e.type?i("el-form-item",{key:a,attrs:{label:e.feeItemName,"label-width":"120px",required:""}},[i("el-input",{attrs:{placeholder:"收费项目","auto-complete":"off"}},[t._v(t._s((e.currentFee/1e4).toFixed(2)+"元"))]),t._v(" "),i("el-input",{attrs:{placeholder:"收费金额","auto-complete":"off"},model:{value:t.fees,callback:function(e){t.fees=e},expression:"fees"}},[t._v(t._s((e.unitPrice/1e4).toFixed(2)+"元/平方"))])],1):t._e()}),t._v(" "),i("el-form-item",{attrs:{label:"账单总额","label-width":"120px",required:""}},[i("span",[t._v(t._s(1*(t.totalPrice/1e4).toFixed(3)+1*t.fees+"元"))])]),t._v(" "),i("el-form-item",{attrs:{label:"备注"}},[i("el-input",{attrs:{type:"textarea",rows:5}})],1)],2),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")])],1)],1)},staticRenderFns:[]};var r={components:{BillDetail:i("VU/8")(l,n,!1,function(t){i("2OOh")},"data-v-11c93898",null).exports,EditPage:i("VU/8")(s,o,!1,function(t){i("Bkht")},"data-v-cc854b4c",null).exports},data:function(){return{value1:"",options:[{value:"0",label:"待缴费"},{value:"1",label:"已缴费"},{value:"-1",label:"待生效"},{value:"2",label:"已超期"}],navDetailData:[{id:0,name:"物业管理"},{id:1,name:"收费管理"},{id:2,name:"账单管理"}],loading:!1,status:"",date:"",tableData:[],pageSize:10,total:0,currentPage:1,input:"",q_input:null,see:!1,seeData:null,show:!1,editData:"",visible1:!1,confirmData:"",text:"",warn:"",visible2:!1,value2:"",options2:"",visible3:!1}},methods:{query:function(){this.q_input=this.input,1!==this.currentPage?this.currentPage=1:this.getTableList(1)},changeStatus:function(){this.query()},seeDetail:function(t){var e=this,i="fees/property-bill/"+t.id+"/details/list";this.$xttp.get(i).then(function(t){0===t.errorCode&&(e.seeData=t.data,e.see=!0)}).catch(function(){e.loading=!1})},seeChange:function(){this.see=!1},edit:function(t){this.show=!0,this.editData=t},editChange:function(){this.show=!1},editSuccess:function(){this.show=!1,this.getTableList(1)},callAll:function(){this.visible3=!0},confirmCall:function(){this.visible3=!1,this.pushAll()},pushAll:function(){var t=this,e="fees/property-bill/"+this.$store.getters.communityId+"/push-all-overdue-bill";this.$xttp.get(e).then(function(e){0===e.errorCode&&(t.loading=!1,t.$message({message:"一键催交成功",type:"success"}))}).catch(function(){t.loading=!1,t.$message.error("失败")})},takeAll:function(){this.visible2=!0},confirmAll:function(){this.visible2=!1,this.publishAll()},publishAll:function(){var t=this,e={},i=this.$store.getters.communityId;e.communityId=i,e.propertyId="5a82adee9ce976452b7001ee",this.$xttp.post("fees/property-bill/publishAll",e).then(function(e){if(0===e.errorCode){t.loading=!1,t.$message({message:"全部生效成功",type:"success"});var i="fees/property-bill/page?page="+t.currentPage+"&size="+t.pageSize,a={},l=t.$store.getters.communityId;a.communityId=l,t.$xttp.post(i,a).then(function(e){t.loading=!1,0===e.errorCode&&(t.loading=!1,t.tableData=e.data.records,t.tableData.filter(function(t){if(-1===t.billStatus)return 0===t.billStatus}),t.total=e.data.total)}).catch(function(){t.loading=!1})}}).catch(function(){t.loading=!1,t.$message.error("失败")})},take:function(t,e){switch(this.visible1=!0,this.text=e.currentTarget.innerText,this.text){case"生效":this.warn="生效后账单将发送给对应业主，且不可再次修改，是否立即生效？";break;case"提醒缴费":this.warn="是否提醒业主尽快缴纳本期物业管理费？";break;case"催缴":this.warn="是否提醒业主物业管理费超期未缴，必须尽快缴纳！";break;case"确认缴费":this.warn="是否确定业主已经缴纳本期物业管理费？";break;case"一键催交":this.warn="是否提醒2018年2月物业管理费超期未缴账单相关业主尽快缴费"}this.confirmData=t},confirm:function(t){switch(this.visible1=!1,this.text){case"生效":case"提醒缴费":case"催缴":this.confirmData.billStatus=0;break;case"确认缴费":this.confirmData.billStatus=1;break;case"一键催交":this.confirmData.billStatus=0}this.publish(this.confirmData)},publish:function(t){var e=this;switch(this.text){case"生效":var i="fees/property-bill/"+t.id+"/publish";break;case"提醒缴费":i="fees/property-bill/"+t.id+"/push-unPay-bill";break;case"催缴":i="fees/property-bill/"+t.id+"/push-overdue-bill";break;case"确认缴费":i="fees/property-bill/"+t.id+"/payment"}this.$xttp.get(i).then(function(t){0===t.errorCode&&(e.loading=!1,e.$message({message:e.text+"成功",type:"success"}))}).catch(function(){e.loading=!1,e.$message.error("失败")})},getBillStatusName:function(t){return{0:"待缴费",1:"已缴费","-1":"待生效",2:"已超期"}[t]},payBillStatus:function(t){return{1:"线上收费",2:"人工收费"}[t]},getTableList:function(t){var e=this,i="fees/property-bill/page?page="+t+"&size="+this.pageSize,a={},l=this.$store.getters.communityId;a.communityId=l,this.date&&(a.makeBillAt=this.date),this.value1&&(a.billStatusSet=[this.value1]),this.q_input&&(a.roomNo=this.q_input),this.value2&&(a.buildingId=this.value2),this.loading=!0,this.$xttp.post(i,a).then(function(t){e.loading=!1,0===t.errorCode&&(e.loading=!1,console.log("res",t.data.records),e.tableData=t.data.records,e.total=t.data.total)}).catch(function(){e.loading=!1})},viewDetail:function(t){this.detailInfo=t,this.detailVisible=!0},getTime:function(t,e){return null==t?"/":a.a.timestampToFormat(t,e)},build:function(){var t=this,e="community/building/page?communityId="+this.$store.getters.communityId;this.$xttp.get(e).then(function(e){0===e.errorCode&&(t.loading=!1,t.options2=e.data.records,console.log("build",e))}).catch(function(){t.loading=!1})}},created:function(){this.getTableList(1),this.build()}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-main",[i("ul",{staticClass:"c-navDetail clear"},t._l(t.navDetailData,function(e,a){return i("li",{key:a},[t._v(t._s(e.name)+" "),a!==t.navDetailData.length-1?i("span",[t._v(" > ")]):t._e()])})),t._v(" "),i("div",{staticClass:"c-notice-container"},[i("div",{staticClass:"c-search"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[i("el-form-item",{attrs:{width:"80"}},[i("el-select",{attrs:{placeholder:"全部状态",clearable:""},on:{change:t.changeStatus},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},t._l(t.options,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:""}},[i("el-date-picker",{attrs:{type:"month",format:"yyyy年MM月","value-format":"yyyy/MM/01",placeholder:"账单日期",clearable:""},on:{change:t.changeStatus},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),t._v(" "),i("el-select",{attrs:{placeholder:"全部楼栋",clearable:""},on:{change:t.changeStatus},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},t._l(t.options2,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),i("el-form-item",{attrs:{label:""}},[i("el-input",{attrs:{placeholder:"房号"},model:{value:t.input,callback:function(e){t.input="string"==typeof e?e.trim():e},expression:"input"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:t.query}},[t._v("查询")])],1),t._v(" "),i("el-form-item",{staticStyle:{float:"right"}},[i("el-button",{staticClass:"c-addBtn",attrs:{type:"primary"},on:{click:t.takeAll}},[t._v("全部生效")])],1),t._v(" "),i("el-form-item",{staticStyle:{float:"right"}},[i("el-button",{staticClass:"c-addBtn1",attrs:{type:"primary"},on:{click:t.callAll}},[t._v("一键催交")])],1)],1)],1),t._v(" "),i("div",{staticClass:"c-list"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[i("el-table-column",{attrs:{label:"账单号",width:"80","show-overflow-tooltip":!0,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s((t.currentPage-1)*t.pageSize+e.$index+1))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"roomLocation",label:"楼栋房号",width:"180","show-overflow-tooltip":!0,align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"proprietorName",label:"业主姓名","min-width":"120","show-overflow-tooltip":!0,align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"totalPrice",label:"账单金额","min-width":"120","show-overflow-tooltip":!0,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s((e.row.totalPrice/1e4).toFixed(2)))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"makeAt",label:"账单生成日",width:"180","show-overflow-tooltip":!0,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.getTime(e.row.makeAt,"yyyy-MM-dd HH:mm")))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"billStatus",label:"账单状态","min-width":"120","show-overflow-tooltip":!0,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.getBillStatusName(e.row.billStatus)))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"receiveWay",label:"缴费方式","min-width":"120","show-overflow-tooltip":!0,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.payBillStatus(e.row.receiveWay)))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"updateAt",label:"缴费时间",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return 1===e.row.billStatus?[t._v(t._s(t.getTime(e.row.updateAt,"yyyy-MM-dd HH:mm")))]:void 0}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",width:"300",fixed:t.tableData.length?"right":"/",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){t.seeDetail(e.row)}}},[t._v("查看详情")]),t._v(" "),-1===e.row.billStatus?[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){t.edit(e.row)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(i){t.take(e.row,i)}}},[t._v("生效")])]:t._e(),t._v(" "),0===e.row.billStatus?[i("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(i){t.take(e.row,i)}}},[t._v("提醒缴费")]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){t.take(e.row,i)}}},[t._v("确认缴费")])]:t._e(),t._v(" "),2===e.row.billStatus?[i("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(i){t.take(e.row,i)}}},[t._v("催缴")]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){t.take(e.row,i)}}},[t._v("确认缴费")])]:t._e()]}}])})],1)],1),t._v(" "),i("div",{staticClass:"c-pagination"},[i("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper",total:t.total,"page-size":t.pageSize,"current-page":t.currentPage},on:{"current-change":t.getTableList,"update:currentPage":function(e){t.currentPage=e}}})],1)]),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.see?i("BillDetail",{attrs:{msg:t.see,detail:t.seeData},on:{upsee:t.seeChange}}):t._e()],1),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.show?i("EditPage",{attrs:{msg:t.show,data:t.editData},on:{change:t.editChange,edit:t.editSuccess}}):t._e()],1),t._v(" "),i("el-dialog",{attrs:{title:"温馨提示",visible:t.visible1},on:{"update:visible":function(e){t.visible1=e}}},[i("p",{staticClass:"p-center"},[t._v(t._s(t.text))]),t._v(" "),i("p",[t._v(t._s(t.warn))]),t._v(" "),i("div",{staticStyle:{"text-align":"right",margin:"0"}},[i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.visible1=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.confirm}},[t._v("确定")])],1)]),t._v(" "),i("el-dialog",{attrs:{title:"温馨提示",visible:t.visible2},on:{"update:visible":function(e){t.visible2=e}}},[i("p",{staticClass:"p-center"},[t._v("全部生效")]),t._v(" "),i("p",[t._v("生效后账单将发送给对应业主，且不可再次修改，是否立即生效？")]),t._v(" "),i("div",{staticStyle:{"text-align":"right",margin:"0"}},[i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.visible2=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.confirmAll}},[t._v("确定")])],1)]),t._v(" "),i("el-dialog",{attrs:{title:"温馨提示",visible:t.visible3},on:{"update:visible":function(e){t.visible3=e}}},[i("p",{staticClass:"p-center"},[t._v("一键催交")]),t._v(" "),i("p",[t._v("是否提醒物业管理费超期未缴账单相关业主尽快缴费！")]),t._v(" "),i("div",{staticStyle:{"text-align":"right",margin:"0"}},[i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.visible3=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.confirmCall}},[t._v("确定")])],1)])],1)],1)},staticRenderFns:[]};var u=i("VU/8")(r,c,!1,function(t){i("93E2")},"data-v-01b7370c",null);e.default=u.exports}});
//# sourceMappingURL=19.d53d4c6a3eedfb7531ba.js.map