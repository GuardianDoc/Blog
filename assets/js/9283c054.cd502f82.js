"use strict";(self.webpackChunkblog_github_io=self.webpackChunkblog_github_io||[]).push([[7519],{8190:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=e(4848),o=e(8453),i=e(343);const r={sidebar_position:2,tags:["tool"],title:"gost",description:"gost",sidebar_label:"gost",slug:"/tool/network/2"},l="gost",a={id:"tools/\u5f00\u53d1\u5de5\u5177/\u8ba1\u7b97\u673a\u7f51\u7edc\u5de5\u5177/2",title:"gost",description:"gost",source:"@site/docs/tools/\u5f00\u53d1\u5de5\u5177/\u8ba1\u7b97\u673a\u7f51\u7edc\u5de5\u5177/2.md",sourceDirName:"tools/\u5f00\u53d1\u5de5\u5177/\u8ba1\u7b97\u673a\u7f51\u7edc\u5de5\u5177",slug:"/tool/network/2",permalink:"/docs/tool/network/2",draft:!1,unlisted:!1,tags:[{label:"tool",permalink:"/docs/tags/tool"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["tool"],title:"gost",description:"gost",sidebar_label:"gost",slug:"/tool/network/2"},sidebar:"toolsSidebar",previous:{title:"\u95ee\u9898\u89e3\u51b3",permalink:"/docs/tool/network/1"},next:{title:"iptables",permalink:"/docs/tool/network/3"}},c={},d=[{value:"\u4f7f\u7528(\u5f00\u673a\u81ea\u542f+Burp \u914d\u7f6e)",id:"\u4f7f\u7528\u5f00\u673a\u81ea\u542fburp-\u914d\u7f6e",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function u(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"gost",children:"gost"}),"\n",(0,s.jsx)(i.A,{title:"gost",description:"\u4e00\u4e2a\u4f7f\u7528 Go \u8bed\u8a00\u7f16\u5199\u7684\u5b89\u5168\u96a7\u9053",imageUrl:"https://avatars.githubusercontent.com/u/2801795?s=48&v=4",linkUrl:"https://baidu.com/"}),"\n",(0,s.jsx)(n.p,{children:"\u9700\u6c42 : \u5e73\u5e38\u6253\u9776\u573a VPN \u4e00\u822c\u6302\u5728\u865a\u62df\u673a\u4e0a, \u5982\u679c\u81ea\u5df1\u60f3\u8981\u5728 Windows \u4e0a\u8bbf\u95ee\u5c31\u9700\u8981\u6302\u4ee3\u7406\u8fdb\u884c\u4f7f\u7528"}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u5f00\u673a\u81ea\u542fburp-\u914d\u7f6e",children:"\u4f7f\u7528(\u5f00\u673a\u81ea\u542f+Burp \u914d\u7f6e)"}),"\n",(0,s.jsx)(n.p,{children:"\u4ece Github \u4e0b\u8f7d\u5bf9\u5e94\u7684\u7a0b\u5e8f\u5230\u672c\u673a\u5373\u53ef, \u4e4b\u540e\u6211\u9700\u8981\u8fd9\u4e2a\u7a0b\u5e8f\u53d8\u4e3a\u4e00\u4e2a\u670d\u52a1\u4fbf\u4e8e\u540e\u95e8\u8fdb\u884c\u5f00\u673a\u81ea\u542f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\u250c\u2500\u2500(root\u327fkali)-[~/Downloads]\n\u2514\u2500# echo $PATH\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/root/.dotnet/tools\n                                                                                                                                                               \n\u250c\u2500\u2500(root\u327fkali)-[~/Downloads]\n\u2514\u2500# cp gost /usr/local/sbin\n\n# \u7f16\u5199\u5bf9\u5e94\u7684\u670d\u52a1\u6587\u4ef6\n\u250c\u2500\u2500(root\u327fkali)-[~/Downloads]\n\u2514\u2500# cat /usr/lib/systemd/system/gost.service \n[Unit]\nDescription=gost\nAfter=network-online.target\nWants=network-online.target systemd-networkd-wait-online.service\n \n[Service]\nType=simple\nUser=root\nDynamicUser=true\nExecStart=/usr/local/sbin/gost  -L admin:password@:1080\n \n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e4b\u540e\u5f00\u542f\u670d\u52a1\u4ee5\u53ca\u52a0\u5165\u5f00\u673a\u81ea\u542f\u9879\u5373\u53ef"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\u250c\u2500\u2500(root\u327fkali)-[~/Downloads]\n\u2514\u2500# systemctl daemon-reload\n                                                                                                                                                                 \n\u250c\u2500\u2500(root\u327fkali)-[~/Downloads]\n\u2514\u2500# systemctl start gost.service \n                                                                                                                                                                 \n\u250c\u2500\u2500(root\u327fkali)-[~/Downloads]\n\u2514\u2500# systemctl enable gost.service\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u968f\u540e\u5bf9 burp \u8fdb\u884c\u76f8\u5173\u8bbe\u7f6e, \u6ce8\u610f\u4e0b\u9762\u90a3\u4e2a\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u9009\u62e9 (\u6211\u662f\u56e0\u4e3a\u4e00\u4e9b Host  \u4e0d\u60f3\u518dwindows \u4e0a\u914d\u7f6e, \u76f4\u63a5\u518d Linux \u914d\u7f6e\u540e\u5c31\u53ef\u4ee5\u5feb\u901f\u4f7f\u7528\u4e86)"}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240413151824.png",alt:""})})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://blog.csdn.net/v6543210/article/details/129733065",children:"Linux\u4e0a\u642d\u5efaSocks5\u670d\u52a1\u5668\u6700\u7b80\u5355\u7684\u65b9\u6cd5"})}),"\n"]})]})}function g(t={}){const{wrapper:n}={...(0,o.R)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(u,{...t})}):u(t)}},343:(t,n,e)=>{e.d(n,{A:()=>p});e(6540);const s="cardContainer_NSpA",o="cardImg_IJlj",i="content_UCA7",r="cardButton_iiBo",l="divider_Pzdx";var a=e(4164),c=e(8774),d=e(5238),u=e(6347),g=e(4848);const p=t=>{let{title:n,description:e,imageUrl:p,linkUrl:h}=t;const m=(0,u.W6)();let b=e;if(b.length>65){const t=b.lastIndexOf(" ",65);b=-1!==t?b.substring(0,t)+"...":b.substring(0,65)+"..."}return(0,g.jsxs)("div",{className:(0,a.A)("cardContainer",s),onClick:()=>{m.push(h)},children:[(0,g.jsx)("img",{className:(0,a.A)("img",o),src:p,alt:n}),(0,g.jsx)("div",{className:(0,a.A)("divider",l)}),(0,g.jsxs)("div",{className:(0,a.A)("content",i),children:[(0,g.jsx)("h2",{children:n}),(0,g.jsxs)("p",{children:[b,(0,g.jsxs)(c.A,{to:h,className:(0,a.A)(r),children:[" ",(0,g.jsx)(d.ifP,{})]})]})]})]})}},8453:(t,n,e)=>{e.d(n,{R:()=>r,x:()=>l});var s=e(6540);const o={},i=s.createContext(o);function r(t){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function l(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),s.createElement(i.Provider,{value:n},t.children)}}}]);