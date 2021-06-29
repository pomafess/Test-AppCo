import BaseHttpService from '../../shared/service/base-http-service';

class TableService extends BaseHttpService {

  async fetchUsers () {
    try {
      const data = await this.get('users',  {
        params: {
          page: 1,
          size: 1000
        }
      });
      console.log(data)
      return data
    } catch (error) {
    }
  };
  async fetchStatistics(id) {
    try {
      const data = await this.get(`users-statistic/${id}`);
       return data;
    } catch (error) {
    }
  }
}

export default TableService;
