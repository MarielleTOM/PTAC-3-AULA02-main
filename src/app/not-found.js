import Link from "next/link";
import Menu from "./Componentes/Menu";
import Footer from "./Componentes/Footer";
import Styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <div className={Styles.erro}>
            <div className={Styles.card}>
                <h2>
                    Página não encontrada!!
                </h2>
                <button><a href="/">Retornar para Home</a></button>
            </div>
            <Footer/>
        </div>
    )
}