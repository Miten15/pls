export interface ListingGeo {
    id: string;
    name: string;
    description: string;
    host: string;
    date: string;
    venue: string;
    price: number;
    categories: string[];
    thumbnail_url: string;
    medium_url: string;
    latitude: string;
    longitude: string;
  }
  
  export const listingGeo: ListingGeo[] = [
    {
        "id": "1",
        "name": "Bangalore Poetry Festival",
        "description": "Gathering of renowned Indian and international poets",
        "host": "Bangalore Cultural Association",
        "date": "2024-02-18",
        "venue": "Bangalore Palace Grounds",
        "price": 200,
        "categories": ["Film & Media", "Music"],
        "thumbnail_url": "https://example.com/images/thumb-poetry.jpg",
        "medium_url": "https://example.com/images/med-poetry.jpg",
        "latitude": "13.013489924600282",
        "longitude": "77.58558702233358",

        
    },
    {
        "id": "2",
        "name": "Mumbai Fashion Week",
        "description": "Top designers showcase their latest collections",
        "host": "Mumbai Designers Association",
        "date": "2024-02-22",
        "venue": "Grand Hyatt Mumbai",
        "price": 3000,
        "categories": ["Films & Media"],
        "thumbnail_url": "https://example.com/images/thumb-fashion.jpg",
        "medium_url": "https://example.com/images/med-fashion.jpg",
        "latitude": "19.07700947444487",
        "longitude": "72.85114625264129",
         

    },
    {
        "id": "3",
        "name": "Big Data & AI Summit",
        "description": "Discuss latest trends in big data, analytics and AI",
        "host": "ML Association of India",
        "date": "2024-02-15",
        "venue": "Hyderabad International Convention Center",
        "price": 2500,
        "categories": ["Education"],
        "thumbnail_url": "https://example.com/images/thumb-ai.jpg",
        "medium_url": "https://example.com/images/med-ai.jpg",
        "latitude": "17.472753255903324,",
        "longitude": "78.37301110507418",
         


    },
    {
        "id": "4", 
        "name": "Future of Work Conference",
        "description": "Discuss how technology is changing the employment landscape",
        "host": "India Future Foundation",
        "date": "2024-02-10",
        "venue": "The LaLiT New Delhi", 
        "price": 1200,
        "categories": ["Education", "Business"],
        "thumbnail_url": "https://example.com/images/thumb-work.jpg", 
        "medium_url": "https://example.com/images/med-work.jpg",
        "latitude": "28.63191573154268",
        "longitude": "77.22758654689059",

         
    },
    {
        "id": "5",
        "name": "Comic Fan Fest",
        "description": "Celebrate comic books, superheroes, anime and pop culture", 
        "host": "Comic Buffs of India",
        "date": "2024-02-28", 
        "venue": "Hitex Exhibition Center, Hyderabad",
        "price": 900,
        "categories": ["Films & Media"],
        "thumbnail_url": "https://example.com/images/thumb-comics.jpg", 
        "medium_url": "https://example.com/images/med-comics.jpg",
        "latitude": "17.47086253691281",
        "longitude": "78.37463267717989",

    
    },
    {
        "id": "6", 
        "name": "India Smart Cities Summit",
        "description": "Discuss urban development and future smart cities projects",
        "host": "Ministry of Housing and Urban Affairs", 
        "date": "2024-02-07",
        "venue": "Pragati Maidan, New Delhi",
        "price": 0,
        "categories": ["Education", "Business"],
        "thumbnail_url": "https://example.com/images/thumb-smartcity.jpg",
        "medium_url": "https://example.com/images/med-smartcity.jpg",
        "latitude": "32.61939296279847",
        "longitude": "77.24388555389324",
    
    },
    {
        "id": "7",
        "name": "Young Leaders Conference", 
        "description": "Bringing together next-gen business leaders and entrepreneurs ",
        "host": "Junior Chamber of Commerce",
        "date": "2024-02-21",
        "venue": "The Leela Palace Bengaluru", 
        "price": 5000,
        "categories": ["Business"],
        "thumbnail_url": "https://example.com/images/thumb-leaders.jpg",
        "medium_url": "https://example.com/images/med-leaders.jpg",
        "latitude": "21.96069197494066",
        "longitude": "77.6488223328954",

    },
        {
            "id": "8",
            "name": "Delhi Music Festival",
            "description": "Celebrating diverse music cultures from around the world",
            "host": "Delhi Music Society",
            "date": "2024-03-10",
            "venue": "Jawaharlal Nehru Stadium, Delhi",
            "price": 500,
            "categories": ["Music"],
            "thumbnail_url": "https://example.com/images/thumb-music.jpg",
            "medium_url": "https://example.com/images/med-music.jpg",
            "latitude": "28.580315022541753",
            "longitude": "77.23251813521737"
        },
        {
            "id": "9",
            "name": "Indian Institute of Technology (IIT) Conference",
            "description": "Exploring cutting-edge research and innovation",
            "host": "IIT Delhi",
            "date": "2024-04-05",
            "venue": "IIT Delhi Campus",
            "price": 0,
            "categories": ["Education"],
            "thumbnail_url": "https://example.com/images/thumb-iit.jpg",
            "medium_url": "https://example.com/images/med-iit.jpg",
            "latitude": "28.54506893021526",
            "longitude": "77.1926906036682"
        },
        {
            "id": "10",
            "name": "Bollywood Film Awards",
            "description": "Honoring excellence in Indian cinema",
            "host": "Filmfare",
            "date": "2024-04-20",
            "venue": "Mumbai Film City",
            "price": 1500,
            "categories": ["Film & Media"],
            "thumbnail_url": "https://example.com/images/thumb-bollywood.jpg",
            "medium_url": "https://example.com/images/med-bollywood.jpg",
            "latitude": "19.15521142531817",
            "longitude": "72.90771086723585"
        },
        {
            "id": "11",
            "name": "Indian Premier League (IPL) Cricket Match",
            "description": "Exciting T20 cricket action featuring top Indian and international players",
            "host": "BCCI",
            "date": "2024-04-25",
            "venue": "Wankhede Stadium, Mumbai",
            "price": 1000,
            "categories": ["Sports"],
            "thumbnail_url": "https://example.com/images/thumb-ipl.jpg",
            "medium_url": "https://example.com/images/med-ipl.jpg",
            "latitude": "18.938875659530064",
            "longitude": "72.82551560565127"
        },
        {
            "id": "12",
            "name": "Tech Summit Bangalore",
            "description": "Showcasing the latest advancements in technology and innovation",
            "host": "TechX",
            "date": "2024-05-05",
            "venue": "Bangalore International Exhibition Centre (BIEC)",
            "price": 1500,
            "categories": ["Technology", "Business"],
            "thumbnail_url": "https://example.com/images/thumb-tech.jpg",
            "medium_url": "https://example.com/images/med-tech.jpg",
            "latitude": "13.085033564686477",
            "longitude": "77.60594007526537"
        },
        {
            "id": "13",
            "name": "Indian Yoga Retreat",
            "description": "A serene retreat to rejuvenate mind, body, and soul",
            "host": "Yoga Bliss",
            "date": "2024-05-15",
            "venue": "Rishikesh, Uttarakhand",
            "price": 2500,
            "categories": ["Film & Media"],
            "thumbnail_url": "https://example.com/images/thumb-yoga.jpg",
            "medium_url": "https://example.com/images/med-yoga.jpg",
            "latitude": "30.10337379217408",
            "longitude": "78.29466187591438"
        },
        {
            "id": "14",
            "name": "Indian Startup Expo",
            "description": "Showcasing India's most innovative startups",
            "host": "Startup India",
            "date": "2024-06-01",
            "venue": "Pragati Maidan, New Delhi",
            "price": 500,
            "categories": ["Business", "Technology"],
            "thumbnail_url": "https://example.com/images/thumb-startup.jpg",
            "medium_url": "https://example.com/images/med-startup.jpg",
            "latitude": "28.615303706581054",
            "longitude": "77.2438930364744"
        },
        {
            "id": "15",
            "name": "Indian Food Festival",
            "description": "Indulge in a culinary journey through the diverse flavors of India",
            "host": "FoodieFest",
            "date": "2024-06-10",
            "venue": "Jawaharlal Nehru Stadium, Delhi",
            "price": 500,
            "categories": ["Film & Media"],
            "thumbnail_url": "https://example.com/images/thumb-food.jpg",
            "medium_url": "https://example.com/images/med-food.jpg",
            "latitude": "28.580315022541753",
            "longitude": "77.23251813521737"
        },
        {
            "id": "16",
            "name": "Indian Home Décor Exhibition",
            "description": "Explore the latest trends in Indian home décor and interior design",
            "host": "DécorWorld",
            "date": "2024-07-01",
            "venue": "India Expo Centre, Greater Noida",
            "price": 300,
            "categories": ["Film & Media"],
            "thumbnail_url": "https://example.com/images/thumb-decor.jpg",
            "medium_url": "https://example.com/images/med-decor.jpg",
            "latitude": "28.460967566700113",
            "longitude": "77.50316185319445"
        },
        {
            "id": "17",
            "name": "Indian Gaming Expo",
            "description": "Experience the latest in Indian gaming technology and culture",
            "host": "GameZone",
            "date": "2024-07-15",
            "venue": "Bombay Exhibition Centre, Mumbai",
            "price": 300,
            "categories": ["Education", "Film & Media"],
            "thumbnail_url": "https://example.com/images/thumb-gaming.jpg",
            "medium_url": "https://example.com/images/med-gaming.jpg",
            "latitude": "19.148267874203485",
            "longitude": "72.89072769070657"
        }
    ]
    