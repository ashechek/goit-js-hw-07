  const images = [
      {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
        alt: "Білий і чорний пухнастий кіт",
      },
      {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
        alt: "Помаранчеві та білі коропи біля жовтих коропів",
      },
      {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
        alt: "Група коней біжить",
      },
      {
        url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
        alt: "Альпійські весняні луки",
      },
      {
        url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
        alt: "Природний пейзаж",
      },
      {
        url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
        alt: "Маяк, узбережжя, море",
      },
    ];

    const galleryList = document.querySelector('.gallery');

    const createGalleryItem = (image) => {
      const galleryItem = document.createElement('li');
      const galleryImage = document.createElement('img');
      galleryImage.src = image.url;
      galleryImage.alt = image.alt;
      galleryItem.appendChild(galleryImage);
      return galleryItem;
    };

    // Виправлення: перетворити масив galleryItems на рядок HTML
    const galleryHTML = galleryItems.map(createGalleryItem).join('');
    galleryList.insertAdjacentHTML('beforeend', galleryHTML);