function whatIsInAName(collection, source) {
    
    //create new var with keys of source
    let sKeys = Object.keys(source);

    //filter through collection
    return collection.filter(a => {

    //loop through stored keys
    return sKeys.every( b=> {

      //return matching elements 
      return a.hasOwnProperty(b) && a[b] === source[b];
    });
  });
}
