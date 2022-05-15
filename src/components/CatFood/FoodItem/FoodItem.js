import Card from '../../UI/Card';
import classes from './FoodItem.module.css'
import FoodItemForm from './FoodItemForm';
function FoodItem(props){
    const price = `${props.price.toFixed(2)} ₺`;

    return(         
        <li className={classes.food}>
            <Card>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
                <div className={classes.pic}>{props.pic}</div>
            </div>
            <div className={classes.button}>
                <FoodItemForm id={props.id}/>
            </div>
            </Card>
     
        </li>
    )

}

export default FoodItem