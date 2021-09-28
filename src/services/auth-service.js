import requestsAPI from './api';

export default class AuthService {
  static async register({ username, email, password }) {
    return requestsAPI.post('/users', { user: { username, email, password } });
  }

  static async login({ email, password }) {
    return requestsAPI.post('/users/login', { user: { email, password } });
  }

  static async current() {
    return requestsAPI.get('/user');
  }

  static async save(user) {
    return requestsAPI.put('/user', { user });
  }
}
