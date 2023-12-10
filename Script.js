// Existing frontend code

const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', async () => {

  // Get prompt from text box
  const prompt = document.getElementById('prompt').value;

  // Call serverless function 
  const response = await fetch('https://<function-url>', {
    method: 'POST',
    body: JSON.stringify({prompt})  
  });
  
  // Get completions
  const {completions} = await response.json();

  // Display completions
  document.getElementById('completions').textContent = completions;

});
