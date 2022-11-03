import { types } from "mobx-state-tree";

const UserModel = types
  .model("User", {
    userId: types.string,
    userName: types.string,
    math: types.number,
    subjects: types.array,
  })
  .actions((self) => ({
    setMath(val) {
      self.math = pareInt(val);
    },
  }))
  .views((self) => ({
    get totalMarks() {
      return self.math;
    },
  }));
