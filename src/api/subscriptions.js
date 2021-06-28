const baseURL = 'http://localhost:3001';

export const getSubs = () => {
  return fetch(`${baseURL}/subscriptions`).then(res => res.json());
};

// fetch方式

// export const createSubs = payload => {
//   const { name, plan, price } = payload;
//   fetch(`${baseURL}/subscriptions`, {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       name,
//       plan,
//       price,
//       isDone: false,
//     }),
//   });
// };

// async
export const createSubs = async payload => {
  const { name, plan, price } = payload;
  const res = await fetch(`${baseURL}/subscriptions`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      plan,
      price,
      isPaid: false,
    }),
  });
  const data = await res.json();
  return data;
};

export const deleteSubs = async id => {
  const res = await fetch(`${baseURL}/subscriptions/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return data;
};

export const updateSubs = async payload => {
  const { id, name, plan, price, isDone } = payload;
  const res = await fetch(`${baseURL}/subscriptions/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      plan,
      price,
      isDone,
    }),
  });
  const data = await res.json();
  return data;
};
