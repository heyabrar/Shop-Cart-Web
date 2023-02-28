import Banner from "../Components/Banner";
import CashBackBanner from "../Components/CashBackBanner";
import ChooseByBrand from "../Components/ChooseByBrand";
import Footer from "../Components/Footer";
import MostSelling from "../Components/MostSelling";
import Navbar from "../Components/Navbar";
import ServicesToHelp from "../Components/Service";
import SeventyPercentSection from "../Components/SeventyPercent";
import TodaysBestDeal from "../Components/TodaysBestDeals";
import TodaysDeals from "../Components/TodaysDeals";
import TopCategories from "../Components/TopCategories";
import TrendingProducts from "../Components/TrendingProducts";
import WeeklyPopular from "../Components/WeeklyPopular";
import Fade from 'react-reveal/Fade';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Banner />
            <Fade bottom>
                <TopCategories />
            </Fade>

            <Fade bottom>
                <TodaysBestDeal />
            </Fade>

            <Fade bottom>
                <ChooseByBrand />
            </Fade>

            <Fade bottom>
                <SeventyPercentSection />
            </Fade>

            <Fade bottom>
                <WeeklyPopular />
            </Fade>

            <Fade bottom>
                <TodaysDeals />
            </Fade>

            <Fade bottom>
                <CashBackBanner />
            </Fade>

            <Fade bottom>
                <MostSelling />
            </Fade>

            <Fade bottom>
                <TrendingProducts />
            </Fade>

            <Fade bottom>
                <ServicesToHelp />
            </Fade>

            <Fade bottom>
                <Footer />
            </Fade>
        </>
    )
}