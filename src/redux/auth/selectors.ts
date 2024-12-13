import { UserActiv } from "../../components/App/App.types";

interface State {
    auth: UserActiv;
}

export const selectUser = (state: State) => state.auth.user;
export const selectIsLoggedIn = (state: State) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state: State) => state.auth.isRefreshing;
