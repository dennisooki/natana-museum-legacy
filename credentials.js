
const fieldst=jQuery("input[name='signuptoggle']")

fieldst.click(()=>{
    var isSignup=document.getElementById('signup').checked
    if (isSignup==true){
        console.log('dick')
    }
})