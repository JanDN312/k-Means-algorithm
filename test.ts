import {Kmeans} from "https://deno.land/x/k_means_algorithm/mod.ts"
var testdata:Array<number[]>=[[1,2,3],[3,6,2],[4,8,3],[34,64,7],[23,46,12],[123,34,2],[23,35,23],[2,5,3],[5,2,7],[65,3,7]]
const km=new Kmeans()
console.log(km.getkmeans(testdata, 5))

