abstract class TaskManager {
    abstract addTask(task: string): void;
  abstract listTasks(): string[];
}

class Project extends TaskManager {
  private tasks: Set<string> = new Set();

  addTask(task: string): void {
    if (this.tasks.has(task)) {
      console.log(`Tarefa "${task}" já existe no projeto.`);
    } else {
      this.tasks.add(task);
      console.log(`Tarefa "${task}" adicionada ao projeto.`);
    }
  }

  listTasks(): string[] {
    return Array.from(this.tasks);
  }
}

class DailyTasks extends TaskManager {
  private tasks: Set<string> = new Set();

  addTask(task: string): void {
    if (this.tasks.has(task)) {
      console.log(`Tarefa diária "${task}" já existe.`);
    } else {
      this.tasks.add(task);
      console.log(`Tarefa diária "${task}" adicionada.`);
    }
  }

  listTasks(): string[] {
    return Array.from(this.tasks);
  }
}

const project = new Project();
project.addTask('Desenvolver aplicação');
project.addTask('Revisar código');
console.log(project.listTasks());

const dailyTasks = new DailyTasks();
dailyTasks.addTask('Tomar café');
dailyTasks.addTask('Fazer exercícios');
console.log(dailyTasks.listTasks());