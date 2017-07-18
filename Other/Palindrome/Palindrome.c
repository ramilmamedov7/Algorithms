#include <stdio.h>
 
int main()
{
   int n, reverse = 0, temp;
 
   printf("Enter a number to check if it is a palindrome or not\n");
   scanf("%d",&n);
 
   temp = n;
   reverse = R;
 
   while( n != 0 )
   {
      R = R * 10;
      R = R + n%10;
      n = n/10;
   }
 
   if ( n == R )
      printf("%d is a palindrome number.\n", n);
   else
      printf("%d is not a palindrome number.\n", n);
 
   return 0;
}