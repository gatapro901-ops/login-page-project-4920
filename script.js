
      // Import Tailwind CSS
      import '../tailwind.css';

      // Get elements
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      const confirmPasswordInput = document.getElementById('confirm-password');
      const loginButton = document.getElementById('login-button');

      // Animation on page load
      document.addEventListener('DOMContentLoaded', () => {
         // Fade in animation
         document.body.classList.add('animate-fade-in');

         // Delayed animation for inputs and button
         setTimeout(() => {
            emailInput.classList.add('animate-input');
            passwordInput.classList.add('animate-input');
            confirmPasswordInput.classList.add('animate-input');
            loginButton.classList.add('animate-button');
         }, 500);
      });

      // Input focus and blur animation
      const handleInputFocus = (input) => {
         input.classList.add('animate-input-focus');
      };

      const handleInputBlur = (input) => {
         input.classList.remove('animate-input-focus');
      };

      emailInput.addEventListener('focus', () => handleInputFocus(emailInput));
      emailInput.addEventListener('blur', () => handleInputBlur(emailInput));

      passwordInput.addEventListener('focus', () => handleInputFocus(passwordInput));
      passwordInput.addEventListener('blur', () => handleInputBlur(passwordInput));

      confirmPasswordInput.addEventListener('focus', () => handleInputFocus(confirmPasswordInput));
      confirmPasswordInput.addEventListener('blur', () => handleInputBlur(confirmPasswordInput));

      // Login button click event
      loginButton.addEventListener('click', () => {
         // Form validation
         if ([emailInput, passwordInput, confirmPasswordInput].some((input) => input.value === '')) {
            alert('Please fill in all fields');
         } else if (passwordInput.value !== confirmPasswordInput.value) {
            alert('Passwords do not match');
         } else {
            // Submit form
            console.log('Form submitted');
         }
      });
   