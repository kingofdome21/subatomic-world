// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize variables
  let currentLanguage = 'en';
  let currentCard = null;
  const overlay = document.querySelector('.overlay');
  
  // DOM elements for language switching
  const enBtn = document.getElementById('en-btn');
  const bsBtn = document.getElementById('bs-btn');
  const trBtn = document.getElementById('tr-btn');
  
  // DOM elements for particle interaction
  const nucleus = document.getElementById('nucleus');
  const electron = document.getElementById('electron');
  const upQuark = document.getElementById('up-quark');
  const downQuark = document.getElementById('down-quark');
  const backButton = document.getElementById('back-button');
  
  // Particle cards
  const electronCard = document.getElementById('electron-card');
  const protonCard = document.getElementById('proton-card');
  const neutronCard = document.getElementById('neutron-card');
  const upQuarkCard = document.getElementById('up-quark-card');
  const downQuarkCard = document.getElementById('down-quark-card');
  
  // Close buttons for cards
  const closeButtons = document.querySelectorAll('.close-card');
  
  // Initialize electron animation
  initElectronAnimation();
  
  // Set up language switching
  enBtn.addEventListener('click', () => switchLanguage('en'));
  bsBtn.addEventListener('click', () => switchLanguage('bs'));
  trBtn.addEventListener('click', () => switchLanguage('tr'));
  
  // Set up particle interactions
  nucleus.addEventListener('click', () => {
    // Show both proton and neutron cards when clicking on nucleus
    showCard(protonCard);
    setTimeout(() => {
      hideCard(protonCard);
      showCard(neutronCard);
    }, 5000);
  });
  
  electron.addEventListener('click', () => showCard(electronCard));
  upQuark.addEventListener('click', () => showCard(upQuarkCard));
  downQuark.addEventListener('click', () => showCard(downQuarkCard));
  
  // Set up close functionality for cards
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (currentCard) {
        hideCard(currentCard);
      }
    });
  });
  
  // Set up overlay click to close cards
  overlay.addEventListener('click', () => {
    if (currentCard) {
      hideCard(currentCard);
    }
  });
  
  // Back button functionality
  backButton.addEventListener('click', () => {
    if (currentCard) {
      hideCard(currentCard);
    }
  });
  
  // Apply initial language
  applyLanguage(currentLanguage);
  
  // Function to switch language
  function switchLanguage(lang) {
    currentLanguage = lang;
    applyLanguage(lang);
    
    // Update active button
    enBtn.classList.remove('active');
    bsBtn.classList.remove('active');
    trBtn.classList.remove('active');
    
    if (lang === 'en') {
      enBtn.classList.add('active');
    } else if (lang === 'bs') {
      bsBtn.classList.add('active');
    } else if (lang === 'tr') {
      trBtn.classList.add('active');
    }
  }
  
  // Function to apply language to all elements
  function applyLanguage(lang) {
    // Site title
    document.getElementById('site-title').textContent = translations[lang].siteTitle;
    
    // Section titles
    document.getElementById('explore-atom').textContent = translations[lang].exploreAtom;
    document.getElementById('explore-quarks').textContent = translations[lang].exploreQuarks;
    
    // Electron card
    document.getElementById('electron-title').textContent = translations[lang].electronTitle;
    document.getElementById('electron-name').textContent = translations[lang].electronName;
    document.getElementById('electron-symbol').innerHTML = translations[lang].electronSymbol;
    document.getElementById('electron-mass').innerHTML = translations[lang].electronMass;
    document.getElementById('electron-charge').innerHTML = translations[lang].electronCharge;
    document.getElementById('electron-description').textContent = translations[lang].electronDescription;
    
    // Proton card
    document.getElementById('proton-title').textContent = translations[lang].protonTitle;
    document.getElementById('proton-name').textContent = translations[lang].protonName;
    document.getElementById('proton-symbol').innerHTML = translations[lang].protonSymbol;
    document.getElementById('proton-mass').innerHTML = translations[lang].protonMass;
    document.getElementById('proton-charge').innerHTML = translations[lang].protonCharge;
    document.getElementById('proton-description').textContent = translations[lang].protonDescription;
    
    // Neutron card
    document.getElementById('neutron-title').textContent = translations[lang].neutronTitle;
    document.getElementById('neutron-name').textContent = translations[lang].neutronName;
    document.getElementById('neutron-symbol').innerHTML = translations[lang].neutronSymbol;
    document.getElementById('neutron-mass').innerHTML = translations[lang].neutronMass;
    document.getElementById('neutron-charge').innerHTML = translations[lang].neutronCharge;
    document.getElementById('neutron-description').textContent = translations[lang].neutronDescription;
    
    // Up quark card
    document.getElementById('up-quark-title').textContent = translations[lang].upQuarkTitle;
    document.getElementById('up-quark-name').textContent = translations[lang].upQuarkName;
    document.getElementById('up-quark-symbol').innerHTML = translations[lang].upQuarkSymbol;
    document.getElementById('up-quark-mass').innerHTML = translations[lang].upQuarkMass;
    document.getElementById('up-quark-charge').innerHTML = translations[lang].upQuarkCharge;
    document.getElementById('up-quark-description').textContent = translations[lang].upQuarkDescription;
    
    // Down quark card
    document.getElementById('down-quark-title').textContent = translations[lang].downQuarkTitle;
    document.getElementById('down-quark-name').textContent = translations[lang].downQuarkName;
    document.getElementById('down-quark-symbol').innerHTML = translations[lang].downQuarkSymbol;
    document.getElementById('down-quark-mass').innerHTML = translations[lang].downQuarkMass;
    document.getElementById('down-quark-charge').innerHTML = translations[lang].downQuarkCharge;
    document.getElementById('down-quark-description').textContent = translations[lang].downQuarkDescription;
    
    // Footer
    document.getElementById('footer-text').textContent = translations[lang].footerText;
    document.getElementById('copyright').textContent = translations[lang].copyright;
  }
  
  // Function to show a particle card
  function showCard(card) {
    currentCard = card;
    card.classList.add('active');
    overlay.classList.add('active');
  }
  
  // Function to hide a particle card
  function hideCard(card) {
    card.classList.remove('active');
    overlay.classList.remove('active');
    currentCard = null;
  }
  
  // Function to initialize electron animation
  function initElectronAnimation() {
    const electronElement = document.getElementById('electron');
    const orbit = document.querySelector('.orbit');
    let angle = 0;
    
    function animateElectron() {
      const orbitRadius = orbit.offsetWidth / 2;
      const centerX = orbit.offsetLeft + orbitRadius;
      const centerY = orbit.offsetTop + orbitRadius;
      
      const x = centerX + orbitRadius * Math.cos(angle);
      const y = centerY + orbitRadius * Math.sin(angle);
      
      electronElement.style.left = `${x - electronElement.offsetWidth / 2}px`;
      electronElement.style.top = `${y - electronElement.offsetHeight / 2}px`;
      
      angle += 0.02;
      requestAnimationFrame(animateElectron);
    }
    
    animateElectron();
  }
});
