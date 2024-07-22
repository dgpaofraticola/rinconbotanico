CREATE PROCEDURE `PlantasDataFull` ()
BEGIN
CREATE OR REPLACE VIEW PlantasConFoto AS SELECT plantas.idPlantas, PlantasNombre, idCategoria, CategoriaDescripcion, imagenes.ImagenesLinkFoto FROM RinconBotanico.plantas INNER JOIN RinconBotanico.imagenes WHERE imagenes.idPlantas=plantas.idPlantas;
SELECT * FROM PlantasConFoto;
CREATE OR REPLACE VIEW DataFull AS SELECT PlantasConFoto.idPlantas, PlantasNombre, idCategoria, CategoriaDescripcion, ImagenesLinkFoto, dataplantas.Ubicacion, dataplantas.Sustrato, dataplantas.Riego, dataplantas.Floracion, dataplantas.Tamano, dataplantas.Observaciones FROM RinconBotanico.PlantasConFoto INNER JOIN dataplantas WHERE `dataplantas`.`idPlantas`=`PlantasConFoto`.`idPlantas`;
SELECT * FROM DataFull;

END