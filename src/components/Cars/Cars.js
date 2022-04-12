import {Car} from "../Car/Car";

const Cars = ({cars}) => {
    // const [cars, setCars] = useState(null)
    // useEffect(() => {
    //     carService.getAll().then(({data}) => setCars(data))
    // }, [])
    return (
        <div>
            {cars && cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    )
}

export default Cars;