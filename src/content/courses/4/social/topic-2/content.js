import climateMap from './assets/spain-climate-map.png';
import climateWorld from './assets/climate-world.png';

export const content = [
    {
      title: "El clima. ¿Cómo está cambiando?",
      content: `
  # ¿Cómo esta influyendo el cambio climático?
  El cambio climático es un fenómeno que afecta a todo el planeta. Es el aumento de la temperatura promedio de la Tierra, lo que provoca cambios en el clima.

  ## Conocemos los climas
  El **clima** es el conjunto de condiciones que tiene la atmósfera en un lugar de la tierra a lo largo de unos 30 años.

  Para conocer los climas hay que saber cómo son y cómo se distribuyen las temperaturas y las precipitaciones en cada estación del año.

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">Las temperaturas</h2>
          <p>Nos indican si hace calor o frío.</p>
          <p>Se miden con el <strong>termómetro</strong> y se expresan en grados <strong>Celsius</strong> (°C).</p>
        </div>
      </div>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">Las precipitaciones</h2>
          <p>Son la cantidad de agua que se recoge cada día.</p>
          <p>Pueden ser de lluvia, de nieve o de granizo.</p>
          <p>Se miden con el <strong>pluviómetro</strong>.</p>
        </div>
      </div>
    </div>
  </div>

 # ¿Por qué hay climas diferentes?  
 En la Tierra hay climas muy diferentes, con temperaturas y precipitaciones muy dispares a lo largo de los año.


 Estas diferencias estan producidas por varios factores:

 ### 1. La cercanía al ecuador
 En las zonas próximas al ecuador los rayos solares llegan muy perpendiculares y hace calor.
 Según nos alejamos de él, van descendiendo las temperaturas. Por eso, se distiguen varias zonas climatícas:
 * Una zona cálida *A* 
 * Dos zonas templadas *B* *
 * Dos zonas frías *C* 
 ![Zonas climáticas de la Tierra](${climateWorld})

 ### 2. La distribución del relieve
En cada zona climática hay climas distintos porque en las montañas hace mas frío que en las tierras que hay menos altura.
También influye la distancia al mar, ya que las costas tienen temperaturas más suaves que las tierras del interior.

 # Los climas de la Tierra
 Los climas de la Tierra se clasifican en tres grupos: **climas cálidos,fríos y templados**.
 Las temperaturas y precipitaciones de cada grupo dan lugar a una vegetación característica, que vemos en sus paisajes.
 
 
 ## Climas cálidos
 Se sitúan en torno al ecuador.
 1. **Cima ecuatorial**: Hace mucho calor y mucha humedad porque llueve mucho. Por eso, crecen selvas.
 2. **Clima tropical seco**: Según nos alejamos del ecuador, las lluvias solo se dan en una estación y la vegetación va 
 siendo menos densa, como en la *sabana*.
 3. **Clima desértico**: En los *desiertos* apenas llueve y crece muy poca vegetación, como palmeras o cactos.

 ## climas templados
 Se sitúan entre la zona cálida y las dos zonas frías, y tienen estaciones diferenciadas.
 1. **Mediterráneo**: Tiene lluvias escasas y temperaturas altas en verano. El *bosque mediterráneo* se adapta a la sequía.
 2. **Oceánico**: Llueve mucho y las temperaturas son suaves. Su vegetación tiene bosques y praderas.
 3. **Continental**: Los inviernos son muy fríos y los veranos cálidos y con lluvias. Hay bosques de *taiga* y *estepas*.

 ## climas fríos
 El **clima polar** se da en torno a los Polos Norte y Sur. Hace mucho frío todo el año. Llueve poco y suelen ser en forma de nieve. 
 Apenas crece vegetación, tan solo **tundra**, con musgo y hiervas. 

 También es clima frío el de las *altas montañas*, pero tienen frecuentes precipitaciones.

 # ¿Como son los climas de España?
 ![Mapa de climas de España](${climateMap})
 ## ¿Por qué hay climas diferentes?
 España se sitúa en la zona templada del hemisferio norte. En su territorio se distinguen varios climas: **mediterráneo**, **oceánico**, **subtropical** y 
 de **montaña**. Algunas causas de sus diferentes climas son:

 1. **La distancia al ecuador**. Canarias es el territorio español más próximo al ecuador, por eso apenas tiene diferencias en el tiempo de 
 cada estación y las temperaturas son suaves todo el año.
 2. **La influencia del mar**.El territorio de España tiene zonas costeras y otras interiores. En estas áreas las temperaturas tienen más 
 contraste durante el día y entre las estaciones, mientras que las costeras tienen temperaturas más suaves todo el año.
 3. **El relieve**. Las zonas montañosas suelen tener, en general, más precipitaciones y temperaturas más bajas que en las de llanura.

 ## Clima oceánico
 Se da en el norte de la Península.
 **Temperaturas:** Suaves por la proximidad al mar.
 **Precipitaciones:** Frecuentes a lo largo de todo el año.
 ## Clima mediterraneo, dos variantes:
 ### 1. Mediterráneo de interior.
  Es propio del interior de la Península.
  * **Temperaturas:** Son bajas en invierno y altas en verano.
  * **Precipitaciones:** escasas, sobretodo en verano.
 ### 2. Mediterráneo típico o de costa.
  Se da en el este y sur de la Península, las islas Baleares, Ceuta y Melilla.
  * **Temperaturas:** Suaves todo el año.
  * **Precipitaciones:** escasas, sobretodo en verano.
 ## Clima subtropical
 Es propio de las islas Canarias.
 * **Temperaturas:** suave, sin apenas cambios a lo largo del año.
 * **Precipitaciones:** escasas; en algunos lugares, apenas llueve.
 ## Clima de montaña
 Se da en las zonas más altas de las montañas. Cumbres de más de 1500 m de altura.
 * **Temperaturas:** bajas en invierno y frescas en verano.
 * **Precipitaciones:** abundantes, y en invierno, en forma de nieve.
 
 # ¿Por qué hablamos de cambio climático?
 El **cambio climático** está modificando las condiciones de las temperaturas, precipitaciones y vientos de los climas de la Tierra.
 La investgaciones científicas de las últimas han detectado cómo se están produciendo estos cambios en los climas, cuáles han sido
 las causas que los han desencadenado y qué consecuencias están teniendo.
 ## ¿Cómo se ha producido el cambio climático?
 El cambio climático se ha producido de manera natural a lo largo de la historia de la Tierra, pero en las últimas décadas se ha 
 acelerado debido a la **actividad humana**. Estás han sido las principales causas:
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">La contaminación de la atmósfera</h2>
          <p>Es la explusión de humo y sustancias tóxicas al aire, como el dióxido de carbono. 
          Los volcanes lo expulsan de forma natural, pero algunas actividades humanas, como la combustión de combustibles fósiles, lo han multiplicado.</p>
        </div>
      </div>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">El efecto invernadero</h2>
          <p>El aire contaminado aumenta la cantidad de gases que regulan la temperatura de la atmósfera y provocan 
          el incremento del calor en la Tierra, como si fuera un invernadero.</p>
        </div>
      </div>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">Calentamiento global</h2>
          <p>Como consecuencia del efecto invernadero que provoca la contaminación de la atmósfera, la temperatura media del planeta está 
          aumentando, es decir, se está calentando.</p>
        </div>
      </div>
    </div>
  </div> 
 
 # Las consecuencias del cambio climático
 Cada año, podemos ver cómo en nuestro país y otros lugares son más frecuentes los fenómenos meteorológicos extremos: inundaciones, provocadas
 por abundantes lluvias, periodos largos de sequía, incremenento de las temperaturas en todas las estaciones, vientos muy fuertes...

 Esos son algunos de los efectos del cambio climático. Pero el aumentos de las temperaturas medias del plantea provocan unos efectos en cadena.

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">Deshielos de polos y glaciares</h2>
          <p>El aumento de las temperaturas va derritiendo el hielo de los polos. Esa agua llega a los océanos, que aumentan su nivel 
          e inundan muchas zonas de costa. Esto hace que se pierdan ecosistemas, ciudades, pueblos...</p>
        </div>
      </div>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">Los fenómenos meteorológicos extremos</h2>
          <p>Las olas de calor, las sequías prolongadas o las lluvias intensas que provocan inundaciones afectan al suelo cultivable 
          y reducen la producción de alimentos, se destruyen infraestructuras y viviendas...</p>
        </div>
      </div>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">Migraciones humanas y pérdida de biodiversidad</h2>
          <p>La inundación de zonas costeras, junto con los efectos de los fenómenos meterológicos extremos, hacen que muchas personas 
          pierdan sus hogares y tengan que emigrar. También provocan la pérdida de animales y plantas, y se reduce la biodiversidad.</p>
        </div>
      </div>
    </div>
  </div> 

  # ¿Cómo nos afecta el cambio climático?
  ### El cambio climático en nuetras vidas
  El calentamiento y el cambio climático nos afecta a todas las personas porque tiene impacto en nuestras vidas.
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">Nuestra salud</h2>
          <p>Las olas de calor, las sequías o las inundaciones producen muertes directas de personas y generan muchas enfermedades respiratorias, 
          hambre...</p>
        </div>
      </div>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">La extinción de animales y plantas</h2>
          <p>Muchos animales, terrestres y marinos, y plantas no pueden adaptarse al aumento de las temperaturas y sequías continuadas y 
          desaparecen o migran hacia otras zonas si pueden.</p>
          <p>Estos cambios en las condiciones de los climas también afectan a los ecosistemas. Por ejemplo, se han secado muchos lagos y humedales.</p>
        </div>
      </div>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">La producción de alimentos</h2>
          <p>Los fenómenos meterológicos extremos destruyen cosechas y también los campos de cultivo, por lo que se reduce la producción de alimentos.</p>
        </div>
      </div>
    </div>
    <div class="border rounded-lg p-4 bg-white shadow-sm">
      <div class="flex items-start space-x-4">
        <div class="flex-1">
          <h2 class="font-bold mb-2 text-lg">La destrucción de viviendas y infraestructuras</h2>
          <p>Muchas personas en diferentes lugares de la tierra han perdido sus viviendas porque han sido destruidas por inundaciones, 
          huracanes... Estos fenómenos atmosféricos también destruyen carreteras y otras infraestructuras, lo que afecta al transporte 
          y en general, a toda la red de suministros (agua, electricidad...). </p>
        </div>
      </div>
    </div>
  </div>
 
  ### ¿Qué estamos haciendo?
  El cambio climático es una amenaza a la que se enfrenta la humanidad. Por eso, muchos países están llevando a cabo acciones para 
  reducir la emisiones de dióxido de carbono, que provocan el calentamiento global. Algunas de esas acciones son:

  <div class="space-y-8">
    <div class="border rounded-lg p-6 bg-white shadow-sm">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div>
          <h3 class="text-xl font-semibold mb-4 text-red-500">Utilizar energías renovables</h3>
          <p>Buena parte de la energía que usamos procede de los combustibles fósiles: carbón, petróleo, gas, que se han demostrado causantes del calentamiento global.</p>
        </div>
        <div class="flex justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Energy_plant.svg" alt="Energías renovables" class="w-48 h-48 rounded-full object-cover"/>
        </div>
        <div>
          <p>Por eso, se está cambiando a fuentes de energía que no emiten sustancias contaminantes al aire, como la energía eólica, la solar, la geotermia o el hidrógeno verde.</p>
        </div>
    </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div>
          <h3 class="text-xl font-semibold mb-4 text-cyan-500">Reciclar los residuos</h3>
          <p>Hasta ahora producimos de una forma en la que se consume mucha energía en la fabricación y se generan residuos, que muchas veces se acumulan en vertederos.</p>
        </div>
        <div class="flex justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Eco-friendly_%26_Recycling_Concept_Image.jpg" alt="Reciclaje" class="w-48 h-48 rounded-full object-cover"/>
        </div>
        <div>
          <p>Se está intentando reciclar residuos para fabricar nuevos productos. Así se reduce la basura y el consumo de energía. Por ejemplo, fabricar papel a partir de papel usado requiere menos energía que hacerlo con la madera de los árboles.</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div>
          <h3 class="text-xl font-semibold mb-4 text-purple-500">Reducir el consumo de plásticos</h3>
          <p>Al fabricar plásticos a partir del petróleo, se emiten a la atmósfera gases que la contaminan. Además, los residuos de plástico tardan cientos de años en deteriorarse.</p>
        </div>
        <div class="flex justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_breakdown_of_a_plastic_bottle_into_smaller_fragments%2C_eventually_ending_up_as_micro-_and_nano-plastics.png" alt="Reducción de plásticos" class="w-48 h-48 rounded-full object-cover"/>
        </div>
        <div>
          <p>Por eso, se realizan campañas para reducir el consumo de embalajes de plástico y, también, se reciclan envases para fabricar otros a partir de los materiales usados.</p>
        </div>
      </div>
     </div>
  </div>

  # ¡Curiosidades sobre el clima!

¿Sabías que el clima está lleno de cosas fascinantes? ¡Aquí tienes algunas curiosidades muy interesantes!

## 🌍 Datos sorprendentes sobre el clima

1. **¡Un rayo tiene mucha energía!**
   - Un solo rayo podría encender una bombilla durante 3 meses
   - ¡Cada segundo caen 100 rayos en la Tierra!

2. **La lluvia más extraña**
   - En algunos lugares ha llovido... ¡ranas y peces!
   - Esto ocurre cuando tornados pequeños levantan animales pequeños de lagos y los llevan por el aire

3. **El lugar más lluvioso**
   - Está en India y se llama Cherrapunji
   - ¡Llueve casi todos los días del año!
   - En un año puede llover tanto como en Madrid en 10 años

4. **El lugar más seco**
   - El desierto de Atacama en Chile
   - ¡Pueden pasar años sin que llueva!
   - Algunas zonas no han visto lluvia en 500 años

5. **Datos sobre el arcoíris**
   - Cada persona ve un arcoíris diferente
   - ¡En realidad es un círculo completo, pero solo vemos la mitad!
   - Los astronautas pueden ver arcoíris completos desde el espacio

## 🌡️ Récords climáticos asombrosos

1. **La temperatura más alta**
   - Se registró en el Valle de la Muerte, Estados Unidos
   - ¡56,7 grados Celsius!
   - Tan caliente que podrías freír un huevo en el suelo

2. **La temperatura más baja**
   - En la Antártida
   - ¡-89,2 grados Celsius!
   - Tan frío que el agua caliente se convierte en hielo antes de tocar el suelo

3. **El copo de nieve más grande**
   - Cayó en Montana, Estados Unidos
   - ¡38 centímetros de ancho!
   - Como el tamaño de una pizza pequeña

## 🌪️ Fenómenos meteorológicos curiosos

1. **Lluvia de colores**
   - A veces la lluvia puede ser roja, amarilla o incluso negra
   - Esto ocurre cuando el agua se mezcla con arena del desierto o cenizas de volcanes

2. **Nubes con forma de ovni**
   - Se llaman nubes lenticulares
   - Parecen platillos volantes
   - Se forman sobre las montañas

3. **Tornados de fuego**
   - Se llaman "diablos de fuego"
   - Son remolinos de aire caliente y llamas
   - ¡Pueden girar a 160 kilómetros por hora!

## 🌱 Curiosidades sobre el cambio climático

1. **Los osos polares están cambiando**
   - Están aprendiendo a pescar de nuevas formas
   - Algunos están nadando más lejos que antes
   - Todo porque el hielo se está derritiendo

2. **Las abejas son detectoras del clima**
   - Cambian su comportamiento según el clima
   - Si el tiempo va a cambiar, vuelven a su colmena
   - ¡Son como pequeñas meteorólogas!

3. **Los árboles hablan entre ellos**
   - Se avisan unos a otros sobre el clima
   - Comparten agua cuando hay sequía
   - ¡Se ayudan a través de sus raíces!

> ¡Recuerda! El clima es fascinante y está lleno de secretos por descubrir. ¡Cada día los científicos aprenden cosas nuevas sobre él!

  `,
  }
  ];