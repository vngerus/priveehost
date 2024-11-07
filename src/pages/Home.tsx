import React from 'react';
import { Footer, Hero, Navbar, Services } from '../components';
import { Contact, Pircing } from '../services';

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Pircing />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;