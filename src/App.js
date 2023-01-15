import AddCost from "./components/AddCost";
import CarsForm from "./components/CarsForm";
import CarsList from "./components/CarsList";
import CarsSearch from "./components/CarsSearch";

function App() {
  return (
    <div className="container is-fluid">
      <CarsForm></CarsForm>
      <CarsSearch></CarsSearch>
      <CarsList></CarsList>
      <AddCost></AddCost>
    </div>
  );
}

export default App;
