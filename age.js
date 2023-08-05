let userdate=document.getElementById("userdate")

const currentDate = new Date();
const isoDate = currentDate.toISOString().split("T")[0];
userdate.setAttribute('max', isoDate);  //using chatgpt
let answer=document.getElementById("answer")

const calculate=()=>{
    let birthdate=new Date(userdate.value)

    let db=birthdate.getDate()
    let mb=birthdate.getMonth()+1
    let yb=birthdate.getFullYear()

    let today=new Date()

    let dt=today.getDate()
    let mt=today.getMonth()+1
    let yt=today.getFullYear()

    let diffdate,diffmonth,diffyear

    diffyear= yt-yb

    if(mt>=mb){
        diffmonth=mt-mb
    }
    else{
        diffyear--
        diffmonth=12+mt-mb
    }

    if(dt>=db){
        diffdate=dt-db
    }
    else{
        diffmonth--
        diffdate=getdays(yb,mb)+dt-db
    }

    if(diffmonth<0){
        diffmonth=11
        diffyear--
    }
    answer.innerHTML=`you are <span>${diffyear}</span> years , <span>${diffmonth}</span> months and <span>${diffdate}</span> days old`
}

const getdays=(year,month)=>{
    return new Date(year,month,0).getDate()
}





