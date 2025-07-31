import Cart from '../service/Cart';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("testing adding an item to the shopping cart", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  const expectedResult = {
    id: 1001,
    name: "War and Piece", 
    author: "Leo Tolstoy",
    price: 2000,
    pages: 1225
  } 

  expect(cart.items[0]).toEqual(expectedResult);
});