// Frontend code
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', async () => {

  // Get prompt 
  const prompt = document.getElementById('prompt').value;
  
  // Call function  
  const response = await generateCompletion(prompt);
  
  // Display completions
  document.getElementById('completions').textContent = response.completions;

});


// Serverless function code
const { generateCompletion } = require('@anthropic/claude-sdk')

async function generateCompletion(prompt) {

  const completion = await generateCompletion({
    prompt: prompt,
    key: CLAUDE_API_KEY,  
    model:"claude-instruct-beta"
  });  

  return {
    completions: completion.text  
  }

}
