import classes from "./HeaderCartButton.module.css";
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = props => {
    return <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Korpa</span>
        <span className={classes.badge}>Ukupna Cena</span>
    </button>
}

export default HeaderCartButton;