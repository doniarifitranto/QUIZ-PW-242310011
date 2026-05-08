    import React from "react";

    import  Navbar  from "./components/navbar";
    import  HeroSection  from "./components/herosection";
    import  AboutSection  from "./components/aboutsection";
    import  Features  from "./components/features";
    import  Testimonials  from "./components/testimonials";
    import  Footer  from "./components/footers";

    export default function PagesSections() {
        return (
            <div>
                <Navbar/>
                <HeroSection/>
                <Features/>
                <AboutSection/>
                <Testimonials/>
                <Footer/>
            </div>
        )
    }