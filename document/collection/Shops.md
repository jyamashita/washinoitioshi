# Shops
| 物理名      | 内容        |  データ型    | 備考         |
|:------------|:------------|:-------------|:-------------|
| _id         | ショップID  | String       |IDENTITY      |
| name        | ショップ名  | String       |              |
| description | 説明        | String       |              |
| address     | 住所        | String       |              |
| location    | 位置情報    | Location     |              |
| updateDate　| 更新日時    | Date         |              |
| createDate  | 作成日時    | Date         |              |

## Location
| 物理名      | 内容        | データ型     | 備考         |
|:-----------:|:------------|:-------------|:-------------|
| lat         | 緯度        | String       |              |
| lng         | 経度        | String       |              |


## Sample
```json
{
  "_id": "zsGtrFu",
  "name": "わしのいちおし",
  "description": "創作居酒屋",
  "address": "東京都大田区蒲田XXX",
  "location": { "lat": "35.563495", "lng": "139.717516" },
  "updateDate": "2013-01-01 00:00:00",
  "createDate": "2013-01-01 00:00:00"
}
```
