#コレクション

## Shops
| 物理名      | 内容        |  データ型    | 備考         |
|:------------|:------------|:-------------|:-------------|
| _db         | ショップID  | String       |IDENTITY      |
| name        | ショップ名  | String       |              |
| description | 説明        | String       |              |
| address     | 住所        | String       |              |
| location    | 位置情報    | Location     |              |
| updateDate　| 更新日時    | Date         |              |
| createDate  | 作成日時    | Date         |              |

### Location
| 内容        | 内容        | データ型     | 備考         |
|:-----------:|:------------|:-------------|:-------------|
| lat         | 緯度        | String       |              |
| lng         | 経度        | String       |              |


### Sample
```javascript
{
  _db: '',
  name: ''
}
```
