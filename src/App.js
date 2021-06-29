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
} from './api/airtableSubscriptions';

function App() {
  const [subs, setSubs] = useState();
  const [isLoading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState({
    name: '',
    plan: '',
    price: '',
  });

  useEffect(() => {
    const fetchSubs = async () => {
      const data = await getSubs();
      setSubs(data.records);
      setLoading(false);
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
    setLoading(true);
    const data = await createSubs({
      name: inputValue.name,
      plan: inputValue.plan,
      price: inputValue.price,
    });
    setLoading(false);
    setSubs(preSubs => {
      return [...preSubs, data];
    });

    setInputValue({
      name: '',
      plan: '',
      price: '',
    });
  };

  const handleDelete = id => async () => {
    console.log(id);
    try {
      await deleteSubs(id);
      setSubs(preSubs => preSubs.filter(sub => sub.id !== id));
    } catch (e) {
      console.log(e);
    }
  };

  const updateIsEdit = ({ id, isEdit }) => {
    // console.log('id', id);
    setSubs(prevSubs =>
      prevSubs.map(sub => {
        // console.log('subId', sub.id);
        if (sub.id !== id) {
          // console.log(id, sub.id);
          return sub;
        }
        console.log(id, sub.id);
        return { ...sub, isEdit };
      })
    );
    console.log(subs);
  };

  const handleSave = async payload => {
    const { id, tempSub } = payload;

    await updateSubs({
      id: id,
      name: tempSub.name,
      plan: tempSub.plan,
      price: tempSub.price,
    });

    setSubs(prevSubs =>
      prevSubs.map(sub => {
        if (sub.id !== id) {
          return sub;
        }

        return {
          ...sub,
          fields: tempSub,
          isEdit: false,
        };
      })
    );
  };

  const numOfRemaing = subs?.length;

  function SumDataforEach(arr) {
    let sum = 0;
    arr?.forEach(function (element) {
      const price = element.fields.price;
      if (price && !isNaN(price)) {
        sum += Number(price);
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
              isLoading={isLoading}
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
            isLoading={isLoading}
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
