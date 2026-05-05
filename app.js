//array of numbers
 let numbers=[100,500,400,5000,20];
 let sum=0;
 for(let i=0;i<numbers.length;i++){
    sum+=numbers[i];
 }  
 let average=sum/numbers.length;    


    
    

    console.log(numbers);
    console.log(sum);
    console.log(average);

//objects-book

const book=[
    {
    title:"The Great Gatsby",   
    author:"F. Scott Fitzgerald",
    year:1925
},
 {   title:"To Kill a Mockingbird",
     author:"Harper Lee",
      year:1960  

 },
 {    title:"1984", 
    author:"George Orwell", 
    year:1948 } 
];

console.log(book);  
//objects-movies

const movies=[
    {
       Name:"The Shawshank Redemption",   
        genre:"Drama",
        streamingPlatform:"Netflix",
        releaseYear:1994
    },
    {   Name:"The Godfather",       
        genre:"Crime",

        streamingPlatform:"Amazon Prime",
        releaseYear:1972
    },
    {   Name:"The Dark Knight",
        genre:"Action",
        streamingPlatform:"HBO Max",
        releaseYear:2008
    }
];      
console.log(movies[0].Name);
console.log(movies[0].genre);
console.log(movies[0].streamingPlatform);
console.log(movies[0].releaseYear);
