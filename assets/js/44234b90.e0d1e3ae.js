"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[587],{9449:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=a(4848),s=a(8453);const r={sidebar_position:40,title:"Upgrade"},o=void 0,i={id:"upgrade",title:"Upgrade",description:"LLMOS includes a built-in upgrade check mechanism that automatically checks for new versions every 60 minutes. The upgrade checker settings can be configured on the settings page.",source:"@site/docs/upgrade.md",sourceDirName:".",slug:"/upgrade",permalink:"/docs/upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/upgrade.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,title:"Upgrade"},sidebar:"tutorialSidebar",previous:{title:"Uninstalling LLMOS",permalink:"/docs/installation/uninstall"},next:{title:"User Guide",permalink:"/docs/category/user-guide"}},l={},d=[{value:"Upgrade via Command Line",id:"upgrade-via-command-line",level:2},{value:"Adding a new version",id:"adding-a-new-version",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["LLMOS includes a built-in upgrade check mechanism that automatically checks for new versions every 60 minutes. The upgrade checker ",(0,t.jsx)(n.a,{href:"/docs/settings#upgrade-check-enabled",children:"settings"})," can be configured on the ",(0,t.jsx)(n.strong,{children:"settings"})," page."]}),"\n",(0,t.jsx)(n.p,{children:"Admin users can view all available versions and manually upgrade to new versions through the CLI."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Downgrading LLMOS is not supported."})}),"\n",(0,t.jsx)(n.h2,{id:"upgrade-via-command-line",children:"Upgrade via Command Line"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Login to one of the management nodes, or have the ",(0,t.jsx)(n.code,{children:"KUBECONFIG"})," environment variable set to point to correct LLMOS cluster.","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"export KUBECONFIG=/path/to/llmos-kubeconfig\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Run the following command to upgrade the cluster to a newer version:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl apply -f - <<EOF\napiVersion: management.llmos.ai/v1\nkind: Upgrade\nmetadata:\n  name: upgrade-v011-rc1\nspec:\n  version: v0.1.1-rc1 # The version to upgrade to\n  registry: "docker.io/llmosai" # Override the default registry if needed(e.g., private registry)\nEOF\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Wait for the upgrade to complete. A successful upgrade YAML will look like the following(with ",(0,t.jsx)(n.code,{children:"status.state"})," to ",(0,t.jsx)(n.code,{children:"Complete"}),"):","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: management.llmos.ai/v1\nkind: Upgrade\nmetadata:\n  annotations:\n    kubectl.kubernetes.io/last-applied-configuration: |\n      {"apiVersion":"management.llmos.ai/v1","kind":"Upgrade","metadata":{"annotations":{},"name":"llmos-upgrade-test"},"spec":{"registry":"docker.io/llmos-dev","version":"v0.1.1-rc1"}}\n  creationTimestamp: "2024-09-23T02:32:24Z"\n  generation: 1\n  labels:\n    llmos.ai/latest-upgrade: "true"\n  name: llmos-upgrade-test\n  resourceVersion: "9348507"\n  uid: ca703060-73a0-4b32-8b93-9266c8c7a28f\nspec:\n  version: v0.1.1-rc1\nstatus:\n  PreviousKubernetesVersion: v1.31.0+k3s1\n  appliedVersion: v0.1.1-rc1\n  completeTime: "2024-09-23T02:36:36Z"\n  conditions:\n  - lastUpdateTime: "2024-09-23T02:36:36Z"\n    message: Upgrade completed\n    reason: Ready\n    status: "True"\n    type: Completed\n  - lastUpdateTime: "2024-09-23T02:32:24Z"\n    message: Chart repo is ready for upgrade v0.1.1-rc1\n    reason: Ready\n    status: "True"\n    type: ChartsRepoReady\n  - lastUpdateTime: "2024-09-23T02:36:35Z"\n    message: All managed system addons are ready\n    reason: Ready\n    status: "True"\n    type: ManagedAddonsIsReady\n  - lastUpdateTime: "2024-09-23T02:35:40Z"\n    message: Manifest upgrade is ready\n    reason: Ready\n    status: "True"\n    type: ManifestUpgradeComplete\n  - lastUpdateTime: "2024-09-23T02:36:36Z"\n    message: All nodes upgraded to version v0.1.1-rc1(v1.31.1+k3s1)\n    reason: Ready\n    status: "True"\n    type: NodesUpgraded\n  managedAddonStatus:\n  - complete: true\n    disabled: false\n    jobName: helm-install-gpu-operator\n    name: gpu-operator\n  - complete: true\n    disabled: false\n    jobName: helm-install-kuberay-operator\n    name: kuberay-operator\n  - complete: true\n    disabled: false\n    jobName: helm-install-llmos-operator-redis\n    name: llmos-operator-redis\n  - complete: true\n    disabled: false\n    jobName: helm-install-rook-ceph\n    name: rook-ceph\n  planStatus:\n  - complete: true\n    lastUpdateTime: "2024-09-24T01:48:31Z"\n    latestHash: 962f583a45a4301325b824255d3c2232b5372caed16741717e5317db\n    latestVersion: v0.1.1-rc1\n    name: llmos-upgrade-test-agent\n  - complete: true\n    lastUpdateTime: "2024-09-24T02:42:45Z"\n    latestHash: 962f583a45a4301325b824255d3c2232b5372caed16741717e5317db\n    latestVersion: v0.1.1-rc1\n    name: llmos-upgrade-test-server\n  previousVersion: v0.1.0\n  startTime: "2024-09-23T02:32:24Z"\n  state: Complete\n  upgradeJobs:\n  - complete: true\n    helmChartName: llmos-crd\n    lastUpdateTime: "2024-09-23T02:34:55Z"\n    name: helm-install-llmos-crd\n  - complete: true\n    helmChartName: llmos-operator\n    lastUpdateTime: "2024-09-23T02:35:43Z"\n    name: helm-install-llmos-operator\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"adding-a-new-version",children:"Adding a new version"}),"\n",(0,t.jsxs)(n.p,{children:["The new versions are available in the ",(0,t.jsx)(n.a,{href:"https://llmos-upgrade.1block.ai/v1/versions",children:"upgrade-check-url"}),", if you don't want to enable the default upgrade checker, you can add a new version to the cluster by creating a new ",(0,t.jsx)(n.code,{children:"Version"})," resource manually as shown below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl apply -f - <<EOF\napiVersion: management.llmos.ai/v1\nkind: Version\nmetadata:\n   name: v0.1.1-rc1\nspec:\n   minUpgradableVersion: v0.1.0 # The minimum version that can be upgraded to this version\n   kubernetesVersion: v1.31.0+k3s1 # The newer k8s version that is included in the new version\n   releaseDate: "2024-09-30"\n   tags: ["preview"]\nEOF\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["With this method, you are responsible to create the correct ",(0,t.jsx)(n.code,{children:"Version"})," resource, and do not modify the spec parameters copied from the upgrade check URL unless you know exactly what you are doing."]})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var t=a(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);