import React from "react";

const New = ({ oneNew }) => {
  const { urlToImage, url, title, description, source } = oneNew;
  const image = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt="portrait-of-new" />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {image}
        <div className="card-content">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            Show
          </a>
        </div>
      </div>
    </div>
  );
};

export default New;
