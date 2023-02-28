import Banner from "../Components/Banner";
import ChooseByBrand from "../Components/ChooseByBrand";
import Navbar from "../Components/Navbar";
import SeventyPercentSection from "../Components/SeventyPercent";
import TodaysBestDeal from "../Components/TodaysBestDeals";
import TopCategories from "../Components/TopCategories";

export default function HomePage (){
    return (
        <>
        <Navbar/>
        <Banner/>
        <TopCategories/>
        <TodaysBestDeal/>
        <ChooseByBrand/>
        <SeventyPercentSection/>
        </>
    )
}