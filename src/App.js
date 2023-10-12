import axios from "axios"
import { useEffect, useState } from "react"
import City from "./City"
import "./App.css"

function App() {
  const [data, setData] = useState()
  const [city, setCity] = useState("antalya")

  async function getData() {
    if (city) {
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=tr`)
        .then(response => {
          //console.log(response)
          if (response.status === 200) {
            setData(response.data)
          }
        }).catch(error => console.log(error))
    }
  }

  useEffect(() => {
    console.log("app yuklendi!")
  }, []);

  useEffect(() => {
    getData();
  }, [city])

  return (
    <div className="App">
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      <City data={data} />
    </div>
  );
}

export default App;
