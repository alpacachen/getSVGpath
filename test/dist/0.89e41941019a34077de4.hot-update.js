webpackHotUpdate(0,[function(t,e,i){"use strict";i.r(e);const n=function(t,e,i){let n,o=null;return function(){let h=this,s=arguments,d=+new Date;clearTimeout(o),n||(n=d),d-n>=i?(t.apply(h,s),n=d):o=setTimeout(function(){t.apply(h,s)},e)}};var o=class{constructor(t){this.x=t.x,this.y=t.y,this.lineWidth=t.lineWidth,this.width=t.width,this.height=t.height,this.opacity=t.opacity||.8,this.path=[[0,0]],this.onSure=t.onSure}draw(){this.path=[];let t=!1,e=0,i=0;const o=document.createElement("div");o.innerHTML=`\n        <div id='SVGpath_wrap' style="position:absolute;top:${this.y}px;left:${this.x}px;width:${this.width}px;height:${this.height}px;box-shadow: 0 0 10px #000;background: #fff;opacity:${this.opacity};border-radius: 4px;z-index: 1;">\n            <canvas id="SVGpath_Canvas" width=${this.width} height=${this.height}></canvas>\n            <div style="text-align: right;position: relative;top: -28px;padding: 0 8px;">\n                <button id="SVGpath_cancel">取消</button>\n                <button id="SVGpath_sure">确定</button>\n            </div>\n        </div>\n    `,document.body.appendChild(o);const h=document.getElementById("SVGpath_Canvas"),s=h.getContext("2d");s.strokeStyle="#666666",h.addEventListener("mousedown",n=>{t=!0,[e,i]=[n.offsetX,n.offsetY],this.path.push([n.offsetX,n.offsetY])}),h.addEventListener("mousemove",n(n=>{t&&(s.beginPath(),s.lineWidth=this.lineWidth||5,s.moveTo(e,i),s.lineTo(n.offsetX,n.offsetY),s.stroke(),[e,i]=[n.offsetX,n.offsetY],this.path.push([n.offsetX,n.offsetY]))},50,60)),h.addEventListener("mouseup",()=>t=!1),h.addEventListener("mouseout",()=>t=!1),document.getElementById("SVGpath_sure").onclick=(()=>{this.onSure({data:this.path,baseWidth:this.width}),document.body.removeChild(o)}),document.getElementById("SVGpath_cancel").onclick=(()=>{document.body.removeChild(o)})}};const{x:h,y:s,width:d,height:a}=document.getElementById("inner").getBoundingClientRect();new o({x:h,y:s,width:d,height:a,opacity:.5,lineWidth:3,onSure:function(t){console.log(t)}})}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZncGF0aF8yL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Rlc3QvaW5kZXguanMiXSwibmFtZXMiOlsidGhyb3R0bGUiLCJmbiIsImRlbGF5IiwibXVzdFJ1bkRlbGF5IiwidF9zdGFydCIsInRpbWVyIiwiY29udGV4dCIsInRoaXMiLCJhcmdzIiwiYXJndW1lbnRzIiwidF9jdXJyIiwiRGF0ZSIsImNsZWFyVGltZW91dCIsImFwcGx5Iiwic2V0VGltZW91dCIsInN2Z3BhdGhfMiIsIltvYmplY3QgT2JqZWN0XSIsIm9wdCIsIngiLCJ5IiwibGluZVdpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJvcGFjaXR5IiwicGF0aCIsIm9uU3VyZSIsImlzRHJhd2luZyIsImxhc3RYIiwibGFzdFkiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJzdHJva2VTdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJwdXNoIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwib25jbGljayIsImRhdGEiLCJiYXNlV2lkdGgiLCJyZW1vdmVDaGlsZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJ3REF1RUEsTUFBQUEsRUFBQSxTQUFBQyxFQUFBQyxFQUFBQyxHQUNBLElBQ0FDLEVBREFDLEVBQUEsS0FFQSxrQkFDQSxJQUFBQyxFQUFBQyxLQUNBQyxFQUFBQyxVQUNBQyxHQUFBLElBQUFDLEtBQ0FDLGFBQUFQLEdBQ0FELElBQ0FBLEVBQUFNLEdBRUFBLEVBQUFOLEdBQUFELEdBQ0FGLEVBQUFZLE1BQUFQLEVBQUFFLEdBQ0FKLEVBQUFNLEdBRUFMLEVBQUFTLFdBQUEsV0FDQWIsRUFBQVksTUFBQVAsRUFBQUUsSUFDYU4sS0FpQkUsSUFBQWEsRUF6R2YsTUFDQUMsWUFBQUMsR0FFQVYsS0FBQVcsRUFBQUQsRUFBQUMsRUFDQVgsS0FBQVksRUFBQUYsRUFBQUUsRUFDQVosS0FBQWEsVUFBQUgsRUFBQUcsVUFDQWIsS0FBQWMsTUFBQUosRUFBQUksTUFDQWQsS0FBQWUsT0FBQUwsRUFBQUssT0FDQWYsS0FBQWdCLFFBQUFOLEVBQUFNLFNBQUEsR0FDQWhCLEtBQUFpQixLQUFBLFFBQ0FqQixLQUFBa0IsT0FBQVIsRUFBQVEsT0FXQVQsT0FDQVQsS0FBQWlCLEtBQUEsR0FDQSxJQUFBRSxHQUFBLEVBQ0FDLEVBQUEsRUFDQUMsRUFBQSxFQUNBLE1BQUFDLEVBQUFDLFNBQUFDLGNBQUEsT0FDQUYsRUFBQUcsMkVBQzhEekIsS0FBQVksWUFBaUJaLEtBQUFXLGFBQWtCWCxLQUFBYyxrQkFDakdkLEtBQUFlLCtEQUNpRWYsS0FBQWdCLDJGQUNqQmhCLEtBQUFjLGdCQUFxQmQsS0FBQWUsd1FBT3JFUSxTQUFBRyxLQUFBQyxZQUFBTCxHQUNBLE1BQUFNLEVBQUFMLFNBQUFNLGVBQUEsa0JBQ0FDLEVBQUFGLEVBQUFHLFdBQUEsTUFXQUQsRUFBQUUsWUFBQSxVQUNBSixFQUFBSyxpQkFBQSxZQUFBQyxJQUNBZixHQUFBLEdBQ0FDLEVBQUFDLEdBQUEsQ0FBQWEsRUFBQUMsUUFBQUQsRUFBQUUsU0FDQXBDLEtBQUFpQixLQUFBb0IsS0FBQSxDQUFBSCxFQUFBQyxRQUFBRCxFQUFBRSxZQUVBUixFQUFBSyxpQkFBQSxZQUFBeEMsRUFoQkF5QyxJQUNBZixJQUNBVyxFQUFBUSxZQUNBUixFQUFBakIsVUFBQWIsS0FBQWEsV0FBQSxFQUNBaUIsRUFBQVMsT0FBQW5CLEVBQUFDLEdBQ0FTLEVBQUFVLE9BQUFOLEVBQUFDLFFBQUFELEVBQUFFLFNBQ0FOLEVBQUFXLFVBQ0FyQixFQUFBQyxHQUFBLENBQUFhLEVBQUFDLFFBQUFELEVBQUFFLFNBQ0FwQyxLQUFBaUIsS0FBQW9CLEtBQUEsQ0FBQUgsRUFBQUMsUUFBQUQsRUFBQUUsWUFRQSxRQUNBUixFQUFBSyxpQkFBQSxjQUFBZCxHQUFBLEdBQ0FTLEVBQUFLLGlCQUFBLGVBQUFkLEdBQUEsR0FDQUksU0FBQU0sZUFBQSxnQkFBQWEsUUFBQSxNQUNBMUMsS0FBQWtCLE9BQUEsQ0FBeUJ5QixLQUFBM0MsS0FBQWlCLEtBQUEyQixVQUFBNUMsS0FBQWMsUUFDekJTLFNBQUFHLEtBQUFtQixZQUFBdkIsS0FFQUMsU0FBQU0sZUFBQSxrQkFBQWEsUUFBQSxNQUNBbkIsU0FBQUcsS0FBQW1CLFlBQUF2QixPQ2hFQSxNQUFBWCxFQUFPQSxFQUFBQyxJQUFBRSxRQUFBQyxVQUFzQlEsU0FBQU0sZUFBQSxTQUFBaUIsd0JBQzdCLElBQWN0QyxFQUFPLENBQ3JCRyxJQUNBQyxJQUNBRSxRQUNBQyxTQUNBQyxRQUFBLEdBQ0FILFVBQUEsRUFDQUssT0FBQSxTQUFBeUIsR0FDQUksUUFBQUMsSUFBQUwiLCJmaWxlIjoiMC44OWU0MTk0MTAxOWEzNDA3N2RlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU1ZHcGF0aCB7XG4gICAgY29uc3RydWN0b3Iob3B0KSB7XG4gICAgICAgIC8vIGlmICghU1ZHcGF0aC5pbnN0YW5jZSkgeyAgICDnm67liY3kuI3pnIDopoHljZXkvovmqKHlvI9cbiAgICAgICAgdGhpcy54ID0gb3B0Lng7XG4gICAgICAgIHRoaXMueSA9IG9wdC55O1xuICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IG9wdC5saW5lV2lkdGg7XG4gICAgICAgIHRoaXMud2lkdGggPSBvcHQud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gb3B0LmhlaWdodDtcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gb3B0Lm9wYWNpdHkgfHwgMC44O1xuICAgICAgICB0aGlzLnBhdGggPSBbWzAsIDBdXTtcbiAgICAgICAgdGhpcy5vblN1cmUgPSBvcHQub25TdXJlO1xuICAgICAgICAvLyBTVkdwYXRoLmluc3RhbmNlID0gdGhpc1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHJldHVybiBTVkdwYXRoLmluc3RhbmNlXG4gICAgfVxuICAgIC8vIHN0YXRpYyBnZXRJbnN0YW5jZShvcHQpIHtcbiAgICAvLyAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFNWR3BhdGgob3B0KVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmluc3RhbmNlXG4gICAgLy8gfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IFtdO1xuICAgICAgICBsZXQgaXNEcmF3aW5nID0gZmFsc2U7XG4gICAgICAgIGxldCBsYXN0WCA9IDA7XG4gICAgICAgIGxldCBsYXN0WSA9IDA7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGlkPSdTVkdwYXRoX3dyYXAnIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOiR7dGhpcy55fXB4O2xlZnQ6JHt0aGlzLnh9cHg7d2lkdGg6JHt0aGlzLndpZHRofXB4O2hlaWdodDoke1xuICAgICAgICAgICAgdGhpcy5oZWlnaHRcbiAgICAgICAgfXB4O2JveC1zaGFkb3c6IDAgMCAxMHB4ICMwMDA7YmFja2dyb3VuZDogI2ZmZjtvcGFjaXR5OiR7dGhpcy5vcGFjaXR5fTtib3JkZXItcmFkaXVzOiA0cHg7ei1pbmRleDogMTtcIj5cbiAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJTVkdwYXRoX0NhbnZhc1wiIHdpZHRoPSR7dGhpcy53aWR0aH0gaGVpZ2h0PSR7dGhpcy5oZWlnaHR9PjwvY2FudmFzPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IHJpZ2h0O3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IC0yOHB4O3BhZGRpbmc6IDAgOHB4O1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJTVkdwYXRoX2NhbmNlbFwiPuWPlua2iDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJTVkdwYXRoX3N1cmVcIj7noa7lrpo8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdTVkdwYXRoX0NhbnZhcycpO1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3QgZHJhd0xpbmUgPSBlID0+IHtcbiAgICAgICAgICAgIGlmICghaXNEcmF3aW5nKSByZXR1cm47XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGggfHwgNTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8obGFzdFgsIGxhc3RZKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgW2xhc3RYLCBsYXN0WV0gPSBbZS5vZmZzZXRYLCBlLm9mZnNldFldO1xuICAgICAgICAgICAgdGhpcy5wYXRoLnB1c2goW2Uub2Zmc2V0WCwgZS5vZmZzZXRZXSk7XG4gICAgICAgIH07XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjNjY2NjY2JztcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgaXNEcmF3aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIFtsYXN0WCwgbGFzdFldID0gW2Uub2Zmc2V0WCwgZS5vZmZzZXRZXTtcbiAgICAgICAgICAgIHRoaXMucGF0aC5wdXNoKFtlLm9mZnNldFgsIGUub2Zmc2V0WV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRocm90dGxlKGRyYXdMaW5lLCA1MCwgNjApKTtcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiAoaXNEcmF3aW5nID0gZmFsc2UpKTtcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4gKGlzRHJhd2luZyA9IGZhbHNlKSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdTVkdwYXRoX3N1cmUnKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblN1cmUoeyBkYXRhOiB0aGlzLnBhdGgsIGJhc2VXaWR0aDogdGhpcy53aWR0aCB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1NWR3BhdGhfY2FuY2VsJykub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8v6IqC5rWB5Ye95pWw77yM5q2k5aSE55So5p2l5b+r6YCf55S755u057q/XG5jb25zdCB0aHJvdHRsZSA9IGZ1bmN0aW9uKGZuLCBkZWxheSwgbXVzdFJ1bkRlbGF5KSB7XG4gICAgbGV0IHRpbWVyID0gbnVsbDtcbiAgICBsZXQgdF9zdGFydDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcyxcbiAgICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgICAgICB0X2N1cnIgPSArbmV3IERhdGUoKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgaWYgKCF0X3N0YXJ0KSB7XG4gICAgICAgICAgICB0X3N0YXJ0ID0gdF9jdXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0X2N1cnIgLSB0X3N0YXJ0ID49IG11c3RSdW5EZWxheSkge1xuICAgICAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICB0X3N0YXJ0ID0gdF9jdXJyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbi8v5bCG5LqM57u05pWw57uE6L2sc3ZnIHBhdGjmoLzlvI9cbmNvbnN0IHBhdGgyc3RyaW5nID0gKGFycmF5ID0gW10sIHJhdGlvID0gMSkgPT4ge1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBhcnJheS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgY2hyID0gJ0wnO1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGNociA9ICdNJztcbiAgICAgICAgfVxuICAgICAgICBzdHIgKz0gYCR7Y2hyfSR7aXRlbVswXSAqIHJhdGlvfSAke2l0ZW1bMV0gKiByYXRpb30gYDtcbiAgICB9KTtcbiAgICByZXR1cm4gc3RyO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNWR3BhdGg7XG5leHBvcnQgeyBwYXRoMnN0cmluZyB9O1xuIiwiaW1wb3J0IFNWR3BhdGggZnJvbSAnc3ZncGF0aF8yJ1xuY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5uZXInKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxubGV0IHN2ZyA9IG5ldyBTVkdwYXRoKHsgXG4gICAgeCwgXG4gICAgeSwgXG4gICAgd2lkdGgsIFxuICAgIGhlaWdodCwgXG4gICAgb3BhY2l0eTogMC41LCBcbiAgICBsaW5lV2lkdGg6IDMsIFxuICAgIG9uU3VyZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgfSB9KSJdLCJzb3VyY2VSb290IjoiIn0=