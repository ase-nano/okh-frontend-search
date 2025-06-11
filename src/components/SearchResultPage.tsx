import { transformDataForTable } from "@/helper/transform-functions";
import { TableData } from "@/models/Table";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header.tsx";
import SearchResultItem from "@/components/SearchResultItem.tsx";
import SearchResultSidebar from "@/components/SearchResultSidebar.tsx";
import { ArrowLeft, ExternalLink } from "lucide-react";

const SearchResultPage: FC = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [data, setData] = useState<TableData | null>(null);
    const [requestDuration, setRequestDuration] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (location && location.state) {
            setData(transformDataForTable(location.state.data));
            setRequestDuration(location.state.requestDuration);
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [location]);

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Header />
            <div className="container mx-auto">
                <div className="flex mb-12">
                    <div className="w-1/2"><Button variant={"secondary"} onClick={() => navigate('/')}><ArrowLeft /> Back to Search</Button></div>
                    <div className="w-1/2 text-right"><Button variant={"secondary"}>Create Manifest <ExternalLink /></Button></div>
                </div>

                { (data) ? (
                    <div className="flex">
                        <div className="w-4/5 mr-6">
                            {
                                data.rows.map((row, index) => <SearchResultItem key={index} row={row} />)
                            }
                        </div>
                        <div className="w-1/5 ml-6">
                            <SearchResultSidebar resultLength={data.rows.length} requestDuration={requestDuration} />
                        </div>
                    </div>
                ) : (
                    <p>No data available. Please search first.</p>
                ) }
            </div>
        </>
    );
};

export default SearchResultPage;