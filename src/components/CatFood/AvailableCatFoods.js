import React from "react";
import Card from "../UI/Card";
import FoodItem from "./FoodItem/FoodItem";
import classes from "./AvailableCatFood.module.css";
import rc_k from "../../assets/3_min.jpg";
import rc_y from "../../assets/rc.jpg";
import felicia from "../../assets/felicia.jpg";
import proplan from "../../assets/proplan.jpeg";
import nd from "../../assets/nd.jpg";
import { Grid } from "@mui/material";

const DUMMY_FOOD = [
  {
    id: "m1",
    name: "Royal Canin FIT32",
    description: "Royal Canin Fit 32 Yetişkin Açık Kedi Maması",
    price: 75,
    pic: <img src={rc_y} alt="royal-canin-yetişkin" height={200} />,
  },
  {
    id: "m2",
    name: "Royal Canin Yavru",
    description: "Royal Canin Kitten Yavru Kedi Maması 1 kg",
    price: 80,
    pic: <img src={rc_k} alt="royal-canin-yvru" height={200} />,
  },

  {
    id: "m3",
    name: "Proplan",
    description: "Somonlu Kısırlaştırılmış Kedi Maması 1 kg",
    price: 90,
    pic: <img src={proplan} alt="proplan kısır" height={200} />,
  },

  {
    id: "m4",
    name: "N&D",
    description: "N&D Tahılsız Kitten Tavuklu Narlı Yavru Kedi Maması ",
    price: 110,
    pic: <img src={nd} alt="nd yavru" height={200} />,
  },
  {
    id: "m5",
    name: "Felicia",
    description: "Felicia Az Tahıllı Kuzu Etli Yavru Kedi Maması 1 kg",
    price: 60,
    pic: <img src={felicia} alt="felicia yavru" height={200} />,
  },
  {
    id: "m6",
    name: "Pro Choice",
    description: "Somonlu ve Karidesli Yavru Kedi Maması 1 kg",
    price: 60,
    pic: <img src={felicia} alt="felicia yavru" height={200} />,
  },
  {
    id: "m5",
    name: "Felicia",
    description: "Felicia Az Tahıllı Kuzu Etli Yavru Kedi Maması 1 kg",
    price: 60,
    pic: <img src={felicia} alt="felicia yavru" height={200} />,
  },
  {
    id: "m6",
    name: "Felicia",
    description: "Felicia Az Tahıllı Kuzu Etli Yavru Kedi Maması 1 kg",
    price: 60,
    pic: <img src={felicia} alt="felicia yavru" height={200} />,
  },
  {
    id: "m7",
    name: "Felicia",
    description: "Felicia Az Tahıllı Kuzu Etli Yavru Kedi Maması 1 kg",
    price: 60,
    pic: <img src={felicia} alt="felicia yavru" height={200} />,
  },
];

function AvailableCatFood() {

  return (
    <section className={classes.meals}>
      <h2 className={classes.header}>Mama Çeşitlerimiz</h2>
      <ul>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
              {
              DUMMY_FOOD.map( (meal,index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                <FoodItem
                  id={meal.id}
                  key={meal.id}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                  pic={meal.pic}
                />
                </Grid>
          ))}
        </Grid>
      </ul>
    </section>
  );
}

export default AvailableCatFood;

