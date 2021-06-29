import { Box } from '@chakra-ui/react';

import SubItem from '../components/SubItem';

const Subscription = ({ subs, handleDelete, updateIsEdit, handleSave }) => {
  return (
    <Box>
      {subs &&
        subs.map(sub => (
          <SubItem
            sub={sub.fields}
            isEdit={sub.isEdit}
            id={sub.id}
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
