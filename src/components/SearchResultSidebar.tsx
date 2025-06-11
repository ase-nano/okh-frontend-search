import { FC } from "react";
import { QUERY_LIMIT_RESULTS } from "@/helper/configs.ts";

interface SearchResultSidebarProps {
    requestDuration: number | null;
    resultLength: number | null;
}

const SearchResultSidebar: FC<SearchResultSidebarProps> = ({requestDuration, resultLength}) => {
    return (
        <>
            <div className="mb-4">
                <h3 className="text-white text-3xl font-bold mb-4">Found projects</h3>
                <div className="text-white">{resultLength} of max. {QUERY_LIMIT_RESULTS}</div>
            </div>
            <div className="mb-4">
                <h3 className="text-white text-3xl font-bold mb-4">Search time</h3>
                <div className="text-white">{requestDuration} ms</div>
            </div>
        </>
    );
}

export default SearchResultSidebar;