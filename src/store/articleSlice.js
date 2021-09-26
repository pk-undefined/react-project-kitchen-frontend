import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ArticleService from '../services/articles-service';

export const requestArticleAllPage = createAsyncThunk(
  'article/allPage',
  async (formData) => {
    const response = await ArticleService.all(formData);
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
  async (formData) => {
    const response = await ArticleService.byTag(formData);
    return response.data;
  },
);
export const requestArticleDeleted = createAsyncThunk(
  'article/deleted',
  async (formData) => {
    const response = await ArticleService.del(formData);
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
  async () => {
    const response = await ArticleService.feed();
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
  async (formData) => {
    const response = await ArticleService.deleteComment(formData);
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
    },
    isError: false,
    isLoading: false,
  },
  reducers: {
    updateFieldAuth: (state, action) => {
      state.user.action.key = action.email;
    },
  },
  extraReducers: {
    // [requestArticleAllPage.fulfilled.toString()]: (state, action) => {
    // },
    // [requestArticleAllPage.rejected.toString()]: (state) => { state.isError = true; },
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
      console.log(action.payload.comment);
      state.isError = false;
    },
    [requestArticleCreateComment.rejected.toString()]: (state) => { state.isError = true; },

    // [requestArticleFavorite.fulfilled.toString()]: (state, action) => {
    //   state.articleList.articles = action.payload.articles;
    //   state.articleList.articlesCount = action.payload.articlesCount;
    //   state.isError = false;
    // },
    // [requestArticleFavorite.rejected.toString()]: (state) => { state.isError = true; },
    // [requestArticleUnfavorite.fulfilled.toString()]: (state, action) => {
    //   state.articleList.articles = action.payload.articles;
    //   state.articleList.articlesCount = action.payload.articlesCount;
    //   state.isError = false;
    // },
    // [requestArticleUnfavorite.rejected.toString()]: (state) => { state.isError = true; },
  },
});

export const {
  updateFieldAuth,
} = articleSlice.actions;
export default articleSlice.reducer;
