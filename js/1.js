
		     var rowNum=2;
		     var div;
		     var btn = document.getElementById("btn");
		     var btn2 = document.getElementById("btn2");
		     var btn3 = document.getElementById("btn3");
		     var x=10;
		     var f=0;
		     var t;
		     var tu1 = document.getElementById("tu1");
		     var tu2 = document.getElementById("tu1");
		     var width;
		     var ban =document.getElementById("ban");
			//创建游戏界面
			
		
			
			function view(){
				div =document.createElement("div");
				div.id="d";
				document.body.appendChild(div);
				var nums =rowNum*rowNum;
				var suiji =parseInt(Math.random()*10000)%nums;
				
				 var colors=["red","green","yellow","pink","orange","gold"]
			    var sj = parseInt(Math.random()*10)%colors.length;
			    var color=colors[sj];
			    
				
				for (var i = 0; i <nums; i++) {
					var op = colorview(rowNum,color);
					if(suiji==i){
					
					var tu2=document.createElement("img");
					tu2.src ="img/2010112013393570.jpg";
					op.appendChild(tu2);
					tu2.style.width = width+"px";
					tu2.style.height = width+"px";
				
					op.onclick=function(){chenggong()}
					}else{
						
						var tu1=document.createElement("img");
						tu1.src="img/5051ca4795b5b.jpg";
						op.appendChild(tu1);
						tu1.style.width = width+"px";
					    tu1.style.height = width+"px";
						op.onclick=function(){shibai()}
					}
				    div.appendChild(op);
				    }
				
			}
			view();
			function jia(){
				
				
				btn3.value="用时:"+x+"s";
			if(x>0){x--}else{clearInterval(t);shibai()
			ban.style.display="block"}
			}
			    jia();
				
			
			function chenggong(){
				rowNum++;
			    
			    btn2.value="得分:"+(rowNum*5)+"分";
			    btn.value="第"+(rowNum-1)+"关";
			    
				document.body.removeChild(div);
				view();
				ban.style.display="none";
				ban.innerText=btn2.value;
				x=10;
				if(f==0){t=setInterval(jia,1000);f=1;}

			}
			function shibai(){
				rowNum=2;
				btn.value="游戏结束";
				btn2.value="得分:"+0+"分";
	            document.body.removeChild(div);
				view();
                ban.style.display="block"				
//				alert("小伙子加油哦")
				x=10;
				if(f==1){t=clearInterval(t);f=0;
				
				}
			}
			//创建小色块
			function colorview(rowNum,color){
			//边距
			    var m= 3;
			//总宽度
			    var allwith =400;
			//总边距
			    var allm =3*(rowNum+1);
			//色块宽度
			     width = (allwith-allm)/rowNum;

			    
			    var colorview=document.createElement("div");
			    colorview.style.cssText="width:"+width+"px;height:"+width+"px;float:left;background-color:"+color+";margin:3px 0 0 3px;"
			    return colorview;
			}
