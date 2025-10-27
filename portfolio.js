document.addEventListener('DOMContentLoaded', () => {
  const text = 'CROWDFRICA';
  const typewriter = document.getElementById('typewriter');
  let charIndex = 0;

  function type() {
    if (charIndex < text.length) {
      typewriter.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, 150);
    }
  }

  type();
});


document.addEventListener('DOMContentLoaded', () => {
  const textMarzano = 'MARZANO';
  const typewriterMarzano = document.getElementById('typewriter-marzano');
  let charIndexMarzano = 0;

  function typeMarzano() {
    if (charIndexMarzano < textMarzano.length) {
      typewriterMarzano.textContent += textMarzano.charAt(charIndexMarzano);
      charIndexMarzano++;
      setTimeout(typeMarzano, 150);
    }
  }

  setTimeout(typeMarzano, 3000); // empieza después del primero
});


document.addEventListener('DOMContentLoaded', () => {
  // Texto para cada sección
const animations = [
  {
    text: 'CACIQUES',
    elementId: 'typewriter-reintegration',
    delay: 6000
  },
  {
    text: 'VIZCAÍNO',
    elementId: 'typewriter-vizcaino',
    delay: 9000
  },
  {
    text: 'CUERVO',
    elementId: 'typewriter-cuervo',
    delay: 12000
  },
  {
    text: 'CAMINOS DE FUEGO',
    elementId: 'typewriter-caminosdefuego',
    delay: 15000
  },
  {
    text: 'FORMACIÓN Y EXPERIENCIA HELADERA',
    elementId: 'typewriter-formacion',
    delay: 18000
  },
  {
    text: "WEDDING SOFI & MARI",
    elementId: 'typewriter-wedding',
    delay: 19000
  }
];



  animations.forEach(({ text, elementId, delay }) => {
    const element = document.getElementById(elementId);
    let charIndex = 0;

    function typeWriter() {
      if (charIndex < text.length) {
        element.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 150);
      }
    }

    setTimeout(typeWriter, delay);
  });
});
