import { Login } from "../models/login";

class AuthService {
  loginData?: Login;

  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  get token() {
    return localStorage.getItem("token");
  }
}

export default new AuthService();
