import { Flex, Box, SkeletonCircle, Skeleton } from '@chakra-ui/react';

const SkeletonSubItem = () => (
  <Flex
    bg="white"
    boxShadow="0px 4px 25px rgba(201, 201, 201, 0.5)"
    alignItems="stretch"
    padding="16px"
    pl="32px"
    my="10px"
  >
    <Box w="20%">
      <SkeletonCircle size="9" />
    </Box>
    <Flex w="80%" flexWrap="wrap" alignItems="center" justify="center">
      <Skeleton height="10px" w="80%" />
      <Skeleton height="10px" w="80%" />
    </Flex>
  </Flex>
);

export default SkeletonSubItem;
