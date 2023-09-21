async function tempo(request, response) {

    const apiKey = process.env.CONVERTKIT_API_SECRET;

    const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiKey}`)
    const dynamicDate = new Date();
    const inscritos = subscribersResponse.total_subscribers;
    response.json({
        date: dynamicDate.getFullYear(),
        inscritos: inscritos
    })
}

export default tempo