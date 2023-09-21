async function tempo(request, response) {

    const apiKey = process.env.CONVERTKIT_API_SECRET;

    const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiKey}`)
    const dynamicDate = new Date();
    const inscritos = subscribersResponse.total_subscribers;

    response.setHeader('Cache-Control', 's-maxage=10 , stale-while-revalidate');

    response.json({
        date: dynamicDate.getDate(),
        inscritos: inscritos
    })
}

export default tempo