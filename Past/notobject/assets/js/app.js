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
        }else {

            //既に商品があれば、その商品の数量に1を追加する
            _item.quantity += quantity;
        }

        //合計金額を計算して代入する
        this.total_price = this.calcTotalPrice();
        //合計数を計算して代入する
        this.total_quantity = this.calcTotalQuantity();

        return this;

    },
    //カートの商品を削除する
    remove: function (id) {

        var index = this.items.findIndex(function (item) { return item.id === id });
        if (index !== -1) {
            this.items.splice(index, 1);
        }

        this.total_price = this.calcTotalPrice();
        this.total_quantity = this.calcTotalQuantity();

        return this;
    },
    //カートの商品の数量を変更する
    changeQuantity: function (id, quantity) {

        var item = this.getItem(id);

        if (item) {
            if (quantity <= 0) {
                this.remove(item.id);
            }else{
                item.quantity = quantity;

                this.total_price = this.calcTotalPrice();
                this.total_quantity = this.calcTotalQuantity();
            }
        }

        return this;

    },
    //合計金額を計算する
    calcTotalPrice: function () {

        var total = 0;
        for (var i = 0; i < this.items.length; i++) {
            total += this.items[i].price * this.items[i].quantity;
        }

        return total;
    },
    //合計数を計算する
    calcTotalQuantity: function () {
        var total = 0;
        for (var i = 0; i < this.items.length; i++) {
            total += this.items[i].quantity;
        }
        return total;
    },
    //商品を取得する
    getItem: function (id) {
        return this.items.find(function (item) {
            return item.id === id
        });
    }
};