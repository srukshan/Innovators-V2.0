const Trips = [
  {
    id: 1,
    name: "Kandy Trip #1",
    owner: "Sachith Rukshan",
    days: 5,
    startDate: "2019-05-01",
    endDate: "2019-05-07",
    location: ["Nuwara Eliya", "Kurunagala", "Sigiriya"],
    status: "Waiting",
    image: "https://images.pexels.com/photos/237018/pexels-photo-237018.jpeg",
    rating: 3,
    budget: "Rs. 3,000.00",
    gender: "Male",
    age: "25-30"
  },
  {
    id: 2,
    name: "Kandy Trip #2",
    owner: "Lakshitha Perera",
    days: 10,
    startDate: "2019-05-01",
    endDate: "2019-05-12",
    location: ["Kurunagala", "Sigiriya", "Singhe Raja"],
    status: "Finished",
    image:
      "https://www.gettyimages.com/gi-resources/images/frontdoor/creative/PanoramicImagesRM/FD_image.jpg",
    rating: 2,
    budget: "Rs. 2,000.00",
    gender: "Female",
    age: "35-47"
  },
  {
    id: 3,
    name: "Kandy Trip #3",
    owner: "Sachith Kulasooriya",
    days: 10,
    startDate: "2019-04-01",
    endDate: "2019-04-12",
    location: ["Kurunagala", "Sigiriya", "Singhe Raja"],
    status: "Finished",
    image:
      "https://www.gettyimages.com/gi-resources/images/frontdoor/creative/PanoramicImagesRM/FD_image.jpg",
    rating: 2,
    budget: "Rs. 2,000.00",
    gender: "Female",
    age: "35-47"
  }
];

export const getTrips = () => Trips;

export const getTrip = id => Trips.find(t => t.id === id);
