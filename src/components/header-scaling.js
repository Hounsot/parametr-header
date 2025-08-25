/**
 * Header Responsive Scaling System
 * Based on proportional scaling approach similar to the main site scaling
 */

class HeaderScaling {
    constructor() {
        // Base screen widths for scaling calculations
        this.baseDesktop = 1440;
        this.baseTablet = 768;
        this.baseMobile = 360;
        
        // Breakpoints for responsive behavior
        this.mobileBreakpoint = 768;
        this.tabletBreakpoint = 1024;
        
        // Scalable variables for different screen sizes
        this.scalableVars = {
            desktop: {
                '--header-height': 80,
                '--header-padding': 40,
                '--header-dropdown-height': 140,
                '--text-size': 13,
                '--main-width': 1440,
                '--logo-height': 24,
                '--logo-width': 183,
                '--nav-gap': 40,
                '--header-item-gap': 8,
                '--mobile-icon-size': 30,
                '--burger-menu-padding': 24,
                '--burger-menu-header-text-size': 16,
                '--burger-menu-close-size': 40,
                '--burger-menu-list-item-height': 58,
                '--burger-menu-list-text-size': 38,
                '--burger-menu-footer-gap': 10,
                '--burger-menu-footer-link-width': 195,
                '--burger-menu-footer-link-height': 20,
                '--burger-menu-footer-link-font-size': 16,
                '--burger-menu-footer-image-size': 34,
                '--dropdown-icon-size': 54,
                '--dropdown-subtitle-size': 18,
                '--dropdown-phone-size': 32,
                '--dropdown-gap': 20,
                '--header-item-wrapper-height': 28,
                '--transition-duration': 0.6
            },
            tablet: {
                '--header-height': 70,
                '--header-padding': 35,
                '--header-dropdown-height': 200,
                '--text-size': 12,
                '--main-width': 1024,
                '--logo-height': 22,
                '--logo-width': 167,
                '--nav-gap': 30,
                '--header-item-gap': 7,
                '--mobile-icon-size': 28,
                '--burger-menu-padding': 22,
                '--burger-menu-header-text-size': 15,
                '--burger-menu-close-size': 36,
                '--burger-menu-list-item-height': 52,
                '--burger-menu-list-text-size': 34,
                '--burger-menu-footer-gap': 12,
                '--burger-menu-footer-link-width': 200,
                '--burger-menu-footer-link-height': 18,
                '--burger-menu-footer-link-font-size': 16,
                '--burger-menu-footer-image-size': 32,
                '--dropdown-icon-size': 48,
                '--dropdown-subtitle-size': 16,
                '--dropdown-phone-size': 28,
                '--dropdown-gap': 18,
                '--header-item-wrapper-height': 26,
                '--transition-duration': 0.6
            },
            mobile: {
                '--header-height': 60,
                '--header-padding': 24,
                '--header-dropdown-height': 240,
                '--text-size': 12,
                '--main-width': 360,
                '--logo-height': 18,
                '--logo-width': 137,
                '--nav-gap': 20,
                '--header-item-gap': 6,
                '--mobile-icon-size': 26,
                '--burger-menu-padding': 20,
                '--burger-menu-header-text-size': 14,
                '--burger-menu-close-size': 34,
                '--burger-menu-list-item-height': 48,
                '--burger-menu-list-text-size': 24,
                '--burger-menu-footer-gap': 20,
                '--burger-menu-footer-link-width': 196,
                '--burger-menu-footer-link-height': 16,
                '--burger-menu-footer-link-font-size': 12,
                '--burger-menu-footer-image-size': 38,
                '--dropdown-icon-size': 40,
                '--dropdown-subtitle-size': 14,
                '--dropdown-phone-size': 24,
                '--dropdown-gap': 16,
                '--header-item-wrapper-height': 24,
                '--transition-duration': 0.6
            }
        };
        
        this.init();
    }
    
