import Link from 'next/link'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'


const kategorie = [
    { id: 1, name: 'Wszystkie kategorie'},
    { id: 2, name: 'Lorem ipsum'},
    { id: 3, name: 'Lorem ipsum'},
    { id: 4, name: 'Lorem ipsum'},
    { id: 5, name: 'Lorem ipsum' },
    { id: 6, name: 'Lorem ipsum' },
  ]

const Header = () => {
    const [selected, setSelected] = useState(kategorie[0])
    return (  
        <div className="md:grid md:grid-cols-3 items-center z-50 shadow pb-2"> 
            <div className="flex justify-center lg:justify-end lg:mr-20">
            <Link href="/"><a>
                <Image src="/logo-right.svg" width ={256} height={128} />
            </a></Link>
            </div>

            <div className="mx-12 md:mx-0 flex justify-between shadow-lg rounded-full">
                <input className ="outline-none rounded-full w-full pl-5" type="text" placeholder="Szukaj..." />

                <button className="border-l">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </button>
                <div>
                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative">
                        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-full shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500">
                            <span className="block truncate">{selected.name}</span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute w-100 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {kategorie.map((kategoria, kategoriaIdx) => (
                                <Listbox.Option
                                key={kategoriaIdx}
                                className={({ active }) =>
                                    `${active ? 'text-primary-900 bg-primary-100' : 'text-gray-900'}
                                        cursor-pointer select-none relative py-2 pl-10 pr-4`
                                }
                                value={kategoria}
                                >
                                {({ selected, active }) => (
                                    <>
                                    <span
                                        className={`${
                                        selected ? 'font-medium' : 'font-normal'
                                        } block truncate`}
                                    >
                                        {kategoria.name}
                                    </span>
                                    {selected ? (
                                        <span
                                        className={`${
                                            active ? 'text-primary-600' : 'text-primary-600'
                                        }
                                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                        >
                                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                        </span>
                                    ) : null}
                                    </>
                                )}
                                </Listbox.Option>
                            ))}
                            </Listbox.Options>
                        </Transition>
                        </div>
                    </Listbox>
                </div>
            </div>
                        <nav className="flex justify-center md:justify-start">
                            <Link href="/"><a className="flex items-center rounded-full mt-3 md:mt-0 md:ml-3 lg:ml-20 py-2 px-3 uppercase text-xs font-bold tracking-wider cursor-pointer text-primary border-primary border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Kontakt</a></Link>
                            <Link href="/"><a className="flex items-center text-center rounded-full mt-3 md:mt-0 mx-3 py-2 px-3 uppercase text-xs font-bold tracking-wider cursor-pointer text-primary border-primary border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Twoje konto</a></Link>
                            <Link href="/"><a className="flex items-center rounded-full mt-3 md:mt-0 py-2 px-3 uppercase text-xs font-bold tracking-wider cursor-pointer text-primary border-primary border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Koszyk</a></Link>
                        </nav>

                        

        </div>
    );
}
 
export default Header;