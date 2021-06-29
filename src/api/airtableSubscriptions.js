const apiKey = 'api_key=keyNCBsmapwe9NAJ7';
const airtableURL =
  'https://api.airtable.com/v0/appAPGGGa6GPLdEdJ/subscription';
const baseURL =
  'https://api.airtable.com/v0/appAPGGGa6GPLdEdJ/subscription?api_key=keyNCBsmapwe9NAJ7';

export const getSubs = () => {
  return fetch(`${baseURL}`).then(res => res.json());
};

// async
export const createSubs = async payload => {
  const { name, plan, price } = payload;
  const res = await fetch(`${baseURL}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: {
        plan: plan,
        price: price,
        name: name,
      },
    }),
  });
  const data = await res.json();
  return data;
};

export const deleteSubs = async id => {
  const res = await fetch(`${baseURL}&records[]=${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return data;
};

export const updateSubs = async payload => {
  const { id, name, plan, price } = payload;
  const res = await fetch(`${airtableURL}/${id}?${apiKey}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: {
        plan: plan,
        price: price,
        name: name,
      },
    }),
  });
  const data = await res.json();
  return data;
};
