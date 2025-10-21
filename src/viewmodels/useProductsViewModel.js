import { useState, useEffect } from 'react';

const useProductsViewModel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Podrías traerlos de una API en el futuro
    setProducts([
      { title: 'Guitarra Rosewood', 
        price: 45000, 
        image: 'https://audiomusicacl.vtexassets.com/arquivos/ids/192797/1-guitarra-acustica-vizcaya-con-cuerdas-de-nylon-arcg39-rb-207758.jpg?v=638556328914200000',
        miniatura1: 'https://audiomusicacl.vtexassets.com/arquivos/ids/192803-1200-auto?v=638556328978830000&width=1200&height=auto&aspect=true',
        miniatura2: 'https://audiomusicacl.vtexassets.com/arquivos/ids/192809-1200-auto?v=638556329040800000&width=1200&height=auto&aspect=true',
        descripcion: 'La Guitarra Rosewood es un instrumento de alta calidad, diseñado para ofrecer un sonido cálido y rico. Su construcción de madera de rosa le proporciona una resonancia excepcional, lo que la convierte en la elección perfecta tanto para principiantes como para músicos experimentados.'},

      { title: 
        'Guitarra Electrica Blackout', 
        price: 55000, 
        image: 'https://ieebolivia.net/es/2981-home_default/guitarra-coronado-guitar-rosewood-fingerboard-black-0243000506.jpg',
        miniatura1: 'https://tmsmusic.co/cdn/shop/products/guitarra-electrica-fender-coronado-guitar-rosewood-fingerboard-black-the-music-site-1.jpg?v=1696261218&width=800',
        miniatura2: 'https://tmsmusic.co/cdn/shop/products/guitarra-electrica-fender-coronado-guitar-rosewood-fingerboard-black-the-music-site-2.jpg?v=1696261220&width=600',
        descripcion: 'Guitarra eléctrica Blackout con diseño moderno y sonido potente. Ideal para músicos que buscan versatilidad y estilo en un solo instrumento. Perfecta para todos los géneros musicales.'},
        
      { title: 'Guitarra Electrica Black', 
        price: 50000, 
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzH4snsv9Ozn7mGLOZRJ7bk7jmgPTliWrYYAIZl5mcEn2sKHL9',
        miniatura1: 'https://galerimusikindonesia.com/image/cache/data/gitar%20dan%20bass/Gitar%20Elektrik/gretsch/G5122DC%20Electromatic%20Hollowbody/gretsch-g5122dc-electromatic-hollowbody-a83897-700x700.jpg',
        miniatura2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Ksb7nRcWo5ccb9n1gI-mQ413CKe6WQRSMw&s',
        descripcion: 'Guitarra eléctrica Black con acabado elegante y componentes de alta calidad. Ofrece excelente respuesta tonal y comodidad para tocar en vivo o en estudio. Recomendada para principiantes y profesionales que buscan rendimiento y estilo.'},

      { title: 'Guitarra Electrica Turkey', 
        price: 37000, 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKmmQvzfGrCHEVG4YumP7UDnpaBXPaoV--EAuEAbhgp-2YmYWQOCQUcTfxPzfLUaxeQas&usqp=CAU',
        miniatura1: 'https://maneimport.com/wp-content/uploads/2021/10/G5622T3.jpg',
        miniatura2: 'https://http2.mlstatic.com/D_Q_NP_625773-MLA48210969935_112021-O.webp',
        descripcion: 'Guitarra eléctrica Turkey con diseño moderno y sonido potente. Ideal para músicos que buscan versatilidad y estilo en un solo instrumento. Perfecta para todos los géneros musicales.'},

      { title: 
        'Teclado Clasico', 
        price: 20000, 
        image: 'https://casaroyal.vtexassets.com/arquivos/ids/162255/111977_1.jpg?v=638774932664670000',
        miniatura1: 'https://casaroyal.vtexassets.com/arquivos/ids/162258-1200-1200?v=638774932682000000&width=1200&height=1200&aspect=true',
        miniatura2: 'https://casaroyal.vtexassets.com/arquivos/ids/162257-1200-1200?v=638774932676400000&width=1200&height=1200&aspect=true',
        descripcion: 'El teclado clásico es un instrumento musical versátil y expresivo, ideal para principiantes y músicos experimentados. Con teclas sensibles al tacto, ofrece una amplia gama de sonidos y estilos, desde pianos acústicos hasta sintetizadores modernos. Perfecto para practicar, componer y presentaciones en vivo.'},

      { title: 'Teclado Clasico Red', 
        price: 25000, 
        image: 'https://cdnx.jumpseller.com/mercurymusic/image/63154456/resize/1080/1080?1746481815',
        miniatura1: 'https://cdnx.jumpseller.com/mercurymusic/image/63154469/resize/1080/1080?1746481819',
        miniatura2: 'https://cdnx.jumpseller.com/mercurymusic/image/63154472/resize/1080/1080?1746481821',
        descripcion: 'Descubre el Teclado Clásico Red: perfecto para aprender y crear música en cualquier lugar. Su diseño compacto y teclas sensibles ofrecen comodidad y precisión. Incluye sonidos integrados, metrónomo y conectividad MIDI para una experiencia moderna y versátil. Ideal para estudiantes y músicos que buscan calidad y facilidad de uso.'},

      { title: 'Bateria Dark', 
        price: 80000, 
        image: 'https://biomusic.cl/wp-content/uploads/2022/11/bateria-pearl-roadshow-jet-black-rs525scc-31-D_NQ_NP_691555-MPE31254699226_062019-F.jpeg',
        miniatura1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_HCtNRGyX5Mubvtw9HM1uK2NrlLzHNwOHiA&s',
        miniatura2: 'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_600,h_600/https://yaparu.com/wp-content/uploads/2022/05/EM-02143-2.jpg',
        descripcion: 'La Batería Dark es ideal para músicos que buscan potencia y estilo. Su acabado oscuro y materiales resistentes garantizan durabilidad y excelente sonido. Incluye platillos, baquetas y ajuste fácil para adaptarse a cualquier espacio. Perfecta para ensayos y presentaciones en vivo.'},

      { title: 'Bateria DarkWood', 
        price: 95000, 
        image: 'https://alamomusical.com/wp-content/uploads/2020/10/a1-33.jpg',
        miniatura1: 'https://http2.mlstatic.com/D_NQ_NP_784632-MLA31592144602_072019-O.webp',
        miniatura2: 'https://http2.mlstatic.com/D_NQ_NP_758460-MLB77084437908_062024-O.webp',
        descripcion: 'La Batería DarkWood combina un diseño elegante con un sonido potente y versátil. Fabricada con maderas de alta calidad, ofrece una resonancia excepcional y durabilidad. Ideal para bateristas de todos los niveles, desde principiantes hasta profesionales, que buscan un instrumento confiable para ensayos y presentaciones en vivo.'},
        
      
    ]);
  }, []);

  return { products };
};

export default useProductsViewModel;
