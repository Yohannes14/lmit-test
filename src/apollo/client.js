import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: 'https://staging-gateway.lmis.gov.et/v1/graphql',
});

const authLink = new ApolloLink((operation, forward) => {

    operation.setContext({
        headers: {
            'x-hasura-role': 'admin',
        },
    });

    return forward(operation);
});

const client = new ApolloClient({
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache(),
});

export default client;

