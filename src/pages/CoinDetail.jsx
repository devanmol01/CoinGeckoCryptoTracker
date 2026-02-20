import { useParams } from "react-router-dom";
import { Instagram } from 'react-content-loader'
import CoinInfoContainer from "../Component/CoinInfo/CoinInfoContainer";
import usefetchCoiDetail from "../useHooks/usefetchCoinDetail";

function CoinDetail( ){
     const{coinId}=useParams();
    const{currency,isError,isLoading,data,}=usefetchCoiDetail( coinId)
    
    const MyInstagramLoader = () => <Instagram />
    if(isLoading){
            return <Instagram />
    }
    if(isError){
        return <div>Error:Something went wrong</div>
    }
    return(
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500">
                <img
                alt={data?.name}
                src={data?.image?.large}
                className="h-52 mb-5"
                />
                <h1
                className=" font-bold text-3xl mb-5"
                >{data.name}</h1>
                <p>{data?.description?.en}</p>

                <div className="flex items-center mb-4 md:mb-0">
                    <h2 className="text-xl font-bold">
                        Rank
                    </h2>
                    <span className="ml-3 text-xl">
                        {data?.market_cap_rank}
                    </span>
                </div>
                <div className="flex items-center mb-4 md:mb-0">
                    <h2 className="text-xl text-yellow-400 font-bold">
                        Current Price
                    </h2>
                    <span className="ml-3 text-xl">
                        {data?.market_data.current_price[currency]}
                    </span>
                </div>
            </div>
            <div className="md:w-2/3 w-full p-6">
                <CoinInfoContainer coinId={coinId}/>
            </div>
             
        </div>

    )
}
export default CoinDetail;