import Link from "next/link";

export default function Footer(){
    return(
        <footer>
            <h1>Footer</h1>
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