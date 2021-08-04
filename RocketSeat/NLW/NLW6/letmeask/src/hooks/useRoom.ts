import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type Question = {
    id: string;
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likeCount: number;
    likeId: string | undefined;
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
    likes: Record<string, {
      authorId: string
    }>
  }
>;

export function useRoom(roomId: string){
    const {user} = useAuth();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        //acessa as perguntas registradas na base da sala com o ID acessada pelo usuario
        const roomRef = database.ref(`rooms/${roomId}`);
        //dispara o event buscar os dados na base toda vez que houver uma mudança na base (inclusão de pergunta)
        roomRef.on("value", (room) => {
          const databaseRoom = room.val();
          const firebaseQuestions: FireBaseQuestions = databaseRoom.questions;
    
          const parsedQuestions = Object.entries(firebaseQuestions).map(
            ([key, value]) => {
              console.log(value)
              return {
                id: key,
                content: value.content,
                author: value.author,
                isHighlighted: value.isHighlighted,
                isAnswered: value.isAnswered,
                likeCount: Object.values(value.likes ?? {}).length,
                likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId  === user?.id)?.[0]
              };
            }
          );
    
          setTitle(databaseRoom.title);
          setQuestions(parsedQuestions);
        });

        return () => {
          roomRef.off('value')
        }
      }, [roomId])

    return {questions, title}
}