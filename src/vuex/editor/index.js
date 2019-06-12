import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const state = {
  editorElement: {}, // 正在编辑的元素
  editorPage: {
    elements: [
      {
        "type": "pic",
        "imgSrc": "http://api.kylinmp.cn/uploads/picstore/134/990420181110113802134.jpg",
        "videoSrc": "",
        "left": 4,
        "top": 1,
        "width": 321,
        "height": 508,
        "lineHeight": 0,
        "animatedName": "",
        "duration": 1,
        "delay": 0,
        "playing": false,
        "loop": false,
        "opacity": 100,
        "transform": 0,
        "text": "",
        "textAlign": "left",
        "iconKey": "",
        "bg": "",
        "fontSize": 18,
        "fontFamily": "微软雅黑",
        "fontWeight": "normal",
        "color": "#000000",
        "zindex": 1
      },
      {
        "type": "text",
        "imgSrc": "",
        "videoSrc": "",
        "left": 6,
        "top": 6,
        "width": 320,
        "height": 0,
        "lineHeight": 1.5,
        "animatedName": "",
        "duration": 1,
        "delay": 0,
        "playing": false,
        "loop": false,
        "opacity": 100,
        "transform": 0,
        "text": "请输入文本",
        "textAlign": "left",
        "iconKey": "",
        "bg": "",
        "fontSize": 18,
        "fontFamily": "微软雅黑",
        "fontWeight": "normal",
        "color": "#000000",
        "zindex": 2
      },
      {
        "type": "text",
        "imgSrc": "",
        "videoSrc": "",
        "left": 2,
        "top": 65,
        "width": 320,
        "height": 0,
        "lineHeight": 1.5,
        "animatedName": "",
        "duration": 1,
        "delay": 0,
        "playing": false,
        "loop": false,
        "opacity": 100,
        "transform": 0,
        "text": "请输入文本1111",
        "textAlign": "left",
        "iconKey": "",
        "bg": "",
        "fontSize": 18,
        "fontFamily": "微软雅黑",
        "fontWeight": "normal",
        "color": "#000000",
        "zindex": 3
      }
    ]
  }, // 正在编辑的页面
  themeList: [], // 用户所有主题列表

  editorTheme: {
    title: '',
    description: '',
    canvasHeight: 504
  }, // 正在编辑的主题

  picList: [], // 图片列表
  videoList: [] // 视频列表
}

export default{
  state,
  getters,
  actions,
  mutations
}
