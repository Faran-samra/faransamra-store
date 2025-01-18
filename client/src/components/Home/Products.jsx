const Products = [
    { 
        id: 'category1',
        url: 'https://static.wixstatic.com/media/84aee5_060d4cbc0429409c9fb4ce04b5c949bc~mv2.jpg',
        title: {
            shortTitle: 'Top categories in Kitchen Appliances',
            longTitle: 'Explore the best kitchen appliances available today'
        }, 
        description: 'Find everything from blenders to coffee makers that can make your cooking easier and faster.',
        tagline: 'Best Selection!',
        subcategories: [
            {
                id: 'sub1_1',
                name: 'Blenders',
                price: '$49.99',
                rating: 4.5,
                description: 'Crock-Pot 7-Quart Slow Cooker, Portable Programmable with Timer, Locking Lid, Stainless Steel; an Essential Kitchen Appliance, Perfect for Families and Gatherings',
                imageUrl: 'https://m.media-amazon.com/images/I/61T3OnQfLQL._AC_UY327_FMwebp_QL65_.jpg',
                reviews: 320
            },
            {
                id: 'sub1_2',
                name: 'Coffee Makers',
                price: '$89.99',
                rating: 4.7,
                description: 'Instant Pot Duo 7-in-1 Mini Electric Pressure Cooker, Slow Rice Cooker, Steamer, Sauté, Yogurt Maker, Warmer & Sterilizer, Includes Free App with over 1900 Recipes, Stainless Steel, 3 Quart',
                imageUrl: 'https://m.media-amazon.com/images/I/71LmN7FsaZL._AC_SL1500_.jpg',
                reviews: 510
            },
            {
                id: 'sub1_3',
                name: 'Toasters',
                price: '$29.99',
                rating: 4.3,
                description: 'Crock-Pot 7 Quart Oval Manual Slow Cooker, Stainless Steel (SCV700-S-BR), Versatile Cookware for Large Families or Entertaining',
                imageUrl: 'https://m.media-amazon.com/images/I/81s15a8-lGL._AC_SX679_.jpg',
                reviews: 240
            },
            {
                id: 'sub1_4',
                name: 'Microwaves',
                price: '$129.99',
                rating: 4.6,
                description: 'AROMA Digital Rice Cooker, 4-Cup (Uncooked) / 8-Cup (Cooked), Steamer, Grain Cooker, Multicooker, 2 Qt, Stainless Steel Exterior, ARC-914SBD',
                imageUrl: 'https://m.media-amazon.com/images/I/71-U1rX30iL._AC_SX679_.jpg',
                reviews: 280
            },
            {
                id: 'sub1_5',
                name: 'Air Fryers',
                price: '$79.99',
                rating: 4.8,
                description: 'HAWKINS Classic CL50 5-Liter New Improved Aluminum Pressure Cooker, Small, Silver',
                imageUrl: 'https://m.media-amazon.com/images/I/519aOqUZ0pL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
                reviews: 450
            },
            {
                id: 'sub1_6',
                name: 'Food Processors',
                price: '$99.99',
                rating: 4.4,
                description: 'Hawkins CB30 Hard Anodised Pressure Cooker, 3-Liter, Contura Black',
                imageUrl: 'https://m.media-amazon.com/images/I/61xsscK90-L._AC_SX679_.jpg',
                reviews: 380
            },
            {
                id: 'sub1_7',
                name: 'Juicers',
                price: '$59.99',
                rating: 4.2,
                description: 'Aroma Housewares Aroma 6-cup (cooked) 1.5 Qt. One Touch Rice Cooker, White (ARC-363NG), 6 cup cooked/ 3 cup uncook/ 1.5 Qt.',
                imageUrl: 'https://m.media-amazon.com/images/I/61m6eAej0ML._AC_SX679_.jpg',
                reviews: 210
            }
        ]
    },
    { 
        id: 'category2',
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_2x_EN._SY608_CB564799420_.jpg',
        title: {
            shortTitle: 'Gaming Accessories',
            longTitle: 'Level up your gaming experience with the latest accessories'
        },
        description: 'Discover gaming mice, keyboards, and more to enhance your gameplay.',
        tagline: 'Upgrade Now!',
        subcategories: [
            {
                id: 'sub2_1',
                name: 'Gaming Mice',
                price: '$39.99',
                rating: 4.6,
                description: 'BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs (Blue)',
                imageUrl: 'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY327_FMwebp_QL65_.jpg',
                reviews: 350
            },
            {
                id: 'sub2_2',
                name: 'Gaming Keyboards',
                price: '$59.99',
                rating: 4.7,
                description: 'Razer Basilisk V3 Customizable Ergonomic Gaming Mouse: Fastest Gaming Mouse Switch - Chroma RGB Lighting - 26K DPI Optical Sensor - 11 Programmable Buttons - HyperScroll Tilt Wheel - Classic Black',
                imageUrl: 'https://m.media-amazon.com/images/I/61AcT0ZuO3L._AC_UY327_FMwebp_QL65_.jpg',
                reviews: 450
            },
            {
                id: 'sub2_3',
                name: 'Gaming Headsets',
                price: '$79.99',
                rating: 4.8,
                description: 'SteelSeries New Arctis Nova 3 Multi-Platform Gaming Headset - Signature Arctis Sound - ClearCast Gen 2 Mic - PC, PS5/PS4, Xbox Series X|S, Switch, Mobile,Black',
                imageUrl: 'https://m.media-amazon.com/images/I/71tJLLp+x+L._AC_UY327_FMwebp_QL65_.jpg',
                reviews: 520
            },
            {
                id: 'sub2_4',
                name: 'Gaming Chairs',
                price: '$199.99',
                rating: 4.7,
                description: 'BestOffice High-Back Gaming Chair PC Office Chair Computer Racing Chair PU Desk Task Chair Ergonomic Executive Swivel Rolling Chair with Lumbar Support for Back Pain Women, Men,White',
                imageUrl: 'https://m.media-amazon.com/images/I/61t4mpabO+L._AC_SX679_.jpg',
                reviews: 320
            },
            {
                id: 'sub2_5',
                name: 'Game Controllers',
                price: '$49.99',
                rating: 4.5,
                description: 'Razer Ornata V3 X Gaming Keyboard: Low Profile Keys - Silent Membrane Switches - Spill Resistant - Chroma RGB Lighting - Ergonomic Wrist Rest - Snap Tap',
                imageUrl: 'https://m.media-amazon.com/images/I/61nKrd8BW+L._AC_SX679_.jpg',
                reviews: 410
            }
        ]
    },
    { 
        id: 'category3',
        url: 'https://people.com/thmb/RGzEDPpmkfdghoxPHSB0f_-gE7w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(2999x0:3001x2)/Levis-Jeans-Brooks-Sneakers-and-More-Amazon-Spring-Fashion-Deals-to-Shop-This-Weekend-Starting-at-19-tout-cca9b40ca4d14acba31aeaa9591ff6fa.jpg', 
        title: {
            shortTitle: 'Shop deals in Fashion',
            longTitle: 'Trendy and stylish fashion items just for you'
        }, 
        description: 'Stay fashionable with our latest collection at unbeatable prices.',
        tagline: 'Shop Now!',
        subcategories: [
            {
                id: 'sub3_1',
                name: 'Women’s Dresses',
                price: '$49.99',
                rating: 4.5,
                description: 'Lee Womens Legendary Mid Rise Straight Leg Jean',
                imageUrl: 'https://m.media-amazon.com/images/I/61TpnJB++XL._AC_SY741_.jpg',
                reviews: 220
            },
            {
                id: 'sub3_2',
                name: 'Men’s Shirts',
                price: '$39.99',
                rating: 4.6,
                description: 'Lee Mens Extreme Motion Slim Straight Jean',
                imageUrl: 'https://m.media-amazon.com/images/I/61TuIn7ch-L._AC_SY741_.jpg',
                reviews: 180
            },
            {
                id: 'sub3_3',
                name: 'Women’s Dresses',
                price: '$29.99',
                rating: 4.4,
                description: 'Aphratti Womens Short Sleeve Peter Pan Collar Cute Skater Dress Fit and Flare A-Line Casual Dresses',
                imageUrl: 'https://m.media-amazon.com/images/I/71K2MCERKyS._AC_SX569_.jpg',
                reviews: 150
            },
            {
                id: 'sub3_4',
                name: 'Women’s Dresses',
                price: '$19.99',
                rating: 4.3,
                description: 'Summer Dresses for Women Beach Boho Sleeveless Vintage Floral Flowy Pocket Tshirt Tank Sundresses',
                imageUrl: 'https://m.media-amazon.com/images/I/914Ps3uTAZL._AC_UL480_FMwebp_QL65_.jpg',
                reviews: 90
            }
        ]
    },
    { 
        id: 'category4',
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg',
        title: {
            shortTitle: 'Toys under $25',
            longTitle: 'Fun and educational toys for kids'
        },
        description: 'Find the perfect gift for your little ones without breaking the bank.',
        tagline: 'Grab Your Deals!',
        subcategories: [
            {
                id: 'sub4_1',
                name: 'Board Games',
                price: '$24.99',
                rating: 4.6,
                description: 'Transformers Toys Heroic Optimus Prime Action Figure - Timeless Large-Scale Figure, Changes into Toy Truck - Toys for Kids 6 and Up, 11-inch (Amazon Exclusive)',
                imageUrl: 'https://m.media-amazon.com/images/I/71uRENNFM4L._AC_SX679_.jpg',
                reviews: 130
            },
            {
                id: 'sub4_2',
                name: 'Action Figures',
                price: '$14.99',
                rating: 4.5,
                description: 'LEGO Classic Medium Creative Brick Box 10696 Building Toy Set - Featuring Storage, Includes Train, Car, and a Tiger Figure, and Playset for Kids, Boys, and Girls Ages 4-99',
                imageUrl: 'https://m.media-amazon.com/images/I/8160QjpuoOL._AC_SX679_.jpg',
                reviews: 170
            },
            {
                id: 'sub4_3',
                name: 'Educational Toys',
                price: '$19.99',
                rating: 4.7,
                description: 'VTech Pop-a-Balls Push & Pop Bulldozer,Yellow',
                imageUrl: 'https://m.media-amazon.com/images/I/61v9b1kHjiL._AC_SX679_.jpg',
                reviews: 210
            }
        ]
    },
    {
        id: 'category5',
        url: 'https://watchcentre.pk/wp-content/uploads/2022/04/curren-8356-black-stainless-steel-mens-watch.jpg',
        title: {
          shortTitle: 'Most-loved Watches',
          longTitle: 'Stylish watches for every occasion'
        },
        description: 'Explore our collection of watches that everyone loves.',
        tagline: 'Don’t Miss Out!',
        subcategories: [
          {
            id: 'subcat5_1',
            name: 'Luxury Watches',
            price: '$2499.99',
            rating: 4.8,
            description: 'Fossil Copeland Mens Watch with Slim Case and Genuine Leather Band',
            imageUrl: 'https://m.media-amazon.com/images/I/71aI-8Qfb7L._AC_UL480_FMwebp_QL65_.jpg',
            reviews: 500
          },
          {
            id: 'subcat5_2',
            name: 'Smartwatches',
            price: '$199.99',
            rating: 4.6,
            description: 'Citizen Eco-Drive Weekender Mens Watch, Stainless Steel with Polyurethane Strap',
            imageUrl: 'https://m.media-amazon.com/images/I/81C4rV8K07L._AC_SY879_.jpg',
            reviews: 1200
          },
          {
            id: 'subcat5_3',
            name: 'Casual Watches',
            price: '$99.99',
            rating: 4.4,
            description: 'Fossil Nate Men`s Watch with Oversized Chronograph Watch Dial and Stainless Steel or Leather Band',
            imageUrl: 'https://m.media-amazon.com/images/I/71B-vrIIA3L._AC_SX679_.jpg',
            reviews: 850
          },
          {
            id: 'subcat5_4',
            name: 'Sports Watches',
            price: '$299.99',
            rating: 4.7,
            description: 'Casio Men`s MDV106-1AV 200 M WR Black Dive Watch (MDV106-1A)',
            imageUrl: 'https://m.media-amazon.com/images/I/61nHUVwR65L._AC_SY695_.jpg',
            reviews: 600
          },
          {
            id: 'subcat5_5',
            name: 'Vintage Watches',
            price: '$899.99',
            rating: 4.9,
            description: 'GUESS Iconic Blue Stainless Steel Stain Resistant Silicone Watch',
            imageUrl: 'https://m.media-amazon.com/images/I/71a50tql2TL._AC_SY879_.jpg',
            reviews: 300
          }
        ]
      },
      {
        id: 'category6',
        url: 'https://m.media-amazon.com/images/I/711uXz20njL._AC_UL480_FMwebp_QL65_.jpg',
        title: {
          shortTitle: 'Have more fun with family',
          longTitle: 'Engaging activities and games for family bonding'
        },
        description: 'Discover board games and activities that everyone can enjoy together.',
        tagline: 'Family Fun Time!',
        subcategories: [
          {
            id: 'subcat6_1',
            name: 'Board Games',
            price: '$39.99',
            rating: 4.7,
            description: 'Step2 Up & Down Roller Coaster Kids Toy, Ride On Push Car, Indoor/Outdoor Playset, Toddlers 2-5 Years Old, Compact Storage, Max Weight 50 lb., Multicolor',
            imageUrl: 'https://m.media-amazon.com/images/I/61u9PQK2jlL._AC_UL480_FMwebp_QL65_.jpg',
            reviews: 1300
          },
          {
            id: 'subcat6_2',
            name: 'Card Games',
            price: '$19.99',
            rating: 4.5,
            description: 'Little Tikes Cozy Coupe Dinosaur – Amazon Exclusive Large, Green',
            imageUrl: 'https://m.media-amazon.com/images/I/81Lg7Hp2Y0L._AC_SX679_.jpg',
            reviews: 900
          },
          {
            id: 'subcat6_3',
            name: 'Outdoor Games',
            price: '$49.99',
            rating: 4.6,
            description: 'Melissa & Doug PAW Patrol Pup Backpack Role Play Set (15 Pieces) - PAW Patrol Adventure Pack, Toys, Pretend Play Outdoor Gear',
            imageUrl: 'https://m.media-amazon.com/images/I/81WBXjWfc5L._AC_SX679_.jpg',
            reviews: 450
          },
          {
            id: 'subcat6_4',
            name: 'Puzzle Games',
            price: '$29.99',
            rating: 4.4,
            description: 'JOYIN Arcade Basketball Game Set with 4 Balls and Hoop for Kids 3 to 12 Years Old Indoor Outdoor Sport Play - Easy Set Up - Air Pump Included - Ideal for Competition.',
            imageUrl: 'https://m.media-amazon.com/images/I/81Mqz3Wk3DL._AC_SX679_.jpg',
            reviews: 750
          },
          {
            id: 'subcat6_5',
            name: 'DIY Craft Kits',
            price: '$24.99',
            rating: 4.8,
            description: 'Eezy Peezy Monkey Bars Climbing Tower - Active Outdoor Fun for Kids Ages 3 to 6 Years Old, Green/Blue..',
            imageUrl: 'https://m.media-amazon.com/images/I/71eUau89I9L._AC_SX679_.jpg',
            reviews: 670
          }
        ]
      },
      {
        id: 'category7',
        url: 'https://m.media-amazon.com/images/I/71WcjsOVOmL._AC_UY327_FMwebp_QL65_.jpg',
        title: {
          shortTitle: 'Wireless Tech',
          longTitle: 'Stay connected with the latest wireless technology'
        },
        description: 'Explore wireless earbuds, speakers, and more for a hassle-free experience.',
        tagline: 'Connect Wirelessly!',
        subcategories: [
          {
            id: 'subcat7_1',
            name: 'Smart Phone',
            price: '$199.99',
            rating: 4.7,
            description: 'OnePlus 12,16GB RAM+512GB,Dual-SIM,Unlocked Android Smartphone,Supports 50W Wireless Charging,Latest Mobile Processor,Advanced Hasselblad Camera,5400 mAh Battery,2024,Flowy Emerald',
            imageUrl: 'https://m.media-amazon.com/images/I/711F6T6aySL._AC_SX679_.jpg',
            reviews: 2000
          },
          {
            id: 'subcat7_2',
            name: 'smart phone',
            price: '$412.73',
            rating: 4.6,
            description: 'Google Pixel 7 Pro - 5G Android Phone - Unlocked Smartphone with Telephoto/ Wide Angle Lens, and 24-Hour Battery - 256GB - Snow',
            imageUrl: 'https://m.media-amazon.com/images/I/61CB-MZkbYL._AC_SX679_.jpg',
            reviews: 1800
          },
          {
            id: 'subcat7_3',
            name: 'smart phone',
            price: '$217.99',
            rating: 4.4,
            description: 'OnePlus Nord N30 5G | Unlocked Dual-SIM Android Smart Phone | 6.7" LCD Display | 8 +128GB | 5000 mAh Battery | 50W Fast Charging | 108MP Camera | Chromatic Gray',
            imageUrl: 'https://m.media-amazon.com/images/I/610qFsdenLL._AC_SX679_.jpg',
            reviews: 1000
          },
          {
            id: 'subcat7_4',
            name: 'Smart Phone',
            price: '$199.99',
            rating: 4.7,
            description: 'C23U Unlocked Phones, 6GB+256GB Full Netcom Unlocked Cell Phone, 6.8" HD Screen Android 13 Smartphone, Octa Core CPU, 6800mAh Battery, 48MP Camera, Face ID, Dual SIM Phone (Black)',
            imageUrl: 'https://m.media-amazon.com/images/I/61CcywtgIML._AC_SX522_.jpg',
            reviews: 1100
          },
          {
            id: 'subcat7_5',
            name: 'Wireless Keyboards',
            price: '$911.98',
            rating: 4.5,
            description: 'SAMSUNG Galaxy Z Fold5 AI Phone, 512GB Unlocked Android Smartphone, Big 7.6” Screen for Streaming, Gaming, Dual App View, One-Hand Control, Hands-Free Use, US Version, 2023, Cream',
            imageUrl: 'https://m.media-amazon.com/images/I/61f3V3m9xnL._AC_SX679_.jpg',
            reviews: 750
          }
        ]
      },
      {
        id: 'category8',
        url: 'https://m.media-amazon.com/images/I/71iDjlIqaKL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        title: {
          shortTitle: 'Most-loved travel essentials',
          longTitle: 'Travel gear that makes your journey easier'
        },
        description: 'Find backpacks, organizers, and more for your travel needs.',
        tagline: 'Travel Smart!',
        subcategories: [
          {
            id: 'subcat8_1',
            name: 'Travel Backpacks',
            price: '$139.99',
            rating: 4.8,
            description: 'SwissGear 7366 Hardside Expandable Luggage with Spinner Wheels, White, Checked-Medium 23-Inch',
            imageUrl: 'https://m.media-amazon.com/images/I/61pG0NkTnXL._AC_SX679_.jpg',
            reviews: 1400
          },
          {
            id: 'subcat8_2',
            name: 'Packing Cubes',
            price: '$79.99',
            rating: 4.7,
            description: 'Amazon Basics Expandable Hardside Luggage, Suitcase with Wheels, 30-inch Spinner with Four Spinner Wheels and Scratch-Resistant Surface, Navy Blue',
            imageUrl: 'https://m.media-amazon.com/images/I/91RyqYk9mAL._AC_SY879_.jpg',
            reviews: 900
          },
          {
            id: 'subcat8_3',
            name: 'Travel Pillows',
            price: '$29.99',
            rating: 4.5,
            description: 'WONHOX Large Travel Backpack Carry on Flight Approved Laptop Work Business Backpack for Women Men Mochila de Viaje',
            imageUrl: 'https://m.media-amazon.com/images/I/81FJM61kZtL._AC_UY327_FMwebp_QL65_.jpg',
            reviews: 1200
          },
          {
            id: 'subcat8_4',
            name: 'Travel Bottles',
            price: '$33.99',
            rating: 4.6,
            description: 'LOVEVOOK Carry on Travel Backpack, 40L Waterproof Large 17inch Laptop Luggage Daypack as Personal Item Flight Approved, Business Weekender Overnight with 3 Packing Cubes, Grey',
            imageUrl: 'https://m.media-amazon.com/images/I/71xy16A4vPL._AC_SX679_.jpg',
            reviews: 800
          },
          {
            id: 'subcat8_5',
            name: 'Luggage Organizers',
            price: '$44.99',
            rating: 4.7,
            description: 'YOREPEK Travel Backpack, Extra Large 50L Laptop Backpacks for Men Women, Water Resistant College Backpacks Airline Approved Business Work Bag with USB Charging Port Fits 17 Inch Computer, Black',
            imageUrl: 'https://m.media-amazon.com/images/I/816eG81cCSL._AC_SX679_.jpg',
            reviews: 600
          }
        ]
      },
      {
        id: 'category9',
        url: 'https://m.media-amazon.com/images/I/61vKMD8VMFL._AC_UL480_FMwebp_QL65_.jpg',
        title: {
          shortTitle: 'Beauty steals under $25',
          longTitle: 'Affordable beauty products to enhance your look'
        },
        description: 'Explore budget-friendly beauty items that everyone loves.',
        tagline: 'Glam On a Budget!',
        subcategories: [
          {
            id: 'subcat9_1',
            name: 'Lipsticks',
            price: '$14.99',
            rating: 4.7,
            description: 'BS-MALL Makeup Sponges Big Sponge 3 Pcs Blending Sponges for Ultimate Makeup Experience for Concealer Eyemakeup Foundation Nose Makeup Eyeshadow Blending',
            imageUrl: 'https://m.media-amazon.com/images/I/41rfqqcedOL._SX300_SY300_QL70_FMwebp_.jpg',
            reviews: 1100
          },
          {
            id: 'subcat9_2',
            name: 'Face Masks',
            price: '$9.99',
            rating: 4.6,
            description: 'Real Techniques Miracle Complexion Sponge + Travel Case, Makeup Blending Sponge, For Foundation, Sponge Case for Travel, Light To Medium Coverage, Natural, Dewy Makeup, Latex-Free Foam, 2 Piece Set',
            imageUrl: 'https://m.media-amazon.com/images/I/719LCqxDA-L._SX679_.jpg',
            reviews: 800
          },
          {
            id: 'subcat9_3',
            name: 'Eyeshadow Palettes',
            price: '$19.99',
            rating: 4.8,
            description: 'Professional 8.5" Large Lighted Makeup Mirror with Brighter Lights, 1X/10X True HD Magnifying Mirror with 3 Color Dimmable Lights, 80 Shadowless LEDs, 360°Swivel Seamless Vanity Mirror, Pearl Nickel',
            imageUrl: 'https://m.media-amazon.com/images/I/61LhOadI1pL._AC_SY879_.jpg',
            reviews: 1500
          },
          {
            id: 'subcat9_4',
            name: 'Nail Polish Sets',
            price: '$12.99',
            rating: 4.5,
            description: 'Fancii LED Lighted Travel Makeup Mirror, 1x/10x Magnification - Daylight LED, Compact, Portable, Large 5" Wide Illuminated Folding Mirror (Lumi) Rose Gold',
            imageUrl: 'https://m.media-amazon.com/images/I/51zIgAI8ONL._AC_SX679_.jpg',
            reviews: 900
          },
          {
            id: 'subcat9_5',
            name: 'Makeup Brushes',
            price: '$9.99',
            rating: 4.7,
            description: 'L`Oréal Paris Makeup Magic Skin Beautifier BB Cream Tinted Moisturizer, Anti-Redness, 1 fl oz, 1 Count',
            imageUrl: 'https://m.media-amazon.com/images/I/51d2xs4-IUL._SX679_.jpg',
            reviews: 1200
          }
        ]
      },
      {
        id: 'category13',
        url: 'https://m.media-amazon.com/images/I/81Yzs4AFWEL._AC_UL480_FMwebp_QL65_.jpg',
        title: {
          shortTitle: 'Fantastic Finds for Home',
          longTitle: 'Explore amazing products to enhance your home'
        },
        description: 'Discover a wide range of products for every room in your home, from furniture to kitchen essentials.',
        tagline: 'Create Your Perfect Space!',
        subcategories: [
          {
            id: 'subcat13_1',
            name: 'Smart Home Devices',
            price: '$49.99',
            rating: 4.8,
            description: 'Industrial Table Lamps for Bedrooms Set of 2 - Fully Dimmable Bedside Lamps with USB A and C Ports and Outlet, Black Nightstand Lamps with Glass Shade for Living Room, Desk Lamps for Office Reading',
            imageUrl: 'https://m.media-amazon.com/images/I/71s0Cn5QR0L._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg',
            reviews: 2500
          },
          {
            id: 'subcat13_2',
            name: 'Furniture Sets',
            price: '$399.99',
            rating: 4.7,
            description: 'DWVO 5 Pieces Folding Extendable Dining Table Set with 4 Chairs for 4 Peoples, 55 Drop Leaf Wood Kitchen Dining Room Table Set with Storage and 6 Wheels for Small Space Saving, Rustic Brown',
            imageUrl: 'https://m.media-amazon.com/images/I/91EprEbcjjL._AC_SX679_.jpg',
            reviews: 1200
          },
          {
            id: 'subcat13_3',
            name: 'Kitchen Essentials',
            price: '$29.99',
            rating: 4.6,
            description: 'DWVO Farmhouse Dining Table for 6-8 People, 70.8-Inch Rectangular Wood Dining Table, Rustic Kitchen Dinner Table with Heavy Duty Metal Legs for Dining Room (Rustic Brown)',
            imageUrl: 'https://m.media-amazon.com/images/I/91v6xsfFDkL._AC_SX679_.jpg',
            reviews: 950
          },
          {
            id: 'subcat13_4',
            name: 'Decorative Items',
            price: '$199.99',
            rating: 4.5,
            description: 'Machine Washable Rug 2`6` x 8` Vintage Design Area Rugs with Non Slip Rugs for Living Room Bedroom Carpet Stain Resistant, Home Decor Office Boho Rug, Brown',
            imageUrl: 'https://m.media-amazon.com/images/I/91Az15ziLqL._AC_SX679_.jpg',
            reviews: 700
          },
          {
            id: 'subcat13_5',
            name: 'Bedding & Linens',
            price: '$49.99',
            rating: 4.8,
            description: 'Admired By Nature 8.25" H Artficial Frosted Ruscus Ceramic Potted Plant Indoor Faux Plant décor, Wedding Centerpieces, Tabletop, Home Décor, Office Desk, Kitchen Table Décor or Decor for Shelves',
            imageUrl: 'https://m.media-amazon.com/images/I/81jKt5POFjL._AC_SX679_.jpg',
            reviews: 1800
          }
        ]
      },
      {
        id: 'category14',
        url: 'https://m.media-amazon.com/images/I/71AQMsmQxYL._AC_UY327_FMwebp_QL65_.jpg',
        title: {
          shortTitle: 'Creating Business Solutions',
          longTitle: 'Tools and innovations to grow your business'
        },
        description: 'Find the latest technology and business solutions to keep your company moving forward.',
        tagline: 'Business Solutions That Work!',
        subcategories: [
          {
            id: 'subcat14_1',
            name: 'Laptops & Workstations',
            price: '$230.99',
            rating: 4.8,
            description: 'ASUS Vivobook 15.6” FHD Laptop, AMD Ryzen 3 3250U, 8GB RAM, 128GB SSD, Windows 11 Home, Transparent Silver, M515DA-WS33',
            imageUrl: 'https://m.media-amazon.com/images/I/61FYc36J93L._AC_SX679_.jpg',
            reviews: 3200
          },
          {
            id: 'subcat14_2',
            name: 'Business Software',
            price: '$1149.99',
            rating: 4.7,
            description: 'SAMSUNG 14" Galaxy Book4 Pro Laptop PC Computer, Intel Core 7 Ultra Processor 512GB, 3K AMOLED (2880 x 1800) Touchscreen, Advanced Security, 2024 Model, NP940XGK-KG1US, Moonstone Gray',
            imageUrl: 'https://m.media-amazon.com/images/I/6131ZgIFn1L._AC_SX679_.jpg',
            reviews: 1500
          },
          {
            id: 'subcat14_3',
            name: 'Office Chairs',
            price: '$475',
            rating: 4.6,
            description: 'HP 17.3" HD Plus Laptop, for Business and Students, Intel Quad Core, 16GB RAM, 1TB NVMe SSD, Fullsize Keyboard, HDMI, Rapid Charge, Type-C, Windows 11 with Bundled Accessories',
            imageUrl: 'https://m.media-amazon.com/images/I/81N9gJ8ULIL._AC_SX679_.jpg',
            reviews: 800
          },
          {
            id: 'subcat14_4',
            name: 'Printers & Scanners',
            price: '$446',
            rating: 4.5,
            description: 'RICOH 150 Portable 15.6" Vivid OLED 300nit Lightweight Display Monitor and Touchscreen w/Dual Speakers - for Laptop, Desktop, Mac, PC',
            imageUrl: 'https://m.media-amazon.com/images/I/71ozrmE6CcL._AC_SX679_.jpg',
            reviews: 900
          },
          {
            id: 'subcat14_5',
            name: 'Cloud Storage Solutions',
            price: '$54.99/year',
            rating: 4.9,
            description: 'LAPGEAR Extra Large Adjustable Lap Desk with Gel Wrist Rest, Mouse Pad, Phone Holder, Device Ledge, and Booster Cushion - Gray Woodgrain - Fits up to 17.3 Inch Laptops - Style No. 88105',
            imageUrl: 'https://m.media-amazon.com/images/I/81rErplBRQL._AC_SX679_.jpg',
            reviews: 5000
          }
        ]
      },
      {
        id: 'category15',
        url: 'https://m.media-amazon.com/images/I/81MMy2SYZKL._AC_UL480_QL65_.jpg',
        title: {
          shortTitle: 'Gaming Merchandise',
          longTitle: 'Everything a gamer needs'
        },
        description: 'Shop for the latest gaming gear, apparel, and collectibles to enhance your gaming experience.',
        tagline: 'Level Up Your Gaming!',
        subcategories: [
          {
            id: 'subcat15_1',
            name: 'Gaming Headsets',
            price: '$20',
            rating: 4.8,
            description: 'Hasbro Gaming Trivial Pursuit: Wizarding World Harry Potter Edition Compact Trivia Game, 2+ Players, 600 Trivia Questions, 8+ (Amazon Exclusive)',
            imageUrl: 'https://m.media-amazon.com/images/I/81fs2GbaZxL._AC_SX679_.jpg',
            reviews: 3500
          },
          {
            id: 'subcat15_2',
            name: 'Gaming Controllers',
            price: '$59.99',
            rating: 4.7,
            description: 'Hasbro Gaming Monopoly: Disney Star Wars Dark Side Edition Board Game for Families and Kids Ages 8+, Gift, Family Game Night',
            imageUrl: 'https://m.media-amazon.com/images/I/81-++B5KHbL._AC_SX679_.jpg',
            reviews: 2200
          },
          {
            id: 'subcat15_3',
            name: 'Gaming Apparel',
            price: '$29.99',
            rating: 4.6,
            description: 'Fallout: The Official Tarot Deck and Guidebook (Gaming) ',
            imageUrl: 'https://m.media-amazon.com/images/I/71Vcy9c8ohL._SY522_.jpg',
            reviews: 1200
          },
          {
            id: 'subcat15_4',
            name: 'Collectible Action Figures',
            price: '$39.99',
            rating: 4.9,
            description: 'The Art of Fallout 4 ',
            imageUrl: 'https://m.media-amazon.com/images/I/61L+OwTjNeL._SY522_.jpg',
            reviews: 800
          },
          {
            id: 'subcat15_5',
            name: 'Gaming Keyboards',
            price: '$99.99',
            rating: 4.8,
            description: 'The Art of God of War',
            imageUrl: 'https://m.media-amazon.com/images/I/91RSQACsJeL._SY522_.jpg',
            reviews: 4100
          }
        ]
      }
]      
export default Products;
      
      
      
      
      
      
        