    init() {
        // Apply initial scaling
        this.updateScale();
        
        // Listen for window resize
        window.addEventListener('resize', () => this.updateScale());
        
        // Also listen for orientation change on mobile devices
        window.addEventListener('orientationchange', () => {
            setTimeout(() => this.updateScale(), 100);
        });
    }
    
    updateScale() {
        const screenWidth = window.innerWidth;
        const root = document.documentElement;
        
        if (screenWidth <= this.mobileBreakpoint) {
            // Mobile scaling
            const scale = screenWidth / this.baseMobile;
            this.applyScale(root, this.scalableVars.mobile, scale, 'mobile');
        } else if (screenWidth <= this.tabletBreakpoint) {
            // Tablet scaling
            const scale = screenWidth / this.baseTablet;
            this.applyScale(root, this.scalableVars.tablet, scale, 'tablet');
        } else {
            // Desktop scaling
            const scale = screenWidth / this.baseDesktop;
            this.applyScale(root, this.scalableVars.desktop, scale, 'desktop');
        }
    }
    
    applyScale(root, variables, scale, mode) {
        // Apply scaled variables
        Object.entries(variables).forEach(([property, baseValue]) => {
            if (property === '--transition-duration') {
                // Don't scale transition duration
                root.style.setProperty(property, `${baseValue}s`);
            } else if (property === '--main-width') {
                // Don't scale main-width beyond certain limits
                const scaledValue = Math.min(baseValue * scale, baseValue);
                root.style.setProperty(property, `${scaledValue.toFixed(2)}px`);
            } else {
                // Scale normally
                const scaledValue = (baseValue * scale).toFixed(2);
                root.style.setProperty(property, `${scaledValue}px`);
            }
        });
        
        // Set current responsive mode as CSS custom property for potential CSS usage
        root.style.setProperty('--responsive-mode', mode);
        
        // Add body class for mode-specific styling if needed
        document.body.className = document.body.className.replace(/responsive-(mobile|tablet|desktop)/g, '');
        document.body.classList.add(`responsive-${mode}`);
        
        // Dispatch custom event for other scripts that might need to know about scaling changes
        window.dispatchEvent(new CustomEvent('headerScaleUpdate', { 
            detail: { mode, scale, screenWidth: window.innerWidth } 
        }));
    }
    
    // Utility methods
    getCurrentMode() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= this.mobileBreakpoint) return 'mobile';
        if (screenWidth <= this.tabletBreakpoint) return 'tablet';
        return 'desktop';
    }
    
    getCurrentScale() {
        const screenWidth = window.innerWidth;
        const mode = this.getCurrentMode();
        
        switch (mode) {
            case 'mobile': return screenWidth / this.baseMobile;
            case 'tablet': return screenWidth / this.baseTablet;
            case 'desktop': return screenWidth / this.baseDesktop;
            default: return 1;
        }
    }
    
    // Method to add new scalable variables dynamically
    addVariable(property, desktopValue, tabletValue, mobileValue) {
        this.scalableVars.desktop[property] = desktopValue;
        this.scalableVars.tablet[property] = tabletValue;
        this.scalableVars.mobile[property] = mobileValue;
        this.updateScale();
    }
    
    // Method to update breakpoints if needed
    setBreakpoints(baseDesktop, baseTablet, baseMobile, mobileBreakpoint, tabletBreakpoint) {
        this.baseDesktop = baseDesktop;
        this.baseTablet = baseTablet;
        this.baseMobile = baseMobile;
        this.mobileBreakpoint = mobileBreakpoint;
        this.tabletBreakpoint = tabletBreakpoint;
        this.updateScale();
    }
}

// Initialize header scaling
const headerScaling = new HeaderScaling();

// Export for potential external use
if (typeof window !== 'undefined') {
    window.HeaderScaling = HeaderScaling;
    window.headerScaling = headerScaling;
}

export default HeaderScaling;
