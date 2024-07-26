import React from 'react';
import * as S from './CustomInput.style';

const CustomInput = ({
  value,
  onChange,
  onBlur,
  onFocus,
  type, // text, number ...
  placeholder,
  filled, // boolean
  size, // XS , SM, BASE, LG, XL
  disabled,
  icon,
  errors,
  success,
  message,
}) => {
  return (
    <S.Container>
      <S.InputContainer
        $size={size}
        $disabled={disabled}
        $filled={filled}
        $errors={errors}
        $success={success}
      >
        <S.Input
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          $filled={filled}
        />
        {icon}
      </S.InputContainer>
      <S.MsgWrapper $errors={errors} $success={success}>
        {message}
      </S.MsgWrapper>
    </S.Container>
  );
};

export default CustomInput;
