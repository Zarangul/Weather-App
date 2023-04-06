import {QueryClientProvider, QueryClient} from 'react-query';
import './App.css';
import { Weather } from './components/Weather';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Weather/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
