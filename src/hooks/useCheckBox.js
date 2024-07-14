import { useState } from 'react';

const useCheckBox = (initialState) => {
  const [state, setState] = useState(initialState);

  const toggle = (key) => {
    setState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return { state, toggle };
};

export default useCheckBox;
