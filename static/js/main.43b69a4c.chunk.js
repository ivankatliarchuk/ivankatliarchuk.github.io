(this["webpackJsonpivankatliarchuk.github.io"]=this["webpackJsonpivankatliarchuk.github.io"]||[]).push([[0],{23:function(e,a,t){e.exports=t(49)},44:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(17),l=t.n(i),r=t(18),o=t(19),s=t(22),u=t(21),m=t(20),h=t.n(m),d=(t(44),t(3)),v=t(4);function p(){return c.a.createElement("div",{class:"social-container"},c.a.createElement("h3",{className:"heading"},"Created by Anjali Sharma"),c.a.createElement("a",{href:"https://www.linkedin.com/in/ivankatliarchuk/",className:"linkedin social"},c.a.createElement(d.a,{icon:v.b,size:"2x"})),c.a.createElement("a",{href:"https://github.com/ivankatliarchuk",className:"github social"},c.a.createElement(d.a,{icon:v.a,size:"2x"})),c.a.createElement("a",{href:"https://medium.com/@ivan.katliarchuk",className:"medium social"},c.a.createElement(d.a,{icon:v.c,size:"2x"})),c.a.createElement("a",{href:"https://www.youtube.com/channel/UCukj_3OqMoCVHCSFLAX0a1A",className:"youtube social"},c.a.createElement(d.a,{icon:["youtube"],size:"2x"})))}var E=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={advice:""},e.fetchAdvice=function(){h.a.get("https://api.adviceslip.com/advice").then((function(a){var t=a.data.slip.advice;e.setState({advice:t})})).catch((function(e){console.log(e)}))},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchAdvice()}},{key:"render",value:function(){var e=this.state.advice;return c.a.createElement("div",null,c.a.createElement("div",{className:"app"},c.a.createElement("h1",null,"Weclome to Ivan Ka"),c.a.createElement("h3",null,"Your personal advisor to keep you motivated and calm amidst chaos"),c.a.createElement("div",{className:"card"},c.a.createElement("h2",null,e),c.a.createElement("button",{className:"buton",onClick:this.fetchAdvice},c.a.createElement("span",null,c.a.createElement("h4",null,"Unlock today's advices"))))),c.a.createElement("footer",null,c.a.createElement(p,null)))}}]),t}(c.a.Component);l.a.render(c.a.createElement(E,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.43b69a4c.chunk.js.map