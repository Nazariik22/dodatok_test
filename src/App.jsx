import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { RegisterComponent } from './Components/Register/RegisterComponent';
import { AutorizathionContainer } from './Components/Autorizathion/AutorizathionContainer';
import { GolovnaContainer } from './Components/Golovna/GolovnaContainer';
import { ProfileContainer } from './Components/Profile/ProfileContainer';

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/*'
                    element={<GolovnaContainer />} />
                <Route path='/auto'
                    element={<AutorizathionContainer />} />
                <Route path='/register'
                    element={<RegisterComponent />} />
                <Route path='/info'
                    element={<ProfileContainer />} />
            </Routes>
            <Footer/>
        </>
    );
}

export { App };
