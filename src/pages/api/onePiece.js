async function onePiece(request, response) {

    const personagem = [
        {
            id: 1,
            name: 'luffy',
            img: 'https://i.pinimg.com/564x/1b/aa/51/1baa516470fc278145718dd2048bdf6d.jpg',
            sobre: 'Monkey D. Luffy, é um personagem fictício e o protagonista da franquia One Piece criada por Eiichiro Oda. Ele é apresentado como um jovem cujo corpo ganha as propriedades de borracha após ter comido a Gomu-Gomu no Mi, uma das várias frutas amaldiçoadas conhecidas como Akuma no Mi ou Frutas do Diabo',
        },
        {
            id: 2,
            name: 'nami',
            img: 'https://i.pinimg.com/236x/a3/38/45/a338452bc6eb1ad7239ef3ed55d7eb54.jpg',
            sobre: 'Nami, é uma personagem fictícia do mangá e anime One Piece criada por Eiichiro Oda. Nami é introduzida na narrativa como uma aliada oportunista do protagonista Monkey D. Luffy mas que possui motivos nobres por trás de suas ações ambíguas',
        },


    ]

    const responseData = []

    for (let i = 0; i < personagem.length; i++) {
        responseData.push(personagem[i]);
    }

    response.json({
        responseData
    })


}

export default onePiece