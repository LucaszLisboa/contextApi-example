import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { UserContext } from "../contexts/UserContext";
import { UserLocationContext } from "../contexts/UserLocationContext";

export function About(){
    const {theme} = useContext(ThemeContext);
    const {user} = useContext(UserContext);
    const {userLocation} = useContext(UserLocationContext);

    return(
        <section className={`flex flex-col h-screen ${theme} items-center`}>
            <div className="py-4">
                <p>Nome: <b>{user.nome}</b></p>
                <p>Email: <b>{user.email}</b></p>
            </div>
            <div>
                <p>Latitude: <b>{userLocation.latitude}</b></p>
                <p>Longitude: <b>{userLocation.longitude}</b></p>
            </div>
        </section>
    )
}