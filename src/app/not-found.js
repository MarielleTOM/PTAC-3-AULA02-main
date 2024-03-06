import Link from "next/link";
import Styles from "./not-found.module.css";

export default function NotFound(){
    return (
        <div className="Card">
            <h2>
                Página não encontrada!!
            </h2>
           <button><Link href="/">Retornar para Home</Link></button>
        </div>
    )
}