<h1>Curso</h1>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  
<!--h1 without bottom border-->
<div id="user-content-toc">
  <ul align="center">
    <summary><h2 style="display: inline-block">Tecnologias del curso👨🏻‍💻</h2></summary>
  </ul>
</div>
<!--tech stack icons-->
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=git,docker,github,linux,md,mongodb,postgresql,nestjs,express,nodejs,postman,vscode&perline=14" />
  </a>
</p>


<!-- Introduccion -->

<details><summary><h3> :open_file_folder: Configurando Terminal (Opcional) </h3></summary>

----
## Configurando Terminal (Opcional)
<ol list-style-type="none"> Configuración de Terminal
	<!-- Terminal-->
  <li align="left"  list-style-type="none">	  
	<a href="https://ubuntu.com/getubuntu/releasenotes?os=ubuntu&ver=22.04">
      		 <img width="25" height="25" src="https://cdn.icon-icons.com/icons2/1508/PNG/512/distributorlogoubuntu_103999.png" />
		 Ubuntu
    	</a>
	
	
</ol>

```bash
# Importante cambiarnos a este directorio que es el de $HOME
cd ~
# Para obtener la información más reciente
$ sudo apt update -y
# Para aplicar las actualizaciones a los paquetes instalados en tu sistema
$ sudo apt update -y
# Instar utilidades
$ sudo apt install wget -y 
$ sudo apt install curl -y
# Instalar GIT
$ sudo apt install git -y
# Instalar ZSH
$ sudo apt apt install zsh -y
$ zsh --version
# Agregar zsh como terminal predeterminada
$ chsh -s $(which zsh) -y
# Instalar ohmyzsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" 
# Instalar powerlevel10k
git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
#Plugins productivos 
# autosuggesions plugin
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
# zsh-syntax-highlighting plugin 
```
## Configurando ZSH
```bash
#Escribir
 code .zshrc
 ```
buscar la variable plugins y agregala asi plugins=(sudo git zsh-autosuggestions zsh-syntax-highlighting)
## Configuracion de colores Tokyo Nigh (Opcional)
abre el menu de configuraciones, opciones color de terminal y veras el nombre de los campos de los colores agregalos como se muestra
<ul>
  <li><span style="background-color:rgb(26, 27, 38); color:rgb(169, 177, 214)">Negro: #1a1b26</span></li>
  <li><span style="background-color:rgb(247, 118, 142); color:white">Rojo: #f7768e</span></li>
  <li><span style="background-color:rgb(158, 206, 106); color:rgb(0, 0, 0)">Verde: #9ece6a</span></li>
  <li><span style="background-color:rgb(224, 175, 104); color:rgb(0, 0, 0)">Amarillo: #e0af68</span></li>
  <li><span style="background-color:rgb(122, 162, 247); color:white">Azul: #7aa2f7</span></li>
  <li><span style="background-color:rgb(187, 154, 247); color:white">Magenta: #bb9af7</span></li>
  <li><span style="background-color:rgb(125, 207, 255); color:rgb(0, 0, 0)">Cian: #7dcfff</span></li>
  <li><span style="background-color:rgb(169, 177, 214); color:rgb(0, 0, 0)">Blanco: #a9b1d6</span></li>
  <li><span style="background-color:rgb(103, 110, 149); color:white">Negro brillante: #676e95</span></li>
  <li><span style="background-color:rgb(255, 110, 103); color:white">Rojo brillante: #ff6e67</span></li>
  <li><span style="background-color:rgb(179, 244, 74); color:rgb(0, 0, 0)">Verde brillante: #b3f44a</span></li>
  <li><span style="background-color:rgb(255, 213, 128); color:rgb(0, 0, 0)">Amarillo brillante: #ffd580</span></li>
  <li><span style="background-color:rgb(173, 223, 255); color:rgb(0, 0, 0)">Azul brillante: #addfff</span></li>
  <li><span style="background-color:rgb(255, 178, 255); color:rgb(0, 0, 0)">Magenta brillante: #ffb2ff</span></li>
  <li><span style="background-color:rgb(158, 206, 255); color:rgb(0, 0, 0)">Cian brillante: #9eceff</span></li>
  <li><span style="background-color:rgb(192, 202, 245); color:rgb(0, 0, 0)">Blanco brillante: #c0caf5</span></li>
  <li><span style="background-color:rgb(26, 27, 38); color:rgb(169, 177, 214)">Fondo: #1a1b26</span></li>
  <li><span style="color:rgb(169, 177, 214)">Primer plano: #a9b1d6</span></li>
  <li><span style="color:rgb(169, 177, 214)">Texto del cursor: #a9b1d6</span></li>
  <li><span style="color:rgb(169, 177, 214)">Cursor mismo: #a9b1d6</span></li>
  <li><span style="background-color:rgb(103, 110, 149); color:rgb(169, 177, 214)">Texto seleccionado: #a9b1d6</span></li>
  <li><span style="background-color:rgb(103, 110, 149); color:white">Fondo seleccionado: #676e95</span></li>
</ul>



## Agregando fuente a la terminal
Descargar las Fuentes Nerdfonts:

