// export const createPages = (count) => {
//   return Array.from({ length: count }, (_, index) => index + 1);
// };

export const getDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// export const getTime = (time) => {
//   const minutes = 60;
// };

// export const filteredTrips = (movie, search) => {
//   movie.filter((trip) =>
//     trip.destination.toLowerCase().includes(search.toLowerCase())
//   );
// };
