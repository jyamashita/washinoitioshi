console.log('load: server.js');

var Shops = new Mongo.Collection("shops");

Meteor.startup(function() {
  // data init
  Shops.remove({});
  var data = [
    { name: 'ショップデータ1',
      address: '東京都Ａ区あいうえお',
      location: { lat: '35.685947', lng: '139.759945' },
      description: 'お肉系'
    },
    { name: 'ショップデータ2',
      address: '東京都Ｂ区あいうえお',
      location: { lat: '35.674234', lng: '139.756554' },
      description: 'お肉系・お魚系'
    },
    { name: 'ショップデータ3',
      address: '東京都Ｃ区あいうえお',
      location: { lat: '35.670504', lng: '139.772476' }, 
      description: 'お魚系'
    }
  ];
  data.forEach(function(shop) {
    console.log('insert:' + JSON.stringify(shop));
    Shops.insert(shop);
  });
});

