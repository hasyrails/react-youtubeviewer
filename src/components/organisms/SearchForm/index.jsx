import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '~/components/atoms/Input';
import Button from '~/components/atoms/Button';

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  > *:first-child {
    flex-grow: 1;
    margin-right: 2px;
    width: auto;
  }
`;

const SearchFormPresenter = ({
  className,
  onChange,
  defaultValue,
  onSubmit,
}) => (
  <Root className={className}>
    <Input onChange={onChange} defaultValue={defaultValue} />
    <Button onClick={onSubmit} size="l">検索</Button>
  </Root>
);

SearchFormPresenter.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

SearchFormPresenter.defaultProps = {
  className: '',
  defaultValue: '',
};

const SearchFormContainer = ({
  className,
  defaultValue,
  onSubmit,
  presenter,
}) => {
  // 入力された値をstateで管理する
  const [keyword, setKeyword] = useState(defaultValue);
  return presenter({
    className,
    defaultValue,
    // 入力値が変更されたらstateのキーワードが更新されるようにする
    onChange: setKeyword,
    // 検索ボタンが押された時のキーワードを引数に渡してonSubmitを呼ぶ
    onSubmit: () => onSubmit(keyword),
  });
};

SearchFormContainer.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  presenter: PropTypes.func.isRequired,
};

SearchFormContainer.defaultProps = {
  className: '',
  defaultValue: '',
};

export default (props) => (
  <SearchFormContainer
    presenter={SearchFormPresenter}
    {...props}
  />
);
