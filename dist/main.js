(()=>{"use strict";const e=e=>{let t=document.querySelector(".cards");t.classList.add("container-fluid"),t.classList.add("row"),t.classList.add("row-cols-md-4"),t.classList.add("g-4"),e.forEach((e=>{let n=document.createElement("div"),a=(e=>{let t=document.createElement("div"),n=document.createElement("img"),a=document.createElement("div"),s=document.createElement("h2"),c=document.createElement("p"),d=e=>null!=e?e:"Unknown";return t.classList.add("card"),n.classList.add("card-img-top"),a.classList.add("card-body"),s.classList.add("card-title"),c.classList.add("card-text"),n.src=e.photo,n.alt=e.name,s.innerText=e.name,t.append(n),t.append(a),a.append(s),a.append(c),c.innerHTML=`<b>Real name: </b>${d(e.realName)}<br />\n  <b>Species: </b>${d(e.species)}<br />\n  <b>Citizenship: </b>${d(e.citizenship)}<br />\n  <b>Gender: </b>${d(e.gender)}<br />\n  <b>Status: </b>${d(e.status)}<br />\n  <b>Actors: </b>${d(e.actors)}<br />\n  <b>Movies: </b>${d(e.movies)}<br />`,t})(e);n.classList.add("col"),n.append(a),t.append(n)}))},t=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){throw new Error(e.message)}},n=document.querySelector(".form-select"),a=document.getElementById("searchField");let s=document.querySelector(".cards"),c=[];const d=t=>{console.log(t),e(t)},r=()=>{for(;s.firstChild;)s.removeChild(s.firstChild)};t("./dbHeroes.json").then((e=>{c=c.concat(e),d(e)})),t("./dbHeroes.json").then((e=>{let t=[];e.forEach((e=>{e.movies&&(t=t.concat(e.movies),t=t.filter(((e,n)=>t.indexOf(e)===n)))}));let a=document.createElement("option");a.setAttribute("selected",""),a.text="Choose a movie",n.add(a),t.forEach((e=>{let t=document.createElement("option");t.value=e,t.text=e,n.add(t)}))})),n.addEventListener("change",(e=>{const t=e.target.value;r(),d("Choose a movie"!==t?c.filter((e=>e.movies?.includes(t))):c)})),a.addEventListener("input",function(e,t,n){let a;return function(){const t=this,s=arguments,c=function(){a=null,e.apply(t,s)},d=n;clearTimeout(a),a=setTimeout(c,1e3),d&&e.apply(t,s)}}((e=>{r();const t=e.target.value;d(c.filter((e=>e.name?.includes(t)||e.realName?.includes(t))))})))})();