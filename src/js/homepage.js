/**
 * MotorCheck Homepage - Sophisticated Interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Initialize animated hexagons
    initAnimatedHexagons();

    // Header scroll effect
    initHeaderScroll();

    // Mobile menu
    initMobileMenu();

    // Interactive demo
    initInteractiveDemo();

    // Pricing calculator
    initPricingCalculator();

    // Smooth scroll for anchor links
    initSmoothScroll();

    // Animate on scroll
    initScrollAnimations();
});

/**
 * Initialize animated hexagons with data point icons
 */
function initAnimatedHexagons() {
    const container = document.querySelector('.animated-hexagons');
    if (!container) {
        console.error('Animated hexagons container not found');
        return;
    }
    console.log('Initializing animated hexagons...');

    // Position hexagons around viewport edges to avoid center content
    // Calculate viewport-aware positions
    const viewportWidth = window.innerWidth;
    const patternWidth = 156;
    const maxTilesHorizontal = Math.floor(viewportWidth / patternWidth);
    
    const dataPoints = [
        { 
            color: '#44BF73', 
            icon: 'shield-check', 
            label: 'Vehicle Identity',
            position: { x: 78, y: 225 } // Left side, upper middle
        },
        { 
            color: '#60A5FA', 
            icon: 'credit-card', 
            label: 'Finance Checks',
            position: { x: Math.min(78 + patternWidth * (maxTilesHorizontal - 2), viewportWidth - 100), y: 135 } // Right side, top
        },
        { 
            color: '#F97316', 
            icon: 'alert-triangle', 
            label: 'Write-offs',
            position: { x: 78, y: 405 } // Left side, bottom - offset column (135 + 270)
        },
        { 
            color: '#FCD34D', 
            icon: 'gauge', 
            label: 'Mileage Checks',
            position: { x: Math.min(78 + patternWidth * (maxTilesHorizontal - 3), viewportWidth - 200), y: 495 } // Right side, bottom - offset column (225 + 270)
        },
        { 
            color: '#A78BFA', 
            icon: 'users', 
            label: 'Owner History',
            position: { x: patternWidth * 2, y: 90 } // Top area, left of center
        },
        { 
            color: '#44BF73', 
            icon: 'file-check', 
            label: 'MOT History',
            position: { x: Math.min(78 + patternWidth * 5, viewportWidth - 300), y: 45 } // Top area, right of center
        }
    ];

    // Create hexagon elements
    dataPoints.forEach((dataPoint, index) => {
        const hexagon = document.createElement('div');
        hexagon.className = 'animated-hexagon';
        
        // Remove redundant positioning (already set below)
        
        console.log(`Creating hexagon ${index} at x:${dataPoint.position.x}, y:${dataPoint.position.y}`);

        // Position to align exactly with background grid
        hexagon.style.left = `${dataPoint.position.x}px`;
        hexagon.style.top = `${dataPoint.position.y}px`;
        hexagon.style.width = '104px';
        hexagon.style.height = '90px';
        
        hexagon.innerHTML = `
            <svg width="104" height="90" viewBox="0 0 104 90" xmlns="http://www.w3.org/2000/svg" class="hex-svg">
                <path d="M26 15 L52 0 L78 15 L78 45 L52 60 L26 45 Z" 
                      fill="${dataPoint.color}" class="hex-fill"
                      transform-origin="52 30"/>
            </svg>
            <div class="hex-icon">
                <i data-lucide="${dataPoint.icon}"></i>
            </div>
            <div class="hex-ripple" style="color: ${dataPoint.color};">
                <svg width="104" height="90" viewBox="0 0 104 90" xmlns="http://www.w3.org/2000/svg" class="ripple-svg">
                    <path class="hex-ripple-path" 
                          d="M26 15 L52 0 L78 15 L78 45 L52 60 L26 45 Z"
                          transform-origin="52 30"/>
                </svg>
            </div>
        `;

        container.appendChild(hexagon);
    });

    // Re-initialize Lucide icons for the new elements
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Activate hexagons with animation
    const hexagons = container.querySelectorAll('.animated-hexagon');
    const CYCLE_DURATION = 12000; // 12 seconds per cycle
    const STAGGER_DELAY = 2000; // 2 seconds between each hexagon
    
    hexagons.forEach((hex, index) => {
        const delay = index * STAGGER_DELAY;
        
        // Animation sequence for each hexagon
        function runAnimationCycle() {
            // Ensure clean state at start of each cycle
            hex.classList.remove('active', 'arriving', 'ripple');
            
            // Small delay to ensure clean state
            setTimeout(() => {
                // Phase 1: Arrive and show hexagon
                hex.classList.add('arriving');
                hex.classList.add('active');
                
                setTimeout(() => {
                    hex.classList.remove('arriving');
                    
                    // Phase 2: Trigger ripple when hexagon is fully visible
                    setTimeout(() => {
                        hex.classList.add('ripple');
                        
                        // Remove ripple class after animation completes
                        setTimeout(() => {
                            hex.classList.remove('ripple');
                        }, 1500);
                    }, 100); // Small delay to ensure hexagon is settled
                }, 500);
                
                // Phase 3: Fade out
                setTimeout(() => {
                    hex.classList.remove('active');
                }, 7000);
            }, 50);
        }
        
        // Start first cycle with stagger
        setTimeout(() => {
            runAnimationCycle();
            
            // Repeat cycle maintaining the offset
            setInterval(runAnimationCycle, CYCLE_DURATION);
        }, delay);
    });
}

