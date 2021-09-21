import authAPI from './api';

export default class AuthService {
  static async register({ username, email, password }) {
    return authAPI.post('/users', { user: { username, email, password } });
  }

  static async login({ email, password }) {
    return authAPI.post('/users/login', { user: { email, password } });
  }

  static async current() {
    return authAPI.get('/user');
  }

  static async save(user) {
    return authAPI.put('/user', { user });
  }
}
