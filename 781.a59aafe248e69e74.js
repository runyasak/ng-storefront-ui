"use strict";(self.webpackChunkdemo_app=self.webpackChunkdemo_app||[]).push([[781],{9781:(d,s,t)=>{t.r(s),t.d(s,{ExampleSfBadgePageComponent:()=>_});var c=t(725),r=t(2227),i=t(8687),p=t(9232),l=t(2189),e=t(3597);let _=(()=>{class o{constructor(a){this.controlService=a,this.controls=[{type:"text",modelName:"content",description:"Content to display in the badge.",propType:"string | number"},{type:"text",modelName:"max",description:"Maximum number of counter to show.",propType:"number",propDefaultValue:"99"},{type:"select",modelName:"variant",description:"Badge can have content or be a simple dot.",options:Object.values(p.u),propType:"SfBadgeVariant",propDefaultValue:"standard"},{type:"select",modelName:"placement",description:"Position of the badge relatively to a container.",options:Object.values(p.q),propType:"SfBadgePlacement",propDefaultValue:"top-right"}],this.prepareControlsData=this.controlService.prepareControls(this.controls,{content:"1",max:99,variant:p.u.standard,placement:p.q["top-right"]})}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(l.B))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],standalone:!0,features:[e._Bn([l.B]),e.jDz],decls:4,vars:7,consts:[[3,"controls","state"],["sf-button","","variant","tertiary",1,"relative",3,"square"],[3,"content","max","variant","placement"]],template:function(a,n){1&a&&(e.TgZ(0,"app-example-wrapper",0)(1,"button",1),e._UZ(2,"sf-icon-shopping-cart")(3,"sf-badge",2),e.qZA()()),2&a&&(e.Q6J("controls",n.controls)("state",n.prepareControlsData.state),e.xp6(1),e.Q6J("square",!0),e.xp6(2),e.Q6J("content",n.prepareControlsData.state().content)("max",n.prepareControlsData.state().max)("variant",n.prepareControlsData.state().variant)("placement",n.prepareControlsData.state().placement))},dependencies:[c.ez,i.h,r.Ym,r.$i,r.Xe],encapsulation:2,changeDetection:0}),o})()}}]);