import axios from 'axios';

const baseUrL = 'https://food-boutique.b.goit.study/api/products';

export async function fetchProducts(q, page) {
  try {
    const res = await axios(baseUrL, {
      params: {
        q,
        page,
        safesearch: true,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  } finally {
  }
}

export async function fetchChicken(q, page = 5) {
  try {
    const res = await axios(baseUrL, {
      params: {
        q,
        page,
        safesearch: true,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  } finally {
  }
}
// fetchProducts().then(res => console.log(res.results));
