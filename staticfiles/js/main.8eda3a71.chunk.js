(this["webpackJsonpbakery-frontend"]=this["webpackJsonpbakery-frontend"]||[]).push([[0],{14:function(e,a,t){},41:function(e,a,t){e.exports=t.p+"static/media/banner1.9f6785fd.jpg"},42:function(e,a,t){e.exports=t.p+"static/media/banner2.11ba1e38.jpg"},43:function(e,a,t){e.exports=t.p+"static/media/banner3.6d510f75.jpg"},44:function(e,a,t){e.exports=t.p+"static/media/logo.5e092687.png"},50:function(e,a,t){e.exports=t(96)},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},8:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(39),c=t.n(l),s=t(18),o=t(6),i=(t(8),t(23)),u=t(2),d=t(3),m=t(1),h=t(5),p=t(4),b=t(17),f=t.n(b),v=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"main-layout"},r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"nav-container col-layout"},this.props.nav),r.a.createElement("div",{className:"category-layout"},this.props.side),r.a.createElement("div",{className:"menu-section scroll-bar scroll-bar-transparent"},this.props.main)),this.props.cart))}}]),t}(r.a.Component),E=(t(72),function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).handleAddMore=function(e){var a=n.props;(0,a.onAdd)(a.index)},n.handleReduceItem=function(e){var a=n.props;(0,a.onReduce)(a.index)},n.handleRemoveItem=function(e){n.props.onRemove(n.props.product)},n.handleAddMore=n.handleAddMore.bind(Object(m.a)(n)),n.handleReduceItem=n.handleReduceItem.bind(Object(m.a)(n)),n.handleRemoveItem=n.handleRemoveItem.bind(Object(m.a)(n)),n}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cart-item"},r.a.createElement("div",{className:"cart-image-container"},r.a.createElement("img",{alt:"",src:this.props.product.image})),r.a.createElement("div",{className:"cart-order-info"},r.a.createElement("div",{className:"cart-item-info order-info col-layout"},r.a.createElement("p",{className:"name"},this.props.product.name),r.a.createElement("p",{className:"price"},"$",this.props.product.basePrice)),r.a.createElement("div",{className:"order-change order-info col-layout"},r.a.createElement("div",{className:"quantity"},r.a.createElement("i",{className:"fas fa-minus minus",onClick:this.handleReduceItem}),r.a.createElement("span",null,this.props.product.quantity),r.a.createElement("i",{className:"fas fa-plus",onClick:this.handleAddMore})),r.a.createElement("div",{className:"remove"},r.a.createElement("i",{className:"fas fa-trash-alt",onClick:this.handleRemoveItem})))))}}]),t}(r.a.Component)),g=(t(73),function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this,a=this.props.cart,t=a.products,n=a.subTotal,l=a.deliver,c=[];return t.forEach((function(a,t){c.push(r.a.createElement(E,{product:a,key:a.name,index:t,onAdd:e.props.onAdd,onReduce:e.props.onReduce,onRemove:e.props.onRemove}))})),r.a.createElement("div",{className:"cart-container"},r.a.createElement("h3",null,"My Orders"),r.a.createElement("div",{className:"cart-items scroll-bar"},c),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"order-payment"},r.a.createElement("div",{className:"payment-breakdown"},r.a.createElement("div",{className:"col-layout"},r.a.createElement("p",null,"Sub total"),r.a.createElement("p",{className:"price"},"$",n)),r.a.createElement("div",{className:"col-layout"},r.a.createElement("p",null,"Delivery fee"),r.a.createElement("p",{className:"price"},"$",l))),r.a.createElement("div",{className:"col-layout"},r.a.createElement("p",null,"Total"),r.a.createElement("p",{className:"price"},"$",(Number(n)+Number(l)).toFixed(2)))),r.a.createElement("button",{className:"btn check-out-btn",onClick:this.props.onCheckOut,disabled:0===t.length},"Check Out")))}}]),t}(r.a.Component)),C=(t(74),t(75),function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).handleAddToCart=function(e){n.props.onAddToCart(n.props.product)},n.state={},n.handleAddToCart=n.handleAddToCart.bind(Object(m.a)(n)),n}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card-item"},r.a.createElement("div",{className:"card-image-container"},r.a.createElement("img",{alt:"",src:this.props.product.image})),r.a.createElement("div",{className:"food-info"},r.a.createElement("p",{className:"food-name"},this.props.product.name),r.a.createElement("p",{className:"price"},"$",this.props.product.price)),r.a.createElement("div",null,r.a.createElement("button",{className:"add-btn btn",onClick:this.handleAddToCart},"Add")))}}]),t}(r.a.Component)),y=t(40),O=(t(76),t(77),t(41)),k=t.n(O),N=t(42),j=t.n(N),S=t(43),R=t.n(S),A=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).slideRef=r.a.createRef(),n.state={current:0},n}return Object(d.a)(t,[{key:"render",value:function(){var e=[k.a,j.a,R.a],a={duration:3500,autoplay:!0,transitionDuration:1e3,arrows:!1,infinite:!0,easing:"ease",indicators:function(){return r.a.createElement("div",{className:"indicator"})}};return r.a.createElement("div",{className:"slide-container"},r.a.createElement(y.Fade,a,r.a.createElement("div",{className:"each-fade"},r.a.createElement("img",{src:e[0],alt:"banner"})),r.a.createElement("div",{className:"each-fade"},r.a.createElement("img",{src:e[1],alt:"banner"})),r.a.createElement("div",{className:"each-fade"},r.a.createElement("img",{src:e[2],alt:"banner"}))))}}]),t}(r.a.Component),x=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this,a=this.props.category,t=[];return this.props.products.forEach((function(n){n.category===a&&t.push(r.a.createElement(C,{product:n,key:n.name,onAddToCart:e.props.onAddToCart}))})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"banner-layout"},r.a.createElement(A,null)),r.a.createElement("p",{className:"menu-title"},"Our Menu"),r.a.createElement("div",{className:"menu-layout"},t))}}]),t}(r.a.Component),T=(t(78),function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).handleCakeChange=function(e){n.setState({category:"cake"}),n.props.onCakeChange(e)},n.handleDrinkChange=function(e){n.setState({category:"drink"}),n.props.onDrinkChange(e)},n.state={category:"cake"},n.handleDrinkChange=n.handleDrinkChange.bind(Object(m.a)(n)),n.handleCakeChange=n.handleCakeChange.bind(Object(m.a)(n)),n}return Object(d.a)(t,[{key:"render",value:function(){var e="cake"===this.state.category?"fas fa-cheese category-box chosen-category":"fas fa-cheese category-box",a="drink"===this.state.category?"fas fa-coffee category-box chosen-category":"fas fa-coffee category-box";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cake"},r.a.createElement("i",{className:e,onClick:this.handleCakeChange}),r.a.createElement("p",null,"Cake")),r.a.createElement("div",{className:"drink"},r.a.createElement("i",{className:a,onClick:this.handleDrinkChange}),r.a.createElement("p",null,"Drink")))}}]),t}(r.a.Component)),F=(t(79),t(44)),I=t.n(F),M=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={burger:!1},n}return Object(d.a)(t,[{key:"render",value:function(){var e=this,a=this.state.burger;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{src:I.a,alt:"logo"})," Bakee"),r.a.createElement("ul",{className:a?"burger":"nav-link col-layout"},r.a.createElement("li",null,r.a.createElement(s.b,{to:"/",className:"link"},"Menu")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/about",className:"link"},"Our Store"))),r.a.createElement("div",{className:"bars",onClick:function(){e.setState({burger:!e.state.burger})}},a?r.a.createElement("i",{class:"fas fa-times"}):r.a.createElement("i",{class:"fas fa-bars"})))}}]),t}(r.a.Component),D=t(20),w=t(49),P=t(19),V=(t(14),function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"checkout-layout"},r.a.createElement("div",{className:"checkout-container"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("h4",null,this.props.header),r.a.createElement("i",{class:"fas fa-times close-icon",onClick:this.props.onCheckOut})),this.props.body))}}]),t}(r.a.Component)),B=t(46),q=t.n(B),$=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).handleChange=function(a){e.props.onAddressChange(a)},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,a=e.values,t=e.formValidate,n={location:new google.maps.LatLng(10.765215,106.692297),radius:500,types:["address"]};return r.a.createElement(q.a,{value:a.address,onChange:this.handleChange,searchOptions:n},(function(e){var a=e.getInputProps,n=e.suggestions,l=e.getSuggestionItemProps;e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("label",null,"Address"),r.a.createElement("input",a({placeholder:"Enter your address",className:"location-search-input"})),0!==t.address.length&&r.a.createElement("p",{className:"error"},t.address)),r.a.createElement("div",{className:"dropdown-container"},n.map((function(e){var a=e.active?"suggestion-item--active":"suggestion-item",t=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",l(e,{className:a,style:t}),r.a.createElement("span",null,e.description))}))))}))}}]),t}(r.a.Component),L=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,a=e.values,t=e.onInfoChange,n=e.formValidate,l=n.name,c=n.phone,s=n.mail;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{value:a.name,onChange:function(e){return t(e)},name:"name",placeholder:"Enter your name",type:"text",formNoValidate:!0}),0!==l.length&&r.a.createElement("p",{className:"error"},l)),r.a.createElement("div",null,r.a.createElement("label",null,"Phone"),r.a.createElement("input",{value:a.phone,onChange:function(e){return t(e)},name:"phone",placeholder:"Enter your phone number",type:"text",formNoValidate:!0}),0!==c.length&&r.a.createElement("p",{className:"error"},c)),r.a.createElement("div",null,r.a.createElement("label",null,"Mail"),r.a.createElement("input",{value:a.mail,onChange:function(e){return t(e)},name:"mail",placeholder:"Enter your mail",type:"email",formNoValidate:!0}),0!==s.length&&r.a.createElement("p",{className:"error"},s)))}}]),t}(r.a.Component),J=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,a=e.values,t=e.paymentInfo,n=t.products,l=t.subTotal,c=t.deliver;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"info-list"},r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,a.name)),r.a.createElement("tr",null,r.a.createElement("td",null,"Phone"),r.a.createElement("td",null,a.phone)),r.a.createElement("tr",null,r.a.createElement("td",null,"Mail"),r.a.createElement("td",null,a.mail)),r.a.createElement("tr",null,r.a.createElement("td",null,"Address"),r.a.createElement("td",null,a.address))),0!==n.length&&r.a.createElement("table",{className:"info-list"},n.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,e.name," ",r.a.createElement("br",null),r.a.createElement("span",null,"x",e.quantity)),r.a.createElement("td",null,r.a.createElement("br",null),"$",e.basePrice))}))),r.a.createElement("table",{className:"info-list"},r.a.createElement("tr",null,r.a.createElement("td",null,"Sub total"),r.a.createElement("td",null,"$",l)),r.a.createElement("tr",null,r.a.createElement("td",null,"Delivery fee"),r.a.createElement("td",null,"$",c)),r.a.createElement("tr",{className:"total"},r.a.createElement("td",null,"Total"),r.a.createElement("td",null,"$",(Number(l)+Number(c)).toFixed(2)))))}}]),t}(r.a.Component),U=t(47),H=t.n(U),W=function(e){return Object(P.usePromiseTracker)().promiseInProgress&&r.a.createElement("div",{className:"checkout-layout"},r.a.createElement("div",{class:"loader"},r.a.createElement(H.a,{css:"",height:40,width:4,radius:2,margin:2,color:"#ffb367",loading:!0})))},z=(t(95),function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props.onCloseResult,a=this.props.isSuccess,t=["SUCCESS","ERROR"];return r.a.createElement(V,{header:a?t[0]:t[1],onCheckOut:e,body:r.a.createElement("div",{className:"result"},a?r.a.createElement("div",null,r.a.createElement("i",{class:"fas fa-check-circle"}),r.a.createElement("h4",null,"YOUR ORDER IS ON THE WAY ",r.a.createElement("br",null),"PLEASE CHECK YOUR EMAIL FOR COMFIRMATION")):r.a.createElement("div",null,r.a.createElement("i",{class:"fas fa-exclamation-circle"}),r.a.createElement("h4",null,"THERE IS A ERROR OCCUR",r.a.createElement("br",null),"PLEASE FILL IN THE INPUT CORRECTLY")))})}}]),t}(r.a.Component)),Y=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),Z=RegExp(/[a-zA-Z]{3,}/),K=RegExp(/[0-9]{9,}/),G=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).calculateDeliveryFee=function(){var e=new google.maps.LatLng(10.765215,106.692297),a=n.state.address,t=new google.maps.DistanceMatrixService;Object(P.trackPromise)(t.getDistanceMatrix({origins:[e],destinations:[a],travelMode:google.maps.TravelMode.DRIVING,unitSystem:google.maps.UnitSystem.METRIC,avoidHighways:!1,avoidTolls:!1},n.callback))},n.callback=function(e,a){if(a!==google.maps.DistanceMatrixStatus.OK)console.log("error"),n.updateResult(!1);else{console.log(e.rows[0].elements[0].distance);var t=e.rows[0].elements[0].distance.value/1e3,r=Number(.5*t).toFixed(2);n.props.handleDeliveryFee(r)}},n.validateInput=function(){var e=n.state,a=e.formValidate,t=e.name,r=e.phone,l=e.mail;return a.name=Z.test(t)?"":"minimum 3 character required and must contain only character",a.phone=K.test(r)?"":"minumum 10 phone number required",a.mail=Y.test(l)?"":"invalid email address",n.setState({formValidate:a}),a},n.validateAddress=function(){var e=n.state,a=e.formValidate,t=e.address;return a.address=t.length>0?"":"invalid address",n.setState({formValidate:a}),a.address},n.isValidated=function(){var e=n.state.step,a=!0,t=n.validateInput(),r=t.name,l=t.phone,c=t.mail;return 0===e&&[r,l,c].forEach((function(e){e.length>0&&(a=!1)})),1===e&&n.validateAddress().length>0&&(a=!1),a},n.nextStep=function(){var e=n.state.step;e+=1,n.isValidated()&&(2===e&&n.calculateDeliveryFee(),n.setState({step:e}))},n.previousStep=function(){var e=n.state.step;e-=1,n.setState({step:e})},n.handleChange=function(e){var a=e.target,t=a.name,r=a.value;n.setState(Object(D.a)({},t,r))},n.handleAddressChange=function(e){n.setState({address:e})},n.renderSwitch=function(e){var a=n.props.paymentInfo,t=n.state,l=t.formValidate,c={name:t.name,phone:t.phone,mail:t.mail,address:t.address};switch(e){case 0:return r.a.createElement(L,{values:c,onInfoChange:n.handleChange,formValidate:l});case 1:return r.a.createElement($,{values:c,onAddressChange:n.handleAddressChange,formValidate:l});case 2:return r.a.createElement(J,{paymentInfo:a,values:c})}},n.handleSubmit=function(){var e=n.props,a=e.paymentInfo,t=e.handleResultBox,r=e.updateResult,l=n.state,c={name:l.name,phone:l.phone,mail:l.mail,address:l.address,cart:JSON.stringify(a.products),price:Number(a.subTotal).toFixed(2),deliveryFee:Number(a.deliver).toFixed(2)},s=JSON.stringify(c),o=new w.a;Object(P.trackPromise)(f.a.request({url:"/api/order/",method:"post",data:s,headers:{"Content-type":"application/json","X-CSRFToken":o.get("csrftoken"),Accept:"application/json; indent=4"}}).then((function(e){n.props.onReset(),t(),r()})).catch((function(e){t(),r(!1)})))},n.state={step:0,name:"",phone:"",mail:"",address:"",formValidate:{name:"",phone:"",mail:"",address:""}},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleAddressChange=n.handleAddressChange.bind(Object(m.a)(n)),n.nextStep=n.nextStep.bind(Object(m.a)(n)),n.previousStep=n.previousStep.bind(Object(m.a)(n)),n.renderSwitch=n.renderSwitch.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.validateInput=n.validateInput.bind(Object(m.a)(n)),n.validateAddress=n.validateAddress.bind(Object(m.a)(n)),n.isValidated=n.isValidated.bind(Object(m.a)(n)),n.calculateDeliveryFee=n.calculateDeliveryFee.bind(Object(m.a)(n)),n.callback=n.callback.bind(Object(m.a)(n)),n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("checkout");if(e){var a=e=JSON.parse(e),t=a.name,n=a.phone,r=a.mail,l=a.address,c=a.step;this.setState({name:t,phone:n,mail:r,address:l,step:c})}}},{key:"componentWillUnmount",value:function(){var e=this.state,a=e.name,t=e.phone,n=e.mail,r=e.address,l=e.step;localStorage.setItem("checkout",JSON.stringify({name:a,phone:t,mail:n,address:r,step:l}))}},{key:"render",value:function(){var e=this.props.onCheckOut,a=this.state,t=a.step;a.result,a.isSuccess;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{header:["Who are we deliver to?","Where are we deliver to?","Comfirmation"][t],onCheckOut:e,body:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"inputField scroll-bar scroll-bar-transparent"},this.renderSwitch(t)),r.a.createElement("div",{className:t>0?"step-layout col-layout":"step-layout"},t>0&&r.a.createElement("button",{onClick:this.previousStep,className:"previous-btn"},"\u2190 Back"),2===t?r.a.createElement("button",{onClick:this.handleSubmit,className:"btn next-btn"},"Place Order \u2192"):r.a.createElement("button",{onClick:this.nextStep,className:"btn next-btn"},"Next \u2192")))}),r.a.createElement(W,null))}}]),t}(r.a.Component),X=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).handleDeliveryFee=function(e){var a=n.state.cart,t=a.products,r=a.subTotal;n.setState({cart:{products:t,subTotal:r,deliver:e}})},n.handleDrinkCategory=function(e){n.setState({category:"drink"})},n.handleCakeCategory=function(e){n.setState({category:"cake"})},n.handleAddToCart=function(e){for(var a=n.state.cart,t=a.products,r=a.subTotal,l=a.deliver,c=0;c<t.length;c++)if(t[c].name===e.name)return;e.quantity=1,e.basePrice=e.quantity*e.price;var s={products:t.concat(e),subTotal:r+e.price,deliver:l};n.setState({cart:s,cartAnimation:!0})},n.handleAddMore=function(e){n.handlePayment(e,1)},n.handleReduce=function(e){n.handlePayment(e,-1)},n.handlePayment=function(e,a){var t=n.state.cart,r=t.products,l=t.subTotal,c=t.deliver,s=r[e];if(s.quantity=s.quantity+a,0!==r[e].quantity){s.basePrice=s.quantity*s.price,l+=a*s.price,r[e]=s;var o={products:r,subTotal:l,deliver:c};n.setState({cart:o})}else n.handleRemoveFromCart(r[e])},n.handleRemoveFromCart=function(e){var a=n.state.cart,t=a.products,r=a.subTotal,l=a.deliver,c={products:t.filter((function(a){return a.name!==e.name})),subTotal:r-e.basePrice,deliver:l};n.setState({cart:c})},n.resetCart=function(){n.setState({cart:Object(i.a)(Object(i.a)({},n.state.cart),{},{products:[],subTotal:0}),isCheckOut:!1})},n.handleCheckOut=function(){var e=n.state.isCheckOut;n.setState({isCheckOut:!e})},n.handleResultBox=function(){var e=n.state.result;n.setState({result:!e})},n.updateResult=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];n.setState({isSuccess:e})},n.handleCartMobile=function(){n.setState({isCartMobile:!n.state.isCartMobile})},n.state={data:[],category:"cake",isCartMobile:!1,isCheckOut:!1,result:!1,isSuccess:!1,cartAnimation:!1,cart:{products:[],subTotal:0,deliver:0}},n.handleDrinkCategory=n.handleDrinkCategory.bind(Object(m.a)(n)),n.handleCakeCategory=n.handleCakeCategory.bind(Object(m.a)(n)),n.handleAddToCart=n.handleAddToCart.bind(Object(m.a)(n)),n.handleAddMore=n.handleAddMore.bind(Object(m.a)(n)),n.handleReduce=n.handleReduce.bind(Object(m.a)(n)),n.handleRemoveFromCart=n.handleRemoveFromCart.bind(Object(m.a)(n)),n.handleCheckOut=n.handleCheckOut.bind(Object(m.a)(n)),n.handlePayment=n.handlePayment.bind(Object(m.a)(n)),n.resetCart=n.resetCart.bind(Object(m.a)(n)),n.handleResultBox=n.handleResultBox.bind(Object(m.a)(n)),n.handleCartMobile=n.handleCartMobile.bind(Object(m.a)(n)),n.handleDeliveryFee=n.handleDeliveryFee.bind(Object(m.a)(n)),n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.default.headers={"Content-Type":"application/json"},f.a.get("/api/product/").then((function(a){e.setState({data:a.data});var t=localStorage.getItem("cart");if(t){var n=JSON.parse(t);e.setState({cart:n})}})).catch((function(e){return console.log(e)}))}},{key:"componentWillUnmount",value:function(){var e=this.state.cart;localStorage.setItem("cart",JSON.stringify(e))}},{key:"render",value:function(){var e=this,a=this.state,t=a.data,n=a.category,l=a.result,c=a.isCheckOut,s=a.isSuccess,o=a.isCartMobile,i=a.cart,u=a.cartAnimation;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{nav:r.a.createElement(M,null),side:r.a.createElement(T,{onCakeChange:this.handleCakeCategory,onDrinkChange:this.handleDrinkCategory}),main:r.a.createElement(x,{products:t,category:n,onAddToCart:this.handleAddToCart}),cart:r.a.createElement("div",{className:o?"cart-layout-mobile":"cart-layout"},r.a.createElement(g,{cart:i,onAdd:this.handleAddMore,onReduce:this.handleReduce,onRemove:this.handleRemoveFromCart,onCheckOut:this.handleCheckOut}),r.a.createElement("div",{className:"cart-out-icon",onClick:this.handleCartMobile},r.a.createElement("i",{class:"fas fa-long-arrow-alt-right"})))}),r.a.createElement("div",{className:u?"cart-icon cart-animation":"cart-icon",onClick:this.handleCartMobile,onAnimationEnd:function(){return e.setState({cartAnimation:!1})}},r.a.createElement("i",{class:"fas fa-shopping-bag"})),c&&r.a.createElement(G,{paymentInfo:i,onReset:this.resetCart,onCheckOut:this.handleCheckOut,handleDeliveryFee:this.handleDeliveryFee,handleResultBox:this.handleResultBox,updateResult:this.updateResult}),l&&r.a.createElement(z,{isSuccess:s,onCloseResult:this.handleResultBox}))}}]),t}(r.a.Component);var _=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{nav:r.a.createElement(M,null),side:null,main:r.a.createElement("div",{className:"info-box"},r.a.createElement("h2",{className:"heading"},"Bakee Bakery"),r.a.createElement("ul",{className:"store-info"},r.a.createElement("li",null,r.a.createElement("i",{class:"fas fa-map-marker-alt"})," 101 Tran Hung Dao, Pham Ngu Lao, District 1, Ho Chi Minh"),r.a.createElement("li",null,r.a.createElement("i",{class:"fas fa-phone"})," +84282288226"),r.a.createElement("li",null,r.a.createElement("i",{class:"fas fa-envelope"})," bakee.store@gmail.com")),r.a.createElement("h3",{className:"heading"},"Opening"),r.a.createElement("ul",{className:"opening-info"},r.a.createElement("li",null,r.a.createElement("i",{class:"fas fa-calendar-check"})," Monday - Sunday"),r.a.createElement("li",null,r.a.createElement("i",{class:"fas fa-clock"})," 9 a.m - 10 p.m"))),cart:null}))};var Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:X}),r.a.createElement(o.a,{path:"/about",exact:!0,component:_}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.8eda3a71.chunk.js.map