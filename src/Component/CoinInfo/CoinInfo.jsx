 
import { Line } from "react-chartjs-2"
import { CategoryScale } from "chart.js"
import { Chart } from "chart.js/auto"
import Alert from "../alert/Alert"
function CoinInfo({historicData,setDays,setInterval,days,currency}){
    const chartDays=[
        {
            label:'24 Hours',
            value:1,
        },

        {
            label:'7 Days',
            value:7,
        },

        {
            label:'1 Month',
            value:30,
        },

        {
            label:'1 Year',
            value:365,
        },
    ]
    function handleDayChange(e){
        console.log(e.target.options[e.target.selectedIndex].value)
        const daySelected=(e.target.options[e.target.selectedIndex].value)
        if(daySelected==1){
            setInterval("")
        }
        else{
            setInterval("daily")
        }     
        setDays(e.target.options[e.target.selectedIndex].value)
    }
    Chart.register(CategoryScale)
    if(!historicData){
        return <Alert message={'Data is not loaded'}/>
    }
     
    return(
        <div>
            <div
            className="flex justify-center items-center mt-6 p-6 w-full "
            >
                <Line
                    data={{
                        labels:historicData.prices.map(coinPrice=>{
                            let date=new Date(coinPrice[0]);
                            let time=date.getHours() > 12 ?`${date.getHours()-12}:${date.getMinutes()}PM`: `${date.getHours()}:${date.getMinutes()}AM`
                            return days===1 ? time:date.toLocaleDateString();
                        }),
                        datasets:[
                            {   
                                label:`Price (past ${days} Days) in ${currency.toUpperCase()}`,
                                data: historicData.prices.map(coinPrice=>coinPrice[1]),
                            }   
                        ],
                    }}
                    options={{
                        responsive:true,
                        maintainAspectRatio: false,
                        elements:{
                            point:{
                                radius:0
                            }
                        }
                    }}
                />
            </div>
            <div className="flex justify-center mt-5 w-full">
                <select className="px-4 py-2 border-2 border-blue-500 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs" onChange={handleDayChange} value={days}>
                    {chartDays.map((day,index)=>{
                        return <option   key={index} value= {day.value}>
                            {day.label}
                            </option>
                    })}

                </select>

            </div>
        </div>
        
             
    )
}
export default CoinInfo