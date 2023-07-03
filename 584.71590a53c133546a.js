"use strict";(self.webpackChunkdemo_app=self.webpackChunkdemo_app||[]).push([[584],{7584:(h,p,n)=>{n.r(p),n.d(p,{ExamplesSfListItemPageComponent:()=>g});var l=n(725),m=n(8687),r=n(1606),i=n(5128),c=n(2189),e=n(3597);function d(t,a){1&t&&e._UZ(0,"sf-icon-tune",7)}const f=function(t){return{"!text-disabled-500":t}};function _(t,a){if(1&t&&(e.TgZ(0,"sf-counter",8),e._uU(1),e.qZA()),2&t){const s=e.oxw();e.Q6J("ngClass",e.VKq(3,f,s.prepareControlsData.state().disabled))("size","sm"===s.prepareControlsData.state().size?"sm":"base"),e.xp6(1),e.hij(" ",s.prepareControlsData.state().counter," ")}}function u(t,a){1&t&&e._UZ(0,"sf-icon-chevron-right",9)}const C=function(t,a){return{truncate:t,"!text-disabled-500":a}};let g=(()=>{class t{constructor(s){this.controlService=s,this.controls=[{type:"text",modelName:"tag",description:"Change a tag to any other tag"},{type:"text",modelName:"label",propType:"string",description:"Set label value"},{type:"text",modelName:"secondaryText",propType:"string",description:"Set secondary text"},{type:"text",modelName:"counter",propType:"string",description:"Set counter value"},{type:"select",modelName:"slotPrefix",description:"Custom component that could be placed before the element.",options:["none","Tune icon"]},{type:"select",modelName:"slotSuffix",description:"Custom component that could be placed after the element.",options:["none","Chevron right icon"]},{type:"select",modelName:"size",options:Object.keys(i.$),description:"Set size variant"},{type:"boolean",modelName:"disabled",description:"Show disabled state of component"},{type:"boolean",modelName:"selected",description:"Show selected state of component"},{type:"boolean",modelName:"truncate",description:"Show truncated version of secondary text"}],this.prepareControlsData=this.controlService.prepareControls(this.controls,{label:"Label",size:i.$.base,counter:"123",slotPrefix:void 0,slotSuffix:void 0,secondaryText:"Secondary text",disabled:!1,selected:!1,truncate:!1})}handleClick(){this.prepareControlsData.state.update(s=>({...s,selected:!s.selected}))}}return t.\u0275fac=function(s){return new(s||t)(e.Y36(c.B))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,features:[e._Bn([c.B]),e.jDz],decls:9,vars:14,consts:[[3,"controls","state"],["sf-list-item","",1,"max-w-sm",3,"size","disabled","selected","click","keypress"],["prefix","",4,"ngIf"],[1,"bread-words","flex","gap-2"],["class","font-normal",3,"ngClass","size",4,"ngIf"],[1,"text-xs","font-normal","break-words","text-neutral-500",3,"ngClass"],["suffix","",4,"ngIf"],["prefix",""],[1,"font-normal",3,"ngClass","size"],["suffix",""]],template:function(s,o){1&s&&(e.TgZ(0,"app-example-wrapper",0)(1,"li",1),e.NdJ("click",function(){return o.handleClick()})("keypress",function(){return o.handleClick()}),e.YNc(2,d,1,0,"sf-icon-tune",2),e.TgZ(3,"span",3),e._uU(4),e.YNc(5,_,2,5,"sf-counter",4),e.qZA(),e.TgZ(6,"p",5),e._uU(7),e.qZA(),e.YNc(8,u,1,0,"sf-icon-chevron-right",6),e.qZA()()),2&s&&(e.Q6J("controls",o.controls)("state",o.prepareControlsData.state),e.xp6(1),e.Q6J("size",o.prepareControlsData.state().size)("disabled",o.prepareControlsData.state().disabled)("selected",o.prepareControlsData.state().selected),e.xp6(1),e.Q6J("ngIf","Tune icon"===o.prepareControlsData.state().slotPrefix),e.xp6(2),e.hij(" ",o.prepareControlsData.state().label," "),e.xp6(1),e.Q6J("ngIf",o.prepareControlsData.state().counter),e.xp6(1),e.Q6J("ngClass",e.WLB(11,C,o.prepareControlsData.state().truncate,o.prepareControlsData.state().disabled)),e.xp6(1),e.hij(" ",o.prepareControlsData.state().secondaryText," "),e.xp6(1),e.Q6J("ngIf","Chevron right icon"===o.prepareControlsData.state().slotSuffix))},dependencies:[l.ez,l.mk,l.O5,m.h,r.rs,r.CU,r.GM,r._S],encapsulation:2,changeDetection:0}),t})()}}]);