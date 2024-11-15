# imports
import tkinter as tk
import requests 
import datetime
from tkinter import font

# sunrise_icon.png sunset_icon.png

# handling backend
apiKey = 'a393a1d9db732e99ca504204603d38e8'

def displayWeatherInfo():
	city = cityInput.get().lower()
	url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric"
	if not city:
		resultLabel.config('Please Enter a city name!')
		return
	

	try:
		response = requests.get(url=url)
		data = response.json()
		if data.get('cod') != 200:
			resultLabel.config(text=f"Error : {data.get('message')}, Invalid city")
			return 
			
		main = data['weather'][0]['main']
		desc = data['weather'][0]['description']
		temp = data['main']['temp']
		feels_like = data['main']['feels_like']
		sunrise = datetime.datetime.fromtimestamp(int(data['sys']['sunrise'])).strftime('%I : %M : %S %p')
		sunset = datetime.datetime.fromtimestamp(int(data['sys']['sunset'])).strftime('%I : %M : %S %p')
		weatherInfo = (
			f"Weather: {main} ({desc})\n"
				f"Temperature: {temp}°C     "
				f"Feels Like(dy=due to humidity): {feels_like}°C\n"
				f"Sunrise: {sunrise}"
				f"Sunset: {sunset}"
		)

		resultLabel.config(text=weatherInfo)
	except:
		resultLabel.config(text='Sorry we are unable to fetch weather at this moment')

# creating window
root = tk.Tk()
root.title("What's the weather today!")
root.geometry('600x400') # dimensions ('x' is used as dimension separator)
root.configure(bg='#f0f0f0')

# creating font styles for labels using  ((font_family, size, style))
titleFontTouple = ("Helvetica",20,"bold")
labelFontTouple = ("Helvetica",14)
resultFontTouple = ("Helvetica",12)


# label creates a text label to display text
titleLabel = tk.Label(root, text="What's the weather today!",font=titleFontTouple )
titleLabel.pack(pady=20) # pady and padx in pack work similar to margin

cityLabel = tk.Label(root,text='Enter City', font=labelFontTouple)
cityLabel.pack(pady=5)

cityInput = tk.Entry(root, font=labelFontTouple, width=30) # this width is length of 30 characters
cityInput.pack(pady=10)

button = tk.Button(
	root,
	text='Submit',
	command=displayWeatherInfo,
	font=labelFontTouple, 
	bg='#4CAF50',
	fg='white',
	relief='flat',
    padx=10,
	pady=5
	)
button.pack(pady=10)

resultLabel = tk.Label(root, font=resultFontTouple)
resultLabel.pack()


# keeps our application running
root.mainloop()

