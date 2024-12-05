package main

import (
	"fmt"
	"io"
	"net/http"
	"sync"
	"time"
)

func download(url string, ch chan<- string, wg *sync.WaitGroup) {
	defer wg.Done()

	resp, err := http.Get(url)
	defer resp.Body.Close()
	if err != nil {
		fmt.Println(err)
	}
	_, err = io.ReadAll(resp.Body) // parse for bytes
	if err != nil {
		fmt.Println(err)
	}
	// fmt.Println(url)
	ch <- url
}

func main() {
	start := time.Now()
	urls := []string{
		"New+York",
		"Manila",
	}
	ch := make(chan string)
	var wg sync.WaitGroup

	for _, url := range urls {
		url = fmt.Sprintf("http://wikipedia.org/%s", url)
		wg.Add(1)
		go download(url, ch, &wg)
	}

	go func() { // go routine
		wg.Wait()
		close(ch)
	}()

	for result := range ch {
		fmt.Println(result)
	}

	fmt.Println("Time: ", time.Since(start))
}
