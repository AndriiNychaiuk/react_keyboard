(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),r=n(2),s=n(3),i=n(5),o=n(4),u=n(1),l=n.n(u),b=n(0),h=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={phrase:"Nothing was pressed yet"},e.callback=function(t){e.setState({phrase:"The last pressed key is ".concat(t.key)})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.callback)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.callback)}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("p",{children:this.state.phrase})})}}]),n}(l.a.Component),p=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isVisible:!0},e.switcher=function(){e.setState((function(e){return{isVisible:!e.isVisible}}))},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[this.state.isVisible&&Object(b.jsx)(h,{}),Object(b.jsx)("button",{type:"button",onClick:this.switcher,children:"Switch"})]})}}]),n}(l.a.Component);n(13);a.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ac8a8224.chunk.js.map