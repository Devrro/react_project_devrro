import './Car.module.css'

const Car = ({car})=>{
    const {id,model,price,year} = car;
    return(
        <div className={styles.car}>
            <div>ID : {id}</div>
            <div>MODEL: {model}</div>
            <div>YEAR : {year}</div>
            <div>PRICE: {price}</div>
            <button onClick={()=>{}}>DELETE</button>
        </div>
    )
}
export {
    Car
}
