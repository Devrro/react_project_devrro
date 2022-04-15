import CarForm from "./components/CarForm/CarForm";
import Cars from "./components/Cars/Cars";
import {useState} from "react";
// import {carService} from "./services";
function App() {

    const [newCar,setNewCar] = useState(null)
    const [carUpdate,setUserForUpdate] = useState(null)
    // const [carFormUpdate,setFormCarUpdate] = useState(null)

    // const [cars,setCars] = useState(null)
    // useEffect(()=>{
    //     carService.getAll().then(({data})=>setNewCar(data))
    // },[cars])
    return (
        <div>
            <CarForm setNewCar={setNewCar} carUpdate={carUpdate}  />
            <Cars newCar={newCar} setNewCar={setNewCar} setUserForUpdate={setUserForUpdate}/>
        </div>
    )

}

export default App;
