import { Box, Flex, Icon, Input, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { FiTrash2, FiEdit3 } from 'react-icons/fi';
import youtube from '../assets/images/youtube.svg';
import adobe from '../assets/images/adobe.svg';
import apple from '../assets/images/apple.svg';
import dropbox from '../assets/images/dropbox.svg';
import figma from '../assets/images/figma.svg';
import foodpanda from '../assets/images/foodpanda.svg';
import google from '../assets/images/google.svg';
import medium from '../assets/images/medium.svg';
import netflix from '../assets/images/netflix.svg';
import notion from '../assets/images/notion.svg';
import patreon from '../assets/images/patreon.svg';
import slack from '../assets/images/slack.svg';
import spotify from '../assets/images/spotify.svg';
import ubereat from '../assets/images/ubereat.svg';
import zeplin from '../assets/images/zeplin.svg';

const brandArray = [
  {
    brand: 'youtube',
    src: youtube,
  },
  {
    brand: 'adobe',
    src: adobe,
  },
  {
    brand: 'apple',
    src: apple,
  },
  {
    brand: 'dropbox',
    src: dropbox,
  },
  {
    brand: 'figma',
    src: figma,
  },
  {
    brand: 'foodpanda',
    src: foodpanda,
  },
  {
    brand: 'google',
    src: google,
  },
  {
    brand: 'medium',
    src: medium,
  },
  {
    brand: 'netflix',
    src: netflix,
  },
  {
    brand: 'notion',
    src: notion,
  },
  {
    brand: 'patreon',
    src: patreon,
  },
  {
    brand: 'slack',
    src: slack,
  },
  {
    brand: 'spotify',
    src: spotify,
  },
  {
    brand: 'zeplin',
    src: zeplin,
  },
  {
    brand: 'ubereat',
    src: ubereat,
  },
];

const SubItem = ({
  sub,
  id,
  isEdit,
  handleDelete,
  updateIsEdit,
  handleSave,
}) => {
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
        id: id,
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

  function brandMatch(brand) {
    if (brand) {
      for (const iterate of brandArray) {
        const brandName = iterate.brand;
        const parse = brand.toLowerCase().indexOf(brandName);
        if (parse > -1) {
          console.log(iterate.src);
          return iterate.src;
        }
      }
    }
  }

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
        {/* <Checkbox colorScheme="cyan"> */}
        <Flex
          bg="gray.900"
          color="white"
          w="40px"
          h="40px"
          lineHeight="40px"
          textAlign="center"
          justify="center"
          align="center"
          borderRadius="5px"
          mr="2"
        >
          {/* {sub.name && sub.name.slice(0, 1).toUpperCase()}  */}
          {brandMatch(sub.name) ? (
            <Image
              boxSize="28px"
              src={brandMatch(sub.name)}
              alt="Segun Adebayo"
              margin="0 auto"
            />
          ) : (
            sub.name.slice(0, 1).toUpperCase()
          )}

          {/* <Image
            boxSize="28px"
            src={youtube}
            alt="Segun Adebayo"
            margin="0 auto"
          /> */}
        </Flex>
        {/* </Checkbox> */}
        <Box>
          <Box onDoubleClick={() => updateIsEdit({ id: id, isEdit: true })}>
            {!isEdit && sub.name}
            {isEdit && (
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
          <Box onDoubleClick={() => updateIsEdit({ id: id, isEdit: true })}>
            {!isEdit && sub.plan}
            {isEdit && (
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
          {!isEdit && sub.price}
          {isEdit && (
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
            onClick={handleDelete(id)}
          />
        </Box>
        <Box
          py="2px"
          mb="5px"
          onClick={() => updateIsEdit({ id: id, isEdit: true })}
        >
          <Icon as={FiEdit3} _hover={{ color: 'gray.800' }} py="1px" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default SubItem;
