import React, { useState, useEffect } from "react";
import "./style.css";
// const url =
//   "https://newsapi.org/v2/top-headlines?country=us&apiKey=ffbf1e34abd749a890fc725d01f08cb7";
const url =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=ffbf1e34abd749a890fc725d01f08cb7";
const ApiFetch = () => {
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setNews(data.articles);
    console.log(data.articles);
  };
  const removeNews = (title) => {
    const singleNews = news.filter(
      (meriHeadlines) => meriHeadlines.title !== title
    );
    setNews(singleNews);
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          margin: "auto",
        }}
      >
        <h1>Headlines : {news.length}</h1>
      </div>
      <main className="news">
        {news.map((meriHeadlines) => {
          return (
            <div className="headlines">
              <img
                src={meriHeadlines.urlToImage}
                alt={meriHeadlines.publishedAt}
              />
              <h4>{meriHeadlines.title.substring(0, 20)}...</h4>
              <p>{meriHeadlines.description}</p>
              <a target="_blank" href={meriHeadlines.url}>
                Read more
              </a>
              <footer
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h5>{meriHeadlines.author}</h5>
                <h5>{meriHeadlines.publishedAt}</h5>
              </footer>
              <button
                onClick={() => removeNews(meriHeadlines.title)}
                className="removeBtn"
              >
                Remove
              </button>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default ApiFetch;
