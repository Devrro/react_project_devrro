import React, {useReducer} from 'react';
import CatInputComponent from "./CatInputComponent";
import DogInputComponent from "./DogInputComponent";
import animals from './modules/AllAnimalInput.module.css'
const AnimalInputs = () => {
    const reducer = (state, action) => {
        const {type, payload} = action;

        switch (type) {
            case 'addCat':
                return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]}
            case 'deleteCat':
                return {...state, cats: state.cats.filter(cat => cat.id !== payload)}
            case 'addDog':
                return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]}
            case 'deleteDog':
                return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)}
            default:
                console.log('Можливо труп, по коням')
                return
        }
    }


    const [state, dispatch] = useReducer(reducer, {dogs: [], cats: []})
    return (
        <div className={animals.animal_input}>

            <CatInputComponent dispatch={dispatch} state={state}/>

            <DogInputComponent dispatch={dispatch} state={state}/>

        </div>
    );
};

export default AnimalInputs;