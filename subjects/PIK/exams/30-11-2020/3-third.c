#include <stdio.h>

int main()
{
    int width, height, n, m;
    printf("Width:");
    scanf("%d", &width);
    printf("Height:");
    scanf("%d", &height);
    printf("M:");
    scanf("%d", &m);
    printf("N:");
    scanf("%d", &n);

    width=width*100;
    height=height*100;

    int rows = width / (m+n);
    int columns = height / (m+100);

    int seats = rows*columns;

    printf("Mesta:%d",seats);
    return 0;
}
