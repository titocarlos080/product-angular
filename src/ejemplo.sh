1. Instalación en Windows

Paso 1: Instalar Node.js y npm
    #Descarga el instalador de Node.js desde el sitio oficial: Node.js.
    https://nodejs.org/en/download
    Ejecuta el instalador y sigue las instrucciones en pantalla. El instalador incluye npm (Node Package Manager).

Paso 2: Verificar la instalación
   # Abre una terminal  y verifica la instalación de Node.js y npm ejecutando:
    node -v         
    npm -v

Paso 3: Instalar Angular CLI
  #  Ejecutar el siguiente comando para instalar Angular CLI globalmente:
    npm install -g @angular/cli  || npm install -g @angular/cli@12.2.0

Paso 4: Crear un nuevo proyecto Angular
    #Navega al directorio donde deseas crear tu proyecto.
    Ejecuta el siguiente comando para crear un nuevo proyecto Angular:
    ng new my-first-angular-project

Paso 5: Ejecutar el proyecto Angular
    #Navega al directorio del proyecto y ejecuta el servidor de desarrollo:
    cd my-first-angular-project
    ng serve
Abre tu navegador y ve a http://localhost:4200 para ver tu proyecto en ejecución.



 
2. Instalación en Fedora
# Actualizar los paquetes del sistema
    sudo dnf update -y

# Instalar Node.js y npm                                                    
    sudo dnf install -y nodejs npm

# Verificar la instalación de Node.js y npm                
    node -v
    npm -v                                                

# Instalar Angular CLI globalmente (puedes especificar la versión deseada)    
    sudo npm install -g @angular/cli@12.2.0  # Cambia la versión si es necesario

# Verificar la instalación de Angular CLI
    ng version

# Crear un nuevo proyecto Angular
    ng new my-first-angular-project


# Navegar al directorio del proyecto y ejecutar el servidor de desarrollo
    cd my-first-angular-project 
    ng serve

# Mostrar mensaje final con la URL para acceder al proyecto
 Abre tu navegador y ve a http://localhost:4200 para ver tu proyecto.

# linea de comandos angular
    ng add @angular/material
    ng generate component nombre-componente
    ng generate service nombre-servicio
    ng generate module nombre-modulo                                    
