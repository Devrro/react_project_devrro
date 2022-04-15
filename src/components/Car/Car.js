import styles from '../../modules/Car.module.css'
import {carService} from "../../services";


const Car = ({car,setUserForUpdate,setDeletedCarId}) => {

    const deleteById = async () => {
        const del = await carService.deleteById(id)
        setDeletedCarId(id)
    }
    const {id, model, price, year} = car;

    return (
        <div className={styles.car}>
            <div>ID : {id}</div>
            <div>MODEL: {model}</div>
            <div>YEAR : {year}</div>
            <div>PRICE: {price}</div>
            <button onClick={() => {deleteById()}}>DELETE</button>
            <button onClick={() => {setUserForUpdate(car)}}>UPDATE</button>
        </div>
    )
}
export {
    Car
}
