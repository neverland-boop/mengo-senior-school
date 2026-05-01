
    const tables =document.querySelector(".box");

    const images =['images/dit school.jpg' ,'images/evoting.jpg' , 'images/commited students.jpg'];
    let index =0;

    setInterval(()=>{
        const nextImage = images[index];
        tables.style.setProperty('--next-bg', 'url("' + nextImage + '")');
        tables.classList.add('fade');

        setTimeout(() => {
            tables.style.backgroundImage = 'url("' + nextImage + '")';
            tables.classList.remove('fade');
            index = (index + 1) % images.length;
        }, 1000);
    },3000);
    