import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';

export default function DetailScreen() {
  const { id, title } = useLocalSearchParams();

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = '939e91f06b993b354a2db31a638ff524'; 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${title}&appid=${apiKey}&units=metric&lang=nl`;

      try {
        const response = await axios.get(url);
        const data = response.data;
        setWeather({
          temp: Math.round(data.main.temp),
          description: data.weather[0].description,
        });
      } catch (err) {
        console.error('Fout bij ophalen weer:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (title) {
      fetchWeather();
    }
  }, [title]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>Reisverhaal ID: {id}</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : error || !weather ? (
        <Text style={styles.fallback}>Geen weerinformatie beschikbaar.</Text>
      ) : (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherTemp}>🌡️ {weather.temp}°C</Text>
          <Text style={styles.weatherDescription}>☁️ {weather.description}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  weatherContainer: {
    alignItems: 'center',
  },
  weatherTemp: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  weatherDescription: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#555',
  },
  fallback: {
    fontSize: 16,
    color: '#888',
    fontStyle: 'italic',
  },
});
