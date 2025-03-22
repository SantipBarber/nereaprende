export const content = [
    {
      title: "¡Las fracciones en nuestra vida!",
      content: `
  # ¡Las fracciones en nuestra vida!
  
  ¿Sabías que utilizamos fracciones todos los días? Cuando comes media manzana, cuando compartes una tableta de chocolate con tus amigos, o cuando tu familia compra un cuarto de queso de Cabrales... ¡Ahí están las fracciones!
  
  ## ¿Qué es una fracción?
  
  Una fracción es una forma de expresar una parte de un todo. Es como cuando repartes una tarta en trozos iguales y tomas algunos.
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">Numerador</h2>
          <p>Es el número que está arriba en la fracción. Nos indica <strong>cuántas partes tomamos</strong>.</p>
        </div>
      </div>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">Denominador</h2>
          <p>Es el número que está abajo. Nos indica en <strong>cuántas partes iguales</strong> dividimos el total.</p>
        </div>
      </div>
    </div>
  </div>
  
  ### Ejemplo: Fracción 3/5
  - La unidad se divide en 5 partes iguales (denominador)
  - Tomamos 3 de esas partes (numerador)
  
  Si piensas en una tableta de chocolate con 5 trozos iguales y comes 3, has comido 3/5 de la tableta.
  
  ## ¿Cómo leemos las fracciones?
  
  Para leer una fracción, primero decimos el numerador y luego el denominador, pero el denominador se lee de una forma especial:
  
  | Denominador | Se lee      |
  |-------------|-------------|
  | 2           | medios      |
  | 3           | tercios     |
  | 4           | cuartos     |
  | 5           | quintos     |
  | 6           | sextos      |
  | 7           | séptimos    |
  | 8           | octavos     |
  | 9           | novenos     |
  | 10          | décimos     |
  | 11          | onceavos    |
  | 12          | doceavos    |
  
  ### Ejemplos:
  - 3/5 se lee "tres quintos"
  - 7/10 se lee "siete décimos"
  - 2/3 se lee "dos tercios"
  
  > ¡Recuerda! Cuando vayamos de excursión al Parque Natural de Somiedo, podemos practicar: "Hemos recorrido dos quintos del sendero" o "Nos queda un tercio del camino".
  
      `,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Pizza_con_champinones.jpg/640px-Pizza_con_champinones.jpg"
    },
    {
      title: "Fracción de un conjunto",
      content: `
  # Fracción de un conjunto
  
  Las fracciones no solo se usan para dividir una cosa, como una pizza. También sirven para indicar una parte de un conjunto de cosas, como por ejemplo, una parte de los libros de tu estantería o una parte de las sidrerías de Asturias.
  
  ## ¿Cómo funciona?
  
  Cuando hablamos de la fracción de un conjunto:
  - El **denominador** es el número total de elementos del conjunto.
  - El **numerador** es el número de elementos que cumplen cierta característica.
  
  ### Ejemplo 1: La clase de 4°
  
  En una clase hay 25 estudiantes. 15 son niñas y 10 son niños.
  - La fracción de estudiantes que son niñas es 15/25 (que simplificado sería 3/5)
  - La fracción de estudiantes que son niños es 10/25 (que simplificado sería 2/5)
  
  ### Ejemplo 2: Los monumentos de Oviedo
  
  Imagina que visitamos 8 monumentos en Oviedo. De ellos, 3 son iglesias y el resto son otros tipos de edificios.
  - La fracción de monumentos que son iglesias es 3/8
  - La fracción de monumentos que no son iglesias es 5/8
  
  <div class="flex justify-center w-full my-6">
    <div class="max-w-lg p-4 bg-blue-50 rounded-lg">
      <h3 class="font-bold text-lg text-center mb-2">¿Sabías que...?</h3>
      <p>En Asturias hay muchos pueblos. Si decimos que 2/7 de los pueblos están en la costa, significa que de cada 7 pueblos, 2 están junto al mar. El resto (5/7) están en el interior.</p>
    </div>
  </div>
  
  ## Otro ejemplo: Un pastel de manzana
  
  Has comprado un pastel de manzana cortado en 8 porciones iguales.
  - Si te comes 3 porciones, has comido 3/8 del pastel.
  - Si tu familia se come 5 porciones, se han comido 5/8 del pastel.
  
  > En un paquete con 12 galletas, 4 son de chocolate y 8 son de vainilla. ¿Qué fracción del total representan las galletas de chocolate? 4/12 = 1/3.
      `,
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Fracciones_representadas_con_objetos.jpg"
    },
    {
      title: "Comparación de fracciones con la unidad",
      content: `
  # Comparación de fracciones con la unidad
  
  A veces necesitamos saber si una fracción es mayor, menor o igual que 1 (la unidad). Esto es muy útil para entender cuánto tenemos realmente.
  
  ## Tres casos importantes
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex flex-col items-center">
        <h2 class="font-bold mb-2 text-lg text-red-600">Menor que 1</h2>
        <p class="text-center">Cuando el <strong>numerador es menor que el denominador</strong></p>
        <div class="mt-3 text-2xl font-bold">3/4 < 1</div>
        <p class="mt-2 text-sm">Ejemplo: Si comes 3/4 de una empanada asturiana, has comido menos de una empanada completa.</p>
      </div>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex flex-col items-center">
        <h2 class="font-bold mb-2 text-lg text-green-600">Igual a 1</h2>
        <p class="text-center">Cuando el <strong>numerador y denominador son iguales</strong></p>
        <div class="mt-3 text-2xl font-bold">4/4 = 1</div>
        <p class="mt-2 text-sm">Ejemplo: Si bebes 4/4 de un vaso de zumo de manzana, has bebido el vaso completo.</p>
      </div>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex flex-col items-center">
        <h2 class="font-bold mb-2 text-lg text-blue-600">Mayor que 1</h2>
        <p class="text-center">Cuando el <strong>numerador es mayor que el denominador</strong></p>
        <div class="mt-3 text-2xl font-bold">5/4 > 1</div>
        <p class="mt-2 text-sm">Ejemplo: Si comes 5/4 de pizza, has comido una pizza completa más un cuarto de otra.</p>
      </div>
    </div>
  </div>
  
  ## ¿Por qué es importante?
  
  Comparar con la unidad nos ayuda a entender rápidamente si tenemos:
  - **Menos de un todo** (menor que 1)
  - **Exactamente un todo** (igual a 1)
  - **Más de un todo** (mayor que 1)
  
  ### Ejemplos en la vida diaria en Asturias
  
  1. Si llevas recorridos 3/8 del Camino de Santiago por Asturias, te falta más de la mitad (es menor que 1).
     
  2. Si has comido 6/6 de una ración de cachopo, has comido la ración completa (es igual a 1).
     
  3. Si has visitado 7/5 de los museos planificados en Gijón, has visitado más museos de los que tenías previsto (es mayor que 1).
  
  ## Truco para recordar
  
  Imagina que estás compartiendo una tarta de arroz con leche típica asturiana:
  - Si comes menos de una tarta completa, la fracción es menor que 1.
  - Si comes exactamente una tarta completa, la fracción es igual a 1.
  - Si comes más de una tarta completa, la fracción es mayor que 1.
  
  > ¡Recuerda! Para comparar una fracción con la unidad, solo necesitas comparar el numerador con el denominador.
      `,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Torta_fracciones.JPG/640px-Torta_fracciones.JPG"
    },
    {
      title: "Comparación de fracciones",
      content: `
  # Comparación de fracciones
  
  A veces necesitamos saber qué fracción es mayor o menor. Por ejemplo, para saber quién ha comido más pizza o quién ha recorrido más camino. Veamos cómo comparar fracciones.
  
  ## Fracciones con igual denominador
  
  Cuando las fracciones tienen el mismo denominador, comparar es muy fácil: **solo miramos los numeradores**.
  
  <div class="bg-yellow-50 rounded-lg p-4 my-4">
    <h3 class="font-bold text-lg">Regla de oro:</h3>
    <p>Con el mismo denominador, la fracción con mayor numerador es la mayor.</p>
  </div>
  
  ### Ejemplo:
  Comparemos 3/8 y 5/8
  
  <div class="flex items-center space-x-8 justify-center my-4">
    <div class="text-center">
      <div class="text-2xl font-bold">3/8</div>
      <div>Tres octavos</div>
    </div>
    <div class="text-3xl">y</div>
    <div class="text-center">
      <div class="text-2xl font-bold">5/8</div>
      <div>Cinco octavos</div>
    </div>
  </div>
  
  Como 5 > 3, entonces 5/8 > 3/8
  
  Ejemplo asturiano: Si Pelayo ha recorrido 3/10 del Descenso del Sella y Covadonga ha recorrido 7/10, ¿quién ha avanzado más? Como 7 > 3, Covadonga ha recorrido más distancia.
  
  ## Fracciones con igual numerador
  
  Cuando las fracciones tienen el mismo numerador, **comparamos los denominadores**, pero ¡atención! Aquí es al revés.
  
  <div class="bg-yellow-50 rounded-lg p-4 my-4">
    <h3 class="font-bold text-lg">Regla de oro:</h3>
    <p>Con el mismo numerador, la fracción con menor denominador es la mayor.</p>
  </div>
  
  ### Ejemplo:
  Comparemos 2/3 y 2/7
  
  <div class="flex items-center space-x-8 justify-center my-4">
    <div class="text-center">
      <div class="text-2xl font-bold">2/3</div>
      <div>Dos tercios</div>
    </div>
    <div class="text-3xl">y</div>
    <div class="text-center">
      <div class="text-2xl font-bold">2/7</div>
      <div>Dos séptimos</div>
    </div>
  </div>
  
  Como 3 < 7, entonces 2/3 > 2/7
  
  Ejemplo asturiano: Si has comido 2/3 de un bollo preñao y tu hermano ha comido 2/5 de otro igual, ¿quién ha comido más? Como 3 < 5, entonces 2/3 > 2/5, así que tú has comido más.
  
  ## ¿Por qué funciona así?
  
  Piensa en una tarta. Si la divides en 3 partes (tercios), cada parte es más grande que si la divides en 7 partes (séptimos). Por eso, 2/3 de tarta es más que 2/7 de tarta.
  
  <div class="p-4 bg-blue-50 rounded-lg my-6">
    <h3 class="font-bold text-center mb-2">¡Truco para recordar!</h3>
    <p>Dibuja dos pizzas del mismo tamaño. Divide una en 3 partes iguales y otra en 7 partes iguales. Verás que 2/3 de pizza es más cantidad que 2/7.</p>
  </div>
  
  > Recuerda: Para comparar fracciones con el mismo denominador, gana el numerador mayor. Para comparar fracciones con el mismo numerador, gana el denominador menor.
      `,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Comparing_fractions.svg/640px-Comparing_fractions.svg.png"
    },
    {
      title: "Fracción de un número",
      content: `
  # Fracción de un número
  
  A veces necesitamos calcular una parte (fracción) de una cantidad. Por ejemplo, ¿cuánto es 3/4 de 20 manzanas? O ¿cuánto es 2/5 de 100 euros?
  
  ## ¿Cómo calcular la fracción de un número?
  
  Para calcular la fracción de un número, seguimos estos pasos:
  
  <div class="bg-green-50 p-4 rounded-lg my-4">
    <ol class="list-decimal pl-5 space-y-2">
      <li>Dividimos el número entre el <strong>denominador</strong></li>
      <li>Multiplicamos el resultado por el <strong>numerador</strong></li>
    </ol>
  </div>
  
  ### Ejemplo 1: Calcular 3/4 de 20
  
  Paso 1: Dividimos 20 entre 4
  20 ÷ 4 = 5
  
  Paso 2: Multiplicamos 5 por 3
  5 × 3 = 15
  
  Resultado: 3/4 de 20 es 15
  
  ### Ejemplo 2: Calcular 2/5 de 100 euros
  
  Paso 1: Dividimos 100 entre 5
  100 ÷ 5 = 20
  
  Paso 2: Multiplicamos 20 por 2
  20 × 2 = 40
  
  Resultado: 2/5 de 100 euros son 40 euros
  
  ## Ejemplos en Asturias
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex-1">
        <h3 class="font-bold mb-2">La Ruta del Cares</h3>
        <p>La Ruta del Cares mide 12 kilómetros. Si has recorrido 3/4 de la ruta, ¿cuántos kilómetros has caminado?</p>
        <div class="mt-2 pl-3 border-l-2 border-blue-400">
          <p>12 ÷ 4 = 3</p>
          <p>3 × 3 = 9</p>
          <p>Has recorrido 9 kilómetros</p>
        </div>
      </div>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex-1">
        <h3 class="font-bold mb-2">Los Lagos de Covadonga</h3>
        <p>Para visitar los Lagos de Covadonga se necesitan 60 minutos. Si has completado 2/3 de la visita, ¿cuántos minutos has estado?</p>
        <div class="mt-2 pl-3 border-l-2 border-blue-400">
          <p>60 ÷ 3 = 20</p>
          <p>20 × 2 = 40</p>
          <p>Has estado 40 minutos</p>
        </div>
      </div>
    </div>
  </div>
  
  ## Tómbola en la feria de Gijón
  
  En una tómbola de la feria hay 90 boletos. Si 3/5 de los boletos tienen premio, ¿cuántos boletos tienen premio?
  
  <div class="bg-blue-50 p-4 rounded-lg my-4">
    <p class="font-bold">Solución:</p>
    <p>Paso 1: Dividimos 90 entre 5</p>
    <p>90 ÷ 5 = 18</p>
    <p>Paso 2: Multiplicamos 18 por 3</p>
    <p>18 × 3 = 54</p>
    <p class="font-bold mt-2">Por lo tanto, 54 boletos tienen premio.</p>
  </div>
  
  ## Fórmula matemática
  
  También podemos usar esta fórmula:
  
  <div class="flex justify-center my-6">
    <div class="bg-gray-100 px-6 py-3 rounded-lg text-xl font-bold">
      Fracción de un número = (Número × Numerador) ÷ Denominador
    </div>
  </div>
  
  Usando esta fórmula para calcular 3/4 de 20:
  (20 × 3) ÷ 4 = 60 ÷ 4 = 15
  
  > ¡Recuerda! Cuando calculamos la fracción de un número, primero dividimos y luego multiplicamos.
      `,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Fracciones_aritmetica_001.svg/640px-Fracciones_aritmetica_001.svg.png"
    },
    {
      title: "Fracciones en nuestra vida diaria",
      content: `
  # Fracciones en nuestra vida diaria
  
  Las fracciones están por todas partes, ¡aunque a veces no nos demos cuenta! Vamos a ver algunos ejemplos de cómo las usamos en la vida cotidiana.
  
  ## En la cocina
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex-1">
        <h3 class="font-bold mb-2">Recetas asturianas</h3>
        <p>Para hacer la famosa fabada asturiana, necesitas:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>1/2 kilo de fabes</li>
          <li>1/4 kilo de tocino</li>
          <li>3/4 litro de agua</li>
          <li>1/8 de kilo de pimentón</li>
        </ul>
      </div>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex-1">
        <h3 class="font-bold mb-2">Compartir comida</h3>
        <p>Al compartir:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Una pizza cortada en 8 porciones iguales</li>
          <li>Una tarta de arroz con leche dividida en 6 partes</li>
          <li>Un bollo preñao dividido por la mitad (1/2)</li>
        </ul>
      </div>
    </div>
  </div>
  
  ## En las tiendas
  
  <div class="bg-yellow-50 rounded-lg p-4 my-6">
    <h3 class="font-bold text-center mb-3">Ofertas y descuentos</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white p-3 rounded shadow-sm text-center">
        <p class="text-red-600 font-bold text-xl">¡OFERTA!</p>
        <p>Descuento de 1/4 del precio</p>
        <p class="text-sm">(25% de descuento)</p>
      </div>
      <div class="bg-white p-3 rounded shadow-sm text-center">
        <p class="text-red-600 font-bold text-xl">¡REBAJAS!</p>
        <p>Paga solo 2/3 del precio original</p>
        <p class="text-sm">(33% de descuento)</p>
      </div>
      <div class="bg-white p-3 rounded shadow-sm text-center">
        <p class="text-red-600 font-bold text-xl">¡GANGA!</p>
        <p>Segunda unidad a 1/2 de precio</p>
        <p class="text-sm">(50% en la segunda)</p>
      </div>
    </div>
  </div>
  
  ## En los viajes
  
  Si vas de excursión por Asturias:
  - Has recorrido 1/3 del Camino Natural de la Senda Costera
  - Te queda 1/4 del camino hasta llegar al Mirador del Fitu
  - Has visitado 3/5 de los monumentos prerrománicos de Oviedo
  
  ## En el tiempo
  
  <div class="flex justify-center my-6">
    <div class="max-w-lg">
      <h3 class="font-bold mb-3 text-center">Fracciones de hora</h3>
      <div class="grid grid-cols-3 gap-2 text-center">
        <div class="bg-blue-50 p-2 rounded">
          <p class="font-bold">1/4 de hora</p>
          <p>15 minutos</p>
        </div>
        <div class="bg-green-50 p-2 rounded">
          <p class="font-bold">1/2 hora</p>
          <p>30 minutos</p>
        </div>
        <div class="bg-red-50 p-2 rounded">
          <p class="font-bold">3/4 de hora</p>
          <p>45 minutos</p>
        </div>
      </div>
    </div>
  </div>
  
  ## En el deporte
  
  Imagina que estás viendo un partido de fútbol del Real Oviedo o del Sporting de Gijón:
  - Ha transcurrido 1/4 del partido (22,5 minutos)
  - Faltan 2/3 del partido para terminar
  - El tiempo de descanso es 1/9 del tiempo total del partido
  
  ## En la música
  
  <div class="bg-blue-50 p-4 rounded-lg my-6">
    <h3 class="font-bold text-center mb-2">Notas musicales y fracciones</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
      <div class="bg-white p-2 rounded shadow-sm">
        <p class="font-bold">Redonda</p>
        <p>1 tiempo completo</p>
      </div>
      <div class="bg-white p-2 rounded shadow-sm">
        <p class="font-bold">Blanca</p>
        <p>1/2 tiempo</p>
      </div>
      <div class="bg-white p-2 rounded shadow-sm">
        <p class="font-bold">Negra</p>
        <p>1/4 de tiempo</p>
      </div>
      <div class="bg-white p-2 rounded shadow-sm">
        <p class="font-bold">Corchea</p>
        <p>1/8 de tiempo</p>
      </div>
    </div>
    <p class="mt-3 text-center text-sm">La gaita asturiana, como todos los instrumentos, utiliza estas fracciones para crear su música tradicional.</p>
  </div>
  
  > ¡Recuerda! Las fracciones están presentes en casi todo lo que hacemos diariamente. Ahora que sabes reconocerlas, las verás por todas partes.
      `,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Basic_Fractions.svg/640px-Basic_Fractions.svg.png"
    }
  ];