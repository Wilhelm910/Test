/*
 * @license
 * Copyright Infosim GmbH & Co. KG
 */
import { Inject } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { UserDTO } from '../data/user';

let users: UserDTO[] = [
  {
    id: 0,
    username: 'max-muster',
    description: 'A simple demo user for testing',
    firstname: 'Max',
    lastname: 'Musterman',
    email: 'max.muster@infosim.net',
    lastModified: new Date(new Date().getTime() - 60_000 * 24 * 3).getTime(),
  },
  {
    id: 1,
    username: 'jon-jon',
    description: 'A guest user from island.',
    firstname: 'Jon',
    lastname: 'Jonsson',
    email: 'job.jonsson@infosim.net',
    lastModified: new Date(new Date().getTime() - 60_000 * 24 * 20).getTime(),
  },
  {
    id: 2,
    username: 'jona-jon',
    description: 'The wife of jon jonsson.',
    firstname: 'Jona',
    lastname: 'Jonsdottir',
    email: 'jona.jonsdottir@infosim.net',
    lastModified: new Date(new Date().getTime() - 60_000 * 24).getTime(),
  },
  {
    id: 3,
    username: 'pepito-perez',
    description: 'An exchange student from spain.',
    firstname: 'Pepito',
    lastname: 'Perez',
    email: 'pepito.perez@infosim.net',
    lastModified: new Date(new Date().getTime() - 60_000 * 24 * 100).getTime(),
  },
  {
    id: 4,
    username: 'otto-normal',
    description: 'A random person.',
    firstname: 'Otto',
    lastname: 'Normalverbraucher',
    email: 'otto.norm@infosim.net',
    lastModified: new Date(new Date().getTime() - 60_000 * 24 * 234).getTime(),
  },
  {
    id: 5,
    username: 'maija-meik',
    description: 'A researcher from finnland.',
    firstname: 'Maija',
    lastname: 'Meikäläinen',
    email: 'm.m@infosim.net',
    lastModified: new Date(new Date().getTime() - 60_000 * 24 * 12).getTime(),
  },
  {
    id: 6,
    username: 'john-doe',
    description: 'The long lost brother of max.',
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@infosim.net',
    lastModified: new Date(new Date().getTime() - 60_000 * 24 * 13).getTime(),
  },
];

@Inject({ provided: 'root' })
export class UserApiService {
  list(): Observable<UserDTO[]> {
    return of(users).pipe(delay(2000));
  }

  delete(id: number) {
    return of({}).pipe(
      map(() => {
        users = users.filter(u => u.id != id);
        return 'Done';
      })
    );
  }

  update(id: number, update: Partial<UserDTO>): Observable<UserDTO> {
    return of({}).pipe(
      map(() => {
        const userData = users.filter(u => u.id == id)[0];

        if (!userData) {
          throw new Error(`User with id ${id} could not be found.`);
        }

        if (update['id'] != undefined) {
          throw new Error('The id of a user cannot be changed.');
        }

        const keys = Object.keys(update);

        keys.forEach(key => {
          // @ts-ignore
          userData[key] = update[key];
        });

        return userData;
      })
    );
  }
}
