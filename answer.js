function isEmpty() {
    if(document.getElementsByName("klass")[0].value.length == 0){
        alert("请填写班级");
        return false;
    }

    if(document.getElementsByName("stuNum")[0].value.length == 0){
        alert("请填写学号");
        return false;
    }

    if(document.getElementsByName("name")[0].value.length == 0){
        alert("请填写姓名");
        return false;
    }
}

function examine() {
    var grade = 0;

    if(document.getElementsByName("form1")[0].value == "统一建模语言"){
       grade += 15;
    }
    
    for(var i = 0; i < document.getElementsByName("form2").length; i++){
        if(document.getElementsByName("form2")[i].value == "封装性"){
            grade += 5;
        }else if(document.getElementsByName("form2")[i].value == "继承性"){
            grade += 5;
        }else if(document.getElementsByName("form2")[i].value == "多态性"){
            grade += 5;
        }
    }

    if(document.getElementById("item1_1").checked){
        grade += 5;
    }

    if(document.getElementById("item2_0").checked){
        grade += 5;
    }

    if(document.getElementById("item3_0").checked &&
        document.getElementById("item3_1").checked && document.getElementById("item3_3").checked){
        grade += 10;
    }

    if(document.getElementById("item4_0").checked &&
        document.getElementById("item4_1").checked && document.getElementById("item4_2").checked){
        grade += 10;
    }

    if(document.getElementById("field4_1").checked){
        grade += 10;
    }

    if(document.getElementById("field4_2").checked){
        grade += 10;
    }

    if(document.getElementById("field5_0").value == "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。"){
        grade += 20;
    }

    return grade;
}

function printReport(){
    var grade = examine();
    document.getElementsByName("grade")[0].value = grade;
}

function getReport() {
    isEmpty();
    printReport();
}
