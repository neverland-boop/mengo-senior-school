
    const tables =document.querySelector(".box");

    const images =['evoting.jpg' ,'dit school.jpg' , 'commited students.jpg'];
    let index =0;

    setInterval(()=>{
        tables.style.backgroundImage ='url("'+images[index]+'")';

        index=(index+1 )% images.length;
    },2000);