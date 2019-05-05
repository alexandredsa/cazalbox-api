## Endpoints

### Auth
#### POST - /auth

```json
{
    "username": "barackobama@gmail.com",
    "password":"un1t3dSt4t3s"
}
```

### Rooms
#### POST - /rooms/new
- `Requires authentication`

#### Response
```json
{
    "key": "AGT3920"
}
```
#### POST - /rooms/signin
```json
{
    "key": "AGT3920"
}
```
### Screens
#### POST - /screens
```json
{
    "device_hash": "56fe4b898cb23beb92aa6238419151a7"
}
```
### Resources

#### GET - /resources/pictures

```json
[
   {
      "name":"Faustop",
      "url":"https://fotos.caras.uol.com.br/media/images/large/2018/05/02/fausto-silva-807084.jpg"
   },
   {
      "name":"Faustop",
      "url":"https://fotos.caras.uol.com.br/media/images/large/2018/05/02/fausto-silva-807084.jpg"
   },
   {
      "name":"Faustop",
      "url":"https://fotos.caras.uol.com.br/media/images/large/2018/05/02/fausto-silva-807084.jpg"
   }
]
```

### Players

#### POST - /players

```json
{
    "nickname": "cronaldo",
    "device_hash": "56fe4b898cb23beb92aa6238419151a7",
    "picture_uri": "https://fotos.caras.uol.com.br/media/images/large/2018/05/02/fausto-silva-807084.jpg"
}
```



## Entities
### Session
```json
{
    "room": {
        "id": "537a74e1-97bb-43e1-980f-0acad4a2939e",
        "pass": "YTE8473"
    },
    "screen": {
        "id": "4da938d7-de2f-4d73-a87b-730ca916c19f"
    },
    "players": [{
        "id": "b9020f0c-185d-4f54-af1d-5b5bf7d0dc05",
        "nickname": "faustop",
        "picture_uri": "https://fotos.caras.uol.com.br/media/images/large/2018/05/02/fausto-silva-807084.jpg",
        "score": 450
    }],
    "created_at": "2019-05-04T22:30:28+00:00",
    "expires_at": "2019-05-04T22:30:28+00:00",
    "finished_at": "2019-05-04T22:30:28+00:00",
}
```

### Player
```json
{
        "id": "b9020f0c-185d-4f54-af1d-5b5bf7d0dc05",
        "nickname": "faustop",
        "device_hash": "56fe4b898cb23beb92aa6238419151a7",
        "picture_uri": "https://fotos.caras.uol.com.br/media/images/large/2018/05/02/fausto-silva-807084.jpg",
        "score": 450
}

```

### Game
```json
{
        "id": "6d493b3f-9031-498f-b31a-013ba7d03b81",
        "name": "Galeria",
        "key": "GALLERY",
        "description": "Cada jogar irá enviar uma foto de sua galeria, será distribuído entre todos e cada jogador fará uma legenda para a foto sem saber de quem é a foto. As identidades só serão reveladas na rodada de votação.",
        "background_image_uri": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Suricates%2C_Namibia-2.jpg",

}

```