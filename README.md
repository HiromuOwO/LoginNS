# Login con validacion usando APIs de terceros

El login solicitara al usuario ingresar un correo electronico y contraseña, estos datos seran validados usando una API de terceros. 
Si los datos coinciden se ingresara a la ventana de inicio de lo contrario se arrojara una alerta que indicara que las credenciales no coinciden

## 1. Creacion del proyecyo

• ng new LoginNS --no-standalone

• aceptar las opciones predeterminadas cuando se solicite.

• cd LoginNS


![image](https://github.com/user-attachments/assets/3fa30cab-107e-4aea-bc52-75ce71ed83ad)

![image](https://github.com/user-attachments/assets/16f21e9a-858a-4bee-a88e-e64fd9344ad1)


## 2. Crear los componentes 
--Componente Login
`ng generate component login`
Para la vista se modificara el HTML y el CSS 
![image](https://github.com/user-attachments/assets/c355cc80-5bd8-474e-a294-0678701feb54)


--Componente inicio
Sera solamenta la pagina a la que se redireccionara cuando el usuario sea correcto

## Creacion del servicio 


  ![image](https://github.com/user-attachments/assets/0ba81463-0011-44cc-9b5f-a4a8e70fbccd)



## Modificarl el .ts de nuestro componente Login
![image](https://github.com/user-attachments/assets/97688baf-f4e2-4f98-b853-327c9ebd2200)




## Ingresoar
--Al ingresar datos incorrectos

![image](https://github.com/user-attachments/assets/9469bdaa-c8bf-4f7c-8a5a-8e2b2bc166fa)

-- Al ingresar datos correctos 
![image](https://github.com/user-attachments/assets/9974c83c-18df-4421-b198-ba509947946f)



