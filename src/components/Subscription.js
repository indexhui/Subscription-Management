import { Box } from '@chakra-ui/react';

// import { FiTrash2, FiEdit3 } from 'react-icons/fi';

import SubItem from '../components/SubItem';

const Subscription = ({ subs, handleDelete, updateIsEdit, handleSave }) => {
  return (
    <Box>
      {subs.map(sub => (
        <SubItem
          sub={sub}
          key={sub.id}
          handleDelete={handleDelete}
          updateIsEdit={updateIsEdit}
          handleSave={handleSave}
        />
      ))}
    </Box>
  );
};

export default Subscription;
