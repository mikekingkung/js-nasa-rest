
'use strict';
// makes sure errors show up if we have undelared variables.
//let outerVar=90;
//has global scope
// globVar = {name:'mike',
//            address:'brockworth'};


function showMessage(message){
    let secretVal = Symbol();
    let value = 2;
    console.log("value is" + value);
    console.log(message);
    document.getElementById('message').textContent = message;    
    // only code that has access secretyVal variable can modify the property secretVal 
    [secretVal] = "secretInfo";
    let keyGenerator = function() {
        let outerVar = 50;
    }
    //objects
    // to access person object, we are using this
    let person = {firstName: "John",
                  lastName: "Fred",
                  showFirstName: function(realAge){console.log("showFirstName", this.firstName+ " age:" + realAge)}};
    person['firstName'] = "Harry";
    person.showFirstName(99);
    console.log("person.firstName" + person.firstName);
    // gives a type of object
    console.log(typeof person);

    let code = value * 2
    //console.log(keyGenerator());
    //console.log("change to outerVar after call to keygen should now be 50")

    let a = newFunction(person);
    console.log("person firstName after function call to newFunction" + person.firstName);
    //standard practice to wipe contents of a variable
    person.firstName = "Mike";
    console.log("person firstName after function call to newFunction and change person passed by reference" + person.firstName);
    person = null;
    let dateVal = new Date();
    console.log(dateVal.toDateString() )

    //console.log("outer var using function scope", outerVar);

}

function newFunction(person){
    

    // truth and falsy examples
    /*
      truthy           ::      Falsy (anything other that truthy)
      false            ::      true
      "" or ''         ::      0.5
      null             ::      "0"
      undefined        ::      anything other than undefined e.g "bacon"
      NaN              ::      anything other than Nan e.g "eggs"
    */
   let a="1", b="1";
  
   if (person.firstName === "Fred"){
       console.log("name is" + person.firstName);
        }
   else if (a === b){
            console.log("a is same value, AND same type");
            console.log("type of a:" + typeof(a));
            console.log("type of b:" + typeof(b));
    }
   else if (a == b){
       console.log("a is same value, but may not be same type");
       console.log("type of a:" + typeof(a));
       console.log("type of b:" + typeof(b));

   }
   if (true){
    console.log("always displayed");
   }

   // TERNARY
   let price = 11;
   let message = (price > 10) ? 'expensive': 'cheap';
   console.log("message for price:" + message);
   // ten lots of i counting up from 0 to 9
   for (let i=1; i < 10; i++){
       console.log("i is:" + i);
   }
   let loopCount = 10;
   // should see loopCount decrement from 10 to 1
   while (loopCount > 0){
       console.log("loopCount" + loopCount);
       // post decrement
       loopCount--;
   }
   // should see count go from 20 to 11
   let count = 20;
   do {
        console.log("count" + count);
        count--;
   } while (count > 10);
   //console.log("outer var using outer scope", outerVar);
   stringProcessing();
   return person;

}

function changePercentOff(percentage){
    for (let i=10; i<100; i++){
        document.getElementById('percent-off').textContent = i + "% OFF"; 
    }
}




