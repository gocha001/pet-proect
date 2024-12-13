import { Filter } from "../../components/App/App.types";

interface State {
    filters: Filter;
}

export const selectNameFilter = (state: State) => state.filters.name;
