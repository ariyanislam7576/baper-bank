document.getElementById('submit-button').addEventListener('click',function(){
   const emailfeild= document.getElementById('user-email');
   const userEmail = emailfeild.value;
  
   const passwordFeild = document.getElementById('user-password')
   const userPassword = passwordFeild.value;
   if( userEmail == 'sontan@gmail.com' && userPassword == 'secret'){
      console.log('valid user');
      window.location.href = 'banking.html'
   }
})