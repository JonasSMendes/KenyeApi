function tempo(request, response) {
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.getTime()
    })
}

export default tempo