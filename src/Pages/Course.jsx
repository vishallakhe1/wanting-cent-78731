import React, { useEffect, useState } from "react";
import { Grid, Box, Image, Heading, Text, Skeleton } from "@chakra-ui/react";
import Loading from "../../my-app/src/Components/Loading";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://mock-api-courses.onrender.com/users"
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false); 
      } catch (error) {
        console.log(error);
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box className="main-container" w="80%" m="auto">
      <Heading as="h2" mb={4} mt="40px">
        All Courses
      </Heading>
      <Grid templateColumns="repeat(1, 1fr)" gap={4}>
        {/* Check if data is still loading */}
        {loading ? (
          // Display skeleton loading effect
          <Loading/>
        ) : (
          // Render the data
          products.map((product) => (
            <Box key={product.id} className="products-card">
              <Image src={product.image} alt="Product" className="image" />
              <Box>
                <Heading as="h1" fontSize="lg" mt={2} mb={1}>
                  <strong>Course:</strong> {product.course}
                </Heading>
                <Text fontSize="lg">
                  <strong>Description:</strong> {product.description}
                </Text>
                <Text fontSize="md">
                  <strong fontWeight="bold">Duration:</strong> {product.duration}
                </Text>
                <Text fontSize="md">
                  <strong>Price:</strong> {product.price}
                </Text>
              </Box>
            </Box>
          ))
        )}
      </Grid>
    </Box>
  );
}
