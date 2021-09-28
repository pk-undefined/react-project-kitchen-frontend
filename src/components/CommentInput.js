import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestArticleCreateComment } from '../store/articleSlice';

const CommentInput = (props) => {
  const dispatch = useDispatch();
  const [body, setBody] = useState('');

  const setBodyChange = (ev) => {
    setBody(ev.target.value);
  };

  const createComment = (ev) => {
    ev.preventDefault();
    setBody('');
    dispatch(requestArticleCreateComment({ slug: props.slug, comment: body }));
  };

  return (
    <form className="card comment-form" onSubmit={createComment}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          value={body}
          onChange={setBodyChange}
          rows="3"
        />
      </div>
      <div className="card-footer">
        <img
          src={props.currentUser.image}
          className="comment-author-img"
          alt={props.currentUser.username}
        />
        <button className="btn btn-sm btn-primary" type="submit">
          Отправить
        </button>
      </div>
    </form>
  );
};

export default CommentInput;
