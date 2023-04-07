import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProductObj } from '../../redux/slices/cart';

import AddCountBtn from '../AddCountBtn';
import { getRandomString } from '../../utils/getRandomString';
import { getActiveClassName } from '../../utils/getActiveClassName';
import { createPriceDependsOnSize } from '../../utils/createPrice';
import { RootState } from '../../redux/store';
import { IPizzaObj, IPizzaProductObj } from '../../helpres/pizzaTypes';

function PizzaCard({id, title, imageUrl, price, sizes, types}: IPizzaObj) {
  const defaultSrc = 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg';
  const typesLiteral = ['тонкое', 'традиционное'];

  const dispatch = useDispatch();
  const inCartItemsCount = useSelector((state: RootState) => state.cart.products.filter((obj: IPizzaProductObj) => obj.id === id).length);

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [formattedPrice, setFormattedPrice] = useState(createPriceDependsOnSize({minPrice: price, size: sizes[activeSize]}));

  function onClick(setFunc: typeof setActiveType | typeof setActiveSize, value: number, size=false) {
    setFunc(value);
    size === true && setFormattedPrice(
      createPriceDependsOnSize({minPrice: price, size: sizes[value]})
    );
  }


  function onClickAdd() {
    const item = {
      id, title, imageUrl, 
      price: formattedPrice,
      type: typesLiteral[activeType],
      size: sizes[activeSize],
    }

    dispatch(addProductObj(item));
  }

  return (
    <div className='pizza-block'>
      <img
        className='pizza-block__image'
        src={imageUrl ? imageUrl : defaultSrc}
        alt='Pizza'
      />
      <h4 className='pizza-block__title'>{title}</h4>
      <div className='pizza-block__selector'>
        <ul>
        {
          types && types.map((type, index) => {
            return <li className={getActiveClassName(index, activeType)} key={getRandomString()} onClick={
              () => onClick.call(null, setActiveType, index)
            }>{typesLiteral[type]}</li>
          })
        }
        </ul>
        <ul>
        {
          sizes && sizes.map((size, index) => {
            return <li className={getActiveClassName(index, activeSize)} key={getRandomString()} onClick={
              () => onClick.call(null, setActiveSize, index, true)
            }>{`${size} см.`}</li>
          })
        }
        </ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>от {formattedPrice} ₽</div>
        <AddCountBtn initialCount={inCartItemsCount} addFunc={onClickAdd} />
      </div>
    </div>
  );
}

export default PizzaCard;