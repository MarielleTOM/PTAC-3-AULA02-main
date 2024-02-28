import Link from "next/link";
import Styles from "./menu.module.css";
import Imagem from "next/image";

export default function Menu(){
    return(
        <header className={Styles.cabecalho}>
            <Imagem 
                width={100}
                height={100}
                src={"http://www.ifms.edu.br/marcaifms.png"} />
            <nav>
                <ul>
                    <Link href="/">
                    <li>Home</li>
                    </Link>
                    <Link href="/registro">
                    <li>Registar</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}