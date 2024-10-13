"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[768],{2624:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var l=t(4848),i=t(8453);const s={sidebar_position:4,title:"Uninstalling LLMOS"},a=void 0,o={id:"installation/uninstall",title:"Uninstalling LLMOS",description:"If you installed LLMOS using the installation script, an uninstallation script is automatically generated during installation.",source:"@site/docs/installation/uninstall.md",sourceDirName:"installation",slug:"/installation/uninstall",permalink:"/docs/installation/uninstall",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/installation/uninstall.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Uninstalling LLMOS"},sidebar:"tutorialSidebar",previous:{title:"Bootstrap Options",permalink:"/docs/installation/"},next:{title:"Upgrade",permalink:"/docs/upgrade"}},r={},d=[{value:"Uninstalling Steps",id:"uninstalling-steps",level:2},{value:"Manual Uninstall",id:"manual-uninstall",level:2}];function c(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"If you installed LLMOS using the installation script, an uninstallation script is automatically generated during installation."}),"\n",(0,l.jsx)(e.p,{children:"If you plan to rejoin a node to an existing cluster after uninstalling and reinstalling, make sure to delete the node from the cluster first. This ensures the node password is properly removed. Follow the steps below for more details."}),"\n",(0,l.jsxs)(e.admonition,{type:"warning",children:[(0,l.jsx)(e.p,{children:"Running the uninstallation script will delete local cluster data, configuration files, scripts, and CLI tools. Please ensure you back up any important data before proceeding."}),(0,l.jsx)(e.p,{children:"Note that this will not remove any data from external datastores."})]}),"\n",(0,l.jsx)(e.h2,{id:"uninstalling-steps",children:"Uninstalling Steps"}),"\n",(0,l.jsx)(e.p,{children:"Uninstalling LLMOS involves two steps:"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["Run the uninstallation script on the node to clean up the system:","\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"sudo llmos-uninstall.sh\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Delete the node from the cluster, either from the ",(0,l.jsx)(e.code,{children:"LLMOS Dashboard > Nodes"})," page or by running the following kubectl command:","\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"kubectl delete node $NODE_NAME\n"})}),"\n",(0,l.jsx)(e.img,{alt:"delete node",src:t(659).A+"",width:"3838",height:"1360"})]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"manual-uninstall",children:"Manual Uninstall"}),"\n",(0,l.jsx)(e.p,{children:"If you manually installed LLMOS, you can uninstall it by running the following script on the target node:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"curl -sfL https://raw.githubusercontent.com/llmos-ai/llmos/main/uninstall.sh | sh -\n"})}),"\n",(0,l.jsx)(e.p,{children:"Afterward, delete the node from the cluster as described in the previous section."}),"\n",(0,l.jsxs)(e.p,{children:["If you are working in an air-gapped environment, save the ",(0,l.jsx)(e.a,{href:"https://raw.githubusercontent.com/llmos-ai/llmos/main/uninstall.sh",children:"uninstall script"})," to your local path, and run it manually with:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"sudo sh ./uninstall.sh\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(c,{...n})}):c(n)}},659:(n,e,t)=>{t.d(e,{A:()=>l});const l=t.p+"assets/images/delete-node-c453b139aba94e15c49851724357cbe2.png"},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>o});var l=t(6540);const i={},s=l.createContext(i);function a(n){const e=l.useContext(s);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);