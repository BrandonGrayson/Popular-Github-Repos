export default function fetchPopularRepos(language) {
    const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:
    ${language}&sort=stars&order=desc&type=Repositories`)
    // make a request to endpoint
    return fetch(endpoint)
    // turn the response to json
    .then((res) => res.json())
    // check the resulting data object, if there is not any data in items then throw an err from data message
    .then((data) => {
        if (!data.items) {
            throw new Error(data.message);
        }

        return data.items
    }) 
} 