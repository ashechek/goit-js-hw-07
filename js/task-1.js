const categoriesList = document.getElementById('categories');
const categories = categoriesList.querySelectorAll('.item');

// Кількість категорій
console.log(`Кількість категорій: ${categories.length}`);

// Обробка кожної категорії
categories.forEach((category) => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('li');
  const itemsCount = categoryItems.length;

  console.log(`- ${categoryTitle} (${itemsCount} шт.)`);
});
