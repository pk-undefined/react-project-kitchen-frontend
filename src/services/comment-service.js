import requestsAPI from './api';

export default class CommentsService {
  static async create({ slug, comment }) {
    return requestsAPI.post(`/articles/${slug}/comments`, { comment });
  }

  static async delete({ slug, commentId }) {
    return requestsAPI.delete(`/articles/${slug}/comments/${commentId}`);
  }

  static async forArticle(slug) {
    return requestsAPI.get(`/articles/${slug}/comments`);
  }
}
