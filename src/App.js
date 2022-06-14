import React , {useState} from "react";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";
import AddEntryForm from "./Components/AddEntry/AddEntryForm";
import EntriesChartTracker from "./Components/EntriesChartTracker/EntriesChartTracker";
import './Apps.css';

function App() {

    const [entries, setEntries] = useState([{weight:175, date: "11/23/2021"}])
    
    function addNewEntry(entry){

        let tempEntires = [...entries, entry];

        setEntries(tempEntires);
    }

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className="border-box">
                    <DisplayEntries parentEntries={entries} />
                    </div>
                    <div className ="border-box">
                    <AddEntryForm addNewEntry={addNewEntry} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="border-box">
                    <EntriesChartTracker parentEntries={entries} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;