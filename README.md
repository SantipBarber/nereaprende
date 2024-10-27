# Plataforma Educativa de Aprendizaje Interactivo

Una aplicación web educativa diseñada para estudiantes de primaria, que ofrece contenido interactivo y herramientas de aprendizaje adaptadas al currículo español.

## 🎯 Características Principales

- **Contenido Estructurado**: Organización por asignaturas, cursos y temas
- **Secciones Interactivas**: 
  - Área de estudio con contenido enriquecido
  - Tests interactivos para evaluación del aprendizaje
- **Diseño Responsivo**: Interfaz adaptable a diferentes dispositivos
- **UI Moderna**: Implementada con Tailwind CSS y componentes shadcn/ui

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React.js
- **Routing**: React Router DOM
- **Estilos**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Markdown**: react-markdown con rehype-raw
- **Iconos**: Lucide React

## 📚 Estructura del Contenido

El contenido está organizado jerárquicamente:

```
Asignaturas
└── Cursos
    └── Temas
        ├── Contenido de Estudio
        └── Tests
```

### Asignaturas Actuales
- Ciencias Sociales
- Lengua Castellana

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

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── common/
│   │   ├── QuizSection.js
│   │   └── StudySection.js
│   ├── layout/
│   │   ├── Footer.js
│   │   ├── Layout.js
│   │   └── Navbar.js
│   └── ui/
├── content/
│   ├── social/
│   └── spanish/
├── pages/
├── routes/
└── utils/
```

## 🎨 Características de la UI

- **Navegación Intuitiva**: Menú desplegable por asignaturas y cursos
- **Tabs Interactivos**: Alternancia entre contenido de estudio y tests
- **Diseño Accesible**: Enfoque en la usabilidad para estudiantes de primaria

## 👥 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes, por favor abra primero un issue para discutir lo que le gustaría cambiar.

## 📝 Licencia

[Tipo de Licencia] - ver archivo LICENSE.md para más detalles

## ✨ Reconocimientos

Concepto original por Nerea Pérez Andrade - Una plataforma educativa personal para hacer el aprendizaje más accesible.

---

Desarrollado con ❤️ para hacer el aprendizaje más accesible y divertido