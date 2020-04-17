import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-c686a.firebaseio.com/",
});
export default instance;
