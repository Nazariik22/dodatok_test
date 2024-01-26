import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { AutorizathionContainer } from './Components/Autorizathion/AutorizathionContainer';
import { GolovnaContainer } from './Components/Golovna/GolovnaContainer';
import { ProfileContainer } from './Components/Profile/ProfileContainer';
import { Register } from './Components/Register/Register';
import { Create } from './Components/Create/Create';
import { Game } from './Components/Game/Game';

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
                    element={<Register />} />
                <Route path='/info'
                    element={<ProfileContainer />} />
                <Route path='/create'
                    element={<Create />} />
                <Route path='/game/:id/:testId/:person'
                    element={<Game />} />
            </Routes>
            <Footer/>
        </>
    );
}

export { App };
