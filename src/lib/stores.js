import http from './http'

const STORES =
      "http://www.mocky.io/v2/5df4e4343000006800111be9";

      
      const load = () => {
        return http
        .get(STORES)
        .then(response => {
          return response.data;
        });
      };

export default {load};