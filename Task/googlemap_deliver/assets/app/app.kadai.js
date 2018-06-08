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
  $('#station').on('click', function (event) {
    var data = event.target.getAttribute('data-location')
    map.setCenter(new google.maps.LatLng(locations[data]))
    marker.setPosition(new google.maps.LatLng(locations[data]))
  })

  $('#locate').on('click', function () {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude))
        marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude))
      })
  })

  // GeoCodeで位置を取得し、地図を更新する
    $('#search').on('click', function() {
        var geocoder = new google.maps.Geocoder()
        var address = document.getElementById('search-input').value

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

                // 地図の中央を変更する
                map.setCenter({ lat: lat, lng: lng });
                marker.setPosition(new google.maps.LatLng(lat, lng));
            }
        });
    })
})(jQuery, window, google);
