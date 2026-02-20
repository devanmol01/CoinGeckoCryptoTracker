import { fetchCoinDetail } from "../service/CoinDetail";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { currencyContext } from "../context/CurrencyContext";
function usefetchCoiDetail(coinId){
    const {currency} = useContext(currencyContext);
    const {isError,isLoading,data}= useQuery({
        queryKey:['coin',coinId],
        queryFn:()=>fetchCoinDetail(coinId),
        gcTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    })
    return{
        currency,
        isError,
        isLoading,
        data,
        
    }
    
}
export default usefetchCoiDetail;