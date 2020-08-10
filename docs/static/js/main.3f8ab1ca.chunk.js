(this.webpackJsonp01=this.webpackJsonp01||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/human.af8d24e5.png"},14:function(e,a,t){e.exports=t.p+"static/media/alien.8756e556.png"},22:function(e,a,t){e.exports=t.p+"static/media/Rick_and_Morty_-_logo_(English).75509f2e.png"},23:function(e,a,t){e.exports=t.p+"static/media/spaceship.5b249f9f.png"},25:function(e,a,t){e.exports=t.p+"static/media/rip.c92f4174.png"},26:function(e,a,t){e.exports=t.p+"static/media/NotFound.63565465.jpg"},27:function(e,a,t){e.exports=t(39)},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),i=t.n(c),s=t(11),l=t(5),m=t(6),u=t(10),o=t(8),h=t(7),p=t(22),d=t.n(p),f=t(23),g=t.n(f),E=function(e){Object(o.a)(t,e);var a=Object(h.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("img",{className:"header__animation",src:g.a,alt:"spaceship"}),r.a.createElement("img",{className:"header__img",src:d.a,alt:"Rick and Morty"}))}}]),t}(r.a.Component),O=t(13),b=t.n(O),C=t(14),y=t.n(C),_=function(e){Object(o.a)(t,e);var a=Object(h.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"characterCard"},r.a.createElement("img",{className:"characterCard__img",src:this.props.item.image,alt:this.props.item.name}),r.a.createElement("h2",{className:"characterCard__name"},this.props.item.name),r.a.createElement("img",{className:"characterCard__species",src:"Human"===this.props.item.species?[b.a]:[y.a],alt:"Human"===this.props.item.species?"Human":"Alien"}))}}]),t}(r.a.Component),N=function(e){var a=e.list.sort((function(e,a){return e.name<a.name?-1:e.name>a.name?1:0})).map((function(e,a){return r.a.createElement("li",{className:"characterCard_container",key:e.id},r.a.createElement(s.b,{to:"/character/".concat(e.id)},r.a.createElement(_,{item:e})))}));return r.a.createElement("div",null,0!==a.length?r.a.createElement("ul",{className:"characters__container"},a):r.a.createElement("p",{className:"searchAlert"},'There are no characters matching the search term "',e.filterSearch,'"'))},k=t(25),v=t.n(k),j=function(e){Object(o.a)(t,e);var a=Object(h.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"character_container"},r.a.createElement(s.b,{to:"/"},r.a.createElement("span",{className:"pageNotFound__return"},r.a.createElement("i",{className:"fas fa-long-arrow-alt-left"})," Back")),r.a.createElement("div",{className:"characterDetail"},r.a.createElement("img",{className:"characterDetail__img",src:this.props.image,alt:this.props.name}),r.a.createElement("h2",{className:"characterDetail__name"},this.props.name),r.a.createElement("img",{className:"characterDetail__icon",src:"Human"===this.props.species?[b.a]:[y.a],alt:"Human"===this.props.species?"Human":"Alien"}),r.a.createElement("p",{className:"characterDetail__paragraph"},"Origin: ",this.props.origin.name),r.a.createElement("p",{className:"characterDetail__paragraph"},"Episodes: ",this.props.episode.length),"Dead"===this.props.status?r.a.createElement("img",{className:"ripIcon",src:v.a,alt:"dead"}):r.a.createElement("p",{className:"characterDetail__paragraph"},"Status: ",this.props.status)))}}]),t}(r.a.Component),S=t(26),H=t.n(S),A=function(e){Object(o.a)(t,e);var a=Object(h.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"PNF_container"},r.a.createElement("div",{className:"pageNotFound"},r.a.createElement("p",{className:"errorMessage"},"404 NOT FOUND"),r.a.createElement(s.b,{to:"/"},r.a.createElement("span",{className:"pageNotFound__return"},r.a.createElement("i",{className:"fas fa-long-arrow-alt-left"})," Back")),r.a.createElement("img",{className:"pageNotFound__img",src:H.a,alt:"Page not found"}),r.a.createElement("p",{className:"pageNotFound__alert"},'"This character doesn\'t exist".')))}}]),t}(r.a.Component),F=function(e){Object(o.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).getValueFromSearchChild=n.getValueFromSearchChild.bind(Object(u.a)(n)),n.getOnlyHumanChild=n.getOnlyHumanChild.bind(Object(u.a)(n)),n.getOnlyAlienChild=n.getOnlyAlienChild.bind(Object(u.a)(n)),n}return Object(m.a)(t,[{key:"getValueFromSearchChild",value:function(e){this.props.getValueFromSearch(e.currentTarget.value)}},{key:"getOnlyHumanChild",value:function(e){this.props.getOnlyHuman(e)}},{key:"getOnlyAlienChild",value:function(e){this.props.getOnlyAlien(e)}},{key:"render",value:function(){return r.a.createElement("form",{className:"form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("input",{type:"text",name:"search",className:"form__searchBar",placeholder:'"Summer Smith"',value:this.props.filterSearch,onChange:this.getValueFromSearchChild}),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("img",{className:"filter_icons",src:b.a,alt:"Human"})),r.a.createElement("input",{type:"Checkbox",className:"humanFilter",onChange:this.getOnlyHumanChild,checked:this.props.isHumanChecked}),r.a.createElement("label",null,r.a.createElement("img",{className:"filter_icons",src:y.a,alt:"Human"})),r.a.createElement("input",{type:"Checkbox",className:"alienFilter",onChange:this.getOnlyAlienChild,checked:this.props.isAlienChecked})))}}]),t}(r.a.Component),D=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results}))},x=t(1),V=function(e){Object(o.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={characters:[],filterSearch:"",isHumanChecked:!1,isAlienChecked:!1},n.getValueFromSearch=n.getValueFromSearch.bind(Object(u.a)(n)),n.renderCharacterDetail=n.renderCharacterDetail.bind(Object(u.a)(n)),n.getOnlyHuman=n.getOnlyHuman.bind(Object(u.a)(n)),n.getOnlyAlien=n.getOnlyAlien.bind(Object(u.a)(n)),n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;D().then((function(a){e.setState({characters:a})}))}},{key:"getValueFromSearch",value:function(e){this.setState({filterSearch:e})}},{key:"getOnlyHuman",value:function(e){this.setState((function(e){return{isHumanChecked:!e.isHumanChecked}}))}},{key:"getOnlyAlien",value:function(e){this.setState((function(e){return{isAlienChecked:!e.isAlienChecked}}))}},{key:"renderCharacterDetail",value:function(e){var a=e.match.params.id,t=this.state.characters.find((function(e){return e.id===parseInt(a)}));return t?r.a.createElement(j,{name:t.name,image:t.image,species:t.species,origin:t.origin,episode:t.episode,status:t.status}):r.a.createElement(A,null)}},{key:"render",value:function(){var e=this,a=this.state.characters.filter((function(a){return""===e.state.filterSearch||a.name.toUpperCase().includes(e.state.filterSearch.toUpperCase())})).filter((function(a){return!0!==e.state.isHumanChecked||a.species.includes("Human")})).filter((function(a){return!0!==e.state.isAlienChecked||a.species.includes("Alien")}));return r.a.createElement("div",null,r.a.createElement(x.c,null,r.a.createElement(x.a,{exact:!0,path:"/"},r.a.createElement(E,null),r.a.createElement(F,{getValueFromSearch:this.getValueFromSearch,filterSearch:this.state.filterSearch,getOnlyHuman:this.getOnlyHuman,isHumanChecked:this.state.isHumanChecked,getOnlyAlien:this.getOnlyAlien,isAlienChecked:this.state.isAlienChecked}),r.a.createElement(N,{list:a,filterSearch:this.state.filterSearch})),r.a.createElement(x.a,{path:"/character/:id",render:this.renderCharacterDetail})))}}]),t}(r.a.Component);t(37),t(38);i.a.render(r.a.createElement(s.a,null,r.a.createElement(V,null)),document.querySelector("#root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.3f8ab1ca.chunk.js.map