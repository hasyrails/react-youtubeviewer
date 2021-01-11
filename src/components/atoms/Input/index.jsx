import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.input`
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 4px;
  border: 2px solid #ddd;
  box-sizing: border-box;
  :focus {
    border-color: rgba(100, 100, 255, .5);
  }
  ::placeholder {
    color: #ddd;
  }
`;

// プレゼンテーショナル・コンポーネント
export const InputPresenter = ({
  className,
  onChange,
  defaultValue,
  placeholder,
}) => (
  <Root
    className={className}
    defaultValue={defaultValue}
    onChange={onChange}
    placeholder={placeholder}
  />
);

InputPresenter.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
};

InputPresenter.defaultProps = {
  className: '',
  onChange: null,
  defaultValue: '',
  placeholder: '',
};

// コンテナー・コンポーネント
export const InputContainer = ({
  className,
  onChange,
  defaultValue,
  placeholder,
  presenter,
}) => {
  const [value, setValue] = useState(defaultValue);
  return presenter({
    className,
    onChange: (e) => {
      // 入力値が変更された時のハンドラ
      const { value: newValue } = e.target;
      if (newValue === value) {
        // 値が変更されていなければ何もしない
        return;
      }
      // 新しい値をセットする
      setValue(newValue);
      // 親コンポーネントから渡されたonChangeを呼ぶ
      onChange(newValue);
    },
    defaultValue,
    placeholder,
  });
};

InputContainer.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  presenter: PropTypes.func.isRequired,
};

InputContainer.defaultProps = {
  className: '',
  onChange: null,
  defaultValue: '',
  placeholder: '',
};

export default (props) => (
  <InputContainer
    presenter={InputPresenter}
    {...props}
  />
);
