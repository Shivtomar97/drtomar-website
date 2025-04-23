/**
 * Simple script to create placeholder images for the new design
 * Until proper professional photos are available
 */

function createPlaceholderImage(container, width, height, text, colors) {
    if (!container) return;
    
    // Default colors if not provided
    const defaultColors = {
        background: 'linear-gradient(135deg, #0080ff 0%, #3aa8c1 100%)',
        text: '#ffffff'
    };
    
    const style = {
        background: colors?.background || defaultColors.background,
        color: colors?.text || defaultColors.text,
        width: width || '100%',
        height: height || '350px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: '10px',
        padding: '20px',
        boxSizing: 'border-box'
    };
    
    // Create the placeholder element
    const placeholder = document.createElement('div');
    placeholder.className = 'image-placeholder';
    
    // Apply styles
    Object.assign(placeholder.style, style);
    
    // Set content
    placeholder.innerHTML = `
        <div>
            <i class="fas fa-image" style="font-size: 48px; margin-bottom: 15px;"></i>
            <div>${text || 'Doctor-Patient Image'}</div>
        </div>
    `;
    
    // Add to container
    container.appendChild(placeholder);
    
    return placeholder;
}

// Initialize placeholders when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check for hero image placeholder
    const heroImageContainer = document.querySelector('.hero-image-container');
    if (heroImageContainer && !heroImageContainer.querySelector('img')?.getAttribute('src')) {
        createPlaceholderImage(
            heroImageContainer, 
            '100%', 
            '400px', 
            'Dr. Tomar with Patient'
        );
    }
    
    // Check for other placeholder needs
    document.querySelectorAll('[data-placeholder]').forEach(container => {
        const config = container.dataset.placeholder.split('|');
        const text = config[0] || 'Image Placeholder';
        const width = config[1] || '100%';
        const height = config[2] || '200px';
        
        createPlaceholderImage(container, width, height, text);
    });
}); 