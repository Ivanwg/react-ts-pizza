import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import { setFilters } from '../../redux/slices/filter';
import { RootState } from '../../redux/store';
import PizzaCard from '../PizzaCard';
import Skeleton from '../PizzaCard/Skeleton';
import { getRandomString } from '../../utils/getRandomString';
import { getPizzasArr } from '../../utils/getPizzasArr';
import { IPizzaObj } from '../../helpres/pizzaTypes';

function PizzasSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {categoryId, sortId} = useSelector((state: RootState) => state.filter);

  const [pizzasList, setPizzasList] = useState<Array<IPizzaObj>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isQueryNeed = useRef(false);
  const isMounted = useRef(false);

  useEffect(() => {
    const query = window.location.search;
    if (query) {
      const params = qs.parse(query.substring(1));
      dispatch(setFilters({...params}));
      isQueryNeed.current = true;
    }
  }, []);

  
  useEffect(() => {
    setIsLoading(true);
    isQueryNeed.current === false && getPizzasArr({categoryId, sortId}).then((pizzasArr: Array<IPizzaObj>) => {
      setPizzasList(pizzasArr);
      setIsLoading(false);
    });
    isQueryNeed.current = false;
    
  }, [categoryId, sortId]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify(
        {
          category: categoryId,
          sort: sortId,
        }
      );
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortId]);

  return (
    <section>
      <h2 className='content__title'>Все пиццы</h2>
      <ul className='content__items'>


        {!isLoading ? pizzasList.map((pizzaObj) => {
          return <li key={pizzaObj.id}>
            <PizzaCard {...pizzaObj} />
          </li>
        }) :
        [...new Array(6)].map(el => <li key={getRandomString()}><Skeleton /></li>)}
      </ul>
    </section>
  );
}

export default PizzasSection;