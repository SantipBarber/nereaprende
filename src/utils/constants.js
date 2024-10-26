export const routes = {
    subjects: {
      social: {
        name: 'Ciencias Sociales',
        courses: {
          4: {
            name: '4º Primaria',
            topics: [
              { 
                id: 'topic-1',
                name: 'La Tierra y el Sistema Solar',
                description: 'Aprende sobre nuestro planeta y el sistema solar'
              },
              // Añadir más temas aquí
            ]
          }
        }
      },
      science: {
        name: 'Ciencias Naturales',
        courses: {
          4: {
            name: '4º Primaria',
            topics: [
              {
                id: 'topic-1',
                name: 'El Cuerpo Humano',
                description: 'Descubre cómo funciona nuestro cuerpo'
              },
              // Añadir más temas aquí
            ]
          }
        }
      }
      // Añadir más asignaturas aquí
    }
  };