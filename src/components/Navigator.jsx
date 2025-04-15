import { Link } from "react-router-dom"


export function Navigator() {
 const linkOptions = [
  { label: '知乎', path: '/zhihu'},
  { label: '头条', path: '/toutiao'},
  { label: '微博', path: '/weibo'},
  { label: '抖音', path: '/douyin'},
]
  return (
   <div className="nav-bar">
      {
        linkOptions.map((item) => {
          return (
            <Link path={item.path} > {item.label} </Link>
          )
        })
      }
   </div>
  )
}