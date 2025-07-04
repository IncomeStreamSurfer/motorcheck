// MotorCheck Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Ensure icons are created after a small delay for dynamic content
    setTimeout(() => {
        lucide.createIcons();
    }, 100);
    
    // Update dates
    updateDates();
    
    // Initialize the line chart
    initializeLookupChart();
    
    // Add demo interactivity
    setupDemoInteractions();
    
    // Animate stats on load
    animateStats();
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Setup code snippets
    setupCodeSnippets();
    
    // Animate new sections
    animateNewSections();
});

// Update dates to current
function updateDates() {
    const calendarDay = document.querySelector('.calendar-day');
    const calendarDate = document.querySelector('.calendar-date');
    const userDate = document.querySelector('.user-date');
    
    if (calendarDay && calendarDate) {
        const now = new Date();
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        calendarDay.textContent = dayNames[now.getDay()];
        calendarDate.textContent = `${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
        
        // Also update user date in header
        if (userDate) {
            userDate.textContent = `${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
        }
    }
}

// Initialize the lookup chart from the design
function initializeLookupChart() {
    const ctx = document.getElementById('lookupChart');
    if (!ctx) return;
    
    // Chart data matching the screenshot
    const data = {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Vehicle Identity Check',
                data: [0, 5, 10, 15, 25, 20, 18, 22, 24, 20, 25],
                borderColor: '#44BF73',
                backgroundColor: 'transparent',
                tension: 0.4,
                fill: false,
                pointRadius: 0,
                pointHoverRadius: 6,
                borderWidth: 2
            },
            {
                label: 'Finance Checks',
                data: [0, 3, 8, 12, 20, 18, 15, 19, 22, 18, 23],
                borderColor: '#32A9FF',
                backgroundColor: 'transparent',
                tension: 0.4,
                fill: false,
                pointRadius: 0,
                pointHoverRadius: 6,
                borderWidth: 2
            },
            {
                label: 'Previous owner Checks',
                data: [0, 2, 5, 8, 15, 14, 12, 16, 18, 15, 20],
                borderColor: '#F4BE50',
                backgroundColor: 'transparent',
                tension: 0.4,
                fill: false,
                pointRadius: 0,
                pointHoverRadius: 6,
                borderWidth: 2
            },
            {
                label: 'Detailed Mileage Checks',
                data: [0, 1, 3, 5, 10, 9, 8, 11, 13, 10, 15],
                borderColor: '#FC3400',
                backgroundColor: 'transparent',
                tension: 0.4,
                fill: false,
                pointRadius: 0,
                pointHoverRadius: 6,
                borderWidth: 2
            },
            {
                label: 'Stolen check',
                data: [0, 0, 2, 3, 5, 4, 4, 6, 8, 5, 10],
                borderColor: '#E4E4E4',
                backgroundColor: 'transparent',
                tension: 0.4,
                fill: false,
                pointRadius: 0,
                pointHoverRadius: 6,
                borderWidth: 2
            }
        ]
    };
    
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: {
                        size: 12,
                        weight: 500,
                        family: 'Manrope'
                    },
                    bodyFont: {
                        size: 12,
                        family: 'Manrope'
                    },
                    cornerRadius: 4,
                    displayColors: true,
                    boxWidth: 12,
                    boxHeight: 12,
                    usePointStyle: true,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y + 'k';
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: 'Manrope'
                        },
                        color: '#84818A',
                        padding: 8
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 30,
                    grid: {
                        color: '#F0F0F0',
                        drawBorder: false
                    },
                    border: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: 'Manrope'
                        },
                        color: '#84818A',
                        padding: 8,
                        stepSize: 5,
                        callback: function(value) {
                            return value + 'k';
                        }
                    }
                }
            }
        }
    };
    
    new Chart(ctx, config);
}

