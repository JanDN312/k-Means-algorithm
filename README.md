# K-Means Algorithm

This module allows you to compute the k-Means algorithm with n-dimensional data. You simply put in your data as a list and the k you want to use. The return will be a list containing the means of the classes and two lists containing the elements of the one half or the other.


## Usage via Commandline
```js
deno run --allow-net https://deno.land/x/k_means_algorithm@1.1.2/test.ts  //or newer version
```

## Usage Example
```js
import {Kmeans} from "./src/kmeans.ts"
var testdata:Array<number[]>=[[1,2,3],[3,6,2],[4,8,3],[34,64,7],[23,46,12],[123,34,2],[23,35,23],[2,5,3],[5,2,7],[65,3,7]]
const km=new Kmeans()
console.log(km.getkmeans(testdata, 5))

```
### Output
```
[
  [ 3, 4.6, 3.6 ],
  [ 53.6, 36.4, 10.2 ],
  [ [ 1, 2, 3 ], [ 3, 6, 2 ], [ 4, 8, 3 ], [ 2, 5, 3 ], [ 5, 2, 7 ] ],
  [ [ 34, 64, 7 ], [ 23, 46, 12 ], [ 123, 34, 2 ], [ 23, 35, 23 ], [ 65, 3, 7 ] ]
]
```
