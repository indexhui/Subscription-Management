import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Form,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';

const AddSubscription = ({ inputValue, handleSubmit, handleChange }) => {
  return (
    <Flex
      w="45%"
      bg="white"
      ml="20px"
      borderRadius="4px"
      color="gray.700"
      padding="32px"
      direction="column"
    >
      新增訂閱項目
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>服務名稱</FormLabel>
          <Input
            placeholder="服務名稱"
            onChange={handleChange}
            value={inputValue.name}
            name="name"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>方案</FormLabel>
          <Input
            placeholder="方案"
            name="plan"
            onChange={handleChange}
            value={inputValue.plan}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>金額</FormLabel>
          <Input
            placeholder="金額"
            name="price"
            onChange={handleChange}
            value={inputValue.price}
          />
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          // isLoading={props.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Flex>
  );
};

export default AddSubscription;
