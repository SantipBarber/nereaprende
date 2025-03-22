export const content = [
    {
      title: "Divisiones con divisor de dos cifras",
      content: `
  # Divisiones con divisor de dos cifras
  
  Las divisiones son operaciones que nos permiten repartir cantidades de forma exacta o aproximada. Cuando dividimos entre un número de dos cifras, necesitamos seguir unos pasos especiales.
  
  ## ¿Cómo dividimos cuando el divisor tiene dos cifras?
  
  Cuando dividimos un número entre otro de dos cifras, nos podemos encontrar con dos casos diferentes:
  
  ### Caso 1: Las dos primeras cifras del dividendo forman un número mayor o igual que el divisor
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2 text-lg">Pasos para dividir</h3>
      <p>Para dividir 357 entre 26:</p>
      <ol class="list-decimal pl-5 space-y-2">
        <li>Como 35 es mayor que 26, divido 35 entre 26.</li>
        <li>Pruebo con el 1: 26 × 1 = 26 < 35. El 1 sirve.</li>
        <li>Escribo 1 en el cociente y multiplico 26 × 1 = 26.</li>
        <li>Resto 35 - 26 = 9.</li>
        <li>Bajo la siguiente cifra, el 7, y divido 97 entre 26.</li>
        <li>Pruebo con 3: 26 × 3 = 78 < 97. El 3 sirve.</li>
        <li>Escribo 3 en el cociente y multiplico 26 × 3 = 78.</li>
        <li>Resto 97 - 78 = 19 (este es el resto final).</li>
      </ol>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2 text-lg">Ejemplo: Reparto de manzanas de Villaviciosa</h3>
      <p>En una sidrería de Villaviciosa tienen 357 manzanas para repartir en 26 cajas. ¿Cuántas manzanas pondrán en cada caja? ¿Cuántas manzanas sobrarán?</p>
      <p class="mt-4"><strong>Solución:</strong></p>
      <p>En cada caja pondrán 13 manzanas y sobrarán 19 manzanas.</p>
      <p class="mt-2 text-sm text-gray-600">357 ÷ 26 = 13 con resto 19</p>
    </div>
  </div>
  
  ### Caso 2: Las dos primeras cifras del dividendo forman un número menor que el divisor
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2 text-lg">Pasos para dividir</h3>
      <p>Para dividir 1.360 entre 25:</p>
      <ol class="list-decimal pl-5 space-y-2">
        <li>Como 13 es menor que 25, tomo las tres primeras cifras: 136.</li>
        <li>Divido 136 entre 25 y pruebo con 5: 25 × 5 = 125 < 136. El 5 sirve.</li>
        <li>Escribo 5 en el cociente y multiplico 25 × 5 = 125.</li>
        <li>Resto 136 - 125 = 11.</li>
        <li>Bajo la siguiente cifra, el 0, y divido 110 entre 25.</li>
        <li>Pruebo con 4: 25 × 4 = 100 < 110. El 4 sirve.</li>
        <li>Escribo 4 en el cociente y multiplico 25 × 4 = 100.</li>
        <li>Resto 110 - 100 = 10 (este es el resto final).</li>
      </ol>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2 text-lg">Ejemplo: Excursión al Museo de la Minería</h3>
      <p>El Museo de la Minería de Asturias recibió 1.360 estudiantes que se organizaron en grupos de 25. ¿Cuántos grupos completos se formaron? ¿Cuántos estudiantes quedaron sin grupo completo?</p>
      <p class="mt-4"><strong>Solución:</strong></p>
      <p>Se formaron 54 grupos completos y quedaron 10 estudiantes sin grupo completo.</p>
      <p class="mt-2 text-sm text-gray-600">1.360 ÷ 25 = 54 con resto 10</p>
    </div>
  </div>
    `,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Elementary_arithmetic_division.svg/450px-Elementary_arithmetic_division.svg.png"
    },
    {
      title: "La propiedad de la división",
      content: `
  # La propiedad de la división
  
  La división tiene una propiedad muy útil que nos ayuda a simplificar cálculos, especialmente cuando hay muchos ceros.
  
  ## La propiedad fundamental
  
  <div class="p-4 my-6 bg-blue-50 border border-blue-100 rounded-lg">
    <p class="font-bold text-center text-blue-800">
      Si multiplicamos o dividimos el dividendo y el divisor por un mismo número (distinto de cero),
      el cociente no varía y el resto queda multiplicado o dividido por ese mismo número.
    </p>
  </div>
  
  ### ¿Cómo usamos esta propiedad?
  
  Esta propiedad es muy útil para simplificar divisiones, especialmente cuando tanto el dividendo como el divisor terminan en ceros.
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2 text-lg">Pasos para simplificar</h3>
      <p>Para dividir 2.400 entre 120:</p>
      <ol class="list-decimal pl-5 space-y-2">
        <li>Observamos que tanto 2.400 como 120 terminan en ceros.</li>
        <li>Podemos quitar un cero a cada número, dividiendo ambos entre 10.</li>
        <li>Nos queda: 240 ÷ 12</li>
        <li>Ahora es más fácil calcular: 240 ÷ 12 = 20</li>
      </ol>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2 text-lg">Ejemplo: Producción de queso Cabrales</h3>
      <p>Una fábrica de queso Cabrales produjo 8.000 kilogramos que se envasaron en 200 cajas. ¿Cuántos kilogramos de queso hay en cada caja?</p>
      <p class="mt-4"><strong>Solución:</strong></p>
      <p>Tenemos que calcular 8.000 ÷ 200</p>
      <p>Simplificamos quitando dos ceros: 80 ÷ 2 = 40</p>
      <p>Cada caja contiene 40 kilogramos de queso.</p>
    </div>
  </div>
  
  ### Otros ejemplos
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <p class="font-bold">280 ÷ 40</p>
      <p>Simplificamos quitando un cero:</p>
      <p>28 ÷ 4 = 7</p>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <p class="font-bold">360 ÷ 60</p>
      <p>Simplificamos quitando un cero:</p>
      <p>36 ÷ 6 = 6</p>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <p class="font-bold">1.200 ÷ 40</p>
      <p>No podemos quitar ceros directamente.</p>
      <p>1.200 ÷ 40 = 30</p>
    </div>
  </div>
  
  > ¡Recuerda! Esta propiedad solo funciona cuando dividimos o multiplicamos AMBOS números (dividendo y divisor) por el mismo valor.
    `,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ampliaci%C3%B3n_y_simplificaci%C3%B3n_de_fracciones.jpg/400px-Ampliaci%C3%B3n_y_simplificaci%C3%B3n_de_fracciones.jpg"
    },
    {
      title: "Operaciones combinadas",
      content: `
  # Operaciones combinadas
  
  A veces tenemos que resolver problemas donde aparecen varias operaciones juntas. Para no equivocarnos, debemos seguir un orden.
  
  ## El orden o jerarquía de las operaciones
  
  <div class="p-4 my-6 bg-green-50 border border-green-100 rounded-lg">
    <p class="text-center font-bold text-green-800">Para resolver operaciones combinadas, seguimos este orden:</p>
    <ol class="list-decimal pl-8 mt-2 text-green-800">
      <li>Primero resolvemos lo que está dentro de los <strong>paréntesis</strong>.</li>
      <li>Después hacemos las <strong>multiplicaciones y divisiones</strong> de izquierda a derecha.</li>
      <li>Por último, hacemos las <strong>sumas y restas</strong> de izquierda a derecha.</li>
    </ol>
  </div>
  
  ### Veamos un ejemplo paso a paso
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2 text-lg">Resolvemos: 20 - 12 · (2 + 1)</h3>
      <ol class="list-decimal pl-5 space-y-2">
        <li>Primero lo que está dentro del paréntesis: (2 + 1) = 3</li>
        <li>Ahora tenemos: 20 - 12 · 3</li>
        <li>Después multiplicaciones y divisiones: 12 · 3 = 36</li>
        <li>Queda: 20 - 36</li>
        <li>Finalmente hacemos la resta: 20 - 36 = -16</li>
      </ol>
      <p class="mt-2 text-sm text-gray-600">El resultado es -16</p>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2 text-lg">Ejemplo: Excursión a los Picos de Europa</h3>
      <p>En una excursión a los Picos de Europa, cada niño pagó 20€. Se gastaron 12€ por niño en transporte y cada uno comió un menú de 3€ y compró 2 recuerdos de 1€ cada uno. ¿Cuánto dinero sobró por cada niño?</p>
      <p class="mt-2">Tenemos que calcular: 20 - 12 - (3 + 2·1)</p>
      <p class="mt-2"><strong>Solución:</strong></p>
      <p>20 - 12 - (3 + 2) = 20 - 12 - 5 = 8 - 5 = 3</p>
      <p>A cada niño le sobraron 3€.</p>
    </div>
  </div>
  
  ### Expresiones con y sin paréntesis
  
  Es importante entender que los paréntesis cambian el orden en que hacemos las operaciones y, por tanto, pueden cambiar el resultado.
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <p class="font-bold">7 + 3 × 5 - 2</p>
      <p>1. Multiplicación: 3 × 5 = 15</p>
      <p>2. Suma y resta: 7 + 15 - 2</p>
      <p>3. De izquierda a derecha: 22 - 2 = 20</p>
      <p class="mt-2 text-blue-600">Resultado: 20</p>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <p class="font-bold">7 + 3 × (5 - 2)</p>
      <p>1. Paréntesis: (5 - 2) = 3</p>
      <p>2. Multiplicación: 3 × 3 = 9</p>
      <p>3. Suma: 7 + 9 = 16</p>
      <p class="mt-2 text-blue-600">Resultado: 16</p>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <p class="font-bold">(7 + 3) × 5 - 2</p>
      <p>1. Paréntesis: (7 + 3) = 10</p>
      <p>2. Multiplicación: 10 × 5 = 50</p>
      <p>3. Resta: 50 - 2 = 48</p>
      <p class="mt-2 text-blue-600">Resultado: 48</p>
    </div>
  </div>
  
  ### Relación entre expresiones y su significado
  
  <div class="my-6 p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
    <h3 class="font-bold mb-2 text-lg">¿Qué significan estas expresiones?</h3>
    <ul class="list-disc pl-5 space-y-2">
      <li><strong>A 5 le sumo el producto de 3 y 4 y luego resto 2:</strong> 5 + 3 × 4 - 2</li>
      <li><strong>A 5 le sumo la mitad del producto de 3 y 4:</strong> 5 + (3 × 4) ÷ 2</li>
      <li><strong>A 5 le sumo 3 y luego le sumo la mitad de 4:</strong> 5 + 3 + 4 ÷ 2</li>
      <li><strong>La suma de 5 y 3 la multiplico por 4 y resto 2:</strong> (5 + 3) × 4 - 2</li>
      <li><strong>La suma de 5 y 3 la divido entre la resta de 4 y 2:</strong> (5 + 3) ÷ (4 - 2)</li>
    </ul>
  </div>
  
  > ¡Recuerda! Cada expresión matemática tiene un significado preciso. Si cambiamos los paréntesis o el orden, cambiamos lo que significa y su resultado.
    `,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Order_of_operations_PEMDAS.png/330px-Order_of_operations_PEMDAS.png"
    },
    {
      title: "Resolución de problemas",
      content: `
  # Resolución de problemas
  
  Ahora que conocemos las divisiones y las operaciones combinadas, veamos cómo utilizarlas para resolver problemas.
  
  ## Problemas de reparto
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2 text-lg">Pasos para resolver problemas de reparto</h3>
      <ol class="list-decimal pl-5 space-y-2">
        <li>Lee con atención y identifica qué datos te dan.</li>
        <li>Piensa qué operaciones necesitas hacer (división, multiplicación, etc.).</li>
        <li>Realiza los cálculos siguiendo el orden correcto.</li>
        <li>Comprueba si el resultado tiene sentido.</li>
      </ol>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2 text-lg">Ejemplo: Taller de artesanía asturiana</h3>
      <p>En un taller de artesanía asturiana fabrican 700 botellas de sidra decorativas que se repartirán a partes iguales entre 20 tiendas de souvenirs.</p>
      <p>a) ¿Cuántas botellas recibirá cada tienda?</p>
      <p>b) Si solo se entregaran 670 botellas, ¿cuántas sobrarían?</p>
      <p class="mt-2"><strong>Solución:</strong></p>
      <p>a) 700 ÷ 20 = 35 botellas por tienda</p>
      <p>b) 670 ÷ 20 = 33 con resto 10, por lo que sobran 10 botellas</p>
    </div>
  </div>
  
  ## Problemas con operaciones combinadas
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2 text-lg">Necesitarás aplicar la jerarquía de operaciones</h3>
      <p>Recuerda seguir estos pasos:</p>
      <ol class="list-decimal pl-5 space-y-2">
        <li>Identifica todas las operaciones que hay que hacer.</li>
        <li>Ordénalas según la jerarquía: paréntesis, multiplicaciones/divisiones, sumas/restas.</li>
        <li>Realiza los cálculos en el orden correcto.</li>
      </ol>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <h3 class="font-bold mb-2 text-lg">Ejemplo: El salario de Marcos</h3>
      <p>Marcos tenía 28 euros. Compró 4 sobres de cromos de 5 euros cada uno y regaló 7 de ellos a su amiga. ¿Cuántos cromos le quedaron?</p>
      <p class="mt-2"><strong>Solución:</strong></p>
      <p>Tenemos que calcular: 28 - (4 × 5) + 7</p>
      <p>1. Paréntesis: 4 × 5 = 20</p>
      <p>2. Operaciones: 28 - 20 + 7 = 15</p>
      <p>A Marcos le quedaron 15 euros.</p>
    </div>
  </div>
  
  ## Retos para resolver
  
  <div class="p-4 my-6 bg-purple-50 border border-purple-100 rounded-lg">
    <h3 class="font-bold mb-4 text-center text-purple-800">¡Pon a prueba tus conocimientos!</h3>
    
    <div class="space-y-4">
      <div>
        <p class="font-semibold text-purple-700">1. Reto del teleférico de Fuente Dé</p>
        <p>En el teleférico de Fuente Dé (cercano a Asturias) viajaban 23 personas. En la primera parada subieron 5 y bajaron 12, y en la segunda parada bajaron 7 y subieron 4. ¿Cuántas personas iban en el teleférico al llegar a la tercera parada?</p>
      </div>
      
      <div>
        <p class="font-semibold text-purple-700">2. Reto de la fabada asturiana</p>
        <p>Para cocinar fabada asturiana en un restaurante, el chef necesita 40 kg de fabes. Las compra en bolsas de 4 kg. Vendió 2 de las bolsas y luego regaló 3 kg. ¿Cuántos kg de fabes le quedaron? Escribe la expresión matemática que resuelve este problema.</p>
      </div>
      
      <div>
        <p class="font-semibold text-purple-700">3. Reto del campamento en los Picos de Europa</p>
        <p>En un campamento hay 120 personas distribuidas en 24 tiendas iguales. Si hubiera 240 personas en 48 tiendas iguales, ¿habría las mismas personas en cada tienda? ¿Cuántas serían? ¿Y si fueran 60 personas en 12 tiendas?</p>
      </div>
    </div>
  </div>
  
  > ¡Recuerda! En la resolución de problemas es muy importante leer con atención, identificar los datos y elegir las operaciones adecuadas. ¡La práctica te hará mejorar!
    `,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Picos_de_Europa_from_Bulnes_%28pixinn.net%29.jpg/1280px-Picos_de_Europa_from_Bulnes_%28pixinn.net%29.jpg"
    }
  ];