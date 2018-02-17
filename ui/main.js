console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='HAHAHAHA';
var img=document.getElementById('madi');
img.onclick = function ()
{
    img.style.marginLeft = '100px';
    
};
 
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
    
    if(request.status==XMLHttpRequest.DONE)
{
    if(request.readyState===200)
    {var names=request.responseText;
    names=JSON.parse(names);
    var list='';
    for(var i=0;i<names.length;i++)
     {list+='<li>'+names[i]+'</li>';
        }
        var ul=document.getElementById('namelist');
        ul.innerHTMl=list;
    }
    }
};
   var nameInput=document.getElementById('name');
    var name=nameInput.value;
    request.open('GET','http://akashjohn1111.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
};