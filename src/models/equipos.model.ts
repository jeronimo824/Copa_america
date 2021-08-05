import {Entity, model, property} from '@loopback/repository';

@model()
export class Equipos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  seleccion: string;

  @property({
    type: 'number',
    required: true,
  })
  partidos_ganados: number;

  @property({
    type: 'number',
    required: true,
  })
  partidos_perdidos: number;

  @property({
    type: 'string',
    required: true,
  })
  partidos_empatados: string;

  @property({
    type: 'number',
    required: true,
  })
  partidos_jugados: number;

  @property({
    type: 'number',
    required: true,
  })
  puntos: number;

  @property({
    type: 'number',
    required: true,
  })
  jugadores: number;

  @property({
    type: 'number',
    required: true,
  })
  jugador: number;




  constructor(data?: Partial<Equipos>) {
    super(data);
  }
}

export interface EquiposRelations {
  // describe navigational properties here
}

export type EquiposWithRelations = Equipos & EquiposRelations;
