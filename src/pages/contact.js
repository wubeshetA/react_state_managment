import { AppContext } from "../App";
import { useContext } from "react";

export const Contact = () => {
    const {userName} = useContext(AppContext);
    return (
        <div>
            <h1>This is Contact page {userName}</h1>
            <h2>username : {userName}</h2>
        </div>
    )
}