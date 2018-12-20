//index.js
const app = getApp()

Page({

  send: function () {
    wx.request({
      url: 'https://api.heclouds.com/devices/505474421/datapoints',
      header: {
        'api-key': 't80tIX=ihtW8YHSH2SVCiIIv0XY='
      },
      method: 'POST',
      data:
        {
          "datastreams": [{
            "id": "control",
            "datapoints": [{
              "at": "2020-04-22T00:35:43",
              "value": "aaaa"
            },
            ]
          }],

        },
      success(res) {
        console.log(res.data)
      }
    })
  },
      send1: function () {
    wx.request({
      url: 'https://api.heclouds.com/devices/505474421/datapoints',
      header: {
        'api-key': 't80tIX=ihtW8YHSH2SVCiIIv0XY='
      },
      method: 'POST',
      data:
        {
          "datastreams": [{
            "id": "control",
            "datapoints": [{
              "at": "2020-04-22T00:35:43",
              "value": "bbbb"
            },
            ]
          }],

        },
      success(res) {
        console.log(res.data)
      }
    })
  },


    send2: function () {
    wx.request({
      url: 'https://api.heclouds.com/devices/505474421/datapoints',
      header: {
        'api-key': 't80tIX=ihtW8YHSH2SVCiIIv0XY='
      },
      method: 'POST',
      data: 
        {
          "datastreams": [{
            "id": "control",
            "datapoints": [{
              "at": "2020-04-22T00:35:43",
              "value": "cccc"
            },
            ]
          }],
    
        },
      success(res) {
        console.log(res.data)
      }
    })
  },
      send3: function () {
    wx.request({
      url: 'https://api.heclouds.com/devices/505474421/datapoints',
      header: {
        'api-key': 't80tIX=ihtW8YHSH2SVCiIIv0XY='
      },
      method: 'POST',
      data:
        {
          "datastreams": [{
            "id": "control",
            "datapoints": [{
              "at": "2020-04-22T00:35:43",
              "value": "dddd"
            },
            ]
          }],

        },
      success(res) {
        console.log(res.data)
      }
    })
  }

})
