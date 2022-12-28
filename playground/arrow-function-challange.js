const tasks = {
  tasks: [
    {
      tesxt: "some1",
      completed: true,
    },
    {
      tesxt: "some2",
      completed: false,
    },
    {
      tesxt: "some3",
      completed: false,
    },
  ],
  getTasksTodo() {
    return this.tasks.filter((task) => !task.completed);
  },
};

console.log(tasks.getTasksTodo());
