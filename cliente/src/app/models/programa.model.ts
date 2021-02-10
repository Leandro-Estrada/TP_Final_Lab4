export class Programa {
    constructor(
        public id: string,
        public tituloprograma: string,
        public dia: Date,
        public horarioemision: Date,
        public duracion: Date,
        public fkdirectorid: string,
        public fklocutoresid: string) { }
}