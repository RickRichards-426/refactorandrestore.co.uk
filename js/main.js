/**
 * Refactor & Restore Ltd - Main Web Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Refactor & Restore Ltd site script initialized.');
    
    // Example Logic: Set up dynamic year in footer if needed
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});