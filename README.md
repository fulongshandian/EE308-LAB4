# EE308-LAB4
<wxs module="m1">
var award = function(q,w,e,r,t,y) {
    var list=[];
        list.push(q,w,e,r,t,y);
    var count=[0,0,0,0,0,0];
        for(var i=0;i<6;i++){
        count[list[i]]=count[list[i]]+1;
        }
    if(count[4]==4&&count[1]==2){
    return "状元（金花）";
    }
    else if(count[4]==6){
        return "状元（六杯红）";
    }
    else if(count[1]==6){
        return "状元（遍地锦）";
    }
    else if(count[2]==6||count[3]==6||count[5]==6||count[6]==6){
        return "状元（六杯黑）";
    }
    else if(count[4]==5){
        return "状元（五红）";
    }
    else if(count[1]==5||count[2]==5||count[3]==5||count[5]==5||count[6]==5){
        return "状元（五子登科）";
    }
    else if(count[4]==4){
        return "状元（四点红）";
    }
    else if(count[1]==1&&count[2]==1&&count[3]==1&&count[4]==1&&count[5]==1&&count[6]==1){
        return "榜眼（对堂）";
    }
    else if(count[4]==3){
        return "探花（三红）";
    }
    else if(count[1]==4||count[2]==4||count[3]==4||count[5]==4||count[6]==4){
        return "进士（四进）";
    }
    else if(count[4]==2){
        return "举人（二举）";
    }
    else if(count[4]==1){
        return"秀才（一秀）";
    }
    else{
        return"谢谢参与";
    }  
}
