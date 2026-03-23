export default function (plop) {
  // 1. GENERADOR DE FEATURE COMPLETA (Slice)
  plop.setGenerator('feature', {
    description: 'Crea una nueva funcionalidad (Página, Service, Hook)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nombre de la feature (ej: rooms, booking):'
      }
    ],
    actions: [
      // Página principal
      {
        type: 'add',
        path: 'src/features/{{dashCase name}}/{{pascalCase name}}Page.tsx',
        template: 'import styles from "./{{pascalCase name}}Page.module.css";\n\nexport const {{pascalCase name}}Page = () => {\n  return (\n    <div className={styles.container}>\n      <h1>{{pascalCase name}} Page</h1>\n    </div>\n  );\n};'
      },
      // CSS de la página
      {
        type: 'add',
        path: 'src/features/{{dashCase name}}/{{pascalCase name}}Page.module.css',
        template: '.container { padding: 20px; }'
      },
      // Service base
      {
        type: 'add',
        path: 'src/features/{{dashCase name}}/services/{{camelCase name}}Service.ts',
        template: 'import api from "../../../shared/api/api"; // Ajusta según tu ruta de axios\n\nexport const get{{pascalCase name}}Data = async () => {\n  const response = await api.get("/{{dashCase name}}");\n  return response.data;\n};'
      },
      // Hook base
      {
        type: 'add',
        path: 'src/features/{{dashCase name}}/hooks/use{{pascalCase name}}.ts',
        template: 'import { useState, useEffect } from "react";\n\nexport const use{{pascalCase name}} = () => {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  return { data, loading };\n};'
      }
    ]
  });

  // 2. GENERADOR DE COMPONENTES INTERNOS DE FEATURE
  plop.setGenerator('feature-component', {
    description: 'Crea un componente dentro de una feature existente',
    prompts: [
      {
        type: 'input',
        name: 'feature',
        message: '¿A qué feature pertenece? (ej: home, rooms):'
      },
      {
        type: 'input',
        name: 'name',
        message: 'Nombre del componente (ej: Hero, RoomCard):'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{dashCase feature}}/components/{{pascalCase name}}.tsx',
        template: 'export const {{pascalCase name}} = () => {\n  return <div>{{pascalCase name}}</div>;\n};'
      }
    ]
  });

  // 3. GENERADOR DE SHARED UI
  plop.setGenerator('shared-ui', {
    description: 'Crea un componente reutilizable en shared/ui',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nombre del componente UI (ej: Button, Card):'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/shared/ui/{{pascalCase name}}/{{pascalCase name}}.tsx',
        template: 'import styles from "./{{pascalCase name}}.module.css";\n\ninterface Props {}\n\nexport const {{pascalCase name}} = ({}: Props) => {\n  return <div className={styles.base}>{{pascalCase name}}</div>;\n};'
      },
      {
        type: 'add',
        path: 'src/shared/ui/{{pascalCase name}}/{{pascalCase name}}.module.css',
        template: '.base { /* estilos base */ }'
      }
    ]
  });
}