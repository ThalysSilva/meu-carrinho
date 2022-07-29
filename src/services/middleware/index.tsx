import axios from 'axios';

function middleware() {
  function requestAxios() {
    const request = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      headers: { Accept: 'application/json' }
    });

    return request;
  }

  return { requestAxios };
}

export default middleware();
