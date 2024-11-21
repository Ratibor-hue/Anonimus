// Функция для отслеживания видимости элементов
function handleScrollAnimations() {
    const scrollElements = document.querySelectorAll('.scroll-animation');
    
    scrollElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            element.classList.add('visible');
        }
    });

    // Анимация заголовка при загрузке страницы
    const header = document.getElementById("header");
    const headerRect = header.getBoundingClientRect();
    if (headerRect.top >= 0 && headerRect.bottom <= window.innerHeight) {
        header.classList.add('visible');
    }
}

// Запуск анимации при прокрутке страницы
window.addEventListener('scroll', handleScrollAnimations);

// Запуск анимации при загрузке страницы
window.addEventListener('load', handleScrollAnimations);
