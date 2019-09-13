import { observable, action } from 'mobx'

class SampleStore {
  @observable itemId

  @action
  setItemId = (itemId) => {
      this.itemId = itemId
  }

  getItemId = () => this.itemId
}

export default SampleStore
