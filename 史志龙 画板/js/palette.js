function Palette(obj,ctx,cols,colb){
    this.obj=obj;
    this.ctx=ctx;
    this.lineWidth=2;
    this.fillStyle='#000';
    this.strokeStyle='#000';
    this.width=obj.width;
    this.height=obj.height;
    this.history=[];
    this.cols=cols;
    this.colb=colb;
    this.type='stroke';
}
Palette.prototype={
	init:function(){
        this.ctx.fillStyle=this.fillStyle;
        this.ctx.strokeStyle=this.strokeStyle;
	},
	chexiao:function(){
    	let self=this;
    	document.body.onkeydown=function(e){
    		if(e.ctrlKey&&e.keyCode==90){
    			if(self.history.length>0){
    				let last=self.history.pop();
    				self.ctx.putImageData(last,0,0);
    			}else if(self.history.length==0){
    				self.ctx.clearRect(0, 0, self.width, self.height);
    			}
    		}
    	}
    },
    chexiao1:function(){
    	let self=this;
    	if(self.history.length>0){
    		let last=self.history.pop();
    		self.ctx.putImageData(last,0,0);
    	}
    },
	xuline:function(){
    	let self=this;
    	self.obj.onmousedown=function(e){
    		let ox=e.offsetX,oy=e.offsetY;
            self.obj.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }
                self.init();
                self.ctx.beginPath();
                self.ctx.strokeStyle=self.colb.value;
                self.ctx.moveTo(ox, oy);
                self.ctx.setLineDash([5, 5]);
                self.ctx.lineTo(mx, my);
                self.ctx.stroke();
            }
            self.obj.onmouseup=function(){
            	self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
            	self.obj.onmousemove=null;
            	self.obj.onmouseup=null;
            }
    	} 
    },
    line:function(){
    	let self=this;
    	self.obj.onmousedown=function(e){
    		let ox=e.offsetX,oy=e.offsetY;
            self.obj.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }
                self.init();
                self.ctx.beginPath();
                self.ctx.strokeStyle=self.colb.value;
                self.ctx.moveTo(ox, oy);
                self.ctx.setLineDash([0,0]);
                self.ctx.lineTo(mx, my);
                self.ctx.stroke();
            }
            self.obj.onmouseup=function(){
            	self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
            	self.obj.onmousemove=null;
            	self.obj.onmouseup=null;
            }
    	} 
    },
    pencil:function(){
        let self=this;
    	self.obj.onmousedown=function(e){
    		let ox=e.offsetX,oy=e.offsetY;
    	    if(self.history.length>0){
                self.ctx.putImageData(self.history[self.history.length-1],0,0);
            }
            self.init();
            self.ctx.beginPath();
            self.ctx.strokeStyle=self.colb.value;
            self.ctx.moveTo(ox, oy);	
            self.obj.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;  
                self.ctx.lineTo(mx, my);
                self.ctx.stroke();
            }
            self.obj.onmouseup=function(){
            	self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
            	self.obj.onmousemove=null;
            	self.obj.onmouseup=null;
            }
    	} 
    },
    sanjiao:function(){
        let self=this;
        self.obj.onmousedown=function(e){
        	let ox=e.offsetX,oy=e.offsetY;
        	self.obj.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY; 
                self.ctx.clearRect(0,0,self.width,self.height); 
                if(self.history.length>0){
	                self.ctx.putImageData(self.history[self.history.length-1],0,0);
	            }
	            self.init();
                self.ctx.beginPath();
                self.ctx.strokeStyle=self.colb.value;
                self.ctx.fillStyle=self.cols.value;
                self.ctx.moveTo(ox, oy);
                self.ctx.lineTo(mx, my);
                self.ctx.lineTo(ox, my);
                self.ctx.closePath();
                self.ctx[self.type]();
        	}
        	self.obj.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
            	self.obj.onmousemove=null;
            	self.obj.onmouseup=null;
        	}
        }
    },
    juxing:function(){
        let self=this;
        self.obj.onmousedown=function(e){
        	let ox=e.offsetX,oy=e.offsetY;
        	self.obj.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY; 
                self.ctx.clearRect(0,0,self.width,self.height); 
                if(self.history.length>0){
	                self.ctx.putImageData(self.history[self.history.length-1],0,0);
	            }
	            self.init();
                self.ctx.beginPath();
                self.ctx.strokeStyle=self.colb.value;
                self.ctx.fillStyle=self.cols.value;
                self.ctx.moveTo(ox, oy);
                self.ctx.lineTo(mx, oy);
                self.ctx.lineTo(mx, my);
                self.ctx.lineTo(ox, my);
                self.ctx.closePath();
                self.ctx[self.type]();
        	}
        	self.obj.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
            	self.obj.onmousemove=null;
            	self.obj.onmouseup=null;
        	}
        }
    },
    yuanjiaojuxing:function(){
        let self=this;
        self.obj.onmousedown=function(e){
        	let ox=e.offsetX,oy=e.offsetY;
        	self.obj.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                let num,num2;
                if(Math.abs((mx-ox)/10)>=Math.abs((my-oy)/10)){
                	num=num2=Math.abs((my-oy)/10);
                }else if(Math.abs((mx-ox)/10)<Math.abs((my-oy)/10)){
                    num=num2=Math.abs((mx-ox)/10);
                }
                if(mx<ox&&my<oy){
                	num*=-1;
                	num2*=-1;
                }
                if(mx<ox&&my>oy){
                	num*=-1;               	
                }
                if(mx>ox&&my<oy){
                	num2*=-1;	
                }
                self.ctx.clearRect(0,0,self.width,self.height); 
                if(self.history.length>0){
	                self.ctx.putImageData(self.history[self.history.length-1],0,0);
	            }
	            self.init();
                self.ctx.beginPath();
                self.ctx.strokeStyle=self.colb.value;
                self.ctx.fillStyle=self.cols.value;
                self.ctx.moveTo(ox+num, oy);
                self.ctx.lineTo(mx-num, oy);
                self.ctx.quadraticCurveTo(mx, oy, mx, oy+num2);
                self.ctx.lineTo(mx, my-num2);
                self.ctx.quadraticCurveTo(mx, my, mx-num, my);
                self.ctx.lineTo(ox+num, my);
                self.ctx.quadraticCurveTo(ox, my, ox, my-num2);
                self.ctx.lineTo(ox, oy+num2);
                self.ctx.quadraticCurveTo(ox, oy, ox+num, oy);
                self.ctx.closePath();
                self.ctx[self.type]();
        	}
        	self.obj.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
            	self.obj.onmousemove=null;
            	self.obj.onmouseup=null;
        	}
        }
    },
    wujiaoxing:function(jiao){
        let self=this;
        self.obj.onmousedown=function(e){
        	let ox=e.offsetX,oy=e.offsetY;
        	let r;
        	let angle=(360/(jiao*2))/180*Math.PI;
        	self.obj.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                r=(mx-ox)/Math.sin(Math.tan((mx-ox)/(my-oy))); 
                self.ctx.clearRect(0,0,self.width,self.height); 
                if(self.history.length>0){
	                self.ctx.putImageData(self.history[self.history.length-1],0,0);
	            }
	            self.init();
                self.ctx.beginPath();
                self.ctx.strokeStyle=self.colb.value;
                self.ctx.fillStyle=self.cols.value;
                self.ctx.moveTo(ox+r*Math.sin(angle*0), oy+r*Math.cos(angle*0));
        	    for(let i=0;i<jiao*2;i++){
        	    	let x,y;
        	    	if(i%2==0){
        	    		x=ox+r*Math.sin(angle*i);
        	    		y=oy+r*Math.cos(angle*i);
        	    	}else if(i%2==1){
        	    		x=ox+r/2*Math.sin(angle*i);
        	    		y=oy+r/2*Math.cos(angle*i);
        	    	}
        	    	self.ctx.lineTo(x, y);
        	    }
        	    self.ctx.closePath();
        	    self.ctx[self.type]();
        	}
        	self.obj.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
            	self.obj.onmousemove=null;
            	self.obj.onmouseup=null;
        	}
        }
    },
    circle:function(){
    	let self=this;
    	self.obj.onmousedown=function(e){
    		let ox=e.offsetX,oy=e.offsetY;
    		self.obj.onmousemove=function(e){
    			let mx=e.offsetX,my=e.offsetY;
    			self.ctx.clearRect(0, 0, self.width, self.height);
    			if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }
                self.init();
                self.ctx.beginPath();
                self.ctx.strokeStyle=self.colb.value;
                self.ctx.fillStyle=self.cols.value;
                self.ctx.arc(ox, oy, Math.abs(mx-ox),0,2*Math.PI);
                self.ctx.closePath();
                self.ctx[self.type]();
    		};
    		self.obj.onmouseup=function(){
         	self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
            self.obj.onmouseup=null;
            self.obj.onmousemove=null;
            }
    	}
    },
    duobianxing:function(bian){
    	let self=this;
    	self.obj.onmousedown=function(e){
        let ox=e.offsetX,oy=e.offsetY;
        let r;
        let angle=(360/bian)/180*Math.PI;
        self.obj.onmousemove=function(e){
          let mx=e.offsetX,my=e.offsetY;
          r=(mx-ox)/Math.sin(Math.tan((mx-ox)/(my-oy)));
          self.ctx.clearRect(0, 0, self.width, self.height);
          if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }
           self.init();
           self.ctx.beginPath();
           self.ctx.strokeStyle=self.colb.value;
           self.ctx.fillStyle=self.cols.value;
           self.ctx.moveTo(ox+r*Math.sin(angle*0), oy+r*Math.cos(angle*0));
           for(let i=0;i<bian;i++){
           	let x=ox+r*Math.sin(angle*i);
           	let y=oy+r*Math.cos(angle*i);
           	self.ctx.lineTo(x, y);
           }
           self.ctx.closePath();
           self.ctx[self.type]();
        };
         self.obj.onmouseup=function(){
         	self.history.push(self.ctx.getImageData(0,0,self.width,self.height));

            self.obj.onmouseup=null;
            self.obj.onmousemove=null;
         }
    	}
    },
    eraser:function(w,h){
        let self=this;
        self.obj.onmousedown=function(e){
        	self.obj.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY; 
                self.ctx.clearRect(mx, my, w, h);
        	}
        	self.obj.onmouseup=function(){
        		self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
            	self.obj.onmousemove=null;
            	self.obj.onmouseup=null;
        	}
        }
    },
    clear:function(){
    	let self=this;
    	self.ctx.clearRect(0, 0, self.width, self.height);
    	self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
    },
    fill:function(){
    	this.init();
    	this.type="fill";
    },
    biancolor:function(){
    	this.init();
    	this.type='stroke';
    },
    xinjian:function(){
    	let self=this;
    	self.ctx.clearRect(0, 0, self.width, self.height);
    	self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
    },
    baocun:function(){
        let self=this;
        let flag=confirm("是否保存");
        if(flag){
            let data=self.obj.toDataURL('image/png').replace('data:image/png','data:stream/octet');
            location.href=data;
        }
        self.history=[];
        self.ctx.clearRect(0,0,self.width,self.height);
    },
    wenzi:function(){
         let self=this;
          self.obj.onmousedown=function (e) {
              let ox=e.offsetX,oy=e.offsetY;
              let div=document.createElement('div');
                  div.style.cssText=`min-width:100px;height:auto;padding:3px;position:absolute;left:${ox}px;top:${oy}px;background:white;`

                 div.contentEditable='true';
                  self.obj.appendChild(div);
                  self.obj.onmousedown=null;
                  self.divs=div;


                 self.divs.onmousedown=function (e) {
                     let ox=e.clientX-this.offsetLeft;
                     let oy=e.clientY-this.offsetTop;
                     self.obj.onmousemove=function (e) {
                         let cx=e.clientX,cy=e.clientY;
                         let lefts=cx-ox;tops=cy-oy;
                         self.divs.style.left=lefts+'px';
                         self.divs.style.top=tops+'px';

                     }
                     self.divs.onmouseup=function () {
                         self.divs.onmouseup=null;
                         self.obj.onmousemove=null;
                     }
                 }
                 self.divs.onblur=function(){
                     self.ctx.font=self.text;
                     self.ctx.textAlign=self.textAlign;
                     self.ctx.textBaseline=self.textBaseline;
                     self.ctx.fillText(this.innerText,this.offsetLeft,this.offsetTop);
                     this.parentNode.removeChild(this);
                     self.divs=null;
                 }

              document.body.onkeydown=function(e){
                  if(e.ctrlKey&&e.keyCode==90){
                      if(self.history.length==0){
                          self.ctx.clearRect(0,0,self.width,self.height);
                          return
                      }
                      let last=self.history.pop();
                      self.ctx.putImageData(last,0,0)
                  }
              }

          }

      },

}