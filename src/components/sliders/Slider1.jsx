import React, { useState, useEffect } from "react";
import "./SlidingWindow.css";
import { Button } from "@chakra-ui/react";

const SlidingWindow = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [items.length, isPaused]);

    return (
        <div className="sliding-window">
            <div className="slider-container">
                <div
                    className="slider"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`
                    }}
                >
                    {items.map((item, index) => (
                        <div className="slide" key={index}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <Button style={{position:"relative",bottom:"-300px",right:"200px", borderRadius:"0px",width:"150px",backgroundColor:"white",color:"black",zIndex:"100"}} onClick={() => setIsPaused(!isPaused)}>
                {isPaused ? "Play" : "Pause"}
            </Button>
        </div>
    );
}

function Slider1() {
    const items = [
        <div style={{ display: "flex", height: "auto" }}><div style={{ width:"30%",margin:"auto"}} ><p style={{fontSize:"20px"}}>DELL PRO AI LAPTOP FAMILY</p><h1 style={{fontSize:"40px"}}>Dell Pro Laptops Work Smarter</h1><p style={{fontSize:"20px"}}>Maximise your productivity on durable and sustainably designed AI PCs</p><div style={{display:"flex",justifyContent:"left",gap:"10px",paddingTop:"20px"}}><Button>Shop Now</Button><Button>Learn More</Button></div></div><img className="imgSlider" src="https://i.dell.com/is/image/DellContent/content/dam/documents-and-videos/dv2/b2b/en/product-launch/dell-pro/fy25-dell-pro-laptop-family/site-banners/family/bb2504g0005-gl-bb-site-banner-pa14250-family-1024x768.jpg?fmt=pjpg&pscan=auto&scl=1&wid=1024&hei=768&resMode=sharp2&op_usm=1.75,0.3,2,0&size=1024,768" /></div>,
        <div style={{ display: "flex", height: "auto", backgroundColor: "#AE0000" }}><div style={{ width:"30%",margin:"auto"}} ><p style={{fontSize:"20px"}}>DELL PRO AI LAPTOP FAMILY</p><h1 style={{fontSize:"40px"}}>Dell Pro Laptops Work Smarter</h1><p style={{fontSize:"20px"}}>Maximise your productivity on durable and sustainably designed AI PCs</p><div style={{display:"flex",justifyContent:"left",gap:"10px",paddingTop:"20px"}}><Button>Shop Now</Button><Button>Learn More</Button></div></div><img className="imgSlider" src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/hero/show-sb-dell-ls-latitude-5450nt-gy-ms7421w-sl-uhp-2601-01-in-hero-mob-1024x768.jpg?fmt=pjpg&pscan=auto&scl=1&wid=1024&hei=768&resMode=sharp2&op_usm=1.75,0.3,2,0&size=1024,768"></img></div>,
        <div style={{ display: "flex", height: "auto" }}><div style={{ width:"30%",margin:"auto"}} ><p style={{fontSize:"20px"}}>DELL PRO AI LAPTOP FAMILY</p><h1 style={{fontSize:"40px"}}>Dell Pro Laptops Work Smarter</h1><p style={{fontSize:"20px"}}>Maximise your productivity on durable and sustainably designed AI PCs</p><div style={{display:"flex",justifyContent:"left",gap:"10px",paddingTop:"20px"}}><Button>Shop Now</Button><Button>Learn More</Button></div></div><img className="imgSlider" src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/043024-wecome-to-now-recipes-1023x768.jpg?fmt=pjpg&pscan=auto&scl=1&wid=1024&hei=768&resMode=sharp2&op_usm=1.75,0.3,2,0&size=1024,768"></img></div>
    ];

    return (
        <div>
            <SlidingWindow items={items} />
        </div>
    );
}

export default Slider1;
