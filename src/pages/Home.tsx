import CategoriesBlock from "../components/CategoriesBlock";
import PizzasSection from "../components/PizzasSection";
import SortDropDown from "../components/SortDropDown";

function Home() {
  return (
    <div className="container">
      <div className="content__top">
        <CategoriesBlock />
        <SortDropDown />
      </div>
      <PizzasSection />
    </div>
  );
}

export default Home;