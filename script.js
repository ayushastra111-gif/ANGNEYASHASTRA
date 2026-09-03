const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('nav');menuBtn.onclick=()=>nav.style.display=nav.style.display==='flex'?'none':'flex';
const search=document.getElementById('search'),cards=[...document.querySelectorAll('.notes article')];
search.oninput=()=>{let q=search.value.toLowerCase();cards.forEach(c=>c.style.display=c.dataset.search.includes(q)?'':'none')};
document.querySelectorAll('[data-topic]').forEach(b=>b.onclick=()=>{search.value=b.dataset.topic;search.dispatchEvent(new Event('input'));document.getElementById('notes').scrollIntoView({behavior:'smooth'})});

