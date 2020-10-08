const user = {
  count: 1,
  action: {
    getCount: () => this.count
  }
};

const action = user.action;
const getCount = user.action.getCount;


console.log(user.action.getCount());
console.log(action.getCount());
console.log(getCount());