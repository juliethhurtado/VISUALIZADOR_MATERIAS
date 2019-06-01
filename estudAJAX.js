
var materias = document.querySelectorAll(".materia");
        materias.forEach((materia) => {
            materia.addEventListener('click', () => {
                materia.classList.toggle('active');
            });
        });
