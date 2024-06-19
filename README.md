# ATOM-FRONTEND

Este proyecto es la parte FrontEnd del Challenge Tecnico de Atom.
Realizado con Angular 16.

## ESTRUCTURA

- `base`: Carpeta que contiene los archivos guia o base para los usecase
- `data`: En esta capa es la que implementa la logica de acceso a los datos
- `domain`: Esta capa contiene la logica e interfaces necesarias para el negocio (modelos, repositorios, usecases)
- `presentation`: Esta capa contiene todos los componentes para la vista organizados de la siguiente forma
   * `services`: Contiene los servicios que se llamaran en los componentes de la aplicacion
   * `auth`: Carpeta que contitne los componentes de login
   * `layouts`: Contiene el componente principal `HTML` donde estara el resto de componentes de la app
   * `shred`: Contiene componentes y recursos que se usan en toda la aplicacion como la barra o menu lateral
   * `tarea`: Módulo que contiene los componentes necesarios para realizar las operaciones requeridas respecto a tareas
   * `guard`: Carpeta que contiene el guard donde se valida siempre que el usuario este logueado
   * `helper`: Carpeta que contiene algunas funciones de validaciones que puedan requerir

## ARQUITECTURA

- Se uso una arquitectura limpia y orientada al `Domain`, usando algunos patrones como repositorios, gestionados
  muy bien por la capa `data` para una mayor flexibilidad y adaptacion a los cambios.

## NOMENCLATURAS
- Kebab Case
  * Para el nombre de los archivos
- Camel Case
  * Para nombrar variables, metodos y funciones
- Pascal Case
  * Para nombrar clases, interfaces.