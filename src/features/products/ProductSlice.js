import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: false,
    deleteSuccess: false,
    isError: false,
    error: "",
};

export const getProducts = createAsyncThunk("products/getProduct", async () => {
    const res = await fetch("http://localhost:5000/products")
    const data = res.json();
    return data;
})

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        }
    })
    // .then(res => res.json())
    // .then(data => console.log(data))
    // const data = res.json()
    // return data;
    return id;

})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.products = []
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
            .addCase(deleteProduct.pending, (state, action) => {
                state.isLoading = true;
               state.deleteSuccess= false
                // state.isError = true;

            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.deleteSuccess= true;
                state.products = state.products.filter(p => p._id !== action.payload)
                // console.log(action.payload);
                // state.isError = false;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.isLoading = true;
                state.deleteSuccess= false;
                state.isError = true;
                state.error = action.error.message;
            })

    }
})


export default productsSlice.reducer;