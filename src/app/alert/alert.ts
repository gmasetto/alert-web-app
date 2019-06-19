export class Alert {
    alerta: string;
    compararValor: boolean = false;    
    evento: Event = new Event()
}

export class Event {
    tipo: number;
    descricao: string;    
}
