class EmailSender {
    sendEmail(email: string): void {
    if (this.isValidEmail(email)) {
      console.log(`Enviando email para ${email}`);
    } else {
      console.log('Erro: Email inválido');
    }
  }

  isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}

const emailSender = new EmailSender();
emailSender.sendEmail('pedro@example.com');
emailSender.sendEmail('invalid-email');

//refatoração

class ContactValidator {
  isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}

class EmailSender {
  private contactValidator: ContactValidator;

  constructor() {
    this.contactValidator = new ContactValidator();
  }

  sendEmail(email: string): void {
    if (this.contactValidator.isValidEmail(email)) {
      console.log(`Enviando email para ${email}`);
    } else {
      console.log('Erro: Email inválido');
    }
  }
}

const emailSender = new EmailSender();
emailSender.sendEmail('lana@123.com');
emailSender.sendEmail('invalid-email');