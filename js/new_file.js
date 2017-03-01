window.onload=function(){
	var body=document.body
    var mian=body.getElementsByClassName('mian')[0];
    var list=mian.getElementsByClassName('banner_ul')[0];
    var len=list.getElementsByTagName('li').length;
    var prev=body.getElementsByClassName('prev')[0];
    var next=body.getElementsByClassName('next')[0];
    var bian=body.getElementsByClassName('bian')[0];
    var i=0;
    


    function addLi(){
        for(var a=0;a<len-2;a++){
            bian.innerHTML+='<li></li>'
        }
            }
    addLi();
    bian.children[0].className='active';


    
    //小圆点切换
    var li=bian.children;
    function showButtons(){
        // var li=bian.children;
            for(var index=0;index<li.length;index++){
                if(li[index].className=='active'){          
                    li[index].className = '';
                    break;
                }
            }
        li[i].className='active';  
    }

    function OnMouseove(offset){

            for(var i=0;i<li.length;i++){
                li[i].index=i;
                li[i].onclick=function (){
                    console.log(this.index)
                    i=this.index;
                    list.style.left=-(this.index+1)*offset+'px';
                    showButtons()
                }
            }
    }
    OnMouseove(600);


    // li[i].onclick=function(){
    //     onMouseOve()
    // }
    

    //点击切换函数
    function animate(offset){
        list.style.left=-(i+1)*offset+'px';
        // console.log(i)
    }

    //下一张
    function Next(offset){
        next.onclick=function(){
            i++;
            if(i>=len-2){
                i=0;
            }
            animate(offset);//运动函数
            showButtons();//小圆点跟着切换的函数
        }
    }
    //上一张
    function Prev(offset){
        prev.onclick=function(){
            i--;
            if(i<=-1){
                i=len-3;
            }
            animate(offset);
            showButtons();

        }
    }


    Next(600);
    Prev(600);

}

    





