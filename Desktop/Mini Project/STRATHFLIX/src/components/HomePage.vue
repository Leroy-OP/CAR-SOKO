<script>
  export default {
    data() {
      return {
          image: 'public/Images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg',
          url: 'https://www.vuejs.org/',
          stockDetails : [
          {
                  itemNumber: 1,
                  itemName : "Mercedes G-wagon",
                  itemPrice : 5000000,
                  itemQuantity : 30,
                  itemImage: '/public/Images/G - Wagon.jpeg',
                  description:'If you are looking for luxury compatible in all environments then search no more'
            },
            {
                  itemNumber: 2,
                  itemName : "Mercedes Gle-Coupe",
                  itemPrice : 10000000,
                  itemQuantity : 4,
                  itemImage: '/public/Images/2024 Mercedes-Benz GLE 63s Coupe.jpeg',
                  description:'With this model you move to your work place in elegance'
            },
           {
                   itemNumber: 3,
                   itemName : "BMW x6",
                   itemPrice : 7000000,
                   itemQuantity : 10,
                   itemImage: '/public/Images/download (1).jpeg',
                   description:'Impress your work mates and collegues in late night company dinners'
               },
               {
                   itemNumber: 4,
                   itemName : "Audi Q5",
                   itemPrice : 800000,
                   itemQuantity : 30,
                   itemImage: '/public/Images/Audi Q5 45 TFSI quattro Technology 2021- ₹63 lakh _ Real-life review.jpeg',
                  description:'You will never be disappointed by the speed perfomance of this vehicle '
               }, 
               {
                   itemNumber: 5,
                   itemName : "Audi q7",
                   itemPrice : 1100000,
                   itemQuantity : 30,
                   itemImage: '/public/Images/download (2).jpeg',
                   description:'This vehicle is flexible as it complements perfomance with practicability'
               },
               {
                   itemNumber: 6,
                   itemName : "Range rover sport",
                   itemPrice : 6500000,
                   itemQuantity : 30,
                   itemImage: '/public/Images/2023 Range Rover Sport in Borasco Grey, Perfect Specs !.jpeg',
                  description:'A vehicle that prompts other drivers to drive away in shame due to its solid and shouting aura'
               },
               {
                   itemNumber: 7,
                   itemName : "Landrover Discovery",
                   itemPrice : 8050000,
                   itemQuantity : 30,
                   itemImage: '/public/Images/2021 Land Rover Discovery HSE, White and Black Specs !.jpeg',
                   description:'This vehicle allows you to go for camping with family and friends as it has big room'
               },
               {
                itemNumber: 8,
                   itemName : "Landrover Defender",
                   itemPrice : 9000000,
                   itemQuantity : 30,
                   itemImage: '/public/Images/download (3).jpeg',
                   description:'In Candy Crush you get to experience an explotion of flavours'
               },
              {
                itemNumber: 9,
                   itemName : "Bentley",
                   itemPrice : 50000000,
                   itemQuantity : 50,
                   itemImage: '/public/Images/download (4).jpeg',
                  description:'Musicians and celebrities come gather here!'
              },
              {
                itemNumber: 10,
                   itemName : "Lamborghini Urus",
                   itemPrice : 55000000,
                   itemQuantity : 30,
                   itemImage: '/public/Images/download (5).jpeg',
                 description:'Sportsmen would enter their training facilities with respect with this italian machine'
              },
              {
                itemNumber: 11,
                   itemName : "Rolls Royce",
                   itemPrice : 12000000,
                   itemQuantity : 30,
                   itemImage: '/public/Images/rolls royce phantom chanel - luxury car.jpeg',
                 description:'Great all time CEOs would travel in pomp and glory with this luxurious model'
              },
              {
                itemNumber: 12,
                   itemName : "Ford Ranger Predator",
                   itemPrice : 900000,
                   itemQuantity : 30,
                   itemImage: '/public/Images/Grey 2023 Ford Ranger Predator Widebody Build.jpeg',
                 description:'Engineers and architects this wel suites you!'
              },
              {
                itemNumber: 13,
                   itemName : "Mercedes E Class",
                   itemPrice : 6000000,
                   itemQuantity : 30,
                   itemImage: '/public/Images/Blue Mercedes.jpeg',
                 description:'Content creators and social media personalities here is a vibe.'
              },
              {
                itemNumber: 14,
                   itemName : "Mazda Cx5",
                   itemPrice : 750000,
                   itemQuantity : 30,
                   itemImage: '/public/Images/Mazda CX-5.jpeg',
                 description:'Gentlemen,your girlfriends would blush more if you gift them this power SUV'
              },
              {
                itemNumber: 15,
                   itemName : "Porsche Cayenne",
                   itemPrice : 4000000,
                   itemQuantity : 30,
                   itemImage: '/public/Images/Porsche Cayenne Collective on Instagram_ _Cayenne Turbo Coupé in Nogaro Blue 📸 @paulmillerporsche_.jpeg',
                 description:'The Gen Z teenage dream model'
              },
              {
                itemNumber: 16,
                   itemName : "Jeep Wrangler",
                   itemPrice : 3000000,
                   itemQuantity : 30,
                   itemImage: '/public/Images/download (6).jpeg',
                 description:'Traverse the rugged terrains with majesty in this invincible piece of machinery'
              },
              {
                itemNumber: 17,
                   itemName : "Landcruiser prado",
                   itemPrice : 5500000,
                   itemQuantity : 30,
                   itemImage: '/public/Images/download (7).jpeg',
                 description:'This luxurious piece of model would fit well in a presidential motorcade'
              },
              {
                itemNumber: 18,
                   itemName : "Lexus",
                   itemPrice : 12000000,
                   itemQuantity : 30,
                   itemImage: '/public/Images/Lexus lx570 black.jpeg',
                 description:'Even the head of state himself has this as one oh his favourites!'
              },
              {
                itemNumber: 19,
                   itemName : "Mercedes Benz Viano",
                   itemPrice : 13000000,
                   itemQuantity : 30,
                   itemImage: '/public/Images/Mercedes Benz #W477 #vclass #Sprinter #Metris #Viano  #Business #MercedesBenz.jpeg',
                 description:'Detectives and National Inteligent personnel could work well with such piece of armoured and well equipped machinery'
              },
              {
                itemNumber: 20,
                   itemName : "Mazda Axella",
                   itemPrice : 900000,
                   itemQuantity : 30,
                   itemImage: '/public/Images/download (8).jpeg',
                 description:'First time car buyers this vehicle well suites you as it is styling and high performing yet cost efficient'
              },
          ],
        }
    },

    methods() {
      // we shall add our functions here
    },

    computed(){
      //we use this when working with forms
    }
  }
