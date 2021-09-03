import React from 'react';
import styled from 'styled-components';

const descLorem = 'Описание нормальной статьи про жизнь молодую';

const ArticleInner = (props) => {
  // необходимые пропсы articleTitle, body, articleDescription, articleImg
  const { body, title, className } = props;

  return (
    <article className={className}>
      {/* заголовок сюда, tagList */}
      <h1 className="Post__header">{title}</h1>
      <p className="Post__description">
        {/* {Описание сюда} */}
        {descLorem}
      </p>
      {/* {cюда прокидываем пропс url картинки и альт из тайтла} */}
      <img
        className="Post__image"
        src="https://images.daznservices.com/di/library/sporting_news/f9/a1/img-academy-ftr-img-051220jpg_itu9cfptrglm1rucdqzbuo2f0.jpg"
        alt="Article Title"
      />
      {
        // распаршиваем боди на параграфы моднейшие
        body.split(/\n/)
          .map((paragraph, index) => <p className="Post__paragraph" key={index}>{body}</p>)
      }
    </article>
  );
};

const Post = styled(ArticleInner)`
  max-width: 1108px;
  margin: auto;

  .Post__header {
    font-size: 24px;
    line-height: 40px;
    color: #ebebeb;
    font-style: normal;
    margin-bottom: 16px;
  }

  .Post__description {
    font-style: italic;
    font-size: 1.2em;
    color: #9f9f9f;
    text-align: right;
    margin-bottom: 32px;
  }

  .Post__image {
    object-fit: cover;
    margin-bottom: 32px;
    width: 100%;
    max-height: 432px;
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
