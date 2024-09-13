"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[822],{7495:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=s(4848),i=s(8453);const l={sidebar_position:2,title:"Quickstart"},o="Quickstart",a={id:"quickstart",title:"Quickstart",description:"This guide will help you quickly launch a LLMOS cluster with default bootstrap options. The installation section covers more details about the bootstrap configuration options.",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Quickstart"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/"},next:{title:"Installation",permalink:"/docs/category/installation"}},r={},c=[{value:"Install Script",id:"install-script",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"quickstart",children:"Quickstart"})}),"\n",(0,n.jsxs)(t.p,{children:["This guide will help you quickly launch a LLMOS cluster with default bootstrap options. The ",(0,n.jsx)(t.a,{href:"./installation",children:"installation"})," section covers more details about the bootstrap configuration options."]}),"\n",(0,n.jsx)(t.h2,{id:"install-script",children:"Install Script"}),"\n",(0,n.jsx)(t.p,{children:"LLMOS can be installed to a bare-metal server or a virtual machine. To bootstrap a new cluster, follow the steps below:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"curl -sfL https://get-llmos.1block.ai | sh -s - --cluster-init --token mytoken\n"})}),"\n",(0,n.jsx)(t.p,{children:"Additionally, you can run the following command to add a new worker node to an existing cluster:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"curl -sfL https://get-llmos.1block.ai | LLMOS_SERVER=https://server-url:6443 LLMOS_TOKEN=mytoken sh -s -\n"})}),"\n",(0,n.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsxs)(t.p,{children:["After installing LLMOS, you can access the dashboard by navigating to ",(0,n.jsx)(t.code,{children:"https://<server-ip>:8443"})," in your web browser."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["LLMOS will bootstrap a default admin user with the username ",(0,n.jsx)(t.code,{children:"admin"})," and a random password. To get the password, you can run the following command on the ",(0,n.jsx)(t.strong,{children:"cluster-init"})," node:","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"kubectl get secret --namespace llmos-system llmos-bootstrap-passwd -o go-template='{{.data.password|base64decode}}{{\"\\n\"}}'\n"})}),"\n",(0,n.jsx)(t.img,{alt:"first-login",src:s(1650).A+"",width:"2770",height:"1494"})]}),"\n",(0,n.jsxs)(t.li,{children:["After logging in, you will be redirected to the setup page, you will need to configure the following:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Set a new password for the admin user, using strong passwords is recommended."}),"\n",(0,n.jsxs)(t.li,{children:["Config the server URL where all other nodes in your clusters will need to be able to reach this.\n",(0,n.jsx)(t.img,{alt:"setup",src:s(8022).A+"",width:"3138",height:"1642"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["After that, you will be redirected to the home page where you can start using LLMOS.\n",(0,n.jsx)(t.img,{alt:"home-page",src:s(5734).A+"",width:"3834",height:"1842"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"To learn more about how to use LLMOS, check out the examples below:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"./user_guide/llm_management/serve",children:"Chat with LLMOS Models"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"./user_guide/llm_management/notebooks#create-a-notebook",children:"Creating a Jupyter Notebook"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8022:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/auth-first-login-setup-008215ac775ac6af39c0e950f93c3f45.png"},1650:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/auth-first-login-eb53279e63eeb648fd840a2269c7bd54.png"},5734:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/home-page-6df8828d19ea9172a3619e9a04591aeb.png"},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(6540);const i={},l=n.createContext(i);function o(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);