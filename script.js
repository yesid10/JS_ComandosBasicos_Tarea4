/*Un estacionamiento requiere determinar el cobro que debe aplicar a las personas que lo utilizan. 
Considere que el cobro es con base en las horas que lo disponen y que las fracciones de hora se toman
 como completas. Realizar el algoritmo que permita determinar el cobro.*/

 let horas,cobro;
 const valor_hora= 4500;

 alert (`Cobro de estacionamiento
 El valor que tiene una hora es de 4500
 Indique las horas que su vehiculo estuvo en el estacionamiento.`)
 horas = Number.parseInt(prompt("Horas de estadia (Horas Completas): "));
 cobro = valor_hora*horas;
 alert(`El valor a pagar es de ${cobro}`);


