# Configuración:
<br/>

- <h2>Desde el Front o Client:</h2>

 <p>1) Descargar las dependencias:</p>
 <h6>npm i</h6>
 <br/>
 <p>2) Correr el frontend/client en el puerto 3000 (http://localhost:3000):</p>
 <h6>npm start</h6>
 
 <hr/>
 
 - <h2>Desde el Back o Api:</h2>
 <p>1) Descargar las dependencias:</p>
 <h6>npm i</h6>
 <br/>
 <p>2) Crear una base de datos en postgreSQL (Es necesario tener instalado postgres):</p>
 <h6>Vamos a la terminal de nuestra PC, en el caso de windows: con la "tecla windows + r", escribimos "cmd" y enter.</h6>
 <h5>Escribimos "psql -U -su nombre de usuario de postgres (por defecto es postgres)-"</h5>
 <span>En mi caso: psql -U postgres</span>
 <h5>Escribimos nuestra contraseña de postgres (Es la que escriben cuando hacen la instalación)</h5>
 <h5>Escrimos el siguiente comando: Create database -NombreDeLaBaseDeDatos-</h5>
 <span>En mi caso: create database sitensotest</span>
 <br/>
 <br/>
 <br/>
 <p>3) Hacer un archivo de configuración de variables de entorno:</p>
 <h6>Sobre la carpeta "api" crear un archivo ".env"  (EL NOMBRE ES OBLIGATORIO)</h6>
 <br/>
 <p>4) Dentro del archivo .env crear las variables de entorno necesarias:</p>
 <h6>PASSWORD= -NombreDeContraseñaDePostgreSQL- </h6>
 <h6/>DB= -NombreDeLaBaseDeDatos-</h6>
 <span>En mi caso: DB=sitensotest</span>
 <h6/>USER_DB= -NombreDeUsuariDePostgres-</h6>
 <span>En mi caso: USER_DB=postgres</span>
 <br/>
 <br/>
 <br/>
 <p>5) Correr el back o api en el puerto 3001 (http://localhost:3001):</p>
 <h6/>npm start</h6>
 <br/>
 <br/>
 <br/>
 <br/>
 <h4>SI DESPUES DE INSTALAR POSTGRES E IR A LA CONSOLA DE WINDOWS Y ESCRIBIR PSQL NOS TIRA UN ERROR, POSIBLEMENTE SEA PORQUE NO SE ENCUENTRA POSTGRES AGREGADO COMO VARIABLE DE ENTORNO. <a href="https://remot-technologies.com/como-anadir-postgresql-a-las-variables-de-entorno-de-windows-10/">¿Cómo agrego postgres como variable de entorno?<a/></h4>
 
 
 
