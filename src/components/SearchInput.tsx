import { FC, useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Funnel } from "lucide-react";
import { headerMap } from "@/helper/transform-functions.ts";
import { Input } from "@/components/ui/input.tsx";

interface SearchInputProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    loading: boolean;
    error: Error | null;
}

// currently unused
const SearchInput: FC<SearchInputProps> = ({handleSubmit, loading, error}) => {
    const [input, setInput] = useState('');
    const [selectedSearchColumn, setSelectedSearchColumn] = useState('name');

    return (
        <>
            <form onSubmit={handleSubmit} className="mb-6">
                <div className="flex">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant={"secondary"} size={"lg"}>
                                <Funnel size={20} strokeWidth={1}/>
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
                        id="searchTerm"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
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
                    {error.message}
                </div>
            )}
        </>
    );
}

export default SearchInput;