import { useState } from 'react';
import s from './Categories.module.css';

function Categories({ items, onCategoryClick }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const onSelectItem = index => {
    setActiveCategory(index);
    onCategoryClick(index);
  };

  return (
    <div>
      <ul className={s.categories}>
        <li
          className={
            activeCategory === null
              ? `${s.activeCategory} ${s.categoryItem}`
              : `${s.categoryItem}`
          }
          onClick={() => onSelectItem(null)}
        >
          All
        </li>
        {items &&
          items.map((category, index) => (
            <li
              className={
                activeCategory === index
                  ? `${s.activeCategory} ${s.categoryItem}`
                  : `${s.categoryItem}`
              }
              key={category}
              onClick={() => onSelectItem(index)}
            >
              {category}
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Categories;
