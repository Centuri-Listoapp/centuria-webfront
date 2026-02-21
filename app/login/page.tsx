import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import "./login.css";
import LoginForm from "./loginForm";

export default function Home() {
  return (
    <div className="login-root">
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">
            <FontAwesomeIcon icon={faUsers} />
            <span>CENTURIA</span>
          </div>
          <h1 className="login-title">Iniciar sesión</h1>
          <p className="login-text">Accede a panel de gestión de candidatos</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
