import React, { useState } from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';

import theme from './theme/theme.js';
import Header from './components/Header';
import Subscription from './components/Subscription';
import AddSubscription from './components/AddSubscription';

const defaultSubscription = [
  {
    id: '01',
    name: 'Netflix',
    plan: 'family',
    price: '200',
    isPaid: false,
    isEdit: false,
  },
  {
    id: '02',
    name: 'Spotify',
    plan: 'personal',
    price: '150',
    isPaid: false,
    isEdit: false,
  },
  {
    id: '03',
    name: 'Notion',
    plan: 'personal',
    price: '120',
    isPaid: true,
    isEdit: false,
  },
];

function App() {
  const [subs, setSubs] = useState(defaultSubscription);
  const [inputValue, setInputValue] = useState({
    name: '',
    plan: '',
    price: '',
  });

  const handleChange = e => {
    let key = e.target.name;
    let value = e.target.value;
    setInputValue({
      ...inputValue,
      [key]: value,
    });
  };
  // inputValue = ['name', 'plan', 'price'];

  const handleSubmit = e => {
    // setInputValue(e.target.value);
    e.preventDefault();
    console.log(inputValue);
    // setSubs({
    //   ...subs,
    //   inputValue,
    // });
    setSubs(preSubs => {
      return [
        ...preSubs,
        // ...subs,
        inputValue,
      ];
    });

    setInputValue({
      name: '',
      plan: '',
      price: '',
    });
  };

  const handleDelete = id => () => {
    setSubs(preSubs => preSubs.filter(sub => sub.id !== id));
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

  const handleSave = ({ id, tempSub }) => {
    setSubs(prevSubs =>
      prevSubs.map(sub => {
        if (sub.id !== id) {
          return sub;
        }
        return { ...sub, ...tempSub, isEdit: false };
      })
    );
  };

  const numOfRemaing = subs.length;

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
            <Header sum={SumDataforEach(subs)} numOfRemaing={numOfRemaing} />
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
