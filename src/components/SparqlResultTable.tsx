import { getMappedHeaderName, transformDataForTable } from "@/helper/transform-functions";
import { TableData } from "@/models/Table";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const SparqlResultTable: FC = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [data, setData] = useState<TableData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (location && location.state) {
            setData(transformDataForTable(location.state));
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [location.state]);

    if (loading) {
        return <div>Loading...</div>
    }

    if (!data) {
        return (
            <div>
                <p>No data available. Please search first.</p>
                <Button onClick={() => navigate('/')}>Go to Search</Button>
            </div>
        )
    }

    return (
        <>
            <Button onClick={() => navigate('/')}>Go to Search</Button>

            {
                data.headers.length && (
                    <Table className="table-auto text-wrap">
                        <TableCaption>Results ({data.rows.length})</TableCaption>
                        <TableHeader>
                            <TableRow>
                                {
                                    data.headers.map((header: string) => (
                                        <TableHead key={header} className="w-1/5 text-wrap">{getMappedHeaderName(header)}</TableHead>
                                    ))
                                }
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                data.rows.map((row, rIndex) => (
                                    <TableRow key={rIndex}>
                                        {
                                            Object.values(row).map((value, vIndex) => (
                                                <TableCell key={vIndex} className="w-1/5 text-wrap">{value}</TableCell>
                                            ))
                                        }
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                )
            }
        </>
    );
};

export default SparqlResultTable;