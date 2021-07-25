import illustrationImg from "../assets/illustration.svg";
import logoImg from "../assets/logo.svg";
import "../styles/auth.scss";

import { Button } from "../components/Button";
import { AuthContext } from "../contexts/AuthContext";
import { database } from "../services/firebase";

import { Link, useHistory } from "react-router-dom";
import { FormEvent, useContext, useState } from "react";
export function NewRoom() {
  const [newRoom, setNewRoom] = useState("");
  const { user } = useContext(AuthContext);
  const history = useHistory();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    //referência à "tabela" rooms no firebase
    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome da sala"
              value={newRoom}
              onChange={(event) => setNewRoom(event.target.value)}
            />
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
