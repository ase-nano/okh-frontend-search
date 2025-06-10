import { SparqlResult } from "@/models/SparqlResult";
import { TableData } from "@/models/Table";

const tableHeadersToUse = [
    'name',
    'src_license',
    'src_licensor',
    'proj_license',
    'proj_licensor',
    'proj_function',
    'proj_documentation_language',
    'proj_version',
    'proj_technology_readiness_level',
    'proj_documentation_readiness_level'
];

export const transformDataForTable = (result: SparqlResult): TableData => {
    if (!result) {
        return { headers: [], rows: [] };
    }

    const { head, results } = result;
    const headers = head.vars.filter(headVar => tableHeadersToUse.includes(headVar));
    const bindings = results.bindings;

    const rows = bindings.map(binding => {
        const row: any = {};

        headers.forEach(header => {
            if (binding[header]) {
                row[header] = binding[header].value;

                if (header.includes('license')) {
                    row[header] = binding[header].value.split('#')[1];
                }
            } else {
                row[header] = null;
            }
        });

        return row;
    });

    return {
        headers,
        rows
    };
};

export const headerMap: Record<string, string> = {
    name: 'Name',
    src_license: 'Source License',
    src_licensor: 'Source Licensor',
    proj_license: 'Project License',
    proj_licensor: 'Project Licensor',
    proj_function: 'Project Function',
    proj_documentation_language: 'Doc. Lang.',
    proj_version: 'Vers.',
    proj_technology_readiness_level: 'Readiness',
    proj_documentation_readiness_level: 'Doc. Readiness'
};

export const getMappedHeaderName = (dbHeader: string): string => {
    return headerMap[dbHeader];
};