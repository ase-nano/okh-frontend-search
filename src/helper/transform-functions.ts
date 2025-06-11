import { SparqlResult } from "@/models/SparqlResult";
import { TableData } from "@/models/Table";

const tableHeadersToUse = [
    'proj_img_url',
    'name',
    'src_license',
    'src_licensor',
    'proj_license',
    'proj_licensor',
    'proj_function',
    'proj_documentation_language',
    'proj_version',
    'proj_technology_readiness_level',
    'proj_documentation_readiness_level',
    'proj_release_url'
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
                    const licenseSplit = binding[header].value.split('/');
                    row[header] = licenseSplit[licenseSplit.length - 1];
                }
                if (header.includes('readiness_level')) {
                    const licenseSplit = binding[header].value.split('#');
                    row[header] = licenseSplit[licenseSplit.length - 1];
                }
            } else {
                row[header] = null;
            }
        });

        return row;
    });

    console.log('transformDataForTable', { headers, rows });

    return {
        headers,
        rows
    };
};

export const headerMap: Record<string, string> = {
    proj_img_url: 'Preview',
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