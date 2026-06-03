/* ═══════════════════════════════════════════
   HUZAIFA MUQEET — PORTFOLIO SCRIPTS v2
   ═══════════════════════════════════════════ */

/* ── VANTA.JS NET BACKGROUND ── */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof VANTA !== 'undefined' && typeof THREE !== 'undefined') {
    VANTA.NET({
      el: '#vanta-bg',
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x00d4ff,
      backgroundColor: 0x060912,
      points: 9.0,
      maxDistance: 22.0,
      spacing: 17.0,
      showDots: true,
    });
  }
});

/* ── CROSSHAIR CURSOR ── */
const cursorGlow  = document.getElementById('cursor-glow');
const cursorCross = document.getElementById('cursor-cross');
let mouseX = -1000, mouseY = -1000;
let glowX = -1000, glowY = -1000;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  // Cross snaps instantly
  cursorCross.style.left = e.clientX + 'px';
  cursorCross.style.top  = e.clientY + 'px';
});

// Glow follows with lerp for smooth lag
function animGlow() {
  glowX += (mouseX - glowX) * 0.08;
  glowY += (mouseY - glowY) * 0.08;
  cursorGlow.style.left = glowX + 'px';
  cursorGlow.style.top  = glowY + 'px';
  requestAnimationFrame(animGlow);
}
animGlow();

// Hover state — expand/change color
const hoverTargets = document.querySelectorAll('a, button, .skill-tag, .exp-item, .project-card, .contact-item, .ham');
hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hovered'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hovered'));
});

/* ── TYPEWRITER ── */
const phrases = [
  'Full-Stack Developer_',
  'AI Platform Builder_',
  'React & Node.js Engineer_',
  'SaaS Product Creator_',
  'MERN Stack Developer_',
];
let pi = 0, ci = 0, deleting = false;
const tw = document.getElementById('typewriter');

function type() {
  const phrase = phrases[pi];
  if (!deleting) {
    ci++;
    if (ci > phrase.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    ci--;
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
    }
  }
  tw.innerHTML = `<span style="color:var(--cyan)">&gt; </span>${phrase.slice(0, ci)}<span class="typewriter-cursor">|</span>`;
  setTimeout(type, deleting ? 48 : 88);
}
type();

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── NAVBAR SCROLL ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 60);
});

/* ── MOBILE MENU ── */
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

/* ── CONTACT FORM ── */
function handleSubmit(e) {
  e.preventDefault();
  const name    = document.getElementById('fname').value;
  const email   = document.getElementById('femail').value;
  const subject = document.getElementById('fsubject').value || 'Portfolio Inquiry';
  const msg     = document.getElementById('fmsg').value;
  const body    = encodeURIComponent(`Hi Huzaifa,\n\nMy name is ${name} (${email}).\n\n${msg}`);
  window.location.href = `mailto:huzaifamuqeet2@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  document.getElementById('form-success').style.display = 'block';
  document.getElementById('fsubmit').textContent = '✓ Sent!';
}

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── PROJECT IMAGE LAZY LOAD ── */
// When images load successfully, add .loaded class for fade-in
document.querySelectorAll('.project-image img').forEach(img => {
  if (img.complete && img.naturalWidth > 0) {
    img.classList.add('loaded');
    img.closest('.project-image').classList.remove('no-img');
  } else {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
      img.closest('.project-image').classList.remove('no-img');
    });
    img.addEventListener('error', () => {
      img.closest('.project-image').classList.add('no-img');
    });
  }
});