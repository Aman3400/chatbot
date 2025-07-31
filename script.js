const websites = [
    { name: "Domino's", url: "https://www.dominos.co.in/", logo: "images/dominos.png", category: "pizza" },
    { name: "Pizza Hut", url: "https://www.pizzahut.co.in/", logo: "images/pizzahut.png", category: "pizza" },
    { name: "La Pino'z Pizza", url: "https://lapinozpizza.in/", logo: "images/lapinoz.jpeg", category: "pizza" },
    { name: "Zomato", url: "https://www.zomato.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png", category: "delivery" },
    { name: "Swiggy", url: "https://www.swiggy.com/", logo: "images/swiggy.jpeg.png", category: "delivery" },
    { name: "Uber Eats", url: "https://www.ubereats.com/", logo: "images/ubereats.png", category: "delivery" },
    { name: "McDonald's", url: "https://www.mcdonalds.com/", logo: "images/mcdonalds.png", category: "fastfood" },
    { name: "Burger King", url: "https://www.burgerking.in/", logo: "images/burgerking.png", category: "fastfood" },
    { name: "KFC", url: "https://online.kfc.co.in/", logo: "images/kfc.png", category: "fastfood" },
    { name: "Subway", url: "https://www.subway.com/", logo: "images/subway.png", category: "fastfood" },
    { name: "Starbucks", url: "https://www.starbucks.in/", logo: "images/starbucks.png", category: "coffee" },
    { name: "Cafe Coffee Day", url: "https://www.cafecoffeeday.com/", logo: "images/ccd.png", category: "coffee" },
    { name: "Taco Bell", url: "https://www.tacobell.co.in/", logo: "images/tacobell.png", category: "fastfood" },
    { name: "Faasos", url: "https://www.faasos.com/", logo: "images/fassos.jpg", category: "delivery" },
    { name: "EatSure", url: "https://www.eatsure.com/", logo: "images/eatsure.png", category: "delivery" },
    { name: "Behrouz Biryani", url: "https://www.behrouzbiryani.com/", logo: "images/behrouz.jpeg", category: "delivery" },
    { name: "Oven Story", url: "https://www.ovenstory.in/", logo: "images/ovenstory.jpg", category: "delivery" },
    { name: "FreshMenu", url: "https://www.freshmenu.com/", logo: "images/freshmenu.png", category: "delivery" },
    { name: "Baskin Robbins", url: "https://baskinrobbinsindia.com/", logo: "images/baskin.png", category: "icecream" },
    { name: "Dunkin' Donuts", url: "https://dunkindonuts.com/", logo: "images/dunkins.png", category: "coffee" }
];

const grid = document.getElementById('website-grid');
function displayWebsites(list) {
    grid.innerHTML = "";
    list.forEach(site => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${site.logo}" alt="${site.name} Logo">
            <a href="${site.url}" target="_blank">${site.name}</a>
        `;
        grid.appendChild(card);
    });
}
displayWebsites(websites);

function searchWebsites() {
    const input = document.getElementById('search').value.toLowerCase();
    const filtered = websites.filter(site => site.name.toLowerCase().includes(input));
    displayWebsites(filtered);
}

function filterCategory(cat) {
    if (cat === 'all') {
        displayWebsites(websites);
    } else {
        const filtered = websites.filter(site => site.category === cat);
        displayWebsites(filtered);
    }
}
