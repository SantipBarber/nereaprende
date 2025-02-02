import { content as socialTopic1Content } from './courses/4/social/topic-1/content';
import { test as socialTopic1Test } from './courses/4/social/topic-1/test';
import { content as spanishTopic2Content } from './courses/4/spanish/topic-2/content';
import { test as spanishTopic2Test } from './courses/4/spanish/topic-2/test';
import { content as socialTopic2Content } from './courses/4/social/topic-2/content';
import { test as socialTopic2Test } from './courses/4/social/topic-2/test';
import { content as mathTopic2Content } from './courses/4/math/topic-2/content';
import { test as mathTopic2Test } from './courses/4/math/topic-2/test';
import { content as scienceTopic1Content } from './courses/4/science/topic-1/content';
import { test as scienceTopic1Test } from './courses/4/science/topic-1/test';
import { content as spanishTopic3Content } from './courses/4/spanish/topic-3/content';
import { test as spanishTopic3Test } from './courses/4/spanish/topic-3/test';
import { content as mathTopic3Content } from './courses/4/math/topic-3/content';
import { test as mathTopic3Test } from './courses/4/math/topic-3/test';
import { content as englishTopic1Content } from './courses/4/english/topic-1/content';
import { test as englishTopic1Test } from './courses/4/english/topic-1/test';
import { content as englishTopic2Content } from './courses/4/english/topic-2/content';
import { test as englishTopic2Test } from './courses/4/english/topic-2/test';
import { content as englishTopic3Content } from './courses/4/english/topic-3/content';
import { test as englishTopic3Test } from './courses/4/english/topic-3/test';
import { content as scienceTopic2Content } from './courses/4/science/topic-2/content';
import { test as scienceTopic2Test } from './courses/4/science/topic-2/test';
import { content as scienceTopic3Content } from './courses/4/science/topic-3/content';
import { test as scienceTopic3Test } from './courses/4/science/topic-3/test';
import { content as mathTopic1Content } from './courses/4/math/topic-1/content';
import { test as mathTopic1Test } from './courses/4/math/topic-1/test';
import { content as mathTopic4Content } from './courses/4/math/topic-4/content';
import { test as mathTopic4Test } from './courses/4/math/topic-4/test';
import { content as spanishTopic1Content } from './courses/4/spanish/topic-1/content';
import { test as spanishTopic1Test } from './courses/4/spanish/topic-1/test';
import { content as spanishTopic4Content } from './courses/4/spanish/topic-4/content';
import { test as spanishTopic4Test } from './courses/4/spanish/topic-4/test';
import {content as socialTopic3Content} from './courses/4/social/topic-3/content';
import {test as socialTopic3Test} from './courses/4/social/topic-3/test';
import { content as spanishTopic5Content } from './courses/4/spanish/topic-5/content';
import { test as spanishTopic5Test } from './courses/4/spanish/topic-5/test';

export const courseData = {
  courses: {
    '4': {
      id: '4',
      name: '4º Primaria',
      subjects: {
        'english': {
          id: 'english',
          name: 'Inglés',
          topics: {
            'topic-1': {
              id: 'topic-1',
              name: 'Super Sports',
              content: englishTopic1Content,
              test: englishTopic1Test
            },
            'topic-2': {
              id: 'topic-2',
              name: 'TV Time!',
              content: englishTopic2Content,
              test: englishTopic2Test
            },
            'topic-3': {
              id: 'topic-3',
              name: 'Working Day and Night',
              content: englishTopic3Content,
              test: englishTopic3Test
            }
          }
        },
        'social': {
          id: 'social',
          name: 'Ciencias Sociales',
          topics: {
            'topic-1': {
              id: 'topic-1',
              name: 'La Tierra y el Sistema Solar',
              content: socialTopic1Content,
              test: socialTopic1Test
            },
            'topic-2': {
              id: 'topic-2',
              name: 'El clima. ¿Cómo está cambiando?',
              content: socialTopic2Content,
              test: socialTopic2Test
            }, 
            'topic-3': {
              id: 'topic-3',
              name: '¿Cuántos somos y dónde vivimos?',
              content: socialTopic3Content,
              test: socialTopic3Test
            }
          }
        },
        'spanish': {
          id: 'spanish',
          name: 'Lengua Castellana',
          topics: {
            'topic-1': {
              id: 'topic-1',
              name: 'En familia',
              content: spanishTopic1Content,
              test: spanishTopic1Test
            },
            'topic-2': {
              id: 'topic-2',
              name: '¡Te lo regalo!',
              content: spanishTopic2Content,
              test: spanishTopic2Test
            },
            'topic-3': {
              id: 'topic-3',
              name: 'Palabras llanas, demostrativos y más',
              content: spanishTopic3Content,
              test: spanishTopic3Test
            },
            'topic-4': {
              id: 'topic-4',
              name: '¿A dónde vamos?',
              content: spanishTopic4Content,
              test: spanishTopic4Test
            },
            'topic-5': {
              id: 'topic-5',
              name: 'Adjetivos, numerales y poesía',
              content: spanishTopic5Content,
              test: spanishTopic5Test
            }
          }
        },
        'math': {
          id: 'math',
          name: 'Matemáticas',
          topics: {
            'topic-1': {
              id: 'topic-1',
              name: 'Números de cuatro y cinco cifras',
              content: mathTopic1Content,
              test: mathTopic1Test
            },
            'topic-2': {
              id: 'topic-2',
              name: 'Sumas y Restas: Propiedades y Operaciones',
              content: mathTopic2Content,
              test: mathTopic2Test
            },
            'topic-3': {
              id: 'topic-3',
              name: 'Multiplicación y sus propiedades',
              content: mathTopic3Content,
              test: mathTopic3Test
            },
            'topic-4': {
              id: 'topic-4',
              name: 'Ángulos y polígonos',
              content: mathTopic4Content,
              test: mathTopic4Test
            }
          }
        },
        'science': {
          id: 'science',
          name: 'Natural Science',
          topics: {
            'topic-1': {
              id: 'topic-1',
              name: 'Health and Our Body',
              content: scienceTopic1Content,
              test: scienceTopic1Test
            },
            'topic-2': {
              id: 'topic-2',
              name: 'We love plants',
              content: scienceTopic2Content,
              test: scienceTopic2Test
            },
            'topic-3': {
              id: 'topic-3',
              name: 'We respect all living things',
              content: scienceTopic3Content,
              test: scienceTopic3Test
            }
          }
        }
      }
    }
  }
};