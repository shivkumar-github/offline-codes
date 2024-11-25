import tkinter as tk
import requests
from datetime import datetime

apiKey = 'a393a1d9db732e99ca504204603d38e8'

def displayWeatherInfo():
    city = cityInput.get()
    if not city:
        resultLabel.config(text="Please enter a city name!")
        return

    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric"

    try:
        response = requests.get(url)
        data = response.json()

        if data.get("cod") != 200:
            resultLabel.config(text=f"Error: {data.get('message')}")
            return

        
        main = data["weather"][0]["main"]
        desc = data["weather"][0]["description"]
        temp = data["main"]["temp"]
        feels_like = data["main"]["feels_like"]
        sunrise = datetime.fromtimestamp(data["sys"]["sunrise"]).strftime("%I:%M %p")
        sunset = datetime.fromtimestamp(data["sys"]["sunset"]).strftime("%I:%M %p")

        
        weather_info = (
            f"🌤 Weather: {main} ({desc})\n"
            f"🌡 Temperature: {temp}°C\n"
            f"🥶 Feels Like: {feels_like}°C\n"
            f"🌅 Sunrise: {sunrise}\n"
            f"🌇 Sunset: {sunset}"
        )
    
        resultLabel.config(text=weather_info)
    except Exception as e:
        resultLabel.config(text="Unable to fetch weather data.")

def on_enter(event):
    event.widget.config(bg="#45a049")

def on_leave(event):
    event.widget.config(bg="#4CAF50")

root = tk.Tk()
root.title("pyAtmos")
root.resizable(False,False)
root.geometry("500x600")
root.configure(bg="#87CEEB")  

titleLabel = tk.Label(
    root,
    text="Weather Forecast 🌤",
    font=("Helvetica", 20, "bold"),
    bg="#87CEEB",
    fg="white"
)
titleLabel.pack(pady=20)


cityInput = tk.Entry(root, font=("Helvetica", 14), justify="center", relief="flat")
cityInput.pack(pady=10, ipadx=10, ipady=5)


submitButton = tk.Button(
    root,
    text="Check Weather 🌦",  
    command=displayWeatherInfo,
    font=("Helvetica", 14),
    bg="#4CAF50",
    fg="white",
    relief="flat",
    padx=20,
    pady=10
)
submitButton.pack(pady=10)
submitButton.bind("<Enter>", on_enter)
submitButton.bind("<Leave>", on_leave)

resultFrame = tk.Frame(root, bg="white", bd=2, relief="sunken")
resultFrame.pack(pady=20, padx=20, fill="both", expand=True)

resultLabel = tk.Label(
    resultFrame,
    text="",
    font=("Helvetica", 14),
    bg="white",
    fg="black",
    justify="left",
    anchor="nw",
    padx=10,
    pady=10
)
resultLabel.pack(fill="both", expand=True)

root.mainloop()