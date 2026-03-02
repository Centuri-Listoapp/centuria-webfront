import { Login } from "../models/login";

class AuthService {
  loginData?: Login;

  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  get token() {
    try {
      return localStorage?.getItem("token");
    } catch (error) {
      return null;
    }
  }
}

export default new AuthService();
