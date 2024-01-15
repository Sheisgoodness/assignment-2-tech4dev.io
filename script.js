function submitForm() {
    const form = document.getElementById('customerForm');
    const formData = new FormData(form);
    const data = {};
  
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    // Mock API endpoint
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
    // Using fetch API to make a POST request
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Form submitted successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    });
  }
  