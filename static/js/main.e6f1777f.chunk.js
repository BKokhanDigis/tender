(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{421:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADHSURBVHgB7dZBCsIwEIXh0eoRXLhzI3iMHEXxXKJHyT3cdOfCI9gSE1wYCjPCZBJU3geCaaH9aUunRADwG2ZkYLe/bcZucY5/Xfz5xzgc+su6p0JzMpCFJW75WhcziaN3GLdWsYqrAnFaiNNCnNZXx7HjazKSahFHHXvlGoQl4qiTbqujNhy3Q4rz1EAQzsPGdfFZCJUD0/GHeB5uv8n33PZ4D9Nt19Oq+Nh4z2khTgtxWojTsorz+cJqspjE5aPu00gCgH/0BBOONjCnSl5cAAAAAElFTkSuQmCC"},461:function(e,t,a){e.exports=a(720)},466:function(e,t,a){},467:function(e,t,a){},720:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),i=a.n(r),o=(a(466),a(467),a(445)),m=a(61),c=a(759),s=a(760),d=a(723),u=a(28);var g,p,f,E,h,y,b,v,x=function(){var e=Object(u.a)({root:{color:"#2563EB",fontWeight:"700",fontSize:16,zIndex:1,cursor:"pointer"}})(d.a);return l.a.createElement(c.a,{position:"static",color:"transparent"},l.a.createElement(s.a,{style:{alignItems:"center"}},l.a.createElement("div",{style:{display:"flex",alignItems:"center",width:"60%",justifyContent:"space-between",marginLeft:400}},l.a.createElement(e,{variant:"h6",component:"div",sx:{marginRight:1,color:"#2563EB",fontFamily:"DM Sans"}},"Debts"),l.a.createElement(e,{variant:"h6",component:"div",sx:{marginRight:1,color:"#2563EB"}},"Projects"),l.a.createElement(e,{variant:"h6",component:"div",sx:{marginRight:1,color:"#2563EB"}},"Governance"),l.a.createElement(e,{variant:"h6",component:"div",sx:{marginRight:1,color:"#2563EB"}},"Internal Documents"))))},A=a(773),D=a(761),w=a(155),F=a(777),T=a(27),S=a(67),C=a(7),B=a(771),k=a(446),L=a(772),R=a(774),j=a(116),I=a(769),M=a(770),z=a(762),N=a(775),O=Object(D.a)(function(e){return{content:{width:"60%",padding:e.spacing(2),height:"100%",marginTop:40,justifyContent:"flex-start",textAlign:"left"},textField:{backgroundColor:"white",marginLeft:15},label:{fontFamily:"DM Sans",color:"#98A1B2",fontWeight:"700",fontSize:14},adornment:{fontFamily:"DM Sans",color:"#98A1B2",fontWeight:"400",fontSize:10,marginRight:10}}}),P=function(e){var t=e.label,a=e.placeholder,n=e.width,r=e.InputComponent,i=e.onChange,o=O();return l.a.createElement("div",{style:{marginTop:23,marginRight:15,width:n}},l.a.createElement(d.a,{variant:"subtitle1",className:o.label},t),l.a.createElement(r,{style:{width:"100%"},placeholder:a,onChange:i}))},H=function(e){var t=e.label,a=e.placeholder,n=e.width,r=e.name,i=e.control,o=e.descr,m=void 0===o?"":o,c=O();return l.a.createElement("div",{style:{marginTop:23,marginRight:15,width:n}},l.a.createElement(d.a,{variant:"subtitle1",className:c.label},t),l.a.createElement(w.a,{name:r,control:i,render:function(e){var t=e.field;return l.a.createElement(M.a,Object.assign({style:{width:"100%"},className:c.textField,placeholder:a,InputLabelProps:{shrink:!1},size:"small",variant:"outlined",margin:"none",InputProps:{style:{fontFamily:"DM Sans",fontSize:13},endAdornment:l.a.createElement(z.a,{position:"end"},l.a.createElement("div",{style:{fontFamily:"DM Sans",color:"#98A1B2",fontSize:13}},m))}},t))}}))},W=function(e){var t=e.label,a=e.placeholder,n=e.width,r=e.name,i=e.control,o=e.descr,m=void 0===o?"":o,c=O();return l.a.createElement("div",{style:{marginTop:23,marginRight:15,width:n}},l.a.createElement(d.a,{variant:"subtitle1",className:c.label},t),l.a.createElement(w.a,{name:r,control:i,render:function(e){var t=e.field;return l.a.createElement(M.a,Object.assign({style:{width:"100%"},className:c.textField,placeholder:a,InputLabelProps:{shrink:!1},size:"small",variant:"outlined",margin:"none",InputProps:{style:{fontFamily:"DM Sans",fontSize:13},endAdornment:l.a.createElement(z.a,{position:"end"},l.a.createElement("div",{style:{fontFamily:"DM Sans",color:"#98A1B2",fontSize:13}},m)),inputMode:"numeric",pattern:"[0-9]*",onChange:function(e){e.target.value=e.target.value.replace(/\D/g,""),t.onChange(e)}}},t))}}))},Y=function(e){var t=e.label,a=e.defaultValue,n=e.width,r=e.options,i=e.name,o=e.control,m=O();return l.a.createElement("div",{style:{marginTop:23,width:n}},l.a.createElement(d.a,{variant:"subtitle1",className:m.label},t),l.a.createElement(w.a,{name:i,control:o,defaultValue:a,render:function(e){var t=e.field;return l.a.createElement(M.a,{id:"outlined-select-".concat(i),className:m.textField,select:!0,size:"small",variant:"outlined",InputLabelProps:{shrink:!1},margin:"none",InputProps:Object(T.a)({style:{fontFamily:"DM Sans",fontSize:13}},t),style:{width:"100%"}},r.map(function(e){return l.a.createElement(N.a,{key:e.value,value:e.value,style:{fontSize:13,fontFamily:"DM Sans"}},e.label)}))}}))},U=function(e){var t=e.label,a=e.width,n=e.name,r=e.control,i=O();return l.a.createElement("div",{style:{marginTop:23,width:a}},l.a.createElement(d.a,{variant:"subtitle1",className:i.label},t),l.a.createElement(w.a,{name:n,control:r,render:function(e){var t=e.field;return l.a.createElement(I.a,Object.assign({style:{width:200,height:38,marginLeft:15},inputStyle:{fontSize:"13px",fontFamily:"DM Sans"}},t,{format:"MM/DD/YYYY"}))}}))},J=a(780),X=a(421),G=a.n(X),Q=function(){var e=Object(n.useState)([{name:"",percentage:0}]),t=Object(C.a)(e,2),a=t[0],r=t[1],i=function(){if(a.length<5){o(a);var e=[].concat(Object(S.a)(a),[{name:"",percentage:0}]);r(e)}},o=function(e){localStorage.setItem("banks",JSON.stringify(e))};return l.a.createElement("div",{style:{marginBottom:20}},l.a.createElement(B.a,null,a.map(function(e,t){return l.a.createElement("div",{key:t,style:{display:"flex",alignItems:"center"}},l.a.createElement(B.a.Item,{style:{marginRight:"20px"}},l.a.createElement(P,{label:"Bank Name",placeholder:"Enter Bank Name",InputComponent:k.a,width:400,onChange:function(e){return function(e,t){var n=a.map(function(a,n){return n===e?Object(T.a)({},a,{name:t}):a});r(n),o(n)}(t,e.target.value)}})),l.a.createElement(B.a.Item,{style:{marginBottom:0,marginTop:22,marginRight:"20px"}},l.a.createElement(L.a,{style:{width:"200px"},min:0,max:100,value:e.percentage,onChange:function(e){return function(e,t){var n=a.map(function(a,n){return n===e?Object(T.a)({},a,{percentage:t}):a});r(n),o(n)}(t,e)}})),l.a.createElement(R.a,{percent:e.percentage,status:100===a.reduce(function(e,t){return e+t.percentage},0)?"success":"active",showInfo:!1,style:{width:200,marginLeft:"10px",marginTop:"22px",marginRight:"20px"}}),l.a.createElement(j.a,{disabled:1===a.length,icon:l.a.createElement(J.a,null),onClick:function(){return function(e){var t=a.filter(function(t,a){return a!==e});o(t),r(t)}(t)},style:{marginTop:22}}),t===a.length-1?l.a.createElement("img",{src:G.a,alt:"Add Bank",onClick:i,style:{cursor:"pointer",marginLeft:"10px",marginTop:"22px"}}):null)})))},Z=a(424),q=a(122),K=a(123),V=K.a.div(g||(g=Object(q.a)(["\n  width: 100%;\n  height: fit-content; \n  background-color: #f9fafa;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px;\n"]))),$=K.a.div(p||(p=Object(q.a)(["\nfont-family: 'DM Sans', sans-serif;\n  margin-top: 60px;\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n"]))),_=K.a.div(f||(f=Object(q.a)(["\nfont-family: 'DM Sans', sans-serif;\ncolor: #475466;\nfont-size: 16px;\nfont-style: normal;\nfont-weight: 700;\nline-height: normal;\nmargin-top: 40px;\n"]))),ee=K.a.div(E||(E=Object(q.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),te=K.a.div(h||(h=Object(q.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 40px; \n"]))),ae=Object(D.a)(function(e){return{content:{width:"60%",padding:e.spacing(2),height:"100%",marginTop:40,justifyContent:"flex-start",textAlign:"left"},textField:{backgroundColor:"white",marginLeft:15},label:{fontFamily:"DM Sans",color:"#98A1B2",fontWeight:"700",fontSize:14}}}),ne=[{value:"USD",label:"USD"},{value:"EUR",label:"EUR"},{value:"AED",label:"AED"}],le=function(){var e=Object(Z.useHistory)(),t=ae(),a=Object(w.b)(),n=a.control,r=a.handleSubmit,i=function(e,t){};return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null),l.a.createElement(V,null,l.a.createElement(A.a,{className:t.content},l.a.createElement("form",{onSubmit:r(function(t){localStorage.setItem("formData",JSON.stringify(t)),e.push("/debtInfo")})},l.a.createElement($,null,"Create New Debt"),l.a.createElement(_,null,"Debt information"),l.a.createElement(ee,null,l.a.createElement("div",{style:{marginRight:115}},l.a.createElement(H,{label:"Facility Name",placeholder:"Enter Facility Name",width:"340px",name:"facilityName",control:n})),l.a.createElement(H,{label:"Facility Description",placeholder:"Enter Facility Description",width:"340px",name:"facilityDescription",control:n})),l.a.createElement(ee,null,l.a.createElement("div",{style:{marginRight:47}},l.a.createElement(W,{label:"Facility Amount",placeholder:"Enter Amount",width:"340px",name:"facilityAmount",control:n})),l.a.createElement(Y,{label:"Currency",width:"120px",options:ne,name:"currency",control:n})),l.a.createElement(te,null,l.a.createElement(U,{label:"Signing/Issue Date",width:"200px",onChange:i,name:"issueDate",control:n}),l.a.createElement(W,{label:"Tenure",placeholder:"Enter Tenure",width:"200px",name:"tenure",control:n,descr:"month"}),l.a.createElement(W,{label:"Margin",placeholder:"Enter Margin",width:"200px",name:"margin",control:n,descr:"%"}),l.a.createElement(H,{label:"Interest Type",placeholder:"Enter Interest Type",width:"200px",name:"interestType",control:n})),l.a.createElement(te,null,l.a.createElement(H,{label:"Benchmark",placeholder:"Enter Benchmark",width:"200px",name:"benchmark",control:n}),l.a.createElement(W,{label:"Benchmark months",placeholder:"Enter Benchmark ",width:"200px",name:"benchmarkMonths",descr:"month",control:n}),l.a.createElement(W,{label:"Term Holidays",placeholder:"Enter Term Holidays",width:"200px",name:"termHolidays",descr:"days",control:n})),l.a.createElement(te,null,l.a.createElement(U,{label:"Repayment Start date",width:"200px",onChange:i,name:"repaymentStartDate",control:n}),l.a.createElement(H,{label:"Repayment Terms",placeholder:"Enter Repayment Terms",width:"200px",name:"repaymentTerms",control:n}),l.a.createElement(H,{label:"Debt Format",placeholder:"Enter Debt Format",width:"200px",name:"dabtFormat",control:n}),l.a.createElement(H,{label:"Format description",placeholder:"Enter Format description",width:"200px",name:"formatDescription",control:n})),l.a.createElement(F.a,{style:{marginTop:45,marginBottom:45,backgroundColor:"rgba(204, 210, 242, 0.60)"}}),l.a.createElement(_,null,"Loan servicing"),l.a.createElement(te,null,l.a.createElement(W,{label:"Commitment Fee",placeholder:"Enter Commitment Fee",width:"200px",name:"commitmentFee",control:n,descr:"%"}),l.a.createElement(W,{label:"Commitment Holidays",placeholder:"Enter days number",width:"200px",name:"commitmentHolidays",descr:"days",control:n}),l.a.createElement(W,{label:"Arrangement Fee",placeholder:"Enter Arrangement Fee",width:"200px",name:"ArrangementFee",control:n,descr:"%"}),l.a.createElement(U,{label:"Arrangement Fee Date",width:"200px",onChange:i,name:"ArrangementFeeDate",control:n})),l.a.createElement(F.a,{style:{marginTop:45,marginBottom:45,backgroundColor:"rgba(204, 210, 242, 0.60)"}}),l.a.createElement(_,null,"One-time payments"),l.a.createElement(te,null,l.a.createElement(H,{label:"Legal Fees",placeholder:"Enter Legal Fees",width:"200px",name:"legalFees",control:n}),l.a.createElement(U,{label:"Legal Fee Date",width:"200px",onChange:i,name:"legalFeeDate",control:n}),l.a.createElement(H,{label:"Agency Fees",placeholder:"Enter Agency Fees",width:"200px",name:"AgencyFees",control:n}),l.a.createElement(H,{label:"Fee Terms",placeholder:"Enter Fee Terms",width:"200px",name:"feeTerms",control:n})),l.a.createElement(F.a,{style:{marginTop:45,marginBottom:45,backgroundColor:"rgba(204, 210, 242, 0.60)"}}),l.a.createElement(_,null,"Additional Information"),l.a.createElement(ee,null,l.a.createElement("div",{style:{marginRight:110}},l.a.createElement(H,{label:"Allocation",placeholder:"Enter Allocation",width:"340px",marginRight:"130px",name:"allocation",control:n})),l.a.createElement(H,{label:"Project",placeholder:"Enter Project",width:"340px",name:"project",control:n})),l.a.createElement(ee,null,l.a.createElement("div",{style:{marginRight:55}},l.a.createElement(H,{label:"Maturity Description",placeholder:"Enter Description",width:"200px",marginRight:"60px",name:"maturityDescription",control:n})),l.a.createElement(W,{label:"Benchmark LIBOR",placeholder:"Enter LIBOR",width:"200px",name:"benchmarkLibor",control:n,descr:"%"})),l.a.createElement(ee,null,l.a.createElement(W,{label:"Availability Period",placeholder:"Enter Period",width:"200px",name:"availabilityPeriod",control:n,descr:"years"})),l.a.createElement(F.a,{style:{marginTop:45,marginBottom:45,backgroundColor:"rgba(204, 210, 242, 0.60)"}}),l.a.createElement(_,null,"Lender-Wise Distribution Details"),l.a.createElement(ee,null),l.a.createElement(Q,null),l.a.createElement(ee,{style:{marginBottom:50,justifyContent:"end"}},l.a.createElement("button",{style:{background:"#2563EB",borderRadius:4,border:0,color:"white",height:40,padding:"0 30px"},type:"submit"},"Save"))))))},re=a(425),ie=a.n(re),oe=a(768),me=a(776),ce=a(441),se=a(241),de=a(197),ue=K.a.div(y||(y=Object(q.a)(["\nfont-family: DM Sans;\nfont-size: 32px;\nfont-style: normal;\nfont-weight: 700;\nline-height: normal;\n"]))),ge=K.a.div(b||(b=Object(q.a)(["\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-gap: 40px; \n"]))),pe=K.a.div(v||(v=Object(q.a)(["\nfont-family: DM Sans;\ncolor : #98A1B2;\nfont-size: 24px;\nfont-style: normal;\nfont-weight: 700;\nline-height: normal;\n"]))),fe=["#217AD1","#1D6AB8","#2D9CDB","#6DAEEE","#2688EB"],Ee=Math.PI/180,he=function(e){var t=e.cx,a=e.cy,n=e.midAngle,r=e.innerRadius,i=e.outerRadius,o=e.percent,m=(e.index,r+.5*(i-r)),c=t+m*Math.cos(-n*Ee),s=a+m*Math.sin(-n*Ee);return l.a.createElement("text",{x:c,y:s,fill:"white",textAnchor:c>t?"start":"end",dominantBaseline:"central"},"".concat((100*o).toFixed(0),"%"))},ye=Object(D.a)(function(e){return{firstBlock:{backgroundColor:"white",borderRadius:5,width:"80%",padding:e.spacing(2),height:"315px",marginTop:40,boxShadow:"0px 0px 4px 0px rgba(45, 156, 219, 0.10)",marginBottom:90},secondBlock:{backgroundColor:"white",borderRadius:5,width:"80%",padding:e.spacing(2),height:"auto",marginTop:40,boxShadow:"0px 0px 4px 0px rgba(45, 156, 219, 0.10)",marginBottom:90},textField:{backgroundColor:"white",marginLeft:15},label:{fontFamily:"DM Sans",color:"#98A1B2",fontWeight:"700",fontSize:14,paddingRight:23},description:{fontFamily:"DM Sans",fontWeight:"400",fontSize:14,marginRight:45},fetDescription:{fontFamily:"DM Sans",fontWeight:"700",fontSize:16,color:"#475466"}}}),be=function(){var e=JSON.parse(localStorage.getItem("formData")),t=JSON.parse(localStorage.getItem("banks")),a=function(e){var t=e.title,a=e.value,n=e.additionalText,r=void 0===n?"":n;return l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.a.createElement(d.a,{variant:"subtitle1",className:o.label},t),l.a.createElement(d.a,{variant:"subtitle1",className:o.description},a+" "+r))};function n(e){return ie()(e).format("DD-MMM-YYYY")}var r=t.map(function(t){return{key:t.name,name:t.name,percent:t.percentage,amount:t.percentage/100*e.facilityAmount}});var i=function(e){return e.map(function(e,t){return{name:e.name,value:+e.percentage}})}(t),o=ye();function m(e){var t=parseFloat(e);if(isNaN(t))return"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e";var a=t.toFixed(2).toString().split(".");return a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),"$".concat(a.join("."))}return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null),l.a.createElement(V,{style:{height:"100%",flexDirection:"column",marginBottom:0,justifyContent:"flex-start"}},l.a.createElement(A.a,{className:o.firstBlock},l.a.createElement(ge,null,l.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",marginLeft:60,marginTop:55}},l.a.createElement(ue,null,function(e,t){var a="EUR"===t?"\u20ac":"$";return a+(parseFloat(e)/1e6).toLocaleString(void 0,{currency:t,minimumFractionDigits:0,maximumFractionDigits:0}).replace(a,"")+"m"}(e.facilityAmount,e.currency)+" Term Loan Financing"),l.a.createElement("div",null,l.a.createElement(ee,{style:{marginTop:26}},l.a.createElement(a,{title:"Facility Description",value:e.facilityDescription}),l.a.createElement(a,{title:"Currency",value:e.currency})),l.a.createElement(ee,{style:{marginTop:26}},l.a.createElement(a,{title:"Signing/Issue Date",value:n(e.issueDate)}),l.a.createElement(a,{title:"Tenure",value:e.tenure,additionalText:"months"})),l.a.createElement(ee,{style:{marginTop:26}},l.a.createElement(a,{title:"Allocation",value:e.allocation}),l.a.createElement(a,{title:"Project",value:e.project}),l.a.createElement(a,{title:"Maturity Description",value:e.maturityDescription})))),l.a.createElement("div",null,l.a.createElement(R.a,{size:230,strokeWidth:10,type:"circle",percent:95,format:function(t){return l.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.a.createElement("span",{style:{fontSize:"14px",fontWeight:700,color:"#98A1B2",fontFamily:"DM Sans"}},"Facility Amount"),l.a.createElement("span",{style:{fontSize:"16px",fontWeight:700,color:"#2563EB",fontFamily:"DM Sans"}}," ",m(e.facilityAmount-.05*e.facilityAmount)),l.a.createElement("span",{style:{fontSize:"12px",fontWeight:400,color:"#98A1B2",fontFamily:"DM Sans"}},"(As per the utilized limit)"))}}),l.a.createElement(ee,null,l.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginLeft:50,marginTop:20,alignItems:"center"}},l.a.createElement(d.a,{variant:"subtitle1",className:o.label},"Facility Amount"),l.a.createElement(d.a,{variant:"subtitle1",className:o.fetDescription},m(e.facilityAmount)))),l.a.createElement("span",{style:{fontSize:"14px",fontWeight:400,color:"#98A1B2",fontFamily:"DM Sans"}},"(As per the facility agreement)")))),l.a.createElement(pe,null,"Lender-Wise Distribution Details"),l.a.createElement(A.a,{className:o.secondBlock},l.a.createElement(te,{style:{gridTemplateColumns:"1fr 1fr 1fr",marginTop:50,marginLeft:65}},l.a.createElement(a,{title:"Margin",value:e.margin,additionalText:"%"}),l.a.createElement(a,{title:"Interest Type",value:e.interestType}),l.a.createElement(a,{title:"Average Life (Years)",value:e.availabilityPeriod})),l.a.createElement(te,{style:{gridTemplateColumns:"1fr 1fr 1fr",marginTop:50,marginLeft:65}},l.a.createElement(a,{title:"Discounted Cashflow",value:"520.376"}),l.a.createElement(a,{title:"Availability Period",value:e.availabilityPeriod,additionalText:"years"})),l.a.createElement(te,{style:{gridTemplateColumns:"1fr 1fr 1fr",marginTop:50,marginLeft:65}},l.a.createElement(a,{title:"Goal Seek IRR",value:"3.17%"}),l.a.createElement(a,{title:"Effective Spread",value:"1.17%"})),l.a.createElement(te,{style:{gridTemplateColumns:"1fr 1fr 1fr",marginTop:50,marginLeft:65}},l.a.createElement(a,{title:"Benchmark",value:e.benchmark}),l.a.createElement(a,{title:"Benchmark months",value:e.benchmarkMonths,additionalText:"months"}),l.a.createElement(a,{title:"Term Holidays",value:e.termHolidays,additionalText:"days"})),l.a.createElement(te,{style:{gridTemplateColumns:"1fr 1fr 1fr",marginTop:50,marginLeft:65}},l.a.createElement(a,{title:"Repayment Start date",value:n(e.repaymentStartDate)}),l.a.createElement(a,{title:"Repayment Terms",value:e.repaymentTerms})),l.a.createElement(te,{style:{gridTemplateColumns:"1fr 1fr 1fr",marginTop:50,marginLeft:65}},l.a.createElement(a,{title:"Debt Format",value:e.dabtFormat,additionalText:"%"}),l.a.createElement(a,{title:"Format description",value:e.formatDescription})),l.a.createElement(F.a,{style:{marginTop:20,backgroundColor:"rgba(204, 210, 242, 0.60)"}}),l.a.createElement(te,null,l.a.createElement(_,{style:{marginTop:10}},"Loan servicing")),l.a.createElement(te,{style:{gridTemplateColumns:"1fr 1fr 1fr",marginTop:50,marginLeft:65}},l.a.createElement(a,{title:"Commitment Fee",value:e.commitmentFee,additionalText:"%"}),l.a.createElement(a,{title:"Commitment Holidays",value:e.commitmentHolidays,additionalText:"days"})),l.a.createElement(te,{style:{gridTemplateColumns:"1fr 1fr 1fr",marginTop:50,marginLeft:65}},l.a.createElement(a,{title:"Arrangement Fee",value:e.ArrangementFee,additionalText:"%"}),l.a.createElement(a,{title:"Arrangement Fee Date",value:e.ArrangementFeeDate})),l.a.createElement(F.a,{style:{marginTop:20,backgroundColor:"rgba(204, 210, 242, 0.60)"}}),l.a.createElement(te,null,l.a.createElement(_,{style:{marginTop:10}},"One-time payments")),l.a.createElement(te,{style:{gridTemplateColumns:"1fr 1fr 1fr",marginTop:50,marginLeft:65}},l.a.createElement(a,{title:"Legal Fees",value:e.legalFees}),l.a.createElement(a,{title:"Legal Fee Date",value:n(e.legalFeeDate)})),l.a.createElement(te,{style:{gridTemplateColumns:"1fr 1fr 1fr",marginTop:50,marginLeft:65}},l.a.createElement(a,{title:"Agency Fees",value:e.AgencyFees}),l.a.createElement(a,{title:"Agency Fee Terms",value:e.commitmentHolidays}))),l.a.createElement(pe,null,"Lender-Wise Distribution Details"),l.a.createElement(A.a,{className:o.secondBlock},l.a.createElement(te,{style:{gridTemplateColumns:"2fr 1fr",marginTop:50,marginLeft:65}},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-end"}},l.a.createElement(oe.a,{columns:[{title:"Bank name",dataIndex:"name",key:"name"},{title:"Percent",dataIndex:"percent",key:"percent"},{title:"Amount",dataIndex:"amount",key:"amount"}],pagination:{hideOnSinglePage:!0},dataSource:r}),l.a.createElement("div",{style:{fontSize:16,fontFamily:"DM Sans",fontWeight:500,color:"#2563EB",marginBottom:60,marginTop:20,marginLeft:370}},e.facilityAmount)),l.a.createElement(me.a,{width:400,height:200},l.a.createElement(ce.a,{data:i,cx:"50%",cy:"50%",labelLine:!1,label:he,outerRadius:80,fill:"#8884d8",dataKey:"value"},i.map(function(e,t){return l.a.createElement(se.a,{key:"cell-".concat(t),fill:fe[t%fe.length]})})),l.a.createElement(de.a,null))))))};var ve=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(m.Switch,null,l.a.createElement(m.Route,{exact:!0,path:"/",component:le}),l.a.createElement(m.Route,{path:"/debtInfo",component:be}))))};i.a.render(l.a.createElement(ve,null),document.getElementById("root"))}},[[461,1,2]]]);
//# sourceMappingURL=main.e6f1777f.chunk.js.map