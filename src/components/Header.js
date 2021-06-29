import { Box, Spinner } from '@chakra-ui/react';

const Header = props => {
  const { isLoading, numOfRemaing, sum } = props;

  return (
    <Box>
      {isLoading && (
        <Box>
          <Spinner />
          讀取資料中
        </Box>
      )}
      {!isLoading && (
        <Box>
          <Box>總共有 {numOfRemaing} 筆訂閱服務</Box>
          <Box>每個月您需花費 {sum}</Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;
