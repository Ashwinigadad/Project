const myname=document.querySelector('.username');
const myusn=document.querySelector('.userusn');
const mycity=document.querySelector('.usercity');
const button=document.querySelector('button');
button.addEventListener('click',()=>{
    console.log(`button clicked`)
    const obj={
        name:myname.value,
        usn:myusn.value,
        city:mycity.value
    };
    fetch("http://127.0.0.1:5050/api/server",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(obj)
     });

})