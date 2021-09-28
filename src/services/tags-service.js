import requestsAPI from './api';

export default class TagsService {
  static async getAll() {
    return requestsAPI.get('/tags');
  }
}
