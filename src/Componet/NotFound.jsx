import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="latest-news-section container notfound-section">
      <div className="notfound-wrapper">
        <div className="notfound-text">
          <div className="news-header">
            <h2>404</h2>
            <div className="divider" />
          </div>
          <h3>Opps! Page Not Found!</h3>
          <p className="pb-3">Sorry the page could not be found here.</p>
          <a className="btn-load mt-5" href="/">Go Back</a>
        </div>
        <div className="notfound-image">
          <img src="/Image/error-img.png" alt="Not found" />
        </div>
      </div>
    </section>
  );
};

export default NotFound;


