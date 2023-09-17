import filters from "../data/filter";

export interface Filters {
  filter: string;
  label: string;
  item: string[];
}

const useFilters = () => ({ data: filters, isLoading: false, error: null });
export default useFilters;
