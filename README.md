# Entrega-1.2-Patrons-de-disseny



## Patron observer

El patron observer se utiliza para notificar cambios de estado algun objeto, este patron parte  de un sujeto que notifica y un observador o muchos que recibe  esas notificaciones en cualquier cambio de estado.

Se utiliza para que el observador este comprobando continuamente si ha cambiado o no el estado y asi evitar bucles.

Funcionamiento:

El sujeto que es el que notifica tiene 3 metodos:

- Subscribe: aqui los observadores se suscriben
- Unubscribe : los obserbadores  cancelas la suscripcion
- Notify: proceso interno cuando detecta que han habido cambios.

En el otro bando, el observador tiene el metodo update.

En resumen, cuando el estado de un Sujeto cambia, hace una llamada a notify. Ese metodo recorre una lista  con todos los Observadores que estan Subscribe y a cada uno llama  a sus metodos update, todo esto lo hace el sujeto

Ejemplo:

```sh
class Sujeto {
    constructor(){
        this.orbservadores = [];
    }
    subscribe(observador){
      this.orbservadores.push(observador);
    }
    unsubscribe(observador){
      this.orbservadores = this.orbservadores.filter(item => item !== observador);
    }
    notify(event){
      this.orbservadores.forEach(observador => observador.update(event));
    }
}

```


## para ejecutar la prueva de concepto y ver el resultado del patron observer  usar este comando:

### ts-node news-observer.ts
