import sublinks from './data.js';

const togglebtn = document.querySelector('.toggle-btn');
const closebtn = document.querySelector('.close-btn');
const sidebarwrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const linksbtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');

togglebtn.addEventListener('click', () => {
  sidebarwrapper.classList.add('show');
});

closebtn.addEventListener('click', () => {
  sidebarwrapper.classList.remove('show');
});

// set sidebar
sidebar.innerHTML = sublinks
  .map((item) => {
    const { page: title, links } = item;
    const { label, icon, url } = item.links;
    return `<article>
          <h4>${title}</h4>
          <div class="sidebar-sublinks">${links
            .map((item) => {
              return `<a href="${item.url}"> 
           <i class="${item.icon}"></i>
           <label for="">${item.label}</label>
        </a>
      `;
            })
            .join(' ')}</div>
        </article>`;
  })
  .join(' ');

linksbtns.forEach((btn) => {
  btn.addEventListener('mouseover', function (e) {
    const text = e.currentTarget.textContent;
    const tempbtn = e.currentTarget.getBoundingClientRect();
    const center = (tempbtn.left + tempbtn.right) / 2;
    const bottom = tempbtn.bottom - 3;

    const temppage = sublinks.find(({ page }) => page === text);
    const { page, links } = temppage;
    if (temppage) {
      submenu.classList.add('show');
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;

      //optional
      let columns = 'col-2';
      if (links.length === 3) {
        columns = 'col-3';
      }
      if (links.length > 3) {
        columns = 'col-4';
      }
      submenu.innerHTML = `<section>
    <h4>${page}</h4>
    <div class = "submenu-center ${columns}">
    ${links
      .map((item) => {
        return `<a href="${item.url}"> 
           <i class="${item.icon}"></i>
           <label for="">${item.label}</label>
        </a>`;
      })
      .join(' ')}
    </div>
    </sectiion>`;
    }
  });
});

hero.addEventListener('mouseover', function () {
  submenu.classList.remove('show');
});
nav.addEventListener('mouseover', function (e) {
  if (!e.target.classList.contains('link-btn')) {
    submenu.classList.remove('show');
  }
});
