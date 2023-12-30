const container = document.querySelector('.container')
const display = (followers) => {
    container.innerHTML = followers.map((item)=>{
        const {avatar_url,login,html_url} = item
        return `<article class="card">
            <img src="${avatar_url}" alt="${login}">
            <h4>${login}</h4>
            <a href="${html_url}" class="btn">view profile</a>
          </article>`;
    }).join(' ')


}

export default display
