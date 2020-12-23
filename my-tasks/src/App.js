import './App.css';
import {Box} from "./components/Box";
import {Date} from "./components/Date";
import {test,test2,test1} from "./components/Test";


function App() {

    return (
        <div className="App">
            {
                test.map((item) => <Box text={item.text}/>)
            }
            {
                test1.map((item) => <Box text={item.text}/>)
            }
            {
                test2.map((item) => <Box text={item.text}/>)
            }
            <Date time='hi world'/>
        </div>
    );
}

export default App;

