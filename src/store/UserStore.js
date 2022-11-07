import { types } from "mobx-state-tree";

const UserModel = types
  .model("User", {
    userId: types.string,
    userName: types.string,
    math: types.number,
    hindi: types.number,
    // subjects: types.array,
  })
  .actions((self) => ({
    setMath(val) {
      self.math = parseInt(val);
    },
    setHindi(val) {
      self.hindi = parseInt(val);
    },
  }))
  .views((self) => ({
    get totalMarks() {
      return self.math + self.hindi;
    },
  }));

const users = UserModel.create({
  userId: "abc01",
  userName: "anup verma",
  math: 99,
  hindi: 65,
});

export default users;
