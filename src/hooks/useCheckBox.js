import { useState } from 'react';

const useCheckBox = (initialState = false) => {
  const [checked, setChecked] = useState(initialState);

  const toggle = () => {
    setChecked((prev) => !prev);
  };

  return {
    checked,
    toggle,
  };
};

export default useCheckBox;
