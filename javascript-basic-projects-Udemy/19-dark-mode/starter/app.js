const btns = document.querySelector('.btn')
const articlesContainer = document.querySelector('.articles')



btns.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark-theme')
});


// console.log(articlesContainer);
const  articledata = articles.map((item)=>{
    const {title,date,length,snippet} = item;
    return `   <article class="post">
        <h2>${item.title}</h2>
        <div class="post-info">
          <span>${item.date}</span>
          <span>${item.length}</span>
        </div>
        <p>${item.snippet}</p>
      </article>`;
}).join(' ');
articlesContainer.innerHTML = articledata;
// console.log(moment);