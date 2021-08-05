import {Entity, model, property} from '@loopback/repository';

@model()
export class Grupo extends Entity {
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
  grupo: string;

  @property({
    type: 'number',
    required: true,
  })
  selecciones: number;


  constructor(data?: Partial<Grupo>) {
    super(data);
  }
}

export interface GrupoRelations {
  // describe navigational properties here
}

export type GrupoWithRelations = Grupo & GrupoRelations;
