console.log('load: server.js');

var HighlyRecommends = new Mongo.Collection("highlyrecommends");

Meteor.startup(function() {
  // data init
  HighlyRecommends.remove({});
  var data = [
    { "name" : "東京駅", "loc" : [ 35.681788, 139.766761 ], "type" : [ "名所旧跡", "その他" ], "address" : "東京都千代田区丸の内1-9-1", "url" : "http://ja.wikipedia.org/wiki/東京駅", "recommender" : "入野 潔", "date" : "2015-03-08 13:00:00", "introduce" : "2014年に100周年を迎えました。赤レンガ駅舎も復元。" },
    { "name" : "ダバインディア", "loc" : [ 35.677164, 139.768517 ], "type" : [ "食事" ], "address" : "東京都中央区八重洲２丁目7-9 相模ビル１F", "tel" : "03-3272-7160", "url" : "http://www.dhabaindia.com/", "recommender" : "入野 潔", "date" : "2015-03-08 13:00:00", "introduce" : "南インド料理。ダバミールス：バナナの葉に盛られた南インド式カレー定食" },
    { "name" : "インデアンカレー", "loc" : [ 35.678597, 139.764922 ], "type" : [ "食事" ], "address" : "東京都千代田区丸の内2-7-3 東京ビルTOKIA地下1階", "tel" : "03-3216-2336", "url" : "http://www.indiancurry.jp/shop/marunouchi.html", "recommender" : "入野 潔", "date" : "2015-03-08 13:00:00", "introduce" : "大阪のインデアンカレーを東京で。くせになります。" },
    { "name" : "たいめいけんらーめんコーナー", "loc" : [ 35.682558, 139.775611 ], "type" : [ "食事" ], "address" : "東京都中央区日本橋1-12-10", "tel" : "03-3271-2465", "url" : "https://www.taimeiken.co.jp/", "recommender" : "入野 潔", "date" : "2015-03-08 13:00:00", "introduce" : "たいめいけんの裏にある立ち食いコーナー。コールスロー、ボルシチ各50円。" },
    { "name" : "室町砂場", "loc" : [ 35.689384, 139.771769 ], "type" : [ "食事" ], "address" : "東京都中央区日本橋室町４−１−１３", "tel" : "03-3241-4038", "url" : "http://www.kibati-kai.net/02kamei/kameiten/muromati_sunaba/", "recommender" : "入野 潔", "date" : "2015-03-08 13:00:00", "introduce" : "天ざる・天もり発祥の店といわれています。大阪屋砂場の系譜。" },
    { "name" : "日本橋三越", "loc" : [ 35.685588, 139.773116 ], "type" : [ "買物" ], "address" : "東京都中央区日本橋室町１−４−１", "tel" : "03-3241-3311", "url" : "http://ja.wikipedia.org/wiki/東京駅", "recommender" : "入野 潔", "date" : "2015-03-08 13:00:00", "introduce" : "日本橋にはライオンが二頭います。" },
    { "name" : "日本橋", "loc" : [ 35.683734, 139.774362 ], "type" : [ "名所旧跡", "その他" ], "address" : "東京都中央区日本橋1丁目 ", "url" : "http://ja.wikipedia.org/wiki/日本橋_(東京都中央区)", "recommender" : "入野 潔", "date" : "2015-03-08 13:00:00", "introduce" : "日本の道路の始点。" },
    { "name" : "ラブティック ドゥ ジョエル・ロブション", "loc" : [ 35.679113, 139.763137 ], "type" : [ "食事", "カフェ", "テイクアウト" ], "address" : "東京都千代田区丸の内２−６−１ 丸の内ブリックスクエア", "tel" : "03-3217-2877", "url" : "http://www.robuchon.jp/laboutique_menu_cafe", "recommender" : "入野 潔", "date" : "2015-03-08 13:00:00", "introduce" : "店内のカフェスペースでパン・ケーキ以外にガレットなども。" },
    { "name" : "伊達の牛タン本舗", "loc" : [ 35.681788, 139.766761 ], "type" : [ "テイクアウト" ], "address" : "東京都千代田区丸の内1-9-1 東京駅 グランスタ B1F", "tel" : "03-6269-9084", "url" : "http://www.dategyu.jp/", "recommender" : "入野 潔", "date" : "2015-03-08 13:00:00", "introduce" : "厚切り芯タン弁当" },
    { "name" : "FORMA", "loc" : [ 35.681788, 139.766761 ], "type" : [ "テイクアウト" ], "address" : "東京都千代田区丸の内1-9-1 東京駅 グランスタ B1F", "tel" : "03-3211-1355", "url" : "http://www.forma-cake.jp/", "recommender" : "入野 潔", "date" : "2015-03-08 13:00:00", "introduce" : "大阪帝塚山のチーズケーキ" },
    { "name" : "大黒屋", "loc" : [ 34.392141, 132.467197 ], "type" : [ "食事" ], "address" : "広島県広島市中区銀山町5-3", "tel" : "082-241-0847", "recommender" : "入野 潔", "date" : "2015-03-08 13:00:00", "introduce" : "出雲そば" },
    { "name" : "王", "loc" : [ 34.390925, 132.464958 ], "type" : [ "食事" ], "address" : "広島県広島市中区薬研堀３−１７", "tel" : "082-241-3644", "recommender" : "入野 潔", "date" : "2015-03-08 13:00:00", "introduce" : "餃子" },
    { "name" : "新京", "loc" : [ 34.389616, 132.464481 ], "type" : [ "食事" ], "address" : "広島県広島市中区流川町５−９", "tel" : "082-241-1406", "recommender" : "入野 潔", "date" : "2015-03-08 13:00:00", "introduce" : "食堂" },
    { "name" : "八丁堀交差点", "loc" : [ 34.393793, 139.463515 ], "type" : [ "名所旧跡", "その他" ], "address" : "広島県広島市中区八丁堀", "url" : "ja.wikipedia.org/wiki/紙屋町・八丁堀", "recommender" : "入野 潔", "date" : "2015-03-08 13:00:00", "introduce" : "八丁左回り（笑）" }
  ];
  data.forEach(function(highlyRecommend) {
    console.log('insert:' + JSON.stringify(highlyRecommend));
    HighlyRecommends.insert(highlyRecommend);
  });
});

