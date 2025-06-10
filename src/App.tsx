import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SearchPage from './components/SearchPage'
import SearchResultPage from './components/SearchResultPage.tsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div className='mx-auto'><SearchPage/></div>}/>
                <Route path="/result-table" element={<SearchResultPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
