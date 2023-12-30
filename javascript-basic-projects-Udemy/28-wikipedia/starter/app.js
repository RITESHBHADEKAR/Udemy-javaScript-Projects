const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const result = document.querySelector('.results');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value) {
    result.innerHTML = `<div class="error">please enter valid search term</div>`;
    return;
  }
  fetchpages(value);
});
const fetchpages = async (searchvalue) => {
  result.innerHTML = `<div class="loading"></div>`;
  try {
    const resp = await fetch(`${url}${searchvalue}`);
    const data = await resp.json();
    const results = data.query.search;
    if (results.length < 1) {
      result.innerHTML = `<div class="error">no items matched...</div>`;
      return;
    }
    renderResult(results);
  } catch (error) {
    result.innerHTML = `<div class="error">there was an error...</div>`;
  }
};

const renderResult = (list) => {
  const cardlist = list
    .map((item) => {
      return `<a href=http://en.wikipedia.org/?curid=${item.pageid} target="_blank">
            <h4>${item.title}</h4>
            <p>${item.snippet}</p>
          </a>`;
    })
    .join(' ');
  result.innerHTML = ` <div class="articles">
    ${cardlist}
        </div>`;
};
