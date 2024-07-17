import { useState } from 'react';

<<<<<<< HEAD
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
=======
const useCheckBox = (initialState = false) => {
  const [checked, setChecked] = useState(initialState);
>>>>>>> d334821 (feat: 사이즈 조절 및 export 수정)

  const toggle = () => {
    setChecked((prev) => !prev);
  };

<<<<<<< HEAD
  return { state, toggle };
>>>>>>> 225d70f (feat: 체크박스 기능 구현)
=======
  return {
    checked,
    toggle,
  };
>>>>>>> d334821 (feat: 사이즈 조절 및 export 수정)
};

export default useCheckBox;
