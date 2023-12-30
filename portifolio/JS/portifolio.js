const themeToggleBtn = document.querySelector('.theme-toggle');
const pattern = document.querySelector('body')
// state
const theme = localStorage.getItem('theme');

// on mount
theme && document.body.classList.add(theme);

// handlers
const handleThemeToggle = () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
  } else {
    localStorage.removeItem('theme');
  }
};

const patternThemeToggle =()=>{
    if(document.body.backgroundColor='--dark-clr'){
        pattern.style.backgroundImage=`radial-gradient(rgba(25, 225, 225, 0.1) 9%, transparent 9%);
        background-position: 0% 100%;
        background-size: 12vmin 12vmin;`;

    }
    else{

    }
}

// events
themeToggleBtn.addEventListener('click', handleThemeToggle);

//phone copy to clippboard
document.getElementById('phone-number').addEventListener('click', function () {
  // Create a dummy textarea element
  var dummyTextarea = document.createElement('textarea');
  
  // Set the value of the textarea to the phone number
  dummyTextarea.value = this.innerText;

  // Append the textarea to the body
  document.body.appendChild(dummyTextarea);

  // Select the text in the textarea
  dummyTextarea.select();
  
  // Execute the copy command
  document.execCommand('copy');
  
  // Remove the textarea from the DOM
  document.body.removeChild(dummyTextarea);

  // Provide visual feedback to the user (optional)
  alert('Phone number copied to clipboard: ' + this.innerText);
});


