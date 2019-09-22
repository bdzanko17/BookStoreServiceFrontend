import { Author } from './author';

export class Book {
    constructor(
        public id: number,
        public title: string,
        public genre: string,
        public authors: number[]
        ){}
}
