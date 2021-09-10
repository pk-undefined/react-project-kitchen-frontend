import React from 'react';
import { List } from './styled-list-errors';

const ListErrors = ({ errors }) => {
  if (errors) {
    return (
      <List>
        {
          Object.keys(errors).map((key, index) => (
            <li key={key + index}>
              {key}
              {errors[key].toString()}
            </li>
          ))
        }
      </List>
    );
  }
  return null;
};

export default ListErrors;
