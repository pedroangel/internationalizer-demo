
# Proyecto React con Internacionalización (i18n)

Este proyecto es una aplicación React sencilla que utiliza `react-i18next` para la internacionalización, junto con `TailwindCSS` para los estilos.

## Clonación del Repositorio

Para comenzar, clona el repositorio del proyecto:

```bash
git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/pedroangel/internationalizer-demo.git)
cd internationalizer-demo
```

## Instalación de Dependencias

Instala las dependencias del proyecto utilizando npm:

```bash
npm install
```

## Iniciar el Proyecto

Una vez instaladas las dependencias, puedes iniciar la aplicación localmente ejecutando:

```bash
npm start
```

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en [http://localhost:3000](http://localhost:3000).

## Implementación de `react-i18next`

Este proyecto utiliza `react-i18next` para la internacionalización. A continuación se detallan los pasos básicos de implementación:

1. **Instalación de `react-i18next` y `i18next`:**

   Ejecuta el siguiente comando para instalar las dependencias necesarias:

   ```bash
   npm install react-i18next i18next
   ```

2. **Configuración Inicial de `i18n`:**

   Dentro de la carpeta `src`, crea un archivo `i18n.js` y configura la inicialización de `i18next`:

   ```javascript
   import i18n from 'i18next';
   import { initReactI18next } from 'react-i18next';
   import translations from './locales/translations.json'; // Asumiendo que tus traducciones están en este archivo

   i18n
     .use(initReactI18next)
     .init({
       resources: translations,
       lng: 'en', // Idioma predeterminado
       fallbackLng: 'en',
       interpolation: {
         escapeValue: false, // React ya hace la escapada por defecto
       },
     });

   export default i18n;
   ```

3. **Uso de `useTranslation` en los Componentes:**

   Importa el hook `useTranslation` en los componentes donde necesitas traducciones y úsalo para acceder a las claves de traducción:

   ```javascript
   import React from 'react';
   import { useTranslation } from 'react-i18next';

   function HomePage() {
     const { t } = useTranslation();

     return (
       <div>
         <h1>{t('home.title')}</h1>
         <p>{t('home.subTitle')}</p>
       </div>
     );
   }

   export default HomePage;
   ```

4. **Administración de Traducciones:**

   Las traducciones se almacenan en un archivo JSON estructurado por idioma. Aquí un ejemplo básico de cómo podría verse `translations.json`:

   ```json
   {
     "en": {
       "home": {
         "title": "Ordinary people, extraordinary finances",
         "subTitle": "Reimagine your company's finances with the only platform that brings together accountants and business owners."
       }
     },
     "es": {
       "home": {
         "title": "Personas comunes, finanzas extraordinarias",
         "subTitle": "Reimagina las finanzas de tu empresa con la única plataforma que reúne a contadores y dueños de negocios."
       }
     }
   }
   ```

5. **Cambio de Idioma:**

   Para cambiar el idioma de la aplicación, utiliza el método `i18n.changeLanguage` en respuesta a algún evento del usuario, como un selector de idioma.

   ```javascript
   import i18n from './i18n';

   const changeLanguage = (lng) => {
     i18n.changeLanguage(lng);
   };
   ```

## Despliegue

Para desplegar esta aplicación en Google App Engine, sigue estos pasos:

1. Construye la aplicación para producción:
