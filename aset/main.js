

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
      link.addEventListener('click', function(event) {
          links.forEach(link => link.classList.remove('active'));
          event.target.classList.add('active');
      });
  });
});

document.querySelectorAll('.card img').forEach(img => {  
  img.addEventListener('click', function() {  
      const modal = document.getElementById('imageModal');  
      const modalImg = document.getElementById('img01');  
      const captionText = document.getElementById('caption');  

      modal.style.display = "block";  
      modalImg.src = this.src; 
      captionText.innerHTML = this.alt;  
  });  
});  

// Menutup modal ketika tombol close diklik  
document.querySelector('body').addEventListener('click', function() {  
  document.getElementById('imageModal').style.display = "none";  
});  
