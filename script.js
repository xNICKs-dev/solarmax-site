/* ==========================================================================
   SOLARMAX - SCRIPT INTERATIVO
   Carrossel de projetos, rolagem suave e navegação
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---- 1. ROLAGEM SUAVE NOS LINKS ÂNCORA INTERNOS ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    });
  });

  // ---- 2. CARROSSEL DA VITRINE DE PROJETOS ----
  const showcaseTrack = document.getElementById('showcase-track');
  const prevBtn = document.getElementById('project-prev-btn');
  const nextBtn = document.getElementById('project-next-btn');

  if (showcaseTrack && prevBtn && nextBtn) {
    function getScrollStep() {
      const card = showcaseTrack.querySelector('.showcase-card');
      return card ? (card.offsetWidth + 24) : 360;
    }

    prevBtn.addEventListener('click', () => {
      showcaseTrack.scrollBy({
        left: -getScrollStep(),
        behavior: 'smooth'
      });
    });

    nextBtn.addEventListener('click', () => {
      showcaseTrack.scrollBy({
        left: getScrollStep(),
        behavior: 'smooth'
      });
    });
  }

});
