import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SearchPage from './components/SearchPage'
import SparqlResultTable from './components/SparqlResultTable'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div className='mx-auto'><SearchPage/></div>}/>
                <Route path="/result-table" element={<SparqlResultTable/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
