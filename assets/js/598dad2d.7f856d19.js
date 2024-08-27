"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[588],{561:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var d=a(4848),s=a(8453);const t={sidebar_position:2,title:"Managed Addons"},o=void 0,r={id:"user_guide/advanced/managed_addon",title:"Managed Addons",description:"Managed Addons helps to manage additional addons that are needed for your LLMOS cluster.",source:"@site/docs/user_guide/advanced/managed_addon.md",sourceDirName:"user_guide/advanced",slug:"/user_guide/advanced/managed_addon",permalink:"/docs/user_guide/advanced/managed_addon",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/user_guide/advanced/managed_addon.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Managed Addons"},sidebar:"tutorialSidebar",previous:{title:"Namespace",permalink:"/docs/user_guide/advanced/namespace"},next:{title:"User & Authentication",permalink:"/docs/category/user--authentication"}},i={},l=[{value:"Create a Managed Addons:",id:"create-a-managed-addons",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"Managed Addons helps to manage additional addons that are needed for your LLMOS cluster.\nBy default, LLMOS comes with a set of system addons that are enabled by default. These addons include:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Nvidia GPU Operator:"})," Enables ",(0,d.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/index.html",children:"Nvidia GPU Operator"})," support for your LLMOS cluster."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"KubeRay Operator:"})," Enables ",(0,d.jsx)(n.a,{href:"https://www.ray.io/",children:"Ray"})," cluster and other resources management for your LLMOS cluster."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"LLMOS Operator Redis:"})," Provides a LLMOS-managed ",(0,d.jsx)(n.a,{href:"https://redis.io/",children:"Redis"})," service for your LLMOS cluster."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Rook Ceph Operator:"})," Enables ",(0,d.jsx)(n.a,{href:"https://rook.io/",children:"Rook Ceph"})," storage support in your LLMOS cluster."]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"Managed Addonss",src:a(6460).A+"",width:"3118",height:"918"})}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsx)(n.p,{children:"System addons are required for LLMOS to function properly. However, you can also install additional addons that are not included in the default set."})}),"\n",(0,d.jsx)(n.h2,{id:"create-a-managed-addons",children:"Create a Managed Addons:"}),"\n",(0,d.jsxs)(n.p,{children:["Managed Addons utilize ",(0,d.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"})," for installation and management. You can also add additional addons from sources like the ",(0,d.jsx)(n.a,{href:"https://artifacthub.io/",children:"Artifact Hub"}),"."]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["Navigate to the ",(0,d.jsx)(n.strong,{children:"Managed Addons"})," page and click ",(0,d.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:["Select the desired ",(0,d.jsx)(n.strong,{children:"Namespace"})," and enter a name for the addon."]}),"\n",(0,d.jsxs)(n.li,{children:["Provide the ",(0,d.jsx)(n.strong,{children:"Chart Repository URL"})," (e.g., ",(0,d.jsx)(n.code,{children:"https://grafana.github.io/helm-charts"}),"), ",(0,d.jsx)(n.strong,{children:"Chart Name"}),", and ",(0,d.jsx)(n.strong,{children:"Version"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"(Optional)"})," Set ",(0,d.jsx)(n.strong,{children:"Enabled"})," to ",(0,d.jsx)(n.code,{children:"false"})," if you want to enable the addon later."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"(Optional)"})," If needed, you can customize the addon by adding ",(0,d.jsx)(n.code,{children:"Values"})," content to override the default settings."]}),"\n",(0,d.jsxs)(n.li,{children:["Click ",(0,d.jsx)(n.strong,{children:"Create"})," to initiate the installation process."]}),"\n",(0,d.jsxs)(n.li,{children:["The addon will be installed in the background. You can monitor its status on the ",(0,d.jsx)(n.strong,{children:"Managed Addonss"})," page.","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["The state will show as ",(0,d.jsx)(n.code,{children:"Ready"})," once the addon is successfully installed."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"Add Managed Addons",src:a(8026).A+"",width:"3188",height:"1746"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},8026:(e,n,a)=>{a.d(n,{A:()=>d});const d=a.p+"assets/images/managed-addon-create-6126c635c1e000e1dde78c60b76ff1a9.png"},6460:(e,n,a)=>{a.d(n,{A:()=>d});const d=a.p+"assets/images/managed-addons-811919c9d06641788f3c95070e0fc3c9.png"},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var d=a(6540);const s={},t=d.createContext(s);function o(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);