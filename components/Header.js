import Link from 'next/link'
import Image from 'next/image'
import { Menu } from '@headlessui/react'



const Header = () => {
    return (  
        <nav>
            
            <Link href="/"><a>
                <Image src="/logo-right.svg" width ={256} height={128} />
            </a></Link>
            <input type="text" placeholder="Szukaj..." />
            <Menu>
            <Menu.Button>Kategorie</Menu.Button>
            <Menu.Items>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && 'bg-blue-500'}`}
                    href="/account-settings"
                  >
                    Lorem ipsum
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && 'bg-blue-500'}`}
                    href="/account-settings"
                  >
                    Lorem ipsum
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
            <Link href="/"><a>Kontakt</a></Link>
            <Link href="/"><a>Twoje konto</a></Link>
            <Link href="/"><a>Koszyk</a></Link>
        </nav>
    );
}
 
export default Header;