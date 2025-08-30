// Initialize AOS
        document.addEventListener('DOMContentLoaded', function() {
            AOS.init({
                duration: 1000,
                once: true,
                easing: 'ease-in-out',
            });

            // Animate skill bars on scroll
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });

            // Theme toggle functionality
            const themeToggle = document.getElementById('theme-toggle');
            const icon = themeToggle.querySelector('i');
            
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                if (document.body.classList.contains('dark-mode')) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            });

            // Mobile menu functionality
            const menuBtn = document.getElementById('menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            menuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                
                if (navLinks.classList.contains('active')) {
                    menuBtn.innerHTML = '<i class="fas fa-times"></i>';
                } else {
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });

            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 70,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Form submission handling
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    // Here you would typically send the form data to a server
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                });
            }

            // Resume download button
            const resumeDownload = document.getElementById('resume-download');
            if (resumeDownload) {
                resumeDownload.addEventListener('click', function(e) {
                    e.preventDefault();
                    // In a real scenario, this would download a PDF file
                    alert('Resume download would start here. In a real implementation, this would download your resume PDF.');
                    // Alternatively, redirect to LinkedIn
                    // window.open('https://linkedin.com', '_blank');
                });
            }
        });