abstract class Inventory {
    abstract addItem(item: string, quantity: number): void;
  abstract removeItem(item: string): void;
  abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
  private inventory: Record<string, number> = {};

  addItem(item: string, quantity: number): void {
    this.inventory[item] = (this.inventory[item] || 0) + quantity;
  }

  removeItem(item: string): void {
    if (this.inventory[item]) {
      delete this.inventory[item];
    } else {
      console.log('Item não encontrado no inventário.');
    }
  }

  getInventory(): Record<string, number> {
    return this.inventory;
  }
}

class StoreInventory extends Inventory {
  private inventory: Record<string, number> = {};

  addItem(item: string, quantity: number): void {
    const currentQuantity = this.inventory[item] || 0;
    if (currentQuantity + quantity <= 10) {
      this.inventory[item] = currentQuantity + quantity;
    } else {
      console.log(`Não é possível adicionar ${quantity} unidades de ${item}. Limite máximo atingido.`);
    }
  }

  removeItem(item: string): void {
    if (this.inventory[item]) {
      delete this.inventory[item];
    } else {
      console.log('Item não encontrado no inventário.');
    }
  }

  getInventory(): Record<string, number> {
    return this.inventory;
  }
}

const warehouse = new WarehouseInventory();
warehouse.addItem('Produto A', 50);
warehouse.addItem('Produto B', 20);
console.log(warehouse.getInventory());

const store = new StoreInventory();
store.addItem('Produto C', 5);
store.addItem('Produto C', 6);
console.log(store.getInventory());