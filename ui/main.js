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
    if(request.ststus==XMLHTTpRequest.DONE)
{
    if(request.readyState===200)
    {var names=responseText;
    names=JSON.parse(names);
    for(var i=0;i<names.length;i++)

        {list+='<li>'+names[i]+'</li>';
        }
        var ul=document.getElementById('namelist');
        ul.innerHTMl=list;
    }
    }};
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
    request.open('get','akashjohn1111@ssh.imad.hasura-app.io')
    }