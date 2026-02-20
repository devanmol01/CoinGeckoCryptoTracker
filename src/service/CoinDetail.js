import axiosInstance from "../helpers/axiosInctance";

export async function fetchCoinDetail(id ) {
    const perPage=10;
    try {
        const response=await axiosInstance.get(`/coins/${id}`)
        return response.data
    } catch (error) {
        console.log('error')
        return null
        
    }
}
