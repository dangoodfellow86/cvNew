(this["webpackJsonpcv-app"]=this["webpackJsonpcv-app"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports={AboutMeMain:"AboutMe_AboutMeMain__1NDfT",AboutMe:"AboutMe_AboutMe__1gs-Q",AboutMe_Title:"AboutMe_AboutMe_Title__1mRt8",AboutMe_Info:"AboutMe_AboutMe_Info__f2AKu",AboutMe_Title_wording:"AboutMe_AboutMe_Title_wording__3XZ1-"}},,,,function(e,a,t){e.exports={NavItem:"NavigationItem_NavItem__3wNHz",active:"NavigationItem_active__39N3a"}},,,function(e,a,t){e.exports={Layout:"Layout_Layout__2kcOK",LayoutImg:"Layout_LayoutImg__U64HI"}},function(e,a,t){e.exports={Projects:"Projects_Projects__2_TFh",ProjectsMain:"Projects_ProjectsMain__KTs2_"}},,,,,function(e,a,t){e.exports={NavBar:"NavigationItems_NavBar__3I0n6"}},function(e,a,t){e.exports=t.p+"static/media/background.a6f594ca.jpg"},function(e,a,t){e.exports={Banner:"Banner_Banner__2JGtX"}},function(e,a,t){e.exports=t.p+"static/media/Dan.34e05fe1.jpeg"},function(e,a,t){e.exports={Card:"ProjectCard_Card__AfzHV"}},function(e,a,t){e.exports={CVMain:"CVMainPage_CVMain__1MeVg"}},function(e,a,t){e.exports={App:"App_App__1IQbR"}},function(e,a,t){e.exports=t(38)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(18),l=t.n(r),i=(t(32),t(1)),c=t(8),m=t(11),s=t.n(m),u=function(e){return o.a.createElement("li",{className:s.a.NavItem},o.a.createElement(c.b,{to:e.link,exact:!0,activeClassName:s.a.active},e.name))},d=t(20),p=t.n(d);var v=function(){return o.a.createElement("header",{className:p.a.NavBar},o.a.createElement("div",null,o.a.createElement(u,{name:"Home",link:"/cvNew/"}),o.a.createElement(u,{name:"Projects",link:"/cvNew/Projects"}),o.a.createElement(u,{name:"About Me",link:"/cvNew/About-Me"})))},g=t(14),h=t.n(g),f=t(21),_=t.n(f),b=t(22),E=t.n(b),w=function(e){return o.a.createElement("div",{className:E.a.Banner},o.a.createElement("h1",null,e.name))},M=t(23),N=t.n(M),A=t(7),I=t.n(A),y=function(){return o.a.createElement("div",{className:I.a.AboutMeMain},o.a.createElement(w,{name:"About Me"}),o.a.createElement("div",{className:I.a.AboutMe},o.a.createElement("div",{className:I.a.AboutMe_Title},o.a.createElement("div",null,o.a.createElement("img",{src:N.a,alt:"me"})),o.a.createElement("div",{className:I.a.AboutMe_Title_wording},o.a.createElement("h1",null,"Hi, I'm Dan Goodfellow."),o.a.createElement("p",null," I am a self taught Junior Web Developer.I have decided to change career after 13 years in working in Hospitality. "),o.a.createElement("p",null,"I have found a love for all things development and love finding and fixing problems aswell as designing websites/ apps from start to finish. "))),o.a.createElement("div",{className:I.a.AboutMe_Info},o.a.createElement("h2",null,"Me."),o.a.createElement("p",null,"After 13 years in the Hospitality industry, I decided to have a change in career and from there begun my journey into Web Development. I have completed courses with Udemy which have given me the understanding into Web Development. I bring with me a logical thinking mind that allows me to see problems and think of inventive ways around them. ")),o.a.createElement("div",{className:I.a.AboutMe_Lang})))},k=t(24),j=t.n(k);var H=function(e){var a="https://"+e.link,t=e.gitHub;return o.a.createElement("div",{className:j.a.Card},o.a.createElement("h1",null,e.name),o.a.createElement("h4",null,"Project Info"),o.a.createElement("p",null,e.info),o.a.createElement("h4",null,"Languages used"),o.a.createElement("p",null,e.lang),o.a.createElement("h4",null,"Website  & GitHub Link's"),o.a.createElement("p",null,o.a.createElement("a",{href:t},e.gitHub)),o.a.createElement("p",null,o.a.createElement("a",{href:a},e.link)))},x=[{name:"Wedding",info:"I created a website for our wedding",lang:"HTML, CSS and JavaScript",gitHub:"https://github.com/dangoodfellow86/Wedding"},{name:"St Marys Convent",info:"This was a free website that i created for a local care home to assist in the online presance",lang:"HTML and CSS",link:"www.stmarysebchester.com",gitHub:"https://github.com/dangoodfellow86/StMarysConvent"},{name:"CV",info:"This was my portfolio website that i orginally created with HTML and CSS but have since upgrade to Reactjs",lang:"Reactjs with react-router-dom",link:"www.danielgoodfellow.co.uk",gitHub:"https://github.com/dangoodfellow86/CV"}],C=t(15),P=t.n(C);var L=function(){return o.a.createElement("div",{className:P.a.ProjectsMain},o.a.createElement(w,{name:"Projects"}),o.a.createElement("div",{className:P.a.Projects},x.map((function(e){return o.a.createElement(H,{name:e.name,info:e.info,lang:e.lang,link:e.link,gitHub:e.gitHub})}))))},T=t(25),B=t.n(T);var S=function(){return o.a.createElement("div",{className:B.a.CVMain},o.a.createElement("h1",null,"I'm Dan."),o.a.createElement("h2",null,"I am a Junior Web Developer."))};var W=function(){return o.a.createElement("div",{className:h.a.Layout},o.a.createElement("img",{className:h.a.LayoutImg,src:_.a,alt:"background"}),o.a.createElement(v,null),o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/cvNew/About-Me",exact:!0,component:y}),o.a.createElement(i.a,{path:"/cvNew/Projects",exact:!0,component:L}),o.a.createElement(i.a,{path:"/cvNew/",exact:!0,component:S})))},D=t(26),V=t.n(D);var J=function(){return o.a.createElement("div",{className:V.a.App},o.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(c.a,null,o.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[27,1,2]]]);
//# sourceMappingURL=main.7e1a1e40.chunk.js.map