/**
 * Header scroll effect
 */
function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const navCenter = document.querySelector('.nav-center');
    const navRight = document.querySelector('.nav-right');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            document.body.classList.toggle('mobile-menu-open');
        });
    }
}

/**
 * Interactive demo functionality
 */
function initInteractiveDemo() {
    const tabs = document.querySelectorAll('.demo-tab');
    const input = document.getElementById('demo-vrm');
    const submitBtn = document.getElementById('demo-submit');
    const output = document.getElementById('demo-output');

    // Demo responses for different endpoints
    const demoResponses = {
        vehicle: {
            "status": "success",
            "data": {
                "registration": "TE57VRN",
                "make": "FORD",
                "model": "FOCUS",
                "year": 2007,
                "colour": "SILVER",
                "engineCapacity": 1596,
                "fuelType": "PETROL",
                "transmission": "MANUAL",
                "bodyType": "HATCHBACK",
                "doors": 5,
                "co2Emissions": 159,
                "taxBand": "G",
                "taxCost": 255,
                "firstRegistered": "2007-09-01"
            },
            "meta": {
                "requestId": "req_abc123",
                "timestamp": new Date().toISOString(),
                "responseTime": "187ms"
            }
        },
        mot: {
            "status": "success",
            "data": {
                "registration": "TE57VRN",
                "motTests": [
                    {
                        "completedDate": "2024-09-15",
                        "testResult": "PASSED",
                        "expiryDate": "2025-09-14",
                        "odometerValue": 98420,
                        "odometerUnit": "mi",
                        "advisories": [
                            "Offside Front Tyre worn close to legal limit (5.2.3 (e))",
                            "Brake disc worn, but not excessively (1.1.14 (a) (i))"
                        ]
                    },
                    {
                        "completedDate": "2023-09-10",
                        "testResult": "PASSED",
                        "expiryDate": "2024-09-09",
                        "odometerValue": 87231,
                        "odometerUnit": "mi",
                        "advisories": []
                    }
                ]
            },
            "meta": {
                "requestId": "req_def456",
                "timestamp": new Date().toISOString(),
                "responseTime": "145ms"
            }
        },
        valuation: {
            "status": "success",
            "data": {
                "registration": "TE57VRN",
                "valuations": {
                    "retail": 3750,
                    "private": 3250,
                    "partExchange": 2800,
                    "trade": 2500
                },
                "adjustments": {
                    "mileage": -200,
                    "condition": 0,
                    "serviceHistory": 150
                },
                "marketTrend": "stable",
                "confidence": "high",
                "lastUpdated": new Date().toISOString()
            },
            "meta": {
                "requestId": "req_ghi789",
                "timestamp": new Date().toISOString(),
                "responseTime": "213ms"
            }
        }
    };

    let activeEndpoint = 'vehicle';

    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeEndpoint = tab.dataset.endpoint;
        });
    });

    // Form submission
    if (submitBtn && input && output) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const vrm = input.value.trim().toUpperCase().replace(/\s/g, '');
            
            if (!vrm) {
                showError('Please enter a valid UK registration');
                return;
            }

            // Show loading state
            output.innerHTML = `
                <div class="demo-loading">
                    <div class="loading-spinner"></div>
                </div>
            `;

            // Simulate API call
            setTimeout(() => {
                const response = demoResponses[activeEndpoint];
                displayResponse(response);
            }, 800);
        });

        // Enter key submission
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                submitBtn.click();
            }
        });
    }

    function displayResponse(response) {
        const formattedJson = JSON.stringify(response, null, 2);
        const highlightedJson = highlightJson(formattedJson);
        
        output.innerHTML = `
            <div class="demo-response">
                <div class="response-header">
                    <span class="response-status">200 OK</span>
                    <span class="response-time">${response.meta.responseTime}</span>
                </div>
                <pre class="response-json">${highlightedJson}</pre>
            </div>
        `;
    }

    function highlightJson(json) {
        return json
            .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?)/g, function (match) {
                if (/:$/.test(match)) {
                    return `<span class="json-key">${match}</span>`;
                } else {
                    return `<span class="json-string">${match}</span>`;
                }
            })
            .replace(/\b(true|false)\b/g, '<span class="json-boolean">$1</span>')
            .replace(/\b(\d+)\b/g, '<span class="json-number">$1</span>')
            .replace(/null/g, '<span class="json-null">null</span>');
    }

    function showError(message) {
        output.innerHTML = `
            <div class="demo-error">
                <i data-lucide="alert-circle"></i>
                <p>${message}</p>
            </div>
        `;
        lucide.createIcons();
    }
}

