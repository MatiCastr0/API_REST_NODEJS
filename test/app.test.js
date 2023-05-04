describe("[APP] Esta es una prueba general", () => {
  test("Esto deberia retornar", () => {
    a = 4;
    b = 4;
    const total = a + b;
    expect(total).toEqual(8);
  });
});
