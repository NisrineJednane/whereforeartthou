//function that looks through array of objects (first arg) 
//and returns array of objects that have matching name and value (2nd arg)
//solution 2 using ES6:

//create arrow function + filter through main list with a as placeholder for collections elements
const whatIsInAName = (collection, source) => collection.filter(a => { 
//loop through target list of objects (source)
    for (let i in source) {
        if (a[i] !== source[i]) {
            //return false if no match is found between 2 lists of objects
            return false;  
                }
    }
    //else return true
    return true;
})
