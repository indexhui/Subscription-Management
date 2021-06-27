import { Box, Flex } from '@chakra-ui/react';

const Header = props => {
  const { numOfRemaing, sum } = props;

  return (
    <Box>
      <Box>總共有 {numOfRemaing} 筆訂閱服務</Box>
      <Box>每個月您需花費 {sum}</Box>
      <Box>您已付出</Box>
      <Box>本月尚須付</Box>
    </Box>
  );
};

export default Header;
