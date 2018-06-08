(function ($, window, google) {

  // 位置情報データ
  var locations = {
    'tokyo-station': {
      lat: 35.681298,
      lng: 139.7640529
    },
    'osaka-station': {
      lat: 34.7024854,
      lng: 135.4937566
    },
    'kyoto-station': {
      lat: 34.985849,
      lng: 135.7587667
    }
  };

  // 初期表示のlocationを指定
  var init_location = locations['tokyo-station'];

  // Google Mapの取得
  // 基本の設定
  /* 基本のレンダリング */
  var map = new google.maps.Map(document.getElementById('google-map'), {
    center: init_location,
    zoom: 14
  });

  // Markerのレンダリング
  var marker = new google.maps.Marker({
    position: init_location,
    map: map,
    animation: google.maps.Animation.DROP
  });

  // ボタンに対応する位置を取得して地図を更新する

  //　京都ボタン
  $('#kyoto').click(function (e) {
    //console.log('a');
    var init_kyoto_location = locations['kyoto-station'];
    var map = new google.maps.Map(document.getElementById('google-map'), {
    center: init_kyoto_location,
    zoom: 14
  });

  // Markerのレンダリング
  var marker = new google.maps.Marker({
    position: init_kyoto_location,
    map: map,
    animation: google.maps.Animation.DROP
  });
  })

  //大阪ボタン
  $('#osaka').click(function (e) {
    //console.log('a');
    var init_osaka_location = locations['osaka-station'];
    var map = new google.maps.Map(document.getElementById('google-map'), {
    center: init_osaka_location,
    zoom: 14
  });

  // Markerのレンダリング
  var marker = new google.maps.Marker({
    position: init_osaka_location,
    map: map,
    animation: google.maps.Animation.DROP
  });
  })

  // GeoCodeで位置を取得し、地図を更新する

$('#search').click(function (e) {
    var value = $('#search-input').val();
    //console.log(value);
    var geocoder = new google.maps.Geocoder();

  var address = value;

  geocoder.geocode({ address: address }, function (resp, status) {

    console.log(resp);
    console.log(status);

      // 緯度経度を取得
      if (status === 'OK') {
        // 緯度
        var lat = resp[0].geometry.location.lat();
        // 経度
        var lng = resp[0].geometry.location.lng();

        console.log(lat, lng);

       
        
      
       var map = new google.maps.Map(document.getElementById('google-map'), {
          center: {lat : lat, lng : lng },
          zoom: 14
        });

        // Markerのレンダリング
        var marker = new google.maps.Marker({
          position: { lat: lat, lng: lng },
          map: map,
          animation: google.maps.Animation.DROP
        });

         // 地図の中央を変更する
        map.setCenter({ lat: lat, lng: lng });
      }
    
  });

})






})(jQuery, window, google);
