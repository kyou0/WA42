/**
買い物かごをJavaScriptオブジェクトで再現する
**/

var items = [
    {
        id: 1,
        name: 'ノート',
        image: 'note.png',
        price: 150
    },
    {
        id: 2,
        name: 'ペン',
        image: 'pen.png',
        price: 300
    },
    {
        id: 3,
        name: '消しゴム',
        image: 'eraser.png',
        price: 1000
    }
];

var cart = {
    total_quantity: 0,
    total_price: 0,
};