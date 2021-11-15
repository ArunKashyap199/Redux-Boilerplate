export const handleError = (error) => {
    const message =
        error.response && error.response.data.ResponseText
            ? error.response.data.ResponseText
            : error.message
    console.error(message)
}

