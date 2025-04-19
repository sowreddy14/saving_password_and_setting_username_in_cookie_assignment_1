document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // 1. Get the value of the 'count' cookie
  let count = getCookie('count');

  // 2. If the cookie exists, increment the value and update the cookie
  if (count !== null) {
    count = parseInt(count) + 1;
  } else {
    // 3. If the cookie does not exist, create it and set the value to 1
    count = 1;
  }

  // 4. Update the cookie
  setCookie('count', count, 1); // Expires in 1 day

  // 5. Display the count on the webpage
  const counterDisplay = document.createElement('div');
  counterDisplay.textContent = `You have visited this page ${count} times.`;
  counterDisplay.style.fontSize = '20px';
  counterDisplay.style.fontFamily = 'Arial, sans-serif';
  counterDisplay.style.marginTop = '20px';
  document.body.appendChild(counterDisplay);
});