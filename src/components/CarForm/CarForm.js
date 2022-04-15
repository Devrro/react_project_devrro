import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {joiResolver} from '@hookform/resolvers/joi'
import {carValidator} from "../../validators/car.validator";
import {useEffect} from "react";

const CarForm = ({setNewCar,carUpdate}) => {

    const {register, reset, handleSubmit, formState:{errors}, setValue} = useForm({resolver:joiResolver(carValidator)})

    const submit = async (car) =>{
        try {
            if(carUpdate){
                const {update} = carService.update(carUpdate.id, car)
                setNewCar(update)
            } else {
            const {data} = await carService.create(car);
                setNewCar(data)
                reset()

            }
        } catch (e){
            console.log(e)
        }
    }
    useEffect(()=>{
        if(carUpdate){
            const{price,year,model}=carUpdate
            setValue('model',model)
            setValue('year',year)
            setValue('price',price)
        }
    },[])
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>MODEL:<input type="text" defaultValue={'Mazeratti'} {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>PRICE:<input type="text" defaultValue={'340000'} {...register('price', {valueAsNumber:true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>YEAR:<input type="text" defaultValue={'2020'} {...register('year', {valueAsNumber:true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}

            <button>Save</button>
        </form>
    )
}
export default CarForm