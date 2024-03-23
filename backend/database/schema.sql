CREATE TABLE blade (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  picture VARCHAR(500) NOT NULL,
  origin VARCHAR(1000) NOT NULL
);

INSERT INTO blade (name, picture, origin) VALUES 
('Excalibur','https://www.theswordshop.co.uk/media/catalog/product/cache/4/image/650x/51005e67a06b64a1769d8f4204ad6b6a/a/g/ag281.jpg','Excalibur est l''épée magique légendaire du roi Arthur, le roi des Bretons dans les textes de la légende arthurienne de la matière de Bretagne rédigés à l''époque du Moyen Âge'),
('Andúril','https://www.figurine-collector.fr/12247-large_default/united-cutlery-lotr-epee-anduril-roi-aragorn.jpg','Andúril est une épée de fiction portée par le personnage de Aragorn dans le roman Le Seigneur des anneaux de J. R. R. Tolkien'),
('Sabre laser','https://p.turbosquid.com/ts-thumb/eO/Kryl4B/W8/r4r0/jpg/1631051685/600x600/fit_q87/dd033c8e7e5ee7f5bf82dd002545d7451e1707da/r4r0.jpg','Un sabre laser est une arme fictive de la saga cinématographique Star Wars');
