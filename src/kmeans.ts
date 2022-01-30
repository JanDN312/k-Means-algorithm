export class Kmeans{
    getDistancebetwPoints(point1:any, point2:any){
        var sumunderroot:number=0
        for (let x = 0; x < point1.length; x++){
                sumunderroot=sumunderroot+(point1[x]-point2[x])**2
        }
        return sumunderroot**0.5
    }
    getmeanofdata(datalist:Array<number[]>){
        var outputlist=[]
        for (let i = 0; i < datalist[0].length; i++){
            var sum=0
            for (let x = 0; x < datalist.length; x++){
                sum=sum+datalist[x][i]
            }
            outputlist.push(sum/datalist.length)
        }
        return outputlist
    }
    getkmeans(inputlist: Array<number[]>, k: number){
        var initpoint1=inputlist[0]
        var initpoint2=inputlist[1]
        var list1:Array<number[]> =[]
        var list2:Array<number[]> =[]
        for (let i = 0; i < k; i++){
            list1 =[]
            list2 =[]
            for (let x = 0; x < inputlist.length; x++){
                var distpoint1=this.getDistancebetwPoints(inputlist[x],initpoint1)
                var distpoint2=this.getDistancebetwPoints(inputlist[x],initpoint2)
                if(distpoint1<distpoint2){list1.push(inputlist[x])}else{list2.push(inputlist[x])}
            }
            initpoint1=this.getmeanofdata(list1)
            initpoint2=this.getmeanofdata(list2)
        }
        return [initpoint1,initpoint2,list1,list2]
    }
}