import React from "react";
import ReactDOM from 'react-dom/client'
import { ZhihuTrending, ToutiaoTrending, WeiboTrending, DouyinTrending} from "./components/Trending";
import { HomePage, Navigator } from "./components/Home";
import { One } from './components/One'
import {BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import './css/home.scss';


ReactDOM.createRoot(document.getElementById('app')).render(
  <div>
    {/* <h2> 🚀 Hello, Trending Hub ! </h2> */}
    <Router>
      <One />
      <Navigator />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/zhihu" element={<ZhihuTrending />}></Route>
        <Route path="/toutiao" element={<ToutiaoTrending />}></Route>
        <Route path="/douyin" element={<DouyinTrending />}></Route>
        <Route path="/weibo" element={<WeiboTrending />}></Route>
        <Route path="*" element={<HomePage/>} />
      </Routes>
    </Router>
  </div>
)