</script>

<template>
 <div id="maincard">
<v-card>  

  <v-carousel show-arrows="hover">
  <v-carousel-item
    src="public/Images/G - Wagon.jpeg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="public/Images/download (6).jpeg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="public/Images/2021 Land Rover Discovery HSE, White and Black Specs !.jpeg"
    cover
  ></v-carousel-item>
</v-carousel>
</v-card>
<v-card align="center">
        <v-card-item>
          <v-card-title>Welcome to CAR SOKO</v-card-title>

          <v-card-subtitle>Drive out of our shop with smiles and pride</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Welcome to CAR SOKO, where your dream ride awaits. Explore our curated selection of premium vehicles and discover the perfect blend of luxury, performance, and reliability. Start your journey with us today and drive home in style

        </v-card-text>
      </v-card>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <h3 class="text-center">Reach out to us</h3>
      <v-divider></v-divider>
      <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Leleito Glazier"
        text="Email address: leleitoglazier@carsoko.org"
        title="Sales Executive"
        
      ></v-card>

      <div class="text-center text-caption">For queries on vehicle purchases</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          Test Drive Facilitator
        </template>

        <template v-slot:subtitle>
          Joe Woods
        </template>

        <template v-slot:text>
          Email address: joewoods49@carsoko.org<br> Contact card: +49199866435
        </template>
      </v-card>

      <div class="text-center text-caption">For test drives and queries</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>Automative Engineer</v-card-title>

          <v-card-subtitle>Jane Rose</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Email: janerose@carsoko.org<br> Contact: +49199866553
                </v-card-text>
      </v-card>

      <div class="text-center text-caption">For Custom vehicles</div>
    </v-col>
  </v-row>
</div>
    </template>
 