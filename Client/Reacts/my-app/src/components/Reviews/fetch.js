
//HOUSE ALL THE FETCH FUNCTIONS: 
import axios from 'axios';

const token = `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`


export const fetchMeta = (product_id) => {
    const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp'; // Replace with your API base URL
    const endpoint = `/reviews/meta?product_id=${product_id}`;
    const url = baseURL + endpoint;
    const headers = {
      Authorization: token,
    };
  
    return axios.get(url, { headers })
      .then((response) => response.data)
      .catch((error) => {
        console.error(error.response.data);
        throw error;
      });
}; 

export const fetchReviews = (page, count, sort, product_id) => {
  const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp'; // Replace with your API base URL
  const endpoint = '/reviews/';
  const url = `${baseURL}${endpoint}?page=${page}&count=${count}&sort=${sort}&product_id=${product_id}`;
  const headers = {
    Authorization: token,
  };

  return axios.get(url, { headers })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error.response.data);
      throw error;
    });
}

export const postReview = (reviewData) => {
  const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp'; // Replace with your API base URL
  const endpoint = '/reviews/';
  const url = baseURL + endpoint;
  const headers = {
    Authorization: token,
  };

  return axios.post(url, reviewData, { headers })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error.response.data);
      throw error;
    });
};
