/**
 買い物かごをJavaScriptオブジェクトで再現する

 1. 前回作ったカートオプジェクトを使ってカートのビューを実装
  ・jQueryを使ってビューをレンダリング
 2. 商品一覧のビューを実装
  ・アンダースコアのテンプレートエンジンを使ってビューを実装
 **/

var App = App || {};

App.models = {
  items :[
    {
      id: 1,
      name: "ノート",
      price: 150,
      image: "assets/img/note.jpg"
    },
    {
      id: 2,
      name: "ペン",
      price: 300,
      image: "assets/img/pen.jpg"
    },
    {
      id: 3,
      name: "バッグ",
      price: 13000,
      image: "assets/img/bag.jpg"
    },
  ]
};

// カートオブジェクトを定義
App.cart = {
  // 合計数
  total_quantity: 0,
  // 合計金額
  total_price: 0,
  // カートに入っている商品一覧
  items: [],
  // カートに商品を追加する
  add: function (item, quantity) {
    var _item;

    // すでにカートに商品が登録されているか確認
    _item = this.getItem(item.id);

    // もし、_itemがundefinedなら、商品を追加する
    if (_item === undefined) {
      // 商品情報をコピーして、quantityを追加する
      _item = Object.assign({},item,{ quantity: quantity });
      this.items.push(_item);     
    } else {
      // すでに商品があれば、商品の個数に1を加算する
      _item.quantity += quantity;
    }
    // 合計金額を計算して代入する
    this.total_price = this.calcTotalPrice();
    // 合計個数を計算して代入する
    this.total_quantity = this.calcTotalQuantity();

    return this;
  },
  // カートの商品を削除する
  remove: function (id) {
    // カートの商品のインデックスを取得する
    var index = this.items.findIndex(function (item) { return item.id === id });
    // 商品のインデックスが-1以外(取得できたら)なら削除を実行する
    if (index !== -1 ) {
      this.items.splice(index, 1);
    }

    this.total_price = this.calcTotalPrice();
    this.total_quantity = this.calcTotalQuantity();

    return this;

  },
  // カートに商品の数量を変更する
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
    //this.total_price = this.calcTotalPrice();
    //this.total_quantity = this.calcTotalQuantity();
    return this;
  },
  // 合計金額を計算する
  calcTotalPrice: function () {
    var total = 0;
    for (var i = 0; i < this.items.length ; i++) {
      total += this.items[i].price * this.items[i].quantity;
    }
    return total;
  },
  // 合計数を計算する
  calcTotalQuantity: function () {
    var total = 0;
    for (var i = 0; i < this.items.length ; i++) {
      total += this.items[i].quantity;
    }
    return total;
  },
  // 商品を取得する
  getItem: function (id) {
    return this.items.find(function (item) { return item.id === id });
  },
  render: function () {
    var $elem = $("#cart-items");

    //ビューをリセットする
    $elem.empty();

    // カートの中身をループしてレンダリングする
    this.items.forEach(function (item) {
      var view = "<tr>";
      // 商品名
      view += "<td>"+item.name+"</td>";
      // 商品点数
      view += '<td><input data-item-index="'+ item.id +'" value="'+ item.quantity +'" type="number" class="js-change-quantity" size="2">個</td>';
      // 商品の合計金額
      view += '<td class="right-align">'+ (item.price * item.quantity) +'</td>';
      // 削除ボタン 
      view += '<td class="center-align"><button data-item-index="'+ item.id +'" class="btn red js-remove-item">削除</button></td>';
      view += "</tr>";

      $elem.append(view);
    })

    // イベントを設定する
    var that = this;

    // 削除ボタンのイベント
    $elem.find(".js-remove-item").on("click", function (event) {
      //console.log(this);
      var id = $(this).data("item-index");
      console.log(id);
      // 削除実行
      that.remove(id);
      // 再レンダリング
      that.render();
    });

    //数量変更のイベント
    $elem.find(".js-change-quantity").on("change", function (event) {
      var id = $(this).data("item-index");
      var quantity = parseInt($(this).val());

      console.log(id);
      console.log(quantity);

      // 数量を変更する
      that.changeQuantity(id, quantity);
      // 再レンダリング
      that.render();

    });

    // 合計数と合計金額の変更をする
    $("#cart .total-quantity").text(this.total_quantity + "点");
    $("#cart .total-price").text(this.total_price + "円");

  }

};;

// 商品一覧のオブジェクトを定義
App.items = {

  // カートに商品を入れる
  addToCart: function (id) {

    var item = this.getItem(id);

    //typeof item !== 'undefined'も可
    if (item !== undefined) {
      App.cart.add(item, 1);
    }

  },

  // 商品モデルから取得したIDの商品を取得する
  getItem: function (id) {
    return App.models.items.find(function(item) { return item.id === id })
  },

  render: function () {
    var $elem = $("#items");
    $elem.empty();
    // テンプレートを作成
    var template = _.template($("#item-list").html());

    App.models.items.forEach(function (item) {
      $elem.append(template(item));
    });

    var that = this;

    // イベントを設定する
    $(".js-add-to-cart").on("click", function (event) {
      var id = $(this).data("item-index");
      // 商品IDを使ってカートに商品を入れる
      that.addToCart(id);
      App.cart.render();
    });

  }
};

// 初期処理を定義
App.init = function () {
  this.cart.render();
  this.items.render();
};

// 初期処理を実行
App.init();
