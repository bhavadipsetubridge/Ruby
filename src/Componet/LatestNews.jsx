import React from "react";
import { FaUser, FaComments } from "react-icons/fa";
import "./LatestNews.css";

const newsData = [
  {
    id: 1,
    title: "Give Us That",
    author: "Adminaccess",
    comments: "No Comment",
    date: "25 NOV",
    img: "./Image/blog1.jpg",
    excerpt:
      "Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
  },
  {
    id: 2,
    title: "Consisting With Technology",
    author: "Adminaccess",
    comments: "No Comment",
    date: "30 NOV",
    img: "./Image/blog2.jpg",
    excerpt:
      "Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
  },
  {
    id: 3,
    title: "The Inline Product",
    author: "Adminaccess",
    comments: "No Comment",
    date: "05 DEC",
    img: "./Image/blog3.jpg",
    excerpt:
      "Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
  },
];

const LatestNews = () => {
  return (
    <section className="latest-news-section container">
      <div className="news-header">
        <h2>LATEST NEWS</h2>
        <div className="divider" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>

      <div className="news-grid">
        {newsData.map((news) => (
          <div className="news-card" key={news.id}>
            <img src={news.img} alt={news.title} />
            <div className="news-content">
              <div className="news-date">
                <span>{news.date.split(" ")[0]}</span>
                <small>{news.date.split(" ")[1]}</small>
              </div>
              <div>
                <h4>{news.title}</h4>
                <div className="news-meta">
                  <span>
                    <FaUser /> {news.author}
                  </span>
                  <span>
                    <FaComments /> {news.comments}
                  </span>
                </div>
                <p>{news.excerpt}</p>
                <a href="#">Read More &rsaquo;</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <a href="#" className="btn-load">
          Load More
        </a>
      </div>
    </section>
  );
};

export default LatestNews;
