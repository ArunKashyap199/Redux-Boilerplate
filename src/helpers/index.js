export const handleError = (error) => {
    const message =
        error.response && error.response.data.ResponseText
            ? error.response.data.ResponseText
            : error.message
    console.error(message)
}

export const API_BASE_URL = "https://jsonplaceholder.typicode.com"