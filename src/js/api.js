import axios from 'axios';

const baseUrl = 'https://66828ad94102471fa4c751e2.mockapi.io/api/cards';

export async function fetchCards() {
  try {
    const res = await axios(baseUrl);
    return res;
  } catch (error) {
    console.log(error.message);
  }
}

fetchCards().then(console.log);
