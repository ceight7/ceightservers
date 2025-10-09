// Toggle menu mobile
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Animasi scroll untuk elemen dengan class fade-in
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Smooth scroll untuk anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Fungsi untuk menangani klik tombol like
document.querySelectorAll('.fa-thumbs-up').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('fas');
        this.classList.toggle('far');
        
        if (this.classList.contains('fas')) {
            this.style.color = '#38bdf8';
        } else {
            this.style.color = '';
        }
    });
});

// Fungsi untuk menampilkan tahun saat ini di footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('footer p');
    
    yearElements.forEach(element => {
        if (element.textContent.includes('2023')) {
            element.textContent = element.textContent.replace('2023', currentYear);
        }
    });
});

// Fungsi untuk menangani form kontak (jika ada)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Di sini Anda bisa menambahkan logika untuk mengirim form
        // Misalnya menggunakan fetch API atau library lainnya
        
        alert('Terima kasih! Pesan Anda telah dikirim.');
        this.reset();
    });
}

// Fungsi untuk scroll to top
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
scrollToTopButton.classList.add('fixed', 'bottom-6', 'right-6', 'bg-sky-450', 'hover:bg-sky-500', 'text-white', 'w-12', 'h-12', 'rounded', 'flex', 'items-center', 'justify-center', 'shadow-lg', 'transition-colors', 'z-40');
scrollToTopButton.style.display = 'none';

document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});