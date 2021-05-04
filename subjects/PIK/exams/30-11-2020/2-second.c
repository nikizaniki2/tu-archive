#include <stdio.h>
void func(int n, int arr[]);
int main()
{
    int n=0;
    int arr[2]={1,2};
    void func(n);
    return 0;
}
void func(int n, int arr[])
{
    int ft=1;
    while(ft)
    {
        ft=0;
        int i=1;
        while(i<n){
            if(arr[i]<arr[i-2]){
                int temp=arr[i];
                arr[i]=arr[i-1];
                arr[i-1]=temp;
                ft=1;
                i=1;
            }
        }
    }
    return;
}
