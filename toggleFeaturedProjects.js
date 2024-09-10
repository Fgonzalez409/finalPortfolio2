function toggleFeaturedProjects() {
    const projectsSection = document.getElementById('featured-projects-section');
    const button = document.getElementById('featured-projects-button');
    
    if (projectsSection.classList.contains('content-hidden')) {
        projectsSection.classList.remove('content-hidden');
        button.textContent = 'Hide Projects';
    } else {
        projectsSection.classList.add('content-hidden');
        button.textContent = 'Show Projects';
    }
}