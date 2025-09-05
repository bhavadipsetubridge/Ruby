import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../Componet/blogData";
import "../Componet/LatestNews.css";
import PortfolioBanner from "../Componet/PortfolioBanner";

const BlogSingle = () => {
  const { id } = useParams();
  const postId = Number(id);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <section className="latest-news-section container">
        <div className="news-header">
          <h2>Blog not found</h2>
          <div className="divider" />
        </div>
      </section>
    );
  }

  return (
    <>
      <PortfolioBanner />
      <section className="latest-news-section container">
        <div className="news-header">
          <h2>{post.title}</h2>
          <div className="divider" />
        </div>

        <div className="news-card" style={{ maxWidth: "100%" }}>
          <img src={post.img} alt={post.title} />
          <div className="news-content">
            <div className="news-date">
              <span>{post.date.split(" ")[0]}</span>
              <small>{post.date.split(" ")[1]}</small>
            </div>
            <div>
              <p>{post.description}</p>
              {post.body && (
                <div style={{ whiteSpace: "pre-line", marginTop: 10 }}>
                  {post.body}
                </div>
              )}
              {post.tags && post.tags.length > 0 && (
                <div style={{ marginTop: 16 }}>
                  <strong>Tags</strong>
                  {"- "}
                  {post.tags.map((tag, index) => (
                    <span key={tag} style={{ marginRight: 10 }}>
                      {tag}
                      {index < post.tags.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingle;
