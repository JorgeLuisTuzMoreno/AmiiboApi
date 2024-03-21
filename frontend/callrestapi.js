var url = "http://localhost:3300/api/users";

function postAmiibos() {
	console.log(url);
	var myUrl = $('#url').val();
	var myName = $('#name').val();
	var myAmiiboseries = $('#amiiboseries').val();
	var myGameseries = $('#gameseries').val();
	var myType = $('#type').val();

	var myamiibo = {
		url: myUrl, 
		name: myName,
		amiiboseries: myAmiiboseries,
		gameseries: myGameseries,
		type: myType
		
	};
	console.log(myamiibo);

	$.ajax({
		url: url,
		type: 'post',
		dataType: 'json',
		contentType: 'application/json',
		success: function (data) {
			console.log(data);
			$('#resultado').html(JSON.stringify(data.amiibo));
		},
		data: JSON.stringify(myamiibo)
	});
}

function getAmiibos() {
    console.log(url);

    $.getJSON(url,
        function(json) {
            console.log(json);

            var arrAmiibos = json.users;

            var htmlTableAmiibos = '<table border="1">';

            arrAmiibos.forEach(function(item) {
                console.log(item);
                htmlTableAmiibos += '<tr>' +
                    '<td>' + item.id + '</td>' +
                    '<td><img src="' + item.url + '"></td>' + // Modificación aquí
                    '<td>' + item.name + '</td>' +
                    '<td>' + item.amiiboseries + '</td>' +
                    '<td>' + item.gameseries + '</td>' +
                    '<td>' + item.type + '</td>' +
                    '</tr>';
            });

            htmlTableAmiibos += '</table>';

            $('#resultado').html(htmlTableAmiibos);

        }
    );
}

