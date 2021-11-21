import Head from 'next/head'
// import Footer from './Footer'
// import Header from './Header'
// import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>

            <div className="flex flex-col min-h-screen overflow-hidden">
                {/* <Header /> */}
                <main className="flex-grow">
                    {children}
                </main>
                {/* <Footer /> */}
            </div>
        </>

    );
}

export default Layout;