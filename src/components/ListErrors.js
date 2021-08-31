import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  color: rgba(255, 0, 0, 1);
  width: 100%;
  padding: 0;
  margin: 4px 0 0 0;
  li{
    list-style-type: none;
    font-size: 16px;
    height: 24px;
    line-height: 24px;
    font-family: 'Consolas';
  }
`;

const ListErrors = props => {
  const errors = props.errors;
  if (errors) {
    return (
      <List>
        {
          Object.keys(errors).map(key => {
            return (
              <li key={key}>
                {key} {errors[key]}
              </li>
            );
          })
        }
      </List>
    );
  } else {
    return null;
  }
}

export default ListErrors;
