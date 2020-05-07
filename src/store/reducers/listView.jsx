import { SHOWVIEW } from '../actions/types';

const listView = [
  { key: 'Devin' },
  { key: 'Dan' },
  { key: 'Dominic' },
  { key: 'Jackson' },
  { key: 'James' },
  { key: 'Joel' },
  { key: 'John' },
  { key: 'Jillian' },
  { key: 'Jimmy' },
  { key: 'Julie' },
];

export default function (state = listView, action) {
  //console.log(action.type);

  // switch (action.type) {
  //   case SHOWVIEW:
  //     return state;
  //   default:
  //     return state;
  // }

  return state;
}
