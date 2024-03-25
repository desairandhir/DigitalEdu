$(document).ready(function () {

    // ---------------------------
    // Tooltip
    // ---------------------------
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })


    // ---------------------------
    // Scrolled
    // ---------------------------
    $(window).scroll(function () {
        $('header').toggleClass('scrolled', $(this).scrollTop() > 20);
    });

    $(document).ready(function () {
        $(this).scrollTop(0);
    });

    // ---------------------------
    // active url
    // ---------------------------    
    $(function () {
        var current = location.pathname.split("/");
        var getUrl = './' + current[current.length - 1];
        console.log('path', getUrl);
        $('.navbar-nav li a').each(function () {
            var $this = $(this);
            // if the current path is like this link, make it active
            if ($this.attr('href').indexOf(getUrl) !== -1) {
                $this.addClass('active');
            }
        })
    })


    // Aos

    AOS.init({
		once: true,
	});


    document.addEventListener("DOMContentLoaded", function () {
        // Get the current page's filename
        var currentPage = window.location.pathname.split('/').pop();
    
        // Get all navigation links
        var navLinks = document.querySelectorAll("nav a");
    
        // Loop through each link and disable the link if it corresponds to the current page
        navLinks.forEach(function (link) {
            if (link.getAttribute("href").endsWith(currentPage)) {
                link.removeAttribute("href"); // Remove the href attribute to make it unclickable
                link.style.cursor = "not-allowed"; // Change cursor style for inactive link
            }
        });
    });
    
});


