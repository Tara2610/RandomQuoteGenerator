// Function to fetch a random quote from the API
const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      // Get a random quote from the API data
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
  
      // Update the HTML with the random quote
      const quoteElement = document.querySelector('.quote');
      quoteElement.innerHTML = `
        <p>${randomQuote.text}</p>
        <p>- ${randomQuote.author ? randomQuote.author : 'Unknown'}</p>
      `;
    } catch (error) {
      console.error('Error fetching random quote:', error);
      const quoteElement = document.querySelector('.quote');
      quoteElement.innerHTML = '<p>Failed to fetch a random quote. Please try again later.</p>';
    }
  };
  
  // Add a click event listener to the "New Quote" button
  const newQuoteButton = document.getElementById('new-quote-btn');
  newQuoteButton.addEventListener('click', fetchRandomQuote);
  
  // Call the fetchRandomQuote function when the page loads to display an initial quote
  window.addEventListener('load', fetchRandomQuote);
  