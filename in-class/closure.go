package main

import "fmt"

func fibonacci() func() int {
	a, b := 0, 1
	return func() int {
		a, b = b, a+b
		return b
	}
}

func main() {
	fib := fibonacci()

	fmt.Println(fib())
	fmt.Println(fib())
	fmt.Println(fib())
	fmt.Println(fib())
}
