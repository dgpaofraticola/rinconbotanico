create procedure NOMBREPROCEDIMIENTO()
begin
CREATE OR REPLACE VIEW PlantasConFoto AS SELECT plantas.idPlantas, PlantasNombre, idCategoria, CategoriaDescripcion, imagenes.ImagenesLinkFoto FROM plantas INNER JOIN imagenes WHERE imagenes.`idPlantas`=plantas.`idPlantas`;
SELECT * FROM PlantasConFoto;
CREATE OR REPLACE VIEW DataFull AS SELECT PlantasConFoto.idPlantas, PlantasNombre, idCategoria, CategoriaDescripcion, ImagenesLinkFoto, dataplantas.Ubicacion, dataplantas.Sustrato, dataplantas.Riego, dataplantas.Floracion, dataplantas.Tamano, dataplantas.Observaciones FROM PlantasConFoto INNER JOIN dataplantas WHERE `dataplantas`.`idPlantas`=`PlantasConFoto`.`idPlantas`;
SELECT * FROM DataFull;
EXPORT DataFull AS './DataFull:Json'
end