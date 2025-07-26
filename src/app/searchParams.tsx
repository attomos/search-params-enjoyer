import { createLoader, parseAsArrayOf, parseAsString } from "nuqs/server";

// Describe your search params, and reuse this in useQueryStates / createSerializer:
export const wfSearchParams = {
  visibleWorkflows: parseAsArrayOf(parseAsString).withDefault([]),
};

export const loadSearchParams = createLoader(wfSearchParams);
