###### a plugin that you can get SVG path data by drawing in a canvas board

###### demo
!['lalal'](http://b00.cdn.ipalfish.com/0/img/af/3a/653ca5f5afc1413efb0c3a100179)

###### Usage
npm i svgpath_2

import SVGpath, { path2string } from 'svgpath_2'

```
let svgPath = new SVGpath(opt)
svgPath.draw()
```
```
opt =
{
    x: 'x-coordinate',    
    y: 'y-coordinate',
    width: 'modal width',
    height: 'nodal height',
    default:{
        data:Object,
        mode:String
    }
    onSure: function(res){
        // res = {
        //   data:Array,
        //   baseWidth:Number
        // }
        path2string(res.data)
        // you will get data like 
        // M100 68.5 L100.5 68.5 L100.5 68.5 L101 68.5 L112.5 68 L120 67.5 L128 67 L138 67 L144 66.5 L154 66 L159 66 L171 66         // L179.5 65.5 L189.5 65.5 L152 57.5 
        svgPath = null;
    }
}
```
Want to know other usage,pls read code. 
Execute command 'npm run watch' and open test/index.html with browser to run test code.
:yum:

###### 有两种模式供选择 自由模式和连线模式

###### 

