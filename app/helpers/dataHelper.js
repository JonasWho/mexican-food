let dataHelpers = {
  getFoodItems : function() { 
    return foodItems; 
  },
}

export default dataHelpers;

const foodItems = [
    {
        "id": 0,
        "name": "Achiote",
        "category": "Sauce",
        "hasphoto": true,
        "photoby": "I Believe I Can Fry",
        "photolink": "https://www.flickr.com/photos/johnnystiletto/6215889736/",
        "textReady": "YES",
        "include": "YES",
        "description": "Red paste made by grinding <annatto seeds+annatto> and adding garlic and lime juice or vinegar. It is the marinade used for <Cochinita Pibil>. Mostly popular in the Yucatán Peninsula."
    },
    {
        "id": 1,
        "name": "Adobo",
        "category": "Sauce",
        "hasphoto": true,
        "photoby": "whologwhy",
        "photolink": "https://www.flickr.com/photos/hulagway/5685567964/",
        "textReady": "YES",
        "include": "YES",
        "description": "Smokey chili marinade made of chili peppers (usually <guajillo>), garlic, vinegar or citrus juice and spices. Often served on pork or chicken."
    },
    {
        "id": 2,
        "name": "Agua Fresca",
        "category": "Drink",
        "hasphoto": true,
        "photoby": "Angélica Portales",
        "photolink": "https://www.flickr.com/photos/frozen-in-time/9578299733",
        "textReady": "YES",
        "include": "YES",
        "description": "Literally it means 'fresh water', and it is a refreshing water-based drink flavored with fruit, grains or seeds. Most common aguas frescas are <tamarindo>, <jamaica> and <horchata>, but you can find all kinds of natural fruit flavors like watermelon, pineapple, guava, etc. Many restaurants have an 'Agua del Día' on the menu."
    },
    {
        "id": 3,
        "name": "Aguachile",
        "category": "Dish",
        "hasphoto": true,
        "photoby": "Kirk K.",
        "photolink": "https://www.flickr.com/photos/mmm-yoso/5386877046/",
        "textReady": "YES",
        "include": "YES",
        "description": "Raw fish or seafood in a spicy green limey salsa. Usually with cucumber and onions. This is normally a very spicy dish and it's similar to a <Ceviche>."
    },
    {
        "id": 4,
        "name": "Alambre",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Diced chicken or beef sauteed with bacon, green peppers and onions, optionally with cheese. Served with <tortillas+Tortilla> and <salsa>. Similar to fajitas."
    },
    {
        "id": 5,
        "name": "Ancho",
        "category": "Chili",
        "hasphoto": true,
        "photoby": "Ernesto Andrade",
        "photolink": "https://www.flickr.com/photos/dongkwan/6774511499/",
        "textReady": "YES",
        "include": "YES",
        "description": "The Ancho chili is dried <Poblano chili>. It is a mild but tasteful kind with a sweet fruity twist (1,000-1,500 scoville). It is used in moles, <salsas+salsa> and marinades."
    },
    {
        "id": 6,
        "name": "Annatto",
        "category": "Spice",
        "hasphoto": true,
        "photoby": "Francisco Y. Ferrer Hernández",
        "photolink": "https://www.flickr.com/photos/mr_frankie/7016442957/",
        "textReady": "YES",
        "include": "YES",
        "description": "Seeds from the Yucatecan annatto tree used to make <achiote paste+achiote>. "
    },
    {
        "id": 124,
        "name": "Árbol",
        "category": "Chili",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Small red strong (15,000 - 30,000 scoville) chili that is used in many dishes, especially <salsas+salsa>. It can be found in markets both fresh and dried. "
    },
    {
        "id": 7,
        "name": "Arrachera",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Marinated and grilled flank steak. Arrachera is a popular filling for <tacos+taco>, but it is also a very nice piece of meat that you can get served as a steak. The cut is also known as Hanger Steak in the US, skirt in the UK and onglet in France."
    },
    {
        "id": 116,
        "name": "Arroz con Leche",
        "category": "Dessert",
        "hasphoto": true,
        "photoby": "Lore & Guille",
        "photolink": "https://www.flickr.com/photos/lorenacaes/6025541832/",
        "textReady": "YES",
        "include": "YES",
        "description": "A sort of rice pudding with cinnamon. Usually served as cold dessert but also a popular variety of <paletas+paleta>, and even an <atole> flavor."
    },
    {
        "id": 136,
        "name": "Atole",
        "category": "Drink",
        "hasphoto": true,
        "photoby": "Anadelta González",
        "photolink": "https://www.mexicodestinos.com/blog/2015/10/12-delicias-gastronomicas-para-el-dia-de-muertos/",
        "textReady": "YES",
        "include": "YES",
        "description": "A hot beverage typically drunken in the morning, together with <tamales+tamal>. It is made of corn-dough, mixed with water, milk, <piloncillo> (unrefined cane sugar), cinnamon, vanilla and chocoloate or different fruit flavors."
    },
    {
        "id": 8,
        "name": "Barbacoa",
        "category": "Dish",
        "hasphoto": true,
        "photoby": "Neil Conway",
        "photolink": "https://www.flickr.com/photos/neilconway/7324184106/",
        "textReady": "YES",
        "include": "YES",
        "description": "Meat barbecued in a pit, although according to tradition, it is slow-cooked in a hole dug in the ground covered with maguey leaves. Depending on the region, the meat may be borrego (lamb) in central Mexico, barbacoa de cabeza (cow head), <cabrito> (kid goat) in the North, or <cochinita pibil> (pork) in Yucatán."
    },
    {
        "id": 9,
        "name": "Bistec",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Beefsteak. You'll find this mainly in <taco> menus, it's quite a popular choice for taco filling."
    },
    {
        "id": 127,
        "name": "Bolillo",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "The classic Mexican bun to make <tortas+torta> (sandwiches). Very similar to the french baguette, but more airy which leaves room for filling it with meat, eggs, ham, cheese or even <tamales+tamal> to make the delicious Torta de Tamal :-)"
    },
    {
        "id": 11,
        "name": "Botanas",
        "category": "Snack",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "The word means snacks in Mexico. Either as snacks sold in the markets or on the street, or as food snacks served for free in a cantina when you buy a drink."
    },
    {
        "id": 12,
        "name": "Cabrito",
        "category": "Dish",
        "hasphoto": true,
        "photoby": "Lisandro M. Enrique",
        "photolink": "https://www.flickr.com/photos/latente/2711337634/",
        "textReady": "YES",
        "include": "YES",
        "description": "Kid goat. It is a regional specialty of the city of Monterrey, it can be cooked in many different ways but the most popular is oven roasted. Usually the entire body, minus the head and feet are served. "
    },
    {
        "id": 121,
        "name": "Café de Olla",
        "category": "Drink",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Coffee cooked with cinnamon and unrefined cane sugar (<piloncillo>). It is often served in a clay cup. Yum!"
    },
    {
        "id": 13,
        "name": "Cajeta",
        "category": "Dessert",
        "textReady": "YES",
        "include": "YES",
        "description": "Caramel-like confection made by simmering goat's milk with sugar. Often is served out of a squeezable bottle and put on pancakes, <churros> or other deserts and sweets."
    },
    {
        "id": 14,
        "name": "Caldo",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Broth soup, usually offered as chicken or beef, but is also found in seafood restaurants as an appetizer based on shrimps or fish."
    },
    {
        "id": 15,
        "name": "Carne Asada",
        "category": "Dish",
        "hasphoto": true,
        "photoby": "Rick Gonzáles",
        "photolink": "https://www.flickr.com/photos/ricardogz10/19440743182/",
        "textReady": "YES",
        "include": "YES",
        "description": "Grilled flanksteak. It is also a way to refer to having a barbecue. "
    },
    {
        "id": 16,
        "name": "Carnitas",
        "category": "Dish",
        "hasphoto": true,
        "photoby": "Mike McCune",
        "photolink": "https://www.flickr.com/photos/mccun934/2904750647/in/photolist-5qFBaH-WAcRn-4SFVfP-8xu6C7-4SLax7-75bENd-75bEMS-2jP1n-5TWfA1-nDEjL-iamnPe-9nbGry-5oYs6o-jLNami-9kAWBD-CiLAk-dFRsfy-aVg1J4-2Fj5b4-dCrjj3-9n8DNz-9Fq9ab-vcUtV-MHDci-a4u6oA-7fZov2-76kQDm-51L81U-7XfLSR-r7gbxC-6PNdxU-4ifCp1-84SS9u-exg8Vf-ATv7d-k3vZF-6rEas1-4kvdD-96bMKD-dbnm9F-a4rfHT-pdjgJw-dbnoCL-pRBEbV-687djo-6i2i28-dKMZfo-ATvty-dbnoEy-8ToaQ6",
        "textReady": "YES",
        "include": "YES",
        "description": "Carnitas are made by braising or simmering pork in oil until tender, the result is very tender and juicy meat, which is then typically served on <tacos+taco> topped with coriander (<cilantro>), onion and of course, <salsa>."
    },
    {
        "id": 17,
        "name": "Cecina",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Cecina is usually of two kinds: Beef - Thinly cut sheets of salted, marinated and dried beef. And Pork - a cut that is pounded thin and coated with chili pepper. Both are usually served as <taco> fillings."
    },
    {
        "id": 18,
        "name": "Ceviche",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Seafood cooked by marinating in lime juice, mixed with tomatoes, onions, chili, and at times, avocado. Shrimp, fish and squid or a combination are commonly offered."
    },
    {
        "id": 19,
        "name": "Chapulines",
        "category": "Snack",
        "hasphoto": true,
        "photoby": "Enrique Vázquez",
        "photolink": "https://www.flickr.com/photos/16989146@N06/23515366233/in/photolist-BPYp7R-2tA6ss-ts1dC-abboHv-dzgfCz-4iLQX6-6ZwiDy-ainwGW-7isoAJ-fc5v6N-82fRY6-7Ups7G-9NLqP1-5mgbeh-vNA8bm-5mgbqL-ir8NM-4igYj9-ir9wA-zygA2s-zBsKRx-eW2gC8-8uCpiK-58iU8N-5zhqVA-68fKf2-68jXMm-s2ajea-s3Vcb1-kjHoD-bHQLpR-6ZdpVs-D87Sa1-bCuH-58iZsQ-9AUR1b-6Z9oiK-2tA7NE-8iMSS3-nggPJG-Ckib6D-aeQxv2-d6Mfqj-5Zev6m-2tvKYa-nR3BR4-5u71Xr-dRvVFz-7j4gKp-eWobV1",
        "textReady": "YES",
        "include": "YES",
        "description": "Fried grasshoppers. Often fried with chili, lime and other condiments. Used as a topping for many Oaxacan dishes or just as snacks."
    },
    {
        "id": 21,
        "name": "Chayote",
        "category": "Vegetable",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "A native Mexican vegetable, which taste mostly resembles squash."
    },
    {
        "id": 112,
        "name": "Chicharrón",
        "category": "Snack",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Fried crispy pork rinds. These tasty snacks are often used in food as well, either in soups or stews, or bathed in <salsa+salsa> and served in <tacos+taco>."
    },
    {
        "id": 113,
        "name": "Chicharrón de Queso",
        "category": "Snack",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Crispy crust of cheese. It is made by frying a thin layer of cheese on a pan until it becomes crispy. Makes for a great snack, if you're into cheese that is! "
    },
    {
        "id": 22,
        "name": "Chicharrones",
        "category": "Snack",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Chicharrones are a crisp snack made of wheat flour. They are fried in oil until puffy and you can find them in different shapes. Do not mistake these \"fake\" snacks for the real <chicharrón> (pork rinds)."
    },
    {
        "id": 23,
        "name": "Chilaquiles",
        "category": "Breakfast",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Crunchy tortilla chips (<totopos>) covered in a red or green <salsa>. Served topped with cream, fresh cheese and chicken or a fried egg on top."
    },
    {
        "id": 24,
        "name": "Chile Relleno",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Roasted and peeled <poblano pepper+poblano> stuffed with cheese, dipped in an egg white batter, and fried. Often served with a red sauce. "
    },
    {
        "id": 25,
        "name": "Chiles en Nogada",
        "category": "Dish",
        "hasphoto": true,
        "photoby": "Arturo Sánchez",
        "photolink": "https://www.flickr.com/photos/arku/231838998/",
        "textReady": "YES",
        "include": "YES",
        "description": "Poblano chili pepper stuffed with ground meats, spices, raisins or other chopped fruits, topped with a walnut cream sauce and pomegranate seeds, and served at room temperature. This is a classic Mexican dish that is often served in September around Mexican Independence Day."
    },
    {
        "id": 26,
        "name": "Chilorio",
        "category": "Dish",
        "include": "NO",
        "description": "A meat filling from northern Mexico (Culiacan, Sinaloa) made with boiled, shredded pork that's fried with ground chiles and spices. "
    },
    {
        "id": 27,
        "name": "Chipotle",
        "category": "Chili",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Dried, smoked <jalapeño chili+jalapeño>. Used for <salsas+salsa> and marinades. Often very spicy."
    },
    {
        "id": 28,
        "name": "Chorizo",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Fresh, highly seasoned sausage flavored with chilis and spices. Scrambled eggs with chorizo is a popular breakfast."
    },
    {
        "id": 29,
        "name": "Chuleta",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Pork chops"
    },
    {
        "id": 123,
        "name": "Churros",
        "category": "Snack",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Churros are fried-dough pastry sticks that are rolled in sugar. If you are feeling like going all in, you can sometimes get them filled with chocolate sauce or <cajeta>. YUM!"
    },
    {
        "id": 30,
        "name": "Cilantro",
        "category": "Spice",
        "hasphoto": true,
        "photoby": "Forest and Kim Starr",
        "photolink": "https://www.flickr.com/photos/starr-environmental/24264047034/in/photolist-CY8zQw-8ixVUB-4XL8zS-8ixWcp-8ixVRK-8ixVMr-8ixW1T-8ixWmM-8ixW8M-8ixWsF-7EFsqG-6gnTEQ-aMH5jF-h7oyk-k8NqsB-d2fN35-t1MrP-5DHPzc-cAWjcy-cAWjj9-nETk6-ezdz75-8Lg4w6-sAMGY-btC1Ko-ekriJ5-6Nsnqo-9EN4kM-2HntQM-rYK4BM-9dXBQ-6giHHB-9QvwFY-dzYwJq-2mjfwp-btC1NQ-7VDehn-cAWj2S-68uL4P-6giEXF-D27KnR-8nrhHx-7JAL2Z-Dq2kCV-aQJbhT-6giGXV-aqh8eu-5PLPWd-JW1b6-6gnQnQ",
        "textReady": "YES",
        "include": "YES",
        "description": "Coriander. A herb used all over Mexico for food seasoning, sauces and in <guacamole>."
    },
    {
        "id": 31,
        "name": "Cochinita Pibil",
        "category": "Dish",
        "hasphoto": true,
        "photoby": "REBRAB",
        "photolink": "https://www.flickr.com/photos/29517551@N05/5078509265/",
        "textReady": "YES",
        "include": "YES",
        "description": "Slow-roasted pork dish that originates from Yucatán. The pork is marinated in orange juice, spiced with <achiote>/<annato seeds+annato> and roasted wrapped in banana leaves to keep juicy and tender. Served in <tacos+taco> or <tortas+torta>."
    },
    {
        "id": 32,
        "name": "Comida Corrida",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Literally means food on the run. Comida corrida refers to the large meal eaten at lunch time, which includes soup, a main course and a dessert. Most restaurants will have a \"menú del día\" (menu of the day) allowing you a choice of 2-3 main courses. This is how many Mexicans get their main meal during weekdays and it is a cheap option for a good home cooked-style meal."
    },
    {
        "id": 34,
        "name": "Costillas",
        "category": "Dish",
        "textReady": "YES",
        "include": "NO",
        "description": "Ribs, either of beef (most common when it only says costilla on the menu) or of pork. When ordered as a <taco>, costilla is usually boneless and flattened to make it easy to eat as a taco. "
    },
    {
        "id": 35,
        "name": "Cotija",
        "category": "Cheese",
        "textReady": "NO",
        "include": "NO",
        "description": "An aged, crumbly white cheese. Commonly seen as topping on <elote>."
    },
    {
        "id": 36,
        "name": "Elote",
        "category": "Vegetable",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Cooked corn on the cob. Typically sold in the street as a snack with mayonnaise, fresh cheese, chili and lime."
    },
    {
        "id": 37,
        "name": "Empanadas",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Pastry dough stuffed with a filling, folded over into a crescent shape, and baked. Fillings vary but may include beef, corn, cheese, spinach, chicken and potatoes. This is originally an Argentinian invention, but they are very popular in Mexico too."
    },
    {
        "id": 38,
        "name": "Enchiladas",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Corn <tortillas+tortilla> are quickly fried in oil, filled with meat or cheese and rolled in <salsa>. The rolls may then be covered with additional salsa, cheese and creme."
    },
    {
        "id": 120,
        "name": "Enfrijoladas",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Corn <tortillas+tortilla> filled with meat or cheese, bathed in a refried bean sauce and topped with cream and fresh cheese."
    },
    {
        "id": 118,
        "name": "Enmoladas",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Corn <tortillas+tortilla> filled with meat or cheese, bathed in <mole> and topped with cream and fresh cheese."
    },
    {
        "id": 39,
        "name": "Epazote",
        "category": "Spice",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "A wild herb that grows all over North America. Used to flavor soups and stews."
    },
    {
        "id": 40,
        "name": "Escabeche",
        "category": "Snack",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Vegetables pickled in vinegar, oil and herbs. <Jalapeño peppers+jalapeño>, carrots, onions and cauliflower are commonly used. "
    },
    {
        "id": 41,
        "name": "Esquites",
        "category": "Snack",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "A corn based snack made of cooked corn kernels served in a plastic cup with your choice of toppings: mayonnaise, grated cheese, chili powder, lime juice and salt."
    },
    {
        "id": 42,
        "name": "Flan",
        "category": "Dessert",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Rich custard dessert made with condensed and evaporated milk, and covered with a soft caramel topping. Similar to crème brûlée, but without the crisp caramel topping."
    },
    {
        "id": 43,
        "name": "Flautas",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "<Tortillas+tortilla> rolled with different fillings (most common are shredded beef, chicken or potato), fried until crispy and then topped with lettuce, cream, fresh cheese and <salsa>."
    },
    {
        "id": 122,
        "name": "Flor de Calabaza",
        "category": "Vegetable",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Squash blossom. It is used for soups, in <quesadillas+quesadilla> and deep fried stuffed with meat or cheese. "
    },
    {
        "id": 44,
        "name": "Frijoles",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Beans (usually kidney, bayo, pinto or black)."
    },
    {
        "id": 45,
        "name": "Frijoles Charros",
        "category": "Dish",
        "textReady": "YES",
        "include": "NO",
        "description": "Pinto bean stew with bits of pork or bacon, spices and vegetables. "
    },
    {
        "id": 46,
        "name": "Gordita",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Thick corn dough (masa) shaped like a small pita. It is filled with a <guisado>, often <chicharrón>, and then cooked on a griddle."
    },
    {
        "id": 47,
        "name": "Guacamole",
        "category": "Snack",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Mashed avocado, often mixed with tomatoes, onions, coriander (<cilantro>), chili, garlic and lime juice. May be served as a dip with tortilla chips (<totopos>) or as a garnish with a meal."
    },
    {
        "id": 48,
        "name": "Guajillo",
        "category": "Chili",
        "hasphoto": true,
        "photoby": "atlnav",
        "photolink": "https://www.flickr.com/photos/atlnav/7377689510/in/photolist-ceWA4h-8pN7eo-82vmWg-7rrMdi-82UqUh-8pJVsc-6nQyCk-8VxBjz-cRrEDd-o55FLF-nMAeWF-byYTVq-ceTKQL-ckpwhu-ceWACL-dCZfBR-bkXTtc-dERSug-ceWBd7-dMhkiS-dMbN2v-ceWBxm-5zqKHo-dFxWet-9arZDf-7rvHXJ-gyCGMk-7rrMyP-9arYWY-72BRX-7zFJ9f-dBq9r6-562Wx9-dERTE8-mSc6X2-ceWAWq-4ErCun-8Pcg9R-dBvuPf-8PcieM-58jamb-8mJfYb-qyejZ5-9xtN1A-ckpwGj-4K99ma-sbvZxz-3YYmyb-abfPhH-9xqYv3",
        "textReady": "YES",
        "include": "YES",
        "description": "Medium hot (2,500-5,000 scoville) dried chili used in many salsas and soups. Especially recognizable by its intense red color when used in foods. Guajillos are dried sol chilies."
    },
    {
        "id": 49,
        "name": "Guisado",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Literally it just means 'cooked', but it is used to refer to different kinds of stew dishes. You can find places that specialize in serving 'tacos de guisado', which are usually served directly from big clay pots."
    },
    {
        "id": 50,
        "name": "Gusanos de Maguey",
        "category": "Snack",
        "textReady": "YES",
        "include": "NO",
        "description": "Worms living in agave plants that are considered a delicacy when fried. Also found in bottles of <mezcal> to denote the particular type of agave plant."
    },
    {
        "id": 51,
        "name": "Habanero",
        "category": "Chili",
        "hasphoto": true,
        "photoby": "Rachel Wilder",
        "photolink": "https://www.flickr.com/photos/rachel_wildphotography/6320721303/in/photolist-aCxmev-5hBWvn-5hBWjV-6qyg2-nAPqL-7GkgDf-5u86GK-5u86Lv-9StcAi-5DH4J-35k1N-rQBg58-8DuMFT-8DxTxJ-8DuMT2-8DuMWk-8x3Cxo-9fFFco-7Ggmj4-7Gkhfw-eeRwdG-6Z2wzQ-7GkhdE-bTd8Y-fQPCvM-5ioZFp-4QnKT3-3PmYK2-57MNdv-7fy3NU-4ABHRX-4JidNT-8ULZzM-4LW42d-fKRD7R-5d3ck-35jZf-cdFukQ-8UJEk6-35jXR-fKRSYc-8DxUiq-8HADDi-dgZt3G-8AFAjF-dgZsYA-8NKGpH-5p2t2v-8UMH7u-524ZwU",
        "textReady": "YES",
        "include": "YES",
        "description": "The habanero is the hottest of the Mexican chili peppers (100,000–350,000 scoville). It is very popular for <salsas+salsa> and has a very nice taste. So enjoy, but with care!"
    },
    {
        "id": 135,
        "name": "Hoja Santa",
        "category": "Spice",
        "hasphoto": true,
        "photoby": "Blancof",
        "photolink": "https://www.flickr.com/photos/blancof/14908774199/",
        "textReady": "YES",
        "include": "YES",
        "description": "Hoja Santa is a heart shaped leaf with a peppery taste that is very common in mexican cooking. It is rather big and can be used to wrap foods as well as used for stuffing. It is also an important ingredient in Mole Verde, green <mole>. The name Hoja Santa means \"sacred leaf\" and is also refered to as \"hierba santa\"."
    },
    {
        "id": 53,
        "name": "Horchata",
        "category": "Drink",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Refreshing beverage made of water, rice, cinnamon and sugar. It looks a bit like milk, and in some cases milk is added to the mix to add some richness to the taste. "
    },
    {
        "id": 54,
        "name": "Huaraches",
        "category": "Dish",
        "textReady": "YES",
        "include": "NO",
        "description": "Literally means sandals. A thick piece of masa dough about the shape and size of a sandal is fried and covered with refried beans, meat, lettuce, cheese and crema. "
    },
    {
        "id": 55,
        "name": "Huevos a la Mexicana",
        "category": "Breakfast",
        "hasphoto": true,
        "photoby": "Kurman Communications, Inc.",
        "photolink": "https://www.flickr.com/photos/kurmanphotos/23246406543/",
        "textReady": "YES",
        "include": "YES",
        "description": "Breakfast dish of scrambled eggs fried with tomatoes, onions and green chili (representing the red, white and green of the Mexican flag)."
    },
    {
        "id": 56,
        "name": "Huevos Rancheros",
        "category": "Breakfast",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Breakfast dish of tortillas fried, topped with fried eggs and covered in a red <salsa>. "
    },
    {
        "id": 57,
        "name": "Huitlacoche",
        "category": "Vegetable",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Mexican corn truffle. Fungus which grows on ears of corn. Considered a delicacy in Mexico, it is more expensive than the corn itself. Huitlacoche has an earthy, pungent flavor and is used to flavor soups, <tamales+tamal>, <quesadillas+quesadilla> and <enchiladas>, as well as other specialties."
    },
    {
        "id": 114,
        "name": "Jalapeño",
        "category": "Chili",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Mild to hot chili (1,000-25,000 scoville depending on cultivation and color) used a lot in the Mexican kitchen. Both stuffed, pickled, raw, in <salsas+salsa> and cooked in stews. The green is the most known jalapeño, but the red one is also famous for being smoked and dried under the name <Chipotle>."
    },
    {
        "id": 58,
        "name": "Jamaica",
        "category": "Drink",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "<Agua fresca> made by brewing water with hibiscus flowers. Some say it reminds them of pomegranate juice."
    },
    {
        "id": 59,
        "name": "Jícama",
        "category": "Vegetable",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "A crunchy, delicious white root, usually served sliced and sprinkled with lime and chili powder."
    },
    {
        "id": 117,
        "name": "Mamey",
        "category": "Fruit",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Very sweet fruit used for desserts, and even <aguas frescas+aguas fresca>. Don't let the boring light brown color fool you, the inside of the mamey is a wonderful orange-reddish color."
    },
    {
        "id": 62,
        "name": "Mezcal",
        "category": "Drink",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Like tequila, mezcal is an alcoholic beverage distilled from the agave plant, but the production process is different. It has a strong smoky flavor, which kinda makes sense considering the word 'mezcal' actually means cooked agave in Nahuatl. Mexicans generally consume mezcal straight, although sometimes you can get orange slices served with it."
    },
    {
        "id": 63,
        "name": "Michelada",
        "category": "Drink",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "A michelada is a beer drink and come in many variations. The most simple is lime juice and salt on the rim of the glass. But hot sauce, Worcestershire sauce, soy sauce, Maggi seasoning, and/or clamato juice can be added to the beer, and sometimes chili is added to the salt on the rim of the glass."
    },
    {
        "id": 64,
        "name": "Milanesa",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Pork or beef cutlet, lightly breaded and fried. It's a popular <torta> filling."
    },
    {
        "id": 65,
        "name": "Mojo de Ajo",
        "category": "Sauce",
        "include": "NO",
        "description": "Garlic sauce, often served over fish filets."
    },
    {
        "id": 66,
        "name": "Molcajete",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Bowl made of volcanic rock used for grinding or mashing foods. Often used to make <guacamole> and <salsas+salsa> but can also be used as a plate for serving sizzling dishes directly at the table."
    },
    {
        "id": 67,
        "name": "Mole",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Complex sauce made by mixing lots of spices and different ingredients. It has many variations, depending on regions. Ingredients may include unsweetened chocolate, chilies, spices, nuts, fruits and seeds. May be served over chicken, meat or <enchiladas>. "
    },
    {
        "id": 68,
        "name": "Molletes",
        "category": "Breakfast",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Toasted <bolillo> halves topped with warm refired beans (<frijoles>) and chihuahua cheese and grilled in the oven. It's served with <Pico de Gallo> and it's a popular Mexican breakfast."
    },
    {
        "id": 70,
        "name": "Nopales",
        "category": "Vegetable",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Nopales are cactus paddles. Once the spines are removed, they are delicious and used extensively in the Mexican kitchen, mostly as a side dish for <tacos+taco> or meat."
    },
    {
        "id": 71,
        "name": "Paleta",
        "category": "Dessert",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Ice popsicle usually made from fresh fruit. Paletas are made on a base of either water or milk, and can be bought from street vendors or in one of the many popular ice cream places called Paleterias."
    },
    {
        "id": 72,
        "name": "Pambazo",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Pambazo is a special bread dipped in a red <guajillo pepper+guajillo> sauce and filled with potato, <chorizo>, lettuce and cream."
    },
    {
        "id": 61,
        "name": "Pancita / Menudo",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Tripe soup, considered a hangover cure in Mexico. "
    },
    {
        "id": 73,
        "name": "Panela",
        "category": "Cheese",
        "include": "NO",
        "description": "Queso Panela is a fresh, semi-soft cheese made from whole unmilled cheese curds."
    },
    {
        "id": 129,
        "name": "Papas",
        "category": "Snack",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Papas are potato chips. Sliced fresh and cooked in huge oil baths on the street and served with chili and lime!"
    },
    {
        "id": 76,
        "name": "Pasilla",
        "category": "Chili",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Long, thin, almost black chile. Often used for salsas or as topping on <sopa de tortilla>"
    },
    {
        "id": 77,
        "name": "Pastor",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Thin slices of pork marinated in <achiote> and roasted on a spit. The pork is sliced off the spit and served in a <taco> with onions, coriander (<cilantro>) and pineapple."
    },
    {
        "id": 78,
        "name": "Pepitas",
        "category": "Snack",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Pumpkin seeds, unhulled. An ingredient for <mole> verde and <pipian>."
    },
    {
        "id": 133,
        "name": "Picadillo",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "A typical beef stew made at home, it's a popular '<guisado>' for <tacos+taco> and even <quesadillas+quesadilla>. The stew is made with ground beef, peas, diced carrots and potatoes cooked in a tomato-chili sauce. "
    },
    {
        "id": 79,
        "name": "Pico de Gallo",
        "category": "Sauce",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "A relish of raw diced tomatoes and onions, with coriander (<cilantro>) and chili peppers. Also referred to as <salsa> Mexicana."
    },
    {
        "id": 111,
        "name": "Piloncillo",
        "category": "Spice",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Unrefined whole cane sugar."
    },
    {
        "id": 80,
        "name": "Pipián",
        "category": "Sauce",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Pumpkin seed (<pepitas>) sauce often served over chicken, turkey or fish. You can find it either Red or Green. "
    },
    {
        "id": 107,
        "name": "Plátanos Machos",
        "category": "Fruit",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "The plátano macho (Plantain in english) is a species of wild banana. It is a larger and 'less sweet' banana than normal. They are typically used for deep frying and eaten as a desert, but you can also find them as a savory dish: Plátano macho 'patties' filled with cheese."
    },
    {
        "id": 81,
        "name": "Poblano",
        "category": "Chili",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Dark green, rounded fresh chili used amongst many things for <chiles rellenos+Chile Relleno>. The poblano is also popular for sauces and as rajas in <tamales+tamal> or other dishes. Poblano is not always very spicy but has a very nice strong peppery flavor."
    },
    {
        "id": 83,
        "name": "Pozole",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Soup made of a special type of corn, spices and either pork or chicken. You can find it in clear, green or red versions. The pozole rojo (red) becomes red from <guajillo chilies+guajillo> being added to the stock."
    },
    {
        "id": 84,
        "name": "Pulque",
        "category": "Drink",
        "hasphoto": true,
        "photoby": "Eduardo López Medina",
        "photolink": "https://www.flickr.com/photos/98747213@N08/9255760607/",
        "textReady": "YES",
        "include": "YES",
        "description": "Fermented beverage using agave. It has the color of milk, somewhat viscous consistency and a sour yeast-like taste. In some places you can find pulque mixed with different fruit flavors."
    },
    {
        "id": 85,
        "name": "Quesadilla",
        "category": "Breakfast",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Tortilla filled with cheese, folded over and pressed flat. Heated over a griddle until cheese melts. Other ingredients may be added to the cheese, such as mushrooms, rajas or <flor de calabaza>. In most street markets you will find a stand making quesadillas."
    },
    {
        "id": 86,
        "name": "Queso Fundido",
        "category": "Dish",
        "textReady": "YES",
        "include": "NO",
        "description": "Mexican cheese fondue. May be served with mushrooms, roasted <poblano peppers+poblano> or <chorizo>. The fondue is usually spooned onto <tortillas+tortilla> and eaten as an appetizer."
    },
    {
        "id": 115,
        "name": "Queso Oaxaca / Quesillo",
        "category": "Cheese",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "A mild stringy cheese used for <quesadillas+quesadilla> and in many local Oaxacan dishes. The taste of quesillo is mostly compared to mozarella."
    },
    {
        "id": 87,
        "name": "Rajas",
        "category": "Dish",
        "textReady": "YES",
        "include": "NO",
        "description": "Mostly, rajas means roasted, peeled, and sliced <Poblano peppers+Poblano>, but it can also just refer to slices of chili, so it can be worth asking which chili is used, especially if you don't love spicy :)"
    },
    {
        "id": 88,
        "name": "Raspado",
        "category": "Dessert",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Snow cone, shaved or crushed ice flavored with a fruity juice or syrup."
    },
    {
        "id": 89,
        "name": "Rompope",
        "category": "Drink",
        "hasphoto": true,
        "textReady": "NO",
        "include": "NO",
        "description": "Sweet, thick alcoholic beverage with vanilla and egg."
    },
    {
        "id": 131,
        "name": "Salpicón",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Salpicón is a kind of salad dish, made of slow-cooked shredded beef meat, lettuce, tomatoes, coriander (<cilantro>), onion and garnished with avocado and radishes. It's often used as topping for <tostadas+tostada>. "
    },
    {
        "id": 134,
        "name": "Salsa",
        "category": "Sauce",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Salsa is a tomato-based sauce that is mixed with onions, chilies, coriander and various spices. You can find them in different colors, depending on the ingredients, for example Salsa Verde is made with <tomatillos+tomatillo> ('green tomatoes'). They are typically spicy, ranging from mild to extremely hot. Salsas were traditionally made using a <molcajete>, although blenders are now more commonly used. "
    },
    {
        "id": 92,
        "name": "Sangrita",
        "category": "Drink",
        "hasphoto": true,
        "photoby": "Lucian Savluc",
        "photolink": "https://www.flickr.com/photos/luciansavluc/4415554028/",
        "textReady": "YES",
        "include": "YES",
        "description": "A favorite accompaniment to tequila, made from orange juice, grenadine, chili powder and frequently tomato juice."
    },
    {
        "id": 93,
        "name": "Serrano",
        "category": "Chili",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "One of Mexico's favorite chilies. Small, green and very hot (10,000-25,000 scoville). It's one of the most used chilies and you'll find it mainly in <salsas+salsa>."
    },
    {
        "id": 132,
        "name": "Sincronizada",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "A sincronizada is made by placing cheese, ham, and sometimes refried beans (<frijoles>) or <chorizo>, between two flour <tortillas+tortilla> and then frying it on the pan. It makes for a good breakfast or lunch."
    },
    {
        "id": 119,
        "name": "Sopa de Frijol",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Soup of beans with added flavors from meat and/or herbs. Usually topped with cream and fresh cheese, and sometimes tortilla chips."
    },
    {
        "id": 106,
        "name": "Sopa de Tortilla / Azteca",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Sopa de Tortilla is a tomato broth with a touch of <chile de árbol+árbol>. The soup comes with lots of crispy tortilla chips, avocado, cheese, cream and <chile pasilla+pasilla>. It is also known as Sopa Azteca."
    },
    {
        "id": 94,
        "name": "Sopes",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Thick circular corn dough (masa) fried and topped with refried beans (<frijoles>), shredded meat, lettuce, cheese and cream. Sopes generally have a rim to hold the ingredients in."
    },
    {
        "id": 128,
        "name": "Suadero",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Thin cut of beef from between the belly and the leg of the cow. It has a smooth texture and is typically fried in a stew and served in <tacos+taco>."
    },
    {
        "id": 95,
        "name": "Taco",
        "category": "Dish",
        "hasphoto": true,
        "photoby": "Stuart Spivack",
        "photolink": "https://www.flickr.com/photos/stuart_spivack/4555674453/",
        "textReady": "YES",
        "include": "YES",
        "description": "A soft fried corn <tortilla> filled with all kinds of meats, cheese and/or vegetables. <Salsa> and lime are always present as toppings when tacos are served."
    },
    {
        "id": 97,
        "name": "Tacos de Canasta",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Soft <tacos+taco> layered and stored in a basket, typically to be sold on the street. Mostly, there are three choices of canasta tacos; papas (potatoes), <chicharrón> (pork rinds) and <frijoles> (beans)."
    },
    {
        "id": 98,
        "name": "Tamal",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "The tamal is an ancient Mexican classic. It's made from corn dough (masa) filled with meat, vegetables, salsa and/or mole, wrapped in either corn husk or banana leaf (tamal Oaxaqueño) and steamed. Tamales are a popular street food and are sold from bikes and carts all over, especially in the morning. Tamales also come as desserts in sweet versions, stuffed with fruits or chocolate."
    },
    {
        "id": 99,
        "name": "Tamarindo",
        "category": "Fruit",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "The sweet tamarind fruit is used in dried fruit snacks, <salsas+salsa> and in <Agua Fresca>. Tamarind is also a popular ingredient for candy."
    },
    {
        "id": 100,
        "name": "Tampiqueña",
        "category": "Dish",
        "include": "NO",
        "description": "Grilled steak served with enchiladas and beans. Comes from the northern Mexican state of Tampico."
    },
    {
        "id": 108,
        "name": "Tepache",
        "category": "Drink",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Tepache is made from fermented pineapple rinds. Although it is a fermentation process, tepache has almost no alcohol."
    },
    {
        "id": 102,
        "name": "Tinga",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Shredded meat (pork, beef or chicken) cooked in a sauce of tomato, onion, garlic and spices."
    },
    {
        "id": 130,
        "name": "Tlacoyo",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "An oval-shaped \"bread\" of fried corn dough, fatter than fresh corn tortillas and stuffed with ground beans, cheese, <chicharrón> or other ingredients."
    },
    {
        "id": 109,
        "name": "Tomatillo",
        "category": "Fruit",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "The tomatillo (no, it is not a tomato) plays a very important part in the Mexican kitchen as they are the key ingredient to the ever-present <salsa> verde (green salsa). Tomatillos are historically more used than the tomato in Mexico and dates back to the Aztec era."
    },
    {
        "id": 103,
        "name": "Torta",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Mexican sandwich made of <bolillo rolls+bolillo>, may be filled with refried beans (<frijoles>), shredded or sliced meats, lettuce, eggs or cheese. A popular breakfast is the self-explanatory Torta de <Tamal>."
    },
    {
        "id": 125,
        "name": "Tortilla",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "The tortilla is evidently the most important single part of the Mexican kitchen. Tortillas are the base of <tacos+taco>, they serve as complement for many dishes. Tortillas can be made from either corn or wheat, although the corn tortilla is the most common. "
    },
    {
        "id": 104,
        "name": "Tostada",
        "category": "Dish",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Fried and crispy corn <tortilla>. When on a menu, it may be topped with different ingredients or just the basic version: refried beans (<frijoles>), meat, lettuce, cheese, and/or creme. "
    },
    {
        "id": 110,
        "name": "Totopos",
        "category": "Snack",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "Corn <tortilla> cut in triangles and fried crispy. Mostly used for snacks along with <salsas+salsa> or <guacamole> or as the foundation of <chilaquiles>."
    },
    {
        "id": 126,
        "name": "Tunas",
        "category": "Fruit",
        "hasphoto": true,
        "textReady": "YES",
        "include": "YES",
        "description": "The fruit of the <nopal> cactus. They come in green and red and are used for eating raw, as desserts or sometimes in <Agua Fresca>. Also known as \"prickly pear\" in English. "
    }
];
