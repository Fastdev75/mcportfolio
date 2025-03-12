// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        mirror: false,
        offset: 50
    });

    // Navbar color change on scroll
    const header = document.getElementById('header');
    const changeHeaderBg = () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', changeHeaderBg);
    changeHeaderBg(); // Run once on page load

    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.classList.remove('show');
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get header height for offset
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for background elements
    const handleParallax = () => {
        const scrollPosition = window.pageYOffset;
        
        // Stars parallax
        document.getElementById('stars').style.transform = `translateY(${scrollPosition * 0.1}px)`;
        document.getElementById('stars2').style.transform = `translateY(${scrollPosition * 0.2}px)`;
        document.getElementById('stars3').style.transform = `translateY(${scrollPosition * 0.3}px)`;
    };
    
    window.addEventListener('scroll', handleParallax);

    // Add animation to timeline items when in viewport
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const checkTimeline = () => {
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight * 0.85) {
                if (item.classList.contains('timeline-item')) {
                    if (Array.from(timelineItems).indexOf(item) % 2 === 0) {
                        item.classList.add('slide-in-left');
                    } else {
                        item.classList.add('slide-in-right');
                    }
                }
            }
        });
    };
    
    window.addEventListener('scroll', checkTimeline);
    checkTimeline(); // Run once on load

    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });

    // Skill categories progress animation
    const skillCategories = document.querySelectorAll('.skill-category');
    
    const animateSkills = () => {
        skillCategories.forEach(category => {
            const rect = category.getBoundingClientRect();
            
            if (rect.top < window.innerHeight * 0.8) {
                category.style.opacity = '1';
                category.style.transform = 'translateY(0)';
            }
        });
    };
    
    skillCategories.forEach(category => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        category.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Run once on load

    // Typing effect for hero section
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero h2');
    
    if (heroTitle && heroSubtitle) {
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                heroSubtitle.style.opacity = '1';
                heroSubtitle.style.transform = 'translateY(0)';
            }, 300);
        }, 500);
    }

    // Initialize hero title and subtitle
    if (heroTitle && heroSubtitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(20px)';
        heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(20px)';
        heroSubtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    }

    // Add custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });
    
    // Add hover effect to links and buttons
    const links = document.querySelectorAll('a, button, .btn, .project-card, .exp-card, .skill-category');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            cursor.classList.add('active');
        });
        
        link.addEventListener('mouseleave', function() {
            cursor.classList.remove('active');
        });
    });

    // CSS for custom cursor
    const style = document.createElement('style');
    style.innerHTML = `
        .custom-cursor {
            position: fixed;
            width: 30px;
            height: 30px;
            border: 2px solid var(--secondary-color);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            transition: width 0.3s, height 0.3s, border-color 0.3s;
            z-index: 9999;
        }
        
        .cursor-dot {
            position: fixed;
            width: 8px;
            height: 8px;
            background-color: var(--secondary-color);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 10000;
        }
        
        .custom-cursor.active {
            width: 50px;
            height: 50px;
            border-color: var(--accent-color);
            background-color: rgba(218, 30, 40, 0.1);
        }
        
        @media (max-width: 768px) {
            .custom-cursor, .cursor-dot {
                display: none;
            }
        }
    `;
    
    document.head.appendChild(style);
});
