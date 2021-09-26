import React from 'react';
import { connect } from 'react-redux';
import agent from '../../../agent';
import { DELETE_COMMENT } from '../../../constants/actionTypes';
import icons from '../icons/icons';
import { StyledDeleteButton } from './styled-delete-button';

const mapDispatchToProps = (dispatch) => ({
  onClick: (payload, commentId) => dispatch({ type: DELETE_COMMENT, payload, commentId }),
});

const DeleteButton = (props) => {
  const { DeleteIcon } = icons;
  const del = () => {
    const payload = agent.Comments.delete(props.slug, props.commentId);
    props.onClick(payload, props.commentId);
  };

  if (props.show) {
    return (
      <StyledDeleteButton onClick={del}>
        <DeleteIcon />
      </StyledDeleteButton>
    );
  }
  return null;
};

export default connect(() => ({}), mapDispatchToProps)(DeleteButton);
