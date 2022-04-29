import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import carService from "../../services/car.service";
import {useDispatch} from "react-redux";

const initialState = {
    cars: [],
    status: [],
    carForUpdate: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data
    })

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}) => {
        const {data} = await carService.create(car);
        return data
    }
)

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carService.deleteById(id)
            dispatch(deleteCarById({id}))
            return data
        } catch (e){
            return rejectWithValue({status: e.message})
        }
    }
)
const updateById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}) => {
        const {data} = await carService.updateById(id)
        return data
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        updateCarById: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars[index] = {...state.car[index], car: action.payload.car}
        },
        deleteCarById:(state, action)=>{
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars.splice(index,1)
        },
    },
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.status = null
            state.cars = action.payload;
        },
        [getAll.pending]: (state) => {
            state.status = 'loading'
        },
        [getAll.rejected]: (state) => {
            state.status = 'rejected'
        },
        [create.fulfilled]: (state, action) => {
            state.cars.push(action.payload)
        },
        [create.pending]: (state, action) => {
        },
        [create.rejected]: (state, action) => {
            console.log(state)
        },
        [deleteById.fulfilled]: (state, action) => {
            console.log(action)
            state.cars = state.cars.filter((car) => car.id !== action.payload)
        },
        [updateById.fulfilled]: () => {
        }
    }
});

const {reducer: carReducer, actions: {updateCarById}} = carSlice;

const carActions = {
    getAll,
    deleteById,
    create,
    updateById,
    updateCarById
}

export {
    carReducer,
    carActions
}