// Dòng này đặt một listener (người nghe) cho sự kiện DOMContentLoaded, 
// nghĩa là đoạn mã bên trong sẽ chỉ thực thi sau khi toàn bộ
// nội dung của tài liệu HTML đã được tải xong. 
// Điều này đảm bảo rằng các phần tử trong HTML
// đã sẵn sàng trước khi đoạn mã JavaScript được thực hiện.
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggles = document.querySelectorAll('.dark__mode');

    darkModeToggles.forEach(darkModeToggle => {
        const sunIcon = darkModeToggle.querySelector('.fa-sun');
        const moonIcon = darkModeToggle.querySelector('.fa-moon');
        const rootElement = document.documentElement;

        // Hàm chuyển đổi chế độ
        darkModeToggle.addEventListener('click', () => {
            if (rootElement.classList.contains('dark-mode')) {
                rootElement.classList.remove('dark-mode');
                sunIcon.classList.add('active');
                moonIcon.classList.remove('active');
            } else {
                rootElement.classList.add('dark-mode');
                sunIcon.classList.remove('active');
                moonIcon.classList.add('active');
            }
        });
    });
});

// Hiệu ứng chữ chạy
const spanElement = document.querySelector('.info__header .my-name');
const phrases = ['Frontend Developer', 'Minh Hung'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (!isDeleting) {
        spanElement.innerText = currentPhrase.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); 
            return;
        }
    } else {
        spanElement.innerText = currentPhrase.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length; 
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100); 
}
typeEffect();