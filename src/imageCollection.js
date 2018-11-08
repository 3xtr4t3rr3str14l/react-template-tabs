function importAll(r) {
  const tileData = [];
  r.keys().map((item, index) => {
    tileData.push({
      id: index,
      img: r(item),
      title: item.replace('./', ''),
    });
  });
  console.log('TILEDATA: ', tileData);
  return tileData;
}

export default importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));
