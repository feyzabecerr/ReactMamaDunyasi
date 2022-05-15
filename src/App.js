import Header from "./components/Layout/Header";
import {Fragment} from 'react';
import CatFoods from "./components/CatFood/CatFoods";

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <CatFoods/>
      </main>
    </Fragment>
  );
}

export default App;
