import Link from "next/link";
import Styles from "./menu.module.css";
import Imagem from "next/image";

export default function Footer(){
    return(
        <footer>
            <Imagem 
                width={100}
                height={100}
                src={"https://ead.ifms.edu.br/theme/moove/pix/moodle-logo-white.png"} />
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
        </footer>
    )
}