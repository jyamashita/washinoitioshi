# HighlyRecommend
| 物理名      | 内容        |  データ型    | 備考         |
|:------------|:------------|:-------------|:-------------|
| _id         | ショップID  | String       |IDENTITY      |
| name        | ショップ名  | String       |              |
| loc         | 位置情報    | Array<String>|              |
| types       | タイプ      | String       |              |
| address     | 住所        | String       |              |
| tel         | 電話番号    | String       |              |
| url         | URL         | String       |              |
| recommender |             | String       |              |
| date        |             | String       |              |
| introduce   |             | String       |              |
| comments    |             | String       |              |
| photos      |             | String       |              |
| updateDate　| 更新日時    | Date         |              |
| createDate  | 作成日時    | Date         |              |


## Sample
```json
name:
loc:[ "緯度", "経度" ]
types: ["食事", "カフェ", "テイクアウト", "買い物", "名所旧跡", "その他"]
address: "東京大田区XXXX",
tel: "000-000-000",
url: "http://example.com/",
recommender: "",
date: "2013-01-01 13:13:13",
introduce: "",
comments: ["commentator", "date", "comment"]
photos: ["uploader", "date", "title", "photoid"]
```
