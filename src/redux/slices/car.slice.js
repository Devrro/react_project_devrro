import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import carService from "../../services/car.service";

const initialState = {
    cars: [],
    status: {},
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
    async ({id,car}, {dispatch,rejectWithValue}) => {
        try {
            await carService.updateById(id,car)
            dispatch(updateCarById({id,car}))
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        updateCarById: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars[index] = { ...state.cars[index], ...action.payload.car };
            state.carForUpdate = false;
        },
        deleteCarById:(state, action)=>{
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars.splice(index,1)
        },
        setCarForUpdate:(state, action)=>{
            state.carForUpdate = action.payload.car
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

const {reducer: carReducer, actions: {updateCarById, deleteCarById,setCarForUpdate}} = carSlice;

const carActions = {
    create,
    getAll,
    deleteById,
    updateById,
    setCarForUpdate,


}

export {
    carReducer,
    carActions,
}