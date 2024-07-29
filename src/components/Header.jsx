import { NavLink } from "react-router-dom";
import { InputSwitch } from 'primereact/inputswitch';
import { useContext, useState } from "react";
import { ThemeContext } from '../contexts/ThemeContext';
import { UserContext } from "../contexts/UserContext";

export function Header(){
    const [checked, setChecked] = useState(false);
    const {toggleTheme} = useContext(ThemeContext);
    const {user} = useContext(UserContext);

    const handleChangeTheme = () => {
        setChecked(!checked);
        toggleTheme();
    }

    return (
        <nav className="flex justify-around bg-black text-cyan-50 items-center h-12">
            <h1>Logo</h1>
            <article className="flex space-x-6 items-center">
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/carrosel'>Carrosel</NavLink>
            </article>
            <article className="flex items-center space-x-6">
                <div className="card flex justify-content-center items-center space-x-2">
                    { !checked && (<i className="pi pi-sun"></i>) }
                    { checked && (<i className="pi pi-moon"></i>) }
                    <InputSwitch checked={checked} onChange={handleChangeTheme}/>
                </div>
                <p><b>{user.nome}</b></p>
            </article>
        </nav>
    )
}