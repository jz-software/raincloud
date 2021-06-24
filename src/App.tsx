import Header from './Header';
import Search from './Search';
import Map from './Map';
import { useState } from 'react';

function App() {
  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0]);
  const onSearch = async (query: string) => {
    const data = await (await fetch(`https://jz-software.herokuapp.com/api/application/weather?location=${query}`)).json();
    setCoordinates(data[0].coordinates.reverse());
  }
  return (
    <div className="App">
      <Header />
      <Search onSearch={onSearch} />
      <Map coordinates={coordinates} />
    </div>
  );
}

export default App;
