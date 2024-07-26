import React, { useContext, useEffect } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { UserContext } from "../contexts/UserContext";
import { InputText } from "primereact/inputtext";

export function Home(){
    const {user, setUser} = useContext(UserContext);
    const {theme} = useContext(ThemeContext);

    console.log(user);

    return (
        <section className={`flex h-screen ${theme} justify-center items-center flex-col space-y-6`}>
            <div className="card flex w-1/4 justify-content-center text-zinc-900 flex-col space-y-2">
                <InputText className="p-2"
                    value={user.nome} 
                    onChange={(e) => {setUser({...user, nome:e.target.value})}}
                />
                <InputText className="p-2" 
                    value={user.email} 
                    onChange={(e) => {setUser({...user, email:e.target.value})}}
                />
            </div>
            <div>
                <p>Nome: <b>{user.nome}</b></p>
                <p>Email: <b>{user.email}</b></p>
            </div>
        </section>
    )
}