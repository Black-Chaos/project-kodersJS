import{B as p}from"./funds-56b198fb.js";const l=new p,s=document.querySelector(".category-wrapper");f();function f(){try{l.getTopBooks().then(e=>{s.innerHTML="",m(),L(e)})}catch(e){console.log(e)}}function m(){s.insertAdjacentHTML("beforeend",'<h1 class = "main-title">Best Sellers <span class = "main-title-span">Books</span></h1>')}function L(e){e.map(({list_name:t,books:o})=>{const r=h(o);b(t,r)}).join("")}function h(e){return e.length>0?e.map(({book_image:t,title:o,author:r,_id:n})=>d(t,o,r,n)).join(""):k()}function k(){return`<li class = "cork">
            <div class="cork-wraper-svg">
            <svg class="cork-svg">
              <use class="cork-use" href="./img/icons.svg#icon-cork-book"></use>
            </svg>
            <p class = "cork-text">Sorry, the book will be added later...</p>
            </div>
        </li>`}function b(e,t){const o=`<div class = "wrapper-for-genre">
                          <h2 class = "list-name">${e}</h2>
                          <ul class="category-list">${t}</ul>
                          <button class="button" type="button">See More</button>
                        </div>`;s.insertAdjacentHTML("beforeend",o),document.querySelector(".category-list").addEventListener("click",y);const n=document.querySelector(".button");t.includes('<li class = "cork">')&&n.classList.add("is-hidden")}s.addEventListener("click",C);function C(e){if(e.target.nodeName==="BUTTON"){const t=e.target.parentNode.firstElementChild.textContent,o=e.target.previousElementSibling,r=o.children;if(e.target.textContent==="See More")o.innerHTML="",T(t,o),e.target.textContent="See Less";else for(let n=0;n<r.length;n++)n>4&&(r[n].classList="items-is-hidden",e.target.textContent="See More")}}function T(e,t){try{l.getBookByCategory(e).then(o=>{v(o,t)})}catch(o){console.log(o)}}function v(e,t){e.map(({book_image:o,title:r,author:n,_id:c})=>{const i=d(o,r,n,c);t.insertAdjacentHTML("beforeend",i)}).join("")}function B(e){try{l.getBookByCategory(e).then(t=>{s.innerHTML="",M(e),S(t)})}catch(t){console.log(t)}}function M(e){const t=e.split(" "),o=t.splice(length-1);s.insertAdjacentHTML("beforeend",`<h1 class="main-title">${t.join(" ")} <span class = "main-title-span">${o}</span></h1>`)}function S(e){if(e.length>0){let t="";e.map(({book_image:o,title:r,author:n,_id:c})=>{const i=d(o,r,n,c);t+=i}),g(t)}else{const t=k();g(t)}}function d(e,t,o,r){const n=`<li class = "wrapper">
              <a href="#" class="link" id="${r}">
                <img class="img" src="${e}">
                <h3 class = "book-title">${t}</h3>
                <p class = "book-author">${o}</p>
              </a>
          </li>`;return document.querySelector(".link"),n}function g(e){const t=`<ul class="category-list">${e}</ul>`;s.insertAdjacentHTML("beforeend",t),document.querySelector(".category-list").addEventListener("click",y)}function y(e){e.preventDefault(),e.target.parentNode.nodeName==="A"&&e.target.parentNode.id}const a=document.getElementById("btn-to-top");a.addEventListener("click",w);window.onscroll=function(){j()};function j(){document.body.scrollTop>300||document.documentElement.scrollTop>300?a.style.display="block":a.style.display="none"}function w(){window.scrollBy({top:0,behavior:"smooth"})}const u=document.querySelector(".categories-elements"),$=new p;A();function A(){$.getCategoryList().then(e=>{const t=e.map(({list_name:o})=>`<li class="categories-list"><a class="category-link" href="#">${o}</a></li>`).sort().join("");u.insertAdjacentHTML("beforeend",t)}).catch(e=>console.log(e))}u.addEventListener("click",H);function H(e){if(e.preventDefault(),e.target.nodeName==="A"&&!e.target.classList.contains("active")){if(u.querySelector(".active").classList.remove("active"),e.target.classList.add("active"),e.target.textContent==="All categories"){f();return}B(e.target.textContent)}}
