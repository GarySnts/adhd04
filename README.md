- Fecha : 08/05/2024
- Carrera: Desarrollador FullStack
- Modulo 2 - ADHD 04

    

|Carnet|Nombre|
|------|------|
|2024-007441|Gary Santos|

## TypeScript definiciones.


- ¿Qué es TypeScript?
> TypeScript es un lenguaje de programación desarrollado por Microsoft que agrega tipos estáticos opcionales a JavaScript. Esto significa que puedes escribir código JavaScript y agregar tipos para ayudar a detectar errores en tiempo de compilación.
>
- ¿Qué ventajas ofrece TypeScript frente a JavaScript puro?
> Tipado estático opcional para detectar errores en tiempo de compilación, soporte para características de ECMAScript más recientes, capacidades de orientación a objetos más sólidas y mejora la herramienta de autocompletado y proporciona un mejor soporte para el desarrollo en grandes proyectos.

- ¿Cómo se instala TypeScript en VSCode?
> TypeScript generalmente viene integrado en Visual Studio Code (VSCode). No es necesario instalarlo por separado.
>
- ¿Cómo se compila un archivo TypeScript para convertirlo a JavaScript?
> UN archivo TypeScript se compila usando el comando tsc (TypeScript Compiler) seguido del nombre del archivo. Por ejemplo: tsc archivo.ts.
>
- ¿Qué extensión de archivo se utiliza para los archivos TypeScript?
> Los archivos TypeScript utilizan la extensión .ts.
>
- ¿Cómo se define un tipo de dato en TypeScript?
> En TypeScript, se define un tipo de dato usando la palabra clave let, const, o var, seguido por dos puntos y el tipo de dato. Por ejemplo: let miVariable: number = 5;.
>
- ¿Qué son los tipos de unión y cómo se declaran?
> Los tipos de unión permiten declarar que una variable puede tener más de un tipo. Se declaran usando el operador |. Por ejemplo: let miVariable: number | string = 5;.
>
- ¿Qué es un tipo literal en TypeScript y para qué se utiliza?
> Un tipo literal permite especificar un valor concreto que una variable puede contener. Se utiliza para restringir los posibles valores de una variable. Por ejemplo: let status: 'activo' | 'inactivo';.
>
- ¿Qué son los tipos enumerados (Enums) y cómo se crean?
> Los tipos enumerados (Enums) son un conjunto de nombres simbólicos asociados con valores numéricos. Se crean usando la palabra clave enum. Por ejemplo:
``` typescript
enum DiaSemana {
    Lunes,
    Martes,
    // Otros días...
}
``` 

- ¿Cómo se define un tipo alias y cuándo es útil?
> Un tipo alias se define usando la palabra clave type y se utiliza para dar un nombre a un tipo. Es útil para hacer el código más legible y mantenible. Por ejemplo: type MiString = string;.
>
- ¿Cómo se definen las funciones con tipos en TypeScript?
> Las funciones con tipos en TypeScript se definen especificando los tipos de los parámetros y el tipo de retorno después de los parámetros. Por ejemplo:
``` typescript
function suma(a: number, b: number): number {
    return a + b;
}
```
- ¿Qué son los parámetros opcionales y los parámetros predeterminados en funciones?
> Los parámetros opcionales son parámetros que pueden ser omitidos al llamar a una función y se definen añadiendo un signo de interrogación ? al final del nombre del parámetro. Los parámetros predeterminados son parámetros que tienen un valor predeterminado en caso de que no se les pase ningún valor al llamar a la función.
>
- ¿Cuáles son algunas mejores prácticas para escribir código limpio y mantenible en TypeScript?
>  Usar nombres descriptivos para variables, funciones y tipos.
Mantener funciones cortas y enfocadas en una tarea específica.
Utilizar el tipado para evitar errores.
Documentar tu código utilizando comentarios claros.
Seguir convenciones de estilo de código consistentes.


## Da solución a los siguientes problemas:
- Calcular el promedio de tres números ingresados.
- Calcular el área de un triángulo, el usuario debe ingresar el valor para la base y altura.
- Determinar si un número es par o impar.
- Encontrar el mayor y menor de tres números ingresados.
- Elevar un número a una potencia, los valores deben ser ingresados por el usuario.
- Mostrar de forma inversa un texto ingresado por el usuario.
- Calcular el factorial de un número ingresado.
- Indicar si un valor ingresado es un número perfecto.
- Verificar si un valor ingresado es un número primo.
- Contar las vocales existentes en un texto ingresado.



