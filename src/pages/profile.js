import { ChangeProfile } from "../components/ChangeProfile"
import { useContext } from "react"
import { AppContext } from "../App"
export const Profile = () => {
    const {userName} = useContext(AppContext)
    return (
        <div>
            <h1>This is Profile page </h1>
            <h2>username : {userName}</h2>
            <ChangeProfile/>
        </div>
    )
}