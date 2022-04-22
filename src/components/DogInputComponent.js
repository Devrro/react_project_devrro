import React, {useState} from 'react';
import animal_style from './modules/OneAnimalIputColumn.module.css'
const DogInputComponent = ({dispatch, state}) => {

    const [dogValue, setDogValue] = useState('');

    const CreateDog = () =>{
        dispatch({type:'addDog', payload:dogValue});
        setDogValue('');
    }
    return (
        <div className={animal_style.one_animal_input}>
            <label className={animal_style.input_decoration}>Dog name:
                <input type={'text'} placeholder={'Dog name'} value={dogValue} onChange={({target}) => {setDogValue(target.value)}}/>
                <button onClick={()=>{CreateDog();}}>Create a dog</button>
            </label>
            {state.dogs && state.dogs.map((dog)=><div key={dog.id}>
                {dog.name}
                <button onClick={()=>{dispatch({type:'deleteDog', payload:dog.id})}}> DELETE </button>
            </div>)}
        </div>
    );
};

export default DogInputComponent;