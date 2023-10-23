import { APIKey } from "./ApiKey.js";
import { HourConditionModel } from "../Models/HourConditionModel.js";
import { LocationModel } from "../Models/LocationModel.js";
import { AirConditionModel } from "../Models/AirConditionModel.js";
import { DailyForecastModel } from "../Models/DailyForecastModel.js";
import { combinedViewModel } from "../ViewModel/CompleteViewModel.js";

const language = navigator.language;
const URL = "http://dataservice.accuweather.com/";
const basic = `apikey=${APIKey}&language=${language}`;

async function getAPIRequest(endpoint) {
  return fetch(endpoint).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad response");
    }
  });
}

export async function getData(location) {
  return getLocation(location).then((key) => {
    getPastWeather(key);
    getCurrentWeather(key);
    getAirCondition(key);
    getHourlyForecast(key);
    getDailyForecast(key);
  });
}

async function getLocation(location) {
  const endpoint = `${URL}locations/v1/cities/search?${basic}&q=${location}`;

  const data = await getAPIRequest(endpoint);
  const Object = new LocationModel(data[1]);
  combinedViewModel.getLocation().update(Object);
  return Object.key;
}

async function getPastWeather(key) {
  const endpoint = `${URL}currentconditions/v1/${key}/historical/24?${basic}`;

  await getAPIRequest(endpoint).then((data) => {
    const Object = new HourConditionModel(data[23]);
    combinedViewModel.getPastWeather().update(Object);
  });
}

async function getCurrentWeather(key) {
  const endpointForecast = `${URL}currentconditions/v1/${key}?${basic}`;

  await getAPIRequest(endpointForecast).then((data) => {
    const Object = new HourConditionModel(data[0]);
    combinedViewModel.getCurrentWeather().update(Object);
  });
}

async function getAirCondition(key) {
  const endpoint = `${URL}indices/v1/daily/1day/${key}/-10?${basic}`;

  await getAPIRequest(endpoint).then((data) => {
    const Object = new AirConditionModel(data[0]);
    combinedViewModel.getAirCondition().update(Object);
  });
}

async function getHourlyForecast(locationKey) {
  const endpointHourlyForecast = `${URL}forecasts/v1/hourly/12hour/${locationKey}?${basic}&metric=${true}`;

  await getAPIRequest(endpointHourlyForecast).then((data) => {
    const Array = data.map((element) => {
      return new HourConditionModel(element);
    });
    combinedViewModel.getHourlyForecast().update(Array);
  });
}

async function getDailyForecast(locationKey) {
  const endpointDailyForecast = `${URL}forecasts/v1/daily/5day/${locationKey}?${basic}&metric=${true}`;

  await getAPIRequest(endpointDailyForecast).then((data) => {
    const Array = data.DailyForecasts.map((element) => {
      return new DailyForecastModel(element);
    });
    combinedViewModel.getDailyForecast().update(Array);
  });
}
