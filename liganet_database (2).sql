-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 31-05-2024 a las 04:30:12
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `liganet_database`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

DROP TABLE IF EXISTS `administrador`;
CREATE TABLE IF NOT EXISTS `administrador` (
  `id_administrador` int NOT NULL AUTO_INCREMENT,
  `id_persona` int DEFAULT NULL,
  `id_equipo` int DEFAULT NULL,
  PRIMARY KEY (`id_administrador`),
  KEY `fk_administrador_persona` (`id_persona`),
  KEY `fk_administrador_equipo` (`id_equipo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cancha`
--

DROP TABLE IF EXISTS `cancha`;
CREATE TABLE IF NOT EXISTS `cancha` (
  `id_cancha` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `precio_hora` float DEFAULT NULL,
  `cantidad_jugadores` int DEFAULT NULL,
  `habilitada` tinyint(1) DEFAULT NULL,
  `id_empresa` int DEFAULT NULL,
  `foto_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_cancha`),
  KEY `fk_empresa_cancha` (`id_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `cancha`
--

INSERT INTO `cancha` (`id_cancha`, `nombre`, `precio_hora`, `cantidad_jugadores`, `habilitada`, `id_empresa`, `foto_url`) VALUES
(3, 'Allianz Arena', 48000, 14, 1, 1, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717124237/ylnf88yg4a0rhxc3pgje.jpg'),
(4, 'Atanasio Girardot', 36000, 22, 1, 1, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717124285/qaapqepeyfxtwl2qol3y.jpg'),
(5, 'Olimpiastadion Berlin', 57000, 10, 1, 1, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717124316/xty7cljzqrcuyrrohmlf.jpg'),
(6, 'Santiago Bernabeu', 69000, 14, 1, 1, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717124351/amxcztnbxr94ebbkvc38.jpg'),
(7, 'El Campín', 35000, 22, 1, 1, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717124378/pa1i8cshwvb8vk8klrvs.jpg'),
(8, 'Ettihad Stadium', 44000, 10, 1, 1, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717124410/dhmaxdlknsga5qqlgavh.jpg'),
(9, 'Guiseppe Meazza', 63000, 14, 1, 1, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717124440/ynvcknasjlmnfjmluklb.jpg'),
(10, 'Hernán Ramirez', 54000, 22, 1, 1, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717124489/weycnqy3uultbqjru6ix.jpg'),
(11, 'Old Trafford', 61000, 10, 1, 1, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717124513/reibtwjhdscl2qvyfplv.jpg'),
(12, 'Wanda Metropolitano', 37000, 14, 1, 1, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717124537/kupbfawk8weirt2xdoj5.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto_emergencia`
--

DROP TABLE IF EXISTS `contacto_emergencia`;
CREATE TABLE IF NOT EXISTS `contacto_emergencia` (
  `id_contacto` int NOT NULL AUTO_INCREMENT,
  `celular` varchar(15) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_contacto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direccion`
--

DROP TABLE IF EXISTS `direccion`;
CREATE TABLE IF NOT EXISTS `direccion` (
  `id_direccion` int NOT NULL AUTO_INCREMENT,
  `direccion` varchar(255) DEFAULT NULL,
  `ciudad` varchar(100) DEFAULT NULL,
  `departamento` varchar(100) DEFAULT NULL,
  `pais` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_direccion`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `direccion`
--

INSERT INTO `direccion` (`id_direccion`, `direccion`, `ciudad`, `departamento`, `pais`) VALUES
(1, '123 Main St', 'Ciudad Ejemplo', 'Departamento Ejemplo', 'Pais Ejemplo'),
(2, 'Calle 123 #45-67', 'Barranquilla', 'Atlántico', 'Colombia'),
(3, NULL, NULL, NULL, NULL),
(4, 'Mz 2 Cs 23', 'Pereira', 'Risaralda', 'Colombia '),
(5, 'Calle 123 #45-67', 'Barranquilla', 'Atlántico', 'Colombia'),
(6, 'Carrera 89 #12-34', 'Santa Marta', 'Magdalena', 'Colombia'),
(7, 'Avenida Cristiano Ronaldo', 'Funchal', 'Madeira', 'Portugal'),
(8, 'Desconocida', 'Desconocida', 'Desconocido', 'Desconocido'),
(9, 'Calle 45 #67-89', 'Barrancas', 'La Guajira', 'Colombia'),
(10, 'Desconocida', 'Desconocida', 'Desconocido', 'Desconocido'),
(11, 'Carrera 100 #23-45', 'Barranquilla', 'Atlántico', 'Colombia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

DROP TABLE IF EXISTS `empresa`;
CREATE TABLE IF NOT EXISTS `empresa` (
  `id_empresa` int NOT NULL AUTO_INCREMENT,
  `nombre_empresa` varchar(100) DEFAULT NULL,
  `nit` varchar(20) DEFAULT NULL,
  `celular` varchar(15) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `id_direccion` int DEFAULT NULL,
  `horario` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_empresa`),
  KEY `fk_direccion_empresa` (`id_direccion`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`id_empresa`, `nombre_empresa`, `nit`, `celular`, `correo`, `id_direccion`, `horario`) VALUES
(1, 'Fútbol Global S.A.', '987654321', '555-1234', 'contacto@futbolglobal.com', 1, 'Lunes a Viernes, 9am - 6pm');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipo`
--

DROP TABLE IF EXISTS `equipo`;
CREATE TABLE IF NOT EXISTS `equipo` (
  `id_equipo` int NOT NULL AUTO_INCREMENT,
  `nombre_equipo` varchar(255) DEFAULT NULL,
  `descripcion` text,
  `ciudad` varchar(255) DEFAULT NULL,
  `cantidad_miembros` int DEFAULT NULL,
  `foto_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_equipo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `equipo`
--

INSERT INTO `equipo` (`id_equipo`, `nombre_equipo`, `descripcion`, `ciudad`, `cantidad_miembros`, `foto_url`) VALUES
(1, 'Argentina', 'Equipo fuerte', 'Buenos Aires', 28, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717125199/rl43pdiyud0zu7sbpxdg.jpg'),
(2, 'Barcelona FC', 'Tiki-taka', 'Barcelona', 25, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717125238/pbhdvlw1b5jjel8lyvba.jpg'),
(3, 'Bayern Munich', 'Ganadores', 'Munich', 32, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717125300/onnfqubvubvnl7dylzcm.jpg'),
(4, 'Manchester City', 'Dominantes', 'Manchester', 24, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717125342/f8ymg37wqm3hwomqg8k8.jpg'),
(5, 'Colombia', 'Talentosos', 'Barranquilla', 27, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717125379/iexoajgisuzsppk8ulbh.jpg'),
(6, 'Inter', 'Históricos', 'Milan', 22, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717125410/kfnrp97phbnlvryuvm4s.jpg'),
(7, 'Juventus', 'Líderes', 'Turín', 31, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717125452/wzididk0y11cqvxz4ta6.jpg'),
(8, 'Liverpool', 'Rojos', 'Liverpool', 29, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717125496/namfi6sm4sxedovmjs5f.jpg'),
(9, 'Milan SP', 'Rossoneri', 'Milan', 23, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717125565/no9jlmbcvasskzhqqkm0.png'),
(10, 'Real Madrid', 'Galácticos', 'Madrid', 30, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717125608/g7aibwsbdmww8s1cqksz.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `faltas`
--

DROP TABLE IF EXISTS `faltas`;
CREATE TABLE IF NOT EXISTS `faltas` (
  `id_falta` int NOT NULL AUTO_INCREMENT,
  `id_jugador` int DEFAULT NULL,
  `tipo_falta` varchar(255) DEFAULT NULL,
  `tarjeta` enum('Amarilla','Roja','Doble Amarilla') DEFAULT NULL,
  PRIMARY KEY (`id_falta`),
  KEY `fk_jugador_falta` (`id_jugador`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugador`
--

DROP TABLE IF EXISTS `jugador`;
CREATE TABLE IF NOT EXISTS `jugador` (
  `id_jugador` int NOT NULL AUTO_INCREMENT,
  `id_persona` int DEFAULT NULL,
  `id_equipo` int DEFAULT NULL,
  `id_contacto_emergencia` int DEFAULT NULL,
  `altura` double DEFAULT NULL,
  `años_experiencia` int DEFAULT NULL,
  `nivel_competencia` int DEFAULT NULL,
  `numero_equipacion` int DEFAULT NULL,
  `perfil_dominante` varchar(100) DEFAULT NULL,
  `peso` double DEFAULT NULL,
  `pierna_dominante` varchar(255) DEFAULT NULL,
  `posicion_principal` varchar(100) DEFAULT NULL,
  `posicion_secundaria` varchar(100) DEFAULT NULL,
  `foto_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_jugador`),
  KEY `fk_persona_jugador` (`id_persona`),
  KEY `fk_equipo_jugador` (`id_equipo`),
  KEY `fk_contacto_emergencia_jugador` (`id_contacto_emergencia`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `jugador`
--

INSERT INTO `jugador` (`id_jugador`, `id_persona`, `id_equipo`, `id_contacto_emergencia`, `altura`, `años_experiencia`, `nivel_competencia`, `numero_equipacion`, `perfil_dominante`, `peso`, `pierna_dominante`, `posicion_principal`, `posicion_secundaria`, `foto_url`) VALUES
(3, 11, NULL, NULL, 1.81, 10, 5, 9, 'Diestro', 75, 'Derecha', 'Delantero', 'Extremo', 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084552/qc5puy11krxwqe7opplt.png'),
(4, 12, NULL, NULL, 1.77, 20, 5, 10, 'Diestro', 70, 'Derecha', 'Centrocampista', 'Delantero', 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084618/a5o3i3wabhgeqaxzgdy4.png'),
(5, 13, NULL, NULL, 1.87, 18, 5, 7, 'Diestro', 83, 'Derecha', 'Delantero', 'Extremo', 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084644/dbez908gk88cwsmdenbi.png'),
(6, 14, NULL, NULL, 1.8, 5, 4, 11, 'Diestro', 70, 'Derecha', 'Centrocampista', 'Defensa', 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084670/uwfci8mwmwxubxwngisl.png'),
(7, 15, NULL, NULL, 1.8, 7, 4, 14, 'Diestro', 69, 'Derecha', 'Extremo', 'Delantero', 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084704/louq023a7rkhg5c3trpq.png'),
(8, 16, NULL, NULL, 1.65, 3, 3, 16, 'Zurdo', 55, 'Izquierda', 'Defensa', 'Centrocampista', 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084735/todmknjba9epcrtj3ajw.png'),
(9, 17, NULL, NULL, 1.8, 15, 5, 29, 'Diestro', 75, 'Derecha', 'Delantero', 'Extremo', 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084763/cujmmjvfjbnkg3bu2hqv.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `participacion`
--

DROP TABLE IF EXISTS `participacion`;
CREATE TABLE IF NOT EXISTS `participacion` (
  `id_participacion` int NOT NULL AUTO_INCREMENT,
  `id_equipo` int DEFAULT NULL,
  `id_torneo` int DEFAULT NULL,
  PRIMARY KEY (`id_participacion`),
  KEY `id_equipo` (`id_equipo`),
  KEY `id_torneo` (`id_torneo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

DROP TABLE IF EXISTS `persona`;
CREATE TABLE IF NOT EXISTS `persona` (
  `id_persona` int NOT NULL AUTO_INCREMENT,
  `fecha_nacimiento` varchar(255) DEFAULT NULL,
  `genero` varchar(255) DEFAULT NULL,
  `celular` varchar(15) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `id_direccion` int DEFAULT NULL,
  `contraseña` varchar(255) DEFAULT NULL,
  `nombre_completo` varchar(255) DEFAULT NULL,
  `nombre_usuario` varchar(255) DEFAULT NULL,
  `cedula` varchar(20) DEFAULT NULL,
  `lugar_expedicion` varchar(255) DEFAULT NULL,
  `nacionalidad` varchar(100) DEFAULT NULL,
  `foto_perfil` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_persona`),
  KEY `fk_direccion_persona` (`id_direccion`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id_persona`, `fecha_nacimiento`, `genero`, `celular`, `correo`, `id_direccion`, `contraseña`, `nombre_completo`, `nombre_usuario`, `cedula`, `lugar_expedicion`, `nacionalidad`, `foto_perfil`) VALUES
(11, '1986-09-08', 'Masculino', '+57 300 1234567', 'carlos.bacca@example.com', 5, 'password123', 'Carlos Bacca', 'carlosbacca', '123456789', 'Barranquilla', 'Colombiano', 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084552/qc5puy11krxwqe7opplt.png'),
(12, '1961-09-02', 'Masculino', '+57 300 7654321', 'carlos.valderrama@example.com', 6, 'password123', 'Carlos Valderrama', 'carlosvalderrama', '987654321', 'Santa Marta', 'Colombiano', 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084618/a5o3i3wabhgeqaxzgdy4.png'),
(13, '1985-02-05', 'Masculino', '+351 912 345678', 'cristiano.ronaldo@example.com', 7, 'password123', 'Cristiano Ronaldo', 'cristianoronaldo', '135792468', 'Madeira', 'Portugués', 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084644/dbez908gk88cwsmdenbi.png'),
(14, '1990-01-01', 'Masculino', '+57 300 9876543', 'isaac@example.com', 8, 'password123', 'Isaac', 'isaac', '246813579', 'Desconocido', 'Desconocida', 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084670/uwfci8mwmwxubxwngisl.png'),
(15, '1997-01-13', 'Masculino', '+57 310 1234567', 'luis.diaz@example.com', 9, 'password123', 'Luis Diaz', 'luisdiaz', '1029384756', 'Barrancas', 'Colombiano', 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084704/louq023a7rkhg5c3trpq.png'),
(16, '1995-07-15', 'Femenino', '+57 300 8765432', 'majo@example.com', 10, 'password123', 'Majo', 'majo', '9081726354', 'Desconocido', 'Desconocida', 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084735/todmknjba9epcrtj3ajw.png'),
(17, '1985-05-17', 'Masculino', '+57 320 1234567', 'teofilo.gutierrez@example.com', 11, 'password123', 'Teofilo Gutierrez', 'teofilogutierrez', '1239874560', 'Barranquilla', 'Colombiano', 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084763/cujmmjvfjbnkg3bu2hqv.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `propietario`
--

DROP TABLE IF EXISTS `propietario`;
CREATE TABLE IF NOT EXISTS `propietario` (
  `id_propietario` int NOT NULL AUTO_INCREMENT,
  `id_persona` int DEFAULT NULL,
  `id_empresa` int DEFAULT NULL,
  PRIMARY KEY (`id_propietario`),
  KEY `id_persona` (`id_persona`),
  KEY `id_empresa` (`id_empresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reglamento`
--

DROP TABLE IF EXISTS `reglamento`;
CREATE TABLE IF NOT EXISTS `reglamento` (
  `id_reglamento` int NOT NULL AUTO_INCREMENT,
  `nombre_archivo` varchar(255) DEFAULT NULL,
  `archivo_pdf` longblob,
  PRIMARY KEY (`id_reglamento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

DROP TABLE IF EXISTS `reserva`;
CREATE TABLE IF NOT EXISTS `reserva` (
  `id_reserva` int NOT NULL AUTO_INCREMENT,
  `id_persona` int DEFAULT NULL,
  `fecha` varchar(255) DEFAULT NULL,
  `hora` varchar(255) DEFAULT NULL,
  `cantidad_horas` int DEFAULT NULL,
  `precio_total` float DEFAULT NULL,
  `id_cancha` int DEFAULT NULL,
  PRIMARY KEY (`id_reserva`),
  KEY `fk_persona_reserva` (`id_persona`),
  KEY `fk_cancha_reserva` (`id_cancha`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio`
--

DROP TABLE IF EXISTS `servicio`;
CREATE TABLE IF NOT EXISTS `servicio` (
  `id_servicio` int NOT NULL AUTO_INCREMENT,
  `nombre_servicio` varchar(255) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `nombre_encargado` varchar(255) DEFAULT NULL,
  `celular_encargado` varchar(13) DEFAULT NULL,
  `id_reserva` int DEFAULT NULL,
  PRIMARY KEY (`id_servicio`),
  KEY `fk_reserva_servicio` (`id_reserva`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `torneo`
--

DROP TABLE IF EXISTS `torneo`;
CREATE TABLE IF NOT EXISTS `torneo` (
  `id_torneo` int NOT NULL AUTO_INCREMENT,
  `cantidad_equipos` bigint DEFAULT NULL,
  `cantidad_jugadores_equipo` bigint DEFAULT NULL,
  `categoria` varchar(255) DEFAULT NULL,
  `descripcion` text,
  `fecha_inicio` varchar(255) DEFAULT NULL,
  `formato` varchar(255) DEFAULT NULL,
  `horario` varchar(255) DEFAULT NULL,
  `nombre_torneo` varchar(255) DEFAULT NULL,
  `precio_inscripcion` float DEFAULT NULL,
  `precio_premiacion` float DEFAULT NULL,
  `reglamento` varchar(255) DEFAULT NULL,
  `id_empresa` int DEFAULT NULL,
  `id_reglamento` int DEFAULT NULL,
  `foto_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_torneo`),
  KEY `fk_empresa_torneo` (`id_empresa`),
  KEY `fk_reglamento_torneo` (`id_reglamento`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `torneo`
--

INSERT INTO `torneo` (`id_torneo`, `cantidad_equipos`, `cantidad_jugadores_equipo`, `categoria`, `descripcion`, `fecha_inicio`, `formato`, `horario`, `nombre_torneo`, `precio_inscripcion`, `precio_premiacion`, `reglamento`, `id_empresa`, `id_reglamento`, `foto_url`) VALUES
(1, 26, 30, 'Juvenil', 'Intenso', '2023-07-21', 'Público', '16:00', 'La Liga', 250000, 1000000, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717127215/rra5nd8qq29xqnca5btj.pdf', 1, NULL, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717127795/ffjuij6ixwtwhaji0uze.jpg'),
(2, 29, 28, 'Senior', 'Competitivo', '2023-09-15', 'Privado', '18:30', 'BetPlay', 450000, 1400000, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717127215/rra5nd8qq29xqnca5btj.pdf', 1, NULL, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717128668/dvlqcgqzzfqgah16vx63.png'),
(3, 24, 25, 'Infantil', 'Amistoso', '2023-06-10', 'Público', '14:00', 'Mundial', 350000, 800000, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717127215/rra5nd8qq29xqnca5btj.pdf', 1, NULL, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717128695/seufgt1cnoeopd2hssps.jpg'),
(4, 22, 27, 'Profesional', 'Élite', '2023-05-05', 'Privado', '20:00', 'Premier League', 500000, 1500000, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717127215/rra5nd8qq29xqnca5btj.pdf', 1, NULL, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717128746/qqgfwarzvptv2asi7hlc.png'),
(5, 27, 22, 'Sub-23', 'Rápido', '2023-11-01', 'Público', '15:30', 'Serie A', 400000, 1300000, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717127215/rra5nd8qq29xqnca5btj.pdf', 1, NULL, 'https://res.cloudinary.com/dmmnud7ix/image/upload/v1717128785/ofnwnhja1o8sedbzbejk.jpg');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD CONSTRAINT `fk_administrador_equipo` FOREIGN KEY (`id_equipo`) REFERENCES `equipo` (`id_equipo`),
  ADD CONSTRAINT `fk_administrador_persona` FOREIGN KEY (`id_persona`) REFERENCES `persona` (`id_persona`);

--
-- Filtros para la tabla `cancha`
--
ALTER TABLE `cancha`
  ADD CONSTRAINT `fk_empresa_cancha` FOREIGN KEY (`id_empresa`) REFERENCES `empresa` (`id_empresa`);

--
-- Filtros para la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD CONSTRAINT `fk_direccion_empresa` FOREIGN KEY (`id_direccion`) REFERENCES `direccion` (`id_direccion`);

--
-- Filtros para la tabla `faltas`
--
ALTER TABLE `faltas`
  ADD CONSTRAINT `fk_jugador_falta` FOREIGN KEY (`id_jugador`) REFERENCES `jugador` (`id_jugador`);

--
-- Filtros para la tabla `jugador`
--
ALTER TABLE `jugador`
  ADD CONSTRAINT `fk_contacto_emergencia_jugador` FOREIGN KEY (`id_contacto_emergencia`) REFERENCES `contacto_emergencia` (`id_contacto`),
  ADD CONSTRAINT `fk_equipo_jugador` FOREIGN KEY (`id_equipo`) REFERENCES `equipo` (`id_equipo`),
  ADD CONSTRAINT `fk_persona_jugador` FOREIGN KEY (`id_persona`) REFERENCES `persona` (`id_persona`);

--
-- Filtros para la tabla `participacion`
--
ALTER TABLE `participacion`
  ADD CONSTRAINT `participacion_ibfk_1` FOREIGN KEY (`id_equipo`) REFERENCES `equipo` (`id_equipo`),
  ADD CONSTRAINT `participacion_ibfk_2` FOREIGN KEY (`id_torneo`) REFERENCES `torneo` (`id_torneo`);

--
-- Filtros para la tabla `persona`
--
ALTER TABLE `persona`
  ADD CONSTRAINT `fk_direccion_persona` FOREIGN KEY (`id_direccion`) REFERENCES `direccion` (`id_direccion`);

--
-- Filtros para la tabla `propietario`
--
ALTER TABLE `propietario`
  ADD CONSTRAINT `propietario_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `persona` (`id_persona`),
  ADD CONSTRAINT `propietario_ibfk_2` FOREIGN KEY (`id_empresa`) REFERENCES `empresa` (`id_empresa`);

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `fk_cancha_reserva` FOREIGN KEY (`id_cancha`) REFERENCES `cancha` (`id_cancha`),
  ADD CONSTRAINT `fk_persona_reserva` FOREIGN KEY (`id_persona`) REFERENCES `persona` (`id_persona`);

--
-- Filtros para la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD CONSTRAINT `fk_reserva_servicio` FOREIGN KEY (`id_reserva`) REFERENCES `reserva` (`id_reserva`);

--
-- Filtros para la tabla `torneo`
--
ALTER TABLE `torneo`
  ADD CONSTRAINT `fk_empresa_torneo` FOREIGN KEY (`id_empresa`) REFERENCES `empresa` (`id_empresa`),
  ADD CONSTRAINT `fk_reglamento_torneo` FOREIGN KEY (`id_reglamento`) REFERENCES `reglamento` (`id_reglamento`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
