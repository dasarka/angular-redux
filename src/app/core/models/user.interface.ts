
export interface User {
    id: string;
    firstName: string;
    lastName: string;
    loggedIn: boolean;
    token: string;
    lastLoggedIn: Date;
}
