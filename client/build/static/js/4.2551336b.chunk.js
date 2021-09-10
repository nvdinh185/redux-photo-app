(this["webpackJsonpredux-photo-app"]=this["webpackJsonpredux-photo-app"]||[]).push([[4],{171:function(e,t,a){},177:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){e.exports=a.p+"static/media/orange-bg.e6624e7e.jpg"},182:function(e,t,a){e.exports=a.p+"static/media/blue-bg.146c36c8.jpg"},183:function(e,t,a){e.exports=a.p+"static/media/colorful-bg.cb9ae265.jpg"},184:function(e,t,a){e.exports=a.p+"static/media/pink-bg.c8426a37.jpg"},185:function(e,t,a){},193:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(6),r=a(49),c=a(170);a(171);function i(e){var t=e.title,a=e.backgroundUrl,o=a?{backgroundImage:"url(".concat(a,")")}:{};return n.a.createElement("section",{className:"banner",style:o},n.a.createElement("h1",{className:"banner__title"},t))}i.defaultProps={title:"",backgroundUrl:""};var u=i,m=[{value:1,label:"Technology"},{value:2,label:"Education"},{value:3,label:"Nature"},{value:4,label:"Animals"},{value:5,label:"Styles"}],s=a(188),d=a(189),p=a(190),h=a(191),v=a(137);function b(e){var t=e.field,a=e.form,o=e.type,l=e.label,r=e.placeholder,c=e.disabled,i=t.name,u=a.errors,m=a.touched,b=u[i]&&m[i];return n.a.createElement(s.a,null,l&&n.a.createElement(d.a,{for:i},l),n.a.createElement(p.a,Object.assign({id:i},t,{type:o,disabled:c,placeholder:r,invalid:b})),n.a.createElement(v.a,{name:i,component:h.a}))}b.defaultProps={type:"text",label:"",placeholder:"",disabled:!1};var f=b,E=a(9),g=a.n(E),k=a(18),y=a(122);a(177);P.defaultProps={name:"",imageUrl:"",onImageUrlChange:null,onRandomButtonBlur:null};var C=function(){var e=Math.trunc(2e3*Math.random());return"https://picsum.photos/id/".concat(e,"/300/300")};function P(e){var t=e.name,a=e.imageUrl,o=e.onImageUrlChange,l=e.onRandomButtonBlur;console.log("imageUrl: ",a);var r=function(){var e=Object(k.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o&&(t=C(),o(t));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"random-photo"},n.a.createElement("div",{className:"random-photo__button"},n.a.createElement(y.a,{outline:!0,name:t,color:"primary",onBlur:l,onClick:r},"Random a photo")),n.a.createElement("div",{className:"random-photo__photo"},a&&n.a.createElement("img",{src:a,alt:"Ooops ... not found. Please click random again!",onError:r})))}var j=P;function N(e){var t=e.field,a=e.form,o=e.label,l=t.name,r=t.value,c=t.onBlur,i=a.errors,u=a.touched,m=i[l]&&u[l];return n.a.createElement(s.a,null,o&&n.a.createElement(d.a,{for:l},o),n.a.createElement(j,{name:l,imageUrl:r,onImageUrlChange:function(e){a.setFieldValue(l,e)},onRandomButtonBlur:c}),n.a.createElement("div",{className:m?"is-invalid":""}),n.a.createElement(v.a,{name:l,component:h.a}))}N.defaultProps={label:""};var O=N,_=a(187);function R(e){var t=e.field,a=e.form,o=e.options,l=e.label,r=e.placeholder,c=e.disabled,i=t.name,u=t.value,m=a.errors,p=a.touched,b=m[i]&&p[i],f=o.find((function(e){return e.value===u}));return n.a.createElement(s.a,null,l&&n.a.createElement(d.a,{for:i},l),n.a.createElement(_.a,Object.assign({id:i},t,{value:f,onChange:function(e){var a=e?e.value:e,o={target:{name:i,value:a}};t.onChange(o)},placeholder:r,isDisabled:c,options:o,className:b?"is-invalid":""})),n.a.createElement(v.a,{name:i,component:h.a}))}R.defaultProps={label:"",placeholder:"",disabled:!1,options:[]};var B=R,I=a(192),U=a(186);function x(e){var t=e.initialValues,a=e.isAddMode,o=U.b().shape({title:U.c().required("This field is required."),categoryId:U.a().required("This field is required.").nullable(),photo:U.c().when("categoryId",{is:1,then:U.c().required("This field is required."),otherwise:U.c().notRequired()})});return n.a.createElement(v.d,{initialValues:t,validationSchema:o,onSubmit:e.onSubmit},(function(e){var t=e.values,o=e.errors,l=e.touched,r=e.isSubmitting;return console.log({values:t,errors:o,touched:l,isSubmitting:r}),n.a.createElement(v.c,null,n.a.createElement(v.b,{name:"title",component:f,label:"Title",placeholder:"Eg: Wow nature ..."}),n.a.createElement(v.b,{name:"categoryId",component:B,label:"Category",placeholder:"What's your photo category?",options:m}),n.a.createElement(v.b,{name:"photo",component:O,label:"Photo"}),n.a.createElement(s.a,null,n.a.createElement(y.a,{type:"submit",color:a?"primary":"success"},r&&n.a.createElement(I.a,{size:"sm"}),a?"Add to album":"Update your photo")))}))}x.defaultProps={onSubmit:null};var w=x,S=a(36),q=a(28);a(180);var A=function(){var e=Object(q.b)(),t=Object(l.g)(),a=Object(l.h)().photoId,o=!a,r=Object(q.c)((function(e){var t=e.photos.find((function(e){return e.id===+a}));return console.log({photos:e.photos,photoId:a,foundPhoto:t}),t}));console.log({photoId:a,editedPhoto:r});var i=o?{title:"",categoryId:null,photo:""}:r;return n.a.createElement("div",{className:"photo-edit"},n.a.createElement(u,{title:"\ud83d\ude0e Pick your amazing photo \ud83d\ude0e"}),n.a.createElement("div",{className:"photo-edit__form"},n.a.createElement(w,{isAddMode:o,initialValues:i,onSubmit:function(a){return new Promise((function(n){console.log("Form submit: ",a),setTimeout((function(){if(o){var l=Object(c.a)(Object(c.a)({},a),{},{id:(u=1e4,m=99999,u+Math.trunc(Math.random()*(m-u)))}),r=Object(S.a)(l);console.log({action:r}),e(r)}else{var i=Object(S.d)(a);e(i)}var u,m;t.push("/photos"),n(!0)}),5e3)}))}})))},G=a(181),L=a.n(G),M=a(182),T=a.n(M),z=a(183),V=a.n(z),F=a(184),J=a.n(F),K={ORANGE_BG:L.a,BLUE_BG:T.a,COLORFUL_BG:V.a,PINK_BG:J.a},W=a(120),D=a(121);a(185);function Y(e){var t=e.photo,a=e.onEditClick,o=e.onRemoveClick;return n.a.createElement("div",{className:"photo"},n.a.createElement("img",{src:t.photo,alt:t.title}),n.a.createElement("div",{className:"photo__overlay"},n.a.createElement("h3",{className:"photo__title"},t.title),n.a.createElement("div",{className:"photo__actions"},n.a.createElement("div",null,n.a.createElement(y.a,{outline:!0,size:"sm",color:"light",onClick:function(){a&&a(t)}},"Edit")),n.a.createElement("div",null,n.a.createElement(y.a,{outline:!0,size:"sm",color:"danger",onClick:function(){o&&o(t)}},"Remove")))))}Y.defaultProps={photo:{},onEditClick:null,onRemoveClick:null};var H=Y;function Q(e){var t=e.photoList,a=e.onPhotoEditClick,o=e.onPhotoRemoveClick;return n.a.createElement(W.a,null,t.map((function(e){return n.a.createElement(D.a,{key:e.title,xs:"12",md:"6",lg:"3"},n.a.createElement(H,{photo:e,onEditClick:a,onRemoveClick:o}))})))}Q.defaultProps={photoList:[],onPhotoEditClick:null,onPhotoRemoveClick:null};var X=Q,Z=a(26),$=a(119);var ee=function(){var e=Object(q.b)(),t=Object(q.c)((function(e){return e.photos})),a=Object(l.g)();return n.a.createElement("div",{className:"photo-main"},n.a.createElement(u,{title:"\ud83c\udf89 Your awesome photos \ud83c\udf89",backgroundUrl:K.PINK_BG}),n.a.createElement($.a,{className:"text-center"},n.a.createElement("div",{className:"py-5"},n.a.createElement(Z.b,{to:"/photos/add"},"Add new photo")),n.a.createElement(X,{photoList:t,onPhotoEditClick:function(e){console.log("Edit: ",e);var t="/photos/".concat(e.id);a.push(t)},onPhotoRemoveClick:function(t){console.log("Remove: ",t);var a=t.id,o=Object(S.c)(a);e(o)}})))};t.default=function(){var e=Object(l.i)();return console.log({match:e}),n.a.createElement(l.d,null,n.a.createElement(l.b,{exact:!0,path:e.url,component:ee}),n.a.createElement(l.b,{path:"".concat(e.url,"/add"),component:A}),n.a.createElement(l.b,{path:"".concat(e.url,"/:photoId"),component:A}),n.a.createElement(l.b,{component:r.a}))}}}]);
//# sourceMappingURL=4.2551336b.chunk.js.map