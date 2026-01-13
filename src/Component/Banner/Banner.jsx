import bannerImage from "../../assets/image.jpg"
function Banner(){
    return(
        <div className="  w-full relative">

            <img src={bannerImage}
            className=" h-64 w-full"
            />
            <div className="absolute top-20 left-0 right-0 mx-auto  text-center w-[20rem]">
                
                <div className="flex flex-col gap-4 items-center">

                    <div className="font-semibold text-5xl text-white text-center "> 
                        Crypto Tracker
                    </div>

                    <div className="font-semibold text-sm text-center text-white">
                        Get All Info About Crytptocurrency
                    </div>

                </div>
                
            </div>
        </div>
    )
}
export default Banner;