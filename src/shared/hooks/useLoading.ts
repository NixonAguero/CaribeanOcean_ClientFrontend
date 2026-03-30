import { useState } from 'react';

//explicacion de que hace el codigo
/*
    Este codigo es un hook personalizado de react que se encarga de manejar el estado de carga de una aplicacion.
    La funcion withLoading es una funcion que envuelve cualquier funcion asincrona y se encarga de prender el loading antes de ejecutar la funcion y apagarlo despues de ejecutar la funcion.
*/

export const useLoading = (initialState: boolean = false) => {
  const [isLoading, setIsLoading] = useState(initialState);
  // Esta "envoltura magica" agarra cualquier función tuya, prende el loading, ejecuta tu funcion, y lo apaga
  const withLoading = async <T,>(asyncFunction: () => Promise<T>): Promise<T> => {
    setIsLoading(true);
    try {
      return await asyncFunction();
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, withLoading, setIsLoading };
};

// <T,> es una convencion de typescript para indicar que es un tipo generico
// la , en <T,> es para indicar que es un tipo generico, y que React no lo confunda con una etiqueta html

//porque hacer  
/*
withLoading(() => fakeApiCall()) en vez de 
withLoading(fakeApiCall())

porque si se llama directamente a la funcion se ejecuta de imediato, es decir no da tiempo al estado de loading de funcionar
() => fakeApiCall() esto es pasarle la funcion directamente, entonces el hook la ejecuta cuando debe

*/