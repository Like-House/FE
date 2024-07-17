import { useState } from 'react';

<<<<<<< HEAD
const useCheckBox = (initialState = false) => {
  const [checked, setChecked] = useState(initialState);

  const toggle = () => {
    setChecked((prev) => !prev);
  };

  return {
    checked,
    toggle,
  };
=======
const useCheckBox = (initialState) => {
  const [state, setState] = useState(initialState);

  const toggle = (key) => {
    setState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return { state, toggle };
>>>>>>> 225d70f (feat: 체크박스 기능 구현)
};

export default useCheckBox;
