import React from "react";
import { FaUser, FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";
import "./LatestNews.css";

// data moved to shared module

const BlogList = () => {
  return (
    <section className="latest-news-section container">
      <div className="news-header">
        <h2>BLOG</h2>
        <div className="divider" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="news-grid">
        {blogPosts.map((post) => (
          <div className="news-card" key={post.id}>
            <Link to={`/blog/${post.id}`}>
              <img src={post.img} alt={post.title} />
            </Link>
            <div className="news-content">
              <div className="news-date">
                <span>{post.date.split(" ")[0]}</span>
                <small>{post.date.split(" ")[1]}</small>
              </div>
              <div>
                <h4>
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h4>
                <div className="news-meta">
                  <span>
                    <FaUser /> {post.author}
                  </span>
                  <span>
                    <FaComments /> {post.comments}
                  </span>
                </div>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.id}`}>Read More ›</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;


