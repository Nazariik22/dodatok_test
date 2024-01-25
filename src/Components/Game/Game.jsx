import { Routes, Route, useParams, useHref } from 'react-router-dom';
import { Start } from './Start/Start';
import { Launch } from './Launch/Launch';
import { Finish } from './Finish/Finish';

const Game = () => {
    const idTest  = useParams().testId;
    const url = useHref();
    return (
        <>
            <Routes>
                <Route path='/game/1/*'
                    element={<Start
                        
                    />} />
                <Route path='/game/2/:idTest'
                    element={<Launch />} />
                <Route path='/game/3/:idTest'
                    element={<Finish />} />
            </Routes>
            <Start
            idTest={idTest}
            url={url}
            />
        </>
    )
}
export { Game }