(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=2)})({2:function(module,exports){eval('function getword(info, tab) {\n    chrome.tabs.query({\n        "active": true,\n        "currentWindow": true\n    }, function (tabs) {\n        chrome.tabs.sendMessage(tabs[0].id, {\n            "functiontoInvoke": "holacaracola"\n        });\n    });\n}\n\nchrome.contextMenus.create({\n    title: "Eliminar popup",\n    contexts: ["all"],\n    onclick: getword\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYmFja2dyb3VuZC5qcz9iYzNiIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldHdvcmQoaW5mbywgdGFiKSB7XG4gICAgY2hyb21lLnRhYnMucXVlcnkoe1xuICAgICAgICBcImFjdGl2ZVwiOiB0cnVlLFxuICAgICAgICBcImN1cnJlbnRXaW5kb3dcIjogdHJ1ZVxuICAgIH0sIGZ1bmN0aW9uICh0YWJzKSB7XG4gICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYnNbMF0uaWQsIHtcbiAgICAgICAgICAgIFwiZnVuY3Rpb250b0ludm9rZVwiOiBcImhvbGFjYXJhY29sYVwiXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5jaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgdGl0bGU6IFwiRWxpbWluYXIgcG9wdXBcIixcbiAgICBjb250ZXh0czogW1wiYWxsXCJdLFxuICAgIG9uY2xpY2s6IGdldHdvcmRcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYmFja2dyb3VuZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n')}});