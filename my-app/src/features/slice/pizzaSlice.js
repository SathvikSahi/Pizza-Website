import { createSlice } from '@reduxjs/toolkit';
import pizzaData from '../../data';

const allPizzas = [...pizzaData];

const vegPizzas = [...pizzaData].filter( (pizza) => {
    return pizza.type === "veg"
});

const nonvegPizzas = [...pizzaData].filter( (pizza) => {
    return pizza.type === "non"
});


const pizzaSlice = createSlice({
    name: "pizza",

    initialState: {
        pizzas: allPizzas,
        selectedFilter: "all"
    },

    reducers: {
        applyFilter: (state, action) => {
            const filter = action.payload;
            state.selectedFilter = filter;
        },

        setPizzas: (state) => {
            const filter = state.selectedFilter;

            if (filter === "all")
            {
                state.pizzas = allPizzas;
            }
    
            else if (filter === "veg")
            {
                state.pizzas = vegPizzas;
            }
    
            else 
            {
                state.pizzas = nonvegPizzas;
            }
        }
    }
});

export const { applyFilter, setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;