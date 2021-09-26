import requestsAPI from './api';

export default class ProfileService {
  static async follow({ username }) {
    return requestsAPI.post(`/profiles/${username}/follow`);
  }

  static async get(username) {
    return requestsAPI.get(`/profiles/${username}`);
  }

  static async unfollow({ username }) {
    return requestsAPI.delete(`/profiles/${username}/follow`);
  }
}
