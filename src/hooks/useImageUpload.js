import { useState } from 'react';

const useImageUpload = (initialImage = '') => {
  const [image, setImage] = useState(initialImage);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage('');
    }
  };

  const resetImage = () => {
    setImage(initialImage);
  };

  return [image, handleImageChange, resetImage];
};

export default useImageUpload;
