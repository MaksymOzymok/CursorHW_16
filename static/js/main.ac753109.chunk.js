(this.webpackJsonpcontacts=this.webpackJsonpcontacts||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t(21)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(7),o=t.n(r),i=(t(14),t(5)),l=t(1),s=t(2),m=t(3),u=t(4),f=(t(15),t(16),function(){return c.a.createElement("h2",{className:"header"},"Contacts")}),h=(t(17),function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=n.call.apply(n,[this].concat(c))).state={term:""},e.onSearchChange=function(n){var t=n.target.value;e.setState({term:t}),e.props.onSearhChange(t)},e}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("input",{className:"search-panel",type:"text",placeholder:"search",onChange:this.onSearchChange})}}]),t}(a.Component)),k=t(8),p=(t(18),t(19),function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=n.call.apply(n,[this].concat(c))).state={active:!1,gender:e.props.gender},e.openSubMenu=function(){e.setState((function(e){return{active:!e.active}}))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,n=e.firstName,t=void 0===n?"a":n,a=e.lastName,r=void 0===a?"b":a,o=e.phone,i=void 0===o?"v":o,l=e.gender,s=void 0===l?"-":l,m="contact-sub-menu";return this.state.active&&(m+="active"),c.a.createElement("ul",{className:"contact"},c.a.createElement("li",{className:"contact-item",onClick:this.openSubMenu},r,c.a.createElement("i",{className:{male:"fas fa-mars",female:"fas fa-venus"}[this.state.gender]})),c.a.createElement("ul",{className:m},c.a.createElement("li",{className:"contact-sub-item"},"name: ",t),c.a.createElement("li",{className:"contact-sub-item"}," phone: ",i),c.a.createElement("li",{className:"contact-sub-item"},"gender: ",s)))}}]),t}(a.Component)),d=function(e){var n=e.contacts.map((function(e){var n=e.id,t=Object(k.a)(e,["id"]);return c.a.createElement("li",{key:n},c.a.createElement(p,t))}));return c.a.createElement("ul",{className:"contacts"},n)},b=(t(20),function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,n=e.onClickCheckboxMan,t=e.onClickCheckboxWoman,a=e.onClickCheckboxUnknown;return c.a.createElement("div",{className:"filter-items"},c.a.createElement("div",{className:"filter-item"},c.a.createElement("input",{type:"checkbox",defaultChecked:!0,onClick:n}),c.a.createElement("span",null,"Man")),c.a.createElement("div",{className:"filter-item"},c.a.createElement("input",{type:"checkbox",defaultChecked:!0,onClick:t}),c.a.createElement("span",null,"Woman")),c.a.createElement("div",{className:"filter-item"},c.a.createElement("input",{type:"checkbox",defaultChecked:!0,onClick:a}),c.a.createElement("span",null,"Unknown")))}}]),t}(a.Component)),C=function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=n.call.apply(n,[this].concat(c))).state={contacts:[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u043a\u0438\u0439",phone:"+380956319521",gender:"male",id:1},{firstName:"\u0420\u043e\u0431\u0438\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u043a\u0430\u044f",phone:"+380931460123",gender:"female",id:2},{firstName:"\u0410\u043d\u043e\u043c\u043d\u044b\u0439",lastName:"\u0410\u043d\u043e\u043d\u0438\u043c\u0443\u0441",phone:"+380666666666",id:3},{firstName:"\u041b\u0438\u043b\u0438\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female",id:4},{firstName:"\u041c\u0430\u0440\u0448\u044d\u043d",lastName:"\u042d\u0440\u0438\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male",id:5},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u044d\u0441",phone:"+380956319521",gender:"male",id:6}],term:"",filter:{man:!0,woman:!0,unknown:!0}},e.search=function(e,n){if(""===n)return e;var t=e.filter((function(e){return e.lastName.indexOf(n)>-1})),a=e.filter((function(e){return e.firstName.indexOf(n)>-1})),c=e.filter((function(e){return e.phone.indexOf(n)>-1}));return[].concat(Object(i.a)(a),Object(i.a)(t),Object(i.a)(c))},e.onSearchChange=function(n){e.setState({term:n})},e.onClickCheckboxMan=function(){e.setState((function(e){return{filter:{man:!e.filter.man,woman:e.filter.woman,unknown:e.filter.unknown}}}))},e.onClickCheckboxWoman=function(){e.setState((function(e){return{filter:{man:e.filter.man,woman:!e.filter.woman,unknown:e.filter.unknown}}}))},e.onClickCheckboxUnknown=function(){e.setState((function(e){return{filter:{man:e.filter.man,woman:e.filter.woman,unknown:!e.filter.unknown}}}))},e.filter=function(e,n){var t=[],a=[],c=[];return n.man&&(console.log("mans"),t=e.filter((function(e){return"male"===e.gender}))),n.woman&&(console.log("womans"),a=e.filter((function(e){return"female"===e.gender}))),n.unknown&&(console.log("unknowns"),c=e.filter((function(e){return!Object.keys(e).includes("gender")}))),[].concat(Object(i.a)(t),Object(i.a)(a),Object(i.a)(c))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state,n=e.contacts,t=e.term,a=e.filter,r=this.filter(this.search(n,t),a);return c.a.createElement("div",{className:"contacts-app"},c.a.createElement(f,null),c.a.createElement(h,{onSearhChange:this.onSearchChange}),c.a.createElement(b,{onClickCheckboxMan:this.onClickCheckboxMan,onClickCheckboxWoman:this.onClickCheckboxWoman,onClickCheckboxUnknown:this.onClickCheckboxUnknown}),c.a.createElement(d,{contacts:r}))}}]),t}(a.Component);o.a.render(c.a.createElement(C,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.ac753109.chunk.js.map