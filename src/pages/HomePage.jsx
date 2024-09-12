import React, { Fragment } from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero';
import Footer from '../components/footer/Footer';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Covid from '../components/covid/Covid';
import Resources from '../components/resources/Resources';
import Contacts from '../components/contacts/Contacts';

const HomePage = () => {
    return (
        <Fragment>
            <Header />
            <Hero />
            <main>
                <About />
                <Services />
                <Covid />
                <Resources />
                <Contacts />
            </main>
            <Footer />
        </Fragment>
    )
}

export default HomePage;
