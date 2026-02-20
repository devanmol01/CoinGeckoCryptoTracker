import { fetchCoinHistoricData } from "../service/fetchCoinHistoricData";
import { useState,useContext } from "react"
import { currencyContext } from "../context/CurrencyContext";
import { useQuery } from "@tanstack/react-query"
function usefetchCoinHistoricData(coinId){
     
    const{currency}=useContext(currencyContext)
    const[days,setDays]=useState(7)
    const[interval,setInterval]=useState('')

    const{data:historicData,isLoading,isError}=useQuery({
    queryKey:['historicData',coinId,currency,days,interval],
    queryFn:()=>fetchCoinHistoricData({id:coinId,currency:currency,days:days,interval:interval}),
    gcTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
     })
    
    return [
        historicData,
        isError,
        isLoading,
        currency,
        days,
        setDays,
        setInterval
    ]
    
}
export default usefetchCoinHistoricData;