// Animate stats when they come into view
function animateStats() {
    const stats = document.querySelectorAll('.stat-value');
    
    stats.forEach(stat => {
        const finalValue = stat.textContent;
        const isPercentage = finalValue.includes('%');
        const isTime = finalValue.includes('sec');
        
        if (!isNaN(parseFloat(finalValue.replace(/[^0-9.]/g, '')))) {
            const numericValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));
            let currentValue = 0;
            const increment = numericValue / 50;
            const decimals = finalValue.includes('.') ? 1 : 0;
            
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(timer);
                }
                
                if (isPercentage) {
                    stat.textContent = currentValue.toFixed(0) + '%';
                } else if (isTime) {
                    stat.textContent = currentValue.toFixed(decimals) + 'sec';
                } else {
                    stat.textContent = currentValue.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    });
                }
            }, 20);
        }
    });
}

// Setup demo interactions
function setupDemoInteractions() {
    // Dropdown buttons
    document.querySelectorAll('.dropdown-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            showDemoAlert('Dropdown', `"${this.textContent.trim()}" dropdown would open here`);
        });
    });
    
    // Navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            if (!this.classList.contains('active')) {
                e.preventDefault();
                showDemoAlert('Navigation', `Navigate to: ${this.textContent.trim()}`);
            }
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                showDemoAlert('Search', `Searching for: "${this.value}"`);
                this.blur();
            }
        });
    }
    
    // Filter button
    const filterBtn = document.querySelector('.filter-btn');
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            showDemoAlert('Filter', 'Advanced filter options would appear here');
        });
    }
    
    // Top Up buttons
    document.querySelectorAll('.top-up-btn, .top-up-link, .top-up-btn-secondary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showDemoAlert('Top Up', 'This would open the billing page to add more API credits');
        });
    });
    
    // Notification button
    const notificationBtn = document.querySelector('.notification-btn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function() {
            showDemoAlert('Notifications', 'You have 2 new notifications:\n• Monthly report is ready\n• API usage limit warning');
        });
    }
    
    // View Report buttons
    document.querySelectorAll('.view-report-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const vin = row.querySelector('td:nth-child(2)').textContent;
            showDemoAlert('Vehicle Report', `Opening detailed report for VIN: ${vin}`);
        });
    });
    
    // Unlock Now button
    const unlockBtn = document.querySelector('.unlock-btn');
    if (unlockBtn) {
        unlockBtn.addEventListener('click', function() {
            showDemoAlert('Unlock Endpoints', 'Contact sales to unlock premium endpoints');
        });
    }
    
    // Load More link
    const loadMore = document.querySelector('.load-more');
    if (loadMore) {
        loadMore.addEventListener('click', function(e) {
            e.preventDefault();
            showDemoAlert('Load More', 'Loading more lookup history...');
        });
    }
    
    // Manage Credits button
    const manageCreditsBtn = document.querySelector('.manage-credits-btn');
    if (manageCreditsBtn) {
        manageCreditsBtn.addEventListener('click', function() {
            showDemoAlert('Credit Management', 'Manage your prepaid credits and auto top-up settings');
        });
    }
    
    // AI action buttons
    document.querySelectorAll('.ai-action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const title = this.closest('.ai-item').querySelector('h4').textContent;
            showDemoAlert('AI Insights', `Viewing details for: ${title}`);
        });
    });
    
    // Endpoint items - click to view docs
    document.querySelectorAll('.endpoint-item').forEach(item => {
        item.addEventListener('click', function() {
            const endpoint = this.querySelector('.endpoint-name').textContent;
            showDemoAlert('API Documentation', `Opening documentation for:\n${endpoint}`);
        });
    });
    
    // Vehicle type items - click for details
    document.querySelectorAll('.vehicle-type-item').forEach(item => {
        item.addEventListener('click', function() {
            const type = this.querySelector('.vehicle-label').textContent;
            const percentage = this.querySelector('.vehicle-percentage').textContent;
            showDemoAlert('Vehicle Type Details', `${type}: ${percentage} of total queries\n\nView detailed breakdown and trends`);
        });
    });
    
    
    // Add hover effects
    addHoverEffects();
}

// Add hover effects to interactive elements
function addHoverEffects() {
    // Stat cards hover
    document.querySelectorAll('.stat-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 30px 60px rgba(176, 183, 195, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-card)';
        });
    });
    
    // Vehicle type icons hover
    document.querySelectorAll('.vehicle-type-item').forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.vehicle-icon');
            icon.style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.vehicle-icon');
            icon.style.transform = 'scale(1)';
        });
    });
    
    // Endpoint items hover
    document.querySelectorAll('.endpoint-item').forEach(item => {
        item.style.cursor = 'pointer';
    });
}

