export class Periodo {
    constructor(
        public id: string,
        public duracion: Date,
        public fkprogramasid: string,
        public fkpropagandasid: string,
        public fktemasmusicalesid: string,
        ) { }
}