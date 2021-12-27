
class RandomUserService {
  
  getUsers = (n_users=20) => {
    return fetch(`${process.env.REACT_APP_API_URL}?results=${n_users}`)
  }
}

export default new RandomUserService();