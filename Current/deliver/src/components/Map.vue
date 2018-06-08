<template>
  <div class="main-area">
    <div class="main-area-inner">
      <div id="map" ref="map"></div>
    </div>
  </div>
</template>

<script>
  export default {

    // 親のコンポーネントからpropsでdataを受け取る
    props: [],

    data () {
      return {
        // Map Objectを保存する
        // Markerオブジェクトを配列で保存する
      }
    },

    mounted: function () {

      // コンポーネントをマウントしたときに実行する。
      // Mapの初期処理を実行する

      // マップのイベントを設定
      // センター位置が変わったときに処理を実行する

    },

    // propsの変更を監視し、変更が加わったら処理を実行する
    watch: {
      // ホテルの位置をマップに表示する
    },

    methods: {
    }

  }

</script>

<style>
  #map {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #ccc;
  }
</style>