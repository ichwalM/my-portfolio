

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
      link.addEventListener('click', function(event) {
          links.forEach(link => link.classList.remove('active'));
          event.target.classList.add('active');
      });
  });
});