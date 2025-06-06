import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SearchPage from './components/SearchPage'
import SparqlResultTable from './components/SparqlResultTable'

function App() {
    return (
        <div className="container mx-auto">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<div className='mx-auto'><SearchPage /></div>} />
                    <Route path="/result-table" element={<SparqlResultTable />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
