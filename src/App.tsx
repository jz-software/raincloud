import Header from './Header';
import Search from './Search';
import Map from './Map';
import { useState } from 'react';

function App() {
  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0]);
  const [data, setData] = useState<any[]>([]);
  const onSearch = async (query: string) => {
    const dataFromServer = await (await fetch(`https://jz-software.herokuapp.com/api/application/weather?location=${query}`)).json();
    setCoordinates(dataFromServer[0].coordinates.reverse());
    setData(dataFromServer);
  }
  return (
    <div className="App">
      <Header />
      <Search onSearch={onSearch} />
      <Map coordinates={coordinates} data={data} />
    </div>
  );
}

export default App;
