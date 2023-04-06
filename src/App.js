import {QueryClientProvider, QueryClient} from 'react-query';
import './App.css';
// import WeatherCard from './components/WeatherCard';
import { Weather } from './components/Weather';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Weather/>
    </div>
    </QueryClientProvider>
//     <div>
// <WeatherCard/>
//     </div>
  );
}

export default App;
