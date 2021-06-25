import Header from './Header';
import Search from './Search';
import Map from './Map';
import { useEffect, useState } from 'react';

function App() {
  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0]);
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const onSearch = async (query: string) => {
    setIsLoading(true);
    const dataFromServer = await (await fetch(`https://jz-software.herokuapp.com/api/application/weather?location=${query}`)).json();
    setIsLoading(false);
    setCoordinates(dataFromServer[0].coordinates.reverse());
    setData(dataFromServer);
  }
  useEffect(() => {
    const getRandomCountry = async () => {
      const data = (await (await fetch('https://restcountries.eu/rest/v2/all')).json()).map((e: any) => e.name);
      onSearch(data[Math.floor(Math.random() * data.length)]);
    }
    getRandomCountry();
  }, [])
  return (
    <div className="App">
      <Header />
      <Search onSearch={onSearch} />
      <Map coordinates={coordinates} data={data} isLoading={isLoading} />
    </div>
  );
}

export default App;
