class SocialMediaIntegration {
    constructor() {
        this.connectButtons = document.querySelectorAll('.connect-btn');
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.connectButtons.forEach(button => {
            button.addEventListener('click', (e) => this.handleConnection(e));
        });
    }

    handleConnection(event) {
        const button = event.target;
        const platform = button.dataset.platform;
        const card = button.closest('.integration-card');
        const statusBadge = card.querySelector('.status-badge');

        if (button.textContent.includes('Connect')) {
            this.connectPlatform(platform, button, statusBadge);
        } else {
            this.disconnectPlatform(platform, button, statusBadge);
        }
    }

    connectPlatform(platform, button, statusBadge) {
        // Here you would typically handle OAuth or other authentication
        // For now, we'll just simulate the connection
        button.textContent = `Disconnect ${platform.charAt(0).toUpperCase() + platform.slice(1)}`;
        button.classList.add('connected');
        statusBadge.textContent = 'Connected';
        statusBadge.classList.add('connected');

        // Store connection status
        localStorage.setItem(`${platform}_connected`, 'true');
    }

    disconnectPlatform(platform, button, statusBadge) {
        button.textContent = `Connect ${platform.charAt(0).toUpperCase() + platform.slice(1)}`;
        button.classList.remove('connected');
        statusBadge.textContent = 'Not Connected';
        statusBadge.classList.remove('connected');

        // Remove connection status
        localStorage.removeItem(`${platform}_connected`);
    }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SocialMediaIntegration();
}); 