import { Button } from "@chakra-ui/react";
function FooterBox() {
    return (
        <>
        <div style={{ display: "flex", height: "auto",backgroundColor: "#004687" }}>
            <div style={{ width: "30%", margin: "auto" }} >
                <p style={{ fontSize: "20px" }}>DELL REWARDS</p>
                <h1 style={{ fontSize: "40px" }}>Buy More. Get More.</h1>
                <p style={{ fontSize: "20px" }}>Get rewarded on your purchase for your next buy at Dell.co.in. *Terms and conditions apply.</p>
                <Button>Shop Now</Button>
            </div>
            <img className="imgSlider" src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/programs-and-loyalty/pan-dell-woman-on-train-1200x675.jpg?fmt=png-alpha&wid=1200&hei=675" />
        </div>
        </>
    );
}


export default FooterBox