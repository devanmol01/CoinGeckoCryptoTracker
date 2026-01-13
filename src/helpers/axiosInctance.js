import axios from "axios";
import { COIN_GECKO_API } from "./constant";

const axiosInstance=axios.create({baseURL:COIN_GECKO_API,

})

export default axiosInstance;