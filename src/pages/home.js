import {AppContext} from '../App';
import {useContext} from 'react';

export const Home = () => {
    const {userName} = useContext(AppContext);
    return (
    <div>
        <h1>This is Home page</h1>
        <h2>username : {userName}</h2>
    </div>
    )
}