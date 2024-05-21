import { useState } from 'react';

export const Promesas = () => {

    const [valores, setValores] = useState([]);

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const promiseObj = new Promise((resolve, reject) => {
        const valor = randomIntFromInterval(0, 99);
        if (valor % 2 === 0)
            resolve(valor);
        else
            reject(valor);
    });

    promiseObj.then(valor => {
        setValores([...valores, {
            valor: valor,
            paridad: 'es par',
            style: { color: "green" }
        }]);

    }).catch(valor => {
        setValores([...valores, {
            valor: valor,
            paridad: 'no es par',
            style: { color: "red" }
        }]);
    });

    return <>
        {valores.length > 0 ? valores.map((x, index) => <p key={index} style={x.style}>{x.valor} es {x.paridad}</p>) : ""}
    </>
}