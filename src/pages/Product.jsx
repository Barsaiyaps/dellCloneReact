import { useEffect, useState } from "react"
import "./product.css"
import { Box, Text } from "@chakra-ui/react";

function Product(){
const [products, setProducts] = useState([]);

useEffect(() => {
    fetch("")
    .then(res => res.json())
    .then(json => setProducts(json))
}, []);




    return(
    <>
    {console.log(products)}
<div className="product-container">
    {products.map(product => (
        <div className="product" key={product.id}>
            <Text textStyle="xl" style={{fontWeight:"bold"}}>{product.title}</Text>
            <img src={product.image} alt={product.title} />
            <Text textStyle="l" fontWeight={"bold"}>MRP : {product.price}</Text>
            <Text textStyle="l">{product.description}</Text>
            <Box bg={"black"} textAlign={"center"} marginBottom={"10px"} color={"white"} p={"10px"} borderRadius={"10px"} cursor={"pointer"}>Add To Cart</Box>
        </div>
    ))}
    </div>
    </>
    )
}

export default Product