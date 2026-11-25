for(const [id,cls] of [['larger','large'],['contrast','contrast']])document.getElementById(id).onclick=function(){const on=document.body.classList.toggle(cls);this.setAttribute('aria-pressed',on)};document.getElementById('read').onclick=function(){const status=document.getElementById('status');if(!('speechSynthesis' in window)){status.textContent='Read aloud is unavailable in this browser.';return}if(speechSynthesis.speaking){speechSynthesis.cancel();this.textContent='Read aloud';return}const u=new SpeechSynthesisUtterance(document.querySelector('main').innerText);this.textContent='Stop reading';u.onend=()=>this.textContent='Read aloud';speechSynthesis.speak(u)};
(function(){
 function externalLinks(root){
  var links=[];
  if(root.nodeType===1 && root.matches('a[href]')) links.push(root);
  if(root.querySelectorAll) links.push.apply(links,root.querySelectorAll('a[href]'));
  links.forEach(function(a){try{var u=new URL(a.getAttribute('href'),document.baseURI);if((u.protocol==='http:'||u.protocol==='https:')&&u.origin!==location.origin){a.target='_blank';a.rel='noopener noreferrer';if(!a.title)a.title='Opens in a new tab';}}catch(e){}});
 }
 externalLinks(document);
 new MutationObserver(function(changes){changes.forEach(function(change){change.addedNodes.forEach(function(node){externalLinks(node);});});}).observe(document.body,{childList:true,subtree:true});
})();
