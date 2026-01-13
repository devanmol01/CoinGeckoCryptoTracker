 
import axiosInstance from "../helpers/axiosInctance";

export async function fetchCoinData(page=1,currency='usd' ) {
    const perPage=14;
    try {
        const response=await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`)
        return response.data
    } catch (error) {
        console.log('error')
        return null
        
    }
}
 