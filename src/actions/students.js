import { makeActions, makeApiCallActions } from './makers';

export const actionTypes = makeActions('FETCH_ALL_STUDENTS');
export const addTypes = makeActions('ADD_STUDENT');
export const updateTypes = makeActions('UPDATE_STUDENT');
export const removeTypes = makeActions('REMOVE_STUDENT');

export const fetchAll = () => makeApiCallActions(
  'FETCH_ALL_STUDENTS',
  () => Promise.resolve([
    {
      id: 1,
      first: 'Dmitry',
      last: 'Tuzenkov',
      birthday: new Date('1990-03-13T06:30:00.000Z').toLocaleDateString()
    },
    {
      id: 2,
      first: 'Oleg',
      last: 'Voronko',
      birthday: new Date('1987-11-04T16:40:00.000Z').toLocaleDateString()
    },
  ])
);

export const add = (data) => makeApiCallActions(
  'ADD_STUDENT',
  () => Promise.resolve(data)
);

export const update = (id, data) => makeApiCallActions(
  'UPDATE_STUDENT',
  () => Promise.resolve({ id, ...data }),
);

export const remove = (id) => makeApiCallActions(
  'REMOVE_STUDENT',
  () => Promise.resolve(id),
  {
    resolver: () => ({ id })
  }
);
