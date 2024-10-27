
export const contentService = {
  // Obtener todos los cursos
  async getCourses() {
    // Simulando llamada a DB
    return courses;
  },

  // Obtener asignaturas de un curso
  async getCourseSubjects(courseId) {
    const course = courses[courseId];
    if (!course) throw new Error('Course not found');
    return course.subjects;
  },

  // Obtener temas de una asignatura
  async getSubjectTopics(courseId, subjectId) {
    const course = courses[courseId];
    if (!course) throw new Error('Course not found');
    
    const subject = course.subjects[subjectId];
    if (!subject) throw new Error('Subject not found');
    
    return subject.topics;
  },

  // Obtener un tema específico
  async getTopic(courseId, subjectId, topicId) {
    const course = courses[courseId];
    if (!course) throw new Error('Course not found');
    
    const subject = course.subjects[subjectId];
    if (!subject) throw new Error('Subject not found');
    
    const topic = subject.topics[topicId];
    if (!topic) throw new Error('Topic not found');
    
    return topic;
  }
};

export const courses = {
    '4': {
        id: '4',
        name: '4º Primaria',
        subjects: {
            'social': {
                id: 'social',
                name: 'Sociales',
                topics: {
                    '1': {
                        id: '1',
                        name: 'La Tierra y el Sistema Solar',
                        content: social_4_topic_1_content,
                        test: social_4_topic_1_test
                    },
                    // '2': {
                    //     id: '2',
                    //     name: 'El Clima y la Vegetación',
                    //     content: social_4_topic_2_content,
                    //     test: social_4_topic_2_test
                    // }
                }
            },
            'spanish': {
                id: 'spanish',
                name: 'Lengua',
                topics: {
                    '1': {
                        id: '1',
                        name: '¡El mundo de los regalos!',
                        content: spanish_4_topic_1_content,
                        test: spanish_4_topic_1_test
                    }
                }
            }
        }
    }
}


