"use strict";(self.webpackChunktedinspace=self.webpackChunktedinspace||[]).push([[3047],{595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,i=c.length;-1!==t.code.indexOf(r=n(a,i));)++i;return c[i]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function c(i){for(var u=0;u<i.length&&!(r>=o.length);u++){var s=i[u];if("string"===typeof s||s.content&&"string"===typeof s.content){var p=o[r],l=t.tokenStack[p],g="string"===typeof s?s:s.content,f=n(a,p),k=g.indexOf(f);if(k>-1){++r;var d=g.substring(0,k),h=new e.Token(a,e.tokenize(l,t.grammar),"language-"+a,l),m=g.substring(k+f.length),y=[];d&&y.push.apply(y,c([d])),y.push(h),m&&y.push.apply(y,c([m])),"string"===typeof s?i.splice.apply(i,[u,1].concat(y)):s.content=y}}else s.content&&c(s.content)}return i}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.38c8e578.chunk.js.map