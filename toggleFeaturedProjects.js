function toggleFeaturedProjects() {
    const button = document.getElementById('featured-projects-button');
    const featuredProjects = document.getElementById('main-container');

    // Toggle visibility of featured projects
    if (featuredProjects.classList.contains('content-hidden')) {
        featuredProjects.classList.remove('content-hidden');
    } else {
        featuredProjects.classList.add('content-hidden');
    }

    // Remove pulsating animation after button is clicked
    button.classList.add('clicked');
}