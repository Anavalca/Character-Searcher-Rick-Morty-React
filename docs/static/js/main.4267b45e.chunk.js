(this["webpackJsonpmodulo-3-evaluacion-final-anavalca"]=this["webpackJsonpmodulo-3-evaluacion-final-anavalca"]||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/MortySad.731f142c.gif"},,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/RM_logo.1c3d1389.png"},function(e,a,t){e.exports=t.p+"static/media/ThemeSong.5f389cd2.mp3"},function(e,a,t){e.exports=t.p+"static/media/pickle.cac01c7b.gif"},function(e,a,t){e.exports=t.p+"static/media/otherUniverse.562a569c.png"},,,function(e,a,t){e.exports=t.p+"static/media/alien.7c809d71.png"},function(e,a,t){e.exports=t.p+"static/media/human.1df0613e.png"},function(e,a,t){e.exports=t.p+"static/media/heart.375f577d.png"},function(e,a,t){e.exports=t.p+"static/media/death.7956fff1.png"},function(e,a,t){e.exports=t.p+"static/media/chat.5f6a585a.png"},function(e,a,t){e.exports=t.p+"static/media/portal.16ef7f77.gif"},,,function(e,a,t){e.exports=t(46)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(17),l=t.n(r),i=(t(39),t(14)),s=t(18),o=t(19),m=t(7),u=t(33),h=t(32),d=(t(40),function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()}))}),p=t(20),f=t.n(p),E=t(21),g=t.n(E),v=t(2),k=t(22),b=t.n(k),C=t(23),N=t.n(C),y=function(e){return c.a.createElement("div",{className:"themeContainer",onClick:function(){e.ChangeTheme()}},c.a.createElement("img",{className:"chat",src:N.a,alt:"Chat",title:"Change theme"}),c.a.createElement("img",{className:"pickle",src:b.a,alt:"Pickle Rick",title:"Change theme"}))},S=function(e){return c.a.createElement("header",null,c.a.createElement(v.b,{to:"/"},c.a.createElement("img",{className:"webLogo",src:f.a,alt:"Rick and Morty Logo",title:"Rick and Morty Logo"})),c.a.createElement("div",{key:"1",className:"song"},c.a.createElement("audio",{controls:!0,autoPlay:!0},c.a.createElement("source",{src:g.a,type:"audio/mp3"}))),c.a.createElement(y,{ChangeTheme:function(){e.ChangeTheme()}}))},x=function(e){var a=e.img,t=e.name,n=e.species;return c.a.createElement("div",{className:"character_Card"},c.a.createElement("div",{className:"character_photo_container"},c.a.createElement("img",{src:a,alt:t})),c.a.createElement("p",{className:"characterName"},t),c.a.createElement("p",{className:"characterSpecie ".concat("Alien"===n?"alienColor":"humanColor")},n))},A=function(e){var a=e.inputValue,t=e.ischeckedHuman,n=e.ischeckedAlien;return c.a.createElement("ul",{className:"character_List"},e.data.sort((function(e,a){return e.name<a.name?-1:e.name>a.name?1:0})).filter((function(t){return""===a||t.name.toLowerCase().includes(e.inputValue.toLowerCase())})).filter((function(e){var a=!1;return t||n?(t&&"Human"===e.species||n&&"Alien"===e.species||t&&n)&&(a=!0):a=!0,a})).map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(v.b,{to:"/character/".concat(e.id)},c.a.createElement(x,{img:e.image,name:e.name,species:e.species})))})))},_=function(e){return c.a.createElement("header",null,c.a.createElement(v.b,{to:"/"},c.a.createElement("img",{className:"webLogo",src:"https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png",alt:"Rick and Morty Logo",title:"Rick and Morty Logo"})))},M=t(26),H=t.n(M),I=t(27),V=t.n(I),O=t(28),T=t.n(O),L=t(29),j=t.n(L),D=t(30),R=t.n(D),w=t(31),F=t.n(w),B=function(e){var a=e.character,t=a.name,n=a.image,r=a.species,l=a.gender,i=a.origin,s=a.episode;return c.a.createElement(c.a.Fragment,null,c.a.createElement(_,null),c.a.createElement("div",{className:"character_detail_container"},c.a.createElement(v.b,{to:function(){if(e.character.id>1)return"/character/".concat(e.character.id-1)}},c.a.createElement("button",{title:"Previous character",className:"circleButton prevCharacter"},c.a.createElement("i",{className:"fas fa-chevron-left"}))),c.a.createElement("div",{className:"character_detail_subcontainer"},c.a.createElement("div",{className:"dataContainer1"},c.a.createElement("img",{src:n,alt:t}),c.a.createElement("div",{className:"titleContainer"},c.a.createElement("p",{className:"nameCharacter"},t),c.a.createElement("div",{className:"dataContainer2"},c.a.createElement("p",null,"GENER: ",l),c.a.createElement("p",null,"ORIGIN: ",i.name),c.a.createElement("p",null,"EPISODES: ",s.length)))),c.a.createElement("div",{className:"extrasContainer"},c.a.createElement("div",{className:" container species"},c.a.createElement("img",{src:"Human"===r?V.a:H.a,alt:"specie"}),c.a.createElement("p",null,"SPECIE")),c.a.createElement("div",{className:"container status"},c.a.createElement("img",{src:"Alive"===e.character.status?T.a:"Dead"===e.character.status?j.a:R.a,alt:"status"}),c.a.createElement("p",null,"STATUS")))),c.a.createElement(v.b,{to:function(){if(e.character.id<20)return"/character/".concat(e.character.id+1)}},c.a.createElement("button",{title:"Next character",className:"circleButton nextCharacter"},c.a.createElement("i",{className:"fas fa-chevron-right"})))),c.a.createElement(v.b,{to:"/"},c.a.createElement("p",{className:"messageGoHome"},"Back to home"),c.a.createElement("img",{className:"gifGoHome",src:F.a,alt:"Go home page"})))},G=function(e){var a=function(a){var t=a.currentTarget.name;e.handleCheckboxValue(t)},t=e.value,n=e.ischeckedHuman,r=e.ischeckedAlien;return c.a.createElement("div",{className:"filterContainer"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(e)}},c.a.createElement("input",{type:"text",placeholder:"Search character",value:t,onChange:function(a){e.handleInputValue(a.currentTarget.value)}})),c.a.createElement("div",{className:"checkboxContainer"},c.a.createElement("label",{className:"characterSpecie humanColor",htmlFor:"specieHuman"},"HUMAN"),c.a.createElement("input",{onChange:a,name:"Human",type:"checkbox",checked:n}),c.a.createElement("label",{className:"characterSpecie alienColor",htmlFor:"specieAlien"},"ALIEN"),c.a.createElement("input",{onChange:a,name:"Alien",type:"checkbox",checked:r})))},P=t(10),J=t.n(P),U=function(e){return c.a.createElement("div",{className:"errorSearch_container"},c.a.createElement("span",{className:"errorSearchMessage"},"Sorry, there is nothing here."),c.a.createElement("img",{src:J.a,alt:"Sad Morty"}),c.a.createElement(v.b,{to:"/"},c.a.createElement("p",{className:"back"},"Back to home")))},q=t(6),z=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).renderCharacterDetail=n.renderCharacterDetail.bind(Object(m.a)(n)),n.handleInputValue=n.handleInputValue.bind(Object(m.a)(n)),n.handleCheckboxValue=n.handleCheckboxValue.bind(Object(m.a)(n)),n.ChangeTheme=n.ChangeTheme.bind(Object(m.a)(n)),n.state={data:[],value:"",isFound:!0,ischeckedHuman:!1,ischeckedAlien:!1,theme:1},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=JSON.parse(localStorage.getItem("searchData"));null!==a&&this.setState({value:a}),d().then((function(a){e.setState({data:a.results})}))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("searchData",JSON.stringify(this.state.value))}},{key:"handleInputValue",value:function(e){this.setState({value:e}),this.foundSearch(e)}},{key:"handleCheckboxValue",value:function(e){"Human"===e?this.setState((function(e){return{ischeckedHuman:!e.ischeckedHuman}})):"Alien"===e&&this.setState((function(e){return{ischeckedAlien:!e.ischeckedAlien}}))}},{key:"getRandomArbitrary",value:function(e,a){return Math.floor(Math.random()*(a-e)+e)}},{key:"ChangeTheme",value:function(){for(var e=this.state.theme;e===this.state.theme;)e=this.getRandomArbitrary(1,6);this.setState({theme:e})}},{key:"foundSearch",value:function(e){var a,t=this.state.data,n=!1,c=Object(i.a)(t);try{for(c.s();!(a=c.n()).done;){if(a.value.name.toLowerCase().includes(e.toLowerCase())||""===e){n=!0;break}}}catch(r){c.e(r)}finally{c.f()}n?this.setState({isFound:!0}):this.setState({isFound:!1})}},{key:"renderCharacterDetail",value:function(e){var a,t,n=e.match.params.id,r=this.state.data,l=!1,s=Object(i.a)(r);try{for(s.s();!(t=s.n()).done;){var o=t.value;if(o.id===parseInt(n)){l=!0,a=o;break}}}catch(m){s.e(m)}finally{s.f()}return l?c.a.createElement(B,{character:a}):c.a.createElement(U,null)}},{key:"render",value:function(){var e=this.state,a=e.data,t=e.value,n=e.isFound,r=e.ischeckedAlien,l=e.ischeckedHuman,i=e.theme;return c.a.createElement("div",{className:"App ".concat("theme"+i.toString())},c.a.createElement(q.c,null,c.a.createElement(q.a,{exact:!0,path:"/"},c.a.createElement(S,{ChangeTheme:this.ChangeTheme}),c.a.createElement(G,{handleInputValue:this.handleInputValue,value:t,handleCheckboxValue:this.handleCheckboxValue,ischeckedHuman:l,ischeckedAlien:r}),c.a.createElement("div",{className:"errorSearch_container ".concat(!0===n?"hidden":"")},c.a.createElement("span",{className:"errorSearchMessage"},"There isn't any result for this search: \"",t,'"'),c.a.createElement("img",{src:J.a,alt:"Sad Morty",title:"Sad Morty"})),c.a.createElement(A,{data:a,inputValue:t,ischeckedHuman:l,ischeckedAlien:r})),c.a.createElement(q.a,{path:"/character/:id",render:this.renderCharacterDetail})))}}]),t}(c.a.Component);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v.a,null,c.a.createElement(z,null))),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.4267b45e.chunk.js.map