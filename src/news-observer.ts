interface Observable {
    attach(o:Observer):any;
    attach(o:Observer):any;
    notify():any;//cada vez que haya una nueva noticia
}

//suscriptor
interface Observer{
    update():any;
}

class Newsletter implements Observable {
    private subscribersNewsletters: Observer[] = [] ;
    private lastNewsPosted :string = '';
    attach(o: Observer){//subscribe
        this.subscribersNewsletters.push(o);
    }

    detach(o: Observer){//unsusbcribe
        //eliminar el suscriptor  con filter
        this.subscribersNewsletters = this.subscribersNewsletters.filter((item: any) => item !== o);
    }
    
    // este metodo notificaria los cambios a los suscriptores
    addNewNoticia(title: string){
        this.lastNewsPosted = title;
        this.notify();
        console.log("nueva noticia añadida a newsletter")
    }

    lastNewTitle (){
        return this.lastNewsPosted;
    }

    notify()  {// notificara a cada suscriptor de una noticia nueva   llamando  a la funcion update para cada uno
        for( let suscriptor of this.subscribersNewsletters){
            suscriptor.update();
        }
    }
}

class Subscriber implements Observer{
    private observable : any;
    constructor(observable : Newsletter){
        this.observable = observable;
    }

    update(){
        console.log('nueva noticia publicada')
        console.log(this.observable.lastNewTitle())
    }
}

let news = new Newsletter();

let subs1 =  new Subscriber(news);
let subs2 =  new Subscriber(news);

news.attach(subs1);
news.attach(subs2);

news.addNewNoticia('Noticia patron observer');