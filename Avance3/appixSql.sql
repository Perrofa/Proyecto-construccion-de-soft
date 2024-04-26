-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         11.3.2-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando datos para la tabla appix.proyecto: ~20 rows (aproximadamente)
INSERT INTO `proyecto` (`ProyectoID`, `NomProyecto`, `NumProyecto`, `NivelProyecto`, `DescProyecto`) VALUES
	(1, 'Luna Brillante', 1, 'bajo', 'la luna\r'),
	(2, 'EcoGuardianes', 1, 'bajo', 'la eco\r'),
	(3, 'Atlas Digital', 1, 'bajo', 'la atlas\r'),
	(4, 'Aurora Creativa', 1, 'bajo', 'la aurora\r'),
	(5, 'Soluciones Innovadoras', 1, 'bajo', 'las soluciones\r'),
	(6, 'Nexus Global', 3, 'bajo', '3'),
	(7, 'Nube de Ideas', 3, 'bajo', 'la nube\r'),
	(8, 'Renacimiento Verde', 3, 'bajo', 'el renacimiento\r'),
	(9, 'Horizonte Tecnológico', 3, 'bajo', 'el horizonte\r'),
	(10, 'Proyecto Armonía', 5, 'medio', 'el proyecto\r'),
	(11, 'Alquimia Digital', 5, 'medio', 'la alquimia\r'),
	(12, 'Infinito Conectado', 5, 'medio', 'el infinito\r'),
	(13, 'Onda Creativa', 5, 'medio', 'la onda\r'),
	(14, 'Mente Maestra', 5, 'medio', 'la mente\r'),
	(15, 'Innovación Sostenible', 7, 'medio', 'la innovacion\r'),
	(16, 'Proyecto Génesis', 7, 'medio', 'el proyecto\r'),
	(17, 'Ecosistema Digital', 9, 'alto', 'el ecosistema\r'),
	(18, 'Titanes del Futuro', 9, 'alto', 'los titanes\r'),
	(19, 'Evolución Digital', 9, 'alto', 'la evolucion\r'),
	(20, 'Alma Creativa', 9, 'alto', 'el alma');

