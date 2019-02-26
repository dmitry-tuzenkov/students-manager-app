import { makeActions, makeApiCallActions } from './makers';

export const fetchAllTypes = makeActions('FETCH_ALL_GRADES');
export const addTypes = makeActions('ADD_GRADE');
export const updateTypes = makeActions('UPDATE_GRADE');
export const removeTypes = makeActions('REMOVE_GRADE');

export const fetchAll = () => makeApiCallActions(
  'FETCH_ALL_GRADES',
  () => Promise.resolve([
    {
      id: 1,
      student_id: 1,
      student_name: 'Dmitry Tuzenkov',
      grade: 'A',
      profession: 'chemistry',
      completed_at: new Date('2019-01-04T16:40:00.000Z').toLocaleString(),
    },
    {
      id: 2,
      student_id: 1,
      student_name: 'Dmitry Tuzenkov',
      grade: 'A',
      profession: 'math',
      completed_at: new Date('2019-01-04T16:50:00.000Z').toLocaleString(),
    },
  ])
);

export const add = (data) => makeApiCallActions(
  'ADD_GRADE',
  () => Promise.resolve(data)
);

export const update = (id, data) => makeApiCallActions(
  'UPDATE_GRADE',
  () => Promise.resolve({ id, ...data }),
);

export const remove = (id) => makeApiCallActions(
  'REMOVE_GRADE',
  () => Promise.resolve(id),
  {
    resolver: () => ({ id })
  }
);
