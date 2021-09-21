(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={contact__item:"contactItem_contact__item__3LQ13"}},2:function(t,e,n){t.exports={contact__form:"contactForm_contact__form__1-BLk",contact__label:"contactForm_contact__label__2PC7x",contact__input:"contactForm_contact__input__zVnh2",contact__btn:"contactForm_contact__btn__C4kIw"}},21:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(9),r=n.n(o),i=(n(21),n(15)),s=n(8),u=n(25),l=n(10),_=n(5),b=n(11),m=n(12),f=n(16),j=n(14),h=n(2),d=n.n(h),O=n(0),p=function(t){Object(f.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(_.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(Object(l.a)({},t.state)),t.setState({message:""})},t}return Object(m.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("form",{className:d.a.contact__form,onSubmit:this.handleSubmit,children:[Object(O.jsx)("h3",{className:d.a.contact__label,children:"Name"}),Object(O.jsx)("input",{className:d.a.contact__input,onChange:this.handleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name}),Object(O.jsx)("h3",{className:d.a.contact__label,children:"Number"}),Object(O.jsx)("input",{className:d.a.contact__input,onChange:this.handleChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number}),Object(O.jsx)("button",{className:d.a.contact__btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=p,x=n(13),g=n.n(x),C=function(t){var e=t.name,n=t.number,a=t.id,c=t.onDeleteContact;return Object(O.jsxs)("li",{className:g.a.contact__item,children:[e,":",n,Object(O.jsx)("button",{type:"button",className:"TodoList__btn",onClick:function(){return c(a)},children:"Delete"})]})},N=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(O.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(O.jsx)(C,{id:e,name:a,number:c,onDeleteContact:n},e)}))})},S=n(6),w=n.n(S),y=function(t){var e=t.value,n=t.onChange;return Object(O.jsxs)("label",{className:w.a.filter__label,children:[Object(O.jsx)("h3",{className:w.a.filter__name,children:"Find contacts by name"}),Object(O.jsx)("input",{className:w.a.filter__input,type:"text",value:e,onChange:n})]})},k=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(""),r=Object(s.a)(o,2),l=r[0],_=r[1];Object(a.useEffect)((function(){var t=window.localStorage.getItem("contacts"),e=JSON.parse(t);e&&c((function(t){return e}))}),[]),Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var b=function(){var t=l.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(v,{onSubmit:function(t){var e=function(t){var e=t.name,n=t.number;return{id:Object(u.a)(),name:e,number:n}}(t);if(n.map((function(t){return t.name})).includes(t.name))alert("".concat(t.name," is already in contacts"));else{var a=[].concat(Object(i.a)(n),[e]);c((function(t){return a}))}}}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(y,{value:l,onChange:function(t){_(t.target.value)}}),Object(O.jsx)(N,{contacts:b,onDeleteContact:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),F()},6:function(t,e,n){t.exports={filter__label:"filter_filter__label__326f8",filter__input:"filter_filter__input__1dwAe",filter__name:"filter_filter__name__14qmI"}}},[[23,1,2]]]);
//# sourceMappingURL=main.f160f56c.chunk.js.map