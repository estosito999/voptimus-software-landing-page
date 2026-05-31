# Voptimus SOFTWARE Landing Page

Frontend corporativo para **Voptimus SOFTWARE**, construido con Next.js, React y TypeScript. El sitio presenta los servicios, soluciones de inteligencia artificial, proyectos, informacion institucional y formulario de contacto de la empresa.

El codigo fuente de la aplicacion vive dentro de la carpeta [`frontend`](./frontend).

## Tabla de contenidos

- [Descripcion](#descripcion)
- [Tecnologias](#tecnologias)
- [Requisitos](#requisitos)
- [Instalacion](#instalacion)
- [Ejecucion local](#ejecucion-local)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Rutas principales](#rutas-principales)
- [Gestion de contenido](#gestion-de-contenido)
- [Variables de entorno](#variables-de-entorno)
- [Build y despliegue](#build-y-despliegue)
- [Notas tecnicas](#notas-tecnicas)

## Descripcion

Este frontend funciona como landing page y sitio institucional para una empresa de desarrollo de software. Incluye:

- Pagina principal con hero, servicios, industrias, proceso, portafolio, tecnologias y contacto.
- Paginas internas para servicios, proyectos, soluciones IA, nosotros y contacto.
- Rutas dinamicas para el detalle de cada servicio.
- Componentes reutilizables con CSS Modules.
- UI basada en Radix UI/shadcn y utilidades de Tailwind CSS.
- Animaciones de transicion entre paginas mediante contexto global.
- Formulario de contacto visual preparado para integrarse con un backend, API route o servicio externo.

## Tecnologias

- **Next.js 16.2.4** con App Router.
- **React 19** y **React DOM 19**.
- **TypeScript 5.7**.
- **Tailwind CSS 4** mediante `@tailwindcss/postcss`.
- **CSS Modules** para estilos por componente.
- **Radix UI** y componentes tipo shadcn/ui.
- **Lucide React** para iconografia.
- **Vercel Analytics** para analitica.
- **pnpm** como gestor de paquetes.

## Requisitos

Antes de ejecutar el proyecto, instala:

- **Node.js 20 o superior**. El proyecto fue probado localmente con Node.js `v24.13.1`.
- **pnpm 10 o superior**. El proyecto fue probado localmente con pnpm `10.33.0`.

Si no tienes pnpm instalado, puedes activarlo con Corepack:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

## Instalacion

Desde la raiz del repositorio:

```bash
cd frontend
pnpm install
```

## Ejecucion local

Para iniciar el servidor de desarrollo:

```bash
cd frontend
pnpm dev
```

Luego abre:

```text
http://localhost:3000
```

Si el puerto `3000` esta ocupado, Next.js mostrara en consola el puerto alternativo utilizado.

## Scripts disponibles

Ejecuta los comandos desde la carpeta `frontend`.

| Script     | Comando    |           Descripcion              |
| ---        | ---        | ---                                |
| Desarrollo | `pnpm dev` | Inicia Next.js en modo desarrollo. |
| Produccion | `pnpm build` | Genera el build optimizado de produccion. |
| Servidor | `pnpm start` | Sirve el build de produccion. Requiere ejecutar `pnpm build` antes. |
| Lint | `pnpm lint` | Script declarado para ESLint. Actualmente requiere instalar/configurar ESLint antes de usarlo. |

## Estructura del proyecto

```text
voptimus-software-landing-page/
|-- README.md
`-- frontend/
    |-- app/                  # Rutas, paginas y layout principal de Next.js
    |-- components/           # Componentes visuales reutilizables
    |-- components/ui/        # Componentes base tipo shadcn/ui
    |-- context/              # Contextos globales de carga y transiciones
    |-- hooks/                # Hooks reutilizables
    |-- lib/                  # Datos, rutas y utilidades compartidas
    |-- public/               # Assets publicos
    |-- styles/               # Estilos globales adicionales
    |-- next.config.mjs       # Configuracion de Next.js
    |-- package.json          # Dependencias y scripts
    |-- pnpm-lock.yaml        # Lockfile de pnpm
    `-- tsconfig.json         # Configuracion de TypeScript
```

## Rutas principales

| Ruta | Archivo | Descripcion |
| --- | --- | --- |
| `/` | `frontend/app/page.tsx` | Landing principal. |
| `/servicios` | `frontend/app/servicios/page.tsx` | Listado de servicios. |
| `/servicios/[slug]` | `frontend/app/servicios/[slug]/page.tsx` | Detalle dinamico de cada servicio. |
| `/soluciones-ia` | `frontend/app/soluciones-ia/page.tsx` | Seccion de soluciones con IA y sostenibilidad. |
| `/proyectos` | `frontend/app/proyectos/page.tsx` | Portafolio de proyectos. |
| `/nosotros` | `frontend/app/nosotros/page.tsx` | Informacion institucional. |
| `/contacto` | `frontend/app/contacto/page.tsx` | Formulario de contacto. |

Las rutas de navegacion estan centralizadas en:

```text
frontend/lib/routes.ts
```

## Gestion de contenido

Los datos principales estan definidos en archivos TypeScript para facilitar su mantenimiento:

- **Servicios:** [`frontend/lib/services.ts`](./frontend/lib/services.ts)
  - Agrega, edita o elimina servicios.
  - Cada servicio define `slug`, `title`, `description`, `icon`, `iconStyle` y `details`.
  - Los slugs alimentan automaticamente las paginas dinamicas de `/servicios/[slug]`.

- **Proyectos:** [`frontend/lib/projects.ts`](./frontend/lib/projects.ts)
  - Controla los proyectos mostrados en el portafolio.
  - Cada proyecto define categoria, descripcion, tecnologias y color de acento.

- **Navegacion:** [`frontend/lib/routes.ts`](./frontend/lib/routes.ts)
  - Mantiene las rutas y enlaces usados por Navbar y Footer.

- **Metadata SEO:** [`frontend/app/layout.tsx`](./frontend/app/layout.tsx)
  - Define titulo, descripcion, keywords, autores y Open Graph.

- **Estilos globales:** [`frontend/app/globals.css`](./frontend/app/globals.css)
  - Define variables CSS, colores, tipografias, utilidades globales, botones y animaciones.

## Variables de entorno

El formulario de contacto envia correos usando Resend. Para que funcione en local o produccion,
crea este archivo:

```txt
frontend/.env.local
```

Variables:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=re_tu_api_key_de_resend
CONTACT_TO_EMAIL=voptimusoftware@gmail.com
CONTACT_FROM_EMAIL=Voptimus SOFTWARE <onboarding@resend.dev>
```

`CONTACT_FROM_EMAIL` puede usar `onboarding@resend.dev` para pruebas. Para enviar desde un
correo propio del dominio, verifica el dominio en Resend y cambia ese valor.

No subas archivos `.env*.local` al repositorio. Ya estan ignorados en `.gitignore`.

## Build y despliegue

Para validar el build de produccion:

```bash
cd frontend
pnpm build
```

Para ejecutar el build localmente:

```bash
pnpm start
```

### Despliegue en Vercel

Configuracion recomendada:

- **Framework:** Next.js.
- **Root Directory:** `frontend`.
- **Install Command:** `pnpm install`.
- **Build Command:** `pnpm build`.
- **Output Directory:** `.next`.

El proyecto incluye `@vercel/analytics`, por lo que puede aprovechar la analitica de Vercel cuando este desplegado.

## Notas tecnicas

- `next.config.mjs` tiene `typescript.ignoreBuildErrors: true`, por lo que el build de produccion no se detiene por errores de TypeScript. Para un flujo mas estricto, se recomienda agregar un script de typecheck.
- `images.unoptimized: true` esta activo, util para despliegues donde no se desea usar la optimizacion de imagenes de Next.js.
- El formulario de contacto envia los datos a `app/api/contact/route.ts` y usa Resend para entregar el correo.
- El script `pnpm lint` existe en `package.json`, pero ESLint no esta instalado/configurado actualmente.
- El build fue verificado correctamente con `pnpm build`.

## Flujo sugerido para cambios

1. Ejecutar `pnpm install` si hay nuevas dependencias.
2. Levantar el entorno con `pnpm dev`.
3. Editar contenido en `lib/` o componentes en `components/`.
4. Validar visualmente las rutas afectadas.
5. Ejecutar `pnpm build` antes de desplegar.
