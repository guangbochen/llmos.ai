"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[194],{4510:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=o(4848),s=o(8453);const i={sidebar_position:2,title:"Notebooks"},r=void 0,a={id:"user_guide/llm_management/notebooks",title:"Notebooks",description:"Notebooks offer a way to run lightweight web-based development environments within your LLMOS cluster, where you can run interactive code, data analysis, and machine learning tasks.",source:"@site/docs/user_guide/llm_management/notebooks.md",sourceDirName:"user_guide/llm_management",slug:"/user_guide/llm_management/notebooks",permalink:"/docs/user_guide/llm_management/notebooks",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/user_guide/llm_management/notebooks.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Notebooks"},sidebar:"tutorialSidebar",previous:{title:"LLM Management",permalink:"/docs/category/llm-management"},next:{title:"Model Serving",permalink:"/docs/user_guide/llm_management/serve"}},l={},c=[{value:"Create a Notebook",id:"create-a-notebook",level:3},{value:"Notebook Images",id:"notebook-images",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Notebooks offer a way to run lightweight web-based development environments within your LLMOS cluster, where you can run interactive code, data analysis, and machine learning tasks."}),"\n",(0,t.jsx)(n.p,{children:"With notebooks, you can easily create and manage lightweight notebook environments, providing a seamless and efficient development experience. Here's what you can do with notebooks:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Native Application Support"}),": Seamlessly run native JupyterLab, RStudio, and Visual Studio Code (code-server) with an independent environment."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cluster-based Notebooks"}),": Create and manage lightweight notebook containers directly in the cluster, eliminating the need to run them locally on your latop."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Standardized Notebook Images"}),": Administrators can provide pre-configured notebook images with required packages pre-installed, ensuring consistency across the organization and teams."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Access Control"}),": Notebook access is managed through RBAC, allowing for streamlined and secure sharing of notebooks across the organization or team."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Notebooks",src:o(743).A+"",width:"3136",height:"902"})}),"\n",(0,t.jsx)(n.h3,{id:"create-a-notebook",children:"Create a Notebook"}),"\n",(0,t.jsx)(n.p,{children:"Getting started with notebooks is easy."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Open the LLMOS Dashboard in your browser and go to the ",(0,t.jsx)(n.strong,{children:"LLM Management > Notebooks"})," page."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create"})," in the top right corner."]}),"\n",(0,t.jsxs)(n.li,{children:["Select notebook ",(0,t.jsx)(n.strong,{children:"type"})," and the image you want to use for your notebook server."]}),"\n",(0,t.jsxs)(n.li,{children:["Specify the name, namespace, resources and persistent storage setting of your notebook server.\n",(0,t.jsx)(n.img,{alt:"notebook-create",src:o(5885).A+"",width:"3120",height:"1732"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Visit"})," to visiting your notebook server once it has been provisioned.\n",(0,t.jsx)(n.img,{alt:"notebook-visit",src:o(6484).A+"",width:"3104",height:"536"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"notebook-juypter",src:o(3994).A+"",width:"3836",height:"2030"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["the default workspace is ",(0,t.jsx)(n.code,{children:"/home/jovyan"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"notebook-images",children:"Notebook Images"}),"\n",(0,t.jsxs)(n.p,{children:["LLMOS currently provides three types of notebook images for you to choose from, but you can easily add your own images via the ",(0,t.jsx)(n.code,{children:"default-notebook-images"})," setting:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/jupyterlab/jupyterlab",children:"JupyterLab"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/coder/code-server",children:"Visual Studio Code (code-server)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/rstudio/rstudio",children:"RStudio"})}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"Packages installed by users after spawning the notebook server will only last the lifetime of the Pod, to ensure packages are preserved throughout Pod restarts you will need to either:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Build custom images that include them, or"}),"\n",(0,t.jsx)(n.li,{children:"Ensure they are installed in a persistent volume backed directory"}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5885:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/notebook-create-cba85bff9fcc72e4c949efb1eec0d8f1.png"},3994:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/notebook-jupyter-0bc93c0e535cce43527d17ab3ed66c64.png"},6484:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/notebook-visit-922f32bcff3c643495b089b31792b2b0.png"},743:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/notebooks-0da23147e0e38d6ccb9198421c1438fa.png"},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var t=o(6540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);