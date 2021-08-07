(this["webpackJsonpfood-order"]=this["webpackJsonpfood-order"]||[]).push([[0],{84:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var r=c(0),s=c(1),n=c.n(s),a=c(20),l=c.n(a),o=c(4),i=c(5),d=c(22),j=(c(56),c(24)),b=c(6),u=c(2),m=c(30),h=(c(61),Object(m.b)({name:"cart",initialState:JSON.parse(localStorage.getItem("cartItems")||"[]"),reducers:{addToCart:function(e,t){var c=e.find((function(e){return e._id===t.payload._id}));if(console.log(e),c)return e.map((function(e){return e._id===t.payload._id?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):e}));e.push(Object(u.a)(Object(u.a)({},t.payload),{},{quantity:1}))},incrementItem:function(e,t){return e.map((function(e){return e._id===t.payload._id?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):e}))},decrementItem:function(e,t){return e.map((function(e){return e._id===t.payload._id?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity-1}):e}))},removeItem:function(e,t){return e.filter((function(e){return e._id!==t.payload}))},clearCart:function(){return[]}}})),x=h.actions,p=x.addToCart,O=x.incrementItem,f=x.decrementItem,g=x.removeItem,v=x.clearCart,y=h.reducer;var N=function(e){var t=e.count,c=e._id,s=Object(j.b)();return Object(r.jsx)("div",{children:Object(r.jsx)("span",{onClick:t<2?function(){!function(e){var t=JSON.parse(localStorage.getItem("cartItems")||"[]"),c=[];t.map((function(t){return t._id!==e&&c.push(t),c})),localStorage.setItem("cartItems",JSON.stringify(c)),console.log(c)}(c),s(g(c))}:void 0,children:Object(r.jsx)(b.g,{})})})},w=function(e){return Object(r.jsx)("div",{className:"mb-16",children:Object(r.jsxs)("div",{className:"flex items-center",children:[Object(r.jsx)("button",{className:"bg-yellow-600 text-white \r font-bold py-2 px-2 rounded mt-5 hover:bg-yellow-700",onClick:e.onIncrement,children:Object(r.jsx)(b.d,{})}),Object(r.jsx)("button",{className:"bg-gray-200 text-yellow-700 \r font-bold py-1 px-3 rounded mt-5",children:Object(r.jsx)("span",{className:k(),children:e.dishCount})}),Object(r.jsx)("button",{className:" bg-yellow-600 text-white\n    font-bold  rounded mt-5 hover:bg-yellow-700 ".concat(e.dishCount>1?" py-2 px-2 ":"py-2 px-2"),disabled:0===e.dishCount&&!0,onClick:e.onDecrement,children:e.dishCount>1?Object(r.jsx)(b.b,{}):Object(r.jsx)(N,{count:e.dishCount,_id:e.id})})]})})};function k(){return""}var S=c(7),C=c.n(S),I=c(21),q=c(48),P=c(11),F=c.n(P);F.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||d.b.error("An unexpected error occured."),Promise.reject(e)}));var A={get:F.a.get,post:F.a.post,put:F.a.put,delete:F.a.delete};var E,T="https://e-foo.herokuapp.com/login";function _(e,t){return D.apply(this,arguments)}function D(){return(D=Object(I.a)(C.a.mark((function e(t,c){var r,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.post(T,{email:t,password:c});case 2:r=e.sent,s=r.data,localStorage.setItem("token",s);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){localStorage.removeItem("token"),localStorage.clear()}function B(){try{var e=localStorage.getItem("token");return Object(q.a)(e)}catch(t){return null}}E=localStorage.getItem("token"),F.a.defaults.headers.common["x-auth-token"]=E;var L=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.products})),c=t.reduce((function(e,t){return e+t.price*t.quantity}),0),s=B();return Object(r.jsx)("div",{className:"",children:Object(r.jsx)(n.a.Fragment,{children:Object(r.jsxs)("div",{children:[t.map((function(t){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"mt-8 grid grid-cols-2 md:gap-8 gap-2",children:[Object(r.jsx)("div",{className:"bg-white rounded-md overflow-hidden shadow-md hover:shadow-2xl max-w-xs cursor-pointer text-center pb-5",children:Object(r.jsxs)("div",{className:"border-t border-1 border-gray-100",children:[Object(r.jsx)("img",{src:t.selectedFile,alt:"image",className:"w-full h-32 sm:h-48 object-cover"}),Object(r.jsxs)("div",{className:"m-4 text-center pt-10",children:[Object(r.jsx)("span",{className:"font-bold",children:t.title}),Object(r.jsxs)("span",{className:"block text-red-500",children:["$",t.price]})]})]})}),Object(r.jsxs)("div",{className:"flex-col self-end border-b mr-5 text-sm md:text-lg",children:[Object(r.jsx)(w,{id:t._id,onIncrement:function(){e(O(t))},onDecrement:function(){e(f(t))},dishCount:t.quantity}),Object(r.jsxs)("p",{className:"font-semibold",children:["Subtotal: ",t.quantity," x ",t.price," ="," ",Object(r.jsxs)("span",{className:"text-red-700 font-semibold",children:[" ","$",parseFloat(t.quantity*t.price).toFixed(2)]})]})]})]})},t._id)})),t.length>0?Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"min-w-full  md:py-4 py-2 md:my-2 pl-2 mt-5 text-xl",children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"text-black font-bold",children:"Total:"})," ",Object(r.jsxs)("span",{className:"text-red-700 font-semibold",children:["$",c.toFixed(2)]})]}),Object(r.jsx)("hr",{})]}),Object(r.jsxs)("div",{className:"flex justify-between mt-10 mb-16",children:[Object(r.jsx)("div",{className:" ml-4",children:Object(r.jsx)(o.b,{to:s?"/summary":"/login",children:Object(r.jsx)("button",{className:"bg-yellow-500 md:px-5 px-2 py-2 md:text-2xl hover:bg-yellow-600 rounded-xl text-white",onClick:function(){localStorage.setItem("cartItems",JSON.stringify(t))},children:"Place Order"})})}),Object(r.jsx)("div",{className:"md:mr-20 mr-8",children:Object(r.jsx)("button",{className:"bg-yellow-500 md:px-7 px-3 py-2 md:text-2xl hover:bg-yellow-600 rounded-xl text-white",onClick:function(){localStorage.removeItem("cartItems"),e(v())},children:"Clear Cart"})})]})]}):Object(r.jsx)("div",{className:"flex w-full h-screen justify-center",children:Object(r.jsxs)("div",{className:"text-xl text-gray-400 self-center",children:[" ",Object(r.jsx)("h3",{children:"Your Cart is Empty!"})]})})]})})})},$=c(13),Q=function(e){var t=Object(s.useState)({}),c=Object($.a)(t,2),n=c[0],a=c[1],l=e.match.params.id;return Object(s.useEffect)((function(){F.a.get("https://e-foo.herokuapp.com/getOneProduct",{params:{id:l}}).then((function(e){console.log(e),a(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(r.jsx)("div",{className:"px-3 min-h-screen w-full",children:Object(r.jsx)("div",{className:"lg:flex ",children:Object(r.jsxs)("div",{className:"md:flex bg-gray-100  border-yellow-500 rounded-md overflow-hidden cursor-pointer mt-10 md:max-w-4xl",children:[Object(r.jsx)("div",{className:"md:w-full min-h-full",children:Object(r.jsx)("img",{src:n.selectedFile,className:"min-w-full  sm:h-48 object-cover md:min-h-full"})}),Object(r.jsxs)("div",{className:"m-4 text-center pt-10 w-full",children:[Object(r.jsx)("span",{className:"font-bold",children:n.title}),Object(r.jsxs)("span",{className:"block text-red-500 font-bold",children:["$",n.price]}),Object(r.jsx)("p",{children:n.description})]})]})})})},z=c(16),H=c(23),R=c(18),Y=c(17),M=c(10),K=Object(M.c)({products:y}),U=(Object(M.c)({entities:K}),Object(m.a)({reducer:{products:y}})),W=U,G=function(e){Object(R.a)(c,e);var t=Object(Y.a)(c);function c(){return Object(z.a)(this,c),t.apply(this,arguments)}return Object(H.a)(c,[{key:"render",value:function(){var e=this;return Object(r.jsx)("button",{className:"bg-yellow-600 text-white \r font-bold py-2 px-4 rounded mt-5 hover:bg-yellow-700",onClick:function(){W.dispatch(p(e.props.onOrder)),d.b.success("".concat(e.props.onOrder.title," added to cart"),{position:"top-center",autoClose:1500,hideProgressBar:!0})},children:this.props.type})}}]),c}(s.Component),V=function(e){Object(R.a)(c,e);var t=Object(Y.a)(c);function c(){return Object(z.a)(this,c),t.apply(this,arguments)}return Object(H.a)(c,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"mt-8 grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-8",children:this.props.data.map((function(e){return Object(r.jsxs)("div",{className:"bg-white rounded-md overflow-hidden shadow-md hover:shadow-2xl max-w-xs cursor-pointer text-center pb-5",children:[Object(r.jsx)(o.b,{to:"dishes/".concat(e._id),children:Object(r.jsxs)("div",{className:"border-b border-1 border-gray-100",children:[Object(r.jsx)("img",{src:e.selectedFile,alt:"image",className:"w-full h-32 sm:h-48 object-cover"}),Object(r.jsxs)("div",{className:"m-4 text-center pt-10 ",children:[Object(r.jsx)("span",{className:"font-bold",children:e.title}),Object(r.jsxs)("span",{className:"block text-red-500",children:["$",e.price]})]})]})},e._id),Object(r.jsx)(G,{onOrder:e,type:"Order Now"})]},e._id)}))})}}]),c}(s.Component),X=function(){var e=Object(s.useState)([]),t=Object($.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),l=Object($.a)(a,2),o=l[0],i=l[1];return Object(s.useEffect)((function(){i(!0),F.a.get("https://e-foo.herokuapp.com/allproducts").then((function(e){n(e.data),i(!1)})).catch((function(e){console.log(e)}))}),[]),Object(r.jsx)("div",{children:Object(r.jsxs)("main",{className:"bg-gray-100 px-16 py-6 min-h-screen",children:[Object(r.jsx)("header",{children:Object(r.jsx)("h2",{className:"text-gray-700 text-6xl font-semibold",children:"Menu"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{className:"font-bold mt-12 pb-2 border-b border-gray-200",children:"Our Menu"}),o?Object(r.jsx)("div",{className:"flex place-content-center mt-80 animate-spin",children:Object(r.jsx)(b.f,{className:"animate-spin text-5xl text-yellow-600"})}):Object(r.jsx)(V,{data:c})]})]})})},Z=c(9),ee=c.n(Z),te=c(27),ce=c(49),re=c(31),se=function(e){var t=e.name,c=e.label,s=e.error,n=e.focus,a=Object(re.a)(e,["name","label","error","focus"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:t,className:"form-label",children:c}),Object(r.jsx)("input",Object(u.a)(Object(u.a)({},a),{},{name:t,autoFocus:n,className:"form-input mt-1 block md:w-96 w-full mb-5 md:pl-10 h-12  p-5  rounded-md font-semibold tracking-widest border border-yellow-500 text-2xl",id:t,"aria-describedby":"emailHelp"})),s&&Object(r.jsx)("div",{className:"bg-red-200 relative text-red-500 py-3 px-3 rounded-lg mb-5",children:s})]})},ne=function(e){Object(R.a)(c,e);var t=Object(Y.a)(c);function c(){var e;Object(z.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={data:{},errors:{}},e.validate=function(){var t=ee.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var c,r={},s=Object(ce.a)(t.details);try{for(s.s();!(c=s.n()).done;){var n=c.value;r[n.path[0]]=n.message}}catch(a){s.e(a)}finally{s.f()}return r},e.valideProperty=function(t){var c=t.name,r=t.value,s=Object(te.a)({},c,r),n=Object(te.a)({},c,e.schema[c]),a=ee.a.validate(s,n).error;return a?a.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var c=e.validate();e.setState({errors:c||{}}),c||e.doSubmit()},e.handleChange=function(t){var c=t.currentTarget,r=Object(u.a)({},e.state.errors),s=e.valideProperty(c);s?r[c.name]=s:delete r[c.name];var n=Object(u.a)({},e.state.data);n[c.name]=c.value,e.setState({data:n,errors:r})},e.renderButton=function(t){return Object(r.jsx)("button",{disabled:e.validate(),onClick:e.handleSubmit,className:"px-8 py-3 bg-blue-600 text-blue-50 md:w-96 w-full shadow-sm hover:shadow-md rounded-md",children:t})},e.renderInput=function(t,c){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",n=e.state,a=n.data,l=n.errors;return Object(r.jsx)(se,{type:s,focus:!0,name:t,value:a[t],label:c,onChange:e.handleChange,error:l[t]})},e}return c}(s.Component),ae=function(e){Object(R.a)(c,e);var t=Object(Y.a)(c);function c(){var e;Object(z.a)(this,c);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={data:{email:"",password:""},errors:{},loading:!1},e.schema={email:ee.a.string().required().label("Username"),password:ee.a.string().required().label("Password")},e.doSubmit=Object(I.a)(C.a.mark((function t(){var c,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({loading:!0}),t.next=4,_(e.state.data.email,e.state.data.password);case 4:t.sent,c=e.props.location.state,window.location.href=c?c.from.pathname:"/cart",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&(Object(u.a)({},e.state.errors),r=t.t0.response.data,e.setState({errors:r}));case 12:e.setState({loading:!1});case 13:case"end":return t.stop()}}),t,null,[[0,9]])}))),e}return Object(H.a)(c,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"mt-20 pt-10 min-h-screen flex self-center justify-center",children:Object(r.jsxs)("form",{children:[Object(r.jsx)("h1",{className:"font-bold mb-5 text-yellow-800 text-2xl",children:"Login Here To Place Your Order"}),this.state.errors.msg&&Object(r.jsx)("div",{className:"bg-red-200 text-red-500 p-3",children:this.state.errors.msg}),this.renderInput("email","Email"),this.renderInput("password","Password","password"),this.state.loading?Object(r.jsx)(b.f,{className:"animate-spin text-5xl ml-40 mt-20 text-yellow-400"}):this.renderButton("Login")]})})}}]),c}(ne),le=function(){var e=Object(s.useState)(!1),t=Object($.a)(e,2),c=t[0],n=t[1],a=Object(j.c)((function(e){return e.products})),l=B();return Object(r.jsxs)("nav",{className:"flex bg-gray-800 p-1 items-center flex-wrap justify-between  w-full z-10 top-0 sticky border-b-4 border-yellow-500",children:[Object(r.jsx)("div",{className:" items-center flex-shrink-0 text-white mr-6 hidden",children:Object(r.jsx)(o.c,{className:"text-red-700 hover:text-yellow-600 no-underline hover:no-underline ",to:"/",children:Object(r.jsx)("span",{className:"text-2xl pl-2 font-semibold",children:Object(r.jsx)(b.c,{className:"bg-white rounded-full p-2 text-6xl"})})})}),!c&&Object(r.jsx)("div",{className:"lg:hidden text-white",children:Object(r.jsxs)(o.c,{to:"/cart",className:"focus:no-underline",children:[a.length,Object(r.jsx)(b.e,{color:"white",size:"25"})]})}),Object(r.jsx)("div",{className:"  text-white mr-6 lg:hidden",children:Object(r.jsx)(o.c,{className:"text-red-700 hover:text-yellow-600 no-underline hover:no-underline ",to:"/",children:Object(r.jsx)("span",{className:"text-2xl pl-2 font-semibold",children:Object(r.jsx)(b.c,{className:"bg-white rounded-full p-1 text-5xl mb-3"})})})}),Object(r.jsx)("div",{className:"lg:hidden block",children:Object(r.jsx)("button",{className:"flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 ",onClick:function(){n(!c)},children:Object(r.jsx)(b.a,{})})}),Object(r.jsx)("div",{className:c?"w-full flex-grow lg:flex lg:items-center lg:w-auto  pt-6 lg:pt-0":"hidden w-full flex-grow lg:flex lg:items-center lg:w-auto  pt-6 lg:pt-0",children:Object(r.jsxs)("ul",{className:"list-reset lg:flex justify-end flex-1 items-center text-xl",children:[Object(r.jsx)("li",{className:"mr-6",children:Object(r.jsx)(o.c,{to:"/",className:"inline-block py-2 px-2 text-white no-underline hover:no-underline hover:text-yellow-500",children:"Menu"})}),!l&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("li",{className:"mr-6",children:Object(r.jsx)(o.c,{className:"inline-block py-2 px-2 text-white no-underline hover:no-underline hover:text-blue-300",to:"/login",children:"Login"})}),Object(r.jsx)("li",{className:"mr-6",children:Object(r.jsx)(o.c,{className:"inline-block py-2 px-2 text-white no-underline hover:no-underline hover:text-blue-300",to:"/signup",children:"Signup"})})]}),l&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("li",{className:"mr-6",children:Object(r.jsx)(o.c,{className:"inline-block py-2 px-2 text-white no-underline hover:no-underline hover:text-blue-300",to:"/delete",children:l.name?l.name:l.email})}),Object(r.jsx)("li",{className:"mr-6",children:Object(r.jsx)(o.c,{className:"inline-block py-2 px-2 text-white no-underline hover:no-underline hover:text-blue-300",to:"/logout",children:"Logout"})})]}),l&&l.isAdmin&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("li",{className:"mr-6",children:Object(r.jsx)(o.c,{className:"inline-block py-2 px-2 text-white no-underline hover:no-underline hover:text-blue-300",to:"/dashboard",children:"Dashboard"})})}),Object(r.jsx)("li",{className:"mr-6",children:Object(r.jsxs)(o.c,{className:"inline-block py-2 px-2 text-white no-underline hover:no-underline hover:text-blue-300 text-2xl",to:"/cart",children:[a.length>0?a.length:"0",Object(r.jsx)(b.e,{})]})})]})})]})};function oe(e){return A.post("https://e-foo.herokuapp.com/register",{email:e.email,password:e.password,name:e.name})}var ie=function(e){Object(R.a)(c,e);var t=Object(Y.a)(c);function c(){var e;Object(z.a)(this,c);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={data:{email:"",password:"",name:""},errors:{},loading:!1},e.schema={email:ee.a.string().required().email().label("Email"),password:ee.a.string().required().min(5).label("Password"),name:ee.a.string().required().label("Name")},e.doSubmit=Object(I.a)(C.a.mark((function t(){var c,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({loading:!0}),t.next=4,oe(e.state.data);case 4:c=t.sent,localStorage.setItem("token",c.headers["x-auth-token"]),window.location="/login",e.setState({loading:!1}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&(Object(u.a)({},e.state.errors),r=t.t0.response.data,e.setState({errors:r}));case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),e}return Object(H.a)(c,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"mt-20 pt-10 min-h-screen flex self-center justify-center",children:Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(r.jsx)("h1",{className:"font-bold mb-5 text-yellow-800 text-2xl",children:"Register Here"}),this.renderInput("email","Email"),this.renderInput("name","Name"),this.renderInput("password","Password","password"),this.state.errors.msg,this.state.loading?Object(r.jsx)(b.f,{className:"animate-spin text-5xl ml-40 mt-20 text-yellow-400"}):this.renderButton("Register")]})})}}]),c}(ne);c(84);var de=function(){return Object(r.jsx)("div",{className:"w-full flex justify-center bg-gray-200 py-7 md:py-10 text-gray-500 positon-sticky",children:Object(r.jsx)("a",{href:"https://github.com/asadahmed01",className:"hover:text-gray-800",children:Object(r.jsxs)("p",{children:["\xa9 Assad Ahmed ",(new Date).getFullYear()]})})})};var je=function(){return J(),window.location="/",Object(r.jsxs)("div",{className:"min-h-screen text-center mt-40 text-3xl",children:[" ","Logging out ..."]})},be=function(e){return Object(r.jsx)("div",{className:"w-full m-auto grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3",children:e.orders.map((function(e){return Object(r.jsx)("div",{className:"card",children:Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("div",{className:"bg-transparent text-left",children:Object(r.jsx)("img",{src:e.selectedFile,alt:"dish image",className:"w-24 h-22"})}),Object(r.jsxs)("h5",{className:"card-title font-bold",children:["Title: ",e.title]}),Object(r.jsxs)("h6",{className:"card-subtitle mb-2 font-bold text-yellow-700",children:["Price: $",e.price]}),Object(r.jsxs)("p",{className:"font-bold",children:["Qty: ",e.quantity]})]})},e._id)}))})};var ue=function(){var e=Object(s.useState)({}),t=Object($.a)(e,2),c=t[0],n=t[1],a=B();Object(s.useEffect)((function(){l()}),[]);var l=function(){return F.a.post("https://e-foo.herokuapp.com/user",{id:a.id}).then((function(e){n(e.data)})).catch((function(e){console.log(e)}))},o=function(){var e;e=a.id,A.delete("https://e-foo.herokuapp.com/delete",{user:e}),J(),window.location="/signup"},i=c.address,d=c.email,j=c.name,b=c.orders;return Object(r.jsx)("div",{className:"min-h-screen text-center mt-20 container md:w-3/4",children:Object(r.jsxs)("div",{className:"accordion accordion-flush md:w-3/4",id:"accordionFlushExample",children:[Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"flush-personalInfo",children:Object(r.jsx)("button",{className:"accordion-button collapsed bg-gray-100 focus:border  focus:outline-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseTwo","aria-expanded":"false","aria-controls":"flush-collapseTwo",children:"Personal Info"})}),Object(r.jsx)("div",{id:"flush-collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"flush-personalInfo","data-bs-parent":"#accordionFlushExample",children:Object(r.jsxs)("div",{className:"accordion-body text-left",children:[c&&Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"text-2xl font-bold my-3",children:"Personal Info "}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"font-semibold text-xl",children:"Email:"})," ",d]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"font-semibold text-xl",children:"Name:"})," ",j]})]}),Object(r.jsx)("button",{className:"bg-red-300 py-1 px-2 mt-3 rounded-md font-semibold text-2xl shadow-md hover:bg-red-500 hover:text-white focus:outline-none ",onClick:function(){return window.confirm("Are you sure you want to DELETE your account permanently?")&&o()},children:"Delete Account"})]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"flush-headingOne",children:Object(r.jsx)("button",{className:"accordion-button collapsed bg-gray-100 focus:border  focus:outline-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne",children:"Address"})}),Object(r.jsx)("div",{id:"flush-collapseOne",className:"accordion-collapse collapse","aria-labelledby":"flush-headingOne","data-bs-parent":"#accordionFlushExample",children:Object(r.jsx)("div",{className:"accordion-body text-left",children:i&&Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"text-2xl font-bold my-3",children:"Address"}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"font-semibold text-xl",children:"Street:"})," ",i.street]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"font-semibold text-xl",children:"City:"})," ",i.city]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"font-semibold text-xl",children:"Province:"})," ",i.province]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"font-semibold text-xl",children:"Country:"})," ",i.country]})]})})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"flush-headingThree",children:Object(r.jsx)("button",{className:"accordion-button collapsed bg-gray-100 focus:border  focus:outline-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseThree","aria-expanded":"false","aria-controls":"flush-collapseThree",children:"Orders"})}),Object(r.jsx)("div",{id:"flush-collapseThree",className:"accordion-collapse collapse","aria-labelledby":"flush-headingThree","data-bs-parent":"#accordionFlushExample",children:Object(r.jsx)("div",{className:"accordion-body text-left",children:Object(r.jsx)("div",{children:Array.isArray(b)&&b?Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Your Past Orders"}),Object(r.jsx)(be,{orders:b})]}):Object(r.jsx)("h2",{children:"You did not order any dishes in the past."})})})})]})]})})};function me(e,t){return A.put("https://e-foo.herokuapp.com/update",{address:e,user:t})}var he=function(e){Object(R.a)(c,e);var t=Object(Y.a)(c);function c(){var e;Object(z.a)(this,c);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={data:{street:"",city:"",postalCode:"",province:"",country:""},errors:{},loading:!1},e.schema={street:ee.a.string().required().label("Street"),city:ee.a.string().required().min(5).label("City"),postalCode:ee.a.string().required().label("Post Code"),province:ee.a.string().required(),country:ee.a.string().required()},e.doSubmit=Object(I.a)(C.a.mark((function t(){var c,r,s;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=B(),e.setState({loading:!0}),t.prev=2,t.next=5,me(e.state.data,c);case 5:t.sent,r=e.props.location.state,window.location=r?r.from.pathname:"/cart",t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),t.t0.response&&400==t.t0.response.status&&(Object(u.a)({},e.state.errors),s=t.t0.response.data,e.setState({errors:s}));case 13:e.setState({loading:!1});case 14:case"end":return t.stop()}}),t,null,[[2,10]])}))),e}return Object(H.a)(c,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"mt-20 pt-10 min-h-screen flex self-center justify-center",children:Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(r.jsx)("h1",{className:"font-bold mb-5 text-yellow-800 text-2xl",children:"Register Here"}),this.renderInput("street","Street"),this.renderInput("city","City"),this.renderInput("postalCode","postal Code"),this.renderInput("province","Province"),this.renderInput("country","Country"),this.state.loading?Object(r.jsx)(b.f,{className:"animate-spin text-5xl ml-40 mt-20 text-yellow-400"}):this.renderButton("Save Address"),this.state.errors&&Object(r.jsx)("div",{className:"text-yellow-600",children:this.state.errors.msg})]})})}}]),c}(ne);function xe(e,t){return A.put("https://e-foo.herokuapp.com/addOrders",{orders:e,user:t})}var pe=c(50),Oe=c.n(pe);function fe(e,t,c){return A.post("https://e-foo.herokuapp.com/checkout",{token:e,product:t,id:c})}var ge=function(e){var t=JSON.parse(localStorage.getItem("cartItems")||"[]"),c=t.reduce((function(e,t){return e+t.price*t.quantity}),0),s=B();function n(){return a.apply(this,arguments)}function a(){return(a=Object(I.a)(C.a.mark((function e(){var t,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("cartItems")||"[]"),c=B(),e.prev=2,e.next=5,xe(t,c);case 5:e.sent,window.location="/comfirmation",e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function l(){return(l=Object(I.a)(C.a.mark((function e(c,r){var a,l,o,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe(c,t,s.id);case 2:a=e.sent,l=a.data,o=l.status,i=l.user,localStorage.setItem("user",JSON.stringify(i)),"success"===o?(n(),Object(d.b)("Success! Check email for details",{type:"success"})):Object(d.b)("Something went wrong",{type:"error"});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.jsxs)("div",{className:"md:w-1/2 w-3/4 mx-auto h-screen mt-10",children:[Object(r.jsx)("h1",{className:"my-5 font-bold text-3xl",children:"Order Summary"}),Object(r.jsxs)("table",{className:"table table-striped table-borderless",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col",children:"Item"}),Object(r.jsx)("th",{scope:"col",children:"Qty"}),Object(r.jsx)("th",{scope:"col",children:"Price"})]})}),Object(r.jsx)("tbody",{children:t.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"py-3",children:e.title}),Object(r.jsx)("td",{children:e.quantity}),Object(r.jsxs)("td",{children:["$",e.price*e.quantity]})]},t)}))})]}),Object(r.jsxs)("div",{className:"flex justify-between mt-20 border-b-2 border-gray-400 pb-5",children:[Object(r.jsxs)("p",{className:"font-bold text-lg",children:["Total: $",c]}),Object(r.jsx)(Oe.a,{stripeKey:"pk_test_51JGcqTCK6hSW8rlmkkjm7cQkBSEdeceQdhoj0xkPCpuPWrHccciDKDfxFNED6jLQ6zCzTbUiiT6TOXVqLd6s98Rg00DA9gg2yj",amount:100*c,name:t[0].title+"...",token:function(e,t){return l.apply(this,arguments)},billingAddress:!0,shippingAddress:!0})]})]})},ve=function(){var e=Object(s.useState)({}),t=Object($.a)(e,2),c=(t[0],t[1]);Object(s.useEffect)((function(){var e=B();c(e)}),[]);var n=JSON.parse(localStorage.getItem("user")||"[]").address,a=JSON.parse(localStorage.getItem("cartItems")||"[]"),l=a.reduce((function(e,t){return e+t.price*t.quantity}),0),i=new Intl.NumberFormat("en-CA",{currency:"CAD",style:"currency"});return Object(r.jsxs)("div",{className:"w-3/4 lg:w-2/6  m-auto h-full mb-5 mt-4",children:[Object(r.jsx)("h2",{className:"text-2xl font-bold text-green-600 mb-5",children:"Comfirmation Reciept"}),Object(r.jsxs)("div",{class:"card w-full  h-full pt-2 bg-gray-100",children:[Object(r.jsx)(b.c,{className:"card-img-top text-red-500",size:"30"}),Object(r.jsxs)("div",{className:"card-body font-bold bg-gray-50",children:[Object(r.jsx)("h5",{className:"card-title",children:"Delivery Address"}),Object(r.jsxs)("p",{className:"card-text",children:["Street: ",n.street]}),Object(r.jsxs)("p",{className:"card-text",children:["City: ",n.city]}),Object(r.jsxs)("p",{className:"card-text",children:["Province: ",n.province]})]}),Object(r.jsxs)("table",{class:"table ",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{className:"bg-gray-200",children:[Object(r.jsx)("th",{scope:"col",children:"Item"}),Object(r.jsx)("th",{scope:"col",children:"Qty"}),Object(r.jsx)("th",{scope:"col",children:"Price"})]})}),Object(r.jsxs)("tbody",{children:[a.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.title}),Object(r.jsx)("td",{children:e.quantity}),Object(r.jsx)("td",{children:i.format(e.price)})]})})),Object(r.jsxs)("tr",{className:"bg-gray-200 font-bold",children:[Object(r.jsx)("td",{}),Object(r.jsx)("td",{children:"Total: "}),Object(r.jsx)("td",{children:i.format(l)})]})]})]}),Object(r.jsx)("div",{className:"card-body",children:Object(r.jsxs)("h1",{className:"font-semibold p-2 font-mono",children:["Thank you for your business!",Object(r.jsx)("br",{})," Payment will be charded on the card you provided, please feel free to contact us with any inquiries. Enjoy your delicious meal, see you again."]})})]}),Object(r.jsx)(o.b,{to:"/",children:Object(r.jsx)("div",{className:"text-center mt-5",children:Object(r.jsx)("button",{className:"btn btn-warning text-white font-semibold",onClick:function(){localStorage.removeItem("cartItems"),window.location="/"},children:"Back to Main Page"})})})]})},ye=c(51),Ne=c.n(ye);var we=function(){var e=Object(s.useState)({title:"",price:"",description:"",selectedFile:""}),t=Object($.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),l=Object($.a)(a,2),o=l[0],i=l[1];return Object(r.jsx)("div",{className:"h-screen text-center",children:Object(r.jsxs)("form",{autoComplete:"off",onSubmit:function(e){var t;(e.preventDefault(),""!==c.title&&""!==c.price&&""!==c.description&&""!==c.selectedFile)?(i(""),t=c,F.a.post("https://e-foo.herokuapp.com/addproducts",t).then((function(e){console.log(e)})).catch((function(e){console.log(e.message)})),d.b.success("product added to the database",{position:"top-center",autoClose:1500,hideProgressBar:!0}),n({title:"",price:"",description:"",selectedFile:""})):i("some field are blank, please fill them out.")},className:"w-3/4 lg:w-1/2 mx-auto",children:[Object(r.jsx)("h1",{className:"text-3xl font-bold mb-10 mt-10",children:"Add Products"}),Object(r.jsx)("div",{className:"form-group mb-4",children:Object(r.jsx)("input",{type:"text",name:"title",className:"form-control",placeholder:"Enter product title",value:c.title,onChange:function(e){return n(Object(u.a)(Object(u.a)({},c),{},{title:e.target.value}))}})}),Object(r.jsx)("div",{className:"form-group mb-4",children:Object(r.jsx)("input",{type:"text",name:"price",className:"form-control",placeholder:"Enter product price",value:c.price,onChange:function(e){return n(Object(u.a)(Object(u.a)({},c),{},{price:e.target.value}))}})}),Object(r.jsx)("div",{className:"form-group mb-4",children:Object(r.jsx)("input",{type:"text",name:"description",className:"form-control",placeholder:"Enter product description",value:c.description,onChange:function(e){return n(Object(u.a)(Object(u.a)({},c),{},{description:e.target.value}))}})}),Object(r.jsx)("div",{className:"form-group text-left",children:Object(r.jsx)(Ne.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return n(Object(u.a)(Object(u.a)({},c),{},{selectedFile:t}))}})}),Object(r.jsx)("div",{className:"text-left",children:Object(r.jsx)("p",{className:"text-red-500 mt-5",children:o})}),Object(r.jsx)("div",{className:"mt-5 text-left mb-4",children:Object(r.jsx)("button",{type:"submit",className:"btn btn-primary md:w-40 w-full text-2xl",children:"Add"})})]})})};var ke=function(e){var t=e.component,c=Object(re.a)(e,["component"]),s=B();return Object(r.jsx)(i.b,Object(u.a)(Object(u.a)({},c),{},{render:function(e){return s.isAdmin?Object(r.jsx)(t,Object(u.a)({},e)):Object(r.jsx)(i.a,{to:"/"})}}))};var Se=function(){return Object(r.jsxs)(o.a,{children:[Object(r.jsx)(d.a,{}),Object(r.jsx)(le,{}),Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/dishes/:id",component:Q}),Object(r.jsx)(i.b,{path:"/login",component:ae}),Object(r.jsx)(i.b,{path:"/signup",component:ie}),Object(r.jsx)(i.b,{path:"/logout",component:je}),Object(r.jsx)(i.b,{path:"/comfirmation",component:ve}),Object(r.jsx)(ke,{path:"/dashboard",component:we}),Object(r.jsx)(i.b,{path:"/delete",component:ue}),Object(r.jsx)(i.b,{path:"/address",component:he}),Object(r.jsx)(i.b,{path:"/summary",component:ge}),Object(r.jsx)(i.b,{path:"/cart",component:L}),Object(r.jsx)(i.b,{path:"/",component:X})]}),Object(r.jsx)(de,{})]})},Ce=(c(85),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,90)).then((function(t){var c=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),r(e),s(e),n(e),a(e)}))});c(86);l.a.render(Object(r.jsx)(o.a,{children:Object(r.jsx)(j.a,{store:U,children:Object(r.jsx)(Se,{})})}),document.getElementById("root")),Ce()}},[[87,1,2]]]);
//# sourceMappingURL=main.10134df3.chunk.js.map