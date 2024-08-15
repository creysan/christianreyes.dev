// Light and dark mode functionality.
document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const lightModeCSS = document.getElementById('light-mode-css');
  const darkModeCSS = document.getElementById('dark-mode-css');

  // Function to apply the theme
  const applyTheme = (isDark) => {
      if (isDark) {
          lightModeCSS.setAttribute('media', 'none');
          lightModeCSS.setAttribute('disabled', 'disabled');
          darkModeCSS.removeAttribute('media');
          darkModeCSS.removeAttribute('disabled');
          document.body.classList.add('dark-mode');
      } else {
          darkModeCSS.setAttribute('media', 'none');
          darkModeCSS.setAttribute('disabled', 'disabled');
          lightModeCSS.removeAttribute('media');
          lightModeCSS.removeAttribute('disabled');
          document.body.classList.remove('dark-mode');
      }
  };

  // Event listener for the toggle switch
  darkModeToggle.addEventListener('change', function () {
      const isDark = this.checked;
      applyTheme(isDark);
      // Save the preference to localStorage
      localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
  });

  // On page load, check localStorage and apply the saved theme
  const savedTheme = localStorage.getItem('darkMode');
  if (savedTheme === 'enabled') {
      darkModeToggle.checked = true;
      applyTheme(true);
  } else {
      darkModeToggle.checked = false;
      applyTheme(false);
  }
});



// Add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if (top >= 965) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// Copy email address to clipboard from footer icon
$(document).ready(function() {
	
	// Add class to mailto link
	// Needed to separate the disabling of the default action AND copy email to clipboard
	$('a[href^=mailto]').addClass('mailto-link');

	var mailto = $('.mailto-link');
	var messageCopy = 'Click to copy email address';
	var messageSuccess = 'Email address copied to clipboard';
	
	mailto.append('<span class="mailto-message"></span>');
	
	// Disable opening your email client. yuk.
	$('a[href^=mailto]').click(function() {
		return false; 
	})
	
	// On click, get href and remove 'mailto:' from value
	// Store email address in a variable.
	mailto.click(function() {
		var href = $(this).attr('href');
		var email = href.replace('mailto:', '');
		copyToClipboard(email);
		$('.mailto-message').empty().append();
	});
});


// Copies the email variable to clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}


// Disable right-click
/* 
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};
*/



$(document).ready(function() {
    var banner_height = $("#navscroll").height();
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var currScrollTop = $(this).scrollTop();
        if (scroll >= banner_height && currScrollTop > lastScrollTop) {
            $("#banner").hide();
        } else {
            $("#banner").show();
        }
        lastScrollTop = currScrollTop;
    });
});
