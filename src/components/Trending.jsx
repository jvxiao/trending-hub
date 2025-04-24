
import { useEffect, useState } from "react"
import { Carousel } from 'antd'
import { getTrending } from '../apis/trending'


export const ZhihuTrending = () => {
 return <Trending type='zhihu' step='5' />
}

export const ToutiaoTrending = () => {
  return <Trending type='toutiao' step='10' />
}

export const WeiboTrending = () => {
  return <Trending type='weibo' step='10' />
}

export const DouyinTrending = () => {
  return <Trending type='douyin' step='10' />
}

function chunkArray(arr, n) {
  const result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }
  return result;
}

export const Trending = (props) => {

  const { step, type } = props;
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await getTrending(type);
      setData(res.data || [])
    }
    fetchData()
  }, [])

  const slices = chunkArray(data, parseInt(step))
  return(
    <Carousel autoplay="true" autoplaySpeed={15000}>
      { slices.map((list, ind) => {
        return <NewList list={list} key={ind}></NewList>
      })}
    </Carousel>
  )
}

export const NewList = (props) => {
  const { list } = props;
  return (
    <>
      <div className="list">
        { list.map((item, ind) => {
          return <p className="list-item" key={ind}><a href={item.url} target="_blank">{item.title}</a></p>
        }) }
      </div>
    </>
  )
} 