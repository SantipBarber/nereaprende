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
 


  `,
        image: `data:image/svg+xml,%3Csvg viewBox='0 0 100 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='40' y='20' width='20' height='140' rx='10' fill='white' stroke='%23333' stroke-width='2'/%3E%3Ccircle cx='50' cy='160' r='15' fill='%23ff4444' stroke='%23333' stroke-width='2'/%3E%3Crect x='45' y='80' width='10' height='80' fill='%23ff4444'/%3E%3Cline x1='60' y1='40' x2='70' y2='40' stroke='%23333' stroke-width='2'/%3E%3Cline x1='60' y1='80' x2='70' y2='80' stroke='%23333' stroke-width='2'/%3E%3Cline x1='60' y1='120' x2='70' y2='120' stroke='%23333' stroke-width='2'/%3E%3C/svg%3E`
      }
  ];