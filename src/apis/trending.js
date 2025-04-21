import axios from "axios";
// const BASE_URL = 'https://trending-server.onrender.com/api/trending'
const BASE_URL = 'http://localhost:5000/api/trending'
/**
 * 
 * @param {*} type  'weibo', 'zhihu', 'douyin', 'toutiao' 
 * @returns 
 */
export const getTrending =  (type = '') => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${BASE_URL}/${type}`);
      resolve(res.data || [])
    }catch(err) {
      reject(err)
    }
  })
}


export const getRandomImage = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get('http://localhost:5000/api/utils/randomImage')
      resolve(res.data)
    }catch(err) {
      reject(err)
    }
  })
}
