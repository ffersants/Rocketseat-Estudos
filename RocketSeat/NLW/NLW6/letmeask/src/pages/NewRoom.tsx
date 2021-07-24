import { useContext } from "react";

import illustrationImg from "../assets/illustration.svg";
import logoImg from "../assets/logo.svg";

import { AuthContext } from "../contexts/AuthContext";

import "../styles/auth.scss";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
export function NewRoom() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="" />
          <h1>{user?.name}</h1>
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente?
            <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
