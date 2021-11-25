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

            <div className="mx-12 py-2 lg:py-0 md:mx-0 flex justify-between shadow rounded-full">
                <input className ="outline-none rounded-full w-full pl-5" type="text" placeholder="Szukaj..." />

                <button className="border-l border-r">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </button>
                <div>
                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative">
                        <Listbox.Button className="text-sm relative w-full lg:py-2 pl-3 pr-10 text-left bg-white rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500">
                            <span className="truncate hidden lg:block">{selected.name}</span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <SelectorIcon
                                className="w-5 h-5 mb-3 lg:mb-0 text-gray-400"
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
                            <Listbox.Options className="text-sm absolute w-100 py-1 mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none right-1">
                            {kategorie.map((kategoria) => (
                                <Listbox.Option
                                key={kategoria.id}
                                className={({ active }) =>
                                    `${active ? 'text-gray-900 bg-gray-100' : 'text-gray-900'}
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
                                            active ? 'text-gray-900' : 'text-gray-900'
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
                            <Link href="/"><a className="flex items-center rounded-full mt-3 md:mt-0 md:ml-3 lg:ml-20 py-2 px-3 uppercase text-xs font-bold tracking-wider cursor-pointer text-third border-third border-2 hover:bg-third hover:text-white transition ease-out duration-500">Kontakt</a></Link>
                            <Link href="/"><a className="flex items-center text-center rounded-full mt-3 md:mt-0 mx-3 py-2 px-3 uppercase text-xs font-bold tracking-wider cursor-pointer text-third border-third border-2 hover:bg-third hover:text-white transition ease-out duration-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg><span className="hidden lg:inline">Twoje konto</span></a></Link>
                            <Link href="/"><a className="flex items-center rounded-full mt-3 md:mt-0 py-2 px-3 uppercase text-xs font-bold tracking-wider cursor-pointer text-third border-third border-2 hover:bg-third hover:text-white transition ease-out duration-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg><span className="hidden lg:inline">Koszyk</span></a></Link>
                        </nav>

                        

        </div>
    );
}
 
export default Header;