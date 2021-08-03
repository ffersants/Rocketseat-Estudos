import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type Question = {
    id: string;
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
  };

  type FireBaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
  }
>;

export function useRoom(roomId: string){
    const [questions, setQuestions] = useState<Question[]>([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        //acessa as perguntas registradas na base da sala com o ID acessada pelo usuario
        const roomRef = database.ref(`rooms/${roomId}`);
        //dispara o event buscar os dados na base toda vez que houver uma mudança na base (inclusão de pergunta)
        roomRef.on("value", (room) => {
          const databaseRoom = room.val();
          console.log(databaseRoom);
          const firebaseQuestions: FireBaseQuestions = databaseRoom.questions;
    
          const parsedQuestions = Object.entries(firebaseQuestions).map(
            ([key, value]) => {
              return {
                id: key,
                content: value.content,
                author: value.author,
                isHighlighted: value.isHighlighted,
                isAnswered: value.isAnswered,
              };
            }
          );
    
          setTitle(databaseRoom.title);
          setQuestions(parsedQuestions);
        });
      }, [roomId])

    return {questions, title}
}