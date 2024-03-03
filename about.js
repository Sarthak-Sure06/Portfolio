// Get all elements with the class 'skill'
var skills = document.querySelectorAll('.skill');

// Function to handle scrolling
function handleScroll() {
    // Loop through each skill element
    skills.forEach(function(skill) {
        // Get progress bar element within the skill
        var progressBar = skill.querySelector('.progress-bar');
        // Calculate width based on 'aria-valuenow' attribute
        var width = progressBar.getAttribute('aria-valuenow') + '%';
        // Set width of the progress bar
        progressBar.style.width = width;
    });
}

// Function to check if an element is in viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function scrollHandler() {
    skills.forEach(function(skill) {
        if (isInViewport(skill)) {
            handleScroll();
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', scrollHandler);

// Initial call to handleScroll function
handleScroll();





// Get all tab links
var tabLinks = document.querySelectorAll('[data-tab-target]');

tabLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var target = this.getAttribute('data-tab-target');
        var targetPane = document.querySelector(target);
        
        // Deactivate all tabs
        document.querySelectorAll('.tab-pane').forEach(function(pane) {
            pane.classList.remove('active');
        });
        
        // Activate the target tab
        targetPane.classList.add('active');
        
        // Deactivate all links
        tabLinks.forEach(function(tabLink) {
            tabLink.classList.remove('active');
        });
        
        // Activate the clicked link
        this.classList.add('active');
    });
});
