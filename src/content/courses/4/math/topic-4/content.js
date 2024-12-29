import mathAngles from "./assets/math-angles.svg"

export const content = [
    {
      title: "Descubriendo los ángulos",
      content: `
  # Los ángulos: Nuestros amigos en las formas 

  <div class="flex justify-center my-8">
    <img src="${mathAngles}" alt="Conceptos sobre ángulos: Los tipos de ánguos y sus medidas (°)" class="w-full max-w-5xl" />
  </div>
  
  ¿Te has fijado alguna vez en las esquinas de los edificios? ¿O en las puntas de la estrella que corona la Catedral de Oviedo? ¡Todo esto tiene que ver con los ángulos!
  
  ## ¿Qué es un ángulo?
  Un ángulo es como un abrazo entre dos líneas rectas que se encuentran en un punto. Estas líneas se llaman **lados** y el punto donde se encuentran es el **vértice**.
  
  ### Los tipos de ángulos
  Imagina que tienes un abanico asturiano tradicional. Según lo abras más o menos, formarás diferentes tipos de ángulos:
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Ángulo agudo</h3>
      <p>Es como un abanico poco abierto</p>
      <p>Mide menos de 90°</p>
      <p>¡Como las puntas de una estrella!</p>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Ángulo recto</h3>
      <p>Es como la esquina de tu libro</p>
      <p>Mide exactamente 90°</p>
      <p>¡Como las esquinas de tu clase!</p>
    </div>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Ángulo obtuso</h3>
      <p>Es como un abanico bien abierto</p>
      <p>Mide más de 90°</p>
      <p>¡Como algunas pendientes de los Picos de Europa!</p>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Ángulo llano</h3>
      <p>Es como un abanico totalmente abierto</p>
      <p>Mide 180°</p>
      <p>¡Como una regla extendida!</p>
    </div>
  </div>
  
  ## ¿Cómo medimos los ángulos?
  Los ángulos se miden en grados (°) usando un transportador. ¡Es como un semicírculo mágico con números!
  
  > ¡Dato curioso! Los antiguos asturianos usaban el sol y las sombras para medir ángulos cuando construían sus hórreos y paneras.
      `,
    },
    {
      title: "El mundo de los polígonos",
      content: `
  # Los polígonos: Las formas que nos rodean
  
  ¿Has visto los hórreos asturianos? ¡Están llenos de polígonos! Un polígono es una figura plana cerrada formada por líneas rectas.
  
  ## Las partes de un polígono
  - **Lados**: Son las líneas rectas que forman el polígono
  - **Vértices**: Son los puntos donde se juntan los lados
  - **Ángulos**: Son los rinconcitos que se forman entre dos lados
  - **Diagonales**: Son las líneas que unen vértices no consecutivos
  
  ## La familia de los polígonos
  Según el número de lados que tengan, los polígonos tienen diferentes nombres:
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Los más pequeños</h3>
      <ul class="list-disc pl-4">
        <li>Triángulo: 3 lados</li>
        <li>Cuadrilátero: 4 lados</li>
        <li>Pentágono: 5 lados</li>
      </ul>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Los medianos</h3>
      <ul class="list-disc pl-4">
        <li>Hexágono: 6 lados</li>
        <li>Heptágono: 7 lados</li>
        <li>Octógono: 8 lados</li>
      </ul>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Los más grandes</h3>
      <ul class="list-disc pl-4">
        <li>Eneágono: 9 lados</li>
        <li>Decágono: 10 lados</li>
      </ul>
    </div>
  </div>
  
  > ¡Dato curioso! La plaza del ayuntamiento de Oviedo tiene forma de rectángulo, ¡un tipo especial de polígono de 4 lados!
      `,
    },
    {
      title: "Los triángulos especiales",
      content: `
  # Tipos de triángulos: ¡Cada uno es único!
  
  Los triángulos son los polígonos más pequeños y tienen solo 3 lados. ¡Pero hay muchos tipos diferentes!
  
  ## Según sus lados
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Equilátero</h3>
      <p>Sus tres lados son iguales</p>
      <p>¡Como un trozo de queso Cabrales perfectamente cortado!</p>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Isósceles</h3>
      <p>Tiene dos lados iguales</p>
      <p>¡Como el tejado de muchas casas asturianas!</p>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Escaleno</h3>
      <p>Todos sus lados son diferentes</p>
      <p>¡Como las pendientes irregulares de una montaña!</p>
    </div>
  </div>
  
  ## Según sus ángulos
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Rectángulo</h3>
      <p>Tiene un ángulo recto (90°)</p>
      <p>¡Como la esquina de una ventana!</p>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Acutángulo</h3>
      <p>Todos sus ángulos son agudos</p>
      <p>¡Como las puntas de una estrella!</p>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Obtusángulo</h3>
      <p>Tiene un ángulo obtuso</p>
      <p>¡Como un arco muy abierto!</p>
    </div>
  </div>
      `,
    },
    {
      title: "Los cuadriláteros y sus primos",
      content: `
  # Los cuadriláteros: ¡Formas con cuatro lados!
  
  ## Tipos de cuadriláteros
  
  ### Según sus lados paralelos
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Trapezoides</h3>
      <p>No tienen lados paralelos</p>
      <p>¡Como algunas piedras en el suelo!</p>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Trapecios</h3>
      <p>Tienen solo dos lados paralelos</p>
      <p>¡Como algunos carteles de las calles!</p>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Paralelogramos</h3>
      <p>Tienen dos pares de lados paralelos</p>
      <p>¡Como muchos edificios vistos desde arriba!</p>
    </div>
  </div>
  
  ## Los paralelogramos especiales
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Cuadrado</h3>
      <p>- 4 lados iguales</p>
      <p>- 4 ángulos rectos</p>
      <p>¡Como las baldosas del suelo!</p>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Rectángulo</h3>
      <p>- Lados iguales 2 a 2</p>
      <p>- 4 ángulos rectos</p>
      <p>¡Como la pizarra de tu clase!</p>
    </div>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Rombo</h3>
      <p>- 4 lados iguales</p>
      <p>- Ángulos iguales 2 a 2</p>
      <p>¡Como algunos adornos en las casas tradicionales!</p>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Romboide</h3>
      <p>- Lados iguales 2 a 2</p>
      <p>- Ángulos iguales 2 a 2</p>
      <p>¡Como algunos diseños en las rejas!</p>
    </div>
  </div>
  
  > ¡Dato curioso! En la arquitectura tradicional asturiana encontramos muchos cuadriláteros, especialmente en las ventanas y puertas de los hórreos.
      `,
    },
    {
      title: "El perímetro: Midiendo alrededor",
      content: `
  # El perímetro: ¡Dando vueltas a las formas!
  
  ## ¿Qué es el perímetro?
  El perímetro es la distancia total que recorremos si caminamos alrededor de una figura. Es como dar una vuelta completa siguiendo el borde.
  
  ## ¿Cómo calculamos el perímetro?
  Es muy fácil: ¡solo tenemos que sumar las longitudes de todos los lados!
  
  ### Ejemplos divertidos:
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Cuadrado</h3>
      <p>Si cada lado mide 5 metros:</p>
      <p>Perímetro = 5 + 5 + 5 + 5 = 20 metros</p>
      <p>¡Como dar una vuelta al patio pequeño!</p>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Rectángulo</h3>
      <p>Si mide 6 metros de largo y 4 de ancho:</p>
      <p>Perímetro = 6 + 4 + 6 + 4 = 20 metros</p>
      <p>¡Como recorrer el borde de un huerto!</p>
    </div>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Triángulo</h3>
      <p>Si sus lados miden 3, 4 y 5 metros:</p>
      <p>Perímetro = 3 + 4 + 5 = 12 metros</p>
      <p>¡Como rodear un pequeño jardín triangular!</p>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2">Pentágono regular</h3>
      <p>Si cada lado mide 2 metros:</p>
      <p>Perímetro = 2 + 2 + 2 + 2 + 2 = 10 metros</p>
      <p>¡Como dar una vuelta a una fuente!</p>
    </div>
  </div>
  
  ## Aplicaciones en la vida real
  - Calcular cuánta valla necesitamos para un huerto
  - Medir el borde de un mantel
  - Saber cuánta cuerda necesitamos para rodear un árbol
  - Calcular la distancia alrededor de un campo de fútbol
  
  > ¡Dato curioso! Los pastores asturianos tradicionalmente usaban el perímetro para saber cuánta cuerda necesitaban para cercar un prado para sus ovejas.
      `,
    }
  ];