import CarForm from "./components/CarForm/CarForm";
import Cars from "./components/Cars/Cars";
import {useEffect, useState} from "react";
import {carService} from "./services";
function App() {

    const [cars,setCars] = useState(null)
    useEffect(()=>{
        carService.getAll().then(({data})=>setCars(data))
    },[cars])

    return (
        <div>

            <CarForm cars={setCars}/>
            <Cars cars={cars}/>
        </div>
    )

}

export default App;
