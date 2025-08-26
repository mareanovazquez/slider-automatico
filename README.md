# Slider Automático con Transiciones Suaves

Este proyecto es un **slider de imágenes automático** con transiciones suaves, controles manuales y autoplay configurable. Ideal para mostrar galerías de imágenes de forma atractiva y responsiva.

## Características

- Transición suave entre imágenes (fade).
- Autoplay configurable (pausa/reanuda con botón o barra espaciadora).
- Controles manuales: anterior, siguiente, play/pausa.
- Indicadores (dots) para navegar a cualquier slide.
- Estado visible: slide actual, total y estado de autoplay.
- Responsive: se adapta a dispositivos móviles y escritorio.
- Pausa automática cuando la pestaña no está visible.

## Estructura del proyecto

```
index.html
README.md
css/
  estilos.css
img/
  corgiBaby.jpg
  corgiPerfil.jpg
  corgiVolador.jpg
  gatoCenioFruncido.jpg
js/
  slider.js
```

## Uso

1. **Clona o descarga** este repositorio.
2. Abre `index.html` en tu navegador.
3. Disfruta del slider automático. Usa los botones para navegar o pausar/reanudar el autoplay.

## Personalización

- **Imágenes:** reemplaza o añade imágenes en la carpeta `img/` y edita los `<div class="mySlides">` en `index.html`.
- **Intervalo de autoplay:** modifica `AUTOPLAY_INTERVAL` en [`js/slider.js`](js/slider.js).
- **Duración de transición:** ajusta `TRANSITION_DURATION` en [`js/slider.js`](js/slider.js) y la propiedad `transition` en [`css/estilos.css`](css/estilos.css).

## Controles

- ⬅ Anterior: muestra la imagen anterior.
- Siguiente ➡: muestra la imagen siguiente.
- ⏸ Pausar / ▶ Play: pausa o reanuda el autoplay.
- Dots: navega directamente a cualquier slide.
- Barra espaciadora: pausa/reanuda el autoplay.

## Créditos

Desarrollado por [Mariano].

---

¡Personaliza este slider para tus propios