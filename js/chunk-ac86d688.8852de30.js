(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac86d688"],{"0d77":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[o("h2",[t._v("Gallery page")]),o("div",{staticClass:"galleryContent"},t._l(t.photos,(function(e,r){return o("div",{key:r},[o("div",{staticClass:"photoBox"},[o("div",{staticClass:"photoItem"},[o("img",{staticClass:"imageInPhotoItem",attrs:{src:e.urls.small},on:{click:function(e){return t.zoomImage(r)}}})]),o("div",{staticClass:"photoLabel"},[t._v(t._s(e.alt_description))])]),e.zoom?o("div",{staticClass:"background",on:{click:function(e){return t.closeZoomImage(r)}}}):t._e(),e.zoom?o("div",{staticClass:"containerForZoomedImage"},[o("img",{staticClass:"zoomedImage",attrs:{src:e.urls.regular}})]):t._e(),e.zoom?o("button",{staticClass:"closeImageButton",on:{click:function(e){return t.closeZoomImage(r)}}},[t._v("Close")]):t._e()])})),0),o("input",{directives:[{name:"model",rawName:"v-model",value:t.forSearch,expression:"forSearch"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.forSearch},on:{input:function(e){e.target.composing||(t.forSearch=e.target.value)}}}),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.getNewImages}},[t._v("Find the images!")])]),t.loading?o("Loader"):t._e()],1)},n=[],i=(o("99af"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"lds-spinner"},[o("div"),o("div"),o("div"),o("div"),o("div"),o("div"),o("div"),o("div"),o("div"),o("div"),o("div"),o("div")])}],s=(o("74ae"),o("2877")),c={},u=Object(s["a"])(c,i,a,!1,null,null,null),l=u.exports,h={http:{headers:{Authorization:"Client-ID 6L6Oame1JTB4nz96pA4O7lHQjzyT4uadHQ1LMzbR1ZM"}},name:"Gallery",data:function(){return{photos:[],forSearch:"",searchHistory:[],count:0,loading:!1,placeholder:"Enter the name of images"}},components:{Loader:l},methods:{zoomImage:function(t){this.$set(this.photos[t],"zoom",!0)},closeZoomImage:function(t){this.$set(this.photos[t],"zoom",!1)},getNewImages:function(){if(this.forSearch){for(var t in this.loading=!0,this.searchHistory.push(this.forSearch),this.searchHistory)this.forSearch===this.searchHistory[t]&&this.count++;var e=this.$resource("https://api.unsplash.com/search/photos?query={/query}&page={page}");e.get({query:encodeURIComponent(this.forSearch),page:this.count}).then((function(t){this.count=0,t.body.results[0]?(this.photos=this.photos.concat(t.body.results),this.$set(this.photos,"zoom",!1),this.loading=!1,this.forSearch="",this.placeholder="Try more!"):(this.loading=!1,this.forSearch="",this.placeholder="Cant find images with this name, try again")}),(function(t){throw t}))}else this.placeholder="You enteder nothing! Enter the name of image"}}},d=h,f=(o("436f"),Object(s["a"])(d,r,n,!1,null,"31edcddf",null));e["default"]=f.exports},"1dde":function(t,e,o){var r=o("d039"),n=o("b622"),i=o("2d00"),a=n("species");t.exports=function(t){return i>=51||!r((function(){var e=[],o=e.constructor={};return o[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3193:function(t,e,o){},"436f":function(t,e,o){"use strict";var r=o("3193"),n=o.n(r);n.a},"65f0":function(t,e,o){var r=o("861d"),n=o("e8b5"),i=o("b622"),a=i("species");t.exports=function(t,e){var o;return n(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!n(o.prototype)?r(o)&&(o=o[a],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===e?0:e)}},"74ae":function(t,e,o){"use strict";var r=o("de36"),n=o.n(r);n.a},8418:function(t,e,o){"use strict";var r=o("c04e"),n=o("9bf2"),i=o("5c6c");t.exports=function(t,e,o){var a=r(e);a in t?n.f(t,a,i(0,o)):t[a]=o}},"99af":function(t,e,o){"use strict";var r=o("23e7"),n=o("d039"),i=o("e8b5"),a=o("861d"),s=o("7b0b"),c=o("50c4"),u=o("8418"),l=o("65f0"),h=o("1dde"),d=o("b622"),f=o("2d00"),p=d("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",g=f>=51||!n((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),y=h("concat"),b=function(t){if(!a(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},C=!g||!y;r({target:"Array",proto:!0,forced:C},{concat:function(t){var e,o,r,n,i,a=s(this),h=l(a,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?a:arguments[e],b(i)){if(n=c(i.length),d+n>m)throw TypeError(v);for(o=0;o<n;o++,d++)o in i&&u(h,d,i[o])}else{if(d>=m)throw TypeError(v);u(h,d++,i)}return h.length=d,h}})},de36:function(t,e,o){},e8b5:function(t,e,o){var r=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-ac86d688.8852de30.js.map