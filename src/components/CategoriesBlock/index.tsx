import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from "../../redux/slices/filter";

import { categoriesList } from '../../helpres/getCategoriesList';
import { getRandomString } from '../../utils/getRandomString';
import { getActiveClassName } from '../../utils/getActiveClassName';
import { RootState } from '../../redux/store';

function CategoriesBlock() {
  const activeIndex = useSelector((state: RootState) => state.filter.categoryId);
  const dispatch = useDispatch();

  function chooseCategory(index: number) {
    dispatch(setCategoryId(index));
  }

  return (
    <div className="categories">
      <ul>
        {categoriesList.map((category, index) => 
        <li 
        className={getActiveClassName(index, activeIndex)} 
        key={getRandomString()}
        onClick={chooseCategory.bind(null, index)}>
          {category}
        </li>)}
      </ul>
    </div>
  );
}

export default CategoriesBlock;