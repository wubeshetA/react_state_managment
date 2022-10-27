import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";


export const ChangeProfile = () => {
    const [newUserName, setNewUserName] = useState('');
    // const {username} = useContext(AppContext);
    const {setUserName} = useContext(AppContext);
    return (
        <div>
            <input onChange={(event) => setNewUserName((event.target.value))}></input>
            <button onClick={() => setUserName(newUserName)}>set username</button>
        </div>
    )
}