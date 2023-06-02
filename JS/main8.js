let user = [
    {
        id: "00001",
        login: "123qwe",
        password: "123qwe",
        userName: "Qo'ldoshev Xondamir"
    }
]
let payArray = [];
function remove(id){
    payArray.forEach(function (item,i){
        if (id == item.id){
            payArray.splice(i,1);
        }
    });
    draw();
}
function draw(){
    let list = '';
    payArray.forEach(function (item){
        list += '<tr>' +
            '<td>'+item.id+'</td>' +
            '<td>'+item.payUser+'</td>' +
            '<td>'+item.paySum+'</td>' +
            '<td>'+item.payOrder+'</td>' +
            '<td><span class="badge badge-success">'+item.payTarget+'</span></td>' +
            '<td>'+item.payDate+'</td>' +
            '<td>' +
            '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editModal" onclick="edit('+item.id+')">Edit</button>' +
            '<button type="button" class="btn btn-danger" onclick="remove('+item.id+')">Remove</button>' +
            '</td>' +
            '</tr>'
    });
    $("#tbody").html(list);
}
$(document).ready(function (){
    let kirishSoni = 0;
    let payId = 0;
    let kassirId = '';
    $('#startModal').modal("show");
    $("#startBtn").click(function (){
        let login = $("#login").val();
        let password = $("#password").val();
        if (login !="" && password !="") {
            let topildi = false;
            user.forEach(function (item){
                if (login == item.login){
                    topildi = false;
                    if(password == item.password){
                        $("#workingBlock").toggleClass("d-none");
                        $("#kassir").html(item.userName);
                        $("#startModal").modal("hide");
                        topildi = true;
                        kassirId = item.id;
                    }
                }
            });
            if (!topildi){
                if (kirishSoni >= 2){
                    $("#startModal").modal("hide");
                    alert("Tizim bloklandi!")
                }
                alert("Login yoki parol xato!");
                kirishSoni++;
            }
        }else{
            alert("Login va parolarni qatorini to'ldiring!");
        }
    })
});







