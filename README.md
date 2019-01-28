###### a plugin that you can get SVG path data by drawing in a canvas board

###### demo
![128b7d9381a1a304a13d1e2048606afc.gif](evernotecid://9E0B9CFC-466D-443A-88DE-C8CA954FD7BB/wwwevernotecom/197691036/ENResource/p19)

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
:yum:
