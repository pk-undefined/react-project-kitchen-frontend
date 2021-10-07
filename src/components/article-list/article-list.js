import React from 'react';
import { useTranslation } from 'react-i18next';
import ArticlePreview from '../article-preview/article-preview';
import ListPagination from '../list-pagination/list-pagination';
import { EmptyArticleList } from './styled-article-list';

const ArticleList = (props) => {
  const { t } = useTranslation();
  if (!props.articles) {
    return (
      <EmptyArticleList>Загрузка...</EmptyArticleList>
    );
  }

  if (props.articles.length === 0) {
    return (
      <EmptyArticleList>
        {t('noArticles')}
      </EmptyArticleList>
    );
  }

  return (
    <div>
      {
        props.articles.map((article) => (
          <ArticlePreview article={article} key={article.slug} />
        ))
      }

      <ListPagination
        pager={props.pager}
        setPager={props.setPager}
        countPage={props.countPage}
        articlesCount={props.articlesCount}
      />
    </div>
  );
};

export default ArticleList;
