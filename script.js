
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }
  

  document.getElementById('link-servicios').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('servicios');
  });
  
  document.getElementById('link-ubicacion').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('ubicacion');
  });
  
  document.getElementById('link-medicos').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('medicos');
  });
  
 
  showSection('servicios');
  