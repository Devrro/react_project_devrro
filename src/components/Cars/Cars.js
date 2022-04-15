import {Car} from "../Car/Car";
import styles from '../../modules/Cars.module.css'
import {useEffect, useState} from "react";
import {carService} from "../../services";

const Cars = ({newCar,setUserForUpdate,carUpdate}) => {

    const [cars, setCars] = useState(null)
    const [deletedCarId, setDeletedCarId] = useState(null)

    useEffect(() => {
        carService
            .getAll().then(({data}) => setCars(data))
    }, [cars, deletedCarId])

    useEffect(()=>{
        if(newCar){
            setCars([...cars,newCar])
        }
    },[newCar])

    return (
        <div className={styles.cars}>
            {cars && cars.map(car => <Car key={car.id} car={car} setUserForUpdate={setUserForUpdate} carUpdate={carUpdate} setDeletedCarId={setDeletedCarId}/>)}
        </div>
    )
}

export default Cars;