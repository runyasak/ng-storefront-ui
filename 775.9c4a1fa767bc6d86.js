"use strict";(self.webpackChunkdemo_app=self.webpackChunkdemo_app||[]).push([[775],{775:(D,i,r)=>{r.r(i),r.d(i,{ExampleSfInputPageComponent:()=>T});var e=r(8259),s=r(9576),c=r(6834),m=r(7721),C=r(6433),d=r(3527),l=r(9225);function h(t,n){if(1&t&&(e.TgZ(0,"p",8),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.hij(" ",o.prepareControlsData.state().errorText," ")}}const u=function(t){return[t]};function x(t,n){if(1&t&&(e.TgZ(0,"p",9),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.Q6J("ngClass",e.VKq(2,u,o.prepareControlsData.state().disabled?"text-disabled-500":"text-neutral-500")),e.xp6(1),e.hij(" ",o.prepareControlsData.state().helpText," ")}}function g(t,n){if(1&t&&(e.TgZ(0,"p",10),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.hij(" ",o.prepareControlsData.state().requiredText," ")}}function _(t,n){if(1&t&&(e.TgZ(0,"p",9),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.Q6J("ngClass",e.VKq(2,u,o.prepareControlsData.state().disabled?"text-disabled-500":o.characterLimitClass())),e.xp6(1),e.hij(" ",o.charsCount()," ")}}const f=function(t){return{"cursor-not-allowed text-disabled-500":t}},y=function(t,n){return[t,n]};let T=(()=>{var t;class n{constructor(p){this.controlService=p,this.inputControl=new l.NI(""),this.characterLimit=(0,e.tdS)(12),this.isAboveLimit=(0,e.Flj)(()=>(this.inputControl.value||"").length>this.characterLimit()),this.charsCount=(0,e.Flj)(()=>this.characterLimit()-(this.inputControl.value||"").length),this.characterLimitClass=(0,e.Flj)(()=>this.isAboveLimit()?"text-negative-700 font-medium":"text-neutral-500"),this.controls=[{type:"select",modelName:"size",propDefaultValue:"SfInputSize.base",propType:"SfInputSize",options:Object.keys(m.y)},{type:"text",propType:"string",modelName:"label"},{type:"text",propType:"string",modelName:"placeholder"},{type:"text",propType:"string",modelName:"helpText"},{type:"text",propType:"string",modelName:"requiredText"},{type:"text",propType:"string",modelName:"errorText"},{type:"text",propType:"number",modelName:"characterLimit"},{type:"boolean",propType:"boolean",modelName:"disabled"},{type:"boolean",propType:"boolean",modelName:"required"},{type:"boolean",propType:"boolean",modelName:"invalid",description:"Support with Reactive Forms, `ng-invalid`"},{type:"boolean",propType:"boolean",modelName:"readonly"}],this.prepareControlsData=this.controlService.prepareControls(this.controls,{size:m.y.base,disabled:!1,required:!1,invalid:!1,readonly:!1,placeholder:"Placeholder text",helpText:"Help text",requiredText:"Required text",errorText:"Error text",label:"Label",characterLimit:this.characterLimit()}),(0,e.cEC)(()=>{this.prepareControlsData.state().invalid?(this.inputControl.markAsTouched(),this.inputControl.setValidators(()=>({example:!0})),this.inputControl.setErrors({example:!0})):(this.inputControl.markAsPristine(),this.inputControl.clearValidators(),this.inputControl.setErrors(null))}),(0,e.cEC)(()=>{this.prepareControlsData.state().disabled?this.inputControl.disable():this.inputControl.enable()})}}return(t=n).\u0275fac=function(p){return new(p||t)(e.Y36(d.B))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,features:[e._Bn([d.B]),e.jDz],decls:13,vars:19,consts:[[3,"controls","state"],[1,"typography-text-sm","font-medium",3,"ngClass"],[3,"size","placeholder","formControl","readOnly","wrapperClass"],[1,"flex","justify-between"],["class","typography-text-sm text-negative-700 font-medium mt-0.5",4,"ngIf"],["class","typography-text-xs mt-0.5",3,"ngClass",4,"ngIf"],["class","mt-1 typography-text-sm font-normal text-neutral-500 before:content-['*']",4,"ngIf"],[1,"flex","pt-4","gap-4"],[1,"typography-text-sm","text-negative-700","font-medium","mt-0.5"],[1,"typography-text-xs","mt-0.5",3,"ngClass"],[1,"mt-1","typography-text-sm","font-normal","text-neutral-500","before:content-['*']"]],template:function(p,a){1&p&&(e.TgZ(0,"app-example-wrapper",0)(1,"label")(2,"span",1),e._uU(3),e.qZA(),e._UZ(4,"sf-input",2),e.qZA(),e.TgZ(5,"div",3)(6,"div"),e.YNc(7,h,2,1,"p",4),e.YNc(8,x,2,4,"p",5),e.YNc(9,g,2,1,"p",6),e.qZA(),e.YNc(10,_,2,4,"p",5),e.qZA(),e.TgZ(11,"div",7),e._uU(12),e.qZA()()),2&p&&(e.Q6J("controls",a.controls)("state",a.prepareControlsData.state),e.xp6(2),e.Q6J("ngClass",e.VKq(14,f,a.prepareControlsData.state().disabled)),e.xp6(1),e.hij(" ",a.prepareControlsData.state().label," "),e.xp6(1),e.Q6J("size",a.prepareControlsData.state().size)("placeholder",a.prepareControlsData.state().placeholder)("formControl",a.inputControl)("readOnly",a.prepareControlsData.state().readonly)("wrapperClass",e.WLB(16,y,a.inputControl.disabled?"!bg-disabled-100 !ring-disabled-300 !ring-1 !text-disabled-500":"",a.prepareControlsData.state().readonly?"!bg-disabled-100 !ring-disabled-300 !ring-1 !text-neutral-500":"")),e.xp6(3),e.Q6J("ngIf",a.inputControl.invalid&&!a.inputControl.disabled),e.xp6(1),e.Q6J("ngIf",a.prepareControlsData.state().helpText),e.xp6(1),e.Q6J("ngIf",a.prepareControlsData.state().requiredText&&a.prepareControlsData.state().required),e.xp6(1),e.Q6J("ngIf",a.prepareControlsData.state().characterLimit&&!a.prepareControlsData.state().readonly),e.xp6(2),e.hij("Form value: ",a.inputControl.value,""))},dependencies:[s.ez,s.mk,s.O5,c.h,l.UX,l.JJ,l.oH,C.p],encapsulation:2,changeDetection:0}),n})()}}]);