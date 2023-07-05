interface Container<T> {
  name: string;
  contents: T;
  // myMethod?: () => type2;
}

const numContainer: Container<number> = {
  name: 'number container',
  contents: 42
};

const boolContainer: Container<boolean> = {
  name: 'boolean container',
  contents: true
};