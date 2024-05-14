console.log("script running...")
document.querySelector('.wrong').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        setTimeout(()=>{
            document.querySelector('.ham').style.display='inline';
        },300);
        document.querySelector('.wrong').style.display='none';
    }
    else{
        document.querySelector('.ham').style.display='none';
        setTimeout(()=>{
            document.querySelector('.wrong').style.display='inline';
        },300);
        
    }
})