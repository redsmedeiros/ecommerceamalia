import bcrypt from 'bcryptjs'

const data = {

    users:[
        {
            name: "Teste1",
            email: "teste1@teste.com",
            password: bcrypt.hashSync('123456'),
            isAdmin: true                  
        },
        {
            name: "Teste2",
            email: "teste2@teste.com",
            password: bcrypt.hashSync('123456'),
            isAdmin: false 
        }
    ],

    products:[
        {
            //_id: '1',
            name: "Curso RPPS",
            slug: "prev-teste-prev1",
            category: "cursos",
            image: "/images/p1.jpg",
            price: 120,
            countInStock: 1000,
            brand: "Prev1",
            rating: 3.5,
            numReviews: 10,
            description: 'Teste dos cursos'
        },
        {
            //_id: "2",
            name: "Curso Direito Previdenciário",
            slug: "teste-teste-prev2",
            category: "cursos",
            image: "/images/p2.jpg",
            price: 120,
            countInStock: 1000,
            brand: "Prev1",
            rating: 5,
            numReviews: 10,
            description: 'Teste dos cursos'
        },
        {
            //_id: "3",
            name: "Curso RMI",
            slug: "rpps-teste-prev3",
            category: "cursos",
            image: "/images/p3.jpg",
            price: 120,
            countInStock: 1000,
            brand: "Prev1",
            rating: 4.5,
            numReviews: 10,
            description: 'Teste dos cursos'
        }

    ]

}

export default data