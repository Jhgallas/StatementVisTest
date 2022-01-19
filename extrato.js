function getCSVdata( ) {
    d3.dsv(",","https://raw.githubusercontent.com/Jhgallas/StatementVisTest/main/Extratos%20-%202021.csv", function(d) {
        return {
            date:(d.Data),
            valor:Number(d.Valor),
            desc:(d.Descrição),
            nome:(d.Nome)
        };
    }).then(fulfilled); 
}

getCSVdata();

function fulfilled(data) {
    let prev = 0
    console.log(data);
    console.log(Array.isArray(data))

    let svg = d3.select("body").append("svg").attr('height','2600').attr('width','1000%');

    for (let i = 0; i < data.length; i++){
        for (let o = 0; o < data.length; o++){
            if(data[i].nome == data[o].nome){
                data[o].nome = data[o].nome + "HEY"
            }
        }
    }

    for (let i = 0; i < data.length; i++){
        console.log(prev);
        svg.data(data)
            .append('circle')
            .attr('r',(scaledAbs(data[i].valor)/2))
            .attr('cx',(prev+100+(scaledAbs(data[i].valor)/2)))
            .attr('cy',1200);
            prev = prev + 100 + (scaledAbs(data[i].valor));
            }


    function scaledAbs(d){
        return Math.abs(d*0.4);
    }
}




