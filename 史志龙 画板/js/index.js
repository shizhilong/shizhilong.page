window.onload=function(){
    let canvas=document.querySelector('canvas');
    let ctx=canvas.getContext("2d");
    let xuline=document.querySelector('.icon-xuxian');
    let line=document.querySelector('.icon-zhixianceliang');
    let pencil=document.querySelector('.icon-qianbi');
    let sanjiao=document.querySelector('.icon-sanjiaoxing');
    let juxing=document.querySelector('.icon-juxing');
    let yuanjiaojuxing=document.querySelector('.icon-yuanjiaojuxing');
    let wujiaoxing=document.querySelector('.icon-wujiaoxingkong');
    let circle=document.querySelector('.icon-yuan');
    let clear=document.querySelector('.icon-qingkong');
    let chexiao1=document.querySelector('.icon-iocnchexiao');
    let eraser=document.querySelector('.icon-xiangpi');
    let duobianxing=document.querySelector('.icon-iconfontwubianxing');
    let cols=document.querySelector('.yanse>input');
    let colb=document.querySelector('.miaobian>input');
    let fill=document.querySelector('.icon-tianchong');
    let stroke=document.querySelector('.icon-miaobian');
    let baocun=document.querySelector('.icon-baocun');
    let wenzi=document.querySelector('.icon-wenzi');
    let xinjian=document.querySelector('.icon-iconfontxinjian');
    let palette=new Palette(canvas,ctx,cols,colb);
    xuline.onclick=function(){
		palette.xuline();
	}
	line.onclick=function(){
		palette.line();
	}
	pencil.onclick=function(){
		palette.pencil();
	}
	sanjiao.onclick=function(){
		palette.sanjiao();
	}
	yuanjiaojuxing.onclick=function(){
		palette.yuanjiaojuxing();
	}
	juxing.onclick=function(){
		palette.juxing();
	}
	wujiaoxing.onclick=function(){
		let jiao=prompt('输入角数',5);
		palette.wujiaoxing(jiao);
	}
	circle.onclick=function(){
		palette.circle();
	}
	duobianxing.onclick=function(){
		let bian=prompt('输入边数',5);
		palette.duobianxing(bian);
	}
	clear.onclick=function(){
		palette.clear();
	}
	eraser.onclick=function(){
		let w=h=prompt('输入大小',10);
		palette.eraser(w,h);
	}
	chexiao1.onclick=function(){
		palette.chexiao1();
	}
	fill.onclick=function(){
		palette.fill();
	}
	stroke.onclick=function(){
		palette.biancolor();
	}
	baocun.onclick=function(){
		palette.baocun();
	}
	xinjian.onclick=function(){
		palette.xinjian();
	}
	// wenzi.onclick=function(){
	// 	palette.wenzi();
	// }
	document.body.onkeydown=function(){
		palette.chexiao();
	}	
}
