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
App.cart = {};

// 商品一覧のオブジェクトを定義
App.items = {};

// 初期処理を定義
App.init = function () {};

// 初期処理を実行
App.init();