const social_4_topic_1_content = [
    {
      title: "¡El mundo de los regalos!",
      content: `
  # ¡El mundo de los regalos!
  
  ¿Te gusta recibir regalos? ¡A todos nos encanta! Los regalos son una forma muy especial de mostrar cariño a las personas que queremos.
  
  ## ¿Qué es un regalo?
  
  Un regalo es algo que damos a otra persona para hacerla feliz. Es como darle un pedacito de nuestro cariño envuelto en papel bonito. 
  
  ### Tipos de regalos
  - **Regalos materiales:** Son cosas que podemos tocar
    - Juguetes
    - Libros
    - Ropa
    - Dulces
  
  - **Regalos especiales:** Son cosas que no podemos tocar pero son muy valiosas
    - Un abrazo
    - Una sonrisa
    - Tiempo juntos
    - Ayuda cuando la necesitan
  
  ## Palabras mágicas para los regalos
  - **Obsequio:** Otra forma de decir regalo
  - **Presente:** También significa regalo
  - **Gratuito:** Algo que no cuesta dinero
  - **Agradecer:** Dar las gracias por algo
  - **Empaquetar:** Envolver un regalo
  - **Afecto:** El cariño que sentimos
  
  > ¡Recuerda! Lo más importante de un regalo no es lo que cuesta, sino el cariño con que lo damos.
      `,
      image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Prezenty_EXP_096_%28ubt%29.JPG"
    },
    {
      title: "Los pronombres personales: ¡Nuestros amigos las palabras!",
      content: `
  # Los pronombres personales: ¡Nuestros amigos las palabras!
  
  ¿Sabías que hay palabras especiales que usamos para no repetir los nombres todo el tiempo? ¡Son los pronombres personales!
  
  ## ¿Quién es quién?
  
  ### Cuando hablo de mí mismo
  - **yo:** Cuando cuento algo sobre mí
    *Ejemplo:* Yo tengo un regalo para ti
  - **nosotros/nosotras:** Cuando hablo de mí y otras personas
    *Ejemplo:* Nosotros vamos a la fiesta
  
  ### Cuando hablo contigo
  - **tú:** Cuando hablo directamente contigo
    *Ejemplo:* Tú eres mi mejor amigo
  - **vosotros/vosotras:** Cuando hablo con varios amigos
    *Ejemplo:* Vosotros sois muy divertidos
  
  ### Cuando hablo de otros
  - **él/ella:** Cuando hablo de otra persona
    *Ejemplo:* Él me dio un regalo
  - **ellos/ellas:** Cuando hablo de varias personas
    *Ejemplo:* Ellas compraron el pastel
  
  ## ¡Juguemos con los pronombres!
  - En vez de decir "María tiene un regalo", podemos decir "Ella tiene un regalo"
  - En vez de decir "Lucìa y yo vamos a la fiesta", podemos decir "Nosotras vamos a la fiesta"
  
  > ¡Los pronombres personales nos ayudan a hablar mejor y más fácil!
      `,
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Word_Art_LSP_arc-en-ciel.svg"
    },
    {
      title: "¡Las palabras con tilde!",
      content: `
  # ¡Las palabras con tilde!
  
  ¿Has visto esas rayitas que algunas palabras llevan encima? ¡Son las tildes! Y son muy importantes para hablar y escribir bien.
  
  ## Palabras agudas: ¡Las campeonas del acento!
  
  ### ¿Qué son las palabras agudas?
  - Son palabras que suenan más fuerte en la última sílaba
  - Es como si dieran un saltito al final
    
  ### ¿Cuándo llevan tilde?
  Llevan tilde cuando terminan en:
  - **Vocal:** mamá, bebé, sofá
  - **N:** camión, balón, jardín
  - **S:** adiós, francés, compás
  
  ## Ejemplos divertidos
  - **regaló:** Le regaló un juguete
  - **celebración:** La celebración fue divertida
  - **bambú:** El oso panda come bambú
  - **jardín:** Jugamos en el jardín
  - **compás:** Dibujó un círculo con el compás
  
  ## ¡Practiquemos!
  - Cuando veas estas palabras, fíjate si necesitan tilde:
    - corazon ➡️ corazón
    - jamas ➡️ jamás
    - cafe ➡️ café
  
  > ¡Recuerda! La tilde es como un sombrerito que algunas palabras necesitan para estar completas.
      `,
      image: ""
    },
    {
      title: "¡La magia de agradecer!",
      content: `
  # ¡La magia de agradecer!
  
  Cuando recibimos un regalo, es muy importante saber dar las gracias. ¡Es como devolver un poquito del cariño que nos han dado!
  
  ## ¿Cómo agradecer un regalo?
  
  ### Palabras mágicas
  - **"Muchas gracias":** La frase más importante
  - **"Me encanta":** Si el regalo te gusta mucho
  - **"Es justo lo que quería":** Si es algo que deseabas
  - **"Qué detalle tan bonito":** Para mostrar que aprecias el gesto
  
  ### Gestos de agradecimiento
  - Una sonrisa grande
  - Un abrazo (si es alguien cercano)
  - Mostrar interés por el regalo
  - Usar el regalo con cuidado
  
  ## Cómo escribir una nota de agradecimiento
  1. Empezar con un saludo cariñoso
  2. Decir "gracias" por el regalo
  3. Explicar por qué te gusta
  4. Terminar con cariño
  
  ### Ejemplo de nota:
  *Querida abuelita:*
  *Muchas gracias por el libro que me regalaste. Me encantan los cuentos de aventuras y ya he empezado a leerlo. Eres la mejor abuelita del mundo.*
  *Con mucho cariño,*
  *tu nieto/a*
  
  > ¡Agradecer hace felices a los demás y nos hace felices a nosotros también!
      `,
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/AI_created_image_of_a_wizard_and_a_black_cat.jpg"
    },
    {
      title: "¡Conectando palabras!",
      content: `
  # ¡Conectando palabras!
  
  ¿Sabías que las palabras son como una gran familia? Algunas están más relacionadas entre sí que otras. ¡Vamos a descubrir cómo se conectan!
  
  ## El campo léxico: ¡Palabras que van juntas!
  
  ### ¿Qué es un campo léxico?
  - Es un grupo de palabras que se relacionan entre sí
  - Son como primos y hermanos en la familia de las palabras
  
  ### Ejemplos de campos léxicos
  
  #### Campo léxico de los regalos
  - Regalo
  - Obsequio
  - Presente
  - Sorpresa
  - Envoltorio
  - Lazo
  - Tarjeta
  
  #### Campo léxico de la fiesta
  - Celebración
  - Globos
  - Tarta
  - Invitados
  - Juegos
  - Música
  - Baile
  
 
  
  > ¡Encontrar palabras relacionadas nos ayuda a aprender y a expresarnos mejor!¡Practica!
      `,
      image: ""
    }
  ];

  const social_4_topic_1_test= [
    {
      question: "¿Cuál es el planeta más cercano al Sol?",
      options: ["Venus", "Mercurio", "Marte", "Tierra"],
      correctAnswer: 1
    },
    {
      question: "¿Cuánto tarda la Tierra en completar una rotación?",
      options: ["12 horas", "24 horas", "365 días", "28 días"],
      correctAnswer: 1
    },
    {
      question: "¿Qué capa de la Tierra contiene el magma?",
      options: ["Corteza", "Manto", "Núcleo", "Atmósfera"],
      correctAnswer: 1
    },
    {
      question: "¿Qué representa la escala en un mapa?",
      options: ["Los colores", "La relación de tamaño con la realidad", "Los nombres de los lugares", "La orientación"],
      correctAnswer: 1
    },
    {
      question: "¿Qué movimiento de la Tierra causa las estaciones del año?",
      options: ["Rotación", "Traslación", "Precesión", "Nutación"],
      correctAnswer: 1
    },
    {
      question: "¿Cuál es el planeta más grande del Sistema Solar?",
      options: ["Tierra", "Marte", "Júpiter", "Saturno"],
      correctAnswer: 2
    },
    {
      question: "¿Qué porcentaje de la superficie terrestre está cubierto por agua?",
      options: ["50%", "61%", "71%", "81%"],
      correctAnswer: 2
    },
    {
      question: "¿Cuál es el gas más abundante en la atmósfera terrestre?",
      options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Argón"],
      correctAnswer: 1
    },
    {
      question: "¿Qué línea imaginaria divide la Tierra en hemisferios norte y sur?",
      options: ["Trópico de Cáncer", "Meridiano de Greenwich", "Ecuador", "Círculo Polar Ártico"],
      correctAnswer: 2
    },
    {
      question: "¿Cuál es la capa más externa de la Tierra?",
      options: ["Manto", "Núcleo", "Corteza", "Atmósfera"],
      correctAnswer: 2
    },
    {
      question: "¿Cuántos planetas hay en nuestro Sistema Solar?",
      options: ["7", "8", "9", "10"],
      correctAnswer: 1
    },
    {
      question: "¿Qué planeta es conocido como el 'planeta rojo'?",
      options: ["Júpiter", "Marte", "Venus", "Saturno"],
      correctAnswer: 1
    },
    {
      question: "¿Cuál es el satélite natural de la Tierra?",
      options: ["Fobos", "Europa", "La Luna", "Titán"],
      correctAnswer: 2
    },
    {
      question: "¿Qué planeta tiene los famosos anillos?",
      options: ["Júpiter", "Urano", "Neptuno", "Saturno"],
      correctAnswer: 3
    },
    {
      question: "¿Cuánto tarda la Tierra en dar una vuelta completa alrededor del Sol?",
      options: ["24 horas", "7 días", "30 días", "365 días"],
      correctAnswer: 3
    },
    {
      question: "¿Qué es un asteroide?",
      options: ["Un planeta pequeño", "Una estrella fugaz", "Una roca espacial", "Un satélite artificial"],
      correctAnswer: 2
    },
    {
      question: "¿Qué es la hidrosfera?",
      options: ["El conjunto de nubes", "Toda el agua de la Tierra", "La capa de ozono", "El núcleo de la Tierra"],
      correctAnswer: 1
    },
    {
      question: "¿Qué instrumento se usa para ver objetos lejanos en el espacio?",
      options: ["Microscopio", "Telescopio", "Termómetro", "Barómetro"],
      correctAnswer: 1
    },
    {
      question: "¿Cuál es el planeta más caliente del Sistema Solar?",
      options: ["Mercurio", "Venus", "Marte", "Júpiter"],
      correctAnswer: 1
    },
    {
      question: "¿Qué es un cometa?",
      options: ["Una estrella fugaz", "Un planeta enano", "Una bola de hielo y polvo con cola", "Un satélite artificial"],
      correctAnswer: 2
    }
  ];
  
