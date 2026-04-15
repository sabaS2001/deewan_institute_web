import { useEffect } from 'react';

export function useNavigation() {
    useEffect(() => {
        const updateActiveLink = () => {
            const hash = window.location.hash.slice(1); // Remove #
            document.querySelectorAll('.nav-link').forEach(link => {
                link.removeAttribute('aria-current');
                if (link.getAttribute('href') === `#${hash}`) {
                    link.setAttribute('aria-current', 'page');
                }
            });
        };

        window.addEventListener('hashchange', updateActiveLink);
        updateActiveLink(); // Initial call
        return () => window.removeEventListener('hashchange', updateActiveLink);
    }, []);
}