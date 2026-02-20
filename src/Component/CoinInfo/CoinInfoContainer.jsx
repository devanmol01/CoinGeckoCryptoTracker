
import CoinInfo  from"./CoinInfo"
import { Instagram } from "react-content-loader";
import Alert from "../alert/Alert";
import usefetchCoinHistoricData from "../../useHooks/usefetchCoinHistoricData";
function CoinInfoContainer({coinId}){
    const [historicData,isError,isLoading,currency,days,setDays,setInterval]=usefetchCoinHistoricData(coinId)
    if(isLoading){
        return <Instagram/>
    }
    if(isError){
        return <Alert message="Error While fetcing the data" type="error"/>
    }

    return(
        <CoinInfo historicData={historicData}
        setDays={setDays} 
        setInterval={setInterval}
        days={days}
        currency={currency}
        />
    )
}
export default CoinInfoContainer