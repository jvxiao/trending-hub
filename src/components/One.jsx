import axios from 'axios';
// import yunlongImg from '../assets/yun-long.jpeg';
import { useEffect, useState } from 'react';
const url = 'https://v1.hitokoto.cn';

const yunlongImg = 'https://cdn.seovx.com/img/momcn19-9%20(98).jpg'
export const One = ()=> {
  const [data, setData] = useState('');
  const [timmer, setTimmer] = useState(null);
  const params = {
    c: 'd',
    encode: 'json',
    charset: 'utf-8'
  }
  useEffect( () => {
    const getOne = async () => {
      const res = await axios.get(url, {
        params
      })
      console.log(res)
      setData(res.data.hitokoto)
    }
    getOne()
    if(timmer) clearInterval(timmer);
    setTimmer(setInterval(() => {
      getOne()
    }, 15000))
  }, [])

  return (
    <div className='one-class' style={{width: '100%',height: '203px'}}>
      <a  href={yunlongImg}> <img src={yunlongImg} /></a>
      <div className="marker"></div>
      <p>{data}</p>
    </div>
  )
}