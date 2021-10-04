import requestsAPI from './api';

const encode = encodeURIComponent;
const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = (article) => ({ ...article, slug: undefined });

export default class ArticlesService {
  static async all(page) {
    return requestsAPI.get(`/articles?${limit(10, page)}`);
  }

  static async byAuthor(author, page) {
    return requestsAPI.get(`/articles?author=${encode(author)}&${limit(5, page)}`);
  }

  static async byTag(tag, page) {
    return requestsAPI.get(`/articles?tag=${encode(tag)}&${limit(10, page)}`);
  }

  static async del(slug) {
    return requestsAPI.delete(`/articles/${slug}`);
  }

  static async favorite(slug) {
    return requestsAPI.post(`/articles/${slug}/favorite`, { article: { _id: slug } });
  }

  static async favoritedBy(author, page) {
    return requestsAPI.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`);
  }

  static async feed(page) {
    return requestsAPI.get(`/articles/feed?${limit(10, page)}`);
  }

  static async get(slug) {
    return requestsAPI.get(`/articles/${slug}`);
  }

  static async unfavorite(slug) {
    return requestsAPI.delete(`/articles/${slug}/favorite`);
  }

  static async update(article) {
    return requestsAPI.put(`/articles/${article.slug}`, { article: omitSlug(article) });
  }

  static async create(article) {
    return requestsAPI.post('/articles', { article });
  }

  static async createComment(slug, comment) {
    return requestsAPI.post(`/articles/${slug}/comments`, { comment: { body: comment } });
  }

  static async deleteComment(slug, commentId) {
    return requestsAPI.delete(`/articles/${slug}/comments/${commentId}`);
  }

  static async forArticle(slug) {
    return requestsAPI.get(`/articles/${slug}/comments`);
  }
}
