import ToDoManagement from './ToDoManagement';
import UserAuth from './UsersAuth';



const repositories = {
  todomanagement: ToDoManagement,
  userauth:UserAuth
};

// eslint-disable-next-line import/prefer-default-export
export const RepositoryFactory = {
  get: name => repositories[name],
};
