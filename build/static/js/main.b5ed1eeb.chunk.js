(this["webpackJsonpcrazy-panda-test"]=this["webpackJsonpcrazy-panda-test"]||[]).push([[0],{14:function(e,t,r){},16:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(9),s=r.n(a),c=r(2),o=r(4),d=r(5),i=r(7),h=r(6),u=r(3),l=(r(14),function(e,t){for(var r=[],n=0,a=e.length;n<a;n+=t){var s=e.slice(n,n+t);r.push(s)}return r}),j=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"increment",n=e.sort((function(e,n){var a;return e[t]>n[t]&&(a=1),e[t]===n[t]&&(a=0),e[t]<n[t]&&(a=-1),"increment"===r?a:-1*a}));return"height"===t||"mass"===t?n.sort((function(e,n){return"increment"===r?e[t]-n[t]:n[t]-e[t]})):n},b=function(e,t){return e.filter((function(e){return Object.values(e).join("").includes(t)}))},p=r(0),m=50,f=function(e){Object(i.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={chunkedData:[],tablePage:0,headers:{name:"unsorted",gender:"unsorted",birth_year:"unsorted",height:"unsorted",mass:"unsorted",skin_color:"unsorted",hair_color:"unsorted",eye_color:"unsorted"},search:""},e.handleSearchChange=function(t){var r=t.target.value,n=Object(c.a)(e.props.data);if(Object.values(e.state.headers).every((function(e){return"unsorted"===e})))e.setState({search:r,chunkedData:l(b(e.props.data,r),m)});else{var a={};for(var s in e.state.headers)"unsorted"!==e.state.headers[s]&&(a={name:s,sortType:e.state.headers[s]});e.setState({search:r,chunkedData:l(b(j(n,a.name,a.sortType),r),m)})}},e.handleSort=function(t){console.log(e.props.data);var r=Object(c.a)(e.props.data);if(""===e.state.search)switch(e.state.headers[t]){case"unsorted":e.setState({chunkedData:l(j(r,t),m),headers:Object(u.a)({name:"unsorted",gender:"unsorted",birth_year:"unsorted",height:"unsorted",mass:"unsorted",skin_color:"unsorted",hair_color:"unsorted",eye_color:"unsorted"},t,"increment")});break;case"increment":e.setState({chunkedData:l(j(r,t,"decrement"),m),headers:Object(u.a)({name:"unsorted",gender:"unsorted",birth_year:"unsorted",height:"unsorted",mass:"unsorted",skin_color:"unsorted",hair_color:"unsorted",eye_color:"unsorted"},t,"decrement")});break;case"decrement":e.setState({chunkedData:l(e.props.data,m),headers:{name:"unsorted",gender:"unsorted",birth_year:"unsorted",height:"unsorted",mass:"unsorted",skin_color:"unsorted",hair_color:"unsorted",eye_color:"unsorted"}})}else{var n=b(r,e.state.search);switch(e.state.headers[t]){case"unsorted":e.setState({chunkedData:l(j(n,t),m),headers:Object(u.a)({name:"unsorted",gender:"unsorted",birth_year:"unsorted",height:"unsorted",mass:"unsorted",skin_color:"unsorted",hair_color:"unsorted",eye_color:"unsorted"},t,"increment")});break;case"increment":e.setState({chunkedData:l(j(n,t,"decrement"),m),headers:Object(u.a)({name:"unsorted",gender:"unsorted",birth_year:"unsorted",height:"unsorted",mass:"unsorted",skin_color:"unsorted",hair_color:"unsorted",eye_color:"unsorted"},t,"decrement")});break;case"decrement":e.setState({chunkedData:l(b(e.props.data,e.state.search),m),headers:{name:"unsorted",gender:"unsorted",birth_year:"unsorted",height:"unsorted",mass:"unsorted",skin_color:"unsorted",hair_color:"unsorted",eye_color:"unsorted"}})}}},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.setState({chunkedData:l(this.props.data,m)},(function(){return console.log(e.state.chunkedData)}))}},{key:"render",value:function(){var e=this,t=this.state,r=t.tablePage,n=t.chunkedData,a=t.headers,s=t.search;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("label",{htmlFor:"search",style:{display:"block"},children:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0435"}),Object(p.jsx)("input",{type:"text",name:"search",id:"search",value:s,onChange:this.handleSearchChange}),Object(p.jsx)("div",{className:"wrapper",children:Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{className:"unhover",children:"#"}),Object.keys(this.state.headers).map((function(t){return Object(p.jsxs)("th",{onClick:function(){return e.handleSort(t)},className:"increment"===e.state.headers[t]?"increment":"decrement"===e.state.headers[t]?"decrement":"",children:[Object(p.jsx)("div",{children:t}),Object(p.jsx)("div",{style:{fontWeight:"normal",fontSize:"10px"},children:a[t]})]})}))]})}),0===n.length?"\u041d\u0435\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445":Object(p.jsx)("tbody",{children:n[r].map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t+1+r*m}),Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:e.gender}),Object(p.jsx)("td",{children:e.birth_year}),Object(p.jsx)("td",{children:e.height}),Object(p.jsx)("td",{children:e.mass}),Object(p.jsx)("td",{children:e.skin_color}),Object(p.jsx)("td",{children:e.hair_color}),Object(p.jsx)("td",{children:e.eye_color})]})}))})]})}),Object(p.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"10px"},children:0===n.length?"\u041d\u0435\u0442 \u043d\u0438 \u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b":n.map((function(t,r){return Object(p.jsx)("button",{className:e.state.tablePage===r?"increment":"",onClick:function(){return e.setState({tablePage:r})},children:r+1})}))})]})}}]),r}(n.Component),O=(r(16),{name:"",gender:"",birth_year:"",height:"",mass:"",skin_color:"",hair_color:"",eye_color:""}),g=function(e){Object(i.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={people:[],universities:[],isAllDataFetched:!1},e.fetchPeopleStarWars=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState((function(e){var r=e.people;return r.push.apply(r,Object(c.a)(t.results)),{people:r}}),(function(){null!==t.next?e.fetchPeopleStarWars(t.next):e.setState({isAllDataFetched:!0})})),t})).catch((function(e){console.log(e.response)}))},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.fetchPeopleStarWars("https://swapi.dev/api/people")}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Table with star wars api data used"}),this.state.isAllDataFetched?Object(p.jsx)(f,{data:(e=this.state.people,t=O,e.map((function(e){var r={};for(var n in e)void 0!==t[n]&&(r[n]=e[n]);return r})))}):Object(p.jsx)("h2",{children:"Loading Data..."})]});var e,t}}]),r}(n.Component);s.a.render(Object(p.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b5ed1eeb.chunk.js.map