(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{34:function(e,t,a){},35:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(0),s=a.n(i),c=a(13),r=a.n(c),o=(a(34),a(25)),h=a(26),l=a(28),d=a(27),j=(a.p,a(35),a(23)),p=a(8),u=(a(36),a(7)),b=a(20),m=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={rapes:[],fems:[],stats:[],api:"2a41caa52c40430b896936cc93c42527"},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://newsapi.org/v2/everything?q=rape&apiKey=2a41caa52c40430b896936cc93c42527",{mode:"no-cors",cache:"no-cache",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.setState({rapes:t})})).catch(console.log),fetch("https://newsapi.org/v2/everything?q=femicide&apiKey=2a41caa52c40430b896936cc93c42527").then((function(e){return e.json()})).then((function(t){e.setState({fems:t})})).catch(console.log),fetch("https://newsapi.org/v2/everything?q=gender%20AND%20based%20AND%20violence&apiKey=2a41caa52c40430b896936cc93c42527").then((function(e){return e.json()})).then((function(t){e.setState({stats:t})})).catch(console.log)}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)("h1",{children:"Welcome to the state of Gender Based Violence against women."})}),Object(n.jsxs)(j.a,{defaultActiveK88ey:"profile",id:"uncontrolled-tab-example",children:[Object(n.jsxs)(p.a,{eventKey:"About",title:"About",children:[Object(n.jsx)("p",{children:"If you are an activist with a day-job, this state board is for you. Keep track of all the happenings in the world of women's rights, join the rape watch and femicide watch. Sign petitions, donate to organizations and contribute to initiatives all at a single place. Feel free to suggest grassroot organizations and petitions to add to this dashboard. The rape news and other news is sourced from newsapi.org."}),Object(n.jsx)("p",{children:"Change the world by staying in the loop and on top of issues affecting women worldwide."}),Object(n.jsx)(b.a,{src:"https://image.freepik.com/free-vector/women-faces-pattern-women-s-day_23-2148421369.jpg"})]}),Object(n.jsx)(p.a,{eventKey:"Rape-watch",title:"Rape-watch",children:Object(n.jsx)(u.a,{children:this.state.rapes.articles&&this.state.rapes.articles.map((function(e){return Object(n.jsx)(u.a.Item,{action:!0,href:e.url,children:e.title})}))})}),Object(n.jsx)(p.a,{eventKey:"Femicides",title:"Femicides",children:Object(n.jsx)(u.a,{children:this.state.fems.articles&&this.state.fems.articles.map((function(e){return Object(n.jsx)(u.a.Item,{action:!0,href:e.url,children:e.title})}))})}),Object(n.jsx)(p.a,{eventKey:"State of Gender Based Violence",title:"State of Gender Based Violence",children:Object(n.jsx)(u.a,{children:this.state.stats.articles&&this.state.stats.articles.map((function(e){return Object(n.jsx)(u.a.Item,{action:!0,href:e.url,children:e.title})}))})}),Object(n.jsxs)(p.a,{eventKey:"Statistics",title:"Statistics",children:[Object(n.jsx)(b.a,{src:"https://brazilportal.files.wordpress.com/2016/07/violence-against-women-infographic.jpg?w=666",responsive:!0}),Object(n.jsx)(b.a,{src:"https://i1.wp.com/technewslit.com/sciencebusiness/wp-content/uploads/2020/03/EqualWomensRights_Statista.jpg?ssl=1"})]}),Object(n.jsx)(p.a,{eventKey:"Organizations",title:"Organizations",children:Object(n.jsx)(j.a,{defaultActiveK88ey:"profile",id:"uncontrolled-tab-example",children:Object(n.jsx)(p.a,{eventKey:"India",title:"India",children:Object(n.jsxs)(u.a,{children:[Object(n.jsxs)(u.a.Item,{children:[Object(n.jsx)("h3",{children:"The Action Northeast Trust (ANT)"}),Object(n.jsx)("p",{children:"Started in October 2000, the ANT is based in Rowmari in Lower Assam.It works in over 230 villages for furthering the pace of development in the areas falling under Chirang District of Bodoland in Lower Assam. It also works to build up the voluntary sector in the northeast region."})]}),Object(n.jsxs)(u.a.Item,{children:[Object(n.jsx)("h3",{children:"Astitva Samajik Sansthan"}),Object(n.jsx)("p",{children:"A community based organization that was established in May 2008 in Dehradun, Uttarakhand. Astitva strives to bring about gender equality and end gender based violence in society. This is done by empowering women and youth through rights advocacy, education, skill training, job placement, and services such as childcare. Astitva also provides comprehensive support services including counselling, legal aid, medical aid, and shelter for women, youth and children facing violence. They work in Purkazi, Shahpur, Budhana and Kandhala."})]}),Object(n.jsxs)(u.a.Item,{children:[Object(n.jsx)("h3",{children:"Mahila Swarojgar Samiti"}),Object(n.jsx)("p",{children:"An organization based at Varanasi in Uttar Pradesh, India and was established in July 2000. Mahila Swarojgar Samiti works with women's groups in villages in order to set up self-help groups and income generation programmes. The aim of the project is to empower women to take control of their lives."})]})]})})})}),Object(n.jsx)(p.a,{eventKey:"Petitions",title:"Petitions",children:Object(n.jsx)(u.a,{children:Object(n.jsx)(u.a.Item,{action:!0,href:"https://www.change.org/p/andr%C3%A9s-manuel-l%C3%B3pez-obrador-stop-femicide-in-mexico",children:"STOP FEMICIDE IN MEXICO"})})}),Object(n.jsx)(p.a,{eventKey:"Initiatives",title:"Initiatives"})]}),Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)("h3",{children:"We may add more tabs to this page."})})]})}}]),a}(i.Component),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),g()}},[[42,1,2]]]);
//# sourceMappingURL=main.031df5f8.chunk.js.map