function stringProcessing(){
    const a = "mike was ere mike";
    const b = a.lastIndexOf("mike",15);
    const c = a.length;
    const d = a.indexOf("mike");
    const e = a.search("mike");
    console.log("a" + a);
    console.log("b" + b);
    console.log("c" + c);   
    console.log("d" + d);
    console.log("e" + e);   
    //slice(start, end)
    //substring(start, end)
    //substr(start, length)
    const f = a.replace("mike", "dave");

    // string properties
    // constructor	Returns the string's constructor function
    // length	Returns the length of a string
    // prototype	Allows you to add properties and methods to an object

    //string methods
    // charAt()	Returns the character at the specified index (position)
    // charCodeAt()	Returns the Unicode of the character at the specified index
    // concat()	Joins two or more strings, and returns a new joined strings
    // endsWith()	Checks whether a string ends with specified string/characters
    // fromCharCode()	Converts Unicode values to characters
    // includes()	Checks whether a string contains the specified string/characters
    // indexOf()	Returns the position of the first found occurrence of a specified value in a string
    // lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
    // localeCompare()	Compares two strings in the current locale
    // match()	Searches a string for a match against a regular expression, and returns the matches
    // repeat()	Returns a new string with a specified number of copies of an existing string
    // replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
    // search()	Searches a string for a specified value, or regular expression, and returns the position of the match
    // slice()	Extracts a part of a string and returns a new string
    // split()	Splits a string into an array of substrings
    // startsWith()	Checks whether a string begins with specified characters
    // substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
    // substring()	Extracts the characters from a string, between two specified indices
    // toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
    // toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
    // toLowerCase()	Converts a string to lowercase letters
    // toString()	Returns the value of a String object
    // toUpperCase()	Converts a string to uppercase letters
    // trim()	Removes whitespace from both ends of a string
    // valueOf()	Returns the primitive value of a String object
}

function arrayProcessing(){
    const values1 = ['a','b','c'];
    //Checks that type is an array
    //Look at mozilla developer network
    console.log(Array.isArray(values1));
    // will get undefined as element index out of range
    console.log(values1[3]);
    // push add to an array, can have multiple values
    values1.push('d');
    // push takes a value of the end of array
    const last = values1.pop();
    // shift takes first element off the array leaving the array with b and c
    // first contains a and array values is left with b and c
    //The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
    const values2 = ['a','b','c'];
    const first = values2.shift(); 
    const values3 = ['a','b','c'];
    // first contains a and array values is left with b and c. works on beginning element of the array
    // gives hello world a b c
    //The unshift method inserts the given values to the beginning of an array-like object.
    values3.unshift("hello", "world");
    const values4 = ['a','b','c'];
    // slice doesn't alter values array. start at first position 
    // The slice() method returns a shallow copy of a portion
    // of an array into a new array object selected from begin 
    // to end (end not included) where begin and end represent the index of items in that array. 
    // The original array will not be modified.
    // expect a
    const newValues = values4.slice(1,2);
    console.log("newValues expect b", newValues);
    const newValuesSame = values4.slice();
    console.log("newValuesSame expect a b c --i.e same array", newValuesSame);

    const values5 = ['a','b','c'];
    // use splice to insert and delete from an array
    //index of element we want to delete, number of items we want to delete
    // unlike slice will alter the original array 
    //expect a c
    values5.splice(0,1); 
    console.log("new array values expect b c as a is deleted", values5);  
    const values6 = ['a','b','c'];
    //index of element we want to insert, number of items we want to i.e zero    
    values6.splice(1,0, 'foo'); 
    console.log("new array values a foo b c", values6);
    const values7 = ['a', 'b', 'c'];
    console.log(values7.indexOf('c')); // 2
    console.log(values7.indexOf('d')); // -1
    const values8 = ['a','b','c'];
    // filter takes each element in the array and passes it as item, so 'c' will get assigned to set
    const set = values8.filter(function(item){
        return item > 'b';
    });
    values8.forEach(function(item){ 
        // do this for each element of the array, each element is assigned to item as a traverses
        // through the loop
        console.log(item) // gives a,b,c
    });

    const values9 = ['g', 'r', 'fff']
    const found = values8.find(function(item){
        return item.length > 1;

    })

    // as soon as the element with fff in it is encountered, true will be returned
    console.log(found);
    //Another way to create an array
    const arr = Array.of(1,2,3);
    const arr2 = Array.of(2,"66");
    // slice creates a new array
    // splice inserts or deletes from an existing array
    console.log("arr2", arr2);
    const values10 = [2];
    console.log("length of values 10:", values10.length);
    const values11 = new Array(2);
    console.log("length of new Array(2) gives 2 so don't use new Array:", values11.length);
    const values12 = ["d","a","c"];
    console.log("sorted" + values12.sort());
    console.log("reversed" + values12.reverse());
    objectTutorial();
}

