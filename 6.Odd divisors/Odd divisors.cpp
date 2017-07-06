# include <stdio.h> 
# include <conio.h>
    void main() 
	{ 
        int i, n ; 
        clrscr() ; 
            printf("Enter the number : ") ; 
 		scanf("%d", &n) ; 
            printf("\nThe divisors are :\n\n") ; 
 		for(i = 1 ; i <= n ; i++) 
  		if(n % i == 0) 
            printf("%d\t", i) ; 
        getch() ; 
    }