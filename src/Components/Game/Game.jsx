import {  useParams, useHref } from 'react-router-dom';
import { Start } from './Start/Start';
import { Launch } from './Launch/Launch';
import { Finish } from './Finish/Finish';
import { useSelector } from 'react-redux';

const Game = () => {
    const personName = useSelector(state => state.game.name);
    const idTest = Number(useParams().testId);
    const id = Number(useParams().id);
    const personId = Number(useParams().person);
    const url = useHref();
    const test = useSelector(state => state?.personData?.person.filter(item =>
        item.id === id && item))[0]?.test?.filter(element =>
            element.id === idTest && element
        )[0];
   
    const state = useSelector(state => state.game.test);
    const urlInfo = {
        personId: personId,
        idTest: idTest,
        url:url,
    }
    if (id === 1) {
        return (
            <Start
                name={personName}
                urlInfo={urlInfo}
                test={test}
            />
        )
    } else if (id > 1
        && id !== state.questions.length + 2) {
        return (
            <Launch
                id={id}
                urlInfo={urlInfo}
                state={state}
            />
        )
    } else if (id === state.questions.length + 2) {
        return (
            <Finish

            />
        )
    }

    return (
        <>
            Неправильне посилання. Перевірте шлях до тесту
        </>
    )
}
export { Game }