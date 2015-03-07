# HighlyRecommend
| 物理名      | 内容        |  データ型      | 備考         |
|:------------|:------------|:---------------|:-------------|
| _id         | ショップID  | String         |IDENTITY      |
| name        | ショップ名  | String         |              |
| loc         | 位置情報    | Point          |2D Index      |
| types       | タイプ      | Array<String>  |              |
| address     | 住所        | String         |              |
| tel         | 電話番号    | String         |              |
| url         | URL         | String         |              |
| recommender | 推薦者      | String         |              |
| date        | 日時        | Date           |              |
| introduce   | 紹介文      | String         |              |
| comments    | コメント    | Array<Comment> |              |
| photos      | 写真        | Array<Photo>   |              |
| updateDate　| 更新日時    | Date           |              |
| createDate  | 作成日時    | Date           |              |

#Comment
| 物理名      | 内容        |  データ型      | 備考         |
|:------------|:------------|:---------------|:-------------|
| _id         | コメントID  | String         |IDENTITY      |
| commentator | コメント者  | String         |              |
| date        | 日時        | Date           |              |
| comment     | コメント    | String         |              |

[Comment](https://github.com/jyamashita/washinoitioshi/blob/master/document/collection/Comment.md)

#Photo(実体は別スキーマ)
| 物理名      | 内容        |  データ型      | 備考         |
|:------------|:------------|:---------------|:-------------|
| _id         | 写真ID      | String         |IDENTITY      |
| uploader    | 登録者      | String         |              |
| date        | 日時        | Date           |              |
| title       | タイトル    | String         |              |
| photid      | 写真ID      | String         |              |

## Sample
```json
{
  "_id": "zsGtrFu",
  "name": "東京駅",
  "loc": [ 35.681382 , 139.766084 ],
  "types": ["食事", "カフェ", "テイクアウト", "買い物", "名所旧跡", "その他"],
  "address": "千代田区丸の内１－９－１",
  "tel": "000-000-000",
  "url": "ja.wikipedia.org/wiki/東京駅",
  "recommender": "入野　潔",
  "date": "2015-01-01 13:13:13",
  "introduce": "2014年に百周年を迎えました。赤レンガ駅舎が復原。",
  "comments": [{"commentator": "森田　秀明", "date": "2015-02-02 02:02:02", "comment": "東京駅開業100周年記念Suica当りました"},
               {"commentator": "山下　順平", "date": "2015-02-02 02:02:02", "comment": "..."}],
  "photos": [{"uploader": "田中　瑞規", "date": "2013-03-03 13:13:13", "title": "０地点", "photoid": "12345"}]
}
```
