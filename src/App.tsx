import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SearchInputPage from './components/SearchInputPage.tsx'
import SearchResultPage from './components/SearchResultPage.tsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div className='mx-auto'><SearchInputPage/></div>}/>
                <Route path="/result" element={<SearchResultPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
