"use strict";(self.webpackChunkblog_github_io=self.webpackChunkblog_github_io||[]).push([[3962],{8953:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>t,toc:()=>h});var i=s(4848),l=s(8453);const r={sidebar_position:4,tags:["OWASP","XSS"],title:"XSS",sidebar_label:"XSS",description:"\u4ecb\u7ecd XSS \u6ce8\u5165\u6f0f\u6d1e&ByPass&\u5229\u7528"},d="XSS",t={id:"penetration/OWASP  WEB/4",title:"XSS",description:"\u4ecb\u7ecd XSS \u6ce8\u5165\u6f0f\u6d1e&ByPass&\u5229\u7528",source:"@site/docs/penetration/OWASP  WEB/4.md",sourceDirName:"penetration/OWASP  WEB",slug:"/penetration/OWASP  WEB/4",permalink:"/docs/penetration/OWASP  WEB/4",draft:!1,unlisted:!1,tags:[{label:"OWASP",permalink:"/docs/tags/owasp"},{label:"XSS",permalink:"/docs/tags/xss"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["OWASP","XSS"],title:"XSS",sidebar_label:"XSS",description:"\u4ecb\u7ecd XSS \u6ce8\u5165\u6f0f\u6d1e&ByPass&\u5229\u7528"},sidebar:"penetrationSidebar",previous:{title:"SSRF",permalink:"/docs/penetration/OWASP  WEB/3"},next:{title:"CORS",permalink:"/docs/owaspweb/5"}},c={},h=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"Exploit",id:"exploit",level:2},{value:"\u53cd\u5c04\u578b XSS",id:"\u53cd\u5c04\u578b-xss",level:3},{value:"\u5b58\u50a8\u578b XSS",id:"\u5b58\u50a8\u578b-xss",level:3},{value:"DOM \u578b XSS",id:"dom-\u578b-xss",level:3},{value:"\u9632\u5fa1",id:"\u9632\u5fa1",level:2},{value:"ByPass",id:"bypass",level:2},{value:"Questions",id:"questions",level:2},{value:"XSS \u4e4b\u95f4\u7684\u5dee\u522b",id:"xss-\u4e4b\u95f4\u7684\u5dee\u522b",level:3},{value:"XSS \u548c CSRF \u7684\u533a\u522b",id:"xss-\u548c-csrf-\u7684\u533a\u522b",level:3}];function x(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"xss",children:"XSS"}),"\n",(0,i.jsx)(e.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,i.jsxs)(e.p,{children:["XSS \u7684\u6f0f\u6d1e\u672c\u8d28\u539f\u56e0\u662f\u5ba2\u6237\u7aef\u5c06\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6570\u636e, \u4f5c\u4e3a\u4e86 ",(0,i.jsx)(e.strong,{children:"JS"})," \u8fdb\u884c\u6267\u884c, \u800c\u4e0d\u662f\u4f5c\u4e3a\u6570\u636e\u6e32\u67d3."]}),"\n",(0,i.jsx)(e.h2,{id:"exploit",children:"Exploit"}),"\n",(0,i.jsx)(e.p,{children:"\u5bf9\u4e8e XSS \u800c\u8a00, \u4e00\u822c\u4f1a\u91c7\u53d6\u4e0b\u9762\u7684\u51e0\u79cd\u65b9\u5f0f\u6765\u6269\u5c55\u653b\u51fb:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u76d7\u53d6\u7528\u6237\u8eab\u4efd\u4fe1\u606f, \u7a83\u53d6\u4f1a\u8bdd Cookie \u4ece\u800c\u7a83\u53d6\u7f51\u7ad9\u7528\u6237\u9690\u79c1\u3001\u8d26\u53f7\u3001\u6d4f\u89c8\u5386\u53f2\u7b49\u7b49"}),"\n",(0,i.jsx)(e.li,{children:"\u4f2a\u6388\u6743\u64cd\u4f5c, \u901a\u8fc7 JS \u53d1\u8d77\u654f\u611f\u8bf7\u6c42"}),"\n",(0,i.jsx)(e.li,{children:"\u6309\u952e\u8bb0\u5f55\u548c\u9493\u9c7c"}),"\n",(0,i.jsx)(e.li,{children:"\u8815\u866b\u75c5\u6bd2\u4f20\u64ad, \u501f\u52a9\u7f51\u7ad9\u8fdb\u884c\u4f20\u64ad, \u4f7f\u7f51\u7ad9\u7684\u4f7f\u7528\u7528\u6237\u53d7\u5230\u653b\u51fb"}),"\n",(0,i.jsx)(e.li,{children:"\u52ab\u6301\u7528\u6237\u4f1a\u8bdd, \u4ece\u800c\u77e5\u6089\u4efb\u610f\u64cd\u4f5c, \u6bd4\u5982: \u5f39\u7a97\u8df3\u8f6c\u3001\u7be1\u6539\u9875\u9762\u3001\u7f51\u9875\u6302\u9a6c"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tip[XSS",metastring:"\u7684\u5206\u7c7b]",children:"- \u53cd\u5c04\u578b XSS\n- \u5b58\u50a8\u578b XSS\n- Dom \u578b XSS\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u53cd\u5c04\u578b-xss",children:"\u53cd\u5c04\u578b XSS"}),"\n",(0,i.jsxs)(e.admonition,{type:"info",children:[(0,i.jsx)(e.p,{children:"\u7279\u70b9 : pyaload \u4e0d\u4f1a\u5b58\u50a8\u5728\u6570\u636e\u5e93, \u4e00\u822c\u51fa\u73b0\u5728\u67e5\u8be2\u9875\u9762\uff08\u8f93\u5165\u5185\u5bb9\u4f1a\u76f4\u63a5\u8fd4\u56de\u7684\u53c2\u6570\u90fd\u53ef\u80fd\u5b58\u5728\u53cd\u5c04\u578bXSS\uff09"}),(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u53cd\u5c04\u578bXSS\uff0c\u53c8\u79f0\u975e\u6301\u4e45\u578bXSS\uff0c\u653b\u51fb\u76f8\u5bf9\u4e8e\u53d7\u5bb3\u8005\u800c\u8a00\u662f\u4e00\u6b21\u6027\u7684"})})]}),"\n",(0,i.jsx)(e.p,{children:"\u653b\u51fb\u8005\u8bf1\u5bfc\u53d7\u5bb3\u8005\u70b9\u51fb\u5305\u542b\u6076\u610fJavaSctipt\u4ee3\u7801\u7684URL\uff0c\u5f53\u53d7\u5bb3\u8005\u70b9\u51fb\u8fd9\u4e9b\u7cbe\u5fc3\u8bbe\u8ba1\u7684\u94fe\u63a5\u540e\uff0c\u6076\u610f\u4ee3\u7801\u4f1a\u76f4\u63a5\u5728\u53d7\u5bb3\u8005\u4e3b\u673a\u4e0a\u7684\u6d4f\u89c8\u5668\u6267\u884c\uff1b\u6076\u610f\u4ee3\u7801\u5e76\u6ca1\u6709\u4fdd\u5b58\u5728\u76ee\u6807\u7f51\u7ad9\uff0c\u800cWeb\u5e94\u7528\u7a0b\u5e8f\u53ea\u662f\u4e0d\u52a0\u5904\u7406\u7684\u628a\u8be5\u6076\u610f\u811a\u672c\u201c\u53cd\u5c04\u201d\u56de\u53d7\u5bb3\u8005\u7684\u6d4f\u89c8\u5668\u800c\u4f7f\u53d7\u5bb3\u8005\u7684\u6d4f\u89c8\u5668\u6267\u884c\u76f8\u5e94\u7684\u811a\u672c"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240411195911.png",alt:"20240411195911"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u653b\u51fb\u8005\u5c06payload\u653e\u7f6e\u5728url\u94fe\u63a5\u4e2d\uff08\u8fd9\u662f\u9488\u5bf9\u662fGET\u578b\u53cd\u5c04XSS\uff09"}),"\n",(0,i.jsx)(e.li,{children:"\u7528\u6237\u70b9\u51fb\u8be5\u6076\u610f\u94fe\u63a5"}),"\n",(0,i.jsx)(e.li,{children:"web\u670d\u52a1\u5c06XSS\u4ee3\u7801\uff08JavaScript\u4ee3\u7801\uff09\u4ee5\u53ca\u89c6\u56fe\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef"}),"\n",(0,i.jsx)(e.li,{children:"\u5ba2\u6237\u7aef\u89e3\u6790\u89c6\u56fe\u4ee5\u53caXSS\u4ee3\u7801\uff08JavaScript\u4ee3\u7801\uff09\uff0c\u5e76\u5c06\u6267\u884c\u7ed3\u679c\u53d1\u9001\u5230XSS\u5e73\u53f0"}),"\n",(0,i.jsx)(e.li,{children:"\u653b\u51fb\u8005\u8bbf\u95eeXSS\u5e73\u53f0\uff0c\u8bfb\u53d6\u7528\u6237\u7684\u654f\u611f\u4fe1\u606f\uff08Cookie)"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5b58\u50a8\u578b-xss",children:"\u5b58\u50a8\u578b XSS"}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsx)(e.p,{children:"\u7279\u70b9 : payload\u4f1a\u5b58\u5728\u6570\u636e\u5e93\u91cc\u9762\uff0c\u4e00\u822c\u51fa\u73b0\u5728\u4f1a\u5c06\u6570\u636e\u5b58\u50a8\u5230\u6570\u636e\u5e93\u4e2d\u5e76\u5c55\u793a\u5728\u524d\u7aef\u9875\u9762\u7684\u529f\u80fd\uff0c\u5982\u6ce8\u518c\u9875\u3001\u7559\u8a00\u677f\u7b49"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5b58\u50a8\u578b XSS \u662f\u6307\u5c06\u5e94\u7528\u7a0b\u5e8f\u5c06\u5b58\u5728 XSS Payload \u7684\u6570\u636e",(0,i.jsx)(e.strong,{children:"\u672a\u8fdb\u884c\u8fc7\u6ee4\u68c0\u67e5\u4fbf\u5b58\u5165\u5230\u6570\u636e\u5e93"}),"\u4e2d, \u5f53\u4e0b\u4e00\u6b21\u4ece\u6570\u636e\u5e93\u4e2d",(0,i.jsx)(e.strong,{children:"\u83b7\u53d6\u6570\u636e\u65f6\u4e5f\u6ca1\u6709\u8fdb\u884c\u8fc7\u6ee4"}),", \u76f4\u63a5\u5c06\u5176\u663e\u793a\u5728\u524d\u7aef, \u5bfc\u81f4\u4e86 XSS Payload \u7684\u6267\u884c"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240411200104.png",alt:"20240411200104"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u653b\u51fb\u8005\u5411web\u670d\u52a1\u63d2\u5165XSS\u4ee3\u7801"}),"\n",(0,i.jsx)(e.li,{children:"web\u670d\u52a1\u4f1a\u5c06\u5176\u7ed3\u679c\u5b58\u50a8\u5230\u6570\u636e\u5e93\u4e2d"}),"\n",(0,i.jsx)(e.li,{children:"\u7528\u6237\u6b63\u5e38\u8bbf\u95eeweb\u670d\u52a1"}),"\n",(0,i.jsx)(e.li,{children:"web\u670d\u52a1\u5c06\u6570\u636e\u5e93\u7684\u6570\u636e\u4ee5\u53ca\u89c6\u56fe\u8fd4\u56de\u7ed9\u524d\u7aef\uff0c\u524d\u7aef\u6e32\u67d3\u89c6\u56fe\u5e76\u52a0\u8f7d\u6570\u636e\uff0c\u5176\u4e2d\u6570\u636e\u91cc\u5305\u542b\u6076\u610fXSS\u4ee3\u7801\uff08JavaScript\u4ee3\u7801\uff09"}),"\n",(0,i.jsx)(e.li,{children:"\u5ba2\u6237\u7aef\u6e32\u67d3\u89c6\u56fe\uff0c\u52a0\u8f7dXSS\u4ee3\u7801\uff0c\u5e76\u5411\u653b\u51fb\u8005\u7684web\u670d\u52a1\u53d1\u9001\u654f\u611f\u4fe1\u606f"}),"\n",(0,i.jsx)(e.li,{children:"\u653b\u51fb\u8005\u8bfb\u53d6\u7528\u6237\u7684\u654f\u611f\u4fe1\u606f"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"dom-\u578b-xss",children:"DOM \u578b XSS"}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsx)(e.p,{children:"\u4e0d\u4f1a\u4e0e\u670d\u52a1\u5668\u4ea4\u4e92\u4e5f\u4e0d\u4f1a\u5b58\u50a8\u5728\u6570\u636e\u5e93\u4e2d, \u901a\u8fc7 Dom \u64cd\u4f5c\u524d\u7aef\u8f93\u51fa\u7684\u65f6\u5019\u4ea7\u751f\u95ee\u9898 (\u76f8\u6bd4\u4e8e\u524d\u4e24\u79cd\u8f83\u96be\u6316\u6398, \u9700\u8981\u719f\u6089\u57fa\u7840 JS \u4ee3\u7801)"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5ba2\u6237\u7aef\u7684\u811a\u672c\u7a0b\u5e8f\u53ef\u4ee5\u52a8\u6001\u7684\u68c0\u67e5\u548c\u4fee\u6539\u9875\u9762\u5185\u5bb9, \u800c\u4e0d\u4f9d\u8d56\u4e8e\u670d\u52a1\u7aef\u7684\u6570\u636e, \u6bd4\u5982 \u5ba2\u6237\u7aef\u5982\u679c\u4ece",(0,i.jsx)(e.strong,{children:"URL \u4e2d\u63d0\u53d6\u6570\u636e\u5e76\u5728\u672c\u5730\u6267\u884c"}),", \u5982\u679c\u7528\u6237\u5728\u5ba2\u6237\u7aef\u7684\u8f93\u5165\u6570\u636e\u5305\u542b\u4e86\u6076\u610f\u7684 JS \u5185\u5bb9, \u800c\u8fd9\u4e9b\u5185\u5bb9\u6ca1\u6709\u7ecf\u8fc7\u8fc7\u6ee4, \u90a3\u4e48\u5e94\u7528\u7a0b\u5e8f\u5c31\u53ef\u80fd\u53d7\u5230 Dom \u578b XSS \u653b\u51fb"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240411200646.png",alt:"20240411200646"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u653b\u51fb\u8005\u5c06payload\u653e\u7f6e\u5728url\u94fe\u63a5\u4e2d\uff08\u8fd9\u662f\u9488\u5bf9\u662fGET\u578b\u53cd\u5c04XSS\uff09"}),"\n",(0,i.jsx)(e.li,{children:"\u7528\u6237\u70b9\u51fb\u6076\u610f\u94fe\u63a5\uff0c\u5e76\u6253\u5f00\u6d4f\u89c8\u5668"}),"\n",(0,i.jsx)(e.li,{children:"\u6b64\u65f6\u6d4f\u89c8\u5668\u5ba2\u6237\u7aef\u5e76\u4e0d\u4f1a\u53d1\u8d77http\u8bf7\u6c42\u5230web\u670d\u52a1\uff0c\u800c\u662f\u5728\u6d4f\u89c8\u5668\u5ba2\u6237\u7aef\u6267\u884cXSS\uff08JavaScript\u4ee3\u7801\uff09"}),"\n",(0,i.jsx)(e.li,{children:"\u6b64\u65f6\u5c06XSS\u4ee3\u7801\u6267\u884c\u7ed3\u679c\u53d1\u9001\u7ed9\u653b\u51fb\u8005\u7684\u6076\u610f\u670d\u52a1"}),"\n",(0,i.jsx)(e.li,{children:"\u653b\u51fb\u8005\u8bbf\u95ee\u81ea\u5df1\u7684XSS\u5e73\u53f0\u5e76\u8bfb\u53d6\u7528\u6237\u7684\u654f\u611f\u4fe1\u606f"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9632\u5fa1",children:"\u9632\u5fa1"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u8f93\u5165\u68c0\u67e5 : \u8001\u529e\u6cd5\u4e86, \u9ed1\u767d\u540d\u5355\u3001\u6570\u636e\u7c7b\u578b"}),"\n",(0,i.jsx)(e.li,{children:"\u8f93\u51fa\u7f16\u7801 : URL \u7f16\u7801\u3001HTML \u7f16\u7801\u3001JS \u7f16\u7801"}),"\n",(0,i.jsx)(e.li,{children:"httponly \u7b56\u7565 : \u7981\u6b62 JS \u8bfb\u53d6\u654f\u611f Cookie (\u8fd9\u5e76\u4e0d\u80fd\u9632\u5fa1 XSS \u6f0f\u6d1e, \u53ea\u662f\u89e3\u51b3\u5229\u7528 XSS \u8fdb\u884c Cookie \u52ab\u6301\u7684\u95ee\u9898)"}),"\n",(0,i.jsx)(e.li,{children:"CSP \u7b56\u7565: \u4e2a\u4eba\u8ba4\u4e3a\u6bd4\u8f83\u5b8c\u7f8e\u7684\u89e3\u51b3\u65b9\u5f0f"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"bypass",children:"ByPass"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u4f7f\u7528\u904d\u5386\u624b\u6bb5, \u770b\u770b\u8fc7\u6ee4\u4e86\u54ea\u4e9b\u5b57\u7b26\u6216\u8005\u4e8b\u4ef6\u51fd\u6570"}),"\n",(0,i.jsx)(e.li,{children:"\u5bf9\u4e8e\u8fc7\u6ee4\u7684\u5b57\u7b26\u53ef\u4ee5\u5c1d\u8bd5\u7f16\u7801\u6216\u8005\u534a\u95ed\u5408\u7684\u624b\u6bb5\u8fdb\u884c\u7ed5\u8fc7, \u5bf9\u4e8e\u4e8b\u4ef6\u51fd\u6570\u53ef\u4ee5\u5c1d\u8bd5\u6362\u5176\u4ed6\u6807\u7b7e\u8fdb\u884c\u64cd\u4f5c"}),"\n",(0,i.jsx)(e.li,{children:"\u4e4b\u540e\u6839\u636e\u5177\u4f53\u60c5\u51b5\u5c1d\u8bd5 \u53cc\u5199\u3001\u7f16\u7801\u3001\u62fc\u63a5\u7b49\u7b49\u64cd\u4f5c"}),"\n",(0,i.jsx)(e.li,{children:"\u53bb\u627e\u4e00\u4e9b XSS Payload \u96c6\u5408"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"questions",children:"Questions"}),"\n",(0,i.jsx)(e.h3,{id:"xss-\u4e4b\u95f4\u7684\u5dee\u522b",children:"XSS \u4e4b\u95f4\u7684\u5dee\u522b"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"\u53cd\u5c04\u578b"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"\u5b58\u50a8\u578b"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"DOM\u578b"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u653b\u51fb\u5bf9\u8c61"}),(0,i.jsx)(e.td,{children:"\u9700\u8981\u653b\u51fb\u8005\u4e3b\u52a8\u5bfb\u627e\u53d7\u5bb3\u8005\u5e76\u8bf1\u5bfc\u5176\u8bbf\u95ee"}),(0,i.jsx)(e.td,{children:"\u5e7f\u6492\u7f51\uff0c\u53ea\u8981\u6709\u7528\u6237\u8bbf\u95ee\u5bf9\u5e94\u7684\u9875\u9762\u5c31\u4f1a\u89e6\u53d1\uff0c\u5371\u5bb3\u6027\u66f4\u5927\uff0c\u8303\u56f4\u66f4\u5e7f"}),(0,i.jsx)(e.td,{children:"\u9700\u8981\u653b\u51fb\u8005\u4e3b\u52a8\u5bfb\u627e\u53d7\u5bb3\u8005\u5e76\u8bf1\u5bfc\u5176\u8bbf\u95ee\uff08\u540c\u53cd\u5c04\u578b\uff09"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u6301\u4e45\u6027"}),(0,i.jsx)(e.td,{children:"\u4e00\u6b21\u6027"}),(0,i.jsx)(e.td,{children:"\u53ea\u8981\u670d\u52a1\u5668\u4e0d\u5b95\u673a\uff0cpayload\u4e0d\u88ab\u624b\u52a8\u5220\u9664\uff0c\u5c31\u4e00\u76f4\u5b58\u5728"}),(0,i.jsx)(e.td,{children:"\u4e00\u6b21\u6027"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u89e6\u53d1\u70b9"}),(0,i.jsx)(e.td,{children:"\u7f51\u7ad9\u4e2d\u76f4\u63a5\u8fd4\u56de\u53c2\u6570\u5185\u5bb9\u7684\u529f\u80fd\u70b9"}),(0,i.jsx)(e.td,{children:"\u7f51\u7ad9\u4e2d\u5c06\u6570\u636e\u76f4\u63a5\u5b58\u50a8\u5230\u6570\u636e\u5e93\u4e2d\uff0c\u540e\u76f4\u63a5\u8fd4\u56de\u6570\u636e\u5728\u524d\u7aef\u5c55\u793a\u7684\u529f\u80fd\u70b9"}),(0,i.jsx)(e.td,{children:"\u53d6\u51b3\u4e8eDOM\u8282\u70b9"})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"xss-\u548c-csrf-\u7684\u533a\u522b",children:"XSS \u548c CSRF \u7684\u533a\u522b"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u7c7b\u522b"}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"\u7279\u5f81"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"XSS"}),(0,i.jsxs)(e.td,{children:["1. \u4e3b\u8981\u662f\u52a0\u8f7dJavaScript\u4ee3\u7801\uff0c\u5728\u5ba2\u6237\u7aef\u6267\u884c",(0,i.jsx)("br",{}),"2. \u867d\u7136\u7ecf\u8fc7\u540e\u7aef\uff0c\u6570\u636e\u5e93\uff08\u5b58\u50a8\u578b\uff09\uff0c\u4f46\u4e3b\u8981\u9700\u8981\u5ba2\u6237\u7aef\u6267\u884cXSS\u4ee3\u7801\uff0c\u624d\u80fd\u751f\u6548",(0,i.jsx)("br",{}),"3. DOM\u578bXSS\u4e00\u5b9a\u4e0d\u7ecf\u8fc7\u540e\u7aef\uff0c\u53ea\u662f\u5bf9\u6d4f\u89c8\u5668\u5ba2\u6237\u7aef\u53d1\u8d77\u7684\u653b\u51fb",(0,i.jsx)("br",{}),"4. XSS\u653b\u51fb\u9488\u5bf9\u7684\u662f\u7528\u6237\u5c42\u9762\u7684\u653b\u51fb \uff08\u653b\u51fb\u5ba2\u6237\u7aef\uff09",(0,i.jsx)("br",{})]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"CSRF"}),(0,i.jsxs)(e.td,{children:["1. \u4e3b\u8981\u662f\u6b3a\u9a97\u670d\u52a1\u5668\uff0c\u867d\u7136\u662f\u7531\u7528\u6237\u53d1\u8d77\uff0c\u4f46\u662f\u670d\u52a1\u5668\u65e0\u6cd5\u5224\u65ad\u662f\u5426\u662f\u4e0d\u662f\u7528\u6237\u60f3\u8981\u53d1\u8d77\u7684\u8bf7\u6c42",(0,i.jsx)("br",{}),"2. \u4e00\u5b9a\u4f1a\u7ecf\u8fc7\u540e\u7aef\u5904\u7406\uff0c\u4e0d\u7136\u65e0\u6cd5\u6267\u884c",(0,i.jsx)("br",{}),"3. CSRF\u662f\u4e00\u79cd\u8eab\u4efd\u4f2a\u9020\u653b\u51fb\uff0c\u6765\u5bf9\u670d\u52a1\u5668\u8fdb\u884c\u6b3a\u9a97\u7684\u4e00\u79cd\u653b\u51fb\u624b\u6cd5/",(0,i.jsx)("br",{})]})]})]})]})]})}function o(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>t});var i=s(6540);const l={},r=i.createContext(l);function d(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);