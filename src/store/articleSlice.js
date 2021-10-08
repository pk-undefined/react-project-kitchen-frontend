import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ArticleService from '../services/articles-service';
import TagsService from '../services/tags-service';

export const requestArticleAllPage = createAsyncThunk(
  'article/allPage',
  async (page) => {
    const response = await ArticleService.all(page);
    return response.data;
  },
);
export const requestArticleByAuthor = createAsyncThunk(
  'article/byAuthor',
  async ({ author, page }) => {
    const response = await ArticleService.byAuthor(author, page);
    return response.data;
  },
);
export const requestArticleByTag = createAsyncThunk(
  'article/byTag',
  async ({ tag, page }) => {
    const response = await ArticleService.byTag(tag, page);
    return response.data;
  },
);
export const requestArticleDeleted = createAsyncThunk(
  'article/deleted',
  async (slug) => {
    const response = await ArticleService.del(slug);
    return response.data;
  },
);
export const requestArticleFavorite = createAsyncThunk(
  'article/favorite',
  async (slug) => {
    const response = await ArticleService.favorite(slug);
    return response.data;
  },
);
export const requestArticleFavoritedBy = createAsyncThunk(
  'article/favoritedBy',
  async ({ author, page }) => {
    const response = await ArticleService.favoritedBy(author, page);
    return response.data;
  },
);
export const requestArticleFeed = createAsyncThunk(
  'article/feed',
  async (page) => {
    const response = await ArticleService.feed(page);
    return response.data;
  },
);
export const requestArticleGet = createAsyncThunk(
  'article/get',
  async (formData) => {
    const response = await ArticleService.get(formData);
    return response.data;
  },
);
export const requestArticleUnfavorite = createAsyncThunk(
  'article/unfavorite',
  async (slug) => {
    const response = await ArticleService.unfavorite(slug);
    return response.data;
  },
);
export const requestArticleUpdate = createAsyncThunk(
  'article/update',
  async (article) => {
    const response = await ArticleService.update(article);
    return response.data;
  },
);
export const requestArticleCreate = createAsyncThunk(
  'article/create',
  async (article) => {
    const response = await ArticleService.create(article);
    return response.data;
  },
);
export const requestArticleCreateComment = createAsyncThunk(
  'article/createComment',
  async ({ slug, comment }) => {
    const response = await ArticleService.createComment(slug, comment);
    return response.data;
  },
);
export const requestArticleDeleteComment = createAsyncThunk(
  'article/deleteComment',
  async ({ slug, commentId }) => {
    const response = await ArticleService.deleteComment(slug, commentId);
    return response.data;
  },
);
export const requestArticleForArticle = createAsyncThunk(
  'article/forArticle',
  async (slug) => {
    const response = await ArticleService.forArticle(slug);
    return response.data;
  },
);
export const requestArticleGetAllTags = createAsyncThunk(
  'article/getAllTags',
  async () => {
    const response = await TagsService.getAll();
    return response.data;
  },
);

/* eslint no-param-reassign: ["error", { "props": false }] */
const articleSlice = createSlice({
  name: 'article',
  initialState: {
    article: {
      article: {},
      comments: [],
    },
    articleList: {
      articles: [],
      articlesCount: null,
      currentPage: null,
      tags: [],
      tag: '',
      tab: '',
    },
    isError: false,
    isLoading: false,
  },
  reducers: {
    setTab: (state, action) => {
      state.articleList.tab = action.payload;
    },
    setTag: (state, action) => {
      state.articleList.tag = action.payload;
    },
    delComment: (state, action) => {
      state.article.comments = state.article.comments.filter((el) => (el.id !== action.payload));
    },
  },
  extraReducers: {
    [requestArticleAllPage.fulfilled.toString()]: (state, action) => {
      state.articleList.articles = action.payload.articles;
      state.articleList.articlesCount = action.payload.articlesCount;
      state.isError = false;
    },
    [requestArticleAllPage.rejected.toString()]: (state) => { state.isError = true; },
    [requestArticleFeed.fulfilled.toString()]: (state, action) => {
      state.articleList.articles = action.payload.articles.reverse();
      state.articleList.articlesCount = action.payload.articlesCount;
      state.isError = false;
    },
    [requestArticleFeed.rejected.toString()]: (state) => { state.isError = true; },
    [requestArticleByTag.fulfilled.toString()]: (state, action) => {
      state.articleList.articles = action.payload.articles;
      state.articleList.articlesCount = action.payload.articlesCount;
      state.isError = false;
    },
    [requestArticleByTag.rejected.toString()]: (state) => { state.isError = true; },

    [requestArticleCreate.fulfilled.toString()]: (state, action) => {
      state.article.article = action.payload.article;
      state.isError = false;
    },
    [requestArticleCreate.rejected.toString()]: (state) => { state.isError = true; },
    [requestArticleUpdate.fulfilled.toString()]: (state, action) => {
      state.article.article = action.payload.article;
      state.isError = false;
    },
    [requestArticleUpdate.rejected.toString()]: (state) => { state.isError = true; },
    [requestArticleGet.fulfilled.toString()]: (state, action) => {
      state.article.article = action.payload.article;
      state.isError = false;
    },
    [requestArticleGet.rejected.toString()]: (state) => { state.isError = true; },
    [requestArticleByAuthor.fulfilled.toString()]: (state, action) => {
      state.articleList.articles = action.payload.articles;
      state.articleList.articlesCount = action.payload.articlesCount;
      state.isError = false;
    },
    [requestArticleByAuthor.rejected.toString()]: (state) => { state.isError = true; },

    [requestArticleFavoritedBy.fulfilled.toString()]: (state, action) => {
      state.articleList.articles = action.payload.articles;
      state.articleList.articlesCount = action.payload.articlesCount;
      state.isError = false;
    },
    [requestArticleFavoritedBy.rejected.toString()]: (state) => { state.isError = true; },

    [requestArticleForArticle.fulfilled.toString()]: (state, action) => {
      state.article.comments = action.payload.comments;
      state.isError = false;
    },
    [requestArticleForArticle.rejected.toString()]: (state) => { state.isError = true; },

    [requestArticleCreateComment.fulfilled.toString()]: (state, action) => {
      const { comment } = action.payload;
      state.article.comments.unshift(comment);
      state.isError = false;
    },
    [requestArticleCreateComment.rejected.toString()]: (state) => { state.isError = true; },

    [requestArticleFavorite.fulfilled.toString()]: (state, action) => {
      state.article.article = action.payload.article;
      state.articleList.articles = state.articleList.articles.map((el) => (
        el.slug !== action.payload.article.slug ? el : action.payload.article
      ));
      state.isError = false;
    },
    [requestArticleFavorite.rejected.toString()]: (state) => { state.isError = true; },
    [requestArticleUnfavorite.fulfilled.toString()]: (state, action) => {
      state.article.article = action.payload.article;
      state.articleList.articles = state.articleList.articles.map((el) => (
        el.slug !== action.payload.article.slug ? el : action.payload.article
      ));
      state.isError = false;
    },
    [requestArticleUnfavorite.rejected.toString()]: (state) => { state.isError = true; },

    [requestArticleGetAllTags.fulfilled.toString()]: (state, action) => {
      state.articleList.tags = action.payload.tags;
      state.isError = false;
    },
    [requestArticleGetAllTags.rejected.toString()]: (state) => { state.isError = true; },
  },
});

export const {
  setTab,
  setTag,
  delComment,
} = articleSlice.actions;
export default articleSlice.reducer;
