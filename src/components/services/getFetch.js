import remera from '../assets/img/remera.png';
import polera from '../assets/img/poleraConFrunce.png';
import remeraConFrunce from '../assets/img/remeraConFrunce.png';
import sweaterYPantalon from '../assets/img/sweaterYPantaloNBengalina.png';

const productos = [
    {id: 1,
    price: 300,
    name:'Remera',
    category:"remera",
    photo: remera,
    stock: 10
    
},
{id: 2,
    price: 500,
    name:'Polera',
    category:"polera",
    photo: polera,
    stock: 10
},
{id: 3,
    price: 500,
    name:'Remera con Frunce',
    category:"remeraConFrunce",
    photo: remeraConFrunce,
    stock: 10

},
{id: 4,
    price: 500,
    name:'Sweater | Pantalon Bengalina',
    category:"swaterYPantalon",
    photo: sweaterYPantalon,
    stock: 10
}]







export const getFetch = new Promise((resolve)=> {
    setTimeout(() => {
        resolve(productos)
    }, 2000);
})