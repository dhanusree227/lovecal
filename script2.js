// script.js

document.getElementById("loveForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const yourName = document.getElementById("yourName").value.trim();
  const crushName = document.getElementById("crushName").value.trim();
  const resultDiv = document.getElementById("result");


  if (yourName || crushName) {
   alert("please fill in your names");
    return;
  }

  
  const loveScore = Math.floor(Math.random() * 100); 

  let message = "";

  if (loveScore >= 90) {
    message ="a match made in heaven";
  } else if (loveScore >= 75) {
    message ="there is definitely something";
  } 
   else {
    message = "you got saved,enjoy your life";
  }

  resultDiv.classList.remove("d-none");
  resultDiv.innerHTML = ` ${yourname} & ${crushname} =${lovepercent}% - ${message}`;
});
