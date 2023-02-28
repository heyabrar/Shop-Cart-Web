import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import TodaysBestDeal from "../Components/TodaysBestDeals";
import TopCategories from "../Components/TopCategories";

export default function HomePage (){
    return (
        <>
        <Navbar/>
        <Banner/>
        <TopCategories/>
        <TodaysBestDeal/>
        </>
    )
}