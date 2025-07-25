
// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  // 1) Registra los plugins UNA sola vez
gsap.registerPlugin(SplitText, MorphSVGPlugin);


  // 2) Burger toggle
  const nav    = document.querySelector('#nav');
  const burger = document.querySelector('#burger');
  if (nav && burger) {
    burger.addEventListener('change', () => {
      nav.classList.toggle('visible', burger.checked);
    });
  }

  // 3) Evita el FOUC en tu SVG y prepáralo
  const ra = document.getElementById('ra');
  if (ra) ra.removeAttribute('hidden');
  gsap.set('.ra-labels', { perspective: 400 });

  // 4) SplitText para tus labels
  const fbLabel = new SplitText('#ra-fb-label', { type: 'chars' });
  const bfLabel = new SplitText('#ra-bf-label', { type: 'chars' });
  const ytLabel = new SplitText('#ra-yt-label', { type: 'chars' });

  // 5) Definición de animaciones
  const labelFrom = {
    opacity: 0, scale: 0, y: 20, rotationX: 180,
    transformOrigin: '0% 50% -10', ease: 'elastic.out(1, 0.5)'
  };
  const labelTo = { ...labelFrom, ease: 'power4.in' };

  const ad     = '#ra-ad';
  const navbar = '#ra-navbar';
  const screen = '#ra-mac-screen';

  // 6) Timeline infinita
  const tl = gsap.timeline({ repeat: -1 });

  // Facebook intro
  tl.from(fbLabel.chars,    { ...labelFrom, duration: 2, stagger: 0.05 });
  tl.from(ad,               { duration: 1, morphSVG: '#ra-mac-screen', ease: 'back.out(1.7)', delay: 0.5 }, 0);
  tl.from(navbar,           { duration: 0.4, transformOrigin: 'center top', scaleY: 0, opacity: 0 }, '-=1');
  tl.from('#ra-navbar-content path', { duration: 0.4, y: -10, opacity: 0, stagger: 0.07 }, '-=0.5');
  tl.from('#ra-c1 path',    { duration: 0.6, transformOrigin: 'left', scaleX: 0, opacity: 0, ease: 'power4.out', stagger: 0.05 }, '-=1');
  tl.from('#ra-c2-rects path, #ra-fb-c3-rect', { duration: 0.6, y: 20, opacity: 0, stagger: 0.2 }, '-=1.8');
  tl.from('#ra-c2-items path', { duration: 0.6, transformOrigin: 'left', scaleX: 0, opacity: 0, ease: 'power4.out', stagger: 0.05 }, 2.5);
  tl.from('#ra-fb-c3-items g', { duration: 0.6, transformOrigin: 'left', scaleX: 0, opacity: 0, ease: 'power4.out', stagger: 0.1 }, '-=0.8');
  tl.to  (fbLabel.chars,    { ...labelTo, duration: 1, stagger: -0.05 });
  tl.to  ('#ra-fb',         { duration: 0.6, opacity: 0 }, '-=1');

  // BuzzFeed
  tl.to  (ad,               { duration: 1, morphSVG: '#ra-bf-ad', ease: 'back.out(1.7)' });
  tl.from(bfLabel.chars,    { ...labelFrom, duration: 2, stagger: 0.05 }, '-=1');
  tl.to  (screen,           { duration: 0.5, fill: '#fff' }, '-=2');
  tl.from('#ra-bf-logo',    { duration: 1, transformOrigin: 'left', scaleX: 0, opacity: 0, ease: 'power4.out' }, '-=2');
  tl.from('#ra-bf-dots path',{ duration: 0.8, transformOrigin: 'center', scale: 0.5, opacity: 0, ease: 'elastic.out(1,0.5)', stagger: 0.05 }, '-=2');
  tl.from('#ra-bf-navbar',  { duration: 0.8, opacity: 0 }, '-=1.5');
  tl.from('#ra-bf-menu-items path', { duration: 0.8, transformOrigin: 'left', x: -10, scaleX: 0, opacity: 0, ease: 'power4.out', stagger: 0.1 }, '-=1.5');
  tl.from('#ra-bf-menu-dots path', { duration: 0.8, transformOrigin: 'center', scale: 0.5, opacity: 0, ease: 'elastic.out(1,0.5)', stagger: 0.05 }, '-=1.2');
  tl.from('#ra-bf-thumbnails path', { duration: 0.8, transformOrigin: 'center', scale: 0.5, opacity: 0, ease: 'power4.out', stagger: 0.05 }, '-=1');
  tl.from('#ra-bf-c1-rect', { duration: 0.8, transformOrigin: 'center', scale: 0.8, opacity: 0 }, '-=1');
  tl.from('#ra-bf-c1-rect-items path',{ duration: 0.8, transformOrigin: 'right', scaleX: 0, opacity: 0, ease: 'power4.out', stagger: 0.1 }, '-=0.5');
  tl.from('#ra-bf-bottom-rect',{ duration: 0.6, y: 20, opacity: 0, ease: 'power4.out', stagger: 0.1 }, '-=0.5');
  tl.from('#ra-bf-bottom-item',{ duration: 0.8, transformOrigin: 'left', scaleX: 0, opacity: 0, ease: 'power4.out', stagger: 0.1 }, '-=1');
  tl.to  (bfLabel.chars,    { ...labelTo, duration: 1, stagger: -0.05 });
  tl.to  ('#ra-bf',         { duration: 0.6, opacity: 0 }, '-=1');

  // YouTube
  tl.to  (ad,               { duration: 1, morphSVG: '#ra-yt-ad', ease: 'back.out(1.7)' });
  tl.from(ytLabel.chars,    { ...labelFrom, duration: 2, stagger: 0.05 }, '-=1');
  tl.to  (screen,           { duration: 1, fill: '#e9eaed' }, '-=2');
  tl.from('#ra-yt-navigation > path, #ra-yt-navigation > g',{ duration: 0.4, y: -10, opacity: 0, stagger: 0.07 }, '-=2');
  tl.from('#ra-yt-video',   { duration: 0.6, transformOrigin: 'center', scale: 0.8, opacity: 0 }, '-=2');
  tl.from('#ra-yt-play',    { duration: 0.6, transformOrigin: 'center', scale: 0.8, opacity: 0 }, '-=1.5');
  tl.from('#ra-yt-c1-rect, #ra-yt-c2-rect',{ duration: 0.6, y: 20, opacity: 0, stagger: 0.07 }, '-=1.5');
  tl.from('#ra-yt-c1-content path',{ duration: 0.6, transformOrigin: 'left', scaleX: 0, opacity: 0, stagger: 0.07 }, '-=1.5');
  tl.from('#ra-yt-c2-thumbnails path',{ duration: 0.6, transformOrigin: 'center', scale: 0.8, opacity: 0, stagger: -0.07 }, '-=1');
  tl.from('#ra-yt-c2-items path',{ duration: 0.6, transformOrigin: 'left', scaleX: 0, opacity: 0, stagger: -0.07 }, '-=0.6');
  tl.to  (ytLabel.chars,    { ...labelTo, duration: 1, stagger: -0.05 });
  tl.to  ('#ra-yt',         { duration: 0.6, opacity: 0 }, '-=1');
  tl.to  (ad,               { duration: 1, morphSVG: '#ra-mac-screen', ease: 'back.in(1.7)' }, '-=0.6');
});