import GlobalStyles from './styles/global'
import Routes from './Routes';
import Header from "./components/Header"
import { usePage } from './providers/currentPage';

function App() {

  const {setCurrent} = usePage()

  return (
    <div className="App">
      <GlobalStyles/>
      <Header setCurrent={setCurrent}/>
      <Routes/>
    </div>
  );
}

export default App;
