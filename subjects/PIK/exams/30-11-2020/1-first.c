#include <stdio.h>
void func(int a,int b){
if(++a<b++){
printf("2: True\n");
}
else printf("3: False\n");
}
int main()
{
int a,b,i,k;
float f;
char c = 'c';
a=2;
b=0xA;
printf("1: %d\n",b+a);
func(2,2);
printf("3: %d%d\n",a,b);
if(a){
printf("4: True\n");
}
else{
printf("4: False");
}
for(i=1;++i<--b;i++){
printf("5: %d\n",i);
}
f=(a%3)*(b/3);
printf("6: %d %f\n",i,f);
printf("7: %d\n",a^b);
printf("8: %d\n",a&&b);
}
