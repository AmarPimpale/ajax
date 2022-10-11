// call back means provides the timer until this time not over not excutes other function // the behaviour of the of the js is the synchorous in nature so asynchorous is means take some time to complete after this time then executes next

// asynchronous 
 

// js is sync in nature here using the function

// function addition(){
//     console.log("first")
// }
// function addition1(){
//     console.log("second")
// }

// addition()
// addition1()

// // here due to sync nature as per call to function executes

// // if we want to after some time function exeutes using asyn this provides by using settimerout

// function add(){
//     setTimeout(function(){
//         console.log(1)
//     },2000)
// }

// function add2(){
//     console.log(2)
// }

// add()
// add2()

// here is function exeutes asynchronous nature due to the provides the timer by using settimeout(function(){},timein ms 1000/2000/3000) so in which manner we call the function in not manner those function having asyn exectue with complete time out


// function first(){
//     setTimeout(function(){
//         document.write("hello")
//         console.log('Amar')
//     },3000)

// }
// function second(){
//     setTimeout(function(){
//         document.write("hello")
//         console.log('How are you')
//     },2000)

// }function third(){
//     setTimeout(function(){
//         document.write("hello")
//         console.log('Hk')
//     },1000)

// }
// first()
// second()
// third()

// function info(){
//     setTimeout(function(){
//         console.log('third')
//     },3000)
//     setTimeout(function(){
//         console.log('second')
//     },2000)
//     setTimeout(function(){
//         console.log('first')
//     },1000)
// }
// info()

function info1(){
    setTimeout(function(){
        console.log('Good Morning')
        setTimeout(function(){
            console.log('Good Afternoon')
            setTimeout(function(){
                console.log('Good Night')
            },2000)
        },1000)
    },3000)
}

info1()