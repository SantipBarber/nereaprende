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
              name: 'T.1 - La Tierra y el Sistema Solar',
              description: 'Aprende sobre nuestro planeta y el sistema solar'
            }
          ]
        }
      }
    },
    // science: {
    //   name: 'Ciencias Naturales',
    //   courses: {
    //     4: {
    //       name: '4º Primaria',
    //       topics: [
    //         {
    //           id: 'topic-1',
    //           name: 'El Cuerpo Humano',
    //           description: 'Descubre cómo funciona nuestro cuerpo'
    //         }
    //       ]
    //     }
    //   }
    // },
    spanish: {
      name: 'Lengua Castellana',
      courses: {
        4: {
          name: '4º Primaria',
          topics: [
            // {
            //   id: 'topic-1',
            //   name: 'Gramática Básica',
            //   description: 'Aprende las bases del lenguaje'
            // },
            {
              id: 'topic-2',
              name: 'T.2 - ¡Te lo regalo!',
              description: 'Descubre los pronombres personales, la acentuación y el campo léxico a través de los regalos'
            }
          ]
        }
      }
    }
  }
};