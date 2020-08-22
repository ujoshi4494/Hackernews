import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNews = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://hn.algolia.com/api/v1/search?tags=front_page"
    );
    setNews(res.data.hits);
    setLoading(false);
  };

  useEffect(() => {
    getNews();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      // <center>
      //   <h1>Loading...</h1>
      // </center>
      <Spinner />
    );
  }

  return (
    !loading && news.map((item) => <NewsItem key={item.objectID} news={item} />)
  );
};

export default News;