function objectTutorial(){
    const cat = {name:'fluffy', color:'white'}
    cat.age = 3;
    cat.speak = function(){
        console.log('The cat speaks');
    }
    cat.speak();

    // constructor pattern
    // this
    // It has different values depending on where it is used:

    // In a method, this refers to the owner object.
    // Alone, this refers to the global object. (if in a browser refers to the window object)
    // In a function, this refers to the global object.
    // In a function, in strict mode, this is undefined.
    // In an event, this refers to the element that received the event.
    // Methods like call(), and apply() can refer this to any object.
    // SNIPPET 1
    function Cat2(name, colour) {
        this.name = name;
        this.colour = colour;
        this.rubbishProperty = 'rubbish';
    }
    let Cat3 = Cat2;

    let newCat = new Cat2('Oskar', 'gingerbastard');
    console.log("cat2", newCat.name);
    console.log("cat2", newCat.colour); 
   
    let txt = "";
    let person = {fname:"John", lname:"Doe", age:25}; 
 
    for (let x in person) {
        txt += person[x] + " ";
    }
    console.log('txt', txt);
    // delete deletes a property from an object
    delete newCat.rubbishProperty; // or delete newCat with delete newCat['rubbishProperty'];
    console.log(Object.getPrototypeOf(newCat) === Cat3.prototype)
    let newCatProto = {name:
               {value: 'Fluffy',
                enumerable: true,
                writeable: true,
                configurable:true
                },
                colour:
                {value: 'Red with green spots',
                enumerable: true,
                writeable: true,
                configurable:true
    }};
    
    // this is what is going on under the hod when we do a new Cat(name:'Fluffy, colour:'Red with green spots')
    let newCatCreatedWithProtoType = Object.create(Object.prototype, newCatProto)
    for (let x in newCatCreatedWithProtoType) {
        txt += newCatCreatedWithProtoType[x] + " ";
    }        
    console.log (newCatCreatedWithProtoType)
    //instead of using the function syntax in SNIPPET1 when constructing the cat, we can create a class with ES6

    class ModernCat {
        constructor(name, colour){
            this.name = name;
            this.colour = colour;
        }

        // can add methods to the class
        speak(){
            console.log('meow');
        }
    }
    let newCatCreatedWithClass = new ModernCat('Oskar Twin', 'Ginger')
    for (let x in newCatCreatedWithClass) {
        txt += newCatCreatedWithClass[x] + " ";
    }        

    objectProperties()
}

