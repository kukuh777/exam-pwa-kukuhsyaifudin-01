/* eslint-disable no-nested-ternary */
const { GraphQLClient } = require('graphql-request');
const { graphqlEndpoint } = require('../../../swift.config');

const { decrypt } = require('../../helpers/encryption');


const uri = process.env.NODE_ENV === 'production'
    ? graphqlEndpoint.prod
    : graphqlEndpoint.dev;

function requestGraph(query, variables = {}, context = {}) {
    let token = '';
    if (context.session || context.headers) {
        token = context.session && context.session.token ? `Bearer ${decrypt(context.session.token)}`
            : context.headers.authorization ? context.headers.authorization : '';
    }
    return new Promise((resolve) => {
        const headers = {
            Authorization: token,
        };
        const client = new GraphQLClient(uri, {
            headers,
        });
        console.log(client);
        client.request(query, variables).then((data) => resolve(data)).catch((err) => resolve(err));
    });
}

module.exports = requestGraph;