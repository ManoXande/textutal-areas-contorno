// Small UI polish: add a solid header background after scroll
(function () {
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    const y = window.scrollY || document.documentElement.scrollTop;
    header.classList.toggle('scrolled', y > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

