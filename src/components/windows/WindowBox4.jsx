import "./windowBox4.css";
import {Text} from "@chakra-ui/react"
function WindowBox4(){

    return (
        <>
        <div className="main" >
         <Text textStyle="xl" p={"10px"} paddingLeft={"5%"}>Latest from Dell Technologies</Text>
         <Text textStyle="5xl" p={"10px" } paddingBottom={"50px"} paddingLeft={"5%"}>What's Happening</Text>   
         
         <div className="container">

         <div className="card">
            <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/011625-dtw25-early-reg-480x360.jpg?wid=480&amp;hei=360"></img>
            <Text textStyle="xl" p={"10px"}>Meet Us in Vegas for the Biggest Tech Event of the Year, May 19-22.</Text>
            <Text textStyle="l" p={"10px"}>Register Today {`-->`}</Text>
           </div>

           <div className="card">
              <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/nvidia-blackwell-uhp-480x360.jpg?wid=480&amp;hei=360"></img>
                <Text textStyle="xl" p={"10px"}>Introducing Dell Pro Max with GB10 and Dell Pro Max with GB300.</Text>
                <Text textStyle="l" p={"10px"}>Register Today {`-->`}</Text>
           </div>

           <div className="card">
              <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/121224-events-480x360.jpg?wid=480&amp;hei=360"></img>
                <Text textStyle="xl" p={"10px"}>Dell Technologies Events</Text>
                <Text textStyle="l" p={"10px"} >Register Today {`-->`}</Text>
           </div>

           <div className="card">
              <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/hp-banner-esg-480x360-jpg.jpg?wid=480&amp;hei=360"></img>
                <Text textStyle="xl" p={"10px"}>Our Purpose in Action</Text>
                <Text textStyle="l" p={"10px"}>Register Today {`-->`}</Text>
           </div>
             
           
             
        </div>
        </div>
        </>
    )
}

export default WindowBox4