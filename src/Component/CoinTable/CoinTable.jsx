import {useContext, useState } from "react";
import { fetchCoinData } from "../../service/CoinData";
import { useQuery } from "@tanstack/react-query";
import { currencyContext } from "../../context/CurrencyContext";
import { useNavigate } from "react-router-dom";
import { Instagram } from 'react-content-loader'



function CoinTable( ){
    const{currency}=useContext(currencyContext)
    const navigate=useNavigate()
   
    const[page,setPage ]=useState(1);
    const { data, isLoading, isError, error } = useQuery({
    queryKey:['coin', page,currency],
    queryFn:() => fetchCoinData(page,currency),
    // retry: 2,
    // retryDelay: 1000,
    gcTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
})
    function handleClickRedirect(id){
        navigate(`/details/${id}`)

    }
    
    if(isError){
        return <div>Error:{error.message}</div>
    }
    if(isLoading){
        return <Instagram/>
    }
    
    return(
        <> 
            <div className=" mg-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
                <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
                    <div className="basis-[35%]">
                        Coin
                    </div>
                    <div  className="basis-[25%]">
                        Price
                    </div>
                    <div  className="basis-[20%]">
                        24 h Change
                    </div>
                    <div  className="basis-[20%]">
                        Market Cap
                    </div>

                </div>
                <div className="flex flex-col w-[80vw] mx-auto">
                    {isLoading &&<div>Loading...</div>} 
                    {data && data.map((coin)=>{
                           
                        return(
                            <div onClick={()=>handleClickRedirect(coin.id)} key={coin.id} className="w-full bg-transparent  flex py-4 px-2            font-semibold items-center justify-between">
                                <div className="flex items-center justify-start gap-3 basis-[35%]">
                                    <div className="w-[5rem] h-[5rem] ">
                                        <img src={coin.image} className="w-full h-full" loading="lazy"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-black text-3xl">
                                            {coin.name}
                                        </div>
                                        <div className="text-black text-xl">
                                            {coin.symbol}
                                        </div>
                                    </div>
                                </div>
                                <div className= "basis-[25%]">
                                    {coin.current_price}
                                </div>
                                <div className= "basis-[25%]">
                                    {coin.price_change_24h}
                                </div>
                                <div className= "basis-[25%]">
                                    {coin.market_cap_change_percentage_24h}
                                </div>
                         </div>
                            
                            
                        )
                    })}
                </div>
                <div className="flex items-center justify-center gap-4">
                    <button 
                    disabled={page===1}
                    onClick={()=>{setPage(page-1)}} 
                    className="btn btn-primary btn-wide text-2xl">
                        Previous
                    </button>

                    <button 
                    onClick={()=>{setPage(page+1)}} 
                    className="btn btn-secondary btn-wide text-2xl">
                        Next
                    </button>
                </div>
            </div>
        </>
       
    )
}
export default CoinTable;