import './App.css';
import Chinese_Cards from './components/Chinese_Cards';
const App = () => {
  return (
    <div className="App">
      <h1 className='Title'>Chinese FlashCards!</h1>
      <h2> Do you know chinese? If not, let's learn some new chinese words together!</h2>
      <Chinese_Cards />  
    </div>
  )
}

export default App