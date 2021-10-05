import React from 'react';
import { useTranslation } from 'react-i18next';
import ArticlePreview from '../article-preview/article-preview';
import ListPagination from '../list-pagination/list-pagination';

const ArticleList = (props) => {
  const { t } = useTranslation();
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        {t('noArticles')}
      </div>
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
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ArticleList;
