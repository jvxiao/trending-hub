import axios from 'axios';
// import yunlongImg from '../assets/yun-long.jpeg';
import { useEffect, useState } from 'react';
import { getRandomImage } from '../apis/trending';
const url = 'https://v1.hitokoto.cn';

const yunlongImg = 'https://cdn.seovx.com/img/momcn19-9%20(98).jpg'

const toHDImg = (url) => {
  window.open(url, '_blank');
}

export const One = ()=> {
  const [data, setData] = useState('');
  const [timmer, setTimmer] = useState(null);
  const [imgUrl, setImgUrl] = useState(yunlongImg);
  const params = {
    c: 'd',
    encode: 'json',
    charset: 'utf-8'
  }
  useEffect( () => {
    const getOne = async () => {
      const res = await axios.get(url, {
        params,
        headers: {
          "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
        }
      })
      setData(res.data.hitokoto)
    }
    
    const setRandomImage = async () => {
      getRandomImage().then(res => {
        setImgUrl(res.data)
      })
    }

    getOne()
    setRandomImage()
    // fetch a image for banner
   

    //  clean & set  timmer
    if(timmer) clearInterval(timmer);
    setTimmer(setInterval(() => {
        getOne();
        setRandomImage();
      }, 30000
    ))

  }, [])

  return (
    <div className='one-class' style={{width: '100%',height: '203px'}} onClick={() => { toHDImg(imgUrl)}}>
      <img src={imgUrl} />
      <div className="marker"></div>
      <p>{data}</p>
    </div>
  )
}