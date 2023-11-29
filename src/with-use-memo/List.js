function getItems(query) {
    let items = [];
    for (let i = 0; i < 1000; i++) {
      items.push(getItem(query,i));
    }
    return items;
};
  
function getItem(query, i) {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
      // Do nothing for 1 ms per item to emulate extremely slow code
    }
  
    return `${query} #${i}`
}
  
export default getItems;