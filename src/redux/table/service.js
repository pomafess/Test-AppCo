import BaseHttpService from '../../shared/service/base-http-service';

class TableService extends BaseHttpService {

  async fetchUsers () {
    try {
      const data = await this.get('users',  {
        params: {
          limit: 50
        }
      });
      const statsData = await this.get('users-statistic',  {
        params: {
          limit: 50
        }
      });
      const result = data.map(item => {
        const { page_views, clicks } = statsData.find(({ user_id }) => user_id === item.id);
        return {...item, page_views, clicks}
      })
      console.log(result);
        return result;
    } catch (error) {
    }
  }
}

export default TableService;
