<script>
function ajustarZoom() {
  const container = document.querySelector('.container'); // cambia al id/clase que uses
  if (!container) return;

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Calculamos la escala que mejor ajusta el contenedor
  const scale = Math.min(vw / container.offsetWidth, vh / container.offsetHeight);

  container.style.transform = `scale(${scale})`;
  container.style.transformOrigin = 'top center';
}

// Llamamos al cargar y cuando se redimensiona
window.addEventListener('load', ajustarZoom);
window.addEventListener('resize', ajustarZoom);
</script>