function objectProperties(){
    let txt = "";
    let Cat={name :{first: 'oskar', last: 'bastaro'},
        colour: "Ginger",
        size_of_paws:{left_front:5, right_front:10, back_left:3, back_right:0}
    }
    // A user may enter property values you wish to set against the object. we got a space in property,
    // but could use eyeColour and dot notation if no space present.
    Cat['Eye Colour'] = 'Green';
    console.log('eye colour: ',Cat['Eye Colour']);
    // Object.getOwnPropertyDescriptor gives back object properties
    // 
    console.log(Object.getOwnPropertyDescriptor(Cat, 'name'));
    console.log(Object.getOwnPropertyDescriptor(Cat, 'colour'));
    // making the property unwriteable
    //Object.defineProperty(Cat, 'name', {writeable: false});
    //Object.freeze(Cat.name); // need this as well to freeze the object
    console.log(Object.getOwnPropertyDescriptor(Cat, 'name'));
    // if we are running in STRICTMODE then we will see an error when we try cat.name = "Bronson", if strict mode off it will write it
    // always run in strict mode. if not it will silently fail.
    console.log('size of cats front left paw', Cat.size_of_paws.left_front)
    // can make the whole object frozen and unwriteble using Object.freeze(cat.name).. won't allow you to change cat.name
    // again needs to have use strict. need to do both.

    //Object.defineProperty(Cat, 'name', {enumerable:true});
    
    console.log('name is enumerable enabled:');
    for (let x in Cat){
        console.log(x);
    }

    // wont be able to enumerate through it , see it object keys or serialise it
    // we can still use cat.name and cat['name']
    //Object.defineProperty(Cat,'name', {enumerable:false});
    
    console.log('name is enumerable disabled:');
    for (let x in Cat){
        console.log(x);
    }
    // when we get keys, we only see keys where object propery is enumerable
    console.log("keys", Object.keys(Cat));
    console.log("affects serialisation as well so name wont show in json", JSON.stringify(Cat));
    // locks down Cat.name, we can no longer delete it either, but we can write to it
    //Object.defineProperty(Cat,'name',{configurable:false});
    // 
    try {
        console.log("should throw exception");
        // this should throw an exception, but doesn't for some reason?
            // locks down
        //Object.defineProperty(Cat,'name',{configurable:false});
        // should give exception
        //Object.defineProperty(Cat,'name', {enumerable:false});
        // will give cannot delete exception as 
        //delete Cat.name;
    } catch (error) {
        alert('There has been an error #1: '+ error);
    }
    console.log(Cat.name.first);
    console.log(Cat.name.last);
    try{
        Object.defineProperty(Cat,'fullName', {
            get: function(){
                console.log('in here');
                return this.name.first + ' ' + this.name.last;
            },
            set: function(value){
                console.log('in setter');
                const nameParts = value.split(' ');
                this.name.first = nameParts[0];
                this.name.last = nameParts[1]; 
            }
            
        });
        // setting fullname to writeable false should result in exeption
        // we are freezing the whole object and it still is ok???
        //Object.defineProperty(Cat, 'fullName', {writeable: false});
        //Object.freeze(Cat);
        console.log(Cat.fullName);
        Cat.fullName = 'Fred West';
        console.log(Cat.fullName);
        Cat.fullName = 'Oskar BastardCat';
        console.log(Cat.fullName);
    }
    catch(error){
        alert('There has been an error #2: '+ error);
    }

    protoTypeInheritence();

}

