
$(document).ready(function(){

    $(document).ready(function(){

        $.ajax({
            type : "POST",
            contentType : "application/x-www-form-urlencoded",
            url : "/admin/Isuniteuser/seeAll",
            success : function(res) {
                var i = 1;
                $("#data_num").append(
                    "<strong>"+res.result.length+"</strong>"
                );
                for(let key of res.result){

                    $("#dataRoom").append(
                        "<tr>" +
                            "<td><input type='checkbox' name='multiple' value="+key['id']+"></td>>" +
                            "<td>"+key['id']+"</td>" +"<td>"+key['name']+"</td>" +"<td>"+key['student_id']+"</td>" +"<td>"+key['email']+"</td>" +"<td>"+key['password']+"</td>" +"<td>"+key['password_salt']+"</td>" +"<td>"+key['classes_id']+"</td>" +"<td>"+key['forum_comment']+"</td>" +"<td>"+key['user_type']+"</td>" +"<td>"+key['last_login_ip']+"</td>" +"<td>"+key['last_login_time']+"</td>" +"<td>"+key['create_time']+"</td>" +"<td>"+key['update_time']+"</td>" +"<td>"+key['status']+"</td>" +
                            "<td class='td-manage'>" +
                                "<span class='label label - success radius'><a onClick='edit("+key['id']+")'>编辑</a></span>" +
                                "<span class='label radius'><a onClick='delete_single("+key['id']+")'>删除</a></span>" +
                            "</td>" +
                        "</tr>"
                    );
                    i++;
                }

            }
        });

    });
    $("#add").click(function(){
        layer_show('代码生成','/admin/Isuniteuser/viewAddEdit?id=-1',800,500);
    })
    $("#batchDelete").click(function(){
        var ids = [], i = 1;
        $("input[name='multiple']:checked").each(function(index, key){
            ids[i] = $(key).val();
            i++;
        });

        $.ajax({
            type : "POST",
            contentType: "application/x-www-form-urlencoded",
            url : "/admin/Isuniteuser/batchDeleteData",
            data : {
                ids:ids
            },
            success : function(res) {
                if(res.status == 200){
                    window.parent.location.reload();
                }
            }
        });
    })
});
$("#search_send").click(function(){
    var searchKey = $("#searchKey").val();
    var searchValue = $("#searchValue").val();
    $.ajax({
        type : "POST",
        contentType: "application/x-www-form-urlencoded",
        url : "/admin/Isuniteuser/retrieveData",
        data : {
            key:searchKey,
            value:searchValue
        },
        success : function(res) {
            if(res.status == 200){
                $("#data_num").remove();
                $("#dataRoom").remove();
                $("#num_room").append(
                    "<strong id='data_num'>"+res.result.length+"</strong>"
                );
                $("#dataSingleSet").append(
                    "<tbody id='dataRoom'></tbody>"
                );
                var i = 1;
                for(let key of res.result){
                    $("#dataRoom").append(
                        "<tr>" +
                            "<td><input type='checkbox' name='multiple' value="+key['id']+"></td>" +
                            "<td>"+key['id']+"</td>" +"<td>"+key['name']+"</td>" +"<td>"+key['student_id']+"</td>" +"<td>"+key['email']+"</td>" +"<td>"+key['password']+"</td>" +"<td>"+key['password_salt']+"</td>" +"<td>"+key['classes_id']+"</td>" +"<td>"+key['forum_comment']+"</td>" +"<td>"+key['user_type']+"</td>" +"<td>"+key['last_login_ip']+"</td>" +"<td>"+key['last_login_time']+"</td>" +"<td>"+key['create_time']+"</td>" +"<td>"+key['update_time']+"</td>" +"<td>"+key['status']+"</td>" +
                            "<td class='td-manage'>" +
                                "<span class='label label - success radius'><a onClick='edit("+key['id']+")'>编辑</a></span>" +
                                "<span class='label radius'><a onClick='delete_single("+key['id']+")'>删除</a></span>" +
                            "</td>" +
                        "</tr>"
                    );
                    i++;
                }
            }
        }
    });
})

$("#search_data_export_file").click(function(){
    var searchKey = $("#searchKey").val();
    var searchValue = $("#searchValue").val();
    setTimeout(location.href="/admin/Isuniteuser/export_file?key="+searchKey+"&value="+searchValue, 1000);
})

function edit(id) {
    layer_show('代码生成','/admin/Isuniteuser/viewAddEdit?id='+id,800,500);
}

function delete_single(id) {

    $.ajax({
        type : "POST",
        contentType: "application/x-www-form-urlencoded",
        url : "/admin/Isuniteuser/deleteData",
        data : {
            target:id
        },
        success : function(res) {
            if(res.status == 200){
                window.parent.location.reload();
            }
        }
    });

}

