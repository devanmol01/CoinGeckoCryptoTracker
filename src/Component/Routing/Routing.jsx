import { Route,Routes } from "react-router-dom"
import MainLayout from "../../pages/Layout"
import { lazy, Suspense } from "react"
import { Instagram } from 'react-content-loader'
import { CustomErrorBoundry } from "../CustomErrorBoundry/CustomErrorBoundry"


const Home=lazy(()=>import("../../pages/Home"));
const CoinDetail=lazy(()=>import( "../../pages/CoinDetail"))
 

function Routing(){
    return(
        <CustomErrorBoundry>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={
                            <Suspense fallback={<Instagram />}>
                            <Home/>
                            </Suspense>
                        }/>
                    <Route path="/details/:coinId" element={
                        <Suspense fallback={<Instagram />}>
                            <CoinDetail/>
                        </Suspense>
                    }/>
                    </Route>           
                </Routes>
        </CustomErrorBoundry>
        
    )
}
export default Routing