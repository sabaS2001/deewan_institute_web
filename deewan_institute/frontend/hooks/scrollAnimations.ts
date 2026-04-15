import { useEffect } from 'react';

export function useScrollAnimation() {
    useEffect(() => {
        const sections = document.querySelectorAll('.scroll-section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.01 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();  // Cleanup
    }, []);
}
