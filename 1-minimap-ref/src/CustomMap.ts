// import { google } from 'google-maps';

// Instructions to other classes how be an argument for 'addMarker'
// То есть чтобы быть mappable - нужно иметь location c lat и lng
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  // делаем чтобы все методы и свойства были доступны
  // только из самого класса CustomMap
  // ->
  // в свойстве googleMap хранится объект google.maps.Map - и это свойство приватно
  private googleMap: google.maps.Map;

  // по умолчанию свойства имеют модификатор public

  constructor(mapDivId: string) {
    // mapDivId - id контейнера (div) с картой
    this.googleMap = new google.maps.Map(document.getElementById(mapDivId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    // mappable - здесь - то что отображается на карте
    // когда используем оператор ИЛИ User | Company
    // JS смотрит какие у этих двух объектов одинаковые свойства

    // То есть объект, который хочет быть отображен на карте
    // должен соответствовать интерфейсу Mappable

    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
