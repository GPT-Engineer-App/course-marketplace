import { Box, Button, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

// Mock data for the courses
const courses = [
  {
    id: 1,
    title: "Introduction to Programming with Python",
    description: "Learn the basics of programming with Python. No prior experience required.",
    price: "$49.99",
    imageSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxweXRob24lMjBjb3Vyc2V8ZW58MHx8fHwxNzA5OTM2NTE3fDA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 2,
    title: "Web Development: From Zero to Hero",
    description: "Become a full-stack web developer. Master HTML, CSS, JavaScript, and more!",
    price: "$79.99",
    imageSrc: 'https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvdXJzZXxlbnwwfHx8fDE3MDk5MzY1MTd8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 3,
    title: "Data Science with R",
    description: "Dive into the world of data science and learn how to analyze data with R.",
    price: "$59.99",
    imageSrc: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGNvdXJzZXxlbnwwfHx8fDE3MDk5MzY1MTh8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
];

const CourseCard = ({ title, description, price, imageSrc }) => {
  return (
    <VStack p={4} boxShadow="md" borderRadius="lg" align="start" bg="white" spacing={4}>
      <Image borderRadius="md" src={imageSrc} alt={title} />
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
      <Flex justify="space-between" align="center" w="full">
        <Text fontWeight="bold" colorScheme="teal">
          {price}
        </Text>
        <Button rightIcon={<FaShoppingCart />} colorScheme="teal">
          Enroll Now
        </Button>
      </Flex>
    </VStack>
  );
};

const Index = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={6}>
        Featured Courses
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
