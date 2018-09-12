webpackJsonp([0xe4f0117a7613],{743:function(t,e){t.exports="<h2 id=overview>Overview</h2> <p>Split layouts are meant for use in positioning items horizontally, with one of the items being the main content area.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-l-split</code></td> <td><code>&lt;div&gt;</code>, <code>&lt;section&gt;</code>, or <code>&lt;article&gt;</code></td> <td>Initiates the split layout.</td> </tr> <tr> <td><code>.pf-l-split__item</code></td> <td><code>&lt;div&gt;</code></td> <td>Initiates a split item. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-m-main</code></td> <td><code>.pf-l-stack__item</code></td> <td>Specifies the main item of the layout, which expands horizontally when needed.</td> </tr> <tr> <td><code>.pf-m-gutter</code></td> <td><code>.pf-l-split</code></td> <td>Adds space between items.</td> </tr> </tbody> </table> "},279:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.Docs=void 0;var i=a(3),r=n(i),l=a(11),o=n(l),s=a(12),d=n(s),p=a(1011),c=n(p),u=a(1012),m=n(u),f=a(662),h=n(f),v=a(663),g=n(v),x=a(743),k=n(x);a(897);var y=e.Docs=k.default;e.default=function(){var t=(0,h.default)(),e=(0,g.default)();return r.default.createElement(o.default,{docs:y,className:"is-layout-page"},r.default.createElement(d.default,{heading:"Split Example",handlebars:c.default},t),r.default.createElement(d.default,{heading:"Split Example with gutter",handlebars:m.default},e))}},662:function(t,e,a){var n=a(1);t.exports=(n.default||n).template({1:function(t,e,n,i,r){var l;return(null!=(l=t.invokePartial(a(71),e,{name:"split-item",fn:t.program(2,r,0),inverse:t.noop,data:r,helpers:n,partials:i,decorators:t.decorators}))?l:"")+"\n"+(null!=(l=t.invokePartial(a(71),e,{name:"split-item",hash:{classModifier:"pf-m-main"},fn:t.program(4,r,0),inverse:t.noop,data:r,helpers:n,partials:i,decorators:t.decorators}))?l:"")+"\n"+(null!=(l=t.invokePartial(a(71),e,{name:"split-item",fn:t.program(2,r,0),inverse:t.noop,data:r,helpers:n,partials:i,decorators:t.decorators}))?l:"")},2:function(t,e,a,n,i){return"    secondary content\n"},4:function(t,e,a,n,i){return"    main content\n"},compiler:[7,">= 4.0.0"],main:function(t,e,n,i,r){var l;return null!=(l=t.invokePartial(a(222),e,{name:"split",fn:t.program(1,r,0),inverse:t.noop,data:r,helpers:n,partials:i,decorators:t.decorators}))?l:""},usePartial:!0,useData:!0})},1011:function(t,e){t.exports='{{#> split }}\n  {{#> split-item }}\n    secondary content\n  {{/split-item}}\n\n  {{#> split-item classModifier="pf-m-main"}}\n    main content\n  {{/split-item}}\n\n  {{#> split-item }}\n    secondary content\n  {{/split-item}}\n{{/split}}\n'},663:function(t,e,a){var n=a(1);t.exports=(n.default||n).template({1:function(t,e,n,i,r){var l;return(null!=(l=t.invokePartial(a(71),e,{name:"split-item",fn:t.program(2,r,0),inverse:t.noop,data:r,helpers:n,partials:i,decorators:t.decorators}))?l:"")+"\n"+(null!=(l=t.invokePartial(a(71),e,{name:"split-item",hash:{classModifier:"pf-m-main"},fn:t.program(4,r,0),inverse:t.noop,data:r,helpers:n,partials:i,decorators:t.decorators}))?l:"")+"\n"+(null!=(l=t.invokePartial(a(71),e,{name:"split-item",fn:t.program(2,r,0),inverse:t.noop,data:r,helpers:n,partials:i,decorators:t.decorators}))?l:"")},2:function(t,e,a,n,i){return"    secondary content\n"},4:function(t,e,a,n,i){return"    main content\n"},compiler:[7,">= 4.0.0"],main:function(t,e,n,i,r){var l;return null!=(l=t.invokePartial(a(222),e,{name:"split",hash:{modifierClass:"pf-m-gutter"},fn:t.program(1,r,0),inverse:t.noop,data:r,helpers:n,partials:i,decorators:t.decorators}))?l:""},usePartial:!0,useData:!0})},1012:function(t,e){t.exports='{{#> split modifierClass="pf-m-gutter"}}\n  {{#> split-item }}\n    secondary content\n  {{/split-item}}\n\n  {{#> split-item classModifier="pf-m-main"}}\n    main content\n  {{/split-item}}\n\n  {{#> split-item }}\n    secondary content\n  {{/split-item}}\n{{/split}}\n'},71:function(t,e,a){var n=a(1);t.exports=(n.default||n).template({1:function(t,e,a,n,i){var r;return" "+t.escapeExpression((r=null!=(r=a.classModifier||(null!=e?e.classModifier:e))?r:a.helperMissing,"function"==typeof r?r.call(null!=e?e:t.nullContext||{},{name:"classModifier",hash:{},data:i}):r))},compiler:[7,">= 4.0.0"],main:function(t,e,a,n,i){var r;return'<div class="pf-l-split__item'+(null!=(r=a.if.call(null!=e?e:t.nullContext||{},null!=e?e.classModifier:e,{name:"if",hash:{},fn:t.program(1,i,0),inverse:t.noop,data:i}))?r:"")+'">\n'+(null!=(r=t.invokePartial(n["@partial-block"],e,{name:"@partial-block",data:i,indent:"  ",helpers:a,partials:n,decorators:t.decorators}))?r:"")+"</div>\n"},usePartial:!0,useData:!0})},222:function(t,e,a){var n=a(1);t.exports=(n.default||n).template({1:function(t,e,a,n,i){var r;return" "+t.escapeExpression((r=null!=(r=a.modifierClass||(null!=e?e.modifierClass:e))?r:a.helperMissing,"function"==typeof r?r.call(null!=e?e:t.nullContext||{},{name:"modifierClass",hash:{},data:i}):r))},compiler:[7,">= 4.0.0"],main:function(t,e,a,n,i){var r;return'<div class="pf-l-split'+(null!=(r=a.if.call(null!=e?e:t.nullContext||{},null!=e?e.modifierClass:e,{name:"if",hash:{},fn:t.program(1,i,0),inverse:t.noop,data:i}))?r:"")+'">\n'+(null!=(r=t.invokePartial(n["@partial-block"],e,{name:"@partial-block",data:i,indent:"  ",helpers:a,partials:n,decorators:t.decorators}))?r:"")+"</div> "},usePartial:!0,useData:!0})},897:function(t,e){}});
//# sourceMappingURL=component---src-patternfly-layouts-split-examples-index-js-1c50efc5079dc48a22c9.js.map