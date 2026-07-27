(() => {
  const PET_NAMES = {
    dog:['Buddy','Max','Charlie','Cooper','Rocky','Scout','Milo','Finn','Tucker','Bailey','Daisy','Luna','Bella','Ruby','Willow','Nala','Winston','Maple','Ranger','Oakley','Pepper','Clover','Remy','Archie','Penny','Rosie','Murphy','Theo','Sadie','Nova','Bear','Koda','Bruno','Louie','Moose','Harley','Millie','Piper','Gus','Zoe','Benny','Ellie','Dexter','Riley','Frankie','Jasper','Maggie','Henry','Winnie','Ollie','Maya','Sammy','Ivy','Boomer','Blue','Honey','Cody','Sasha','Ace'],
    cat:['Luna','Milo','Oliver','Leo','Nala','Cleo','Mochi','Willow','Simba','Pepper','Jasper','Misty','Sushi','Pumpkin','Socks','Nova','Ziggy','Bella','Hazel','Binx','Cosmo','Fig','Mabel','Pixel','Theo','Ivy','Salem','Onyx','Cinder','Maple','Archie','Freya','Gizmo','Phoebe','Minnie','Oreo','Shadow','Smoky','Tigger','Poppy','Pearl','Miso','Sage','Storm','Raven','Sunny','Indie','Nori','Mango','Pippin','Suki','Fable','Juno','Loki','Zara','Tilly','Muffin','Ash','Dot','Echo'],
    parrot:['Kiwi','Mango','Rio','Sunny','Echo','Pico','Zazu','Skittles','Peanut','Coco','Jade','Tiki','Bubbles','Pepper','Blu','Salsa','Kiki','Tango','Papaya','Jazz','Rocco','Captain','Mimic','Poppy','Cobalt','Lime','Chatter','Doodle','Zest','Indie','Bongo','Paco','Ruffles','Chirpy','Berry','Jewel','Tropi','Zippy','Comet','Emerald','Diva','Rico','Biscuit','Banjo','Clover','Pip','Saffron','Pixel','Echoes','Merry','Rumba','Sonic','Peaches','Noodle','Dandy','Mosaic','Taz','Cleo','Lola','Rocket'],
    bird:['Sunny','Pip','Sky','Kiwi','Mango','Echo','Rio','Blue','Tiki','Coco','Peanut','Jade','Jazz','Zazu','Pico','Tango','Bubbles','Papaya','Sage','Lark','Robin','Finch','Chirp','Daisy','Indigo','Kiki','Skittles','Salsa','Nova','Pepper','Canary','Tweet','Flit','Wren','Sparrow','Dove','Goldie','Ruby','Pearl','Misty','Willow','Clover','Poppy','Ivy','Flicker','Noodle','Button','Biscuit','Mochi','Zest','Comet','Rico','Lime','Dandy','Penny','Mabel','Suki','Tilly','Fable','Dew'],
    horse:['Spirit','Dakota','Star','Willow','Storm','Apollo','Bella','Shadow','Cinnamon','Duke','River','Blaze','Rosie','Maverick','Ruby','Comet','Sage','Majesty','Scout','Athena','Ranger','Copper','Aspen','Sterling','Juno','Bandit','Montana','Sierra','Valor','Pearl','Cash','Colt','Cheyenne','Dusty','Ember','Freya','Ginger','Hickory','Jasper','Knight','Luna','Marigold','Midnight','Oakley','Phoenix','Rain','Raven','Rodeo','Sable','Savannah','Sky','Thunder','Titan','Whisper','Zephyr','Aurora','Canyon','Dancer','Harley','Indie'],
    rabbit:['Thumper','Clover','Mochi','Snowball','Hazel','Peanut','Daisy','Nibbles','Cotton','Oreo','Biscuit','Flopsy','Poppy','Maple','Toffee','Bubbles','Willow','Coco','Lily','Button','Sprout','Tilly','Fawn','Pip','Muffin','Pebble','Fern','Honey','Bean','Tulip','Binky','Bunbun','Chestnut','Dandelion','Dot','Fudge','Ginger','Hopper','Juniper','Latte','Marshmallow','Miso','Noodle','Pecan','Petal','Pickles','Pumpkin','Smudge','Snowy','Teddy','Truffle','Velvet','Waffles','Whiskers','Cinnamon','Fig','Mabel','Olive','Peaches','Sage'],
    fish:['Bubbles','Nemo','Splash','Goldie','Coral','Finley','Blue','Sushi','Pearl','Dory','Marina','Ripple','Sunny','Aqua','Guppy','Wave','Captain','Pebbles','Cleo','Neptune','Tide','Lagoon','Reef','Comet','Indigo','Koi','Misty','Drift','Skipper','Nova','Anchor','Azure','Bait','Breeze','Cobalt','Delta','Finn','Flash','Glitter','Marble','Miso','Moon','Ocean','Opal','Orca','Pluto','Rain','Sapphire','Shimmer','Spritz','Star','Storm','Tango','Teal','Triton','Twinkle','Waverly','Ziggy','Zuma','Biscuit'],
    hamster:['Peanut','Nibbles','Mochi','Cookie','Pip','Coco','Biscuit','Tiny','Oreo','Poppy','Pumpkin','Hazel','Cheeks','Button','Waffles','Toffee','Bean','Muffin','Maple','Daisy','Nugget','Sprout','Tater','Fuzz','Pebble','Crumb','Honey','Pecan','Puff','Miso','Boba','Brownie','Churro','Cinnamon','Dot','Fluffy','Ginger','Hazelnut','Jellybean','Latte','Marshmallow','Noodle','Nutmeg','Pickles','Popcorn','Pretzel','Sandy','Shortcake','Smudge','Snickers','Sugar','Teddy','Truffle','Walnut','Whiskers','Zippy','Mabel','Tilly','Minnie','Pudding'],
    turtle:['Shelly','Tank','Pebble','Moss','Speedy','Atlas','Crush','Terra','Franklin','Rocky','Sage','Clover','Tilly','Squirt','Boulder','Olive','Marble','River','Yoda','Nori','Tide','Fern','Lagoon','Sprout','Copper','Myrtle','Scout','Drift','Dune','Jade','Anchor','Basil','Cedar','Chester','Cove','Dash','Delta','Domino','Emerald','Finn','Forest','Gizmo','Kelp','Kiwi','Leaf','Mango','Miso','Muddy','Neptune','Oak','Pesto','Pond','Reef','Ripple','Sandy','Shellby','Skipper','Stone','Tango','Tortellini']
  };
  const STYLE_NAMES = {
    cute:['Mochi','Biscuit','Poppy','Coco','Honey','Button','Muffin','Peanut','Pip','Daisy','Bubbles','Teddy','Waffles','Bean','Tilly','Nibbles','Puff','Rosie','Sunny','Cookie','Peaches','Fuzzy','Minnie','Dolly','Bunny','Sprout'],
    unique:['Nova','Atlas','Echo','Indie','Ziggy','Cosmo','Pixel','Juno','Onyx','Cobalt','Sable','Zephyr','Fig','Rune','Vesper','Nori','Fable','Koda','Aster','Sol','Mosaic','Lyric','Quill','Orbit','Zuma','Kestrel'],
    funny:['Pickles','Noodle','Tater','Burrito','Sir Barks','Meowzilla','Wiggles','Nugget','Toast','Beans','Chairman Meow','Bark Twain','Chewbarka','Paw McCartney','Taco','Socks','Waffles','Muffin','Crumb','Boop','Captain Floof','Tiny Boss','Professor Paws','Biscuit Bandit','Nacho','Spud'],
    classic:['Max','Bella','Charlie','Lucy','Buddy','Daisy','Molly','Jack','Milo','Luna','Rocky','Rosie','Oscar','Ruby','Toby','Sadie','Leo','Sophie','Cooper','Penny','Sam','Henry','George','Maggie','Annie','Benji'],
    food:['Cookie','Pepper','Pumpkin','Bean','Honey','Mochi','Biscuit','Toffee','Cinnamon','Peaches','Olive','Ginger','Miso','Taco','Waffles','Brownie','Cocoa','Nugget','Pickles','Maple','Bagel','Churro','Pretzel','Sushi','Truffle','Pecan'],
    nature:['River','Clover','Maple','Sage','Storm','Willow','Aspen','Fern','Meadow','Dune','Sky','Rain','Pebble','Ivy','Cedar','Lark','Ocean','Briar','Sunny','Frost','Aurora','Birch','Flora','Marina','Ember','Reef'],
    royal:['Duke','Queenie','Athena','Prince','Kingston','Duchess','Regal','Majesty','Arthur','Victoria','Cleo','Apollo','Juno','Sterling','Pearl','Baron','Lady','Caesar','Titan','Crown','Empress','Monarch','Caspian','Augustus','Knight','Sovereign'],
    western:['Ranger','Dakota','Scout','Bandit','Tex','Maverick','Montana','Sierra','Canyon','Rodeo','Rusty','Wrangler','Cheyenne','Austin','Dallas','Copper','Boone','Colt','Cash','Dusty','Trigger','Wyatt','Jesse','Annie','Cody','Rio'],
    trendy:['Luna','Milo','Nova','Finn','Ruby','Theo','Ivy','Remy','Arlo','Koda','Nala','Maple','Mochi','Indie','Juno','Cleo','Atlas','Poppy','Leo','Sage','Ollie','Ziggy','Loki','Maeve','Freya','Kai'],
    short:['Ace','Blu','Pip','Leo','Rio','Max','Bo','Kit','Sky','Zoe','Mia','Lou','Rex','Finn','Nox','Sol','Taz','Jax','Ivy','Dot','Bea','Kai','Moe','Lux','Ash','Jet']
  };
  const TRAIT_NAMES = {
    playful:['Ziggy','Wiggles','Dash','Bubbles','Tango','Scout','Pogo','Skippy','Zippy','Doodle','Mango','Jester','Frisbee','Rocket','Bounce','Peppy','Jazz','Rascal','Pip','Sunny'],
    calm:['Willow','Sage','Misty','River','Dove','Cloud','Mellow','Moon','Olive','Fern','Pearl','Whisper','Blue','Cedar','Zen','Ivy','Luna','Drift','Snow','Clover'],
    brave:['Atlas','Valor','Ranger','Titan','Scout','Blaze','Athena','Apollo','Storm','Rex','Hero','Knight','Phoenix','Rocky','Maverick','Duke','Juno','Bandit','Bear','Sterling'],
    smart:['Echo','Pixel','Nova','Sage','Watson','Ada','Tesla','Darwin','Scout','Clever','Quill','Atlas','Cosmo','Milo','Ivy','Juno','Pico','Mimic','Raven','Nori'],
    tiny:['Pip','Dot','Bean','Button','Pebble','Mochi','Mini','Nibbles','Peanut','Mite','Bitty','Puff','Tilly','Boba','Crumb','Fig','Dew','Miso','Poppy','Sprout'],
    gentle:['Daisy','Willow','Rosie','Honey','Dove','Pearl','Mabel','Teddy','Clover','Lily','Sunny','Misty','Sage','Olive','Penny','Biscuit','Winnie','Flora','Mochi','Maple'],
    energetic:['Dash','Rocket','Comet','Zippy','Flash','Storm','Blaze','Tango','Jazz','Racer','Bolt','Skipper','Rio','Scout','Sonic','Pogo','Spark','Maverick','Indie','Bubbles'],
    lazy:['Mellow','Snooze','Biscuit','Mochi','Cloud','Pillow','Dozer','Noodle','Tater','Muffin','Sunday','Couch','Drowsy','Bean','Bear','Puff','Sloth','Chill','Waffles','Nap'],
    sweet:['Honey','Sugar','Cookie','Daisy','Rosie','Mochi','Maple','Poppy','Peaches','Muffin','Coco','Toffee','Biscuit','Bella','Lily','Penny','Mabel','Sunny','Clover','Ruby'],
    sassy:['Cleo','Ziggy','Pepper','Nova','Queenie','Diva','Juno','Sassy','Pixel','Raven','Ruby','Moxie','Trixie','Lola','Foxy','Piper','Nala','Indie','Coco','Storm']
  };
  const GENDER_NAMES = {
    male:['Max','Charlie','Cooper','Milo','Leo','Finn','Theo','Oscar','Toby','Archie','Jasper','Rex','Duke','Ranger','Bruno','Louie','Murphy','Henry','Benji','Winston','Atlas','Apollo','Kai','Rio','Rocky','Gus','Otis','Felix','Cody','Sam'],
    female:['Luna','Bella','Daisy','Ruby','Willow','Nala','Rosie','Penny','Ivy','Cleo','Mabel','Poppy','Sadie','Zoe','Maya','Lily','Hazel','Athena','Juno','Pearl','Sophie','Molly','Nova','Freya','Tilly','Piper','Minnie','Ellie','Phoebe','Suki'],
    neutral:['Scout','River','Sage','Clover','Pepper','Maple','Storm','Sunny','Echo','Indie','Pixel','Mochi','Sky','Blue','Biscuit','Nova','Aspen','Onyx','Fig','Miso','Coco','Tango','Comet','Pebble','Honey','Oakley','Remy','Pip','Bean','Ziggy']
  };
  const PET_LABELS = {dog:'dog',cat:'cat',parrot:'parrot',bird:'bird',horse:'horse',rabbit:'rabbit',fish:'fish',hamster:'hamster',turtle:'turtle'};
  const STYLE_LABELS = {cute:'cute',unique:'distinctive',funny:'funny',classic:'classic',food:'food-inspired',nature:'nature-inspired',royal:'regal',western:'western',trendy:'modern',short:'short'};
  const TRAIT_LABELS = {playful:'playful',calm:'calm',brave:'brave',smart:'clever',tiny:'tiny',gentle:'gentle',energetic:'energetic',lazy:'laid-back',sweet:'sweet',sassy:'sassy'};

  const unique = arr => [...new Set(arr)];
  const shuffle = arr => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };
  const soundKey = name => name.toLowerCase().replace(/[^a-z]/g,'').replace(/[aeiouy]/g,'').slice(0,4) || name.toLowerCase().slice(0,3);
  const safeJson = (value, fallback) => { try { return JSON.parse(value) ?? fallback; } catch { return fallback; } };

  function createCandidates(pet, gender, style, trait) {
    let names = [...(PET_NAMES[pet] || PET_NAMES.dog), ...(STYLE_NAMES[style] || []), ...(TRAIT_NAMES[trait] || [])];
    if (gender === 'any') names.push(...GENDER_NAMES.male, ...GENDER_NAMES.female, ...GENDER_NAMES.neutral);
    else names.push(...(GENDER_NAMES[gender] || GENDER_NAMES.neutral));
    return unique(names);
  }

  function chooseFresh(candidates, history, count = 12) {
    const previousSet = new Set(history);
    let pool = shuffle(candidates.filter(name => !previousSet.has(name)));
    if (pool.length < count) {
      const recent = new Set(history.slice(-count));
      pool = shuffle(candidates.filter(name => !recent.has(name)));
    }
    const chosen = [];
    const soundKeys = new Set();
    for (const name of pool) {
      const key = soundKey(name);
      if (soundKeys.has(key)) continue;
      chosen.push(name); soundKeys.add(key);
      if (chosen.length === count) break;
    }
    if (chosen.length < count) {
      for (const name of pool) {
        if (!chosen.includes(name)) chosen.push(name);
        if (chosen.length === count) break;
      }
    }
    return chosen;
  }

  function initGenerator() {
    const form = document.getElementById('name-generator-form');
    const results = document.getElementById('results');
    if (!form || !results) return;
    const shell = form.closest('.generator-shell');
    const petSelect = document.getElementById('pet');
    const genderSelect = document.getElementById('gender');
    const styleSelect = document.getElementById('style');
    const traitSelect = document.getElementById('trait');
    const params = new URLSearchParams(location.search);
    const allowed = (select, value) => [...select.options].some(o => o.value === value);
    const defaultPet = shell?.dataset.defaultPet || 'dog';
    petSelect.value = allowed(petSelect, params.get('pet')) ? params.get('pet') : defaultPet;
    if (allowed(genderSelect, params.get('gender'))) genderSelect.value = params.get('gender');
    if (allowed(styleSelect, params.get('style'))) styleSelect.value = params.get('style');
    if (allowed(traitSelect, params.get('trait'))) traitSelect.value = params.get('trait');
    const favorites = new Set(safeJson(localStorage.getItem('png.favorites'), []));
    const actions = shell.querySelector('.generator-actions');
    const summary = document.getElementById('result-summary');

    const render = names => {
      const pet = petSelect.value, style = styleSelect.value, trait = traitSelect.value;
      results.innerHTML = '';
      names.forEach((name, i) => {
        const card = document.createElement('article');
        card.className = 'name-card'; card.style.animationDelay = `${i * 22}ms`;
        const title = document.createElement('h3'); title.textContent = name;
        const reason = document.createElement('p');
        reason.textContent = `${STYLE_LABELS[style]} name for a ${TRAIT_LABELS[trait]} ${PET_LABELS[pet]}.`;
        const favorite = document.createElement('button');
        favorite.type = 'button'; favorite.className = 'favorite-button';
        favorite.setAttribute('aria-label', `Save ${name} to favorites`);
        favorite.setAttribute('aria-pressed', favorites.has(name) ? 'true' : 'false');
        favorite.textContent = favorites.has(name) ? '★' : '☆';
        favorite.addEventListener('click', () => {
          if (favorites.has(name)) favorites.delete(name); else favorites.add(name);
          localStorage.setItem('png.favorites', JSON.stringify([...favorites]));
          favorite.setAttribute('aria-pressed', favorites.has(name) ? 'true' : 'false');
          favorite.textContent = favorites.has(name) ? '★' : '☆';
        });
        card.append(title, reason, favorite); results.append(card);
      });
      actions.hidden = false;
      summary.textContent = `${names.length} fresh ideas for a ${trait} ${pet}.`;
      shell.dataset.currentNames = JSON.stringify(names);
    };

    const generate = () => {
      const pet = petSelect.value, gender = genderSelect.value, style = styleSelect.value, trait = traitSelect.value;
      const key = `png.history.${pet}.${gender}.${style}.${trait}`;
      const recentHistory = safeJson(sessionStorage.getItem(key), []);
      const candidates = createCandidates(pet, gender, style, trait);
      const names = chooseFresh(candidates, recentHistory, 12);
      sessionStorage.setItem(key, JSON.stringify([...recentHistory, ...names].slice(-84)));
      render(names);
      const url = new URL(location.href); url.searchParams.set('pet', pet); url.searchParams.set('gender', gender); url.searchParams.set('style', style); url.searchParams.set('trait', trait);
      window.history.replaceState(null, '', url.pathname + '?' + url.searchParams.toString() + location.hash);
    };

    form.addEventListener('submit', e => { e.preventDefault(); generate(); });
    document.getElementById('copy-all')?.addEventListener('click', async () => {
      const names = safeJson(shell.dataset.currentNames, []);
      try { await navigator.clipboard.writeText(names.join(', ')); summary.textContent = 'Names copied to your clipboard.'; }
      catch { summary.textContent = names.join(', '); }
    });
    document.getElementById('clear-favorites')?.addEventListener('click', () => {
      favorites.clear(); localStorage.removeItem('png.favorites');
      results.querySelectorAll('.favorite-button').forEach(btn => { btn.setAttribute('aria-pressed','false'); btn.textContent='☆'; });
      summary.textContent = 'Saved favorites cleared.';
    });
    generate();
  }

  function initNavigation() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('site-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('is-open', !open);
    });
    nav.addEventListener('click', e => { if (e.target.matches('a')) { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false'); } });
  }

  function initBlogFilters() {
    const search = document.getElementById('blog-search');
    const cards = [...document.querySelectorAll('[data-blog-card]')];
    const buttons = [...document.querySelectorAll('[data-blog-filter]')];
    const empty = document.getElementById('blog-empty');
    if (!search || !cards.length) return;
    let category = 'All';
    const apply = () => {
      const q = search.value.trim().toLowerCase(); let visible = 0;
      cards.forEach(card => {
        const matchesText = card.textContent.toLowerCase().includes(q);
        const matchesCategory = category === 'All' || card.dataset.category === category;
        card.hidden = !(matchesText && matchesCategory); if (!card.hidden) visible++;
      });
      empty.style.display = visible ? 'none' : 'block';
    };
    search.addEventListener('input', apply);
    buttons.forEach(button => button.addEventListener('click', () => {
      category = button.dataset.blogFilter;
      buttons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      apply();
    }));
  }

  document.addEventListener('DOMContentLoaded', () => { initNavigation(); initGenerator(); initBlogFilters(); });
})();
