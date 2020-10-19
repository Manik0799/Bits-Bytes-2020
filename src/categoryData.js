import {
  travelBlogs,
  fashionBlogs,
  historyBlogs,
  entertainmentBlogs,
  healthBlogs,
  quizBlogs,
  horoscopeBlogs,
  lifestyleBlogs,
  weddingBlogs,
  technologyBlogs,
  covidBlogs,
  careerBlogs,
  foodBlogs,
} from "./blogData";

const data = [
  {
    id: 1,
    name: "Unpredictable Utopia",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80",

    link: "/travel",
    backimage: require("assets/Category-Header-Images/Travel.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: travelBlogs,
  },
  {
    id: 2,
    name: "Bold is the new beautiful",
    image:
      "https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1061&q=80",
    link: "/fashion",
    backimage: require("assets/Category-Header-Images/fashion.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: fashionBlogs,
  },
  {
    id: 3,
    name: "Rewind",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    link: "/history",
    backimage: require("assets/Category-Header-Images/history.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: historyBlogs,
  },
  {
    id: 4,
    name: "Claim to fame",
    image:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80",
    link: "/entertainment",
    backimage: require("assets/Category-Header-Images/entertainment.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: entertainmentBlogs,
  },
  {
    id: 5,
    name: "Shape of You",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    link: "/health",
    backimage: require("assets/Category-Header-Images/health.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: healthBlogs,
  },
  {
    id: 6,
    name: "Bits & Bytes Buzz",
    image:
      "https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    link: "/quiz",
    backimage: require("assets/Category-Header-Images/quiz.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: quizBlogs,
  },
  {
    id: 7,
    name: "Crystal Gazing",
    image:
      "https://images.unsplash.com/photo-1515942661900-94b3d1972591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    link: "/horoscope",
    backimage: require("assets/Category-Header-Images/horoscope.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: horoscopeBlogs,
  },
  {
    id: 8,
    name: "House of Grandeur",
    image:
      "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    link: "/lifestyle",
    backimage: require("assets/Category-Header-Images/lifestyle.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: lifestyleBlogs,
  },
  {
    id: 9,
    name: "Getting Hitched",
    image:
      "https://images.unsplash.com/photo-1553915632-175f60dd8e36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    link: "/weddings",
    backimage: require("assets/Category-Header-Images/wedding.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: weddingBlogs,
  },
  {
    id: 10,
    name: "Doorway to new era",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80",
    link: "/technology",
    backimage: require("assets/Category-Header-Images/technology.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: technologyBlogs,
  },
  {
    id: 11,
    name: "Pandemic Pause",
    image:
      "https://images.unsplash.com/photo-1586864387564-ea6bc7ceb97c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    link: "/covid",
    backimage: require("assets/Category-Header-Images/covid.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: covidBlogs,
  },
  {
    id: 12,
    name: "Stepping Stone",
    image:
      "https://images.unsplash.com/photo-1506784926709-22f1ec395907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1048&q=80",
    link: "/careers",
    backimage: require("assets/Category-Header-Images/career.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: careerBlogs,
  },
  {
    id: 13,
    name: "Edible Network",
    image:
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=931&q=80",
    link: "/food",
    backimage: require("assets/Category-Header-Images/food.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: foodBlogs,
  },
];

export default data;
