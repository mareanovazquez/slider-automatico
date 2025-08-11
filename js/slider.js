// === CONFIGURACIÓN DEL SLIDER ===
        
        /*
         * Configuración principal del slider:
         * - AUTOPLAY_INTERVAL: tiempo entre cambios automáticos (milisegundos)
         * - TRANSITION_DURATION: duración de la transición (debe coincidir con CSS)
         */
        const SLIDER_CONFIG = {
            AUTOPLAY_INTERVAL: 3000,  // 3 segundos
            TRANSITION_DURATION: 800  // 0.8 segundos (coincide con CSS)
        };

        // === VARIABLES GLOBALES ===
        let slideIndex = 0;  // Índice actual (comenzamos en 0)
        let slides = document.getElementsByClassName("mySlides");
        let autoplayTimer = null;
        let isAutoplayActive = true;

        // === FUNCIÓN PRINCIPAL PARA MOSTRAR SLIDES ===
        
        /*
         * Función para mostrar un slide específico:
         * - Remueve la clase 'active' de todos los slides
         * - Añade la clase 'active' solo al slide actual
         * - Actualiza indicadores y status
         */
        function showSlide(index) {
            // Validar que el índice esté en rango
            if (index >= slides.length) {
                slideIndex = 0;
            }
            if (index < 0) {
                slideIndex = slides.length - 1;
            }

            // Remover clase active de todos los slides
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
            }

            // Mostrar el slide actual
            slides[slideIndex].classList.add('active');

            // Actualizar indicadores y status
            updateIndicators();
            updateStatus();
        }

        // === FUNCIONES DE NAVEGACIÓN ===

        /*
         * Función para ir al siguiente slide:
         * - Incrementa el índice
         * - Resetea el autoplay para sincronizar
         */
        function nextSlide() {
            slideIndex++;
            showSlide(slideIndex);
            resetAutoplay();
        }

        /*
         * Función para ir al slide anterior:
         * - Decrementa el índice
         * - Resetea el autoplay para sincronizar
         */
        function previousSlide() {
            slideIndex--;
            showSlide(slideIndex);
            resetAutoplay();
        }

        /*
         * Función para ir a un slide específico:
         * - Se usa desde los indicadores
         * - Resetea el autoplay
         */
        function goToSlide(index) {
            slideIndex = index;
            showSlide(slideIndex);
            resetAutoplay();
        }

        // === AUTOPLAY ===

        /*
         * Función para iniciar el autoplay:
         * - Usa setInterval para cambios automáticos
         * - Se ejecuta cada AUTOPLAY_INTERVAL milisegundos
         */
        function startAutoplay() {
            autoplayTimer = setInterval(function() {
                slideIndex++;
                showSlide(slideIndex);
            }, SLIDER_CONFIG.AUTOPLAY_INTERVAL);
        }

        /*
         * Función para detener el autoplay:
         * - Limpia el timer actual
         */
        function stopAutoplay() {
            if (autoplayTimer) {
                clearInterval(autoplayTimer);
                autoplayTimer = null;
            }
        }

        /*
         * Función para resetear el autoplay:
         * - Detiene el timer actual
         * - Lo reinicia si está activo
         * - Útil cuando el usuario interactúa manualmente
         */
        function resetAutoplay() {
            if (isAutoplayActive) {
                stopAutoplay();
                startAutoplay();
            }
        }

        /*
         * Función para alternar entre play y pause:
         * - Cambia el estado del autoplay
         * - Actualiza el texto del botón
         */
        function toggleAutoplay() {
            const playPauseBtn = document.getElementById('playPauseBtn');
            
            if (isAutoplayActive) {
                stopAutoplay();
                isAutoplayActive = false;
                playPauseBtn.textContent = '▶ Play';
                updateStatus();
            } else {
                startAutoplay();
                isAutoplayActive = true;
                playPauseBtn.textContent = '⏸ Pausar';
                updateStatus();
            }
        }

        // === INDICADORES ===

        /*
         * Función para crear los indicadores (dots):
         * - Crea un dot por cada slide
         * - Añade event listeners para navegación
         */
        function createIndicators() {
            const indicatorsContainer = document.getElementById('indicators');
            
            for (let i = 0; i < slides.length; i++) {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (i === slideIndex) dot.classList.add('active');
                
                dot.addEventListener('click', function() {
                    goToSlide(i);
                });
                
                indicatorsContainer.appendChild(dot);
            }
        }

        /*
         * Función para actualizar los indicadores:
         * - Remueve 'active' de todos los dots
         * - Añade 'active' al dot correspondiente al slide actual
         */
        function updateIndicators() {
            const dots = document.getElementsByClassName('dot');
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove('active');
            }
            if (dots[slideIndex]) {
                dots[slideIndex].classList.add('active');
            }
        }

        // === STATUS Y UI ===

        /*
         * Función para actualizar el texto de status:
         * - Muestra slide actual y total
         * - Indica si autoplay está activo
         */
        function updateStatus() {
            const statusElement = document.getElementById('status');
            const autoplayStatus = isAutoplayActive ? 'Autoplay activo' : 'Autoplay pausado';
            statusElement.textContent = `Slide ${slideIndex + 1} de ${slides.length} - ${autoplayStatus}`;
        }

        // === INICIALIZACIÓN ===

        /*
         * Función de inicialización:
         * - Se ejecuta cuando el DOM está listo
         * - Configura el estado inicial del slider
         */
        function initSlider() {
            // Mostrar el primer slide
            showSlide(slideIndex);
            
            // Crear indicadores
            createIndicators();
            
            // Iniciar autoplay
            if (isAutoplayActive) {
                startAutoplay();
            }
            
            // Event listener para pausar con spacebar
            document.addEventListener('keydown', function(event) {
                if (event.code === 'Space') {
                    event.preventDefault();
                    toggleAutoplay();
                }
            });
        }

        // === EVENT LISTENERS ===

        /*
         * Inicializar cuando el DOM esté listo:
         * - Asegura que todos los elementos existan antes de manipularlos
         */
        document.addEventListener('DOMContentLoaded', initSlider);

        /*
         * Pausar autoplay cuando la pestaña no está visible:
         * - Mejora la performance
         * - Evita cambios cuando el usuario no está viendo
         */
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                stopAutoplay();
            } else if (isAutoplayActive) {
                startAutoplay();
            }
        });