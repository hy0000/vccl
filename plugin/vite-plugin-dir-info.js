/*
这个插件功能是返回public下某个文件夹下所有图片的路径
例子:
假设目录结构如下，即public下有个叫album的文件夹:
    public
      |--album
         |--2020
            |--0.jpg
            |--1.png
         |--2.png
在任意程序文件(vue or js)中使用
import path from "vitePluginDirInfo/album"
即可得到
path = [
    "album/2020/0.jpg",
    "album/2020/1.png",
    "album/2.png",
]
然后就可以用path这个数据去渲染页面啦
*/
import fg from 'fast-glob'

function getImgInfo(source, base){
    const album = fg.sync(`public/${source}/**/*.{jpg,png,JPG,PNG,null}`)
    return album.map(v=>{
        return v.replace("public/", base)
    })
}

export default function vitePluginDirInfo(base) {
    const fileRegex = /vitePluginDirInfo\/.+/

    return {
        name: 'vitePluginDirInfo',
        resolveId(id) {
            if (fileRegex.test(id)) {
                return id
            }
        },
        load(id) {
            if (fileRegex.test(id)) {
                let dir = id.slice("vitePluginDirInfo/".length)
                let tyb = getImgInfo(dir, base)
                return  `export default ${JSON.stringify(tyb)}`
            }
        }
    }
}