//スコープの作成
(function ($, w) {

	var map_wrapper = document.getElementById("google-map");
	// var map_wrapper = $("#google-map")[0];

	var hal_location = { lat: 34.7012972, lng: 135.4913901 };

	// Mapを作成する
	var map = new google.maps.Map(map_wrapper, {
		center: hal_location,
		zoom: 18
	});

	// Markerを作成する
	var marker = new google.maps.Marker({
		position: hal_location,
		map: map
	});

	// 住所から緯度経度を取得する
	var geocoder = new google.maps.Geocoder();

	var address = "京都府京都市下京区東塩小路町607-10";

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
			
		}
		
	});

	

})(jQuery, window);
