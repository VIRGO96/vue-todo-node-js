import Repository from './Repository'
const resourcelogin = 'login'


export default {
  login(payload) {
    return Repository.post(`${resourcelogin}`,payload);
  }
};