/**
 * Pricing calculator
 */
function initPricingCalculator() {
    const slider = document.getElementById('volume-slider');
    const volumeDisplay = document.getElementById('volume-display');
    const monthlyCoast = document.getElementById('monthly-cost');
    const unitPrice = document.getElementById('unit-price');
    const dailyCost = document.getElementById('daily-cost');
    const sliderFill = document.getElementById('slider-fill');

    if (!slider || !volumeDisplay || !monthlyCoast) return;

    // Pricing tiers
    const pricingTiers = [
        { max: 1000, price: 0.50 },
        { max: 10000, price: 0.35 },
        { max: 50000, price: 0.25 },
        { max: Infinity, price: 0.15 }
    ];

    function calculatePrice(volume) {
        let totalCost = 0;
        let remaining = volume;
        let averagePrice = 0;

        for (const tier of pricingTiers) {
            if (remaining <= 0) break;
            
            const tierVolume = Math.min(remaining, tier.max - (volume - remaining));
            totalCost += tierVolume * tier.price;
            remaining -= tierVolume;
        }

        averagePrice = volume > 0 ? totalCost / volume : 0;

        return {
            total: totalCost,
            average: averagePrice,
            daily: totalCost / 30
        };
    }

    function updateCalculator() {
        const volume = parseInt(slider.value);
        const pricing = calculatePrice(volume);
        
        // Update displays
        volumeDisplay.textContent = volume.toLocaleString();
        monthlyCoast.textContent = `£${pricing.total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        unitPrice.textContent = `£${pricing.average.toFixed(2)}`;
        dailyCost.textContent = `£${pricing.daily.toFixed(2)}`;
        
        // Update slider fill
        const percentage = (volume / 100000) * 100;
        if (sliderFill) {
            sliderFill.style.width = `${percentage}%`;
        }
    }

    slider.addEventListener('input', updateCalculator);
    updateCalculator();
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offset = 100;
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Scroll animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Add visible class styles
    const style = document.createElement('style');
    style.textContent = `
        .feature-card.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// CSS for demo response styling
const demoStyles = document.createElement('style');
demoStyles.textContent = `
.demo-response {
    background: #1a1a1a;
    border-radius: 8px;
    overflow: hidden;
}

.response-header {
    background: #2d2d2d;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #3e3e3e;
}

.response-status {
    color: #10b981;
    font-weight: 600;
    font-size: 14px;
}

.response-time {
    color: #999;
    font-size: 13px;
}

.response-json {
    padding: 20px;
    margin: 0;
    overflow-x: auto;
    font-family: 'Monaco', 'Menlo', monospace;
    font-size: 13px;
    line-height: 1.6;
    color: #d4d4d4;
}

.json-key { color: #9cdcfe; }
.json-string { color: #ce9178; }
.json-number { color: #b5cea8; }
.json-boolean { color: #569cd6; }
.json-null { color: #808080; }

.demo-error {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    height: 200px;
    color: #ef4444;
}

.demo-error i {
    width: 24px;
    height: 24px;
}

.pricing-tiers {
    margin-top: 24px;
    padding: 20px;
    background: rgba(68, 191, 115, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(68, 191, 115, 0.1);
}

.tier-info {
    text-align: left;
}

.tier-info strong {
    display: block;
    margin-bottom: 12px;
    color: var(--color-text-primary);
}

.tier-info ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.tier-info li {
    padding: 8px 0;
    color: var(--color-text-secondary);
    font-size: 14px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.tier-info li:last-child {
    border-bottom: none;
}

/* Mobile menu styles */
@media (max-width: 768px) {
    .mobile-menu-open .nav-center,
    .mobile-menu-open .nav-right {
        display: flex;
        position: fixed;
        top: 72px;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 20px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        z-index: 999;
    }

    .mobile-menu-open .nav-center {
        border-bottom: 1px solid var(--color-border);
        padding-bottom: 20px;
        margin-bottom: 20px;
    }

    .mobile-menu-open .nav-right .nav-link {
        display: block;
    }
}
`;
document.head.appendChild(demoStyles);