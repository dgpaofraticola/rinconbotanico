//Execute Vista1PlantasConFoto.sql
CREATE OR REPLACE VIEW PlantasConFoto AS SELECT plantas.idPlantas, PlantasNombre, idCategoria, CategoriaDescripcion, imagenes.ImagenesLinkFoto FROM plantas INNER JOIN imagenes WHERE imagenes.idPlantas=plantas.idPlantas;
SELECT * FROM PlantasConFoto;
//Execute Vista2DataFull.sql
CREATE OR REPLACE VIEW DataFull AS SELECT PlantasConFoto.idPlantas, PlantasNombre, idCategoria, CategoriaDescripcion, ImagenesLinkFoto, dataplantas.Ubicacion, dataplantas.Sustrato, dataplantas.Riego, dataplantas.Floracion, dataplantas.Tamano, dataplantas.Observaciones FROM PlantasConFoto INNER JOIN dataplantas WHERE `dataplantas`.`idPlantas`=`PlantasConFoto`.`idPlantas`;
SELECT * FROM DataFull;
//Exportar vista DataFull EXPORT DATA
//Transformar a Formato JSON
//JSON_OBJECT([key, val[, key, val] ...])
//Evaluates a (possibly empty) list of key-value pairs and returns a JSON object containing those pairs. An
//error occurs if any key name is NULL or the number of arguments is odd.
//mysql> SELECT JSON_OBJECT('id', 87, 'name', 'carrot');
//+-----------------------------------------+
//| JSON_OBJECT('id', 87, 'name', 'carrot') |
//+-----------------------------------------+
//| {"id": 87, "name": "carrot"} |
//+-----------------------------------------+