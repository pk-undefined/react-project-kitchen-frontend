import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Fieldset from './Fieldset';
import agent from '../../agent';
import {
  ADD_TAG,
  EDITOR_PAGE_LOADED,
  REMOVE_TAG,
  ARTICLE_SUBMITTED,
  EDITOR_PAGE_UNLOADED,
  UPDATE_FIELD_EDITOR,
} from '../../constants/actionTypes';
import ButtonComponent from './Button';

const mapStateToProps = (state) => ({
  ...state.editor,
});

const mapDispatchToProps = (dispatch) => ({
  onAddTag: () => dispatch({ type: ADD_TAG }),
  onLoad: (payload) => dispatch({ type: EDITOR_PAGE_LOADED, payload }),
  onRemoveTag: (tag) => dispatch({ type: REMOVE_TAG, tag }),
  onSubmit: (payload) => dispatch({ type: ARTICLE_SUBMITTED, payload }),
  // eslint-disable-next-line no-unused-vars
  onUnload: (payload) => dispatch({ type: EDITOR_PAGE_UNLOADED }),
  onUpdateField: (key, value) => dispatch({ type: UPDATE_FIELD_EDITOR, key, value }),
});

const NewPostForm = (props) => {
  const {
    body, description, title, tagInput, onUpdateField, tagList,
    onAddTag, articleSlug, onLoad, onUnload, onSubmit, image,
  } = props;

  const updateFieldEvent = (key) => (ev) => onUpdateField(key, ev.target.value);
  const changeTitle = updateFieldEvent('title');
  const changeDescription = updateFieldEvent('description');
  const changeBody = updateFieldEvent('body');
  const changeTagInput = updateFieldEvent('tagInput');
  const changeImage = updateFieldEvent('image');

  const watchForEnter = (ev) => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      onAddTag();
    }
  };

  const submitForm = (ev) => {
    ev.preventDefault();
    const article = {
      title,
      description,
      body,
      tagList,
      image,
    };

    const slug = { slug: articleSlug };
    const promise = articleSlug
      ? agent.Articles.update(Object.assign(article, slug))
      : agent.Articles.create(article);

    onSubmit(promise);
  };

  // eslint-disable-next-line consistent-return,react/sort-comp
  useEffect(() => {
    if (props.match.params.slug) {
      onUnload();
      return onLoad(agent.Articles.get(props.match.params.slug));
    }
    onLoad(null);
  }, [props.match.params.slug]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (props.match.params.slug) {
      return onLoad(agent.Articles.get(props.match.params.slug));
    }
    onLoad(null);
    return () => onUnload();
  }, []);

  return (
    <Container>
      <StyledPostForm onSubmit={submitForm}>
        <Title>Новая запись</Title>
        <fieldset>
          <Fieldset
            type="text"
            fieldName="Заголовок"
            fieldValue={title}
            placeholder="Название статьи"
            handleInputChange={changeTitle}
            errors={props.errors}
          />
          <Fieldset
            type="text"
            fieldName="Описание"
            fieldValue={description}
            placeholder="О чем статья"
            handleInputChange={changeDescription}
            errors={props.errors}
          />
          <Fieldset
            includesLoader
            type="url"
            fieldName="Изображение"
            fieldValue={image}
            placeholder="Изображение(опционально)"
            handleInputChange={changeImage}
            errors={props.errors}
          />
          <Fieldset
            isTextarea
            fieldName="Содержание"
            placeholder="Текст статьи"
            fieldValue={body}
            handleInputChange={changeBody}
            errors={props.errors}
          />
          <Fieldset
            type="text"
            fieldName="Тэги"
            fieldValue={tagInput}
            placeholder="Тэги (через запятую)"
            handleInputChange={changeTagInput}
            onKeyUp={watchForEnter}
            errors={props.errors}
          />
        </fieldset>
        <ButtonComponent>Опубликовать</ButtonComponent>
      </StyledPostForm>
    </Container>
  );
};
const Container = styled.div`
  width: 1108px;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const StyledPostForm = styled.form`
  width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-top: 32px;
`;

const Title = styled.h2`
  width: 100%;
  height: 40px;
  margin: 16px 0px;
  text-align: center;
  font-size: 24px;
  line-height: 40px;
  color: white;
  font-family: "Press Start 2P";
`;

export default connect(mapStateToProps, mapDispatchToProps)(NewPostForm);
