(this["webpackJsonpreact-styling"]=this["webpackJsonpreact-styling"]||[]).push([[0],{11:function(n,t,e){n.exports={button:"Button_button__2lgkF"}},21:function(n,t,e){},22:function(n,t,e){},28:function(n,t,e){},29:function(n,t,e){},30:function(n,t,e){},31:function(n,t,e){"use strict";e.r(t);var i,c=e(0),o=e(9),r=e.n(o),l=(e(21),e(16)),a=e(3),u=e(10),d=(e(22),e(12)),s=e(11),b=e.n(s),j=e(1),f=function(n){return Object(j.jsx)("button",{type:n.type,className:b.a.button,onClick:n.onClick,children:n.children})},h=d.a.div(i||(i=Object(u.a)(["\n  margin: 0.5rem 0;\n\n  & label {\n    font-weight: bold;\n    display: block;\n    margin-bottom: 0.5rem;\n    color: ",";\n  }\n\n  & input {\n    display: block;\n    width: 100%;\n    border: 1px solid ",";\n    font: inherit;\n    line-height: 1.5rem;\n    padding: 0 0.25rem;\n    background: ",";\n  }\n\n  & input:focus {\n    outline: none;\n    background: #fad0ec;\n    border-color: #8b005d;\n  }\n"])),(function(n){return n.invalid?"red":"#black"}),(function(n){return n.invalid?"red":"#ccc"}),(function(n){return n.invalid?"#ffd7d7":"transparent"})),m=function(n){var t=Object(c.useState)(""),e=Object(a.a)(t,2),i=e[0],o=e[1],r=Object(c.useState)(!0),l=Object(a.a)(r,2),u=l[0],d=l[1];return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==i.trim().length?(n.onAddGoal(i),o("")):d(!1)},children:[Object(j.jsxs)(h,{invalid:!u,children:[Object(j.jsx)("label",{children:"Course Goal"}),Object(j.jsx)("input",{type:"text",value:i,onChange:function(n){n.target.value.trim().length>0&&d(!0),o(n.target.value)}})]}),Object(j.jsx)(f,{type:"submit",children:"Add Goal"})]})},g=(e(28),e(29),e(30),function(n){return Object(j.jsx)("li",{className:"goal-item",onClick:function(){n.onDelete(n.id)},children:n.children})}),x=function(n){return Object(j.jsx)("ul",{className:"goal-list",children:n.items.map((function(t){return Object(j.jsx)(g,{id:t.id,onDelete:n.onDeleteItem,children:t.text},t.id)}))})};var O=function(){var n=Object(c.useState)([{text:"Do all exercises!",id:"g1"},{text:"Finish the course!",id:"g2"}]),t=Object(a.a)(n,2),e=t[0],i=t[1],o=Object(j.jsx)("p",{children:"No goals found . Maybe add one?"});return e.length>0&&(o=Object(j.jsx)(x,{items:e,onDeleteItem:function(n){i((function(t){return t.filter((function(t){return t.id!==n}))}))}})),Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("section",{id:"goal-form",children:Object(j.jsx)(m,{onAddGoal:function(n){console.log("enteredText",n),i((function(t){var e=Object(l.a)(t);return e.unshift({text:n,id:Math.random().toString()}),e}))}})}),Object(j.jsx)("section",{id:"goals",children:o})]})};r.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.2f5d9ca2.chunk.js.map