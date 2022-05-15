import classes from './FoodItemForm.module.css';
import Input from '../../UI/Input';

function FoodItemForm(props){
    return(
        <form className={classes.form}>
          <Input label= "Kilogram" input={{
              id: 'amount_' + props.id,
              type: 'number',
              min:'1',
              max:'5',
              step: '1',
              defaultValue: '1'
          }}/>

          <button>+ Sepete Ekle</button>   
        </form>
    )

}

export default FoodItemForm;