/*eslint-env browser*/
/*eslint "no-console": "off"*/
/*global $*/



$(document).ready(function () {
    var url = "https://api.myjson.com/bins/7bziz";

    $.getJSON(url, function (data) {



        $.each(data.people, function (i, f) { 
            console.log(f);

            var row = $("<tr/>").addClass("new").append(
                $("<td/>").addClass("name_td").text(f.name),
                $("<td/>").addClass("age_td").text(f.age),
                $("<td/>").addClass("role_td").text(f.role),
                $("<td/>").addClass("team_td").text(f.team),
                $("<td/>").addClass("senority_td").text(f.seniority),
                $("<button/>", {
                   
                   click: function () {
                        dataShow(f.contact_info);
                    }





                }).addClass("button_td").val("More info").text("More info +")
            );


            $("#table_body").append(row);
        });


        function dataShow(x) { 

            var divGral = $("<div/>").append(
                $("<img/>").attr("src", x.photo),
                 $("<p/>").text("E-mail:"+" "+x.email),
                $("<div/>").text("Website:"+" "+x.site),
                $("<div/>").text("Nickname:"+" "+x.nickName),
                $("<div/>").text("Phone:"+" "+x.phone)
               

            );


            $(".modal-body").html(divGral);
            $("#exampleModal").modal("show");


        }

    });

});
