import React, {useState} from 'react';
import as from './modules/OneAnimalIputColumn.module.css'
import animal_style from "./modules/OneAnimalIputColumn.module.css";

const CatInputComponent = ({dispatch,state}) => {
    const [catValue, setCatValue] = useState('');

    const CreateCat = () =>{
        dispatch({type:'addCat', payload:catValue});
        setCatValue('');
    }
    return (
        <div className={as.one_animal_input}>
            <label className={animal_style.input_decoration}>Cat name:
                <input type={'text'} placeholder={'Cat name'} value={catValue} onChange={({target}) => {setCatValue(target.value)}}/>
                <button onClick={()=>{CreateCat();}}>Create a cat</button>
            </label>
            {state.cats && state.cats.map((cat)=><div key={cat.id}>
                {cat.name}
                <button onClick={()=>{dispatch({type:'deleteCat', payload:cat.id})}}> DELETE </button>
            </div>)}
        </div>
    );
};

export default CatInputComponent;