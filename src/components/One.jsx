import axios from 'axios';
import yunlongImg from '../assets/yun-long.jpeg';
import { useEffect, useState } from 'react';
const url = 'https://v1.hitokoto.cn';

export const One = ()=> {
  const [data, setData] = useState('');
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
  }, [])

  return (
    <div className='one-class'>
    <img src={yunlongImg}  style={{width: '290px',height: '203px', borderRadius: '6px', margin: '4px'}}/>
    <p>{data}</p>
    </div>
  )
}