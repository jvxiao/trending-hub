import { useNavigate, Link, useMatch } from 'react-router-dom'
import React from 'react'

export function HomePage() {
  const navigate = useNavigate()
  
  // 页面加载时立即重定向
  React.useEffect(() => {
    navigate('/zhihu', { replace: true })
  }, [navigate])
  // return <div>Redirecting to About...</div>
}

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
           return (<Link to={item.path} className={useMatch(item.path) ? 'active' : ''}> {item.label} </Link>)
         })
       }
    </div>
   )
 }