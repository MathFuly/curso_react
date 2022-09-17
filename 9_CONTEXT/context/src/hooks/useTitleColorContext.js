import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext);

    if(!context) {
        return (<h1>Contexto não encontrado!</h1>)
    }

    return context;
};