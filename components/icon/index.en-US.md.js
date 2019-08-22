webpackJsonp([160],{2118:function(n,s,a){n.exports={content:["section",["p","Semantic vector graphics."],["h2","Icons naming convention"],["p","We provide semantic name for every icon, and naming rules are as follows:"],["ul",["li",["p","Scanning line icon has the similar name with its solid one，but it's distinguished by ",["code","-o"],", for example, ",["code","question-circle"]," (a full circle) and ",["code","question-circle-o"]," (an empty circle);"]],["li",["p","Naming sequence：",["code","[name]-[shape?]-[outline?]-[direction?]"],"."]]],["blockquote",["p",["code","?"]," means is optional."]],["p","See more design detail at ",["a",{title:null,href:"/docs/spec/icon"},"here"],"."],["h2","How To Use"],["p","Use tag ",["code","<Icon />"]," to create an icon and set its type in the type prop, for example:"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>add_location<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>'},["code",'<Icon type="add_location" />']],["h2","List of icons"],["blockquote",["p","Click the icon and copy the code。"]],function(){var n=a(0),s=(a(7),a(239)),t=function(n){return n&&n.__esModule?n:{default:n}}(s);return n.createElement(t.default,{className:"icons"})}],meta:{category:"Components",type:"General",title:"Icon",cols:1,toc:!1,filename:"components/icon/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Icons-naming-convention",title:"Icons naming convention"},"Icons naming convention"]],["li",["a",{className:"bisheng-toc-h2",href:"#How-To-Use",title:"How To Use"},"How To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#List-of-icons",title:"List of icons"},"List of icons"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","You can set ",["code","style"]," and ",["code","className"]," for size and color of icons because they are still fonts in essence."],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>add_location<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#08c\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","<Icon type=\"add_location\" style={{ fontSize: 16, color: '#08c' }} />"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","type"],["td","Type of choerodon ui icon"],["td","string"],["td","-"]]]],["style","\n.c7n-icon-block {\n  display: inline-block;\n  width: 200px;\n  text-align: center;\n  font-size: 14px;\n}\n.c7n-icon-block .icon {\n  line-height: 80px;\n  transition: font-size .2s;\n}\n"]]}}});