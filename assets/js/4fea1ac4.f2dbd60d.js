"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[768],{2624:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var l=t(4848),i=t(8453);const s={sidebar_position:1,title:"Uninstalling LLMOS"},a=void 0,o={id:"installation/uninstall",title:"Uninstalling LLMOS",description:"Uninstalling script will delete the local cluster data, configuration, and all of the scripts and CLI tools. Please make sure to back up any important data before uninstalling.",source:"@site/docs/installation/uninstall.md",sourceDirName:"installation",slug:"/installation/uninstall",permalink:"/docs/installation/uninstall",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/installation/uninstall.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Uninstalling LLMOS"},sidebar:"tutorialSidebar",previous:{title:"Bootstrap Options",permalink:"/docs/installation/"},next:{title:"Upgrade",permalink:"/docs/upgrad"}},r={},c=[{value:"Uninstalling Steps",id:"uninstalling-steps",level:2},{value:"Manual Uninstall",id:"manual-uninstall",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.admonition,{type:"warning",children:[(0,l.jsx)(e.p,{children:"Uninstalling script will delete the local cluster data, configuration, and all of the scripts and CLI tools. Please make sure to back up any important data before uninstalling."}),(0,l.jsx)(e.p,{children:"Also, it will not remove any data from the external datastore."})]}),"\n",(0,l.jsx)(e.p,{children:"If you installed LLMOS using the installation script, an uninstallation script was generated automatically during installation."}),"\n",(0,l.jsx)(e.p,{children:"If you are planning on rejoining a node to an existing cluster after uninstalling and reinstalling, be sure to delete the node from the cluster to ensure that the node password is removed correctly. See the following steps for more details."}),"\n",(0,l.jsx)(e.h2,{id:"uninstalling-steps",children:"Uninstalling Steps"}),"\n",(0,l.jsx)(e.p,{children:"Uninstalling LLMOS is a two-step process:"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"Uninstall LLMOS from the node"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"sudo llmos-uninstall.sh\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"2",children:["\n",(0,l.jsxs)(e.li,{children:["Delete the node from the cluster either via the ",(0,l.jsx)(e.code,{children:"LLMOS dashboard > Nodes"})," page or using the ",(0,l.jsx)(e.code,{children:"kubectl"})," command:"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"kubectl delete node $NODE_NAME\n"})}),"\n",(0,l.jsx)(e.h2,{id:"manual-uninstall",children:"Manual Uninstall"}),"\n",(0,l.jsx)(e.p,{children:"If you installed LLMOS manually, you can uninstall it by running the following script on the target node:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"curl -sfL https://raw.githubusercontent.com/llmos-ai/llmos/main/uninstall.sh | sh -\n"})}),"\n",(0,l.jsxs)(e.p,{children:["And then delete the node from the cluster as described in the above section. If you are in an air-gap environment, you can copy and paste the ",(0,l.jsx)(e.a,{href:"https://raw.githubusercontent.com/llmos-ai/llmos/main/uninstall.sh",children:"script"})," to your local path and run it manually with ",(0,l.jsx)(e.code,{children:"sh ./uninstall.sh"}),"."]})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>o});var l=t(6540);const i={},s=l.createContext(i);function a(n){const e=l.useContext(s);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);