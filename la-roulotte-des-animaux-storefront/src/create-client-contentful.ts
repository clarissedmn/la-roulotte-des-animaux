const contentful = require('contentful');

// Create a Contentful client
const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

interface FetchDataParams {
    model: string;
}
export const fetchData = ({model}: FetchDataParams) => {
    try {
       return client.getEntries({
            content_type: model
        });

    } catch (error) {
        console.error('Error fetching data from Contentful', error);
    }
};
