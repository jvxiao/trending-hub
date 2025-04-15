import React from "react";
import ReactDOM from 'react-dom/client'
import { ZhihuTrending, ToutiaoTrending, WeiboTrending, DouyinTrending} from "./components/Trending";
import { HomePage, Navigator } from "./components/Home";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './css/home.scss';


ReactDOM.createRoot(document.getElementById('app')).render(
  <div>
    <h2> 🚀 Hello, Trending Hub ! </h2>
    <Router>
      <Navigator />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/zhihu" element={<ZhihuTrending />}></Route>
        <Route path="/toutiao" element={<ToutiaoTrending />}></Route>
        <Route path="/douyin" element={<DouyinTrending />}></Route>
        <Route path="/weibo" element={<WeiboTrending />}></Route>
      </Routes>
    </Router>
  </div>
)