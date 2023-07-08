import './App.css';
import Header from './components/Header';
import useFetch from './components/useFetch';
function App() {
  const [data]=useFetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
  return (
    <div className="App">
      <Header />
      {
        data.map((e,index)=>(
            <div key={index}>
              <h4>{e.firstName}</h4>
              <h4>{e.email}</h4>
            </ div>
        ))
      }
    </div>
  );
}

export default App;
