



const footnoteObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting;
      const footnoteName = entry.target.dataset.footnote;
      
      const footnote = document.querySelector( `[data-name="${ footnoteName }"]` );
      footnote.classList.toggle( 'visible', intersecting );
    })
  })

  var links = document.querySelectorAll( 'a[data-footnote]' );
  links.forEach( link => footnoteObserver.observe( link ) );


console.log( links );


//slideshow functionality
let slideIndex = 1;
showSlide(slideIndex);

// Function to move to the next or previous slide
function moveSlide(n) {
    showSlide(slideIndex += n);
}

// Function to show the slide corresponding to the current index
function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Loop back to the first slide if we're at the end
    if (n > slides.length) {
        slideIndex = 1; // **Reset to first slide**
    }

    // Loop back to the last slide if we're at the beginning
    if (n < 1) {
        slideIndex = slides.length; // **Reset to last slide**
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Add the active class to the current dot
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }
}

// Optional: If you have dots navigation, handle clicks on the dots
function currentSlide(n) {
    showSlide(slideIndex = n);
}
  




// JavaScript to handle manual scrolling with looping behavior

const slider = document.getElementById('slider_cheer');
const images = document.querySelectorAll('.slider_cheer img');
const totalImages = images.length;

// Listen for the scroll event on the slider
slider.addEventListener('scroll', () => {
  const scrollLeft = slider.scrollLeft; // Get the current scroll position
  const sliderWidth = slider.offsetWidth; // Get the width of the slider container
  const totalWidth = slider.scrollWidth; // Get the total width of all images combined

  // Check if we've reached the end (i.e., the last image)
  if (scrollLeft + sliderWidth >= totalWidth) {
    // Move to the first image (reset the scroll position)
    slider.scrollLeft = 0;
  } 
  // Check if we've reached the start (i.e., the first image)
  else if (scrollLeft <= 0) {
    // Move to the last image
    slider.scrollLeft = totalWidth - sliderWidth;
  }
});


  
//   links.forEach(function (link) {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();
//       var targetId = this.getAttribute("href").slice(1);
//       var targetElement = document.getElementById(targetId);
//       if (targetElement) {
//         var offset = targetElement.getBoundingClientRect().top + window.scrollY;
//         window.scrollTo({
//           top: offset,
//           behavior: "smooth"
//         });
//       };
//     });
//   });

// Mobile menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('nav');

if ( menuToggle ) {
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('opened');
    });
}


const navigationLinks = document.querySelectorAll('.navigation');

navigationLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        menuToggle.click(); // Trigger the menuToggle function when a navigation link is clicked
    });
});


// Select the elements
var figureLinks = document.querySelectorAll(".figurelink");
var figures = document.querySelectorAll(".figure");
var captions = document.querySelectorAll(".caption");

// Iterate over each figure link
figureLinks.forEach(function (triggerElement, i) {
    var fig = figures[i];
    var caption = captions[i];

    // Add event listener for hover
    triggerElement.addEventListener("mouseover", function () {
        fig.classList.add("hovered");
        caption.style.opacity = "1";
        // Ensure the next sibling (paragraph) is not affected
        if (triggerElement.nextElementSibling.tagName.toLowerCase() === 'img') {
            triggerElement.nextElementSibling.nextElementSibling.style.opacity = "1";
        }
    });

    // Remove class and caption when mouse leaves
    triggerElement.addEventListener("mouseout", function () {
        fig.classList.remove("hovered");
        caption.style.opacity = "0";
        // Ensure the next sibling (paragraph) is not affected
        if (triggerElement.nextElementSibling.tagName.toLowerCase() === 'img') {
            triggerElement.nextElementSibling.nextElementSibling.style.opacity = "0";
        }
    });
});