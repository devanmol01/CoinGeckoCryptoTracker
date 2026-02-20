import axiosInstance from "../helpers/axiosInctance";
 

export async function fetchCoinHistoricData({ id='bitcoin',currency='usd',days,interval='daily'} ) {

    try {
        const response=await axiosInstance.get(`/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`)
        return response.data
    } catch (error) {
        console.log('error')
        return null
        
    }
}
