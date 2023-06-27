// Example prototype function
function MyAPI() {}

// Prototype method that returns a Promise
MyAPI.prototype.getResponseFromAPI = function() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = 'API response data';
      resolve(response);
    }, 2000);
  });
};

// Usage example
const myAPI = new MyAPI();
myAPI.getResponseFromAPI().then((response) => {
  console.log('API Response:', response);
}).catch((error) => {
  console.error('Error:', error);
});

