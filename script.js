// Анимация заголовков
document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".section-title");

    titles.forEach(title => {
        title.style.opacity = 0;
        title.style.transform = "translateY(50px)";

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, { threshold: 0.5 });

        observer.observe(title);
    });
});

// Анимация кнопки "Заказать сейчас"
const orderButton = document.querySelector('.order-now-btn');
orderButton.addEventListener('mouseover', () => {
    orderButton.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
});
orderButton.addEventListener('mouseout', () => {
    orderButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
});
