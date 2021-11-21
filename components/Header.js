import Link from 'next/link'
import Image from 'next/image'
import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'



const Header = () => {
    return (  
        <nav> 
            <Link href="/"><a>
                <Image src="/logo-right.svg" width ={256} height={128} />
            </a></Link>
            <div className="searchBar inline-block">
            <input type="text" placeholder="Szukaj..." />
            <Menu>
            <Menu.Button>Kategorie  <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" /> </Menu.Button>
            <Menu.Items>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && 'bg-blue-500'}`}
                    href="/"
                  >
                    Lorem ipsum
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && 'bg-blue-500'}`}
                    href="/"
                  >
                    Lorem ipsum
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
          </div>
            <Link href="/"><a>Kontakt</a></Link>
            <Link href="/"><a>Twoje konto</a></Link>
            <Link href="/"><a>Koszyk</a></Link>
        </nav>
    );
}
 
export default Header;