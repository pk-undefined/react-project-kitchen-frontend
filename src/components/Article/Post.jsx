import React from 'react';
import styled from 'styled-components';

const bodyLorem = `
Статья́ — это жанр журналистики, в котором автор ставит задачу проанализировать общественные ситуации, процессы, явления, прежде всего с точки зрения закономерностей, лежащих в их основе.
Такому жанру как статья присуща ширина практических обобщений, глубокий анализ фактов и явлений, четкая социальная направленность[источник не указан 4342 дня]. В статье автор рассматривает отдельные ситуации как часть более широкого явления. Автор аргументированно пишет о своей точке зрения.
В статье выражается развернутая обстоятельная аргументированная концепция автора или редакции по поводу актуальной социологической проблемы. Также в статье журналист обязательно должен интерпретировать факты (это могут быть цифры, дополнительная информация, которая будет правильно расставлять акценты и ярко раскрывать суть вопроса).
Отличительным аспектом статьи является её готовность. Если подготавливаемый материал так и не был опубликован (не вышел в тираж, не получил распространения), то такой труд относить к статье некорректно. Скорее всего данную работу можно назвать черновиком или заготовкой. Поэтому целью любой статьи является распространение содержащейся в ней информации.
`;

const descLorem = 'Описание нормальной статьи про жизнь молодую';

const Post = (props) => {
  // необходимые пропсы articleTitle, body, articleDescription, articleImg
  const { body, title } = props;
  console.log(body, title);

  return (
    <StyledPost className="Post">
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
        bodyLorem.split(/\n/)
          .map((paragraph, index) => <p className="Post__paragraph" key={index}>{paragraph}</p>)
      }
    </StyledPost>
  );
};

const StyledPost = styled.article`
  max-width: 1108px;
  margin: auto;

  .Post_header {
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
