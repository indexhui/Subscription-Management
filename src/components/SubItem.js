import { Box, Flex, Checkbox, Icon, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { FiTrash2, FiEdit3 } from 'react-icons/fi';

const SubItem = ({ sub, handleDelete, updateIsEdit, handleSave }) => {
  const [tempSub, setTempSub] = useState(sub);
  const handleChange = e => {
    let key = e.target.name;
    let value = e.target.value;
    setTempSub({
      ...tempSub,
      [key]: value,
    });
  };

  const handleKeyDown = event => {
    // console.log({
    //   keyCode: event.keyCode,
    //   key: event.key,
    // });

    // keyCode 13 一定是 enter，但 enter 的 keyCode 不一定是 13
    if (event.keyCode === 13 && tempSub.length !== 0) {
      handleSave({
        id: sub.id,
        tempSub,
      });
    }

    // keyCode 27 是 Escape
    if (event.keyCode === 27) {
      // 取消儲存
      updateIsEdit({
        id: sub.id,
        isEdit: false,
      });

      // 把 tempTodo 改成修改前的內容
      setTempSub(sub);
    }
  };

  console.log('tempSub', tempSub);

  return (
    <Flex
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
          <Box onDoubleClick={() => updateIsEdit({ id: sub.id, isEdit: true })}>
            {!sub.isEdit && sub.name}
            {sub.isEdit && (
              <Input
                name="name"
                value={tempSub.name}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="edit"
                size="s"
                border="0px"
                bg="gray.100"
                w="80%"
              />
            )}
          </Box>
          <Box onDoubleClick={() => updateIsEdit({ id: sub.id, isEdit: true })}>
            {!sub.isEdit && sub.plan}
            {sub.isEdit && (
              <Input
                value={tempSub.plan}
                name="plan"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="edit"
                size="s"
                border="0px"
                bg="gray.100"
                w="80%"
              />
            )}
          </Box>
        </Box>
      </Flex>
      <Box>
        <Box>
          {!sub.isEdit && sub.price}
          {sub.isEdit && (
            <Input
              value={tempSub.price}
              name="price"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="edit"
              size="s"
              border="0px"
              bg="gray.100"
              w="80%"
            />
          )}
        </Box>
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
        <Box
          py="2px"
          mb="5px"
          onClick={() => updateIsEdit({ id: sub.id, isEdit: true })}
        >
          <Icon as={FiEdit3} _hover={{ color: 'gray.800' }} py="1px" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default SubItem;
