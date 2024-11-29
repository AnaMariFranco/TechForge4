class Order {
    private items: string[] = [];
private totalPrice: number = 0;
private paymentStatus: string = 'Pendente';
private shippingStatus: string = 'Pendente';

addItem(item: string, price: number): void {
    this.items.push(item);
    this.totalPrice += price;
  }

  processPayment(): void {
    if (this.totalPrice > 0) {
      this.paymentStatus = 'Pago';
      console.log('Pagamento processado com sucesso');
    } else {
      console.log('Erro: Total do pedido invalido');
    }
  }

  updateShippingStatus(status: string): void {
    this.shippingStatus = status;
    console.log(`Status de envio: ${status}`);
  }

  displayOrderInfo(): void {
    console.log(`Itens: ${this.items.join(', ')}`);
    console.log(`Preço Total: R$${this.totalPrice}`);
    console.log(`Status de Pagamento: ${this.paymentStatus}`);
    console.log(`Status de Envio: ${this.shippingStatus}`);
  }
}

const order = new Order();
order.addItem('Produto A', 10);
order.addItem('Produto B', 50);
order.processPayment();
order.updateShippingStatus('Enviado');
order.displayOrderInfo();

//refatoração
class Cart {
  private items: { name: string, price: number }[] = [];
  private totalPrice: number = 0;

  addItem(item: string, price: number): void {
    this.items.push({ name: item, price });
    this.totalPrice += price;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  getItems(): string[] {
    return this.items.map(item => item.name);
  }
}

class Payment {
  private paymentStatus: string = 'Pendente';

  processPayment(totalPrice: number): void {
    if (totalPrice > 0) {
      this.paymentStatus = 'Pago';
      console.log('Pagamento processado com sucesso!');
    } else {
      console.log('Erro: Total do pedido inválido!');
    }
  }

  getPaymentStatus(): string {
    return this.paymentStatus;
  }
}

class Shipping {
  private shippingStatus: string = 'Pendente';

  updateShippingStatus(status: string): void {
    this.shippingStatus = status;
    console.log(`Status de envio: ${status}`);
  }

  getShippingStatus(): string {
    return this.shippingStatus;
  }
}

class Order {
  private cart: Cart;
  private payment: Payment;
  private shipping: Shipping;

  constructor() {
    this.cart = new Cart();
    this.payment = new Payment();
    this.shipping = new Shipping();
  }

  addItem(item: string, price: number): void {
    this.cart.addItem(item, price);
  }

  processPayment(): void {
    this.payment.processPayment(this.cart.getTotalPrice());
  }

  updateShippingStatus(status: string): void {
    this.shipping.updateShippingStatus(status);
  }

  displayOrderInfo(): void {
    console.log(`Itens: ${this.cart.getItems().join(', ')}`);
    console.log(`Preço Total: R$${this.cart.getTotalPrice()}`);
    console.log(`Status de Pagamento: ${this.payment.getPaymentStatus()}`);
    console.log(`Status de Envio: ${this.shipping.getShippingStatus()}`);
  }
}

const order = new Order();
order.addItem('Produto A', 10);
order.addItem('Produto B',0);
order.processPayment();
order.updateShippingStatus('Enviado');
order.displayOrderInfo();