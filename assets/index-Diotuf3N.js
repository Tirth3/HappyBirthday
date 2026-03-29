(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();function u(){const e=document.createElement("section");return e.id="intro",e.innerHTML=`
    <div class="intro-hard-hat">👷🏽</div>

    <h1 class="intro-title">
      Harshita Jadhao❌<br>
      <span class="name-highlight">Bob the Builder ✅</span>
    </h1>

    <div class="joke-card reveal">
      <p class="setup">Why is Bob so good at relationships? 🤔</p>
      <p class="punchline">Because he knows how to build trust. 🔨😂</p>
    </div>

    <div class="scroll-hint">
      <span>Yaa I am too lazy to add images. Just adjust with emojis.</span>
      <span>Scroll down</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M12 5v14M5 12l7 7 7-7"/>
      </svg>
    </div>
  `,e}function f(e,t,a,i){return`
    <div class="placeholder-img ${e}">
      <span class="ph-icon">${t}</span>
      <span class="ph-label">${a}</span>
    </div>
  `}const g=[{colorClass:"ph-amber",icon:"🏗️",label:"TPO",path:"images/img2.jpg",caption:"🏗️ Khambre baman naaa, We prefer harshita",classes:"tall"},{colorClass:"ph-blue",icon:"🎉",label:"SRK",path:"images/img3.jpg",caption:"🎥 Hollywood noooo, Bollywood Hell yeah",classes:""},{colorClass:"ph-pink",icon:"😂",label:"HEHEHE",path:"images/img1.jpg",caption:"😂 Laugh um may not be as polite,, but hey it is pure AF",classes:""},{colorClass:"ph-green",icon:"🌻",label:"uuu a sunflower",path:"images/img2.png",caption:"🌻 Sunny and happy personality",classes:"wide"},{colorClass:"ph-orange",icon:"🍕",label:"Sambaar maybe?",path:"images/img1.jpg",caption:"🍕 Don't know what you like to eat but it's okk",classes:""}];function y(){const e=document.createElement("section");e.id="memories";const t=document.createElement("h2");t.className="section-title reveal",t.textContent="📸 IDK random things.";const a=document.createElement("div");return a.className="memories-grid",g.forEach(({colorClass:i,icon:n,label:s,path:r,caption:c,classes:o},d)=>{const l=document.createElement("div");l.className=`memory-card reveal ${o}`,l.style.transitionDelay=`${d*.1}s`,l.innerHTML=`
      <div class="img-wrap">
        ${f(i,n,s)}
      </div>
      <div class="memory-caption">${c}</div>
    `,a.appendChild(l)}),e.appendChild(t),e.appendChild(a),e}const b=[{side:"left",icon:"🔨",dotBg:"#FFF9C4",title:"The Hardest Worker",text:"You show up every single day with your hard hat on and a can-do attitude. There's nobody else we'd trust with a hammer. 💪"},{side:"right",icon:"🤩",dotBg:"#BBDEFB",title:"SRK Fan",text:"“Don’t underestimate the power of bob”"},{side:"left",icon:"🤝",dotBg:"#C8E6C9",title:"Infosys",text:"Yaa I don't what to add so have some infosys placement"}];function v(){const e=document.createElement("section");e.id="messages";const t=document.createElement("h2");t.className="section-title reveal",t.textContent="💬 A Few Words About You";const a=document.createElement("div");return a.className="timeline",b.forEach(({side:i,icon:n,dotBg:s,title:r,text:c},o)=>{const d=document.createElement("div");d.className=`timeline-item reveal ${i==="right"?"right from-right":"from-left"}`,d.style.transitionDelay=`${o*.12}s`,d.innerHTML=`
      <div class="timeline-bubble">
        <h3>${r}</h3>
        <p>${c}</p>
      </div>
      <div class="timeline-dot" style="background:${s}">${n}</div>
    `,a.appendChild(d)}),e.appendChild(t),e.appendChild(a),e}const m=["⭐","🌟","✨","💛","🎉","🎊","🎈","🌼"],w=[{icon:"🏗️",text:"May your plans always come together perfectly"},{icon:"💛",text:"May your days be as bright as fresh yellow paint"},{icon:"🔩",text:"May your problem be as easy as nuts and bolts"},{icon:"🌈",text:"May this year be your most colourful build yet"},{icon:"🍰",text:"May your cake be as tall as your ambitions"},{icon:"🎊",text:"Here's to infosys. May be something good is up ahead"}];function E(e){for(let t=0;t<35;t++){const a=document.createElement("span");a.className="star",a.textContent=m[Math.floor(Math.random()*m.length)],a.style.cssText=`
      left: ${Math.random()*100}%;
      font-size: ${14+Math.random()*18}px;
      animation-duration: ${6+Math.random()*10}s;
      animation-delay: ${Math.random()*8}s;
    `,e.appendChild(a)}}function M(){const e=document.createElement("section");e.id="finale";const t=document.createElement("div");t.className="finale-stars-wrap",E(t);const a=document.createElement("div");a.className="finale-cake",a.textContent="🎂";const i=document.createElement("h2");i.className="finale-title reveal",i.innerHTML="Happy Birthday<br>Bob the Builder!";const n=document.createElement("p");n.className="finale-tagline reveal",n.textContent='And always keep in mind "Hindi filmon ki tarah… ant mein sab theek ho jaata hai. Aur agar theek na ho, toh woh ant nahi hai."';const s=document.createElement("div");s.className="wishes-grid",w.forEach(({icon:c,text:o},d)=>{const l=document.createElement("div");l.className="wish-chip reveal",l.style.transitionDelay=`${d*.1}s`,l.innerHTML=`<span class="wish-icon">${c}</span><p>${o}</p>`,s.appendChild(l)});const r=document.createElement("p");return r.className="finale-sig",r.innerHTML="May this year god be with you",e.append(t,a,i,n,s,r),e}const p=["#FFD600","#FF7A00","#1565C0","#E53935","#64B5F6","#ffffff","#4CAF50"];function C(){const e=document.getElementById("confetti-canvas"),t=e.getContext("2d");function a(){e.width=window.innerWidth,e.height=window.innerHeight}a(),window.addEventListener("resize",a);let i=[],n=!0,s=0;function r(){i.push({x:Math.random()*e.width,y:-12,r:5+Math.random()*7,color:p[Math.floor(Math.random()*p.length)],speed:2+Math.random()*3,angle:Math.random()*Math.PI*2,spin:(Math.random()-.5)*.14,drift:(Math.random()-.5)*1.2,shape:Math.random()>.5?"rect":"circle"})}function c(){t.clearRect(0,0,e.width,e.height),n&&++s%3===0&&r(),i=i.filter(o=>o.y<e.height+20);for(const o of i)o.y+=o.speed,o.x+=o.drift,o.angle+=o.spin,t.save(),t.translate(o.x,o.y),t.rotate(o.angle),t.fillStyle=o.color,t.globalAlpha=.88,o.shape==="rect"?t.fillRect(-o.r,-o.r/2,o.r*2,o.r):(t.beginPath(),t.arc(0,0,o.r,0,Math.PI*2),t.fill()),t.restore();requestAnimationFrame(c)}c(),setTimeout(()=>{n=!1},6e3)}function x(){const e=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting&&(i.target.classList.add("visible"),e.unobserve(i.target))})},{threshold:.15});function t(){document.querySelectorAll(".reveal:not(.visible)").forEach(a=>{e.observe(a)})}t(),setTimeout(t,100)}const $=document.getElementById("app"),B=[u(),h(),y(),h(),v(),h(),M()];B.forEach(e=>$.appendChild(e));C();x();function h(){const e=document.createElement("div");return e.className="builder-stripe",e}
