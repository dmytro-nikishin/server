db.anounces.drop()
db.anounces.insertMany([
          {
             Id: '1',
             Name: 'Фестиваль "Казкове Місто", база відпочинку "Зелений бор", с. Новосілки, Київська область',
             Date: '26 вересня, 17:00 - 18:00',
             Text: 'Українські і ірландські пісні і танці',
          },
          {
             Id: '2',
             Name: 'Фестиваль "Казкове Місто", смт. Чорноморське, Одеська область',
             Date: '15 серпня',
             Text: 'Українські і ірландські пісні і танці',
          },
          {
             Id: '3',
             Name: 'Фестиваль "Древо Роду Кобзарського", с. Крячківка, Полтавська область',
             Date: '24-25 липня, 17:00 - 18:00',
             Text: 'Українські пісні і танці',
          }
]);

// db.anounces.find()
