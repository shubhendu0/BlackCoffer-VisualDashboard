import { createAsyncThunk } from '@reduxjs/toolkit'
import dataServices from "./dataServices";


export const addData = createAsyncThunk(
  "/addData",
  async (data, thunkAPI) => {
    try {
      return await dataServices.addData(data);
    } 
    catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)


export const getAllData = createAsyncThunk(
    "/allData",
    async (_, thunkAPI) => {
      try {
        return await dataServices.getAllData();
      } 
      catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
)


export const filterRegion = createAsyncThunk(
  "/region",
  async (key, thunkAPI) => {
    try {
      return await dataServices.filterRegion(key);
    } 
    catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)


export const filterCountry = createAsyncThunk(
  "/country",
  async (key, thunkAPI) => {
    try {
      return await dataServices.filterCountry(key);
    } 
    catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)


export const filterCity = createAsyncThunk(
  "/city",
  async (key, thunkAPI) => {
    try {
      return await dataServices.filterCity(key);
    } 
    catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)


export const filterSector = createAsyncThunk(
  "/sector",
  async (key, thunkAPI) => {
    try {
      return await dataServices.filterSector(key);
    } 
    catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)


export const filterTopic = createAsyncThunk(
  "/topic",
  async (key, thunkAPI) => {
    try {
      return await dataServices.filterTopic(key);
    } 
    catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)