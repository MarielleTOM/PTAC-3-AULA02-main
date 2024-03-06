import Link from "next/link";
import Imagem from "next/image";
import Styles from "./footer.module.css";

export default function Footer(){
    return(
        <footer className={Styles.footer}>
            <nav>
                <Link href= "https://ead.ifms.edu.br/">
            <Imagem 
                className="img"
                width={100}
                height={100}
                src={"https://moodle.org/theme/moodleorg/pix/moodle_logo_TM.svg"} />
                </Link>
            </nav>
        </footer>
    )
}