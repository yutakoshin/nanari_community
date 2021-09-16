import{createClient}from 'microcms-js-sdk'

export const client = createClient({
    serviceDomain:'nanari-service',
    apiKey: process.env.API_KEY,
});