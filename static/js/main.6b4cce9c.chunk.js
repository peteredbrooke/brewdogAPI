(this.webpackJsonpbrewdogapi=this.webpackJsonpbrewdogapi||[]).push([[0],[,,,function(e,t,a){e.exports={search:"SearchBar_search__kn1gi",searchBar:"SearchBar_searchBar__tcqZ3",searchText:"SearchBar_searchText__1Gogz",slidecontainer:"SearchBar_slidecontainer__dDqaL",slider:"SearchBar_slider__2OMp-"}},function(e,t,a){e.exports={card:"Card_card__1Zx3W",cardTitle:"Card_cardTitle__3am50",textSpace:"Card_textSpace__c-EhU",beerImage:"Card_beerImage__26ts8"}},,function(e,t,a){e.exports={wrapper:"App_wrapper__2jgLW",content:"App_content__3wNTG"}},,function(e,t,a){e.exports={NavBar:"NavBar_NavBar__3dOFw"}},function(e,t,a){e.exports={btn:"Button_btn__LLZjB"}},function(e,t,a){e.exports={cardlist:"CardList_cardlist__3AX0U"}},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(7),s=a.n(c),i=(a(15),a(2)),o=a(6),u=a.n(o),l=a(3),d=a.n(l),j=a(0),p=function(e){var t=e.updateSearchText,a=e.updateBeerABV,r=Object(j.jsx)("input",{type:"text",placeholder:"Search....",onInput:function(e){return t(e.target.value)},className:d.a.searchBar}),c=Object(n.useState)("5"),s=Object(i.a)(c,2),o=s[0],u=s[1],l=Object(j.jsx)("input",{type:"range",min:"1",max:"10",onMouseUp:function(e){return u(e.target.value),console.log("setting level"+e.target.value)},onInput:function(e){return a(e.target.value)},defaultValue:o,className:d.a.slider});return Object(j.jsxs)("div",{className:d.a.search,children:[r,Object(j.jsxs)("p",{className:d.a.searchText,children:["Set-  ",o+" Abv %"]}),l]})},b=a(8),h=a.n(b),x=(a(9),function(e){var t=e.updateSearchText,a=e.updateBeerABV;return Object(j.jsxs)("div",{className:h.a.NavBar,children:[Object(j.jsx)("h1",{children:"BREWDOG API"}),Object(j.jsx)(p,{updateSearchText:t,updateBeerABV:a})]})}),_=(a(17),a(10)),f=a.n(_),v=a(4),O=a.n(v),m=function(e){var t=e.beer,a=t.name,n=t.tagline,r=t.description,c=t.abv,s=t.image;return Object(j.jsxs)("div",{className:O.a.card,children:[Object(j.jsx)("img",{className:O.a.beerImage,src:s}),Object(j.jsxs)("div",{className:O.a.cardTitle,children:[Object(j.jsx)("h1",{children:a}),Object(j.jsxs)("h3",{children:['"',n,'"']})]}),Object(j.jsx)("div",{className:O.a.textSpace,children:Object(j.jsx)("p",{children:r})}),Object(j.jsxs)("h4",{children:[" ABV ",c," %"]})]})},g=function(e){var t=e.beers;return Object(j.jsx)("div",{className:f.a.cardlist,children:t.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(m,{beer:e})},e.id)}))})},B=function(e){var t=e.beers,a=e.allBeers,n=t.length>0?Object(j.jsx)(g,{beers:t}):Object(j.jsx)(g,{beers:a});return Object(j.jsx)("div",{children:n})};var S=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),s=Object(i.a)(c,2),o=s[0],l=s[1];Object(n.useEffect)((function(){p(),h(),b()}),[0]);var d=function(e){return{name:e.name,tagline:e.tagline,description:e.description,abv:e.abv,image:e.image_url}},p=function(e){fetch("https://api.punkapi.com/v2/beers?beer_name=".concat(e)).then((function(e){return e.json()})).then((function(t){if(e){var a=t.map(d);r(a),console.log(t)}}))},b=function(e){fetch("https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_lt=".concat(e)).then((function(e){return e.json()})).then((function(t){if(e){var a=t.map(d);r(a),console.log(t)}}))},h=function(){fetch("https://api.punkapi.com/v2/beers").then((function(e){return e.json()})).then((function(e){var t=e.map(d);l(t),console.log(e)}))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:u.a.wrapper,children:[Object(j.jsx)(x,{updateSearchText:p,updateBeerABV:b}),Object(j.jsx)("div",{className:u.a.content,children:Object(j.jsx)(B,{beers:a,allBeers:o})})]})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),N()}],[[18,1,2]]]);
//# sourceMappingURL=main.6b4cce9c.chunk.js.map