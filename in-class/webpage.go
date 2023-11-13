package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func main() {
	// Get the URL from command-line arguments
	url := os.Args[1]

	// Make an HTTP GET request to the URL
	response, err := http.Get(url)
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}
	defer response.Body.Close()

	// Read the response body
	body, err := io.ReadAll(response.Body)
	if err != nil {
		fmt.Println("Error reading response:", err)
		os.Exit(1)
	}

	// Print the webpage content to the terminal
	fmt.Println(string(body))
}
