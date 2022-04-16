import React from 'react';
import './FilteredParam.css';
import { ReactComponent as RemoveIcon } from '../images/icon-remove.svg';

const FilteredParam = ({
  filteredCategories,
  clearAllHandler,
  clearFilterHandler,
}) => {
  return (
    <div className='filtered-box'>
      <div>
        <div className='category-container-head'>
          {filteredCategories.map((ctg) => (
            <div>
              <span className='category no-hover'>{ctg}</span>
              <RemoveIcon
                className='remove-icon'
                onClick={() => clearFilterHandler(ctg)}
              />
            </div>
          ))}
        </div>
        <p className='clear' onClick={clearAllHandler}>
          Clear
        </p>
      </div>
    </div>
  );
};

export default FilteredParam;
