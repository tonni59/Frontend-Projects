
/*
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  const handleSelectionItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Alert>
        Hello World
      </Alert>
    </div>
  );
}
*/

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  )
}


export default App;
