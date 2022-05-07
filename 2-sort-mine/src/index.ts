import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([19, 4, 0, 8])
numbersCollection.sort();
console.log('numbersCollection', numbersCollection.data);

const charactersCollection = new CharactersCollection('xYtdPOrwq');
charactersCollection.sort();
console.log('charactersCollection', charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(-10);
linkedList.add(4);
linkedList.add(9);
linkedList.add(2);
linkedList.sort();
console.log('linkedList', linkedList.print());
