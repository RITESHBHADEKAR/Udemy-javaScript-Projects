const url = `https://icanhazdadjoke.com/`;
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
  fetchdadjokes();
});

const fetchdadjokes = async () => {
  try {
    result.textContent = 'loading....';
    const resp = await fetch(url, {
      headers: {
        accept: 'application/json',
        'user-agent': 'learning app',
      },
    });
    if(!resp.ok){
        throw new Error('There was an error')
    }
    const joke = await resp.json();
    result.textContent = joke.joke;
  } catch (error) {
    // console.log(error.message);
    result.textContent = 'There was an error....';
  }
};

fetchdadjokes();
