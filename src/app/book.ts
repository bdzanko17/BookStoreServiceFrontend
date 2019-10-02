import { Author } from './author';
import { Page } from './page';

export class Book {
    constructor(
        public id: number,
        public title: string,
        public genre: string,
        public authors: Author[],
        public pages: Page[]
        ){}
}
