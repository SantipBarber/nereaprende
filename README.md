# NereAprende - Plataforma Educativa Interactiva

NereAprende es una aplicación web educativa diseñada para estudiantes de primaria, que ofrece contenido interactivo y herramientas de aprendizaje adaptadas al currículo español

## 🎯 Características Principales

- **Contenido Estructurado**: 
  - Organización jerárquica por cursos, asignaturas y temas
  - Contenido adaptado al currículo español
  - Interfaz intuitiva y amigable para niños

- **Secciones Interactivas**: 
  - Área de estudio con contenido enriquecido en Markdown
  - Tests interactivos con retroalimentación inmediata
  - Sistema de puntuación y seguimiento del progreso

- **Diseño Moderno**:
  - Interfaz responsiva y adaptable
  - Tema claro optimizado para lectura
  - Componentes interactivos con animaciones suaves

## 🛠️ Tecnologías Utilizadas

- **Frontend**: 
  - React 18
  - React Router DOM para la navegación
  - React Markdown para renderizado de contenido
  - Lucide React para iconografía

- **Estilos**: 
  - Tailwind CSS
  - shadcn/ui para componentes base
  - CSS Modules para estilos específicos

- **UI/UX**:
  - Sistema de diseño consistente
  - Navegación jerárquica intuitiva
  - Feedback visual para interacciones

## 📚 Estructura del Proyecto

```
src/
├── components/
│   ├── common/
│   │   ├── QuizSection.js    # Componente de tests
│   │   └── StudySection.js   # Componente de contenido
│   ├── layout/
│   │   ├── Footer.js
│   │   ├── Layout.js
│   │   └── Navbar.js
│   └── ui/                   # Componentes base shadcn/ui
├── content/
│   ├── courses/
│   │   └── 4/               # Contenido 4º Primaria
│   │       ├── social/      # Ciencias Sociales
│   │       └── spanish/     # Lengua Castellana
├── pages/
│   ├── Home.js
│   └── subjects/
│       └── TopicPage.js
├── routes/
│   └── Routes.js
├── services/
│   └── contentService.js
└── utils/
    ├── app-data.js
    └── constants.js
```

## 🎨 Estructura del Contenido

El contenido se organiza jerárquicamente:

```
Cursos
└── Asignaturas
    └── Temas
        ├── Contenido de Estudio (Markdown)
        └── Tests Interactivos
```

### Asignaturas Actuales
- **4º Primaria**
  - Ciencias Sociales
    - La Tierra y el Sistema Solar
  - Lengua Castellana
    - ¡Te lo regalo!

## 🚀 Comenzando

### Prerrequisitos

- Node.js 20.x
- npm

### Instalación

1. Clonar el repositorio
```bash
git clone [url-del-repositorio]
```

2. Instalar dependencias
```bash
npm install
```

3. Iniciar el servidor de desarrollo
```bash
npm start
```

## 🧪 Tests

```bash
npm test
```

## 🏗️ Despliegue

El proyecto está configurado para despliegue en Vercel:

```bash
npm run build
```

## 👥 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz Fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## ✨ Reconocimientos

Concepto original por Nerea Pérez Andrade - Una plataforma educativa personal para hacer el aprendizaje más accesible y divertido.

---

Desarrollado con ❤️ para ayudar a estudiantes de primaria a aprender de forma interactiva
