const imagens = [
    "https://upload.wikimedia.org/wikipedia/pt/0/00/100%25_Charlie_Brown_Jr._-_Abalando_a_sua_F%C3%A1brica.jpg", 
    "https://cdn-images.dzcdn.net/images/cover/ac9da3b2628c82d9975117dc9a663ad1/0x1900-000000-80-0-0.jpg", 
    "https://s2-g1.glbimg.com/AW1ezHCs4WSviKay3kT3AytfQkc=/0x0:1772x1772/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/b/9/BsIU7gSWGU9rGnbQb2bg/bacoexubluesman.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8-PiXIw-NehuUZR-CEC1Bs5QHjIRxTifSSLTjPnoCufnsKnZwKRXVqvLdPt6fNd36X9phyphenhyphenXNeHF5-83qBPhCmi5t84RvrAT3U4WmLNZ5gVNcZyoZuNBnUmgfsszFepqEnksd0msjlwdE/s640/aascharliebrowncapa.jpg",
    "https://i.scdn.co/image/ab67616d0000b273500958a9e57fa6be4c801a5c",
    "https://i.scdn.co/image/ab67616d0000b27360619292aee0b76c06e30a86",
    "https://upload.wikimedia.org/wikipedia/pt/4/48/Imunidade_Musical.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/0/02/Camisa10_-Joga_Bola_At%C3%A9_na_Chuva.jpg",
    "https://akamai.sscdn.co/uploadfile/letras/albuns/3/2/8/1/488341457634699.jpg",
    "https://cdn-images.dzcdn.net/images/cover/a4ab3fe8f3ad1c2ae55d8ee9869a4bfa/0x1900-000000-80-0-0.jpg",
    "https://i.scdn.co/image/ab67616d00001e02f1364384afc987781648856f",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNL520W53XWedU45yoZe8f9PLDBwrWYg7fgw&s",
    "https://i.scdn.co/image/ab67616d0000b2737b2dba12da4b7f8e18cba810",
    // Adicione mais imagens aqui
];

function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, "0");
    const minutos = agora.getMinutes().toString().padStart(2, "0");
    const segundos = agora.getSeconds().toString().padStart(2, "0");

    document.getElementById("clock").textContent = `${horas}:${minutos}:${segundos}`;

    // Troca a imagem a cada minuto
    const indice = agora.getMinutes() % imagens.length;
    document.getElementById("singerImage").src = imagens[indice];
}
// Atualiza todo segundo
setInterval(atualizarRelogio, 1000);
atualizarRelogio();
