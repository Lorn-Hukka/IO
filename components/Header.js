import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (  
        <nav>
            <Link href="/"><a>
                <Image src="/logo-right.svg" width ={128} height={77} />
            </a></Link>
            <input type="text" placeholder="Szukaj..." />
            <Link href="/"><a>Kontakt</a></Link>
            <Link href="/"><a>Twoje konto</a></Link>
            <Link href="/"><a>Koszyk</a></Link>
        </nav>
    );
}
 
export default Header;