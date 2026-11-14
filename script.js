(()=>{'use strict';
const jobs=window.JOBS||[];
const list=document.getElementById('job-list');
const search=document.getElementById('job-search');
const count=document.getElementById('result-count');
const empty=document.getElementById('empty-state');
const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(){
const q=search.value.trim().toLocaleLowerCase('en-IN');
const matches=jobs.filter(j=>(j.role+' '+j.team+' '+j.hint).toLocaleLowerCase('en-IN').includes(q));
list.innerHTML=matches.map(j=>'<article class="job-card"><div class="job-head"><span class="company">ZoomInfo</span><span class="location">Chennai</span></div><h2>'+escapeHtml(j.role)+'</h2><p class="team">'+escapeHtml(j.team)+'</p><div class="job-bottom"><span class="source">'+(j.kind==='official'?'Official job posting':'LinkedIn job listing')+'</span><a class="job-link" target="_blank" rel="noopener noreferrer" href="'+escapeHtml(j.url)+'">'+(j.kind==='official'?'Apply now':'View role')+' <span aria-hidden="true">↗</span></a></div></article>').join('');
count.textContent=matches.length+' '+(matches.length===1?'job opening':'job openings');
empty.hidden=matches.length>0;
}
search.addEventListener('input',render);
render();
})();