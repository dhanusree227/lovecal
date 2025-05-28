document.getElementById('loveForm').addEventListener('submit',function(e){
    e.preventDefault();
    const yourName = document.getElementById('yourName').value.trim();
    const crushName = document.getElementById('crushName').value.trim();
    const resultDiv= document.getElementById('result');

    if(!yourName || !crushName) {
        alert('Please fill the box with names');
        return;
    }

    const lovepercent =Math.floor(Math.random() *100);

    let message = '';
    if(lovepercent >= 90){
        message = 'Match made in heaven!!';
    }else if (lovepercent >=75){
        message = 'It may work ,Try little Hard!!';
    }else {
        message = 'you got saved, enjoy your life!!';
    }

    resultDiv.classList.remove('d-none');
    resultDiv.innerHTML =`${yourName} & ${crushName} =${lovepercent}% - ${message}`;
})
