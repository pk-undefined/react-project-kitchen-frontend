import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Fieldset from '../UI/fieldset/fieldset';
import ButtonComponent from '../UI/button/button';
import {
  Container, StyledForm, Title,
} from './common/styled-form';
import { requestArticleCreate, requestArticleUpdate, requestArticleGet } from '../../store/articleSlice';

const NewPostForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const currentArticle = history.location.pathname.slice(8);

  const article = useSelector((state) => state.article.article.article);

  const [state, setState] = useState({
    title: '',
    description: '',
    body: '',
    tagList: '',
    image: '',
  });

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  useEffect(() => {
    if (currentArticle) {
      setState({
        ...state,
        ...article,
      });
    }
  }, [article]);

  useEffect(() => {
    if (article && isSubmitSuccess) { history.push(`/article/${article.slug}`); }
  }, [isSubmitSuccess, article]);

  const onChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(requestArticleGet(currentArticle));
  }, [dispatch]);

  // const watchForEnter = (ev) => {
  //   if (ev.keyCode === 13) {
  //     ev.preventDefault();
  //     onAddTag();
  //   }
  // };

  const submitForm = (ev) => {
    ev.preventDefault();
    if (currentArticle) {
      let newTagList = '';
      if (typeof state.tagList === 'string') {
        newTagList = state.tagList.toLowerCase().replace(/\s+/g, '').split(',');
      } else {
        newTagList = state.tagList.join(',').toLowerCase().replace(/\s+/g, '').split(',');
      }
      dispatch(requestArticleUpdate({ ...state, tagList: newTagList }));
    } else {
      const newTagList = state.tagList.toLowerCase().replace(/\s+/g, '').split(',');
      dispatch(requestArticleCreate({ ...state, tagList: newTagList }));
    }
    setIsSubmitSuccess(true);
  };

  return (
    <Container>
      <StyledForm onSubmit={submitForm}>
        <Title>{t('NewEntry.title')}</Title>
        <fieldset>
          <Fieldset
            type="text"
            fieldName="title"
            fieldValue={state.title}
            placeholder={t('NewEntry.titleOfTheArticle')}
            handleInputChange={onChange}
            // errors={props.errors}
          />
          <Fieldset
            type="text"
            fieldName="description"
            fieldValue={state.description}
            placeholder={t('NewEntry.whatIsTheArticleAbout')}
            handleInputChange={onChange}
            // errors={props.errors}
          />
          <Fieldset
            includesLoader
            type="url"
            fieldName="image"
            fieldValue={state.image}
            placeholder={t('NewEntry.imageOptional')}
            handleInputChange={onChange}
            // errors={props.errors}
          />
          <Fieldset
            isTextarea
            fieldName="body"
            placeholder={t('NewEntry.content')}
            fieldValue={state.body}
            handleInputChange={onChange}
            // errors={props.errors}
          />
          <Fieldset
            type="text"
            fieldName="tagList"
            fieldValue={state.tagList}
            placeholder={t('NewEntry.tagsSeparatedByCommas')}
            handleInputChange={onChange}
            // onKeyUp={watchForEnter}
            // errors={props.errors}
          />
        </fieldset>
        <ButtonComponent>{currentArticle ? t('save') : t('NewEntry.toPublish')}</ButtonComponent>
      </StyledForm>
    </Container>
  );
};

export default NewPostForm;
