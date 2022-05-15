import {Fragment} from 'react';
import CatFoodSummary from './CatFoodSummary';
import AvailableCatFoods from './AvailableCatFoods';

function CatFoods(){
    return (
        <Fragment>
            <CatFoodSummary/>
            <AvailableCatFoods/>
        </Fragment>
    )
}

export default CatFoods