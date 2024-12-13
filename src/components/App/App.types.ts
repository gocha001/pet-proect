import React from 'react';

export interface User {
  name?: string | null;
  email: string | null;
  password?: string;
}

export interface UserActiv {
  user: User;
  token: string | null;
  isLoggedIn?: boolean;
  isRefreshing?: boolean;
}


export interface Contacts {
  items: Contact[];
  loading: boolean;
  error: boolean;
}

export interface Contact {
  id?: string;
  name: string;
  number: string;
}


export interface Filter {
  name: string;
};


export interface RouteProps {
  component: React.ReactNode;
  redirectTo: string;
}