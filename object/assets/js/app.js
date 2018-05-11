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
    //合計数
    total_quantity: 0,
    //合計金額
    total_price: 0,
    //カートに入っている商品一覧
    items: [],
    //カートに商品を追加する
    add: function (item, quantity) {
        console.log("item", item);
        console.log("quantity", quantity);

        var _item;

        //既にカートに商品が登録されているか確認
        _item = this.getItem(item.id);

        //もし、itemがundefinedなら雨品を追加する
        if (_item === undefined) {
            //商品情報をコピーして、quanittyを追加する
            // item.quantity = quantity;←これは間違い
            _item = Object.assign({},item, {quantity: quantity});

            this.items.push(_item);
        }
    },
    //カートの商品を削除する
    remove: function () {

    },
    //カートの商品の数量を変更する
    changeQuantity: function () {

    },
    //合計金額を計算する
    calcTotalPrice: function () {

    },
    //合計数を計算する
    calcTotalQuantity: function () {

    },
    //商品を取得する
    getItem: function () {
        return this.items.find(function (item) {
            return item.id === id
        });
    }
};