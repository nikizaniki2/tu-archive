#include <stdio.h>
#define a 97
int main()
{
    int n;
    char ch;
    scanf("%d", &n);
    scanf(" %c", &ch);
    for(int i=1;i<n;i++)
        for(int j=a;j<=ch;j++)
            for(int z=i+1;z<n;z++)
                for(int x=a-32;x<=ch-32;x++)
                    printf("%d%c%d%c ",i ,j, z, x);

    return 0;
}
