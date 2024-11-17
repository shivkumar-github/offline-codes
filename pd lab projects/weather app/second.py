import tkinter as tk
from tkinter import font
import requests
import datetime
from PIL import Image, ImageTk

# handling backend
apiKey = 'a393a1d9db732e99ca504204603d38e8'

def displayWeatherInfo():
    city = cityInput.get().lower()
    if not city:
        resultLabel.config(text='Please Enter a city name!', fg='red')
        return
    
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric"
    print(f"URL: {url}")  # Debugging: Checking the generated URL

    try:
        response = requests.get(url=url)
        data = response.json()
        print(f"Response Data: {data}")  # Debugging: Checking the API response
        
        if data.get('cod') != 200:
            resultLabel.config(text=f"Error : {data.get('message')}, Invalid city", fg='red')
            return
        
        main = data['weather'][0]['main']
        desc = data['weather'][0]['description']
        temp = data['main']['temp']
        feels_like = data['main']['feels_like']
        sunrise = datetime.datetime.fromtimestamp(int(data['sys']['sunrise'])).strftime('%I:%M:%S %p')
        sunset = datetime.datetime.fromtimestamp(int(data['sys']['sunset'])).strftime('%I:%M:%S %p')

        # Load icons for sunrise and sunset
        try:
            sunrise_icon = Image.open("./icons/sunrise_icon.png")  # Ensure the correct file path
            sunset_icon = Image.open("./icons/sunset_icon.png")    # Ensure the correct file path
            sunrise_icon = sunrise_icon.resize((20, 20))  # Resize icons
            sunset_icon = sunset_icon.resize((20, 20))    # Resize icons
            
            sunrise_icon_tk = ImageTk.PhotoImage(sunrise_icon)
            sunset_icon_tk = ImageTk.PhotoImage(sunset_icon)
        except Exception as e:
            print(f"Error loading images: {e}")  # Debugging image loading errors
            sunrise_icon_tk = None
            sunset_icon_tk = None

        # Frame for weather info at the top (full width)
        weatherInfoFrame = tk.Frame(root, bg='#f0f0f0')
        weatherInfoFrame.pack(pady=10, padx=20, fill='x')

        # Weather info (main description)
        weather_info_label = tk.Label(weatherInfoFrame, text=f"{main} ({desc})", font=outputFont, bg='#f0f0f0', fg='#333')
        weather_info_label.grid(row=0, column=0, columnspan=2, sticky='w')

        # Frame for temperature and feels like in the next row
        tempFeelFrame = tk.Frame(root, bg='#f0f0f0')
        tempFeelFrame.pack(pady=5, padx=20, fill='x')

        temp_label = tk.Label(tempFeelFrame, text=f"Temperature: {temp}°C", font=outputFont, bg='#f0f0f0', fg='#333')
        feels_like_label = tk.Label(tempFeelFrame, text=f"Feels Like: {feels_like}°C", font=outputFont, bg='#f0f0f0', fg='#333')
        
        temp_label.grid(row=0, column=0, sticky='w', padx=10)
        feels_like_label.grid(row=0, column=1, sticky='w', padx=10)

        # Frame for sunrise and sunset with icons
        sunTimeFrame = tk.Frame(root, bg='#f0f0f0')
        sunTimeFrame.pack(pady=5, padx=20, fill='x')

        sunrise_label = tk.Label(sunTimeFrame, text=f"Sunrise: {sunrise}", font=outputFont, bg='#f0f0f0', fg='#333')
        sunset_label = tk.Label(sunTimeFrame, text=f"Sunset: {sunset}", font=outputFont, bg='#f0f0f0', fg='#333')

        # Add icons after the sunrise and sunset text
        sunrise_icon_label = tk.Label(sunTimeFrame, image=sunrise_icon_tk, bg='#f0f0f0')
        sunset_icon_label = tk.Label(sunTimeFrame, image=sunset_icon_tk, bg='#f0f0f0')

        sunrise_icon_label.grid(row=0, column=0, padx=5)
        sunrise_label.grid(row=0, column=1, sticky='w', padx=10)

        sunset_icon_label.grid(row=0, column=2, padx=5)
        sunset_label.grid(row=0, column=3, sticky='w', padx=10)

        # Update result label with the icon-tied info
        resultLabel.config(text="")
        resultLabel.update_idletasks()

        # Keep references to the images to prevent garbage collection
        if sunrise_icon_tk:
            sunrise_icon_label.image = sunrise_icon_tk
        if sunset_icon_tk:
            sunset_icon_label.image = sunset_icon_tk
        
    except Exception as e:
        print(f"Error fetching weather data: {e}")  # Debugging: Check error fetching weather
        resultLabel.config(text='Sorry we are unable to fetch weather at this moment', fg='red')

# Creating window
root = tk.Tk()
root.title("What's the Weather Today!")
root.geometry('600x400')  # Adjusted window size for better fit

# Set background color
root.configure(bg='#f0f0f0')

# Use custom fonts for a modern look
titleFont = font.Font(family="Helvetica", size=20, weight="bold")
labelFont = font.Font(family="Helvetica", size=14)
outputFont = font.Font(family="Helvetica", size=12)

# Title label
label = tk.Label(root, text='Know the Weather', font=titleFont, bg='#f0f0f0', fg='#333')
label.pack(pady=10)

# City input label
cityLabel = tk.Label(root, text='Enter City', font=labelFont, bg='#f0f0f0', fg='#555')
cityLabel.pack(pady=5)

# City input field
cityInput = tk.Entry(root, font=labelFont, width=30)
cityInput.pack(pady=10)

# Submit button with styling
button = tk.Button(root, text='Submit', command=displayWeatherInfo, font=labelFont, bg='#4CAF50', fg='white', relief='flat', padx=10, pady=5)
button.pack(pady=10)

# Result label to display weather info
resultLabel = tk.Label(root, text="", font=outputFont, bg='#f0f0f0', fg='#333', justify="left")
resultLabel.pack(pady=10)

# Add this block to run the Tkinter app when the script is executed directly
if __name__ == "__main__":
    root.mainloop()
