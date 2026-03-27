
-------------------------------------------
# LoginHM

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.4.
>>Este proyecto se generó con [Angular CLI](https://github.com/angular/angular-cli) versión 21.1.4.



-------------------------------------------
## Development server

To start a local development server, run:
>>  Para iniciar un servidor de desarrollo local, ejecute:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.
>>  Una vez que el servidor esté en funcionamiento, abra su navegador y acceda a `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifique alguno de los archivos fuente.



-------------------------------------------
## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:
>>  Angular CLI incluye potentes herramientas para la generación de código. Para generar un nuevo


```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:
>>  Para obtener una lista completa de los esquemas disponibles (como `componentes`, `directivas` o `pipes`), ejecuta:

```bash
ng generate --help
```



-------------------------------------------
## Building

To build the project run:
>>  Para compilar el proyecto, ejecuta:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.
>>  Esto compilará tu proyecto y guardará los archivos de compilación en el directorio `dist/`. Por defecto, la compilación de producción optimiza tu aplicación para mejorar el rendimiento y la velocidad.



-------------------------------------------
## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:
>>  Para ejecutar pruebas unitarias con el ejecutor de pruebas [Vitest](https://vitest.dev/), utilice el siguiente comando:

```bash
ng tPara compilar el proyecto, ejecuta:est
```



-------------------------------------------
## Running end-to-end tests

For end-to-end (e2e) testing, run:
>>  Para realizar pruebas de extremo a extremo (e2e), ejecute:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.
>>  Angular CLI no incluye un framework de pruebas de extremo a extremo por defecto. Puede elegir uno que se ajuste a sus necesidades.



-------------------------------------------
## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
>>  Para obtener más información sobre el uso de Angular CLI, incluyendo referencias detalladas de comandos, visite la página [Información general y referencia de comandos de Angular CLI](https://angular.dev/tools/cli)



-------------------------------------------
## Dockerizar LoginHM

Esta configuración crea una imagen de producción optimizada:
>>  This setup creates an optimized production image:

1. Compila Angular dentro de un contenedor Node.
2. Sirve los archivos estáticos con Nginx.
3. Soporta rutas SPA usando fallback a `index.html`.

### Opción 1: Docker Compose

```bash
docker compose up --build -d
```

Abrir en:
>>  Open in:

`http://localhost:8080`

Para detener:
>>  To stop:

```bash
docker compose down
```

### Opción 2: Docker CLI

Construir imagen:
>>  Build image:

```bash
docker build -t loginhm:latest .
```

Ejecutar contenedor:
>>  Run container:

```bash
docker run --name loginhm-web -p 8080:80 --rm loginhm:latest
```

Abrir en:
>>  Open in:

`http://localhost:8080`
