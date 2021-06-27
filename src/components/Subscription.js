import { Box, Flex, Checkbox, Icon } from '@chakra-ui/react';

import { FiTrash2, FiEdit3 } from 'react-icons/fi';

const Subscription = ({ subs, handleDelete }) => {
  return (
    <Box>
      {subs.map(sub => (
        <Flex
          key={sub.id}
          bg="white"
          boxShadow="0px 4px 25px rgba(201, 201, 201, 0.5)"
          padding="12px 32px"
          borderRadius="6px"
          color="gray.800"
          justify="space-between"
          alignItems="center"
          m="8px 0"
          role="group"
          position="relative"
        >
          <Flex align="center">
            <Checkbox isChecked={sub.isPaid} colorScheme="cyan">
              <Box
                bg="gray.900"
                color="white"
                w="40px"
                h="40px"
                lineHeight="40px"
                textAlign="center"
                borderRadius="2px"
                mr="2"
              >
                {sub.name && sub.name.slice(0, 1).toUpperCase()}
              </Box>
            </Checkbox>
            <Box>
              <Box>{sub.name} </Box>
              <Box>{sub.plan} </Box>
            </Box>
          </Flex>
          <Box>
            <Box>{sub.price} </Box>
            <Box>/month</Box>
          </Box>
          <Flex
            display="none"
            position="absolute"
            right="0"
            top="0"
            bg="white"
            h="100%"
            w="28px"
            borderRadius="6px"
            color="gray.500"
            boxShadow="0px 4px 25px rgba(201, 201, 201, 0.5)"
            _groupHover={{ display: 'flex' }}
            align="center"
            direction="column"
            justify="center"
          >
            <Box py="2px" mt="5px">
              <Icon
                as={FiTrash2}
                _hover={{ color: 'gray.800' }}
                onClick={handleDelete(sub.id)}
              />
            </Box>
            <Box py="2px" mb="5px">
              <Icon as={FiEdit3} _hover={{ color: 'gray.800' }} py="1px" />
            </Box>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};

export default Subscription;
