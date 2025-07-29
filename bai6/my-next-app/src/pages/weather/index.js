import axios from "axios";
import Image from "next/image";

export async function getStaticProps(){
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=hanoi&units=metric&appid=${apiKey}`;
    try {
      const response = await axios.get(url);
      const data = response.data;

      const weatherData = {
        temp: Math.round(data.main.temp),
        main: data.weather[0].main,
        humidity: data.main.humidity,
        wind: Math.round(data.wind.speed * 3.6),
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      };

      return {
        props: {
          weatherData,
        },
        revalidate: 600,
      };
    } catch (error) {
      console.error("Failed to fetch weather data:", error.message);
      return {
        props: {
          weatherData: null,
        },
      };
    }
}

export default function Home({ weatherData }) {
    console.log("Weather Data:", weatherData);
  if (!weatherData) {
    return (
      <div>
        Error fetching weather data. Please check your API key or try again
        later.
      </div>
    );
  }

  const { icon, temp, main, humidity, wind } = weatherData;
  return (
    <div style={styles.container}>
      <div style={styles.weatherCard}>
        <Image src={icon} alt="Weather Icon" width={100} height={100} />

        <div style={styles.tempContainer}>
          <span style={styles.tempText}>{temp}</span>
          <span style={styles.degreeSymbol}>°C</span>
        </div>

        <div style={styles.detailsContainer}>
          <p>Main: {main}</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind: {wind} km/h</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "sans-serif",
    backgroundColor: "#f0f2f5",
  },
  weatherCard: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    gap: "20px",
  },
  tempContainer: {
    display: "flex",
  },
  tempText: {
    fontSize: "5rem",
    fontWeight: "bold",
    color: "#333",
  },
  degreeSymbol: {
    fontSize: "2rem",
    marginTop: "1rem",
    color: "#666",
  },
  detailsContainer: {
    fontSize: "1.2rem",
    color: "#555",
    lineHeight: "1.6",
  },
};
