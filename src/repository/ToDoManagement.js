import Repository from './Repository'
const resource = 'todos'
const addtodosresource = 'addtodos'
const removetodosresource = 'deletetodo'
const updatetodoresource = 'updatedtodos'
const changestatusresource = 'changestatus'


export default {
  //APIS
  gettodos() {
    return Repository.get(`${resource}`);
  },
  addtodos (name) {
    return Repository.post(`${addtodosresource}`,{todo:name});
  },
  deletetodos (id) {
    const form = new FormData();
    form.append('todo_id', id);
    return Repository.delete(`${removetodosresource}`, {data: {todo_id: id}});
  },
  updatedtodos (payload) {
    return Repository.put(`${updatetodoresource}`,payload);
  },
  changestatus (payload) {
    return Repository.put(`${changestatusresource}`,payload);
  }

};
