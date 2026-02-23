import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Наушники' },
    { id: 4, name: 'Планшеты' }
  ];

  products: Product[] = [
    //  СМАРТФОНЫ 
    {
      id: 1,
      name: 'Apple Iphone 17 Pro 256Gb темно-синий',
      description: 'The Apple iPhone 17 Pro 256Gb is the epitome of innovation and style, combining cutting-edge technology, unparalleled performance, and elegant design.',
      price: 813520,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
       name: 'Apple Iphone 14 128Gb сиреневый',
      description: 'Apple iPhone 14 – a compact model with a frameless OLED display of 6.1 inches. The glass body of the mobile device meets the IP68 protection standard – it is resistant to moisture and dust.',
      price: 479990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/hcf/86042950729758.png?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-sirenevyi-106363117/?c=750000000',
      likes: 0,
      categoryId: 1
      
    },

  {
    id: 3,
       name: 'Samsung Galaxy S25 Ultra 5G 12 GB / 256 Gb black',
      description: 'Introducing the Samsung Galaxy S25 Ultra 5G, a smartphone that combines high performance, advanced technology, and stylish design. With this device, you can enjoy image quality, fast performance, and an excellent camera',
      price: 557750,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000',
      likes: 0,
      categoryId: 1
  },

  {
     id: 4,
      name: 'Samsung Galaxy Z Flip7 FE 5G 8 Gb/256Gb white',
      description: 'The Samsung Galaxy Z Flip7 FE 5G is a stylish foldable smartphone that combines innovation and elegance. Its compact design easily fits in your pocket, while the large flexible display gives you a comfortable viewing experience.', 
      price: 494469,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcd/p19/53124317.png?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-flip7-fe-5g-8-gb-256-gb-belyi-142551523/?c=750000000',
      likes: 0,
      categoryId: 1
  },
  {
    id: 5,
      name: 'Apple Iphone 12 256Gb  синий',
      description: 'An incredibly durable Ceramic Shield front panel. A gorgeous bright OLED display. A powerful chip. And a dual-camera system. All of this is included in the Apple iPhone 12.', 
      price: 531000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h17/hae/63953033330718.jpg?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/apple-iphone-12-256gb-sinii-100657053/?c=750000000',
      likes: 0,
      categoryId: 1
  }  ,

  {

    id: 6,
      name: 'Apple MacBook Air 13 2025 / 16 Gb / SSD 512 Gb / macOS / MW133',
      description: 'Stylish design and fantastic thinness - all this is about the Apple MacBook Air series laptops. The impossible is possible - powerful laptops of this series have a thickness of 0.4 to 1.94 centimeters. The unibody housing made of a single sheet of aluminum guarantees exceptional reliability. ', 
      price: 652642,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb9/p57/37156055.jpg?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-512-gb-macos-mw133-138242483/?c=750000000',
      likes: 0,
      categoryId: 2
  },

  {
     id: 7,
       name: 'Lenovo LOQ 15ARP10E 15.6" / 16 Gb / SSD 512 Gb / Без  OC / 83S00009RK ',
      description: 'The Lenovo LOQ 15ARP10E is a powerful 15.6-inch laptop designed for performance and productivity. Equipped with 16GB of RAM and a fast 512GB SSD, it ensures smooth multitasking and quick system response. The large Full HD display provides clear and vibrant visuals, making it perfect for work, study, and entertainment.',
      price: 509990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe6/p7d/95714777.jpg?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/lenovo-loq-15arp10e-15-6-16-gb-ssd-512-gb-bez-os-83s00009rk-154678915/?c=750000000',
      likes: 0,
      categoryId: 2
  },

  {
      id: 8,
       name: 'Acer Nitro V 15 15.6" / 16 Gb / SSD 1000 Gb / Win 11 Pro / ANV15-51 / NH.QNBER.04W',
      description: 'ntroducing the Acer Nitro V 15 a powerful gaming laptop that combines high performance and state-of-the-art technology for true gamers. With the NVIDIA GeForce RTX 4050 discrete graphics card and Intel Core i5-13420H processor,you can enjoy smooth gameplay and fast processing.',
      price: 571747,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h08/86306980593694.jpg?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/acer-nitro-v-15-15-6-16-gb-ssd-1000-gb-win-11-pro-anv15-51-nh-qnber-04w-120519370/?c=750000000',
      likes: 0,
      categoryId: 2
  },
  {
     id: 9,
       name: 'HP 15-fd0140ci 15.6" / 32 Gb / SSD 1000 Gb / Win 11 Pro / AF412EA#UQQ ',
      description: 'The HP 15-fd01410ci laptop is a powerful and versatile tool for work, study, and entertainment, combining productivity and portability.',
      price: 446759,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8b/p67/5688245.jpg?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/hp-15-fd01410ci-15-6-32-gb-ssd-1000-gb-win-11-pro-af412ea-uqq-129221126/?c=750000000',
      likes: 0,
      categoryId: 2
  },
  {
     id: 10,
       name: 'ASUS TUF A15 FA506 15.6" / 16 Gb / SSD 512 Gb / Без OC / 90NR0JF7-M00JE0 ',
      description: 'The TUF Gaming A15 is a gaming laptop designed for serious gaming and features a new and stylish design. It has a lot of features and the power you need to win. The new GeForce RTX ™ 3050 graphics card provides smooth gameplay on a display with a refresh rate of up to 144 Hz and 100% sRGB coverage, and the powerful AMD Ryzen ™ 7 processor is complemented by an improved cooling system that enhances processor performance and ensures low noise levels.',
      price: 478698,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf6/p03/72613217.png?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/asus-tuf-a15-fa506-15-6-16-gb-ssd-512-gb-bez-os-90nr0jf7-m00je0-148010487/?c=750000000',
      likes: 0,
      categoryId: 2
  }, 
  {
    id: 11,
       name: 'Наушники Apple AirPods Max 2 Черно-синий ',
      description: 'The model automatically detects when noise cancellation should be turned off. The large-diameter drivers produce loud sound with good frequency balance. Spatial sound is created by dynamically tracking the users head position.',
      price: 277899,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-cherno-sinii-128622804/?c=750000000',
      likes: 0,
      categoryId: 3
  },

  {
    id: 12,
       name: 'Наушники Sony WH-1000XM4 черный',
      description: 'Discover how the WH-1000XM4 headphones combine our best noise cancellation technology, exceptional sound quality, and a range of smart features.',
      price: 489999,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm4-chernyi-100471997/?c=750000000',
      likes: 0,
      categoryId: 3
  } ,

  {
      id: 13,
       name: 'Наушники  Marshall Major V коричневый',
      description: 'The Marshall Major V headphones combine iconic design with powerful sound quality. Featuring deep bass, clear highs, and balanced audio performance, they deliver an immersive listening experience.',
      price: 39431,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/p92/8020134.jpg?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-v-korichnevyi-129957004/?c=750000000',
      likes: 0,
      categoryId: 3
  },

  {
     id: 14,
       name: 'Наушники Apple AirPods 3 white',
      description: 'The dynamic driver developed by Apple uses a special amplifier to provide incredible sound detail. You will hear every aspect of the audio spectrum, from deep, rich bass to crystal-clear treble.',
      price: 64989,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hda/hc7/64341967994910.jpg?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-3-belyi-102667744/?c=750000000',
      likes: 0,
      categoryId: 3
  },
  {
     id: 15,
       name: 'Наушники Samsung Galaxy Buds3 Pro серебристый',
      description: 'Introducing the Samsung Galaxy Buds3 Pro, headphones that deliver high-quality sound and maximum comfort in any environment. With active noise cancellation and wireless charging, they are perfect for an active lifestyle.',
      price: 77808,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p67/p37/108495081.png?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds3-pro-serebristyi-121198974/?c=750000000',
      likes: 0,
      categoryId: 3
  },

  {
     id: 16,
       name: 'Apple iPad Air 11 2025 Wi-Fi 11 дюйм 8 Гб / 256 Гб серый',
      description: 'The Apple iPad Air 11 2025 is a powerful and portable tablet designed for work, creativity, and entertainment.',
      price: 401988,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p31/37020582.png?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-256-gb-seryi-138202599/?c=750000000',
      likes: 0,
      categoryId: 4
  } ,
  {
     id: 17,
       name: 'Apple iPad Pro 11 2024 Wi-Fi + 5G 11 дюйм 8 Гб / 256 Гб черный',
      description: 'The iPad Pro 11 (2024) offers powerful performance, a brilliant 11-inch display, 8GB RAM, and 256GB storage. With Wi-Fi and 5G support, it is perfect for productivity and multimedia.',
      price: 676516,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/hb6/86470690177054.jpg?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-5g-11-djuim-8-gb-256-gb-chernyi-119975323/?c=750000000',
      likes: 0,
      categoryId: 4
  },
  {
    id: 18,
       name: 'Samsung Galaxy Tab S10 Ultra 14.6 дюйм 12 Гб / 256 Гб серый',
      description: 'The Samsung Galaxy Tab S10 Ultra tablet is a powerful device with an impressive screen and high performance, perfect for work and entertainment.',
      price: 580000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p5f/1647298.png?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s10-ultra-14-6-djuim-12-gb-256-gb-seryi-128152132/?c=750000000',
      likes: 0,
      categoryId: 4
  },
  {
     id: 19,
       name: 'Samsung Galaxy Tab S11 SM-X736BZAASKZ 11 дюйм 12 Гб / 128 серый',
      description: 'The Samsung Galaxy Tab S11 features an 11-inch display, 12GB RAM, and 128GB storage. It offers smooth performance, vibrant visuals, and a sleek design — ideal for work and entertainment.',
      price: 439445,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p01/p4d/69284480.png?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s11-sm-x736bzaaskz-11-djuim-12-gb-128-gb-seryi-146975937/?c=750000000',
      likes: 0,
      categoryId: 4
  } ,
  {
    id: 20,
       name: 'Xiaomi Poco Pad 12.1 дюйм 8 Гб/256 Гб серый',
      description:  'Xiaomi Poco Pad 12.1 is a versatile tablet with a large screen and a powerful processor for work, study, and entertainment.',
      price: 339000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/hd6/86241591492638.jpg?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/xiaomi-poco-pad-12-1-djuim-8-gb-256-gb-seryi-120253506/?c=750000000',
      likes: 0,
      categoryId: 4
  },
  {
     id: 20,
       name: 'Xiaomi Poco Pad 12.1 дюйм 8 Гб/256 Гб серый',
      description:  'Xiaomi Poco Pad 12.1 is a versatile tablet with a large screen and a powerful processor for work, study, and entertainment.',
      price: 339000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/hd6/86241591492638.jpg?format=gallery-medium',
      images: ['','',''],
      link: 'https://kaspi.kz/shop/p/xiaomi-poco-pad-12-1-djuim-8-gb-256-gb-seryi-120253506/?c=750000000',
      likes: 0,
      categoryId: 4
  }


   

    
    

  
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}