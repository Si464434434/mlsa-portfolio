  #include<iostream>
using namespace std;

int linearSearch(int arr[], int n, int key) {
    for(int i = 0; i < n; i++) {
        if(arr[i] == key) {   // '==' comparison
            return i;         // return index of first match
        }
    }
    return -1;  // not found
}

int main() {
    int arr[10] = {1,2,3,3,3,4,3,3,3,3}; // size = 10
    int n = sizeof(arr) / sizeof(int);

    cout << linearSearch(arr, n, 4);
    return 0;
}
