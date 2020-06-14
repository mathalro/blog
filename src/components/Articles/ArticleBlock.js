import React from 'react';

const ArticleCard = ({ imageUrl, author, title, description }) => {
  const cardStyle = {
    backgroundColor: "eee",
    marginRight: "10px"
  };

  const imageStyle = {
    height: "auto",
    maxHeight: "300px",
    width: "auto",
    maxWidth: "1000px",
    align: "center"
  };

  return (
    <div style={cardStyle}>
      <img src={imageUrl} style={imageStyle} />
      <p>{author}</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ArticleCard;