Visita el sitio web de Nerdfonts: https://www.nerdfonts.com/font-downloads
En la página principal, busca la sección de descarga y selecciona la versión que desees. Puede ser la versión más reciente o una versión específica.
Descarga el archivo ZIP que contiene las fuentes Nerdfonts.
Extraer el Contenido del ZIP:

Descomprime el archivo ZIP que has descargado. Dentro, encontrarás carpetas y archivos, pero lo más importante son los archivos de fuentes con extensión .ttf (TrueType Font).
Instalar las Fuentes:

Selecciona todos los archivos .ttf que has extraído.
Haz clic derecho en los archivos seleccionados y elige "Instalar". Esto instalará las fuentes en tu sistema Windows.
Verificar la Instalación:

Puedes verificar que las fuentes se hayan instalado correctamente y estén disponibles para su uso en programas como Microsoft Word o en la configuración de tu sistema.
Para comprobarlo, ve a "Configuración" (puedes hacer clic en el ícono de engranaje en el menú de inicio) y luego selecciona "Personalización" y "Fuentes". Busca las fuentes Nerdfonts en la lista.
Configurar Terminal o Editor de Texto:

Si estás usando un terminal o editor de texto que te permite cambiar la fuente, abre la configuración y selecciona la fuente Nerdfonts que deseas utilizar.

Yo instale JetBrainsMono Nerd Font

Y listo tu terminal ahora luce mas linda que antes
</details>
<details>
<summary><h3> :open_file_folder: Programas Plugins y aplicaciones para el curso </h3></summary>

## Configuración de Visual Studio Code


<ol list-style-type="none"> Editor de codigo
	<!-- Vscode-->
  <li align="left"  list-style-type="none">	  
	<a href="https://code.visualstudio.com/download">
      		 <img width="25" height="25" src="https://skillicons.dev/icons?i=vscode&perline=14" />
		 Visual Studio Code
    	</a>
	 
<ol list-style-type="none"> Plugins adicionales (Opcional) 
       <li align="left"  list-style-type="none">	  
	<a href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme">
      		 <img width="25" height="25" src="https://pkief.gallerycdn.vsassets.io/extensions/pkief/material-icon-theme/4.32.0/1700479629849/Microsoft.VisualStudio.Services.Icons.Default" />
		 Material Icon Theme
    	</a>	 
		</li>
		     <li align="left"  list-style-type="none">	  
	<a href="https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night">
      		 <img width="25" height="25" src="https://enkia.gallerycdn.vsassets.io/extensions/enkia/tokyo-night/1.0.6/1699639270365/Microsoft.VisualStudio.Services.Icons.Default" />
		Tokyo Night
    	</a>	 
		</li>
  	     <li align="left"  list-style-type="none">	  
	<a href="https://marketplace.visualstudio.com/items?itemName=dotenv.dotenv-vscode">
      		 <img width="25" height="25" src="https://dotenv.gallerycdn.vsassets.io/extensions/dotenv/dotenv-vscode/0.28.1/1699146869103/Microsoft.VisualStudio.Services.Icons.Default" />
		Dotenv Official +Vault
    	</a>	 
		

    
	
</li>
	</ol> 
</li>
	
</ol>

  

<ol list-style-type="none"> Diseño y Testeo de APIs
	<!-- insomnia-->
  <li align="left"  list-style-type="none">	  
	<a href="https://insomnia.rest/download">
      		<img src="https://insomnia.rest/images/insomnia-logo.svg" />
    	</a>
</li>
	<!-- postman-->
	  <li align="left"  list-style-type="none">		 
	<a href="https://www.postman.com/downloads">
      		<img src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg" />
		 Postman
    	</a>
</li>
  </ol>
  
<ol list-style-type="none"> Contenedores
	<!--docker-->
	  <li align="left"  list-style-type="none">		 
	<a href="https://docs.docker.com/engine/install/">
      		<img width="25" height="25" src="https://skillicons.dev/icons?i=docker&perline=14" />
		 Docker
    	</a>
</li>
  </ol>





</details>

<!-- repositories -->

<details><summary><h3> :open_file_folder: Unidadades del curso ramas GIT </h3></summary>

----


<div>
	<h2>Unidad 1</h2>
  <p align="center">
	<a href="https://github.com/jocs1989/CursoUdemyNestjs/tree/mod-2">
      		<img src="https://github-readme-stats.vercel.app/api/pin/?username=jocs1989&repo=CursoUdemyNestjs&theme=tokyonight" alt="GitHub Stats" />
    	</a>
  </div>




<div>
	<h2>Unidad 2</h2>
  <p align="center">
	<a href="https://github.com/jocs1989/CursoUdemyNestjs/tree/mod-dto">
      		<img src="https://github-readme-stats.vercel.app/api/pin/?username=jocs1989&repo=CursoUdemyNestjs&theme=tokyonight" alt="GitHub Stats" />
    	</a>
  </div>


</details>

<details><summary><h3> :open_file_folder: NestJS Tricks </h3></summary>
## Instalar Nestjs
	
```bash
$ npm i -g @nestjs/cli
```
## Crear un nuevo proyecto
```bash
$ nest new project-name

 ```
</details>

