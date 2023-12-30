

const URL = 'https://randomuser.me/api/';

const getuser = async () => {
  const resp = await fetch(URL);
  const data = await resp.json();

  // destructer
//   const person = data.results[0].phone
  const  person  = data.results[0];
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;
  return {
    phone,
    email,
    image,
    password,
    name: `${first} ${last}`,
    age,
    number,
    street: `${number} ${name}`,
  };
};


export default getuser;