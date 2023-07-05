interface Author {
  penName: string;
  realName: string;
  writeBook: (title: string) => boolean;
}

const agatha: Author = {
  penName: 'agatha christie',
  realName: 'alice bob',
  writeBook: (title: string) => {
    return true;
  }
};

const higherOrderFunction = (callback: (name: string) => string) => {
  const returnVal = callback('carol');
};

higherOrderFunction((x: string) => { return 'hello' });
