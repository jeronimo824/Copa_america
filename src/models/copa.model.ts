import {Entity, model, property} from '@loopback/repository';

@model()
export class Copa extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  sedes: number;

  @property({
    type: 'string',
    required: true,
  })
  edicion: string;

  @property({
    type: 'string',
    required: true,
  })
  organizador: string;

  @property({
    type: 'number',
    required: true,
  })
  grupo: number;


  constructor(data?: Partial<Copa>) {
    super(data);
  }
}

export interface CopaRelations {
  // describe navigational properties here
}

export type CopaWithRelations = Copa & CopaRelations;
