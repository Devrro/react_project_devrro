import {useForm} from "react-hook-form";
import {carService} from "../../services";

const CarForm = ({setCars}) => {

    const {register, reset, handleSubmit} = useForm()

    const submit = async (car) =>{
        const {data} = await carService.create(car);
        setCars(data)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>MODEL:<input type="text" {...register('model')}/></label></div>
            <div><label>PRICE:<input type="text" {...register('price', {valueAsNumber:true})}/></label></div>
            <div><label>YEAR:<input type="text" {...register('year', {valueAsNumber:true})}/></label></div>
            <button>Save</button>
        </form>
    )
}
export default CarForm