-- Volcando datos para la tabla appix.riesgo: ~49 rows (aproximadamente)
INSERT INTO `riesgo` (`RiesgoID`, `NomRiesgo`, `PrioRiesgo`, `DescRiesgo`, `ProyectoID`) VALUES
	(1, 'Demoras en el sumini', 0, 'Posible retraso en el proyecto debido a problemas en la entrega de materiales', 1),
	(2, 'Conflictos de person', 0, 'Disputas entre miembros del equipo que pueden afectar la productividad', 2),
	(3, 'Fallo en el equipo c', 0, 'Un mal funcionamiento o fallo en equipos críticos podría retrasar el proyecto', 3),
	(4, 'Cambios en los requi', 0, 'Los cambios frecuentes en los requisitos del cliente pueden causar retrasos y aumentar los costos', 4),
	(5, 'Falta de financiamie', 0, 'La falta de fondos puede detener el progreso del proyecto', 5),
	(6, 'Cambios en la legisl', 0, 'Modificaciones en la legislación que podrían requerir ajustes en el proyecto', 6),
	(7, 'Problemas de comunic', 0, 'La mala comunicación entre los miembros del equipo puede llevar a malentendidos y errores', 7),
	(8, 'Riesgos tecnológicos', 0, 'Problemas con la tecnología utilizada que podrían afectar el desarrollo del proyecto', 8),
	(9, 'Inestabilidad políti', 0, 'Eventos políticos que podrían afectar la estabilidad del proyecto', 9),
	(10, 'Falta de recursos hu', 0, 'La escasez de personal cualificado puede ralentizar el progreso del proyecto', 10),
	(11, 'Cambios en el mercad', 0, 'Cambios en las condiciones del mercado que podrían afectar la viabilidad del proyecto', 11),
	(12, 'Desviaciones del pre', 0, 'Gastar más de lo previsto puede afectar la rentabilidad del proyecto', 12),
	(13, 'Incumplimiento de pl', 0, 'No cumplir con los plazos establecidos puede retrasar la finalización del proyecto', 13),
	(14, 'Problemas de proveed', 0, 'Problemas con los proveedores que podrían afectar la cadena de suministro', 14),
	(15, 'Cambios en la direcc', 0, 'Cambios en la dirección del proyecto que podrían afectar la continuidad', 15),
	(16, 'Errores en la estima', 0, 'Errores en la estimación de costos que podrían afectar el presupuesto del proyecto', 16),
	(17, 'Fallas en la segurid', 0, 'Vulnerabilidades de seguridad que podrían comprometer la integridad de los datos del proyecto', 17),
	(18, 'Cambios en la compet', 0, 'La entrada de nuevos competidores que podrían afectar la estrategia del proyecto', 18),
	(19, 'Falta de capacitació', 0, 'La falta de capacitación adecuada puede afectar el desempeño del equipo', 19),
	(20, 'Cambios en las condi', 0, 'Condiciones climáticas adversas que podrían afectar la ejecución del proyecto', 20),
	(21, 'Problemas de calidad', 0, 'Problemas de calidad en los productos o servicios entregados', 1),
	(22, 'Riesgos ambientales', 0, 'Riesgos ambientales que podrían afectar el desarrollo del proyecto', 2),
	(23, 'Falta de experiencia', 0, 'Falta de experiencia en la ejecución de proyectos similares', 3),
	(24, 'Cambios en la direcc', 0, 'Cambios en la dirección estratégica de la organización', 4),
	(25, 'Problemas de salud y', 0, 'Problemas de salud y seguridad que podrían afectar el bienestar del equipo', 5),
	(26, 'Riesgos legales', 0, 'Riesgos legales que podrían resultar en litigios o sanciones', 6),
	(27, 'Cambios en las tecno', 0, 'Cambios rápidos en las tecnologías utilizadas en el proyecto', 7),
	(28, 'Problemas de gestión', 0, 'Ineficacia en la identificación y gestión de riesgos', 8),
	(29, 'Fallas en la infraes', 0, 'Fallas en la infraestructura necesaria para el proyecto', 9),
	(30, 'Cambios en las norma', 0, 'Cambios en las normativas que podrían afectar el desarrollo del proyecto', 10),
	(31, 'Pérdida de personal ', 0, 'Pérdida de personal clave que podría afectar la ejecución del proyecto', 11),
	(32, 'Problemas de integra', 0, 'Dificultades en la integración de diferentes componentes del proyecto', 12),
	(33, 'Cambios en las polít', 0, 'Cambios en las políticas internas que podrían afectar el proyecto', 13),
	(34, 'Robo de propiedad in', 0, 'Riesgo de robo o violación de la propiedad intelectual del proyecto', 14),
	(35, 'Problemas de capacid', 0, 'Falta de capacidad para cumplir con los requisitos del proyecto', 15),
	(36, 'Cambios en la cultur', 0, 'Cambios en la cultura organizacional que podrían afectar la colaboración', 10),
	(37, 'Fallas en el suminis', 0, 'Fallas en el suministro de energía que podrían afectar la continuidad del proyecto', 11),
	(38, 'Riesgos financieros', 0, 'Riesgos financieros que podrían afectar la viabilidad del proyecto', 12),
	(39, 'Problemas de coordin', 0, 'Dificultades en la coordinación entre diferentes equipos o departamentos', 13),
	(40, 'Cambios en las tende', 0, 'Cambios en las tendencias del mercado que podrían afectar la demanda del proyecto', 14),
	(41, 'Daños por desastres ', 0, 'Daños causados por desastres naturales que podrían afectar el proyecto', 15),
	(42, 'Problemas de diseño', 0, 'Errores o deficiencias en el diseño del proyecto', 1),
	(43, 'Cambios en las expec', 0, 'Cambios en las expectativas del cliente que podrían afectar el alcance del proyecto', 2),
	(44, 'Falla en los equipos', 0, 'Falla en los equipos de respaldo que podrían afectar la continuidad del proyecto', 3),
	(45, 'Problemas de ética', 0, 'Problemas éticos que podrían afectar la reputación del proyecto', 4),
	(46, 'Incumplimiento contr', 0, 'Incumplimiento de contratos que podrían resultar en litigios', 5),
	(47, 'Riesgos geopolíticos', 0, 'Riesgos asociados con la geopolítica que podrían afectar el proyecto', 6),
	(48, 'Cambios en la infrae', 0, 'Cambios en la infraestructura pública que podrían afectar la ejecución del proyecto', 7),
	(49, 'Fallas en la gestión', 0, 'Fallas en la gestión del alcance que podrían resultar en la entrega de productos o servicios no dese', 8);

