
import { useEffect, useState } from "react"
import { Carousel, List } from 'antd'
import { getTrending } from '../apis/trending'
const TrendingList = () => {

}

export const ZhihuTrending = () => {
 return <Trending type='zhihu' step='5' />
}

export const ToutiaoTrending = () => {
  return <Trending type='toutiao' step='10' />
  return 'toutiao'
}

export const WeiboTrending = () => {
  return <Trending type='weibo' step='10' />
  return 'weibo'
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
  console.log(slices)
  return(
    <Carousel autoplay="true" >
      { slices.map(list => {
        return <NewList list={list}></NewList>
      })}
    </Carousel>
  )
}

export const NewList = (props) => {
  const { list } = props;
  return (
    <>
      <div className="list">
        { list.map((item) => {
          return <p className="list-item">{item.title}</p>
        }) }
      </div>
    </>
  )
} 