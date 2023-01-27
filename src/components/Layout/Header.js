import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import MealsSummary from "../Meals/MealsSummary";

const Header = () => {
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </header>
            {/* below class name like that because -(desh) b/n class name so (.)dott notation not work here*/}
            <div className={classes['main-image']}>  
                <img src={mealsImage} alt="A table full of delicious food!"/>
            </div>
            <MealsSummary/>
        </React.Fragment>
    )
};

export default Header;