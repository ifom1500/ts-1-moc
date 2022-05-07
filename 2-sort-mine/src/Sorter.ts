interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {

  // код ниже - синтаксис обозначения методов,
  // которые будут имплементированы в классах наследниках в будущем
  // но которых нет в абстрактном классе
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  /* Плохой код

  // collection: number[];
  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }
  // можно заменить на такой код ->

  constructor(public collection: number[] | string | LinkedList) {}

  sort(): void {
    // const length = this.collection.length;
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        // Если коллекция - это массив чисел
        if (this.collection instanceof Array) {
          // коллекция является типов number[]
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1]
            this.collection[j + 1] = leftHand;
          }
        }

        // Если коллекция - строка
        if (typeof this.collection === 'string') {}

        // Если коллекция - LinkedList
        if (this.collection instanceof LinkedList) {}
      }
    }
  }

  */

  // больше не нужен так как Sorter - абстрактный класс
  // constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

          if (this.compare(j, j + 1)) {
            this.swap(j, j + 1);
          }

        }
      }
    }
}
