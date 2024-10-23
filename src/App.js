import React, { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import './index.css';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';


const topics = [
  {
    title: "El Sistema Solar",
    content: `
# El Sistema Solar

El Sistema Solar es como una gran familia de astros que giran alrededor del Sol. Imagina que el Sol es como el padre de esta familia espacial.

## Componentes del Sistema Solar

- **El Sol:** Una enorme esfera de fuego que nos da luz y calor.  
  *Dato curioso:* Si la Tierra fuera del tamaño de una canica, el Sol sería tan grande como una pelota de fútbol.
- **Ocho planetas:** Son como los hijos del Sol. En orden desde el más cercano al Sol:
  1. Mercurio
  2. Venus
  3. Tierra
  4. Marte
  5. Júpiter
  6. Saturno
  7. Urano
  8. Neptuno

- **Planetas enanos:** Son los 'primos pequeños' de los planetas, como Plutón o Ceres.

- **Satélites:** Son como las 'mascotas' de los planetas. La Luna es el satélite de la Tierra.

- **Asteroides:** Rocas espaciales que flotan entre los planetas, la mayoría entre Marte y Júpiter.

- **Cometas:** Bolas de hielo y polvo que cuando se acercan al Sol, ¡desarrollan una cola brillante!

## Tipos de planetas

Los planetas se dividen en dos grupos:

1. **Planetas rocosos:** Son los cuatro más cercanos al Sol. Son pequeños y duros, como canicas.
2. **Planetas gaseosos:** Son los cuatro más lejanos. Son gigantes y están hechos principalmente de gases, como globos enormes.
    `,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/El_Sistema_Solar.pdf/page1-2560px-El_Sistema_Solar.pdf.jpg"
  },
  {
    title: "La Tierra, nuestro hogar",
    content: `
# La Tierra, nuestro hogar

La Tierra es nuestro planeta, el tercero desde el Sol y el único donde sabemos que hay vida. Es como una enorme pelota azul y verde flotando en el espacio.

## Características de la Tierra

- **Tamaño:** Si pudieras conducir un coche alrededor de la Tierra, tardarías unos 17 días sin parar.
- **Composición:** Está hecha de rocas y metales. Si la cortaras por la mitad, verías capas como en una cebolla gigante.
- **Atmósfera:** Es como una manta de aire que nos protege. Gracias a ella podemos respirar y nos protege de los meteoritos.
- **Agua:** ¡El 71% de la Tierra está cubierta de agua! Por eso desde el espacio se ve azul.

## Movimientos de la Tierra

La Tierra tiene dos movimientos principales:

1. **Rotación:**
   - Gira sobre sí misma como una peonza.
   - Tarda 24 horas, y por eso tenemos el día y la noche.

2. **Traslación:**
   - Viaja alrededor del Sol.
   - Tarda 365 días (un año) y es lo que causa las estaciones.

_¿Sabías que...?_ La Tierra está un poco inclinada, como si fuera una peonza torcida. Esta inclinación es muy importante porque hace que tengamos las cuatro estaciones del año.
    `,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Nasa_blue_marble.jpg"
  },
  {
    title: "Las capas de la Tierra",
    content: `
# Las capas de la Tierra

La Tierra es como una gran pelota con diferentes capas. Imagina que es como una cebolla gigante flotando en el espacio.

## Las cuatro principales capas de la Tierra

### 1. Atmósfera
- Es como una manta de aire que rodea la Tierra.
- Está hecha principalmente de:
  - 78% nitrógeno
  - 21% oxígeno
- Nos protege de los rayos dañinos del Sol y de las rocas del espacio.
- Tiene varias capas, como un pastel de varios pisos.

### 2. Hidrosfera
- Es toda el agua de la Tierra.
- Incluye:
  - Océanos
  - Mares
  - Ríos
  - Lagos
  - Agua de las nubes
- ¡Cubre casi tres cuartas partes de la superficie de la Tierra!

### 3. Geosfera
Es la parte 'sólida' de la Tierra. Tiene tres partes principales:
  a) **Corteza:** Es la 'piel' de la Tierra, donde vivimos nosotros.
  b) **Manto:** Es la capa más gruesa, debajo de la corteza.
  c) **Núcleo:** Es el centro de la Tierra, y está tan caliente como la superficie del Sol.

### 4. Biosfera
- Es donde vive todo lo que está vivo en la Tierra.
- Incluye a todas las plantas, animales, personas y hasta los microbios más pequeños.
- Se extiende desde el fondo del océano hasta varios kilómetros en el cielo.

> Todas estas capas trabajan juntas para hacer de la Tierra un lugar perfecto para la vida. ¡Es como si nuestro planeta fuera una gran máquina perfectamente diseñada!
    `,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Earth_poster.svg/1280px-Earth_poster.svg.png"
  },
  {
    title: "Cómo vemos la Tierra",
    content: `
# Cómo vemos la Tierra

Hay dos formas principales de ver cómo es la Tierra:

## 1. Globo terráqueo

Es como una mini Tierra que puedes tener en tu habitación.

- Muestra la Tierra como una esfera, que es su forma real.
- Tiene líneas especiales:
  - **Ecuador:** Una línea imaginaria que divide la Tierra en mitad norte y mitad sur.
  - **Meridianos:** Líneas que van de polo a polo, como los gajos de una naranja.
  - **Paralelos:** Líneas que rodean la Tierra paralelas al ecuador.
  - **Trópicos:** Líneas especiales que marcan zonas muy calurosas.
  - **Círculos polares:** Marcan el comienzo de las zonas más frías de la Tierra.

## 2. Mapas

Son como si 'aplastaras' el globo terráqueo en una hoja de papel.

- Pueden mostrar todo el mundo o solo una parte, como un país o una ciudad.
- Partes importantes de un mapa:
  1. **Título:** Te dice qué muestra el mapa.
  2. **Leyenda:** Explica qué significan los símbolos y colores del mapa.
  3. **Escala:** Te dice cuánto se ha 'encogido' el mundo real en el mapa.
  4. **Rosa de los vientos:** Muestra dónde está el norte, sur, este y oeste.

### Tipos de mapas

- **Físicos:** Muestran montañas, ríos y océanos.
- **Políticos:** Muestran países, ciudades y fronteras.
- **Temáticos:** Pueden mostrar el clima, la población, o cualquier otro tema especial.

> ¡Con globos terráqueos y mapas, puedes explorar el mundo entero sin salir de casa!
    `,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Whole_world_-_land_and_oceans_12000.jpg/2560px-Whole_world_-_land_and_oceans_12000.jpg"
  },
  {
    title: "Curiosidades sobre la Tierra y el espacio",
    content: `
# Curiosidades sobre la Tierra y el espacio

¡Prepárate para sorprenderte con estos datos fascinantes sobre nuestro planeta y el universo!

1. **Un día en Venus dura más que un año:** Venus tarda más en girar sobre sí mismo que en dar una vuelta alrededor del Sol.

2. **Más árboles que estrellas:** Hay más árboles en la Tierra que estrellas en la Vía Láctea.
   - Árboles en la Tierra: ~3 billones
   - Estrellas en la Vía Láctea: ~400 mil millones

3. **El océano más profundo que la montaña más alta:**
   - Fosa de las Marianas (punto más profundo): ~11 km
   - Monte Everest (montaña más alta): ~8.8 km

4. **La Gran Mancha Roja de Júpiter:** Una tormenta tan grande que cabrían 3 Tierras dentro de ella.

5. **Viaje de la luz del Sol:** La luz del Sol tarda 8 minutos en llegar a la Tierra.

6. **Plutón es pequeño:** Es más pequeño que España.

7. **Huellas lunares eternas:** En la Luna hay huellas de astronautas que durarán millones de años.

8. **Agua en Europa:** Hay más agua en Europa (luna de Júpiter) que en todos los océanos de la Tierra.

9. **Año corto en Mercurio:** Un año en Mercurio dura solo 88 días terrestres.

10. **Distancia Tierra-Luna a escala:**
    - Si la Tierra fuera una pelota de baloncesto
    - La Luna sería como una pelota de tenis
    - Y estaría a unos 7 metros de distancia

> ¡El universo está lleno de maravillas por descubrir!
    `,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Solar_System_by_Philippe_Put.jpg/2560px-Solar_System_by_Philippe_Put.jpg"
  }
];

const questions = [
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



const StudySection = () => (
  <div className="space-y-8">
    {topics.map((topic, index) => (
      <Card key={index} className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{topic.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <img src={topic.image} alt={topic.title} className="w-full h-auto mb-6 rounded-lg" />
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ children, ...props }) =>
                children ? (
                  <h1 className="text-3xl font-bold mb-4 mt-6" {...props}>
                    {children}
                  </h1>
                ) : null,
              h2: ({ children, ...props }) =>
                children ? (
                  <h2 className="text-2xl font-semibold mb-3 mt-5" {...props}>
                    {children}
                  </h2>
                ) : null,
              h3: ({ children, ...props }) =>
                children ? (
                  <h3 className="text-xl font-medium mb-2 mt-4" {...props}>
                    {children}
                  </h3>
                ) : null,
              p: ({ children, ...props }) => (
                <p className="mb-4 text-base leading-relaxed" {...props}>
                  {children}
                </p>
              ),
              ul: ({ children, ...props }) => (
                <ul className="list-disc list-outside pl-5 space-y-2" {...props}>
                  {children}
                </ul>
              ),
              ol: ({ children, ...props }) => (
                <ol className="list-decimal list-outside mb-4 pl-5" {...props}>
                  {children}
                </ol>
              ),
              li: ({ children, ...props }) => (
                <li className="mb-2 text-base" {...props}>
                  {children}
                </li>
              ),
              blockquote: ({ children, ...props }) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4" {...props}>
                  {children}
                </blockquote>
              ),
              strong: ({ children, ...props }) => (
                <strong className="font-bold" {...props}>
                  {children}
                </strong>
              ),
              em: ({ children, ...props }) => (
                <em className="italic" {...props}>
                  {children}
                </em>
              ),
            }}
            className="markdown-content"
          >
            {topic.content}
          </ReactMarkdown>
        </CardContent>
      </Card>
    ))}
  </div>
);


