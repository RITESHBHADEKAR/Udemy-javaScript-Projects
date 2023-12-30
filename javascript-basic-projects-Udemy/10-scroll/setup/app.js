// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navbtn = document.querySelector('.nav-toggle');
const linkscontainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navbtn.addEventListener('click', function () {
  // linkscontainer.classList.toggle('show-links')
  const containerHeight = linkscontainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linkscontainer.style.height = `${linksHeight}px`;
  } else {
    linkscontainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.querySelector('nav');
const toplink = document.querySelector('.top-link');
window.addEventListener('scroll', function () {
  const scrollheight = window.pageYOffset;
  const navheight = navbar.getBoundingClientRect().height;

  if (scrollheight > navheight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  if (scrollheight > 500) {
    toplink.classList.add('show-link');
  } else {
    toplink.classList.remove('show-link');
  }
});
// ********** smooth scroll ************
// select links
const scrolllinks = document.querySelectorAll('.scroll-link');
scrolllinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    // let position = element
    
    // calculate height
    const navbar = document.querySelector('nav');
    const navheight = navbar.getBoundingClientRect().height;
    const containerHeight = linkscontainer.getBoundingClientRect().height;
    const fixed = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navheight;

    if (!fixed) {
      position = position - navheight;
    }
    if (navheight > 82) {
      position = position + containerHeight;
    }

    // console.log(id);
    window.scrollTo({
      left: 0,
      top: position,
    });
    linkscontainer.style.height = 0;
  });
});
