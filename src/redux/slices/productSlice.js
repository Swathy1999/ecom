import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// asynchronous function - should be dispatched by product component
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    const result = await axios.get("https://dummyjson.com/products");
    console.log(result.data);
    return result.data.products;
  }
);

const productSlice = createSlice({
  name: "products",

  initialState: {
    loading: true,
    allProducts: [],
    dummyAllProducts: [],
    error: "",
  },

  reducers: {
    // resolve only synchronous actions
    searchProduct: (state, action) => {
      state.allProducts = state.dummyAllProducts.filter((item) =>
        item.title
          .toLowerCase()
          .includes(action.payload.toLowerCase())
      );
    },
  },

  extraReducers: (builder) => {
    // resolve asynchronous action
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        state.dummyAllProducts= action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(getAllProducts.pending, (state, action) => {
        state.allProducts = [];
        state.dummyAllProducts=[];
        state.loading = true;
        state.error = "";
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.allProducts = [];
        state.dummyAllProducts=[];
        state.loading = false;
        state.error = "API";
      });
  },
});

export const { searchProduct } = productSlice.actions;
export default productSlice.reducer;