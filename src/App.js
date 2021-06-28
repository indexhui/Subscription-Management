import React, { useState, useEffect } from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';

import theme from './theme/theme.js';
import Header from './components/Header';
import Subscription from './components/Subscription';
import AddSubscription from './components/AddSubscription';

import {
  getSubs,
  createSubs,
  updateSubs,
  deleteSubs,
} from './api/subscriptions';

// const defaultSubscription = [
//   {
//     id: '01',
//     name: 'Netflix',
//     plan: 'family',
//     price: '200',
//     isPaid: false,
//     isEdit: false,
//   },
//   {
//     id: '02',
//     name: 'Spotify',
//     plan: 'personal',
//     price: '150',
//     isPaid: false,
//     isEdit: false,
//   },
//   {
//     id: '03',
//     name: 'Notion',
//     plan: 'personal',
//     price: '120',
//     isPaid: true,
//     isEdit: false,
//   },
// ];

function App() {
  const [subs, setSubs] = useState();
  const [inputValue, setInputValue] = useState({
    name: '',
    plan: '',
    price: '',
  });

  // useEffect(() => {
  // 每次component render 後被執行
  //   getSubs().then(data => {
  //     setSubs(data);
  //   });
  // }, []);

  useEffect(() => {
    const fetchSubs = async () => {
      const data = await getSubs();
      setSubs(data);
    };
    fetchSubs();
  }, []);

  const handleChange = e => {
    let key = e.target.name;
    let value = e.target.value;
    setInputValue({
      ...inputValue,
      [key]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // setSubs({
    //   ...subs,
    //   inputValue,
    // });

    const data = await createSubs({
      name: inputValue.name,
      plan: inputValue.plan,
      price: inputValue.price,
    });

    console.log(data);

    // setSubs(preSubs => {
    //   return [
    //     ...preSubs,
    //     // ...subs,
    //     inputValue,
    //   ];
    // });

    setSubs(preSubs => {
      return [...preSubs, data];
    });

    setInputValue({
      name: '',
      plan: '',
      price: '',
    });
  };

  // const handleDelete = id => () => {
  //   setSubs(preSubs => preSubs.filter(sub => sub.id !== id));
  // };

  const handleDelete = id => async () => {
    try {
      await deleteSubs(id);
      setSubs(preSubs => preSubs.filter(sub => sub.id !== id));
    } catch (e) {
      console.log(e);
    }
  };

  const updateIsEdit = ({ id, isEdit }) => {
    setSubs(prevSubs =>
      prevSubs.map(sub => {
        if (sub.id !== id) {
          return sub;
        }
        return { ...sub, isEdit };
      })
    );
  };

  // const handleSave = ({ id, tempSub }) => {
  //   setSubs(prevSubs =>
  //     prevSubs.map(sub => {
  //       if (sub.id !== id) {
  //         return sub;
  //       }
  //       return { ...sub, ...tempSub, isEdit: false };
  //     })
  //   );
  // };

  const handleSave = async payload => {
    const { id, tempSub } = payload;

    await updateSubs({
      id,
      isDone: false,
      ...tempSub,
      isEdit: false,
    });

    setSubs(prevSubs =>
      prevSubs.map(sub => {
        if (sub.id !== id) {
          return sub;
        }
        return { ...sub, ...tempSub, isEdit: false };
      })
    );
  };

  // const handleSave = ({ id, tempSub }) => {
  //   setSubs(prevSubs =>
  //     prevSubs.map(sub => {
  //       if (sub.id !== id) {
  //         return sub;
  //       }
  //       return { ...sub, ...tempSub, isEdit: false };
  //     })
  //   );
  // };

  const numOfRemaing = subs?.length;

  function SumDataforEach(arr) {
    let sum = 0;
    arr.forEach(function (element) {
      if (element.price && !isNaN(element.price)) {
        sum += Number(element.price);
      }
    });
    return sum;
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex
        // align="center"
        justify="center"
        mt="20"
      >
        <Flex w="760px">
          <Flex
            w="55%"
            direction="column"
            bg="white"
            borderRadius="4px"
            padding="32px"
            pl="24px"
          >
            <Header
              sum={subs && SumDataforEach(subs)}
              numOfRemaing={numOfRemaing}
            />
            <Subscription
              subs={subs}
              handleDelete={handleDelete}
              updateIsEdit={updateIsEdit}
              handleSave={handleSave}
            />
          </Flex>

          <AddSubscription
            inputValue={inputValue}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
