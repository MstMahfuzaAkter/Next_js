

import ShopGetMore from "../components/ShopGetMore";
import Banner from "../components/Banner";
import Category from "../components/Category";

import StatsSection from "../components/StatsSection";
import ExtraSection from "../components/ExtraSection";
import RatingSection from "../components/RatingSection";
import CardSection from "../components/CardSection";    

export default function Home() {
  
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Banner Section */}
      <Banner />
       <CardSection/>
       {/* Category Section */}
      <div className="mt-10 mb-0">
        <Category />
      </div>
       <ShopGetMore />
       <StatsSection />
       <ExtraSection />
       <RatingSection />
    
    </div>
  );
}

