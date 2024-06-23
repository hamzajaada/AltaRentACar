// i18n.js or wherever your i18n configuration is
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import avatar from "./assets/img/testimonial/avatar1.png";



i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        after:"after",
        accs_description:"Drive with the peace of mind of knowing that the rest of the drivers are also insured.",
        accs:{
          "AIRPORT CHANGE":"AIRPORT CHANGE",
          "SPECIAL SEAT FOR NEWBORN":"SPECIAL SEAT FOR NEWBORN",
          "BABY CAR SEAT":"BABY CAR SEAT",
          "NIGHT TIME DELIVERY":"NIGHT TIME DELIVERY",
          "ADDITIONAL DRIVER":"ADDITIONAL DRIVER",
          "GPS":"GPS",
          "AIRPORT CHANGE":"AIRPORT CHANGE"
           },
        enter_ht:"Enter hotel name",
        ht:"hotel",
        drivers:"Driver's Information",
        fixed:"Fixed Price",
        thanks:"Thank you for your booking We will check availability and send you all information for your email as soon as possible ",
        unit:"Unit per day",
        book:{
         name:"name",
         surname:"surname",
         Telephone :"Telephone",
         Email :"Email",
         Country: "Country",
         DateofBirth:"Date of Birth",
         Comments:"Comments",
         terms:"I accept the terms and conditions"
        },
        "booking":"*Free Cancellation *Booking Changes *Unlimmited kilometres *Free delivery to the airport and hotel",
        "total":"Total Price",
        "acc":"ACCESSORIES AND EXTRAS",
        "ass":"INSURANCE",
        "avant":"Avantage!",
        "select":"Select",
        "price":"Price",
        "ourar":"Our Cars",
        nocars:"No cars available.",
        category:"Category:",
        doors:"Doors:",
        passengers:"Passengers:",
        models:"Model:",
        show:"Show Prices",
        hotel:"Hotel",
        "modif":"Edit Filter",
        "days":"DAYS",
        "rr":"Rent a car",
        cookies:"Cookies",
        termes:"termes",
        dataprotection:"data protection",
        legalnotice:"Legal notice",
        send:"send",
        cancel:"Cancel",
     AboutUs:{
      "email":"Your email address",
      "msg":"Your message",
      "name":"Your Name",
      "subj":"Subject",
      "Touch":"Let’s Get In Touch!",
      "write":"You can write all time what’s app or email .",
      "whoAreYou": "Alta Rent a Car based on Tenerife . We have Individual approach to each customer, service with delivery to Your specified address at a convenient time for You. We have any class of cars from economy to business class, crossovers, SUVs and commercial vehicles so everyone will choose for themselves the appropriate version of the car. We look forward to seeing you as our customer!",
      "ourMission": "Our mission at Alta Rent a Car is to provide a personalized and convenient car rental experience to each of our customers. We aim to offer a diverse range of vehicles, from economy to business class, crossovers, SUVs, and commercial vehicles, ensuring that everyone can find the perfect car for their needs. Our goal is to exceed customer expectations by delivering exceptional service and flexibility, including delivery to specified addresses at convenient times.",
      "ourVision": "Our vision at Alta Rent a Car is to become the leading car rental service provider in Tenerife, known for our exceptional customer service, diverse vehicle options, and convenient delivery service. We aim to set the standard for excellence in the industry, continuously innovating and expanding our offerings to meet the evolving needs of our customers. Our vision is to create memorable experiences for our customers, ensuring that every journey with us is smooth, enjoyable, and hassle-free.",
      "text":"Contact Us Now and Book Your Ride!",
      "btntext":"BOOK NOW",
      "Discover":"Discover the Best Car Rental Experience with",
      "Alta":"Alta Rent a Car!"
      ,
      "welcome":" Welcome to Alta RENT A CAR"
       ,"Since":"Since"   ,
      "who":"Who are you" ,
    "mission":"Our mission" ,
  "vision":"Our vision",
  "vehi":"Luxury Vehicles",
  "exp":" Experience ultimate comfort and style with our range of luxury cars. Perfect for turning any journey into a special occasion.",
  "echo":"Economic Cars",
  "effi":"Choose efficiency and value with our selection of economy cars. Ideal for exploring Tenerife on a budget.",
  "Whether":"Whether it's for a day trip or an extended stay, we offer flexible rental periods to suit your itinerary. ",
  "asst":"Assistance",
  "Enjoy":"Enjoy peace of mind with our round-the-clock customer support. We're always here when you need us.",
  "hotel":"Hotel and Airport Delivery",
  "convenience":"For your convenience, we deliver your chosen vehicle directly to your hotel or the airport, making your travel seamless and stress-free. ",
  "Awards":"Our Awards",
  "Luxury":"Luxury and Economy Car Rentals in Tenerife",
  "superior":"At Alta Rent a Car, we offer a superior rental experience with a wide selection of luxury and economy cars. Whether you're looking for the elegant comfort of a luxury sedan or the efficiency of an economy model, we have the perfect vehicle to make your trip to Tenerife unforgettable.",
  "find":"Find your car",
  "Fleet":"Diverse Fleet:",
  "refinement":" From the refinement of top luxury brands to compact economy models, our diverse fleet meets all your needs.",
  "Pricing":"Transparent Pricing:",
  "straightforward":"Enjoy our clear, straightforward pricing for easy and stress-free planning.",
  "Exceptional":"Exceptional Customer Service:",
  "dedicated":"Our dedicated team is here to ensure your rental experience is smooth and enjoyable.",
  "Locations":"Convenient Locations: ",
  "convenient":"Pick up and drop off at multiple convenient locations across Tenerife, making it easy to start your journey.",
  "vehi":"",
},
      header :{
      home:'Home',
      car:'Cars',
      about:'About',
      contact:'Contact',
      h_title:"Make Reservation"
      },
        hero: {
          title:"Explore The Finest",
          title_b:"Global Offers",
          slide1: {
            text: "Experience the ease of renting with Alta Rent a Car. Quick booking, impeccable service, and you're off in minutes to explore the island freely.",
            btntext: "Book Now"
          },
          slide2: { 
            text: "Elevate your travel experience with our exclusive selection of luxury cars. Comfort, style, and performance await at every turn.",
            btntext: "Book Now"
          },
          slide3: {
            text: "At Alta Rent a Car, we're always here for you. Enjoy our 24/7 support for a worry-free rental experience.",
            btntext: "Book Now"
          },
          slide4: {
            text: "Explore the hidden corners of Tenerife with our custom itinerary suggestions. Alta Rent a Car, more than just car rental!",
            btntext: "Book Now"
          }
        },
        welcome: {
          title: "Welcome to Alta Rent a car",
          subtitle: "A global leader in car rental",
          text1: "With over +5 years of experience in the industry, you can be sure that whether you are looking for a family car, sedan or prestige car for your business or leisure trips or need van for job , Alta rent has the vehicle to meet every car rental need. Our service designed to get you out on the road as soon as possible. We are in contact by email or telephone, we help you every minute . If you need special extra things give us information before and we will try organize it for you. Make a car rental reservation online now !",
          text2: "Our service designed to get you out on the road as soon as possible. We are in contact by email or telephone, we help you every minute . If you need special extra things give us information before and we will try organize it for you. Make a car rental reservation online now !",
          footerTitle: "Alta Rent a car", 
          footerSubtitle: "Founder of Alta Rent a car"
        },
        most:"Most",
        popular:"popular car rental deals",
        power_steering:"power steering", 
        radio: "radio",
        yes:"Yes",
        no:"No",
        no_available:"No cars available",
        sd:"See details",
        about: {
          title: "Your Local Car and Utility Vehicle Rental Agency in Tenerife",
          description: "At Alta Rent a Car, we pride ourselves on being Tenerife's premier car and utility vehicle rental service. Conveniently located across the island, we offer a wide range of high-quality vehicles to suit any need, whether you're exploring scenic routes or managing logistics. Experience seamless rental processes, flexible options, and dedicated customer support designed to make your rental experience as straightforward and enjoyable as possible.",
          carTypes: "Car Types",
          localisation: "Localisation",
          bestPrice: "Best Price",
          payOnline: "Pay Online",
          seeAllCars: "See All Cars"
        },
        fauter3: {
          airportServiceTitle: "Alta Rent a Car Delivery Service at Tenerife Airports",
          airportServiceDescription: "Arrive in style with Alta Rent a Car's delivery service at Tenerife airports. Our luxury vehicles will be waiting for you upon your arrival, providing the perfect blend of sophistication and comfort. Whether you're landing at Tenerife South Airport or Tenerife North Airport, our seamless car delivery service ensures you can hit the road immediately, enjoying a stress-free and elegant start to your journey.",
          hotelServiceTitle: "Luxury Car Delivery to Your Hotel",
          hotelServiceDescription: "Experience unparalleled convenience and luxury with Alta Rent a Car's premium car delivery service. Whether you're arriving at your hotel in Tenerife or moving between destinations, our fleet of high-end vehicles will be delivered right to your doorstep. Enjoy the comfort of our luxurious interiors, professional service, and the freedom to travel at your own pace, making your stay exceptional from start to finish."
        },
        fauter2: {
          whyChooseUs: "Why choose us",
          reasonToBook: "Reason to book a rental car with Alta rent a car",
          description: "At Alta Rent a Car, we specialize in providing exceptional car rental services across the beautiful island of Tenerife. With a commitment to customer satisfaction and a passion for mobility, we offer a seamless rental experience that caters to both locals and tourists alike.",
          diverseFleet: "Diverse Fleet",
          competitivePricing: "Competitive Pricing",
          convenientLocations: "Convenient Locations",
          exceptionalService: "Exceptional Customer Service",
          flexibleOptions: "Flexible Rental Options",
          commitmentToSafety: "Commitment to Safety"
        },
        fauter1: {
          howToRent: "How to rent a car",
          experience: "Experience with our car rental offers",
          step1: {
            title: "Get a car & enjoy the ride",
            description: "Enjoy your trip and our good service!"
          },
          step2: {
            title: "Select a date & location",
            description: "Pick the location and the needed rent date."
          },
          step3: {
            title: "Select & reserve a car",
            description: "Select the vehicle & provide necessary info."
          }
        },
        testimonials: {
          0: {
            message: "As a business owner, I often need reliable vehicles for my operations. Alta Rent a Car has consistently met my needs with a wide variety of choices and competitive prices. Their professionalism and flexibility make them my first choice every time.",
            name: "Carlos S.",
            job: "Local Entrepreneur",
            avatar:avatar
            
          },
          1: {
            message: "Alta Rent a Car made our trip to Tenerife seamless and stress-free. The pick-up and drop-off process was quick and easy, and the staff were incredibly helpful in recommending routes and places to visit. I would definitely use their services again!",
            name: "Jane Smith",
            job: "Project Manager",
            avatar:avatar
          },
          2: {
            message: "Renting a car from Alta Rent a Car was a fantastic experience during our holiday in Tenerife. The customer service was impeccable, and the car we rented was in perfect condition. It made our exploration of the island so much more enjoyable and flexible!",
            name: "Marie D",
            job: "French Tourist",
            avatar:avatar
          }
        },
        whyus: {
          "title": "Unmatched excellence and customer satisfaction",
          "rent": "Rent simply and quickly",
          "modernVehicles": "Modern & well maintained vehicles",
          "promptServices": "Prompt and flexible services"
        },
        excellence: "Unmatched excellence and customer satisfaction",
        excellenceDesc : "At the heart of our mission is a relentless pursuit of unmatched excellence and customer satisfaction. We believe that excellence is not just a goal but a continuous journey, where every step is dedicated to exceeding expectations and setting new standards of quality. Our commitment to customer satisfaction drives us to understand and anticipate your needs, ensuring that every interaction is personalized and every experience is exceptional.",
      rentTitle: "Rent simply and quickly",
      rentDesc: "We prioritize your need and we go above and beyond to ensure your experience with us is nothing short of outstanding",
      vehiclesTitle: "Modern & well maintained vehicles",
      vehiclesDesc: "We prioritize your need and we go above and beyond to ensure your experience with us is nothing short of outstanding",
      servicesTitle: "Prompt and flexible services",
      servicesDesc: "We prioritize your need and we go above and beyond to ensure your experience with us is nothing short of outstanding",
      bookYourCar:"Book Your Car Rental Easily from Your Phone",
      bookYourCarDesc:"You can easily book a car rental right from your phone, ensuring a seamless and convenient experience. With just a few taps, you can choose your vehicle, select your rental dates, and complete your reservation, all from the comfort of your mobile device.",
      AltaRentalText: "With Alta rental car, you can enjoy your vacation to the fullest. Experience seamless travel and exceptional service, ensuring a stress-free and memorable journey.",
      makeReservation: "Make Reservation",
      seeAllCars: "See all cars", 
      partners:"Our partners",
      ourConditions: "Our Conditions",
      comprehensiveInsurance: "Comprehensive insurance is included",
      comprehensiveInsuranceDesc: "Comprehensive insurance is included, covering various types of damages.",
      freeChildSeat: "Free child seat",
      freeChildSeatDesc: "Free child seat is provided for safety.",
      bookCarOfDreams: "Alta Rent a Car Tenerife Explore Tenerife in style with Alta Rent a Car. We offer a wide range of luxuryand economy v ehicles to suit all your travel needs. Reliable , affordable, and always ready to drive.",
      QUICKLINKS: "Quick links ",
      home: "Home",
      cars: "Cars",
      Aboutus: "About us",
      Contactus: "Contact us",
      explore: "Social Media & legal ",
      bookCar: "Follow us",
      weddings: "Weddings",
      trustSafety: "Trust & Safety",
      legal : "legal ",
      Cokiees: "Cokkiees ",
      getStarted: "Get Started",
      ContactTitle: "Contact",
      Phone: "Phone",
      Address: "Address",
      Email: "Email: contact@Alta-rentcar.com",
      pickLocation: "PICK LOCATION :",
	  returnLocation: "RETURN LOCATION:",
      pickUpDate: "PICK-UP DATE:",
      dropOffDate: "DROP-OFF DATE:",
      cancel: "Cancel",
      search: "Search", 
      difflocation :"Drop car off at different location", 
      }
    },
    es: {
      translation: {
        after:"después",
        accs_description:"Conduzca con la tranquilidad de saber que el resto de los conductores también están asegurados.",
        accs:{
          "AIRPORT CHANGE": "CAMBIO DE AEROPUERTO",
          "SPECIAL SEAT FOR NEWBORN": "ASIENTO ESPECIAL PARA RECIÉN NACIDOS",
          "BABY CAR SEAT": "ASIENTO DE COCHE PARA BEBÉ",
          "NIGHT TIME DELIVERY": "ENTREGA NOCTURNA",
          "ADDITIONAL DRIVER": "CONDUCTOR ADICIONAL",
          "GPS": "GPS",
        },
        enter_ht:"Introduzca el nombre del hotel",
        ht:"hotel",
        drivers:"información del conductor",
        fixed:"precio fijo",
        thanks:"Muchas gracias por su reserva Comprobaremos la disponibilidad y le enviaremos toda la información para su correo electrónico lo antes posible ",
        unit:"Unidad por día",
        book:{
          name:"Nombre",
          surname:"Apellido",
          Telephone :"Teléfono",
          Email :"Email",
          Country: "País",
          DateofBirth:"Fecha Fe Facimiento",
          Comments:"comentarios",
          terms:"Acepto los términos y condiciones"
         },
        "booking":"*Cancelación gratuita *Cambios en la reserva *Kilómetros sin límite *Entrega gratuita al aeropuerto y al hotel",
        "total":"Precio Total",
        "acc":"Accesorios y Extras",
        "ass":"Seguro",
        "avant":"Avantage!",
        "select":"seleccionar",
        "price":"Precio",
        "ourar":"Nuestros coches",
        nocars:"No hay coches disponibles.",
        category:"categoría:",
        doors:"Puertas:",
        passengers:"Pasajeros:",
        models:"modelo:",
        show:"mostrar los precios",
        hotel:"Hotel",
        "modif":"Editar filtro",
        "days":"días",
        "rr":"Alquiler de coches",
        send:"enviar",
        cancel:"cancelar",
        AboutUs:{
          "email":"Su dirección de correo electrónico",
          "msg":"Su mensaje",
          "name":"Su nombre",
          "subj":"Tema",
         "Touch":"¡Vamos a ponernos en contacto!",
         "write":"Puede escribir todo el tiempo lo que es aplicación o correo electrónico .",
          "whoAreYou": "Alta Rent a Car con base en Tenerife. Tenemos un trato individualizado para cada cliente, un servicio con entrega a Su dirección especificada en un horario conveniente para Usted. Disponemos de cualquier clase de automóvil, desde clase económica hasta clase ejecutiva, crossovers, SUV y vehículos comerciales, para que cada uno pueda elegir por sí mismo la versión adecuada del automóvil. ¡Esperamos verlo como nuestro cliente!",
          "ourVision": "Nuestra visión en Alta Rent a Car es convertirnos en el proveedor líder de servicios de alquiler de vehículos en Tenerife, conocido por nuestro excepcional servicio al cliente, diversas opciones de vehículos y conveniente servicio de entrega. Nuestro objetivo es establecer el estándar de excelencia en la industria, innovando y ampliando continuamente nuestras ofertas para satisfacer las necesidades cambiantes de nuestros clientes. Nuestra visión es crear experiencias memorables para nuestros clientes, garantizando que cada viaje con nosotros sea fluido, agradable y sin complicaciones.",
          "ourMission": "Nuestra misión en Alta Rent a Car es brindar una experiencia de alquiler de autos personalizada y conveniente a cada uno de nuestros clientes. Nuestro objetivo es ofrecer una amplia gama de vehículos, desde clase económica hasta clase ejecutiva, crossovers, SUV y vehículos comerciales, garantizando que todos puedan encontrar el automóvil perfecto para sus necesidades. Nuestro objetivo es superar las expectativas de los clientes brindándoles un servicio excepcional y flexibilidad, incluida la entrega a direcciones específicas en horarios convenientes.",
          "text": "¡Contáctenos ahora y reserve su viaje!",
          "btntext": "reservar ahora",
          "Discover": "Descubre la mejor experiencia de alquiler de coches con",
          "Alta": "Alta Rent a Car!",
          "welcome": "¡Bienvenido a Alta RENT A CAR!",
          "Since": "Desde",
          "who": "¿Quién eres tú?",
          "mission": "Nuestra misión",
          "vision": "Nuestra visión",
          "vehi": "Vehículos de lujo",
          "exp": "Experimenta la máxima comodidad y estilo con nuestra gama de coches de lujo. Perfecto para convertir cualquier viaje en una ocasión especial.",
          "echo": "Coches económicos",
          "effi": "Elige eficiencia y valor con nuestra selección de coches económicos. Ideal para explorar Tenerife con un presupuesto.",
          "Whether": "Ya sea para un viaje de un día o una estancia prolongada, ofrecemos períodos de alquiler flexibles para adaptarse a su itinerario.",
          "asst": "Asistencia",
          "Enjoy": "Disfruta de la tranquilidad con nuestro soporte al cliente disponible las 24 horas. Siempre estamos aquí cuando nos necesitas.",
          "hotel": "Entrega en hotel y aeropuerto",
          "convenience": "Para su comodidad, entregamos el vehículo elegido directamente en su hotel o en el aeropuerto, haciendo que su viaje sea sin problemas y libre de estrés.",
          "Awards": "Nuestros premios",
          "Luxury": "Alquiler de coches de lujo y económicos en Tenerife",
          "superior": "En Alta Rent a Car, ofrecemos una experiencia de alquiler superior con una amplia selección de coches de lujo y económicos. Ya sea que esté buscando la elegante comodidad de un sedán de lujo o la eficiencia de un modelo económico, tenemos el vehículo perfecto para hacer que su viaje a Tenerife sea inolvidable.",
          "find": "Encuentra tu coche",
          "Fleet": "Flota diversa:",
          "refinement": "Desde la refinación de las mejores marcas de lujo hasta modelos económicos compactos, nuestra variada flota satisface todas sus necesidades.",
          "Pricing": "Precios transparentes:",
          "straightforward": "Disfrute de nuestra política de precios clara y directa para una planificación fácil y sin estrés.",
          "Exceptional": "Servicio al cliente excepcional:",
          "dedicated": "Nuestro equipo dedicado está aquí para garantizar que su experiencia de alquiler sea fluida y agradable.",
          "Locations": "Ubicaciones convenientes:",
          "convenient": "Recogida y entrega en múltiples ubicaciones convenientes en Tenerife, facilitando el inicio de su viaje."
        },


        cookies:"Galletas",
        termes:"términos",
        dataprotection:"protección de datos",
        legalnotice:"aviso legal",
        header :{
      home:'Inicio',
      car:'Coches', 
      contact:'contactar',
      about:'Acerca de',
      legal :"legal",
      h_title:"Hacer una reserva"
      },
        hero: {
          title:"Explore Las Mejores", 
          title_b:"Ofertas Globales",
          slide1: {
            text: "Experimente la facilidad de alquilar con Alta Rent a Car. Reserva rápida, servicio impecable, y estarás listo para explorar la isla en minutos.",
            btntext: "reservar ahora"
          },
          slide2: {
            text: "Eleva tu experiencia de viaje con nuestra exclusiva selección de coches de lujo. Comodidad, estilo y rendimiento te esperan en cada giro.",
            btntext: "reservar ahora"
          },
          slide3: {
            text: "En Alta Rent a Car, siempre estamos aquí para ti. Disfruta de nuestro soporte 24/7 para una experiencia de alquiler sin preocupaciones.",
            btntext: "reservar ahora"
          },
          slide4: {
            text: "Explora los rincones ocultos de Tenerife con nuestras sugerencias de itinerarios personalizados. ¡Alta Rent a Car, más que solo un alquiler de coches!",
            btntext: "reservar ahora"
          }
        } ,
        welcome: {
          title: "Bienvenido a Alta Rent a car",
          subtitle: "Un líder global en alquiler de coches",
          text1: "Con más de 5 años de experiencia en la industria, puedes estar seguro de que ya sea que estés buscando un coche familiar, sedán o coche de prestigio para tus viajes de negocios o de ocio o necesites una furgoneta o camión para un trabajo, IdealRent tiene el vehículo para satisfacer todas tus necesidades de alquiler de coches.",
          text2: "Nuestro servicio gratuito está diseñado para que puedas salir a la carretera lo antes posible, es un servicio gratuito disponible en la mayoría de las estaciones. Con IdealRent, obtienes acceso a una solución de alquiler flexible para tu negocio. ¡Haz una reserva de alquiler de coches en línea ahora!",
          footerTitle: "Alta Rent a car",
          footerSubtitle: "Fundador de Alta Rent a car"
        },
        most:"más",
        popular:"ofertas de alquiler de coches populares" ,
        power_steering:"dirección hidráulica",
        radio: "radio",
        yes:"sí",
        no:"No",
        no_available:"No hay coches disponibles",
        sd:"ver detalles",
        ContactTitle: "Contacto",
        about: {
          title: "Su agencia local de alquiler de coches y vehículos utilitarios en Tenerife",
          description: "En Alta Rent a Car, nos enorgullecemos de ser el principal servicio de alquiler de coches y vehículos utilitarios de Tenerife. Convenientemente ubicados en toda la isla, ofrecemos una amplia gama de vehículos de alta calidad para satisfacer cualquier necesidad, ya sea que esté explorando rutas escénicas o gestionando logística. Experimente procesos de alquiler sin complicaciones, opciones flexibles y un servicio al cliente dedicado diseñado para hacer que su experiencia de alquiler sea lo más sencilla y agradable posible.",
          carTypes: "Tipos de coches",
          localisation: "Localización",
          bestPrice: "Mejor precio",
          payOnline: "Paga en línea",
          seeAllCars: "Ver todos los coches"
        },
        fauter3: {
          airportServiceTitle: "Servicio de entrega de Alta Rent a Car en los aeropuertos de Tenerife",
          airportServiceDescription: "Llega con estilo con el servicio de entrega de Alta Rent a Car en los aeropuertos de Tenerife. Nuestros vehículos de lujo te estarán esperando a tu llegada, proporcionando la combinación perfecta de sofisticación y comodidad. Ya sea que aterrices en el Aeropuerto de Tenerife Sur o en el Aeropuerto de Tenerife Norte, nuestro servicio de entrega de coches sin complicaciones garantiza que puedas ponerte en marcha de inmediato, disfrutando de un comienzo de viaje elegante y sin estrés.",
          hotelServiceTitle: "Entrega de coches de lujo a su hotel",
          hotelServiceDescription: "Experimenta una comodidad y lujo incomparables con el servicio de entrega de coches premium de Alta Rent a Car. Ya sea que llegues a tu hotel en Tenerife o te muevas entre destinos, nuestra flota de vehículos de alta gama se entregará directamente a tu puerta. Disfruta del confort de nuestros interiores lujosos, del servicio profesional y de la libertad de viajar a tu propio ritmo, haciendo que tu estancia sea excepcional de principio a fin."
        } ,
        fauter2: {
          whyChooseUs: "Por qué elegirnos",
          reasonToBook: "Razón para reservar un coche de alquiler con Alta rent a car",
          description: "En Alta Rent a Car, nos especializamos en ofrecer servicios de alquiler de coches excepcionales en la hermosa isla de Tenerife. Con un compromiso con la satisfacción del cliente y una pasión por la movilidad, ofrecemos una experiencia de alquiler sin problemas que atiende tanto a los locales como a los turistas.",
          diverseFleet: "Flota Diversa",
          competitivePricing: "Precios Competitivos",
          convenientLocations: "Ubicaciones Convenientes",
          exceptionalService: "Servicio al Cliente Excepcional",
          flexibleOptions: "Opciones de Alquiler Flexibles",
          commitmentToSafety: "Compromiso con la Seguridad"
        },
        fauter1: {
          howToRent: "Cómo alquilar un coche",
          experience: "Experimente con nuestras ofertas de alquiler de coches",
          step1: {
            title: "Consigue un coche y disfruta del viaje",
            description: "¡Disfruta de tu viaje y nuestro buen servicio!"
          },
          step2: {
            title: "Selecciona una fecha y ubicación",
            description: "Elija la ubicación y la fecha de alquiler necesaria."
          },
          step3: {
            title: "Selecciona y reserva un coche",
            description: "Selecciona el vehículo y proporciona la información necesaria."
          }
        },

        testimonials: {
          0: {
            message: "Como propietario de un negocio, a menudo necesito vehículos confiables para mis operaciones. Alta Rent a Car siempre ha cumplido con mis necesidades con una amplia variedad de opciones y precios competitivos. Su profesionalismo y flexibilidad los convierten en mi primera opción cada vez.",
            name: "Carlos S.",
            job: "Empresario Local",
            avatar:avatar
          },
          1: {
            message: "Alta Rent a Car hizo que nuestro viaje a Tenerife fuera sin problemas y sin estrés. El proceso de recogida y devolución fue rápido y fácil, y el personal fue increíblemente útil en recomendar rutas y lugares para visitar. Definitivamente usaría sus servicios nuevamente!",
            name: "Jane Smith",
            job: "Gerente de Proyecto",
            avatar:avatar
          },
          2: {
            message: "Alquilar un coche de Alta Rent a Car fue una experiencia fantástica durante nuestras vacaciones en Tenerife. El servicio al cliente fue impecable y el coche que alquilamos estaba en perfectas condiciones. Hizo que nuestra exploración de la isla fuera mucho más agradable y flexible!",
            name: "Marie D",
            job: "Turista Francesa",
            avatar:avatar
          }
        },
        excellence: "Excelencia inigualable y satisfacción del cliente",
        excellenceDesc : "En el corazón de nuestra misión se encuentra la búsqueda incesante de la excelencia inigualable y la satisfacción del cliente. Creemos que la excelencia no es solo una meta sino un viaje continuo, donde cada paso está dedicado a superar las expectativas y establecer nuevos estándares de calidad. Nuestro compromiso con la satisfacción del cliente nos impulsa a comprender y anticiparnos a sus necesidades, garantizando que cada interacción sea personalizada y cada experiencia sea excepcional.",
      rentTitle: "Alquiler simple y rápido",
      rentDesc: "Priorizamos tus necesidades y nos esforzamos por garantizar que tu experiencia con nosotros sea nada menos que excepcional",
      vehiclesTitle: "Vehículos modernos y bien mantenidos",
      vehiclesDesc: "Priorizamos tus necesidades y nos esforzamos por garantizar que tu experiencia con nosotros sea nada menos que excepcional",
      servicesTitle: "Servicios rápidos y flexibles",
      servicesDesc: "Priorizamos tus necesidades y nos esforzamos por garantizar que tu experiencia con nosotros sea nada menos que excepcional",
      bookYourCar:"Reserve su alquiler de coches fácilmente desde su teléfono",
      bookYourCarDesc:"Puede reservar fácilmente un alquiler de coches desde su teléfono, lo que garantiza una experiencia perfecta y conveniente. Con solo unos toques, puede elegir su vehículo, seleccionar sus fechas de alquiler y completar su reserva, todo desde la comodidad de su dispositivo móvil."
      ,AltaRentalText: "Con el alquiler de coches de élite, puedes disfrutar al máximo de tus vacaciones. Experimenta un viaje sin problemas y un servicio excepcional, garantizando un viaje sin estrés y memorable.",
      makeReservation: "Hacer Reserva",
      seeAllCars: "Ver todos los coches",
      Phone: "Teléfono",
      Address: "DIRECCIÓN",
      Email: "Correo electrónico: contact@Alta-rentcar.com",
      partners:"Nuestros socios",
      ourConditions: "Nuestras Condiciones",
      comprehensiveInsurance: "Se incluye un seguro completo",
      comprehensiveInsuranceDesc: "Se incluye un seguro completo que cubre varios tipos de daños.",
      freeChildSeat: "Asiento de niño gratis",
      freeChildSeatDesc: "Se proporciona un asiento de niño gratis para mayor seguridad.",
      // Add more translations as needed
      bookCarOfDreams: "Alta Rent a Car Tenerife Explora Tenerife con estilo con Alta Rent a Car. Ofrecemos una amplia gama de vehículos de lujo y económicos para satisfacer todas sus necesidades de viaje. Fiable, asequible y siempre listo para conducir.",
      QUICKLINKS: "ENLACES RÁPIDOS",
      home: "Inicio",
      cars: "Coches",
      about_t: "Acerca de",
      Aboutus : "Sobre nosotros",
      Contactus: " Contacta con nosotras",
      whyUs: "Por qué nosotros",
      testimonials: "Testimonios",
      explore: "Explorar",
      bookCar: "Reservar un coche",
      weddings: "Bodas",
      trustSafety: "Confianza y Seguridad",
      faqs: "Preguntas frecuentes",
      getHelp: "Obtener Ayuda",
      getStarted: "Empezar",
      tryIt: "Pruébalo",
      pickLocation: "LUGAR DE RECOGIDA:",
      returnLocation: "LUGAR DE DEVOLUCIÓN:",
      pickUpDate: "FECHA DE RECOGIDA:",
      dropOffDate: "FECHA DE DEVOLUCIÓN:",
      cancel: "Cancelar",
      search: "Buscar",
      difflocation :"Dejar el coche en diferentes lugares", 
      // Add more translations as needed
        
      } 
    }
    ,
    rus:{
            translation: {
              after:"после",
              accs_description:"Драйв с душевным спокойствием знать, что остальные водители также застрахованы.",
              accs:{
                "AIRPORT CHANGE": "СМЕНА АЭРОПОРТА",
                "SPECIAL SEAT FOR NEWBORN": "СПЕЦИАЛЬНОЕ СИДЕНЬЕ ДЛЯ НОВОРОЖДЕННЫХ",
                "BABY CAR SEAT": "АВТОКРЕСЛО ДЛЯ МЛАДЕНЦА",
                "NIGHT TIME DELIVERY": "НОЧНАЯ ДОСТАВКА",
                "ADDITIONAL DRIVER": "ДОПОЛНИТЕЛЬНЫЙ ВОДИТЕЛЬ",
                "GPS": "GPS",
              },
              enter_ht:"Введите название отеля",
              ht:"отель",
              drivers:"данные водителя",
              fixed:"фиксированной цене",
              thanks:"Спасибо за ваш заказ  Мы проверим наличие и вышлем вам всю информацию для вашей электронной почты как можно скорее ",
              unit:"штуки в день",
              book:{
                name:"имя",
                surname:"фамилия",
                Telephone :"телефонный",
                Email :"электронная почта",
                Country: "страна",
                DateofBirth:"дата рождения",
                Comments:"комментарии",
                terms:"Я принимаю условия и положения"
               },
              "booking":"*Бесплатное аннулирование *Изменение бронирования *Неограниченные километры *Бесплатная доставка в аэропорт и отель",
              "total":"общей стоимости",
              "acc":"АКСЕССУАРЫ И ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ",
              "ass":"страхование",
              "avant":"Авантаж!",
              "select":"выбрать",
              "price":"цена",
              "ourar":"наши автомобили",
              nocars:"Нет машин.",
              category:"категория:",
              doors:"двери:",
              passengers:"пассажиров:",
              models:"модели автомобиля:",
              show:"показать цены",
              hotel:"отель",
              "modif":"Изменить фильтр",
              "days":"дней",
              "rr":"арендовать автомобиль",
              send:"отправить",
              cookies:"Печенье",
              termes:"термы",
              legal :"юридический",
              dataprotection:"защите данных",
              legalnotice:"официальное уведомление",
              cancel:"отменить",
              ContactTitle: "Контакт",
              Phone: "Телефон",
              Address: "Адрес",
              Email: "Электронная почта: contact@Alta-rentcar.com",
              AboutUs:{
                "email":"ваш адрес электронной почты",
                "msg":"ваше сообщение",
                "name":"ваше имя",
                "subj":"предмет",
               "Touch":"Давайте свяжемся с вами!",
               "write":"Вы можете писать все время, что приложение или электронная почта .",
                "whoAreYou": "Alta Rent a Car на Тенерифе. У нас Индивидуальный подход к каждому клиенту, сервис с доставкой по указанному Вами адресу в удобное для Вас время. У нас есть автомобили любого класса от эконом до бизнес класса, кроссоверы, внедорожники и коммерческие автомобили, поэтому каждый подберет для себя подходящий вариант автомобиля. Мы будем рады видеть Вас в качестве нашего клиента!",
                "ourVision": "Наше видение в Alta Rent a Car — стать ведущим поставщиком услуг по прокату автомобилей на Тенерифе, известным своим исключительным обслуживанием клиентов, разнообразными вариантами транспортных средств и удобной службой доставки. Мы стремимся установить стандарты качества в отрасли, постоянно внедряя инновации и расширяя наши предложения для удовлетворения растущих потребностей наших клиентов. Наше видение — создавать незабываемые впечатления для наших клиентов, гарантируя, что каждое путешествие с нами будет гладким, приятным и беспроблемным.",
                "ourMission": "Наша миссия в Alta Rent a Car — предоставить каждому нашему клиенту индивидуальный и удобный опыт аренды автомобилей. Мы стремимся предложить широкий выбор автомобилей: от эконом до бизнес-класса, кроссоверов, внедорожников и коммерческих автомобилей, гарантируя, что каждый сможет найти идеальный автомобиль для своих нужд. Наша цель — превзойти ожидания клиентов, предоставляя исключительный сервис и гибкость, включая доставку по указанным адресам в удобное время.",
                "text": "Свяжитесь с нами сейчас и забронируйте свою поездку!",
                "btntext": "Забронируйте сейчас",
                "Discover": "Откройте для себя лучший опыт аренды автомобиля с",
                "Alta": "Alta Rent a Car!",
                "welcome": "Добро пожаловать в Alta RENT A CAR!",
                "Since": "С",
                "who": "Кто вы?",
                "mission": "Наша миссия",
                "vision": "Наша цель",
                "vehi": "Роскошные автомобили",
                "exp": "Ощутите максимальный комфорт и стиль с нашим ассортиментом роскошных автомобилей. Идеально подходит для превращения любой поездки в особое событие.",
                "echo": "Экономичные автомобили",
                "effi": "Выберите эффективность и ценность с нашим выбором экономичных автомобилей. Идеально подходит для изучения Тенерифе с ограниченным бюджетом.",
                "Whether": "Будь то однодневная поездка или продолжительное пребывание, мы предлагаем гибкие сроки аренды, чтобы соответствовать вашему маршруту.",
                "asst": "Помощь",
                "Enjoy": "Наслаждайтесь покоем с нашей круглосуточной поддержкой клиентов. Мы всегда здесь, когда вам это нужно.",
                "hotel": "Доставка в отель и аэропорт",
                "convenience": "Для вашего удобства мы доставим выбранный вами автомобиль прямо в ваш отель или в аэропорт, сделав ваше путешествие безмятежным и без стресса.",
                "Awards": "Наши награды",
                "Luxury": "Аренда автомобилей роскоши и экономического класса на Тенерифе",
            "superior": "В Alta Rent a Car мы предлагаем превосходный опыт аренды с широким выбором автомобилей роскоши и экономического класса. Независимо от того, ищете ли вы элегантный комфорт роскошного седана или эффективность экономичной модели, у нас есть идеальный автомобиль, чтобы сделать ваше путешествие на Тенерифе незабываемым.",
            "find": "Найдите свой автомобиль",
                      "Fleet": "Разнообразный парк автомобилей:",
                      "refinement": "От изысканности ведущих мировых марок роскоши до компактных моделей эконом-класса, наш разнообразный парк автомобилей удовлетворит все ваши потребности.",
                      "Pricing": "Прозрачная ценовая политика:",
                      "straightforward": "Наслаждайтесь нашей четкой и простой ценовой политикой для легкого и без стресса планирования.",
                      "Exceptional": "Исключительное обслуживание клиентов:",
                      "dedicated": "Наша специализированная команда здесь, чтобы ваш опыт аренды прошел гладко и приятно.",
                      "Locations": "Удобные местоположения:",
                      "convenient": "Заберите и верните автомобиль в нескольких удобных местах на Тенерифе, что делает начало вашего путешествия легким."
              }
                ,
              header: {
                home: 'Главная',
                car: 'Машины',
                about: 'О нас',
                contact:'контакт',
                h_title: "Забронировать"
              },
              hero: {
                title: "Исследуйте лучшие",
                title_b: "Глобальные предложения",
                slide1: {
                  text: "Почувствуйте легкость аренды с Alta Rent a Car. Быстрое бронирование, безупречный сервис, и вы свободно отправляетесь исследовать остров.",
                  btntext: "Забронируйте сейчас"
                },
                slide2: {
                  text: "Поднимите свой опыт путешествий с нашим эксклюзивным выбором роскошных автомобилей. Комфорт, стиль и производительность ждут вас на каждом повороте.",
                  btntext: "Забронируйте сейчас"
                },
                slide3: {
                  text: "В Alta Rent a Car мы всегда здесь для вас. Наслаждайтесь нашей круглосуточной поддержкой для беззаботного арендного опыта.",
                  btntext: "Свяжитесь с нами"
                },
                slide4: {
                  text: "Исследуйте скрытые уголки Тенерифе с нашими индивидуальными предложениями по маршруту. Alta Rent a Car - это не просто аренда автомобиля!",
                  btntext: "Забронируйте сейчас"
                }
              },
              welcome: {
                title: "Добро пожаловать в Alta Rent a car",
                subtitle: "Глобальный лидер в сфере аренды автомобилей",
                text1: "Имея более +5 лет опыта в индустрии, вы можете быть уверены, что, независимо от того, ищете ли вы автомобиль для семьи, седан или престижный автомобиль для ваших деловых или отдыхающих поездок, или вам нужен фургон или грузовик для работы, IdealRent имеет автомобиль, чтобы удовлетворить любую потребность в аренде автомобиля.",
                text2: "Наши бесплатные услуги разработаны так, чтобы вы как можно скорее выехали на дорогу, это бесплатная услуга, доступная в большинстве станций. С IdealRent вы получаете доступ к гибкому решению аренды для вашего бизнеса. Забронируйте аренду автомобиля онлайн прямо сейчас!",
                footerTitle: "Alta Rent a car",
                footerSubtitle: "Основатель Alta Rent a car"
              },
              most: "Самые",
              popular: "популярные предложения по аренде автомобилей",
              power_steering: "гидроусилитель руля",
              radio: "радио",
              yes: "Да",
              no: "Нет",
              no_available: "Машин нет в наличии",
              sd: "Подробнее",
              about: {
                title: "Ваше местное агентство по аренде автомобилей и специального назначения на Тенерифе",
                description: "В Alta Rent a Car мы гордимся тем, что являемся ведущими на Тенерифе по аренде автомобилей и транспортных средств обслуживания. Удобно расположенные по всему острову, мы предлагаем широкий выбор высококачественных транспортных средств, подходящих для любой потребности, будь то изучение живописных м",
                carTypes: "Типы автомобилей",
                localisation: "Локализация",
                bestPrice: "Лучшая цена",
                payOnline: "Оплатить онлайн",
                seeAllCars: "Посмотреть все автомобили"
              },
              fauter3: {
                airportServiceTitle: "Служба доставки автомобилей Alta Rent a Car в аэропортах Тенерифе",
                airportServiceDescription: "Прибытие с элегантностью благодаря услуге доставки автомобилей Alta Rent a Car в аэропорты Тенерифе. Наши роскошные автомобили будут ждать вас по прибытии, обеспечивая идеальное сочетание изящества и комфорта. Независимо от того, приземляетесь ли вы в аэропорту Тенерифе-Юг или Тенерифе-Норт, наша безупречная служба доставки автомобилей гарантирует, что вы сможете немедленно отправиться в путь, наслаждаясь беззаботным и элегантным началом вашего путешествия.",
                hotelServiceTitle: "Доставка роскошных автомобилей к вашему отелю",
                hotelServiceDescription: "Опыт непревзойденного удобства и роскоши благодаря премиальной услуге по доставке автомобилей Alta Rent a Car. Независимо от того, прибываете ли вы в свой отель на Тенерифе или перемещаетесь между пунктами назначения, наш парк высококлассных автомобилей будет доставлен прямо к вашему порогу. Насладитесь комфортом наших роскошных интерьеров, профессионального обслуживания и свободы путешествия в вашем собственном темпе, сделав ваше пребывание исключительным от начала до конца."
              },
              fauter2: {
                whyChooseUs: "Почему выбирают нас",
                reasonToBook: "Причины арендовать автомобиль у Alta Rent a Car",
                description: "В Alta Rent a Car мы специализируемся на предоставлении исключительных услуг проката автомобилей на прекрасном острове Тенерифе. Обязательство удовлетворению потребностей клиентов и страсть к мобильности позволяют нам предложить безупречный опыт аренды, который удовлетворяет как местных жителей, так и туристов.",
                diverseFleet: "Разнообразный парк автомобилей",
                competitivePricing: "Конкурентоспособные цены",
                convenientLocations: "Удобные месторасположения",
                exceptionalService: "Исключительное обслуживание клиентов",
                flexibleOptions: "Гибкие варианты аренды",
                commitmentToSafety: "Обязательство безопасности"
              },
              fauter1: {
                howToRent: "Как арендовать автомобиль",
                experience: "Опыт с нашими предложениями по аренде автомобилей",
                step1: {
                  title: "Возьмите автомобиль и наслаждайтесь поездкой",
                  description: "Наслаждайтесь вашей поездкой и нашим отличным сервисом!"
                },
                step2: {
                  title: "Выберите дату и местоположение",
                  description: "Выберите местоположение и нужную дату аренды."
                },
                step3: {
                  title: "Выберите и зарезервируйте автомобиль",
                  description: "Выберите автомобиль и предоставьте необходимую информацию."
                }

              },
              testimonials: {
                0: {
                  message: "В качестве владельца бизнеса мне часто требуются надежные автомобили для моих операций. Alta Rent a Car всегда удовлетворяет мои потребности широким выбором и конкурентоспособными ценами. Их профессионализм и гибкость делают их моим первым выбором каждый раз.",
                  name: "Карлос С.",
                  job: "Местный предприниматель",
                  avatar:avatar
                },
                1: {
                  message: "Alta Rent a Car сделали наше путешествие на Тенерифе легким и беззаботным. Процесс получения и сдачи автомобиля был быстрым и простым, а сотрудники были невероятно полезны в рекомендации маршрутов и мест для посещения. Я определенно воспользовался бы их услугами снова!",
                  name: "Джейн Смит",
                  job: "Менеджер проекта",
                  avatar:avatar
                },
                2: {
                  message: "Аренда автомобиля в Alta Rent a Car была фантастическим опытом во время нашего отдыха на Тенерифе. Обслуживание клиентов было безупречным, а автомобиль, который мы арендовали, находился в идеальном состоянии. Это сделало наше исследование острова намного более приятным и гибким!",
                  name: "Мари Д",
                  job: "Французский турист",
                  avatar:avatar
                }
              },
              whyus: {
                "title": "Безупречное качество и удовлетворенность клиентов",
                "rent": "Арендуйте просто и быстро",
                "modernVehicles": "Современные и ухоженные автомобили",
                "promptServices": "Быстрые и гибкие услуги"
              },
              excellence: "Безупречное качество и удовлетворенность клиентов",
              excellenceDesc : "В основе нашей миссии лежит неустанное стремление к непревзойденному совершенству и удовлетворению потребностей клиентов. Мы считаем, что совершенство — это не просто цель, а постоянный путь, где каждый шаг направлен на то, чтобы превзойти ожидания и установить новые стандарты качества. Наша приверженность удовлетворению потребностей клиентов заставляет нас понимать и предугадывать ваши потребности, гарантируя, что каждое взаимодействие будет персонализированным, а каждый опыт — исключительным.",
              rentTitle: "Аренда просто и быстро",
              rentDesc: "Мы придаем большое значение вашим потребностям и прилагаем максимум усилий, чтобы ваш опыт с нами был ничем иным, как выдающимся",
              vehiclesTitle: "Современные и ухоженные автомобили",
              vehiclesDesc: "Мы придаем большое значение вашим потребностям и прилагаем максимум усилий, чтобы ваш опыт с нами был ничем иным, как выдающимся",
              servicesTitle: "Быстрые и гибкие услуги",
              servicesDesc: "Мы придаем большое значение вашим потребностям и прилагаем максимум усилий, чтобы ваш опыт с нами был ничем иным, как выдающимся",
              bookYourCar: "Забронируйте аренду автомобиля легко прямо с вашего телефона",
              bookYourCarDesc: "Вы можете легко забронировать аренду автомобиля прямо с вашего телефона, обеспечивая безупречный и удобный опыт. Всего за несколько касаний вы можете выбрать свой автомобиль, выбрать даты аренды и завершить бронирование, все это на комфортном вашем мобильном устройстве.",
              AltaRentalText: "С Alta арендованным автомобилем вы можете полностью насладиться вашим отпуском. Опыт беспрепятственных путешествий и исключительного обслуживания, обеспечивающего беззаботное и запоминающееся путешествие.",
              makeReservation: "Забронировать",
              seeAllCars: "Посмотреть все автомобили",
              partners: "Наши партнеры",
              ourConditions: "Наши условия",
              comprehensiveInsurance: "В комплект входит обширное страхование",
              comprehensiveInsuranceDesc: "В комплект входит обширное страхование, покрывающее различные виды ущерба.",
              freeChildSeat: "Бесплатное детское кресло",
              freeChildSeatDesc: "Бесплатное детское кресло предоставляется для безопасности.",
              bookCarOfDreams: "Alta Rent a Car Tenerife Исследуйте Тенерифе стильно с Alta Rent a Car. Мы предлагаем широкий выбор автомобилей класса люкс и эконом-класса, способных удовлетворить все ваши потребности в поездках. Надежный, доступный и всегда готовый к работе.",
              QUICKLINKS: "БЫСТРЫЕ ССЫЛКИ",
              home: "Главная",
              cars: "Автомобили",
              about_t: "О нас",
              Aboutus : "о нас",
              Contactus: "Связаться с нами",
              whyUs: "Почему мы",
              testimonials: "Отзывы",
              explore: "Исследовать",
              bookCar: "Забронировать автомобиль",
              weddings: "Свадьбы",
              trustSafety: "Доверие и безопасность",
              faqs: "Часто задаваемые вопросы",
              getHelp: "Получить помощь",
              getStarted: "Начать",
              tryIt: "Попробуйте сами",
              pickLocation: "ВЫБРАТЬ МЕСТОПОЛОЖЕНИЕ:",
              returnLocation: "МЕСТО ВОЗВРАТА:",
              pickUpDate: "ДАТА ПРИБЫТИЯ:",
              dropOffDate: "ДАТА ВЫЕЗДА:",
              cancel: "Отмена",
              search: "Поиск",
              difflocation: "Сдайте автомобиль в другом месте"
              
              

            }

      
    }
  },
  lng: "en",
  fallbackLng: "en",  

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
