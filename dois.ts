class UserManager {
    createUser(name: string, email: string): void {
    console.log(`Usuário ${name} com email ${email} criado.`);
    this.sendEmailNotification(email);
  }

  sendEmailNotification(email: string): void {
    console.log(`Enviando email para ${email}`);
  }
}

const userManager = new UserManager();
userManager.createUser('Pedro', 'pedro@example.com');

//refatoração.
class EmailNotification {
  sendEmail(email: string): void {
    console.log(`Enviando email para ${email}`);
  }
}

class UserManager {
  private emailNotification: EmailNotification;

  constructor() {
    this.emailNotification = new EmailNotification();
  }
  

  createUser(name: string, email: string): void {
    console.log(`Usuário ${name} com email ${email} criado.`);
    this.emailNotification.sendEmail(email);
  }
}

const userManager = new UserManager();
userManager.createUser('lana', 'mlan2@.com');

