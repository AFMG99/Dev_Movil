export const categories = [
    {
        id: '1',
        name: 'Tecnología',
        image: 'https://flare.pk/wp-content/uploads/2023/01/1-1-650x353.jpg'
    },
    {
        id: '2',
        name: 'Moda',
        image: 'https://img.freepik.com/vector-gratis/ilustraciones-moda_23-2147492196.jpg'
    },
    {
        id: '3',
        name: 'Hogar y cocina',
        image: 'https://prolinerangehoods.com/cdn/shop/articles/whats-in-a-chefs-dream-home-kitchen-essential-elements-846719.jpg?v=1719132276'
    },
    {
        id: '4',
        name: 'Libros',
        image: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,dpr_3/https://assets.app.engoo.com/images/6runWm75P2cDHaU34pL0Io.jpeg'
    },
    {
        id: '5',
        name: 'Deportes',
        image: 'https://pre-webunwto.s3.eu-west-1.amazonaws.com/2020-01/sport-congresse.jpg'
    },
];

export const items = [
    {
        id: '1',
        categoryId: '1',
        name: 'Smartphone',
        description: 'Último modelo con características avanzadas.',
        image: 'https://m.media-amazon.com/images/I/61qJX973fRL._AC_UF894,1000_QL80_.jpg',
        value: 10000,
        count: 1,
        rating: 4,
        status: 'Disponible',
        offers: {
            discount: 10
        },
        condition: 'Entregado',
    },
    {
        id: '2',
        categoryId: '2',
        name: 'Chaqueta de Cuero',
        description: 'Chaqueta de cuero elegante y duradera.',
        image: 'https://www.schottnyc.com/images/1300x2000/519_BLK_FNT_NEW1.jpg',
        value: 15000,
        count: 1,
        rating: 3,
        status: 'No disponible',
        offers: {
            discount: 15
        },
        condition: 'En tránsito',
    },
    {
        id: '3',
        categoryId: '3',
        name: 'Licadora',
        description: 'Licadora de alto rendimiento para batidos y sopas.',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiH7zv6vHVceonhiE5G54vYnrHemoenmKxIN4ZdOgbLC3agHmEBVERi4odaXFe2TDEwkzHJqk2EhTQjSnKzTDVXYGuorRDa83YWJiACAcEoT_WlFGqm7jP5SCMpR44YGYtBr_SMqyuqitk/s1600/render_final.jpg',
        value: 5000,
        count: 1,
        rating: 2,
        status: 'Disponible',
        offers: {
            discount: 5
        },
        condition: 'Cancelado',

    },
    {
        id: '4',
        categoryId: '4',
        name: 'El Gran Gatsby',
        description: 'Una novela clásica de F. Scott Fitzgerald.',
        image: 'https://miro.medium.com/v2/resize:fit:500/0*R__G0x9FqfzO-pei.jpg',
        value: 12000,
        count: 1,
        rating: 2,
        status: 'Disponible',
        offers: {
            discount: 25
        },
        condition: 'Entregado',
    },
    {
        id: '5',
        categoryId: '5',
        name: 'Esterilla de Yoga',
        description: 'Esterilla de yoga antideslizante para un ejercicio cómodo.',
        image: 'https://www.turningpointe.ae/wp-content/uploads/2021/08/Yoga-Mat-multicolor72.jpg',
        value: 8000,
        count: 1,
        rating: 4,
        status: 'Disponible',
        offers: {
            discount: 20
        },
        condition: 'En tránsito',
    },
];

export const user = {
    id: '1',
    firstName: 'Juan',
    lastName: 'Pérez',
    birthDate: '15/08/1985',
    photo: 'https://example.com/photo.jpg',
};

export const offers = items.map(item => ({
    ...item,
    discount: item.offers.discount
}));