/*
这个文件export实验室成员的信息
建议把全部代码折叠起来就很清晰
*/
import PhDImgPath from "vitePluginDirInfo/profiles/phd"
import graduateStudentsImgPath from "vitePluginDirInfo/profiles/graduate"

const BASE = import.meta.env.BASE_URL
/*把图片路径中提取人名的函数, 返回{名字, 路径}*/
function tyb(path) {
  let a = path.split("/").pop().split('.').slice(1,-1)
  let name = a.join(" / ")
  let p = path
  if(path.split(".").pop()=="null")
    p = BASE+"profiles/default.jpg"
  return {"name":name,"profile":p}
}

/*老师们的信息*/
const senses = [
    {
      "name": "李永杰 / Yongjie Li",
      "rank": "Ph.D., Professor",
      "profile": BASE+"profiles/sense/lyj.jpg",
      "research_interests":"Computational modeling of visual information processing mechanisms"
    }, {
      "name": "颜红梅 / Hongmei Yan",
      "rank": "Ph.D.,Professor",
      "profile": BASE+"profiles/sense/yhm.jpg",
      "research_interests":"Visual cognition, visual attention, eye movements, and visual computing"
    }, {
      "name": "王玲 / Ling Wang",
      "rank": "Ph.D., Professor",
      "profile": BASE+"profiles/sense/wl.jpg",
      "research_interests":"Visual cognition, visual attention, eye movements, and visual computing"
    },{
      "name": "游宏志 / Hongzhi You",
      "rank": "Ph.D., Associate Professor",
      "profile": BASE+"profiles/sense/yhz.jpg",
      "research_interests":"Computational Neuroscience"
    }, {
      "name": "杨开富 / Kaifu Yang ",
      "rank": "Ph.D., 副研究员",
      "profile": BASE+"profiles/sense/ykf.jpg",
      "research_interests":"Brain-inspired Computer Vision, Image processing"
    }, {
      "name": "张显石 / Xianshi Zhang",
      "rank": "Ph.D., 助理研究员",
      "profile": BASE+"profiles/sense/zxs.jpg",
      "research_interests":"Brain-inspired Computer Vision, Image processing"
    }, {
      "name": "深切缅怀李朝义院士",
      "rank": "",
      "profile": BASE+"profiles/sense/lcy.jpg",
      "research_interests":"中国共产党优秀党员，著名神经生物学家，中国科学院院士，中国科学院上海生命科学研究院研究员，电子科技大学双聘院士、生命科学与技术学院教授、视觉认知与类脑计算实验室主任、神经信息教育部重点实验室学术委员会名誉主任、博士生导师李朝义先生，因病医治无效，不幸于2018年8月11日18时49分在上海市第六人民医院逝世，享年八十五岁。"
    }
  ]

/*博士和硕士的信息是根据图片名自动生成的不用管它*/
const PhDs = PhDImgPath.map(p=>tyb(p))
const graduate_students = graduateStudentsImgPath.map(p=>tyb(p)).reverse()

/*已经毕业的同学的名字*/
const former_students = [
    {
      "year":"2020",
      "names":[
        "程凯文 | Kaiwen Chen",
        "陈杨 | Yang Chen",
        "孙搏浪 | Bolang Sun",
        "杨天 | Tian Yang",
        "王博 | Bo Wang",
        "姜文文 | Wenwen Jiang",
        "詹腾飞 | Tengfei Zhan",
        "卓义轩 | Yixuan Zhuo",
        "秦龙 | Long Qin",
        "叶明 | Ming Ye",
        "杜逸昌 | Yichang Du",
        "苏炤昊 | Zhaohao Su"
      ]
    },
    {
      "year": "2019",
      "names": [
        "赵翌蕾 | Yilei Zhao",
        "赵乾 | Qian Zhao",
        "刘卓 | Zhuo Liu",
        "黄飞云 | Feiyun Huang",
        "刘秩铭 | Zhiming Liu",
        "蒋平帆 | Pingfan Jiang",
        "杨晓青 | Xiaoqing Yang",
        "陈诚 | Cheng Chen"
      ]
    }, {
      "year": "2018",
      "names": [
        "刘玉红 | Yuhong Liu",
        "邓涛 | Tao Deng",
        "张明 | Ming Zhang",
        "梁晓花 | Xiaohua Liang",
        "杨珂宇 | Keyu Yang",
        "李晔华 | Yehua Li",
        "刘然 | Ran Liu",
        "胡蝶 | Die Hu",
        "李强斌 | Qiangbin Li"
      ]
    }, {
      "year": "2017",
      "names": [
        "曹洪文 | Hongwen Cao",
        "高绍兵 | Shaobing Gao",
        "陈伟强 | Weiqiang Chen",
        "喻杨洋 | Yangyang Yu",
        "张立鹏 | LiPeng Zhang",
        "赵菊蓉 | Jurong Zhao",
        "虞勇波 | Yongbo Yu",
        "陈超 | Chao Chen"
      ]
    }, {
      "year": "2016",
      "names": [
        "高敏 | Min Gao",
        "李惠 | Hui Li",
        "普璇 | Xuan Pu",
        "郭策锋 | Cefeng Guo",
        "陈安东 | Andong Chen",
        "陈祥惠 | Xianghui Chen",
        "丁爱民 | Aimin Ding",
        "任燕泽 | Yanze Ren"
      ]
    },{
      "year": "2015",
      "names": [
        "徐陶 | Tao Xu",
        "高鑫 | Xin Gao",
        "张艳山 | Yanshan Zhang",
        "邱藤 | Teng Qiu",
        "李若瑄 | Ruoxuan Li",
        "王冲 | Chong Wang",
        "尹娇娇 | Jiaojiao Yin"
      ]
    },{
      "year": "2014",
      "names": [
        "韩旺旺 | Wangwang Han",
        "代正强 | Zhengqiang Dai",
        "金凯斌 | Kaibin Jin",
        "陈小龙 | Xiaolong Chen",
        "张力文 | Liwen Zhang"
      ]
    }, {
      "year": "2013",
      "names": [
        "李树艳 | Shuyan Li",
        "杜会芸 | Huiyun Du",
        "杨琼 | Qiong Yang",
        "罗恩晴 | Enqing Luo",
        "雷太龙 | Tailong Lei"
      ]
    },{
      "year": "2012",
      "names": [
        "何琦 | Qi He",
        "张浩 | Hao Zhang",
        "陈旭芳 | Xufang Chen",
        "许子龙 | Zilong Xu",
        "李春玺 | Chunxi Li"
      ]
    },{
      "year": "2011",
      "names": [
        "王晓静 | Xiaojing Wang",
        "陈丽霞 | Lixia Chen",
        "杨盼 | Pan Yang",
        "谈友恒 | Youheng Tan",
        "李雪菲 | Xuefei Li"
      ]
    },{
      "year": "Former",
      "names": [
        "姚健高 | Jiangao Yao",
        "曾驰 | Chi Zeng",
        "叶广兰 | Guanglan Ye",
        "蒋佩 | Pei Jiang",
        "龙力 | Li Long"
      ]
    }
  ]
export default {senses, PhDs, graduate_students, former_students}