import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
// import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
                <link rel="icon" href="logo.svg"></link>
                <meta name="author" content="Wojciech Kasolik / Błażej Mrzygłód / Radosław Koczur" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content='Sklep internetowy "Sagittarius" dla zapalonych pasjonatów Fantastyki.
                            To tutaj dostaniesz wszystko co potrzebne do dobrej zabawy; 
                            Planszówki, kostki, podręczniki do RPGów i wiele więcej.
                ' />
                <title>Sagittarius - Twój sklep hobbystyczny.</title>
                <script src="https://kit.fontawesome.com/1585bf7ccb.js" crossorigin="anonymous"></script>
            </Head>
            <div className="flex flex-col min-h-screen overflow-hidden">
                { <Header /> }
                <main className="flex-grow">
                    {children}
                </main>
                { <Footer /> }
            </div>
        </>

    );
}

export default Layout;