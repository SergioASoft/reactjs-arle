import { useState } from 'react';

function useDependentSelects() {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  const categories = {
    work: ['Development', 'Design', 'Testing'],
    personal: ['Exercise', 'Reading', 'Hobbies'],
  };

  const subcategories = category ? categories[category] : [];

  return {
    category,
    setCategory,
    subcategories,
    subcategory,
    setSubcategory,
  };
}

export default useDependentSelects;