// Show demo alert
function showDemoAlert(title, message) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.2s ease;
    `;
    
    // Create alert box
    const alertBox = document.createElement('div');
    alertBox.style.cssText = `
        background: white;
        border-radius: 8px;
        padding: 24px;
        max-width: 400px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        animation: slideIn 0.3s ease;
    `;
    
    alertBox.innerHTML = `
        <h3 style="margin: 0 0 12px 0; color: #020202; font-size: 18px; font-weight: 600;">
            ${title} - Demo Mode
        </h3>
        <p style="margin: 0 0 20px 0; color: #84818A; font-size: 14px; line-height: 1.5; white-space: pre-line;">
            ${message}
        </p>
        <button style="
            background: #44BF73;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            font-family: 'Manrope', sans-serif;
        " onclick="this.closest('div').parentElement.remove()">
            Got it
        </button>
    `;
    
    overlay.appendChild(alertBox);
    document.body.appendChild(overlay);
    
    // Add animations
    if (!document.querySelector('#demo-animations')) {
        const style = document.createElement('style');
        style.id = 'demo-animations';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideIn {
                from { transform: translateY(-20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove on click outside
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

// Setup code snippet tabs
function setupCodeSnippets() {
    const snippetTabs = document.querySelectorAll('.snippet-tab');
    const codeExamples = {
        'JavaScript': `// Vehicle check example
const response = await fetch('https://api.motorcheck.co.uk/v1/vehicle/AB12CDE', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const vehicleData = await response.json();
console.log(vehicleData);`,
        'Python': `# Vehicle check example
import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.motorcheck.co.uk/v1/vehicle/AB12CDE',
    headers=headers
)

vehicle_data = response.json()
print(vehicle_data)`,
        'PHP': `// Vehicle check example
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.motorcheck.co.uk/v1/vehicle/AB12CDE');
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer YOUR_API_KEY',
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$vehicleData = json_decode($response, true);
curl_close($ch);

var_dump($vehicleData);`,
        'Ruby': `# Vehicle check example
require 'net/http'
require 'json'

uri = URI('https://api.motorcheck.co.uk/v1/vehicle/AB12CDE')
req = Net::HTTP::Get.new(uri)
req['Authorization'] = 'Bearer YOUR_API_KEY'
req['Content-Type'] = 'application/json'

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(req)
end

vehicle_data = JSON.parse(res.body)
puts vehicle_data`
    };
    
    snippetTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab
            snippetTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update code content
            const language = this.textContent;
            const codeBlock = document.querySelector('.snippet-content code');
            if (codeBlock && codeExamples[language]) {
                codeBlock.textContent = codeExamples[language];
            }
        });
    });
    
    // Copy code functionality
    const copyBtn = document.querySelector('.copy-code-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const code = document.querySelector('.snippet-content code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i data-lucide="check"></i> Copied!';
                lucide.createIcons();
                
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    lucide.createIcons();
                }, 2000);
            });
        });
    }
}

// Animate new dashboard sections
function animateNewSections() {
    // Animate credit balance
    const creditValue = document.querySelector('.credit-value');
    if (creditValue) {
        const targetValue = 1247.50;
        let currentValue = 0;
        const increment = targetValue / 50;
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(timer);
            }
            creditValue.textContent = '£' + currentValue.toFixed(2);
        }, 20);
    }
    
    // Animate vehicle percentages
    const vehiclePercentages = document.querySelectorAll('.vehicle-percentage');
    vehiclePercentages.forEach(elem => {
        const targetValue = parseInt(elem.textContent);
        let currentValue = 0;
        const increment = targetValue / 30;
        
        elem.textContent = '0%';
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(timer);
            }
            elem.textContent = Math.round(currentValue) + '%';
        }, 30);
    });
    
}

// Setup mobile menu functionality
function setupMobileMenu() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (!menuToggle || !sidebar || !overlay) return;
    
    // Toggle menu
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu on overlay click
    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close menu on nav item click (mobile)
    if (window.innerWidth <= 1024) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 1024) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }, 250);
    });
}