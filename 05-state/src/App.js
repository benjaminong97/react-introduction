import AlertBox from './AlertBox';
import NumberBox from './NumberBox';
import TickleBox from './TickleBox';
import Dice from './Dice'
//NOTE THAT SET STATE IS ASYNCHRONOUS!

function App() {
  return (
    <div>
      <h1>hi hi its the app</h1>
      <AlertBox initialValue="WASSSUPPPP"/>
      <TickleBox/>
      <NumberBox/>
      <Dice/>
    </div>
  )
}

export default App;