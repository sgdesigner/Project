console.log("connected")

document.getElementById('btn').addEventListener('click',function(){

    const val = document.getElementById('pNo').value;
    
     if(val.length === 10)
      {
          console.log(val)
        document.getElementById('pNo').value ='';
        alert('Your phone number is submitted successfully');
      }
      else
      {
        alert('Please enter a ten digit number')
      }

})
