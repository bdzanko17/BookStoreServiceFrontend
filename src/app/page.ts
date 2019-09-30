import { Book } from './book';

export class Page {
    constructor(
        public id: number,
        public ordinalNumber: number,
        public content: string,
        public book: Book
         ){}
}
