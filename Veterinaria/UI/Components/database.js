export const categories = [
    { 
        id: '1', 
        name: 'Electronics', 
        image: 'https://flare.pk/wp-content/uploads/2023/01/1-1-650x353.jpg' 
    },
    { 
        id: '2', 
        name: 'Fashion', 
        image: 'https://img.freepik.com/vector-gratis/ilustraciones-moda_23-2147492196.jpg' 
    },
    { 
        id: '3', 
        name: 'Home & Kitchen', 
        image: 'https://prolinerangehoods.com/cdn/shop/articles/whats-in-a-chefs-dream-home-kitchen-essential-elements-846719.jpg?v=1719132276' 
    },
    { 
        id: '4', 
        name: 'Books', 
        image: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,dpr_3/https://assets.app.engoo.com/images/6runWm75P2cDHaU34pL0Io.jpeg' 
    },
    { 
        id: '5', 
        name: 'Sports', 
        image: 'https://pre-webunwto.s3.eu-west-1.amazonaws.com/2020-01/sport-congresse.jpg' 
    },
];

export const items = [
    { 
        id: '1', 
        categoryId: '1', 
        name: 'Smartphone', 
        description: 'Latest model with advanced features.', 
        image: 'https://m.media-amazon.com/images/I/61qJX973fRL._AC_UF894,1000_QL80_.jpg',
        value: 10000,
        quantity: 1,
        favorites: { 
            status: 'Disponible' 
        },
        offers: { 
            discount: 10 
        },
        purchases: { 
            status: 'Entregado' 
        }
    },
    { 
        id: '2', 
        categoryId: '2', 
        name: 'Leather Jacket', 
        description: 'Stylish and durable leather jacket.', 
        image: 'https://www.schottnyc.com/images/1300x2000/519_BLK_FNT_NEW1.jpg',
        value: 15000,
        quantity: 1,
        favorites: { 
            status: 'No disponible' 
        },
        offers: { 
            discount: 15 
        },
        purchases: { 
            status: 'En tránsito' 
        }
    },
    { 
        id: '3', 
        categoryId: '3', 
        name: 'Blender', 
        description: 'High-performance blender for smoothies and soups.', 
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiH7zv6vHVceonhiE5G54vYnrHemoenmKxIN4ZdOgbLC3agHmEBVERi4odaXFe2TDEwkzHJqk2EhTQjSnKzTDVXYGuorRDa83YWJiACAcEoT_WlFGqm7jP5SCMpR44YGYtBr_SMqyuqitk/s1600/render_final.jpg',
        value: 5000,
        quantity: 1,
        favorites: { 
            status: 'Disponible' 
        },
        offers: { 
            discount: 5 
        },
        purchases: { 
            status: 'Cancelado' 
        }
    },
    { 
        id: '4', 
        categoryId: '4', 
        name: 'The Great Gatsby', 
        description: 'A classic novel by F. Scott Fitzgerald.', 
        image: 'https://miro.medium.com/v2/resize:fit:500/0*R__G0x9FqfzO-pei.jpg',
        value: 12000,
        quantity: 1,
        favorites: { 
            status: 'Disponible' 
        },
        offers: { 
            discount: 25 
        },
        purchases: { 
            status: 'Entregado' 
        }
    },
    { 
        id: '5', 
        categoryId: '5', 
        name: 'Yoga Mat', 
        description: 'Non-slip yoga mat for comfortable exercise.', 
        image: 'https://www.turningpointe.ae/wp-content/uploads/2021/08/Yoga-Mat-multicolor72.jpg',
        value: 8000,
        quantity: 1,
        favorites: { 
            status: 'Disponible' 
        },
        offers: { 
            discount: 20 
        },
        purchases: { 
            status: 'En tránsito' 
        }
    },
];

export const favorites = items.map(item => ({
    ...item,
    status: item.favorites.status
}));

export const offers = items.map(item => ({
    ...item,
    discount: item.offers.discount
}));

export const purchases = items.map(item => ({
    ...item,
    status: item.purchases.status
}));