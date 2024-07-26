import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { UserContext } from "../contexts/UserContext";

export function About(){
    const {theme} = useContext(ThemeContext);
    const {user} = useContext(UserContext);

    return(
        <section className={`flex flex-col h-screen ${theme} items-center`}>
            <div className="py-4">
                <p>Nome: <b>{user.nome}</b></p>
                <p>Email: <b>{user.email}</b></p>
            </div>
        </section>
    )
}