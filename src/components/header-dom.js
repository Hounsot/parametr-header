/*
  Vanilla JS behavior for header interactions:
  - Toggle phone dropdown via [data-dropdown-trigger]
  - Toggle burger menu via [data-menu-trigger]
  - Close via overlays
  - Smooth-scroll on in-menu anchor links with header offset
*/

(function initHeaderDom() {
    if (typeof window === 'undefined') return;
    if (window.__headerDomInitialized) return;
    window.__headerDomInitialized = true;

    function getActiveClassFrom(el, fallback = 'active') {
        return (el && (el.getAttribute('data-active-class') || el.dataset.activeClass)) || fallback;
    }

    function getCssVarPx(varName, fallback = 0) {
        const root = document.documentElement;
        const value = getComputedStyle(root).getPropertyValue(varName);
        const parsed = parseInt(value, 10);
        return Number.isFinite(parsed) ? parsed : fallback;
    }

    function smoothScrollToHash(hash) {
        const id = (hash || '').replace('#', '');
        const headerHeight = getCssVarPx('--header-height', 0);
        let top = 0;
        if (id) {
            const el = document.getElementById(id);
            if (!el) return;
            top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        } else {
            top = 0;
        }
        try {
            window.scrollTo({ top, behavior: 'smooth' });
        } catch (_) {
            window.scrollTo(0, top);
        }
    }

    function toggleDropdown(nextOpen) {
        const dropdown = document.getElementById('header-dropdown');
        const overlay = document.querySelector('[data-dropdown-overlay]');
        const triggers = Array.from(document.querySelectorAll('[data-dropdown-trigger]'));
        const activeClass = dropdown ? getActiveClassFrom(dropdown) : 'active';
        const overlayActive = overlay ? getActiveClassFrom(overlay) : 'active';

        const open = typeof nextOpen === 'boolean' ? nextOpen : !(dropdown && dropdown.classList.contains(activeClass));

        if (dropdown) dropdown.classList.toggle(activeClass, open);
        if (overlay) overlay.classList.toggle(overlayActive, open);
        triggers.forEach(t => t.classList.toggle(getActiveClassFrom(t), open));
    }

    function toggleMenu(nextOpen) {
        const menu = document.getElementById('header-burger-menu');
        const overlay = document.querySelector('[data-menu-overlay]');
        const triggers = Array.from(document.querySelectorAll('[data-menu-trigger]'));
        const activeClass = menu ? getActiveClassFrom(menu) : 'active';
        const overlayActive = overlay ? getActiveClassFrom(overlay) : 'active';

        const open = typeof nextOpen === 'boolean' ? nextOpen : !(menu && menu.classList.contains(activeClass));

        if (menu) menu.classList.toggle(activeClass, open);
        if (overlay) overlay.classList.toggle(overlayActive, open);
        triggers.forEach(t => t.classList.toggle(getActiveClassFrom(t), open));
    }

    function bindEvents() {
        document.addEventListener('click', (e) => {
            const dropdownTrigger = e.target.closest('[data-dropdown-trigger]');
            if (dropdownTrigger) {
                e.preventDefault();
                toggleDropdown();
                return;
            }

            const menuTrigger = e.target.closest('[data-menu-trigger]');
            if (menuTrigger) {
                e.preventDefault();
                toggleMenu();
                return;
            }

            const dropdownOverlay = e.target.closest('[data-dropdown-overlay]');
            if (dropdownOverlay) {
                e.preventDefault();
                toggleDropdown(false);
                return;
            }

            const menuOverlay = e.target.closest('[data-menu-overlay]');
            if (menuOverlay) {
                e.preventDefault();
                toggleMenu(false);
                return;
            }

            const burgerLink = e.target.closest('#header-burger-menu [data-burger-link]');
            if (burgerLink) {
                const href = burgerLink.getAttribute('href');
                toggleMenu(false);
                toggleDropdown(false);
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    smoothScrollToHash(href);
                }
                return;
            }

            const scrollEl = e.target.closest('[data-scroll-to]');
            if (scrollEl) {
                const target = scrollEl.getAttribute('data-scroll-to');
                if (target) {
                    e.preventDefault();
                    toggleMenu(false);
                    toggleDropdown(false);
                    smoothScrollToHash(target.startsWith('#') ? target : `#${target}`);
                }
                return;
            }

            const anchor = e.target.closest('a[href^="#"]');
            if (anchor) {
                const href = anchor.getAttribute('href');
                e.preventDefault();
                toggleMenu(false);
                toggleDropdown(false);
                smoothScrollToHash(href);
                return;
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                toggleMenu(false);
                toggleDropdown(false);
            }
        });
    }

    bindEvents();
})();


