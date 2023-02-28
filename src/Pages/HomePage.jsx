import Banner from "../Components/Banner";
import CashBackBanner from "../Components/CashBackBanner";
import ChooseByBrand from "../Components/ChooseByBrand";
import MostSelling from "../Components/MostSelling";
import Navbar from "../Components/Navbar";
import SeventyPercentSection from "../Components/SeventyPercent";
import TodaysBestDeal from "../Components/TodaysBestDeals";
import TodaysDeals from "../Components/TodaysDeals";
import TopCategories from "../Components/TopCategories";
import WeeklyPopular from "../Components/WeeklyPopular";

export default function HomePage (){
    return (
        <>
        <Navbar/>
        <Banner/>
        <TopCategories/>
        <TodaysBestDeal/>
        <ChooseByBrand/>
        <SeventyPercentSection/>
        <WeeklyPopular/>
        <TodaysDeals/>
        <CashBackBanner/>
        <MostSelling/>
        </>
    )
}