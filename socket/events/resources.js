module.exports = {
    send_pictures: (client) => {
        const pictures = [
            {
                "name": "Faustop",
                "url": "https://fotos.caras.uol.com.br/media/images/large/2018/05/02/fausto-silva-807084.jpg"
            },
            {
                "name": "Faustop",
                "url": "https://fotos.caras.uol.com.br/media/images/large/2018/05/02/fausto-silva-807084.jpg"
            },
            {
                "name": "Faustop",
                "url": "https://fotos.caras.uol.com.br/media/images/large/2018/05/02/fausto-silva-807084.jpg"
            }
        ];

        client.emit('resources_get_pictures', pictures);
    }
}