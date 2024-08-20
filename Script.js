const campus = [
    {
        "grupo": "t1",
        "campers": [
            {
                "id": 1,
                "fecha": "2024-08-15",
                "usuario": "1",
                "contrasena": "luisC",
                "nombre": "Luis",
                "apellido": "Caicedo",
                "direccion": "Calle 6 # 55C-42",
                "acudiente": "Pedro Caicedo",
                "numero_celular": 3243293371,
                "numero_fijo": "6015689286",
                "estado": "Inscrito",
                "riesgo": "Bajo",
                "grupo": "t1",
                "actividad1": "desarrollo del proyecto Python"
            }
        ]
    }
]
console.log(campus)

console.log("-------Menú-------")
console.log("1. Campers")
console.log("2. Trainers")
console.log("3. Coordinador")
console.log("4. Salir del programa")
opc=prompt("Selecciona una de las opciones de nuestro menú: ");
if (opc==1){
    console.log("-------Menú Campers--------")
    console.log("1. Revisar mi información")
    console.log("2. Salir del programa")
    x=prompt("Elige una opción: ")
    if (x==1){
        console.log("-----------------")
        console.log("ID:",["id"])
    }
    if (x==2){
        console.log("Muchas gracias por utilizar nuestro programa. Vuelve pronto! :D")
    }
}
else if (opc==2){
    console.log("-------Menú Trainers-------")
    console.log("1. Estado de los campers")
    console.log("2. Ruta de los trainers")
    console.log("3. Reportes")
    console.log("4. Salir del programa")
    o=prompt("Elige una de las opciones: ")
    if (o==1){
        console.log("Estos son los grupos de los campers")
        console.log("1. Grupo t1")
        console.log("2. Grupo t2")
        console.log("3. Grupo t3")
        grupito=prompt("Elige uno de los grupos para ver su estado: ")
        if (grupito==1){
            console.log("Este es el estado de los campers del grupo t1:");
            if (campus["grupo"]=="t1"["campers"]){
                console.log["id"]["fecha"]["usuario"]
            }
        }
    }
}
else if (opc==3){
    console.log("--------Menú Coordinador--------")
    console.log("1. Registrar campers")
    console.log("2. Actualizar datos nuevos del camper")
    console.log("3. Reporte de campers inscritos")
    console.log("4. Reporte de campers aprobados")
    console.log("5. Estado de los campers")
    console.log("6. Ver campers con bajo rendimiento")
    console.log("7. Agregar rutas de entrenamiento")
    console.log("8. Asignar campers a la ruta de entrenamiento")
    p=prompt("Elige una de las opciones: ")
    if (p==2){
        idCamper=prompt("Ingrese el id del camper al que le desea actualizar datos: ")
        for (campus in miInfo[0]["campers"]){
            if (campus ["id"]==idCamper){
                camperEncontrado=campus
                break
            }
        }
        if (camperEncontrado){
            console.log("1. ID")
            console.log("2. Fecha")
            console.log("3. Usuario")
            console.log("4. Contraseña")
            console.log("5. Nombre")
            console.log("6. Apellido")
            console.log("7. Dirección")
            console.log("8. Acudiente")
            console.log(" Número de celular")
            console.log("Número fijo")
            console.log("Estado")
            console.log("Riesgo")
            console.log("Grupo")
            c=prompt("Ingrese la opción que desea actualizar: ")
            if (c==1){
                nuevoId=prompt("Ingrese el nueo id del camper: ")
                nuevaF=prompt("Ingrese el nuevo usuario del c")
            }
        }
    }
}