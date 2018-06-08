<template>
  <div id="app">
    <nav class="blue navbar">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center"><i class="material-icons left" >room</i></a>
      </div>
    </nav>

    <!-- Mapをレンダリング -->

    <div class="side-area">
      <div class="side-area-inner">

        <div class="row">
          <div class="col s12">
            <div id="searchBox" v-on:submit.prevent="submit">
              <form class="row" id="search">
                <div class="col s6 input-field">
                  <input type="date" ref="in" v-model="checkinDate" v-on:change="changeDate" name="checkinDate" id="date1" class="datepicker">
                  <label for="date1">チェックイン日</label>
                </div>

                <div class="col s6 input-field">
                  <input type="date" ref="out" v-model="checkoutDate" v-on:change="changeDate" name="checkoutDate" id="date2" class="datepicker">
                  <label for="date2">チェックアウト日</label>
                </div>

                <div class="col s12 input-field">
                  <input type="number" v-model="adultNum" name="adultNum" id="adult_num">
                  <label for="adult_num">大人人数</label>
                </div>
                <div class="col s12 l6 offset-l3">
                  <button type="submit" class="btn btn-block blue" style="width: 100%;"><i class="material-icons left">search</i>検索する</button>
                </div>
              </form>

            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s12" id="results-wrap">
            <!-- Cardをレンダリング -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // Cardを読込
  // Mapを読込
  // jQueryを読込

export default {
  name: 'app',
  components: {
  },

  data () {
    return {
      // プランモデル
      // 地図のセンター位置（{ lat: 緯度, lng: 経度 }）/ HALの場所を初期位置に設定: { lat: 34.699875, lng: 135.493032 };
      // チェックイン日
      // チェックアウト日
      // 大人人数
    }
  },

  mounted: function () {
    // 日付オプションを指定
    // Datepickerを呼出しする
  },

  update: function () {
    console.log("updated");
  },

  methods: {
    // 検索を実施
    // 楽天APIにjQueryを使ってgetリクエストを送信し、コールバックでプランを設定する
  }
}
</script>

<style>
  .navbar {
    position: relative;
    z-index: 10;
  }

  .main-area,
  .side-area {
    position: fixed;
    width: 70%;
    height: 100%;
    background: #fff;
    right: 0;
    top: 50px;
    overflow-y: scroll;
  }

  .side-area {
    width: 30%;
    min-width: 400px;
    right: auto;
    left: 0;
    border-right: 1px solid #ccc;
  }

  .main-area-inner,
  .side-area-inner {
    padding-top: 64px;
  }
</style>
