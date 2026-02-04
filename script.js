const navbar = document.getElementById('navbar');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const iconMenu = document.getElementById('icon-menu');
        const iconClose = document.getElementById('icon-close');
        const desktopMenu = document.getElementById('desktop-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        // Efeito de Scroll na Navbar
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white', 'shadow-md', 'py-2');
                navbar.classList.remove('bg-transparent', 'py-6');
                desktopMenu.classList.remove('text-white');
                desktopMenu.classList.add('text-gray-800');
                mobileMenuBtn.classList.remove('text-white');
                mobileMenuBtn.classList.add('text-gray-800');
            } else {
                navbar.classList.remove('bg-white', 'shadow-md', 'py-2');
                navbar.classList.add('bg-transparent', 'py-6');
                desktopMenu.classList.add('text-white');
                desktopMenu.classList.remove('text-gray-800');
                mobileMenuBtn.classList.add('text-white');
                mobileMenuBtn.classList.remove('text-gray-800');
            }
        });

        // Esconder menu mobile "sanduíche"
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                iconMenu.classList.add('hidden');
                iconClose.classList.remove('hidden');
                navbar.classList.add('bg-white', 'shadow-md');
                mobileMenuBtn.classList.remove('text-white');
                mobileMenuBtn.classList.add('text-gray-800');
            } else {
                mobileMenu.classList.add('hidden');
                iconMenu.classList.remove('hidden');
                iconClose.classList.add('hidden');
                if (window.scrollY <= 50) {
                    navbar.classList.remove('bg-white', 'shadow-md');
                    mobileMenuBtn.classList.add('text-white');
                    mobileMenuBtn.classList.remove('text-gray-800');
                }
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                iconMenu.classList.remove('hidden');
                iconClose.classList.add('hidden');
            });
        });

        //  LÓGICA DOS MINI CARROSSÉIS 
        
        // Objeto para guardar o índice atual de cada carrossel (1, 2 e 3)
        const carouselStates = {
            1: 0,
            2: 0,
            3: 0
        };

        // Função genérica para mover qualquer um dos 3 carrosséis
        // id: número do carrossel (1, 2 ou 3)
        // direção: -1 (anterior) ou 1 (próximo)
        function moveMiniCarousel(id, direction) {
            const track = document.getElementById(`track-${id}`);
            const totalSlides = 4; // 4 fotos em cada carrossel
            
            // Atualiza o índice
            let newIndex = carouselStates[id] + direction;

            // Lógica circular (se passar do último, volta pro primeiro e vice-versa)
            if (newIndex < 0) {
                newIndex = totalSlides - 1;
            } else if (newIndex >= totalSlides) {
                newIndex = 0;
            }

            // Salva o novo estado
            carouselStates[id] = newIndex;

            // Move o track
            track.style.transform = `translateX(-${newIndex * 100}%)`;
        }