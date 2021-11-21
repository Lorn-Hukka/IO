import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'


const kategorie = [
    { id: 1, name: 'Wszystkie kategorie'},
    { id: 2, name: 'Lorem ipsum'},
    { id: 3, name: 'Lorem ipsum'},
    { id: 4, name: 'Lorem ipsum'},
    { id: 5, name: 'Lorem ipsum' },
  ]

const Header = () => {
    const [kategoria, setKategorie] = useState(kategorie[0])
    return (  
        <nav> 
            <Link href="/"><a>
                <Image src="/logo-right.svg" width ={256} height={128} />
            </a></Link>
            <div className="searchBar inline-block">
            <input type="text" placeholder="Szukaj..." />

            <Listbox value={kategoria} onChange={setKategorie}>
                <Listbox.Button>{kategoria.name}
                    <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" />
                </Listbox.Button>
                    <Listbox.Options>
                        {kategorie.map((kategoria) => (
                        <Listbox.Option
                            key={kategoria.id}
                            value={kategoria}
                            disabled={kategoria.unavailable}
                        >
                            {kategoria.name}
                        </Listbox.Option>
                        ))}
                    </Listbox.Options>
                    </Listbox>
          </div>
            <Link href="/"><a>Kontakt</a></Link>
            <Link href="/"><a>Twoje konto</a></Link>
            <Link href="/"><a>Koszyk</a></Link>
        </nav>
    );
}
 
export default Header;