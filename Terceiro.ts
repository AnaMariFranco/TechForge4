abstract class FavoriteManager {
    abstract addFavorite(item: string): void;
  abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
  private favorites: Set<string> = new Set();

  addFavorite(item: string): void {
    if (this.favorites.has(item)) {
      console.log(`Filme "${item}" já está na lista de favoritos.`);
    } else {
      this.favorites.add(item);
    }
  }

  getFavorites(): string[] {
    return Array.from(this.favorites).sort();
  }
}

class BooksFavoriteManager extends FavoriteManager {
  private favorites: string[] = [];

  addFavorite(item: string): void {
    this.favorites.unshift(item);
  }

  getFavorites(): string[] {
    return this.favorites;
  }
}

const moviesManager = new MoviesFavoriteManager();
moviesManager.addFavorite('HP');
moviesManager.addFavorite('Matrix');
moviesManager.addFavorite('HP');
console.log(moviesManager.getFavorites());

const booksManager = new BooksFavoriteManager();
booksManager.addFavorite('1984');
booksManager.addFavorite('A caban');
console.log(booksManager.getFavorites());