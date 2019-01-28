###### a plugin that you can get SVG path data by drawing in a canvas board

###### demo
![128b7d9381a1a304a13d1e2048606afc.gif](evernotecid://9E0B9CFC-466D-443A-88DE-C8CA954FD7BB/wwwevernotecom/197691036/ENResource/p19)

###### Usage
npm i svgpath_2
import SVGpath, { path2string } from 'svgpath_2'
```
let svgPath = new svgpath_2(opt)
svgpath_2.draw()
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
        svgPath = null;
    }
}
```
Want to know other usage,pls read code. 
:yum:
