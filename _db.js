let restaurants = [
    {id: '1', name: 'Jollibee', branches: ['Gaisano', 'SM Downtown', 'Centrio', 'Limketkai']},
    {id: '2', name: 'Chowking', branches: ['Gaisano', 'SM Downtown', 'Centrio', 'Limketkai']},
    {id: '3', name: 'McDonalds', branches: ['Limketkai']},
    {id: '4', name: 'Mang Inasal', branches: ['Gaisano', 'SM Downtown', 'Centrio', 'Limketkai']},
    {id: '5', name: 'Greenwich', branches: ['SM Downtown', 'Centrio', 'Limketkai']},
]

let authors = [
    {id: '1', name: 'John', verified: true},
    {id: '2', name: 'Jane', verified: false},
    {id: '3', name: 'Mary', verified: true},
]

let reviews = [
    {id: '1', rating: 9, content: 'Friendly service and a filling meal for a good price. Definitely recommend!', author_id: '1', restaurant_id: '2', restaurant_name: 'Chowking'},
    {id: '2', rating: 7, content: 'Late night Jollibee fix hit the spot. Chicken sandwich greasy, but fries were good.', author_id: '2', restaurant_id: '1', restaurant_name: 'Jollibee'},
    {id: '3', rating: 5, content: 'Hit or miss with mobile orders. Food is okay, but sometimes cold.', author_id: '3', restaurant_id: '3', restaurant_name: 'McDonalds'},
    {id: '4', rating: 9, content: 'Craving unlimited rice? Mang Inasal is your spot.', author_id: '2', restaurant_id: '4', restaurant_name: 'Mang Inasal'},
    {id: '5', rating: 4, content: 'Greenwich Overload? More like Overpriced! Good pizza, but a bit pricey for the size.', author_id: '2', restaurant_id: '5', restaurant_name: 'Greenwich'},
    {id: '6', rating: 8, content: 'Tasty and affordable!', author_id: '1', restaurant_id: '2', restaurant_name: 'Chowking'},
    {id: '7', rating: 10, content: 'Yum! Chickenjoy is juicy and the peach mango pie is heavenly.', author_id: '3', restaurant_id: '1', restaurant_name: 'McDonalds'},
]

export default { restaurants, authors, reviews }