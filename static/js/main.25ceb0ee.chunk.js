(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),o=n(8),r=n.n(o),i=(n(15),n(10)),u=n(3),s=n(19),l=n(2),_=n.n(l),b=n(0),m=function(t){var e=t.onSubmit,n=Object(c.useState)(""),a=Object(u.a)(n,2),o=a[0],r=a[1],i=Object(c.useState)(""),s=Object(u.a)(i,2),l=s[0],m=s[1],f=function(t){var e=t.target,n=e.name,c=e.value;"name"===n?r(c):m(c),console.log(n)};return Object(b.jsxs)("form",{className:_.a.contact__form,onSubmit:function(t){t.preventDefault(),e({name:o,number:l})},children:[Object(b.jsx)("h3",{className:_.a.contact__label,children:"Name"}),Object(b.jsx)("input",{className:_.a.contact__input,onChange:f,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:o}),Object(b.jsx)("h3",{className:_.a.contact__label,children:"Number"}),Object(b.jsx)("input",{className:_.a.contact__input,onChange:f,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l}),Object(b.jsx)("button",{className:_.a.contact__btn,type:"submit",children:"Add contact"})]})},f=n(9),j=n.n(f),d=function(t){var e=t.name,n=t.number,c=t.id,a=t.onDeleteContact;return Object(b.jsxs)("li",{className:j.a.contact__item,children:[e,":",n,Object(b.jsx)("button",{type:"button",className:"TodoList__btn",onClick:function(){return a(c)},children:"Delete"})]})},h=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(b.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(b.jsx)(d,{id:e,name:c,number:a,onDeleteContact:n},e)}))})},O=n(6),p=n.n(O),x=function(t){var e=t.value,n=t.onChange;return Object(b.jsxs)("label",{className:p.a.filter__label,children:[Object(b.jsx)("h3",{className:p.a.filter__name,children:"Find contacts by name"}),Object(b.jsx)("input",{className:p.a.filter__input,type:"text",value:e,onChange:n})]})},v=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),r=Object(u.a)(o,2),l=r[0],_=r[1];Object(c.useEffect)((function(){var t=window.localStorage.getItem("contacts"),e=JSON.parse(t);e&&a((function(t){return e}))}),[]),Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var f=function(){var t=l.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(m,{onSubmit:function(t){var e=function(t){var e=t.name,n=t.number;return{id:Object(s.a)(),name:e,number:n}}(t);if(n.map((function(t){return t.name})).includes(t.name))alert("".concat(t.name," is already in contacts"));else{var c=[].concat(Object(i.a)(n),[e]);a((function(t){return c}))}}}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(x,{value:l,onChange:function(t){_(t.target.value)}}),Object(b.jsx)(h,{contacts:f,onDeleteContact:function(t){a((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),o(t),r(t)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),g()},2:function(t,e,n){t.exports={contact__form:"contactForm_contact__form__1-BLk",contact__label:"contactForm_contact__label__2PC7x",contact__input:"contactForm_contact__input__zVnh2",contact__btn:"contactForm_contact__btn__C4kIw"}},6:function(t,e,n){t.exports={filter__label:"filter_filter__label__326f8",filter__input:"filter_filter__input__1dwAe",filter__name:"filter_filter__name__14qmI"}},9:function(t,e,n){t.exports={contact__item:"contactItem_contact__item__3LQ13"}}},[[17,1,2]]]);
//# sourceMappingURL=main.25ceb0ee.chunk.js.map