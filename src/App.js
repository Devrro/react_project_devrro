import React, {useReducer, useState} from "react";

function App() {
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
    // const init = () => {
    //
    // }

    const [state, dispatch] = useReducer(reducer, {dogs: [], cats: []})
    const [catValue, setCatValue] = useState('');
    const [dogValue, setDogValue] = useState('');

    const CreateCat = () =>{
        dispatch({type:'addCat', payload:catValue});
        setCatValue('');
    }
    const CreateDog = () =>{
        dispatch({type:'addDog', payload:dogValue});
        setDogValue('');
    }


    console.log(state)
    return (
            <div>
                <label>Cat name:
                    <input type={'text'} placeholder={'Cat name'} value={catValue} onChange={({target}) => {setCatValue(target.value)}}/>
                    <button onClick={()=>{CreateCat();}}>Create a cat</button>
                </label>
                {state.cats && state.cats.map((cat)=><div key={cat.id}>
                    {cat.name}
                    <button onClick={()=>{dispatch({type:'deleteCat', payload:cat.id})}}> DELETE </button>
                </div>)}
                <label>Dog name:
                    <input type={'text'} placeholder={'Dog name'} value={dogValue} onChange={({target}) => {setDogValue(target.value)}}/>
                    <button onClick={()=>{CreateDog();}}>Create a dog</button>
                </label>
                {state.dogs && state.dogs.map((dog)=><div key={dog.id}>
                    {dog.name}
                    <button onClick={()=>{dispatch({type:'deleteDog', payload:dog.id})}}> DELETE </button>
                </div>)}

            </div>
        // <Routes>
        //     <Route path={'/'} element={<MainLayout/>}>
        //     </Route>
        // </Routes>
    )

}

export default App;
