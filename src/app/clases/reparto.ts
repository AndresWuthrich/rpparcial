import { Pizza } from "./pizza";
import { Repartidor } from "./repartidor";

export class Reparto {
    // reparto: number = 0;
    repartidor: Repartidor | null = null;
    pizzas: Pizza[] = [];
}
