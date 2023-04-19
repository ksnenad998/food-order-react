import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";


import MealImage from "../../assets/meals.jpg";

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Naruci Perke</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={MealImage}/>
        </div>

    </React.Fragment>;
};

export default Header;