const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => 
      answer === questions[index].correctAnswer ? score + 1 : score, 0);
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <Card>
        <CardHeader>
          <CardTitle>Resultados del Test</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">Has acertado {score} de {questions.length} preguntas.</p>
          {questions.map((q, index) => (
            <div key={index} className="mb-2 flex items-center">
              {answers[index] === q.correctAnswer ? (
                <CheckCircle className="text-green-500 mr-2" />
              ) : (
                <AlertCircle className="text-red-500 mr-2" />
              )}
              <span>{q.question}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pregunta {currentQuestion + 1} de {questions.length}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{questions[currentQuestion].question}</p>
        <div className="space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(index)}
              variant={answers[currentQuestion] === index ? "default" : "outline"}
              className="w-full justify-start"
            >
              {option}
            </Button>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <Button 
            onClick={previousQuestion} 
            disabled={currentQuestion === 0}
            variant="outline"
          >
            Anterior
          </Button>
          <Button onClick={nextQuestion}>
            {currentQuestion < questions.length - 1 ? "Siguiente" : "Ver resultados"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">La Tierra y el Sistema Solar</h1>
      <Tabs defaultValue="study" className="w-full">
        <TabsList className="grid w-full grid-cols-2 rounded-lg bg-gray-200 p-1">
          <TabsTrigger value="study" className="rounded-md py-2 px-4 data-[state=active]:bg-white data-[state=active]:shadow">
            Repaso
          </TabsTrigger>
          <TabsTrigger value="quiz" className="rounded-md py-2 px-4 data-[state=active]:bg-white data-[state=active]:shadow">
            Test
          </TabsTrigger>
        </TabsList>
        <TabsContent value="study" className="mt-4">
          <StudySection />
        </TabsContent>
        <TabsContent value="quiz" className="mt-4">
          <QuizSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
