/**
 * MotorCheck Demo App
 * Basic interactivity for demo pages
 * Full functionality will be implemented after client approval
 */

// Demo mode indicator
console.log('🚗 MotorCheck Demo Mode - Awaiting Figma designs and client approval');

// Basic interactivity for demo
document.addEventListener('DOMContentLoaded', () => {
    // Demo notice auto-hide after 5 seconds
    const demoNotice = document.querySelector('.demo-notice');
    if (demoNotice) {
        setTimeout(() => {
            demoNotice.style.transition = 'opacity 0.5s ease-out';
            demoNotice.style.opacity = '0';
            setTimeout(() => {
                demoNotice.style.display = 'none';
            }, 500);
        }, 5000);
    }

    // Button click handlers for demo
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Demo alert for all buttons
            if (button.classList.contains('primary-button')) {
                alert('Demo Mode: This would start the signup process after client approval.');
            } else if (button.classList.contains('secondary-button')) {
                alert('Demo Mode: This would open the documentation after client approval.');
            } else if (button.classList.contains('logout-button')) {
                alert('Demo Mode: This would log you out after client approval.');
            } else if (button.textContent === 'Copy') {
                alert('Demo Mode: API key copied to clipboard (demo only).');
            } else if (button.textContent === 'Rotate') {
                alert('Demo Mode: This would rotate your API key after client approval.');
            } else if (button.textContent === 'Create New Key') {
                alert('Demo Mode: This would create a new API key after client approval.');
            }
        });
    });

    // Navigation active state for dashboard
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Demo message
            console.log(`Demo: Navigated to ${item.textContent} section`);
        });
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Code highlighting simulation (will use proper library after approval)
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        // Basic syntax highlighting for demo
        let code = block.innerHTML;
        
        // Highlight strings
        code = code.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span style="color: var(--color-success)">$&</span>');
        
        // Highlight keywords
        const keywords = ['const', 'new', 'await', 'require', 'console', 'log'];
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'g');
            code = code.replace(regex, `<span style="color: var(--color-primary)">${keyword}</span>`);
        });
        
        // Highlight comments
        code = code.replace(/(\/\/.*$)/gm, '<span style="color: var(--color-text-muted)">$1</span>');
        
        block.innerHTML = code;
    });

    // Simulate API response times for dashboard
    if (document.querySelector('.dashboard-page')) {
        setInterval(() => {
            const responseTimeElement = document.querySelector('.stat-value');
            if (responseTimeElement && responseTimeElement.textContent.includes('ms')) {
                const newTime = Math.floor(Math.random() * 50) + 120;
                responseTimeElement.textContent = `${newTime}ms`;
            }
        }, 3000);
    }
});

// Placeholder for future Figma integration
window.FigmaIntegration = {
    loadDesignTokens: async () => {
        console.log('Demo: Design tokens will be loaded from Figma MCP after approval');
    },
    
    applyTheme: async () => {
        console.log('Demo: Theme will be applied from Figma design system after approval');
    }
};

// Export for potential use in other modules
export default {
    version: '0.1.0-demo',
    status: 'awaiting-client-approval'
};