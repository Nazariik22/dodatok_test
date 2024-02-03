import { useParams, useHref } from 'react-router-dom';
import { Start } from './Start/Start';
import { Launch } from './Launch/Launch';
import { Finish } from './Finish/Finish';
import { useSelector } from 'react-redux';

const Game = () => {
    debugger
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
    const finishState = useSelector(state => state.game);
    const urlInfo = {
        personId: personId,
        idTest: idTest,
        url: url,
    }
    function numberAdd(data) {
        let count = 1
        data.forEach(element => {
            if (element.value !== element.cheked) {
                return count = 0;
            }
        });
        if (count === 0) {
            return 0;
        } else {
            return 1;
        }

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
                numberAdd={numberAdd}
            />
        )
    } else if (id === state.questions.length + 2) {
        return (
            <Finish
                name={finishState.name}
                number={finishState.number}
                qwestion_len={state.questions.length}
                idTest={idTest}
                personId={personId}
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