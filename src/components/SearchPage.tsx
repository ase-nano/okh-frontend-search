import { FC, useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { fetchGraphForProjectName } from '@/data/SparqlQueries';
import { SparqlResult } from '@/models/SparqlResult';
import SparqlResultTable from './SparqlResultTable';
import { useNavigate } from 'react-router-dom';


const SearchPage: FC = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [sparqlResponse, setSparqlResponse] = useState<SparqlResult | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!query.trim()) {
            setError('Please enter a search query');
            return;
        }

        // Clear previous results and errors
        setSparqlResponse(null);
        setError(null);
        setLoading(true);

        try {
            const sparqlQuery = fetchGraphForProjectName(query);
            const fusekiEndpoint = 'https://okh-db.dev.opensourceecology.de/okh/sparql';

            const response = await fetch(fusekiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/sparql-query',
                    'Accept': 'application/sparql-results+json'
                },
                body: sparqlQuery
            });

            if (!response.ok) {
                throw new Error(`Fuseki server returned: ${response.status} ${response.statusText}`);
            }

            const data: SparqlResult = await response.json();

            console.log('received data', data);
            // Process the SPARQL results
            if (data.results && data.results.bindings) {
                setSparqlResponse(data);
                navigate('/result-table', { state: data });
            } else {
                setSparqlResponse(null);
            }
        } catch (err) {
            setError(`Error: ${(err as any).message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">OKH Search</h1>

                <form onSubmit={handleSubmit} className="mb-6">
                    <div className="flex">
                        <Input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Enter search term..." />
                        <Button type='submit' disabled={loading}>{loading ? 'Searching...' : 'Search'}</Button>
                    </div>
                </form>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}
            </div>
        </>
    );
}

export default SearchPage;