
async function abc(a, b) {
  console.log("step 1");
  console.log("step 2");
  return a * b;
}

abc(2, 3);

 function filterData() {
  let arr = [1, 3, 4, 6, 8, 9, "efd", 34, NaN];
  let arr2;
  setTimeout(function () {
    arr2 = arr.filter((e) => (typeof e) == 'number' && !isNaN(e));
  }, 2000)
  console.log("Array 2: "+arr2);
  console.log("Array : "+arr);
}

filterData();

// Define the async function to fetch user data
async function fetchUserData(userId) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  // Return the fetch promise
  return fetch(url);
}
// Call the async function with a user ID
fetchUserData(1)
  .then(response => {
    // Check if the response status is OK (200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Return the response as JSON
    return response.json();
  })
  .then(data => {
    // Log the fetched data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch
    console.error('Error fetching user data:', error);
  });
