import { Calendar, Header } from './components';
import { CustomDatesProvider } from './hooks/useCustomDate';
import './style/global.css';

function App() {
  return (
    <CustomDatesProvider>
      <div className="app">
        <Header />

        <div className="container">
          <main>
            <Calendar />
          </main>
        </div>
      </div>
    </CustomDatesProvider>
  );
}

export default App;
