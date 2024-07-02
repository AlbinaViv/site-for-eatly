import axios from 'axios';

// const baseUrl = 'https://66828ad94102471fa4c751e2.mockapi.io/api/cards';

const baseUrL = 'https://food-boutique.b.goit.study/api/products';

export async function fetchProducts(q, page) {
  try {
    const res = await axios(baseUrL, {
      params: {
        q,
        page,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
    throw err;
  } finally {
    console.log('finally');
  }
}
