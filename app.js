// utility functions
const padZero = (num) => (num >= 10 ? num : `0${num}`);

const isPM = () => {
  const date = new Date();
  return date.getHours() > 12;
};

const toTitleCase = (text) => text[0] + text.slice(1).toLowerCase();

// UI Widgets
class Image {
  constructor(src) {
    this.image = document.querySelector("#featured-image");
    this.src = src;
  }

  setImageSrc(src) {
    this.src = src;
    this.image.setAttribute("src", this.src);
  }

  onLoad(callback) {
    this.image.addEventListener("load", callback);
  }
}

class Clock {
  constructor() {
    this.time = document.querySelector("#time");
    this.start = this.start.bind(this);
  }

  start() {
    const date = new Date();
    const hours = date.getHours();
    this.time.textContent = `${padZero(hours)}:${padZero(
      date.getMinutes()
    )}:${padZero(date.getSeconds())}`;

    setInterval(this.start, 1000);
  }
}

class LocationWidget {
  constructor() {
    this.locationText = document.querySelector("#location");
    this.city = "";
    this.state = "";
  }

  setCity(city) {
    this.city = city;
  }

  setState(state) {
    this.state = state;
  }

  updateText() {
    if (!this.city) {
      this.locationText.textContent = "Namaste!";
    } else {
      this.locationText.textContent = `${this.city
        .split(" ")
        .map(toTitleCase)
        .join(" ")}, ${this.state}`;
    }
  }
}

// init code

const startApp = () => {
  let featuredImageSrc = `https://source.unsplash.com/random/${
    window.innerWidth
  }x${window.innerHeight - 4}?${isPM() ? "night" : "day"}`;
  const locationWidget = new LocationWidget();
  const clock = new Clock();
  const image = new Image(featuredImageSrc);

  image.onLoad(() => {
    locationWidget.updateText();
    clock.start();
  });

  const showImage = () => image.setImageSrc(featuredImageSrc);

  const onSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
      .then((res) => res.json())
      .then((response) => {
        const { city, state } = response;
        featuredImageSrc += `,${city.toLowerCase()}`;
        locationWidget.setCity(city);
        locationWidget.setState(state);
        showImage();
      })
      .catch(showImage);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, () => showImage());
  } else {
    showImage();
  }
};

window.addEventListener("load", startApp);
