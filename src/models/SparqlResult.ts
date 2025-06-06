export interface SparqlResult {
    head: SparqlResultHead;
    results: SparqlResultResults;
}

interface SparqlResultHead {
    vars: string[];
}

// the key seems to be always one string from the head.vars list
// so the list resembles the variables from the query and in the
// list of bindings are objects, which have the same keys as there
// are strings in the head.vars list, so each entry from the
// results.binding list can be seen as a row of result data
interface SparqlResultResults {
    bindings: Record<string, SparqlResultBinding>[]
}

interface SparqlResultBinding {
    type: string;
    value: string;
}