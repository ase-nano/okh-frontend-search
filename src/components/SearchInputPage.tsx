import { FC, useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { fetchGraph } from '@/data/SparqlQueries';
import { SparqlResult } from '@/models/SparqlResult';
import { useNavigate } from 'react-router-dom';
import { Funnel, Search } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import { headerMap } from "@/helper/transform-functions.ts";
import Header from "@/components/Header.tsx";
import logoImgLight from '../assets/logos/honeycomb-logo.svg';
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Label } from "@/components/ui/label.tsx";

const SearchInputPage: FC = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedSearchColumn, setSelectedSearchColumn] = useState('name');
    const [excludeThingiVerse, setExcludeThingiVerse] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const startTime = performance.now();

        if (!query.trim()) {
            setError('Please enter a search query');
            return;
        }

        setError(null);
        setLoading(true);

        try {
            const sparqlQuery = fetchGraph(selectedSearchColumn, query, excludeThingiVerse);
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

            const endTime = performance.now();
            const duration = endTime - startTime;

            const data: SparqlResult = await response.json();

            if (data.results && data.results.bindings) {
                navigate('/result', {state: {data: data, requestDuration: Math.floor(duration)}});
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
            <Header/>

            <div className="container mx-auto">
                <div className="p-6 max-w-3xl mx-auto" style={{paddingTop: "18rem"}}>
                    <div className="mb-6 mx-auto w-32"><img src={logoImgLight} width="250" alt ="OSE Logo" /></div>

                    <form onSubmit={handleSubmit} className="mb-6">
                        <div className="flex">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant={"secondary"} size={"lg"} className="text-2xl p-6.5">
                                        <Funnel size={32} />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Search in</DropdownMenuLabel>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuRadioGroup value={selectedSearchColumn}
                                                            onValueChange={setSelectedSearchColumn}>
                                        {
                                            Object.keys(headerMap).map((key: string) =>
                                                <DropdownMenuRadioItem key={key}
                                                                       value={key}>{headerMap[key]}</DropdownMenuRadioItem>
                                            )
                                        }
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="bg-background5 ml-2 mr-2 h-10 text-2xl p-6"
                                placeholder="Enter search term..."/>

                            <Button
                                type='submit'
                                variant={"secondary"}
                                size={"lg"}
                                disabled={loading}
                                className="text-xl p-6">
                                <Search size={20} className="" />
                                {loading ? 'Searching...' : 'Search'}
                            </Button>
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                            <Checkbox id="excludeThingiVerse" checked={excludeThingiVerse} onCheckedChange={(checked) => setExcludeThingiVerse(Boolean(checked))} />
                            <Label htmlFor="excludeThingiVerse">Exclude ThingiVerse Data</Label>
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

export default SearchInputPage;