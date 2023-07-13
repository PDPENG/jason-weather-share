
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
