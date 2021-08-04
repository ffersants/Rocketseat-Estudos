import { useParams, useHistory } from "react-router-dom";
import deleteImg from "../assets/delete.svg";
// import { useAuth } from "../hooks/useAuth";

import logoImg from "../assets/logo.svg";

import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";

import "../styles/room.scss";
import { database } from "../services/firebase";
// import { useState } from "react";
import { Question } from "../components/Question";
import { useRoom } from "../hooks/useRoom";
import { Room } from "./Room";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const history = useHistory();

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push("/");
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja excluir esta pergunta")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  const { title, questions } = useRoom(roomId);

  // const { user } = useAuth();

  // const [newQuestion, setNewQuestion] = useState("");

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button onClick={handleEndRoom} isOutlined>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((question, index) => {
            return (
              <Question
                key={index}
                content={question.content}
                author={question.author}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Excluir pergunta" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}
