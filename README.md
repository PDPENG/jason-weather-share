# 快速访问

<img src="/image/qrcode.jpg" alt="QR Code" width="200" height="200">


# 和风天气key

```js
// utils/private-key.js
export const privateKey = ''

export const freeKeyList = [
    ''
]
```

# 腾讯地图key

```js
// utils/api.js

/**
 *  逆经纬度查询
 * @param {*} lat
 * @param {*} lon
 */
export const geocoder = (lat, lon, success = () => { }, fail = () => { }) => {
    return wx.request({
        url: 'https://apis.map.qq.com/ws/geocoder/v1/',
        data: {
            location: `${lat},${lon}`,
            key: '', //你申请的腾讯位置服务key（一定要绑定自己的小程序appid） https://lbs.qq.com/dev/console/application/mine
            get_poi: 0
        },
        success,
        fail
    })
}

```

# 联系开发者

<img src="/image/gzh.jpg" alt="gzh" width="200" height="200">

> 菜单栏【联系作者】或【进交流群】
