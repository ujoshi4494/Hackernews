import React, { useState } from "react";

const NewsItem = ({ news }) => {
  const [newsItem, setNewsItem] = useState(news);
  const { points } = newsItem;
  const source = news.url
    ? news.url.replace("http://", "").replace("https://", "").split(/[/?#]/)[0]
    : "hackernews.com";
  return (
    <div
      style={{
        padding: "8px",
        marginLeft: "20px",
      }}>
      <div style={{ backgroundColor: "#ece2db", padding: "10px" }}>
        <a href={news.url} className='news-design'>
          {news.title}
        </a>
        <small>{`(${source})`}</small>
      </div>
      <div
        style={{
          marginBottom: "5px",
          backgroundColor: "#ece2db",
          paddingLeft: "10px",
          paddingBottom: "5px",
        }}>
        <small>
          <span style={{ margin: "2px" }}>{points}</span>
        </small>
        <small>
          <a
            onClick={() => {
              setNewsItem({ ...newsItem, points: points + 1 });
            }}>
            upvote
          </a>
        </small>
        <small>
          <span style={{ margin: "2px" }}>{newsItem.num_comments}</span>
        </small>
        <small>
          <a>comments</a>
        </small>
        <small style={{ margin: "5px" }}>
          <a>hide</a>
        </small>
      </div>
    </div>
  );
};

export default NewsItem;
