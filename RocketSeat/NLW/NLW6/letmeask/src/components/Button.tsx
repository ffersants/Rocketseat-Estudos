//importa os atributos HTML para button
import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

//atribui a tipagem de buttons para o elemento HTMLButtonElement
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

//passa essa tipagem para props, determinando o tipo de valor esperado
//para cada atributo
export function Button({ isOutlined, ...props }: ButtonProps) {
  return (
    //desestruturação do objeto em chave="valor" || atributo="valor"
    <button className={`button ${isOutlined ? "outlined" : ""}`} {...props} />
  );
}
