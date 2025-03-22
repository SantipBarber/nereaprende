export const content = [
    {
      title: "La División: Aprendemos a repartir",
      content: `
  # La División: Aprendemos a repartir
  
  ¿Alguna vez has tenido que repartir caramelos entre tus amigos? ¿O has visto cómo se reparten manzanas en el mercado de Avilés? Esto es básicamente una división: **repartir en partes iguales**.
  
  ## ¿Qué es una división?
  
  Una división es una operación matemática que consiste en **repartir una cantidad en partes iguales**. Imagina que tienes 12 castaños asturianos y quieres plantarlos en 3 filas iguales. ¿Cuántos castaños pondrás en cada fila? ¡Exacto! 4 castaños por fila.
  
  ## Los elementos de la división
  
  Toda división tiene cuatro elementos importantes:
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">Dividendo (D)</h2>
          <p>Es la cantidad que vamos a repartir.</p>
          <p>Por ejemplo: Si repartimos 20 manzanas, el dividendo es 20.</p>
        </div>
      </div>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">Divisor (d)</h2>
          <p>Es el número de partes iguales en que repartimos.</p>
          <p>Por ejemplo: Si repartimos en 4 bolsas, el divisor es 4.</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">Cociente (c)</h2>
          <p>Es lo que corresponde a cada parte.</p>
          <p>Por ejemplo: Si en cada bolsa ponemos 5 manzanas, el cociente es 5.</p>
        </div>
      </div>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">Resto (r)</h2>
          <p>Es lo que sobra en el reparto.</p>
          <p>Por ejemplo: Si sobra 1 manzana, el resto es 1.</p>
        </div>
      </div>
    </div>
  </div>
  
  ## División exacta y división entera
  
  Las divisiones pueden ser de dos tipos:
  
  ### División exacta
  Es aquella en la que **el resto es 0**, es decir, no sobra nada tras el reparto.
  
  **Ejemplo:** Si repartimos 15 avellanas entre 3 niños, cada uno recibe 5 avellanas y no sobra ninguna.
  - Dividendo: 15
  - Divisor: 3
  - Cociente: 5
  - Resto: 0
  
  ### División entera
  Es aquella en la que **el resto es distinto de 0**, es decir, sobra algo tras el reparto.
  
  **Ejemplo:** Si repartimos 16 manzanas entre 5 cestas, ponemos 3 manzanas en cada cesta y sobra 1 manzana.
  - Dividendo: 16
  - Divisor: 5
  - Cociente: 3
  - Resto: 1
      `,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Long_division_animation.gif/220px-Long_division_animation.gif"
    },
    {
      title: "Comprobando si una división está bien hecha",
      content: `
  # Comprobando si una división está bien hecha
  
  Cuando hacemos una división, es muy importante comprobar si la hemos hecho correctamente. Para ello, podemos usar la **prueba de la división**.
  
  ## La prueba de la división
  
  Si una división está bien hecha, se cumplen estas dos condiciones:
  
  1. **El resto debe ser menor que el divisor**
  2. **Divisor × Cociente + Resto = Dividendo**
  
  ### Ejemplo
  
  Vamos a comprobar si esta división está bien hecha:
  
  > 271 ÷ 5 = 54, resto 1
  
  Comprobamos las dos condiciones:
  
  1. ¿Es el resto (1) menor que el divisor (5)? 
     Sí, 1 < 5 ✓
  
  2. ¿Se cumple la igualdad: divisor × cociente + resto = dividendo?
     5 × 54 + 1 = 270 + 1 = 271 ✓
  
  Como se cumplen las dos condiciones, ¡la división está bien hecha!
  
  ## Practiquemos con un ejemplo asturiano
  
  Imagina que en la Feria de la Avellana de Infiesto hay 347 kg de avellanas que se quieren repartir en 6 puestos iguales.
  
  Si hacemos la división:
  347 ÷ 6 = 57, resto 5
  
  Comprobamos:
  1. ¿Es 5 < 6? Sí ✓
  2. 6 × 57 + 5 = 342 + 5 = 347 ✓
  
  ¡La división está correcta! Cada puesto recibirá 57 kg de avellanas y sobrarán 5 kg.
  
  > **Dato curioso:** En Asturias, las avellanas o "ablanes" son muy importantes en la gastronomía tradicional. Se usan en postres típicos como el "arroz con leche" y el "frixuelo".
      `,
      image: ""
    },
    {
      title: "Divisiones con ceros en el cociente",
      content: `
  # Divisiones con ceros en el cociente
  
  A veces, cuando hacemos divisiones más complicadas, nos encontramos con una situación especial: ¿qué hacemos cuando una cifra del dividendo es menor que el divisor?
  
  ## ¿Qué hacer cuando no podemos dividir?
  
  Si durante la división tenemos que dividir un número que es **menor que el divisor**, seguimos estos pasos:
  
  1. Escribimos un **0 en el cociente**
  2. **Bajamos la siguiente cifra** del dividendo
  3. Continuamos la división
  
  ## Ejemplo paso a paso
  
  Vamos a dividir 532 entre 5:
  
  1. Dividimos la primera cifra del dividendo (5) entre el divisor (5):
     5 ÷ 5 = 1, resto 0
     Ponemos 1 en el cociente.
  
  2. Bajamos la siguiente cifra (3):
     3 es menor que 5, así que no podemos dividir.
     Ponemos 0 en el cociente y bajamos la siguiente cifra (2).
     Ahora tenemos 32.
  
  3. Dividimos 32 entre 5:
     32 ÷ 5 = 6, resto 2
     Ponemos 6 en el cociente.
  
  4. Como no hay más cifras que bajar, la división termina.
     El resultado es: 532 ÷ 5 = 106, resto 2
  
  ## Un ejemplo asturiano
  
  En el puerto de Gijón han llegado 2.045 kg de pescado que hay que repartir en 8 camiones para distribuir por Asturias. ¿Cuántos kg llevará cada camión?
  
  2.045 ÷ 8 = 255, resto 5
  
  1. Empezamos: 2 ÷ 8 es menor, no se puede dividir.
     Ponemos 0 en el cociente y bajamos la cifra siguiente: 20.
  
  2. 20 ÷ 8 = 2, resto 4.
     Ponemos 2 en el cociente.
  
  3. Bajamos la siguiente cifra: 4.
     44 ÷ 8 = 5, resto 4.
     Ponemos 5 en el cociente.
  
  4. Bajamos la última cifra: 5.
     45 ÷ 8 = 5, resto 5.
     Ponemos 5 en el cociente.
  
  Resultado: cada camión llevará 255 kg de pescado y sobrarán 5 kg.
      `,
      image: ""
    },
    {
      title: "Problemas de varias operaciones",
      content: `
  # Problemas de varias operaciones
  
  En la vida real, muchos problemas no se resuelven con una sola operación. A veces necesitamos hacer varios cálculos antes de llegar a la solución final.
  
  ## Pasos para resolver problemas complejos
  
  1. **Lee atentamente** el problema
  2. **Identifica** qué te piden
  3. **Averigua** qué datos necesitas
  4. **Decide** qué operaciones hay que hacer y en qué orden
  5. **Calcula** paso a paso
  6. **Comprueba** que la solución es correcta
  
  ## Ejemplo: La sidra de Asturias
  
  Una sidrería de Oviedo recibe 2.500 litros de sidra para embotellar. Si cada botella contiene 0,75 litros y se embotellan en cajas de 12 botellas:
  
  a) ¿Cuántas botellas se llenarán?
  b) ¿Cuántas cajas completas se podrán formar?
  c) ¿Sobrará alguna botella?
  
  ### Resolución paso a paso:
  
  **Para averiguar cuántas botellas:**
  2.500 ÷ 0,75 = 3.333,33...
  Como no podemos tener una fracción de botella, serán 3.333 botellas completas y sobrará un poco de sidra.
  
  **Para averiguar cuántas cajas:**
  3.333 ÷ 12 = 277,75
  Se podrán formar 277 cajas completas.
  
  **Para averiguar si sobran botellas:**
  277 × 12 = 3.324 botellas en cajas completas
  3.333 - 3.324 = 9 botellas sueltas
  
  ### Solución:
  a) Se llenarán 3.333 botellas
  b) Se formarán 277 cajas completas
  c) Sobrarán 9 botellas
  
  ## Ejemplo: El teleférico de Fuente Dé
  
  Aunque Fuente Dé está en Cantabria, muchos asturianos visitan este teleférico. Cada cabina puede llevar 20 personas y sale cada 15 minutos. Si un grupo de 256 estudiantes asturianos quiere subir:
  
  a) ¿Cuántas cabinas necesitarán?
  b) ¿Cuánto tiempo tardarán en subir todos?
  
  ### Resolución:
  **Número de cabinas:**
  256 ÷ 20 = 12,8
  Necesitarán 13 cabinas (la última no irá llena).
  
  **Tiempo total:**
  13 cabinas × 15 minutos = 195 minutos = 3 horas y 15 minutos
  
  ### Solución:
  a) Necesitarán 13 cabinas
  b) Tardarán 3 horas y 15 minutos en subir todos
      `,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Pouring_Asturian_cider.jpg/1280px-Pouring_Asturian_cider.jpg"
    },
    {
      title: "Reparto equitativo: Trabajamos en equipo",
      content: `
  # Reparto equitativo: Trabajamos en equipo
  
  En nuestra vida diaria, a menudo tenemos que repartir cosas de forma justa. Esta es una aplicación práctica de la división.
  
  ## ¿Qué es un reparto equitativo?
  
  Un reparto equitativo es cuando dividimos algo en partes iguales, de manera que:
  - Cada parte recibe la misma cantidad
  - Se aprovecha al máximo lo que tenemos (se intenta que sobre lo menos posible)
  
  ## Ejemplos cotidianos en Asturias
  
  ### Ejemplo 1: Reparto de gaitas
  Una escuela de música tradicional asturiana tiene 27 gaitas para sus 8 alumnos.
  - ¿Cuántas gaitas recibirá cada alumno?
  - ¿Sobrarán gaitas?
  
  Hacemos la división: 27 ÷ 8 = 3, resto 3
  - Cada alumno recibirá 3 gaitas
  - Sobrarán 3 gaitas
  
  ### Ejemplo 2: Excursión a los Lagos de Covadonga
  Una clase de 32 estudiantes va de excursión a los Lagos de Covadonga. Si cada teleférico lleva 6 personas:
  - ¿Cuántos teleféricos necesitan?
  - ¿Irán todos los teleféricos llenos?
  
  Hacemos la división: 32 ÷ 6 = 5, resto 2
  - Necesitan 6 teleféricos (el último irá con solo 2 personas)
  - 5 teleféricos irán llenos y 1 teleférico irá con 2 personas
  
  ## Repartiendo el tiempo: un plan para estudiar
  
  Olaya tiene que estudiar para un examen. Necesita repasar 5 temas y tiene 3 horas para estudiar.
  
  Para hacer un reparto equitativo del tiempo:
  3 horas = 180 minutos
  180 ÷ 5 = 36 minutos por tema
  
  Olaya debe dedicar 36 minutos a cada tema.
  
  ## Consejos para hacer repartos equitativos
  
  1. **Identifica la cantidad total** a repartir (dividendo)
  2. **Decide en cuántas partes** vas a repartir (divisor)
  3. **Haz la división** para saber cuánto toca a cada parte (cociente)
  4. **Comprueba si sobra algo** (resto)
  5. **Decide qué hacer con lo que sobra** (si es que sobra algo)
      `,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Gaiteru_asturianu.jpg/800px-Gaiteru_asturianu.jpg"
    }
  ];