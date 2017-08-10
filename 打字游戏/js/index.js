
    window.onload=function(){
        let over=document.querySelector('.over');
        let next=document.querySelector('.next');
        let start=document.querySelector('.start');
        function Game(){
            this.len=5;
            this.arr=[['A'],['Z'],['B'],['C'],['D'],['E'],['F'],['G'],['H'],['I'],['J'],['K'],['L'],['M'],['N'],['O'],['P'],['Q'],['R'],['S'],['T'],['U'],['V'],['W'],['X'],['Y']];
            this.cw=window.innerWidth;
            this.speed=20;
            this.zarr=[];
            this.score=0;
            this.life=10;
            this.scorecur=document.querySelector('.Score');
            this.lifecur=document.querySelector('.life');
            this.point=1;
            this.pointcur=document.querySelector('.point');
        }
        Game.prototype={
            start:function(){
                for(let i=0;i<this.len;i++){
                    this.getlength();
                };
                this.drop();
                this.key();
            },
            getnum:function(text){
               return this.zarr.some(function(value,index){
                   return value.innerText == text;
               });

            },
            getlength:function(){
                do{
                  var num=Math.floor(Math.random()*this.arr.length);
                }while(this.getnum(this.arr[num][0]))
                let ele=document.createElement('div');
                let lefts=Math.random()*(this.cw-800)+400,tops=Math.random()*100+70;
                ele.style.cssText=`width:50px;height:50px;background-image:url(${this.arr[num][1]});background-size:cover;text-align:center;line-height:50px;border-radius:50%;position:absolute;left:${lefts}px;top:${tops}px;font-size:20px;font-weight:bold;color:white;background-image:-webkit-linear-gradient(#03a9f4,#03f471)`;
                ele.innerText=this.arr[num][0];
                document.body.appendChild(ele);
                this.zarr.push(ele);
            },
            drop:function(){
                let self=this;
                this.t=setInterval(function(){
                    for(let i=0;i<self.zarr.length;i++){
                        let topss = self.zarr[i].offsetTop+self.speed;
                        self.zarr[i].style.top=topss+'px';
                        if(topss > 600){
                            document.body.removeChild(self.zarr[i]);
                            self.zarr.splice(i,1);
                            self.lifecur.innerText= --self.life;
                            if(self.life < 0){
                                self.life=0;
                                self.lifecur.innerText = self.life;
                                self.over();
                            }
                        }
                    };
                    if(self.zarr.length < self.len){
                        self.getlength()
                    }
                },100);
            },
            key:function(){
                document.body.onkeydown=function(e){
                    let code = String.fromCharCode(e.keyCode);
                    for(let j=0;j<this.zarr.length;j++){
                        if(code == this.zarr[j].innerText){
                            document.body.removeChild(this.zarr[j]);
                            this.zarr.splice(j,1);
                            this.score+=1;
                            this.scorecur.innerText=this.score;
                            if(this.score > 10){
                                this.onnext()
                            }
                        }
                    }
                    if(this.zarr.length < this.len){
                        this.getlength();
                    }
                }.bind(this);
            },
            over:function(){
                let self=this;
                clearInterval(self.t);
                for(let i=0;i<this.zarr.length;i++){
                    document.body.removeChild(this.zarr[i])
                }
                this.zarr=[];
                over.style.display='block';
                over.onclick=function(){
                    self.restart();
                    over.style.display='none';
                }
            },
            restart:function(){
                for(let i=0;i<this.zarr.length;i++){
                    document.body.removeChild(this.zarr[i])
                }
                this.zarr=[];
                    this.lifecur.innerText=this.life=10;
                    this.score=0;
                    this.scorecur.innerText=this.score;
                    this.start()
            },
            onnext:function(){
                let self=this;
                clearInterval(self.t);
                for(let i=0;i<this.zarr.length;i++){
                    document.body.removeChild(this.zarr[i])
                }
                this.zarr=[];
                next.style.display='block';
                next.onclick=function(){
                    self.next();
                    next.style.display='none';
                }
            },
            next:function(){
                clearInterval(this.t);
                for(let i=0;i<this.zarr.length;i++){
                    document.body.removeChild(this.zarr[i])
                };
                this.zarr=[];
                this.len++;
                this.point++;
                this.pointcur.innerText=this.point;
                this.lifecur.innerText=this.life=10;
                this.score=0;
                this.scorecur.innerText=this.score;
                this.start()
            }
        };
        let game=new Game();
        start.onclick=function(){
            start.style.display='none';
            game.start();
        };
    }