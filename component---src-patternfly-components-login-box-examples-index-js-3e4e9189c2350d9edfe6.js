webpackJsonp([0x94ffe622a048],{870:function(o,n){o.exports="<h2 id=overview>Overview</h2> <p>A Login box is a rectangular container specially crafted to be placed on the login page.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-login-box</code></td> <td><code>&lt;div&gt;</code></td> <td>Initiates the Login box.</td> </tr> <tr> <td><code>.pf-c-login-box__header</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates the header of the Login box.</td> </tr> <tr> <td><code>.pf-c-login-box__body</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates the body of the Login box.</td> </tr> <tr> <td><code>.pf-c-login-box__footer</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates the footer of the Login box.</td> </tr> </tbody> </table> "},307:function(o,n,e){"use strict";function t(o){return o&&o.__esModule?o:{default:o}}n.__esModule=!0,n.Docs=void 0;var l=e(3),a=t(l),r=e(11),i=t(r),d=e(12),u=t(d),s=e(1139),f=t(s),c=e(700),p=t(c),b=e(870),g=t(b);e(1055);var h=n.Docs=g.default;n.default=function(){var o=(0,p.default)(),n="Login Box";return a.default.createElement(i.default,{docs:h,heading:n},a.default.createElement(u.default,{heading:"Login box",handlebars:f.default},o))}},700:function(o,n,e){var t=e(1);o.exports=(t.default||t).template({1:function(o,n,t,l,a){var r;return(null!=(r=o.invokePartial(e(211),n,{name:"login-box-header",fn:o.program(2,a,0),inverse:o.noop,data:a,helpers:t,partials:l,decorators:o.decorators}))?r:"")+(null!=(r=o.invokePartial(e(209),n,{name:"login-box-body",fn:o.program(4,a,0),inverse:o.noop,data:a,helpers:t,partials:l,decorators:o.decorators}))?r:"")+(null!=(r=o.invokePartial(e(210),n,{name:"login-box-footer",fn:o.program(6,a,0),inverse:o.noop,data:a,helpers:t,partials:l,decorators:o.decorators}))?r:"")},2:function(o,n,e,t,l){return"    Header\n"},4:function(o,n,e,t,l){return"    Body\n"},6:function(o,n,e,t,l){return"    Footer\n"},compiler:[7,">= 4.0.0"],main:function(o,n,t,l,a){var r;return null!=(r=o.invokePartial(e(212),n,{name:"login-box",fn:o.program(1,a,0),inverse:o.noop,data:a,helpers:t,partials:l,decorators:o.decorators}))?r:""},usePartial:!0,useData:!0})},1139:function(o,n){o.exports="{{#> login-box}}\n  {{#> login-box-header}}\n    Header\n  {{/login-box-header}}\n  {{#> login-box-body}}\n    Body\n  {{/login-box-body}}\n  {{#> login-box-footer}}\n    Footer\n  {{/login-box-footer}}\n{{/login-box}}\n"},209:function(o,n,e){var t=e(1);o.exports=(t.default||t).template({1:function(o,n,e,t,l){var a;return" "+o.escapeExpression((a=null!=(a=e["login-box-body--modifier"]||(null!=n?n["login-box-body--modifier"]:n))?a:e.helperMissing,"function"==typeof a?a.call(null!=n?n:o.nullContext||{},{name:"login-box-body--modifier",hash:{},data:l}):a))},3:function(o,n,e,t,l){var a,r;return"    "+(null!=(r=null!=(r=e["login-box-body--attribute"]||(null!=n?n["login-box-body--attribute"]:n))?r:e.helperMissing,a="function"==typeof r?r.call(null!=n?n:o.nullContext||{},{name:"login-box-body--attribute",hash:{},data:l}):r)?a:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(o,n,e,t,l){var a,r=null!=n?n:o.nullContext||{};return'<div class="pf-c-login-box__body'+(null!=(a=e.if.call(r,null!=n?n["login-box-body--modifier"]:n,{name:"if",hash:{},fn:o.program(1,l,0),inverse:o.noop,data:l}))?a:"")+'"\n'+(null!=(a=e.if.call(r,null!=n?n["login-box-body--attribute"]:n,{name:"if",hash:{},fn:o.program(3,l,0),inverse:o.noop,data:l}))?a:"")+">\n"+(null!=(a=o.invokePartial(t["@partial-block"],n,{name:"@partial-block",data:l,indent:"  ",helpers:e,partials:t,decorators:o.decorators}))?a:"")+"</div>\n"},usePartial:!0,useData:!0})},210:function(o,n,e){var t=e(1);o.exports=(t.default||t).template({1:function(o,n,e,t,l){var a;return" "+o.escapeExpression((a=null!=(a=e["login-box-footer--modifier"]||(null!=n?n["login-box-footer--modifier"]:n))?a:e.helperMissing,"function"==typeof a?a.call(null!=n?n:o.nullContext||{},{name:"login-box-footer--modifier",hash:{},data:l}):a))},3:function(o,n,e,t,l){var a,r;return"    "+(null!=(r=null!=(r=e["login-box-footer--attribute"]||(null!=n?n["login-box-footer--attribute"]:n))?r:e.helperMissing,a="function"==typeof r?r.call(null!=n?n:o.nullContext||{},{name:"login-box-footer--attribute",hash:{},data:l}):r)?a:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(o,n,e,t,l){var a,r=null!=n?n:o.nullContext||{};return'<div class="pf-c-login-box__footer'+(null!=(a=e.if.call(r,null!=n?n["login-box-footer--modifier"]:n,{name:"if",hash:{},fn:o.program(1,l,0),inverse:o.noop,data:l}))?a:"")+'"\n'+(null!=(a=e.if.call(r,null!=n?n["login-box-footer--attribute"]:n,{name:"if",hash:{},fn:o.program(3,l,0),inverse:o.noop,data:l}))?a:"")+">\n"+(null!=(a=o.invokePartial(t["@partial-block"],n,{name:"@partial-block",data:l,indent:"  ",helpers:e,partials:t,decorators:o.decorators}))?a:"")+"</div>\n"},usePartial:!0,useData:!0})},211:function(o,n,e){var t=e(1);o.exports=(t.default||t).template({1:function(o,n,e,t,l){var a;return" "+o.escapeExpression((a=null!=(a=e["login-box-header--modifier"]||(null!=n?n["login-box-header--modifier"]:n))?a:e.helperMissing,"function"==typeof a?a.call(null!=n?n:o.nullContext||{},{name:"login-box-header--modifier",hash:{},data:l}):a))},3:function(o,n,e,t,l){var a,r;return"    "+(null!=(r=null!=(r=e["login-box-header--attribute"]||(null!=n?n["login-box-header--attribute"]:n))?r:e.helperMissing,a="function"==typeof r?r.call(null!=n?n:o.nullContext||{},{name:"login-box-header--attribute",hash:{},data:l}):r)?a:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(o,n,e,t,l){var a,r=null!=n?n:o.nullContext||{};return'<div class="pf-c-login-box__header'+(null!=(a=e.if.call(r,null!=n?n["login-box-header--modifier"]:n,{name:"if",hash:{},fn:o.program(1,l,0),inverse:o.noop,data:l}))?a:"")+'"\n'+(null!=(a=e.if.call(r,null!=n?n["login-box-header--attribute"]:n,{name:"if",hash:{},fn:o.program(3,l,0),inverse:o.noop,data:l}))?a:"")+">\n"+(null!=(a=o.invokePartial(t["@partial-block"],n,{name:"@partial-block",data:l,indent:"  ",helpers:e,partials:t,decorators:o.decorators}))?a:"")+"</div>\n"},usePartial:!0,useData:!0})},212:function(o,n,e){var t=e(1);o.exports=(t.default||t).template({1:function(o,n,e,t,l){var a;return" "+o.escapeExpression((a=null!=(a=e["login-box--modifier"]||(null!=n?n["login-box--modifier"]:n))?a:e.helperMissing,"function"==typeof a?a.call(null!=n?n:o.nullContext||{},{name:"login-box--modifier",hash:{},data:l}):a))},3:function(o,n,e,t,l){var a,r;return"    "+(null!=(r=null!=(r=e["login-box--attribute"]||(null!=n?n["login-box--attribute"]:n))?r:e.helperMissing,a="function"==typeof r?r.call(null!=n?n:o.nullContext||{},{name:"login-box--attribute",hash:{},data:l}):r)?a:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(o,n,e,t,l){var a,r=null!=n?n:o.nullContext||{};return'<div class="pf-c-login-box'+(null!=(a=e.if.call(r,null!=n?n["login-box--modifier"]:n,{name:"if",hash:{},fn:o.program(1,l,0),inverse:o.noop,data:l}))?a:"")+'"\n'+(null!=(a=e.if.call(r,null!=n?n["login-box--attribute"]:n,{name:"if",hash:{},fn:o.program(3,l,0),inverse:o.noop,data:l}))?a:"")+">\n"+(null!=(a=o.invokePartial(t["@partial-block"],n,{name:"@partial-block",data:l,indent:"  ",helpers:e,partials:t,decorators:o.decorators}))?a:"")+"</div>\n"},usePartial:!0,useData:!0})},1055:function(o,n){}});
//# sourceMappingURL=component---src-patternfly-components-login-box-examples-index-js-3e4e9189c2350d9edfe6.js.map