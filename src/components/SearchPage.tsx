import { FC, useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { fetchGraph } from '@/data/SparqlQueries';
import { SparqlResult } from '@/models/SparqlResult';
import { useNavigate } from 'react-router-dom';
import { Funnel } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import { headerMap } from "@/helper/transform-functions.ts";
import Header from "@/components/Header.tsx";

const SearchPage: FC = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedSearchColumn, setSelectedSearchColumn] = useState('name');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!query.trim()) {
            setError('Please enter a search query');
            return;
        }

        setError(null);
        setLoading(true);

        try {
            const sparqlQuery = fetchGraph(selectedSearchColumn, query);
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

            if (data.results && data.results.bindings) {
                navigate('/result-table', {state: data});
            }

        } catch (err: unknown) {
            setError(`Error: ${err}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="bg-image-full"></div>
            <Header />

            <div className="container mx-auto">
                <div className="p-6 max-w-2xl mx-auto" style={{paddingTop: "18rem"}}>
                    <h1 className="text-5xl font-bold mb-6">OKH Search</h1>

                    <form onSubmit={handleSubmit} className="mb-6">
                        <div className="flex">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant={"secondary"} size={"lg"}>
                                        <Funnel size={20} strokeWidth={1} />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Search in</DropdownMenuLabel>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuRadioGroup value={selectedSearchColumn}
                                                            onValueChange={setSelectedSearchColumn}>
                                        {
                                            Object.keys(headerMap).map((key: string) =>
                                                <DropdownMenuRadioItem key={key} value={key}>{headerMap[key]}</DropdownMenuRadioItem>
                                            )
                                        }
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="bg-background5 ml-2 mr-2 h-10"
                                placeholder="Enter search term..."/>

                            <Button
                                type='submit'
                                variant={"secondary"}
                                size={"lg"}
                                disabled={loading}>
                                {loading ? 'Searching...' : 'Search'}
                            </Button>
                        </div>
                    </form>

                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            {error}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default SearchPage;