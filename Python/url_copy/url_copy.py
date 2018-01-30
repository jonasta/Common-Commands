import urllib


# Read list of hundreds of urls from a file
url_list = open("urls.txt", "r").read().split("\n")

# loop for each url
for url in url_list:
	link = url
	f = urllib.urlopen(link)
	myfile = f.read()
	print myfile
	
	text_file = open("Output.html", "w")
	text_file.write(myfile)
	text_file.close()