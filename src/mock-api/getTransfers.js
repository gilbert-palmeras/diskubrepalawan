export const getTransfers = async (index = -1) => {
    const transfers =  [
      {
        image: '/images/package/p-alpha1.png',
        date: '2 Day & 1 night',
        title: 'Private Van Transfer (Puerto Princesa to El Nido)',
        type:'private',
        price: '134.99',
        description: 'Book your private transfer from Puerto Princesa to El Nido',
      }
    ];
    return index>-1 ?tours[index] : tours;
  };
  