# Informe sobre las APIs utilizadas

## Introducción
Este informe analiza las APIs utilizadas en el desarrollo del juego de Tres en Raya y evalúa su impacto en la experiencia del usuario y la funcionalidad.

### 1. API KeyboardEvent
La API KeyboardEvent permite capturar y gestionar eventos de teclado en una página web. Es útil para detectar qué teclas presiona el usuario y ejecutar funciones en respuesta.

En este proyecto, se utilizó para detectar cuando se presiona la tecla 'Q'. Este evento activa la funcionalidad de pantalla completa, permitiendo a los usuarios alternar entre los modos sin necesidad de un botón o menú.

- `document.addEventListener("keydown", (event) => { ... })`: Escucha las pulsaciones de teclas.
- `event.key.toLowerCase() === "q"`: Verifica si se ha presionado la tecla 'Q'.
- Proporciona una forma interactiva e intuitiva para que los usuarios controlen el modo de pantalla completa.

### 2. API MouseEvent
La API MouseEvent permite gestionar eventos relacionados con el ratón, como clics, movimientos y desplazamientos. Es fundamental para la interacción con elementos gráficos en una interfaz web.

En este proyecto, se utilizó para manejar los clics del usuario en el tablero del juego. Esto permitió a los jugadores seleccionar celdas haciendo clic, facilitando un juego fluido e intuitivo.

- `cell.addEventListener("click", handleCellClick)`: Detecta cuando se hace clic en una celda.
- Garantiza una interacción fácil y amigable con el tablero del juego.

### 3. API Fullscreen
La API Fullscreen permite a una página web cambiar al modo de pantalla completa, mejorando la inmersión del usuario. Esta API es útil para aplicaciones interactivas como juegos o presentaciones multimedia.

En este proyecto, la API Fullscreen permite que el juego entre o salga del modo de pantalla completa cuando se presiona la tecla 'Q'.

- `document.documentElement.requestFullscreen()`: Activa el modo de pantalla completa.
- `document.exitFullscreen()`: Sale del modo de pantalla completa.

## Conclusions
The combination of the KeyboardEvent, MouseEvent, and Fullscreen APIs significantly improves the usability and user experience of the Tic-Tac-Toe game. The KeyboardEvent API allows seamless interaction with fullscreen mode, the MouseEvent API ensures intuitive gameplay, and the Fullscreen API provides an immersive experience. These APIs collectively demonstrate the power of JavaScript in creating interactive and dynamic web applications.

