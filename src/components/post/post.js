import React from 'react';
import styled from 'styled-components';

const ArticleInner = (props) => {
  const { className } = props;
  // необходимые пропсы articleTitle, body, articleDescription, articleImg
  const {
    body,
    title,
    description,
    image,
  } = props.article;

  return (
    <article className={className}>
      {/* заголовок сюда, tagList */}
      <h1 className="Post__header">{title}</h1>
      <p className="Post__description">
        {/* {Описание сюда} */}
        {description}
      </p>
      {/* {cюда прокидываем пропс url картинки и альт из тайтла} */}
      {image && (
        <div className="Block__image">
          <img
            className="Post__image"
            src={image}
            alt="Article Title"
          />
        </div>
      )}
      {
        // распаршиваем боди на параграфы моднейшие
        body.split(/\n/)
          .map((paragraph, index) => <p className="Post__paragraph" key={index}>{paragraph}</p>)
      }
    </article>
  );
};

const Post = styled(ArticleInner)`
  width: 1108px;
  margin: auto;

  .Post__header {
    font-size: 24px;
    line-height: 40px;
    color: #ebebeb;
    font-style: normal;
    margin: 48px 0 16px 0;
  }

  .Post__description {
    font-style: italic;
    font-size: 1.2em;
    color: #9f9f9f;
    text-align: right;
    margin-bottom: 32px;
  }

  .Block__image{
    width: 100%;
    text-align: center;
  }

  .Post__image {
    object-fit: cover;
    margin-bottom: 32px;
    // width: 100%;
    max-height: 350px;
  }

  .Post__paragraph {
    white-space: pre-wrap;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #ebebeb;
    margin-bottom: 20px;
  }

  .Post__paragraph:not:last-of-type {
    margin-bottom: 0;
  }
`;

export default Post;
