import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';


import * as serviceWorker from './serviceWorker';
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider
} from "@apollo/client";

import cache from "./cache";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: 'https://tdrmrwddz2.execute-api.us-east-1.amazonaws.com/dev/graphql'
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
          <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
