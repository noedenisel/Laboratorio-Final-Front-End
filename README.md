# Laboratorio JS
Laboratorio, Módulo 2 - FrontEnd- Curso Samsung desarrolladoras / BeJob 2021 </br>

Actividad final </br>
Se quiere mejorar una actividad realizada con anterioridad, introduciendo una mayor funcionalidad y unas mejoras visuales en la misma. Así, se quiere realizar la siguiente página web:

Por un lado, se quiere introducir información relativa a la persona, como son su nombre (con una longitud máxima de 30 caracteres), apellidos (con una longitud máxima de 60 caracteres), dirección (con una longitud de 60), código postal (validado mediante Javascript, ver apéndice 1) y la localidad.

Por otro lado, se quiere recoger información sobre el tipo de contrato que se quiere realizar, pudiéndose elegir una de tres opciones: nueva contratación (que aparecerá marcada por defecto), portabilidad y cambio de contrato. Además, habrá dos desplegables donde se podrá elegir la compañía actual que se tiene (Movistar, Orange, Vodafone, Yoigo y No Tengo Ninguna Compañía), y a la que se quiere portar (Movistar, Orange, Vodafone y Yoigo).

En otro bloque se quiere recoger la información sobre los datos bancarios asociados a la contratación, a saber: País (aparece marcado ES y no puede ser modificado por el usuario), Control de IBAN (dos dígitos numéricos), Entidad (cuatro dígitos numéricos), Sucursal (cuatro dígitos numéricos), DC (dos dígitos numéricos) y Cuenta (diez dígitos numéricos).

Por último, se dispone la posibilidad de recoger datos estadísticos. Así, se van a obtener información sobre cómo se conoció la compañía (con cuatro opciones, mediante checkboxes), y una valoración sobre la compañía, que se implementará con un elemento que permite seleccionar un rango entre 1 y 4. Además, se recogerá la información sobre la fecha en la que se realiza la petición (por defecto está fijada a 01/01/2019).

Aparte de un botón para poder enviar el formulario, y otro para poder resetear los valores, la página web dispondrá de otros tres botones, que realizarán unas funciones determinadas:

El botón “Mostrar Valoración” indicará en pantalla el valor que el usuario ha seleccionado en el elemento rango.


El botón “Mostrar Cuenta” indicará en pantalla la cuenta bancaria introducida por el usuario.


El botón “Mostrar Día Semana” indicará qué día de la semana (Lunes a Domingo) corresponde la fecha introducida.


El código postal
Hasta este punto, todo el proceso se puede hacer mediante HTML y CSS. Para evaluar vuestros conocimientos en Javascript, el campo "código postal" deberá tener validación mediante dicho lenguaje.

A continuación, se especifican los requisitos que el programa debe cumplir para la evaluación del código postal

El sistema de código postal español está formado por una serie de códigos cuya finalidad es la de mejorar el funcionamiento del servicio postal. Los códigos postales fueron intro- ducidos en España en 1981, coincidiendo con la puesta en marcha de los procesos de auto- matización de clasificación de la correspondencia.

En la actualidad en España hay 11 752 códigos postales.

Los códigos postales españoles constan de cinco cifras, de las que las dos primeras hacen referencia a cada provincia, seguidas de las ciudades de Ceuta y Melilla.

Que se pide
El campo código postal ha de ser capaz de validar los códigos postales de las provincias españolas, para realizar la comprobación la herramienta deberá leer los dos primeros números del código postal introducido.

La herramienta deberá:

Verificar que el código postal se corresponde con la provincia adecuada, una vez que se validen los datos introducidos.
Implementar un sistema de alertas que advierta mediante un mensaje que se han introducido datos erróneos (por ejemplo; el nombre erróneo que no corresponde a ninguna provincia, números en lugar de letras o si el campo está vacío) y que solicite que se vuelvan a insertar los datos.
Indicar con un mensaje en pantalla (no con una alerta) el resultado de la búsqueda.
El mensaje será de color rojo en el caso de que la validación sea errónea y de color verde cuando sea correcta.
Validar que en el campo "código postal" realmente se han introducido cinco números, que no hay letras y que no está vacío.
Nota
Los nombres de provincias deben ir sin tildes y sin eñes para evitar problemas con la validación. Aunque se utilice la codificación UTF-8 (que incluye tildes y eñes) es posible que a la hora de validar estos caracteres se encuentren con fallos inesperados dependiendo del IDE utilizado