const spanish_4_topic_1_content = [
    {
      title: "¡El mundo de los regalos!",
      content: `
  # ¡El mundo de los regalos!
  
  ¿Te gusta recibir regalos? ¡A todos nos encanta! Los regalos son una forma muy especial de mostrar cariño a las personas que queremos.
  
  ## ¿Qué es un regalo?
  
  Un regalo es algo que damos a otra persona para hacerla feliz. Es como darle un pedacito de nuestro cariño envuelto en papel bonito. 
  
  ### Tipos de regalos
  - **Regalos materiales:** Son cosas que podemos tocar
    - Juguetes
    - Libros
    - Ropa
    - Dulces
  
  - **Regalos especiales:** Son cosas que no podemos tocar pero son muy valiosas
    - Un abrazo
    - Una sonrisa
    - Tiempo juntos
    - Ayuda cuando la necesitan
  
  ## Palabras mágicas para los regalos
  - **Obsequio:** Otra forma de decir regalo
  - **Presente:** También significa regalo
  - **Gratuito:** Algo que no cuesta dinero
  - **Agradecer:** Dar las gracias por algo
  - **Empaquetar:** Envolver un regalo
  - **Afecto:** El cariño que sentimos
  
  > ¡Recuerda! Lo más importante de un regalo no es lo que cuesta, sino el cariño con que lo damos.
      `,
      image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Prezenty_EXP_096_%28ubt%29.JPG"
    },
    {
      title: "Los pronombres personales: ¡Nuestros amigos las palabras!",
      content: `
  # Los pronombres personales: ¡Nuestros amigos las palabras!
  
  ¿Sabías que hay palabras especiales que usamos para no repetir los nombres todo el tiempo? ¡Son los pronombres personales!
  
  ## ¿Quién es quién?
  
  ### Cuando hablo de mí mismo
  - **yo:** Cuando cuento algo sobre mí
    *Ejemplo:* Yo tengo un regalo para ti
  - **nosotros/nosotras:** Cuando hablo de mí y otras personas
    *Ejemplo:* Nosotros vamos a la fiesta
  
  ### Cuando hablo contigo
  - **tú:** Cuando hablo directamente contigo
    *Ejemplo:* Tú eres mi mejor amigo
  - **vosotros/vosotras:** Cuando hablo con varios amigos
    *Ejemplo:* Vosotros sois muy divertidos
  
  ### Cuando hablo de otros
  - **él/ella:** Cuando hablo de otra persona
    *Ejemplo:* Él me dio un regalo
  - **ellos/ellas:** Cuando hablo de varias personas
    *Ejemplo:* Ellas compraron el pastel
  
  ## ¡Juguemos con los pronombres!
  - En vez de decir "María tiene un regalo", podemos decir "Ella tiene un regalo"
  - En vez de decir "Lucìa y yo vamos a la fiesta", podemos decir "Nosotras vamos a la fiesta"
  
  > ¡Los pronombres personales nos ayudan a hablar mejor y más fácil!
      `,
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Word_Art_LSP_arc-en-ciel.svg"
    },
    {
      title: "¡Las palabras con tilde!",
      content: `
  # ¡Las palabras con tilde!
  
  ¿Has visto esas rayitas que algunas palabras llevan encima? ¡Son las tildes! Y son muy importantes para hablar y escribir bien.
  
  ## Palabras agudas: ¡Las campeonas del acento!
  
  ### ¿Qué son las palabras agudas?
  - Son palabras que suenan más fuerte en la última sílaba
  - Es como si dieran un saltito al final
    
  ### ¿Cuándo llevan tilde?
  Llevan tilde cuando terminan en:
  - **Vocal:** mamá, bebé, sofá
  - **N:** camión, balón, jardín
  - **S:** adiós, francés, compás
  
  ## Ejemplos divertidos
  - **regaló:** Le regaló un juguete
  - **celebración:** La celebración fue divertida
  - **bambú:** El oso panda come bambú
  - **jardín:** Jugamos en el jardín
  - **compás:** Dibujó un círculo con el compás
  
  ## ¡Practiquemos!
  - Cuando veas estas palabras, fíjate si necesitan tilde:
    - corazon ➡️ corazón
    - jamas ➡️ jamás
    - cafe ➡️ café
  
  > ¡Recuerda! La tilde es como un sombrerito que algunas palabras necesitan para estar completas.
      `,
      image: ""
    },
    {
      title: "¡La magia de agradecer!",
      content: `
  # ¡La magia de agradecer!
  
  Cuando recibimos un regalo, es muy importante saber dar las gracias. ¡Es como devolver un poquito del cariño que nos han dado!
  
  ## ¿Cómo agradecer un regalo?
  
  ### Palabras mágicas
  - **"Muchas gracias":** La frase más importante
  - **"Me encanta":** Si el regalo te gusta mucho
  - **"Es justo lo que quería":** Si es algo que deseabas
  - **"Qué detalle tan bonito":** Para mostrar que aprecias el gesto
  
  ### Gestos de agradecimiento
  - Una sonrisa grande
  - Un abrazo (si es alguien cercano)
  - Mostrar interés por el regalo
  - Usar el regalo con cuidado
  
  ## Cómo escribir una nota de agradecimiento
  1. Empezar con un saludo cariñoso
  2. Decir "gracias" por el regalo
  3. Explicar por qué te gusta
  4. Terminar con cariño
  
  ### Ejemplo de nota:
  *Querida abuelita:*
  *Muchas gracias por el libro que me regalaste. Me encantan los cuentos de aventuras y ya he empezado a leerlo. Eres la mejor abuelita del mundo.*
  *Con mucho cariño,*
  *tu nieto/a*
  
  > ¡Agradecer hace felices a los demás y nos hace felices a nosotros también!
      `,
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/AI_created_image_of_a_wizard_and_a_black_cat.jpg"
    },
    {
      title: "¡Conectando palabras!",
      content: `
  # ¡Conectando palabras!
  
  ¿Sabías que las palabras son como una gran familia? Algunas están más relacionadas entre sí que otras. ¡Vamos a descubrir cómo se conectan!
  
  ## El campo léxico: ¡Palabras que van juntas!
  
  ### ¿Qué es un campo léxico?
  - Es un grupo de palabras que se relacionan entre sí
  - Son como primos y hermanos en la familia de las palabras
  
  ### Ejemplos de campos léxicos
  
  #### Campo léxico de los regalos
  - Regalo
  - Obsequio
  - Presente
  - Sorpresa
  - Envoltorio
  - Lazo
  - Tarjeta
  
  #### Campo léxico de la fiesta
  - Celebración
  - Globos
  - Tarta
  - Invitados
  - Juegos
  - Música
  - Baile
  
 
  
  > ¡Encontrar palabras relacionadas nos ayuda a aprender y a expresarnos mejor!¡Practica!
      `,
      image: ""
    }
  ];

  const spanish_4_topic_1_test = [
    {
      question: "¿Cuál de estas palabras pertenece al campo léxico de los regalos?",
      options: ["Lápiz", "Obsequio", "Pelota", "Cuaderno"],
      correctAnswer: 1
    },
    {
      question: "¿Qué pronombre personal usarías para hablar de ti mismo?",
      options: ["Él", "Tú", "Yo", "Ella"],
      correctAnswer: 2
    },
    {
      question: "¿Cuál de estas palabras agudas debe llevar tilde?",
      options: ["Corazon", "Lapiz", "Papel", "Jamás"],
      correctAnswer: 3
    },
    {
      question: "¿Qué pronombre usamos cuando hablamos de varias personas incluyéndonos?",
      options: ["Yo", "Ellos", "Nosotros", "Vosotros"],
      correctAnswer: 2
    },
    {
      question: "¿Cuál es la mejor forma de agradecer un regalo?",
      options: ["No decir nada", "Decir 'ya era hora'", "Decir 'muchas gracias'", "Guardarlo sin abrirlo"],
      correctAnswer: 2
    },
    {
      question: "¿Qué palabra es sinónimo de regalo?",
      options: ["Juguete", "Presente", "Tienda", "Papel"],
      correctAnswer: 1
    },
    {
      question: "¿Cuándo lleva tilde una palabra aguda?",
      options: ["Nunca", "Siempre", "Cuando termina en vocal, n o s", "Cuando empieza por vocal"],
      correctAnswer: 2
    },
    {
      question: "¿Cuál de estas palabras pertenece al campo léxico de la celebración?",
      options: ["Libro", "Mesa", "Fiesta", "Zapato"],
      correctAnswer: 2
    },
    {
      question: "¿Qué pronombre usamos para hablar de otra persona?",
      options: ["Yo", "Tú", "Él/Ella", "Nosotros"],
      correctAnswer: 2
    },
    {
      question: "¿Cuál de estas palabras NO es aguda?",
      options: ["Cantar", "Papel", "Árbol", "Jamás"],
      correctAnswer: 2
    },
    {
      question: "¿Qué pronombre usamos cuando hablamos con varias personas?",
      options: ["Tú", "Ellos", "Nosotros", "Vosotros"],
      correctAnswer: 3
    },
    {
      question: "¿Qué palabra NO pertenece al campo léxico de los regalos?",
      options: ["Envoltorio", "Lazo", "Tarjeta", "Pelota"],
      correctAnswer: 3
    },
    {
      question: "¿Cuál de estas palabras agudas necesita tilde?",
      options: ["Amistad", "Papel", "Raton", "Reloj"],
      correctAnswer: 2
    },
    {
      question: "¿Qué pronombre personal es de segunda persona singular?",
      options: ["Yo", "Tú", "Él", "Ella"],
      correctAnswer: 1
    },
    {
      question: "¿Cuál es la mejor ocasión para hacer un regalo?",
      options: ["Cuando quieres algo a cambio", "Solo en Navidad", "Cuando quieres mostrar cariño", "Nunca"],
      correctAnswer: 2
    },
    {
      question: "¿Qué es un campo léxico?",
      options: ["Un lugar para jugar", "Palabras relacionadas entre sí", "Un tipo de regalo", "Un juego de mesa"],
      correctAnswer: 1
    },
    {
      question: "¿Cuál de estas palabras NO lleva tilde?",
      options: ["Jamas", "Correr", "Café", "Mamá"],
      correctAnswer: 1
    },
    {
      question: "¿Qué pronombre usamos cuando alguien habla de sí mismo?",
      options: ["Tú", "Él", "Yo", "Nosotros"],
      correctAnswer: 2
    },
    {
      question: "¿Cuál es un ejemplo de regalo inmaterial?",
      options: ["Un juguete", "Un libro", "Un abrazo", "Una pelota"],
      correctAnswer: 2
    },
    {
      question: "¿Qué palabra NO pertenece al campo léxico de la gratitud?",
      options: ["Gracias", "Agradecido", "Enfadado", "Reconocimiento"],
      correctAnswer: 2
    }
  ];