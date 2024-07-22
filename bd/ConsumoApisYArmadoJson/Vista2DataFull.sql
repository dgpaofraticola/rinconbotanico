CREATE OR REPLACE VIEW DataFull AS SELECT PlantasConFoto.idPlantas, PlantasNombre, idCategoria, CategoriaDescripcion, ImagenesLinkFoto, dataplantas.Ubicacion, dataplantas.Sustrato, dataplantas.Riego, dataplantas.Floracion, dataplantas.Tamano, dataplantas.Observaciones FROM PlantasConFoto INNER JOIN dataplantas WHERE `dataplantas`.`idPlantas`=`PlantasConFoto`.`idPlantas`;
SELECT * FROM DataFull;