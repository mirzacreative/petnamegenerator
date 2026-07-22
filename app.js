const DATA={"dog": ["Buddy", "Max", "Luna", "Bella", "Charlie", "Daisy", "Cooper", "Milo", "Bailey", "Rocky", "Scout", "Maple", "Ranger", "Oakley", "Pepper", "Waffles", "Tucker", "Nala", "Ruby", "Finn"],"cat": ["Luna","Milo","Oliver","Loki","Simba","Leo","Nala","Chloe","Lily","Mittens","Whiskers","Shadow","Smokey","Mochi","Bella","Cleo","Oscar","Gizmo","Pumpkin","Socks"],"parrot": ["Polly","Kiwi","Coco","Sunny","Rio","Zephyr","Mango","Skittles","Echo","Pepper","Sky","Rio","Blu","Jasper","Saffron","Rio","Phoenix","Kiki","Pico","Tiki"],"horse":["Star","Spirit","Blaze","Midnight","Storm","Comet","Ginger","Apollo","Willow","Dakota","Bandit","Shadow","Rusty","Daisy","Hunter","Maverick","Echo","Sable","Whisper","Nova"]};
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function gen(){
 let pet=document.getElementById('pet')?.value||'dog';
 let style=document.getElementById('style')?.value||'cute';
 let trait=document.getElementById('trait')?.value||'playful';
 let base=DATA[pet]||DATA.dog; let out=[];
 let extras={cute:['Mochi','Biscuit','Sunny','Poppy','Coco'],unique:['Ziggy','Nova','Atlas','Echo','Indie'],funny:['Pickles','Waffles','Noodle','Tater','Burrito'],classic:['Max','Bella','Charlie','Buddy','Jack']};
 for(let i=0;i<16;i++){let arr=(i%2 && extras[style])?extras[style]:base; let name=pick(arr); if(!out.find(x=>x.name==name)) out.push({name:name,tag:style+' name for a '+trait+' '+pet,meaning:'Easy to call, short and friendly name.'});}
 const resultsEl=document.getElementById('results'); if(!resultsEl) return; resultsEl.innerHTML=out.map(x=>'<div class="card"><div class="name">'+x.name+'</div><div class="meta">'+x.tag+'</div><p>'+x.meaning+'</p></div>').join('');
}

document.addEventListener('DOMContentLoaded',()=>{
 // ensure generator exists; if not, inject a centered hero + generator
 injectHeroPatch();
 // attach generate handler
 document.getElementById('generate')?.addEventListener('click',gen);
 // run initial generate
 gen();
 // clean up marketing blocks if present
 removeMarketingBlock();
 // add blog JSON-LD on blog-index
 injectBlogSchema();
});

function injectHeroPatch(){
 // inject CSS link for patch if not already
 if(!document.getElementById('hero-patch-css')){
   const l=document.createElement('link'); l.rel='stylesheet'; l.id='hero-patch-css'; l.href='assets/hero-patch.css'; document.head.appendChild(l);
 }
 // locate existing generator container
 const existing = document.querySelector('.generator-wrap, #generator');
 if(existing){
   // make sure it's visually centered by wrapping if needed
   const hero = document.querySelector('.hero') || document.createElement('section');
   if(!hero.classList.contains('hero')){hero.className='hero';
     const inner=document.createElement('div'); inner.className='hero-inner';
     // move existing into new inner
     existing.parentNode.insertBefore(hero, existing);
     hero.appendChild(inner);
     inner.appendChild(existing);
   } else {
     // if hero present, ensure generator is within hero-inner
     const inner = hero.querySelector('.hero-inner') || document.createElement('div');
     inner.className='hero-inner'; if(!hero.contains(inner)) hero.appendChild(inner); inner.appendChild(existing);
   }
 }
 // If no generator, create a lightweight one at top of body
 if(!document.getElementById('generator')){
   const hero=document.createElement('section'); hero.className='hero';
   const inner=document.createElement('div'); inner.className='hero-inner';
   const h1=document.createElement('h1'); h1.className='site-title'; h1.textContent='Pet Name Generator';
   const p=document.createElement('p'); p.className='lead'; p.textContent='Cute, unique & funny names for dogs, cats, parrots & more — generate ideas in seconds.';
   const genWrap=document.createElement('div'); genWrap.className='generator-wrap';
   const controls=document.createElement('div'); controls.id='generator'; controls.className='generator';
   // simple controls
   controls.innerHTML = `
     <select id="pet" aria-label="Pet type">
       <option value="dog">Dog</option>
       <option value="cat">Cat</option>
       <option value="parrot">Parrot</option>
       <option value="horse">Horse</option>
     </select>
     <select id="style" aria-label="Name style">
       <option value="cute">Cute</option>
       <option value="unique">Unique</option>
       <option value="funny">Funny</option>
       <option value="classic">Classic</option>
     </select>
     <select id="trait" aria-label="Trait">
       <option value="playful">Playful</option>
       <option value="gentle">Gentle</option>
       <option value="strong">Strong</option>
     </select>
     <button id="generate" class="btn">Generate</button>
   `;
   const results=document.createElement('div'); results.id='results'; results.className='results';
   genWrap.appendChild(controls); genWrap.appendChild(results);
   inner.appendChild(h1); inner.appendChild(p); inner.appendChild(genWrap);
   hero.appendChild(inner);
   document.body.insertBefore(hero, document.body.firstChild);
 }
}

function removeMarketingBlock(){
 // remove any element that contains the exact marketing phrase
 const phrase = 'Built for high-intent pet name searches';
 document.querySelectorAll('body *').forEach(el=>{
   if(el.children.length===0 && el.textContent && el.textContent.includes(phrase)){
     el.remove();
   }
 });
}

function injectBlogSchema(){
 // only run on blog index path
 if(location.pathname.includes('blog') || document.body.classList.contains('blog')){
   // meta description
   if(!document.querySelector('meta[name="description"]')){
     const m=document.createElement('meta'); m.name='description'; m.content='Pet naming guides and lists — dog name generator, cat names, parrot names, and unique ideas for USA pet owners.'; document.head.appendChild(m);
   }
   // JSON-LD
   if(!document.getElementById('js-blog-schema')){
     const s=document.createElement('script'); s.type='application/ld+json'; s.id='js-blog-schema'; s.textContent = JSON.stringify({
       "@context":"https://schema.org",
       "@type":"Blog",
       "name":"Pet Naming Blog",
       "url":location.origin + '/blog-index.html',
       "description":"Helpful long-form articles and lists for pet name ideas targeted at USA pet owners.",
       "publisher": {
         "@type":"Organization",
         "name":"Pet Name Generator",
         "logo":{"@type":"ImageObject","url":location.origin + '/logo.svg'}
       }
     });
     document.head.appendChild(s);
   }
   // add FAQ schema snippet
   if(!document.getElementById('js-faq-schema')){
     const f=document.createElement('script'); f.type='application/ld+json'; f.id='js-faq-schema'; f.textContent = JSON.stringify({
       "@context":"https://schema.org",
       "@type":"FAQPage",
       "mainEntity":[
         {"@type":"Question","name":"How do I choose a name for my dog?","acceptedAnswer":{"@type":"Answer","text":"Consider breed, personality, short and easy-to-call names — test a few, and pick one that sticks."}},
         {"@type":"Question","name":"What are unique dog names?","acceptedAnswer":{"@type":"Answer","text":"Try names from nature, mythology, or mashups — the generator gives fresh suggestions."}}
       ]
     }); document.head.appendChild(f);
   }
 }
}
