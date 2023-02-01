interface Type {
    number:number;
    name: string;
}

function run(params:Type) {
    console.log(params.name);
}
const item = {number:1,name:'Dos'};

run(item);