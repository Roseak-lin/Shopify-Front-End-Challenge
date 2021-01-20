(this["webpackJsonpshopify-app-challenge"]=this["webpackJsonpshopify-app-challenge"]||[]).push([[0],{24:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(2),a=n.n(s),o=n(17),c=n.n(o),r=(n(24),n(3)),l=n(4),d=n(7),h=n(6),m=n(5),u=n(18),j=n.n(u);function p(e){return Object(i.jsxs)("div",{id:"sb",children:[Object(i.jsx)("h4",{children:"Movie Title"}),Object(i.jsx)("input",{id:"textfield",onChange:e.onChange,style:{borderRadius:"8px"}})]})}var b=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.nominations,n=this.props.results.map((function(n,s){return Object(i.jsxs)("div",{className:"results-card",children:[n.Title," (",n.Year,")"," ",Object(i.jsx)("button",{disabled:t.some((function(e){return e[2]==n.imdbID})),onClick:function(){return e.props.onClick(n.Title,n.Year,n.imdbID)},className:"nominate",children:"Nominate"})]},s)}));return Object(i.jsx)("div",{className:"lower-half-child",style:{marginRight:"5%"},children:Object(i.jsxs)("div",{className:"lower-half-container",children:[Object(i.jsxs)("h3",{children:["Results for",""===this.props.movieName?"":' "'+this.props.movieName+'"']}),Object(i.jsx)("div",{id:"searchResults-list",children:n})]})})}}]),n}(a.a.Component),v=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.nominations.map((function(t,n){return Object(i.jsxs)("div",{className:"nomination-card",children:[t[0]," (",t[1],")"," ",Object(i.jsx)("button",{onClick:function(){return e.props.onClick(n)},className:"remove",children:"Remove"})]},n)}));return Object(i.jsx)("div",{className:"lower-half-child",children:Object(i.jsxs)("div",{className:"lower-half-container",children:[Object(i.jsx)("h3",{children:"Nominations"}),Object(i.jsx)("div",{id:"nomination-list",children:t})]})})}}]),n}(a.a.Component),O=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{id:"popup",children:Object(i.jsxs)("div",{id:"popup-text",children:["You have already nominated 5 films! ",Object(i.jsx)("span",{id:"close",children:"\xd7"})]})})}}]),n}(a.a.Component),f=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).handleChange=i.handleChange.bind(Object(d.a)(i)),i.addNomination=i.addNomination.bind(Object(d.a)(i)),i.removeNomination=i.removeNomination.bind(Object(d.a)(i)),i.state={movieName:"",searchResults:[],nominations:null===localStorage.getItem("Nominations")?[]:JSON.parse(localStorage.getItem("Nominations"))},i}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=this;this.setState({movieName:e.target.value,searchResults:[]});var n="https://www.omdbapi.com/?s="+e.target.value+"&apikey=7b7631bb";j.a.get(n).then((function(e){var n=e.data.Search,i=[];if(void 0!==n)for(var s=0;s<n.length&&i.length<5;s++)i.push(n[s]);t.setState({searchResults:i})})).catch((function(e){return console.log(e)}))}},{key:"addNomination",value:function(e,t,n){var i=this,s=this.state.nominations.slice();this.state.nominations.some((function(e){return e[2]===n}))||(5!==s.length?(s.push([e,t,n]),this.setState({nominations:s},(function(){var e=document.getElementsByClassName("nomination-card")[i.state.nominations.length-1];e.classList.add("add-card"),setTimeout((function(){e.classList.remove("add-card")}),100)})),localStorage.setItem("Nominations",JSON.stringify(s))):document.getElementById("popup").style.display="block")}},{key:"removeNomination",value:function(e){var t=this,n=this.state.nominations.slice(),i=document.getElementsByClassName("nomination-card")[e];i.classList.add("remove-card"),n.splice(e,1),setTimeout((function(){t.setState({nominations:n},(function(){i.classList.remove("remove-card"),localStorage.setItem("Nominations",JSON.stringify(t.state.nominations))}))}),100)}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{id:"title",children:Object(i.jsx)("h1",{children:"The Shoppies"})}),Object(i.jsx)("div",{id:"searchbar",children:Object(i.jsx)(p,{onChange:this.handleChange})}),Object(i.jsxs)("div",{id:"lower-half",children:[Object(i.jsx)(b,{movieName:this.state.movieName,results:this.state.searchResults,onClick:this.addNomination,nominations:this.state.nominations,listIsFull:5===this.state.nominations.length}),Object(i.jsx)(v,{nominations:this.state.nominations,onClick:this.removeNomination})]}),Object(i.jsx)(O,{})]})}}]),n}(a.a.Component);c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),window.onclick=function(e){e.target===document.getElementById("popup")&&(document.getElementById("popup").style.display="none")},document.getElementById("close").onclick=function(){document.getElementById("popup").style.display="none"}}},[[43,1,2]]]);
//# sourceMappingURL=main.c106232c.chunk.js.map