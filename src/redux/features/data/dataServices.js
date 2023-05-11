import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/data/`;


const addData = async (data) => {
  const response = await axios.post(API_URL + "addData", data);
  return response.data;
}

const getAllData = async () => {
  const response = await axios.get(API_URL + "allData");
  return response.data;
}

const filterRegion = async (key) => {
  const response = await axios.get(`${API_URL}region/${key}`);
  return response.data;
}

const filterCountry = async (key) => {
  const response = await axios.get(`${API_URL}country/${key}`);
  return response.data;
}

const filterCity = async (key) => {
  const response = await axios.get(`${API_URL}city/${key}`);
  return response.data;
}

const filterSector = async (key) => {
  const response = await axios.get(`${API_URL}sector/${key}`);
  return response.data;
}

const filterTopic = async (key) => {
  const response = await axios.get(`${API_URL}topic/${key}`);
  return response.data;
}


const dataService = {
  getAllData,
  addData,
  filterRegion,
  filterCountry,
  filterCity,
  filterSector,
  filterTopic
}

export default dataService;