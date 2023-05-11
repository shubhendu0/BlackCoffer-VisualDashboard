import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addData,
  getAllData,
  filterRegion,
  filterCountry,
  filterCity,
  filterSector,
  filterTopic
} from "./dataActions";


const initialState = {
  data : [],
  filterRegion : [],
  filterCountry : [],
  filterCity : [],
  filterSector : [],
  filterTopic : [],
  isError : false,
  isSuccess : false,
  isLoading : false,
  message : "",
}


const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
      
  },

  extraReducers: (builder) => {
    builder

    //-------------------------- Add Data -------------------------//
    .addCase(addData.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(addData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      toast.success("New Car Added",{
        toastId : "add-data"
      });
    })
    .addCase(addData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      toast.error(action.payload,{
        toastId : "error"
      });
    })


    //------------------------- Get All Data -----------------------//
    .addCase(getAllData.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getAllData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
      toast.success("Data Fetch Successful",{
        toastId : "getData"
      });
    })
    .addCase(getAllData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.data = null;
      toast.error(action.payload,{
        toastId : "error"
      });
    })


    //----------------------- Filter Region --------------------//
    .addCase(filterRegion.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(filterRegion.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.filterRegion = action.payload;
    })
    .addCase(filterRegion.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.filterRegion = null;
      toast.error(action.payload,{
        toastId : "error"
      });
    })

    //----------------------- Filter Country ------------------//
    .addCase(filterCountry.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(filterCountry.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.filterCountry = action.payload;
    })
    .addCase(filterCountry.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.filterCountry = null;
      toast.error(action.payload,{
        toastId : "error"
      });
    }) 
    

    //----------------------- Filter City ---------------------//
    .addCase(filterCity.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(filterCity.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.filterCity = action.payload;
    })
    .addCase(filterCity.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.filterCity = null;
      toast.error(action.payload,{
        toastId : "error"
      });
    }) 


    //----------------------- Filter Sector ---------------------//
    .addCase(filterSector.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(filterSector.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.filterSector = action.payload;
    })
    .addCase(filterSector.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.filterSector = null;
      toast.error(action.payload,{
        toastId : "error"
      });
    }) 


    //----------------------- Filter Topic ---------------------//
    .addCase(filterTopic.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(filterTopic.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.filterTopic = action.payload;
    })
    .addCase(filterTopic.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.filterTopic = null;
      toast.error(action.payload,{
        toastId : "error"
      });
    }) 


  }  
})

export default dataSlice.reducer