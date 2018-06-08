/**
買い物かごをJavaScriptオブジェクトで再現する
**/

var items = [
	{
		id: 1,
		name: 'ノート',
		image: 'image.png',
		price: 150
	},
	{
		id: 2,
		name: 'ペン',
		image: 'image.png',
		price: 300
	},
	{
		id: 3,
		name: '消しゴム',
		image: 'image.png',
		price: 150
	}
];


var cart = {
	// 合計数
	total_quantity: 0,
	// 合計金額
	total_price: 0,
	// カートに入っている商品一覧
	items: [],
	// カートに商品を追加する
	add: function (item, quantity) {

		console.log("item:", item);
		console.log("quantity:", quantity);

		var _item;

		// すでにカートに商品が登録されているか確認
		_item = this.getItem(item.id);

		// もし、_itemがundefinedなら、商品を追加する
		if (_item === undefined) {

			//商品情報をコピーして、quantityを追加する
			_item = Object.assign({}, item, { quantity: quantity });
			this.items.push(_item);

		} else {

			// すでに商品があれば、その商品の数量に１追加する
			_item.quantity += quantity;

		}

		// 合計金額を計算して代入する
		this.total_price = this.calcTotalPrice();
		// 合計数を計算して代入する
		this.total_quantity = this.calcTotalQuantity();

		return this;

	},
	// カートの商品を削除する
	remove: function (id) {

		// カートの商品のインデックスを取得する
		var index = this.items.findIndex(function (item) { return item.id === id });
		// 商品のインデックスが-1以外(取得できたら)なら削除を実行する
		if ( index !== -1 ) {
			this.items.splice(index, 1);
		}

		this.total_price = this.calcTotalPrice();
		this.total_quantity = this.calcTotalQuantity();

		return this;

	},
	// カートの商品の数量を変更する
	changeQuantity: function (id, quantity) {

		var item = this.getItem(id);
		if (item) {

			if (quantity <= 0) {
				this.remove(item.id);
			} else {
				item.quantity = quantity;
				this.total_price = this.calcTotalPrice();
				this.total_quantity = this.calcTotalQuantity();
			}

		}

		return this;

	},
	// 合計金額を計算する
	calcTotalPrice: function () {

		var total = 0;
		for (var i = 0; i < this.items.length; i++) {
			total += this.items[i].price * this.items[i].quantity;
		}

		return total;
	},
	// 合計数を計算する
	calcTotalQuantity: function () {

		var total = 0;
		for (var i = 0; i < this.items.length; i++) {
			total += this.items[i].quantity;
		}

		return total;
	},
	// 商品を取得する
	getItem: function (id) {
		return this.items.find(function (item) { return item.id === id });
	}
};




