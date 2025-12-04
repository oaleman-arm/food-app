import {HomeSlider, HomeSectionOne, HomeMostSeller} from "../components";

export const HomePage = () => {
    return (
        <>
           <HomeSlider />
           <HomeSectionOne />
           <HomeMostSeller category= "vegan" />
        </>
    );
}