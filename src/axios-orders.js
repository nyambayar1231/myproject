import axios from "axios";
const instance = axios.create({
  baseURL: "https://myfirstproject-728e5-default-rtdb.firebaseio.com/",
});
export default instance;