-- Volcando datos para la tabla appix.usuario: ~20 rows (aproximadamente)
INSERT INTO `usuario` (`UserID`, `NomUsuario`, `ContraUsuario`, `MailUsuario`, `PrivUsuario`) VALUES
	(39, 'Juan Eduardo Rosas Ceron', 'Rf#9Lm$7p@', 'juan.lopez@example.com', 1),
	(40, 'Ramiro Flores Villarreal', '5Dq!sB#2rP', 'maria.garcia123@example.com', 1),
	(41, 'SantiagoYael Nieto Castillo', '@6hMvY!9Gw', 'carlos.martinez@emailprovider.com', 1),
	(42, 'Alan Herrera Martinez', 'P@3jLr#8Nt', 'ana.flores84@example.com', 1),
	(43, 'Guillermo del Toro Gómez', '2Qb$9Xf!7W', 'alejandro.perez@emailservice.com', 1),
	(44, 'Maria Fernanda Juarez Lopez', '*7tF#3cVp@', 'laura.gonzalez@example.com', 1),
	(45, 'Javier García Martínez', '$8sD!2bHmR', 'david.rodriguez@emailprovider.com', 1),
	(46, 'Ana Karen Rodríguez Pérez', '4Zm@6Gv!1J', 'andrea.hernandez@emailservice.com', 1),
	(47, 'Carlos Alberto Hernández Sánchez', '!9Kp#5Bw$3R', 'roberto.diaz@example.com', 1),
	(48, 'Adriana Flores Gutiérrez', '3Lx$7Qm@2N', 'diana.sanchez@emailprovider.com', 1),
	(49, 'Miguel Ángel Torres Díaz', '@5Fp#8Cv!4B', 'pedro.fernandez@example.com', 2),
	(50, 'Daniela Martínez Rodríguez', 'Y9j@#4sQp5', 'sofia.lopez@emailservice.com', 1),
	(51, 'Jorge Luis Pérez Ramírez', '6Rf#2Dp@7T', 'jorge.ramirez@example.com', 3),
	(52, 'Laura Elena Gómez Vázquez', '8Sb!#3mGv9', 'monica.martinez@emailprovider.com', 2),
	(53, 'Alejandro Torres Ruiz', '1Xq@7Jr#5K', 'francisco.gomez@emailservice.com', 2),
	(54, 'Diana Patricia López Hernández', '!4Gv#9Rm$6T', 'patricia.rodriguez@example.com', 2),
	(55, 'Juan Carlos Martínez González', 'H5v@#2Jp!8', 'ricardo.hernandez@emailprovider.com', 2),
	(56, 'Paola Andrea Rodríguez Jiménez', '7Wb!#4Mq@9', 'gabriela.lopez@emailservice.com', 2),
	(57, 'Ricardo López García', '2Np@#6Rf!3', 'sergio.garcia@example.com', 1),
	(58, 'Brenda Guadalupe Sánchez Martínez', '!8Hm$4Vp#7', 'lucia.martinez@emailprovider.com', 2);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
