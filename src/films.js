// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(function (movie) {
    return movie.director;
  });
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director === director);
  console.log(result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  //obtengo el director
  let moviesDirector = array.filter((movie) => movie.director === director);
  //obtengo las puntuaciones de ese director
  let result = moviesDirector.reduce((accumulator, movie) => {
    let resultMedia = accumulator + movie.score / moviesDirector.length;

    console.log(resultMedia);
    return resultMedia;
  }, 0);

  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let titles = array.map(function (movie) {
    return movie.title;
  });
  let orderTitles = titles.sort();
  return orderTitles.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arrayToSort = array.map(function (movie) {
    return {
      title: movie.title,
      year: movie.year
    };
  });

  let orderArray = arrayToSort.sort((movieA, movieB) => {
    if (movieA.year != movieB.year) {
      return movieA.year - movieB.year;
    } else {
      return movieA.title.localeCompare(movieB.title);
    }
  });
  console.log(orderArray);
  return orderArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
