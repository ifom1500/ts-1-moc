import faker from 'faker';
import { Mappable } from './CustomMap';

// User и Company являются одновременно и классами и типами
// Можно function(user: User)
// передаем параметр user типа User

export class User implements Mappable {
  // Подсказываем TS что User напрямую зависит от интерфейса Mappable для проверки
  // Это необязательно

  name: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = 'black';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
