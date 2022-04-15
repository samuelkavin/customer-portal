export default function userReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_USER':
      return [...state, { ...action.state }];
    default:
      return state;
  }
}