function protoTypeInheritence(){
    const arr = ['ref','green',' blue'];
    // or could use const arr = new Array('ref','green',' blue') as this is of type Array
    // lets say we want a getter created on the arr array object last property that returns the
    // last element in the array. We create the setter as follows
    try {
        Object.defineProperty(arr, 'last', {get:function() {
            return this[this.length-1]
        }})
        console.log(arr.last);       
    } catch (error) {
        alert('There has been an error #3: '+ error);      
    }
    // if we want to create another arr2 object, we cant use the defineProperty call about, passing
    // in arr as a parameter, but we can instead put it on the Array (as arr2 is of type Array)
    const arr2 = ['ref','green',' blue','purple'];
    try {
        //Object.defineProperty(arr, 'last', {get:function() {
        Object.defineProperty(Array.prototype, 'last', {get:function() {
            return this[this.length-1]
        }})
        console.log(arr2.last);       
    } catch (error) {
        alert('There has been an error #4: '+ error);      
    }


    // A function prototype is the object instance that will become the prototype for all objects
    // created using this this function as a constructor
    // An objects prototype is the object instance fron which an object is inherited   
    // function prototype

    try{
        function Dog(name, colour){
            this.name = name;
            this.colour = colour;
            //this.mammal = true; uncommented Dogs and instances would have mammal set to true
            //Only altered against the instance so .. bronson.mammal=true for example
            let bronson = new Dog('Bronson','Red');

            console.log('Dog prototype:', Dog.prototype);
            console.log(Dog.prototype);
            console.log('expect true prototype:',Dog.prototype + " proto" + bronson.__proto__);
            // These point to the same instance
            console.log(Dog.prototype === bronson.__proto__);
            // create new instance of Dog inheriting from the Dog function prototype, so inherits mammal=true
            let bronson2 = new Dog('Bronson2','Black');       
            // Adds an additional property to the base object Dog
            Dog.prototype.mammal = false;
            bronson2.colour = "mauve"; // was black originally as in constructor call where bronson2 is assigned
            console.log('bronson2.name', bronson2.name);
            console.log('bronson2.colour', bronson2.colour);
            console.log('bronson2.mammal', bronson2.mammal);
            let bronson3 = new Dog('stinker', 'tuqoise');
            console.log('bronson3.name', bronson3.name);
            console.log('bronson3.colour', bronson3.colour);
            console.log('bronson3.mammal', bronson3.mammal);
            // hasOwnProperty gives false as mammal is in the Dog.prototype not the bronson3.__proto__
            console.log('bronson3.hasOwnProperty', bronson3.hasOwnProperty('mammal'));

            console.log(Dog.prototype);
            console.log('expect true still prototype:',Dog.prototype + " proto" + bronson2.__proto__);
            console.log(Dog.prototype === bronson2.__proto__);
            // if javascript can't find a property it looks in its prototype for it.
            //functions are same
            // __proto__ is in bronson2 instance and is a pointer to the prototype
            Dog.prototype.numberOfLegs = 8;  
            // create Dog instance (prototype) - adds numberOfLegs to Dog instance prior to instantiation
            let bronson4 = new Dog("Poo","Brown");
            console.log(bronson4.numberOfLegs);
            // Change the Dog instance (bronson4) numberOfLegs
            bronson4.__proto__.numberOfLegs = 4;
            console.log(bronson4.numberOfLegs);
            // can walk back up the .__proto__ to Object who has a __proto__ of none.
        }

        function Animal(voice){
            Animal.prototype.speak = function(){
                this.voice = voice || "grunt";
                console.log(this.voice);
                console.log('creating an animal');
            }
        }

        function Budgie(name, colour){
            // calls the parent object , as Cat is a type of animal
            Animal.call(this, 'Tweet' );
            name = this.name;
            colour  = this.colour;
        }

        // we dont use new as if we did this would execute the Budgie function. 
        // We are just set function as prototype as set up the  prototype chain
        Budgie.prototype = Object.create(Animal.prototype);
        // The constructor is currently pointing at an Animal and needs to point to a Budgie
        Budgie.prototype.constructor = Budgie;
        let pollyBudgie = new Budgie('polly', "rainbow");
        pollyBudgie.speak();
        console.log("pollyBudgie is an instance of animal", pollyBudgie instanceof Animal);
        console.log(pollyBudgie.__proto__.__proto__.__proto__.__proto__)// null because we are trying to look at the ProtpType for Object
        console.log(pollyBudgie.__proto__.__proto__.__proto__) // points to Object as the ProtoType
        console.log(pollyBudgie.__proto__.__proto__) // point to Animal as the object 
        classes();
    } catch (error) {
        alert('There has been an error #5: '+ error);      
    }

    function classes(){
        try{
            class Car{
                constructor(manufacturer, engineSize){
                this.manufacturer=manufacturer;
                this.engineSize=engineSize;
                }
            }
    
            class Fiesta extends Car{
                constructor(fiestaModel, fiestaBootSize){
                    let manufacturer='Ford';
                    let engineSize = 'Ford Fiesta Standard Engine Size'
                    super(manufacturer, engineSize);
 
                }
            }
            let newFiesta = new Fiesta('Arions Fiesta', '200x200');
            console.log("Fiesta: manufacturer:" + newFiesta.manufacturer + ' engineSize:' + newFiesta.engineSize);
            console.log('newFiesta constructor: ' + newFiesta.constructor);
        } catch (error) {
            alert('There has been an error #6: '+ error);      
        }
        fat_arrow_functions();
    }
}

function fat_arrow_functions(){
    console.log("fat arrow");

    hello = function helloWorld(){
        return "hello world";
    }

    // fat arrow does not need return statement
    hello2 = () => {
        return "hello world2";
    }
    
    // fat arrow does not need return statement
    hello3 = () => {
        "hello world2";
    }
    
    // fat arrow does not need return statement, single parameter
    hello4 = (val) => {
        "hello world4";
    }

    // fat arrow does not need return statement, one parameter no brackets required
    hello4 = val => {
        "hello world5";
        // with arrow functions the value of this represents the owner of the function
        // to do examples
        console.log('end');  
    }
}
