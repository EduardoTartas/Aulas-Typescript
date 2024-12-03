import { v4 as uuid } from 'uuid'
import  chalk  from "chalk";

interface Event {
    id:string,
    name:string,
    date:Date
}

const events:Event[] = [
    {id:"1234", name:"teste", date: new Date("2021-01-03")}
]


function createEvents(name:string, date:Date):void{
    let newEvent:Event = {
        id:uuid(),
        name:name,
        date:date
    }

    events.push(newEvent);
    console.log(`\nEvento ${name} criado com sucesso!`);
}

createEvents("Casamento"           , new Date("2024-08-21T00:00:00"));
createEvents("Beach Tênis"         , new Date("2024-12-02T00:00:00"));
createEvents("Pedal"               , new Date("2025-06-16T00:00:00"));
createEvents("Comprar Tênis"       , new Date("2024-10-31T00:00:00"));
createEvents("Jantar com a família", new Date("2024-11-20T00:00:00"));

function listEvents():void{
    console.log(`\n---------${chalk.bold('|Listando todos os eventos|')}---------\n`);
    events.forEach(event =>{
        console.log(`${chalk.bold.black('Evento ID:')} ${event.id} \n${chalk.bold.black('Nome:')} ${event.name} \n${chalk.bold.black('Data:')}${event.date.toLocaleDateString("pt-BR")}\n`);
        console.log(chalk.bold.cyan("------------------"))
    });
}
listEvents();


function listEventsByName(name:string):void{
   const filteredEvents:Event[] = events.filter(events => events.name == name);

   if(filteredEvents.length != 0){
    console.log(`\n---------${chalk.bold('|Listando enventos pelo nome|')}---------\n`);
    filteredEvents.forEach(event =>{
        console.log(`${chalk.bold.black('Evento ID:')} ${event.id} \n${chalk.bold.black('Nome:')} ${event.name} \n${chalk.bold.black('Data:')}${event.date.toLocaleDateString("pt-BR")}\n`);
        console.log(chalk.bold.cyan("------------------"))
        
    })
   }
   else console.log("Nenhum evento encontrado")
}
listEventsByName("Casamento");


function removeEvent(id:string):void{
    const filteredEvents:Event[] = events.filter(events => events.id == id);
    let indexEVent:number = events.findIndex(event => event.id == id);
    console.log(`\n---------${chalk.bold('|Removendo eventos|')}---------\n`);
    if(filteredEvents.length != 0){
     filteredEvents.forEach(event =>{
        events.splice(indexEVent,1);
        console.log(`${chalk.bold.black('Evento ID:')} ${event.id} \n${chalk.bold.black('Nome:')} ${event.name} \n${chalk.bold.black('Data:')}${event.date.toLocaleDateString("pt-BR")}\nEvento ${chalk.bold(event.name)} removido com sucesso`);
        console.log(chalk.bold.cyan("------------------"))
     })
    }
    else console.log("---------\nNenhum evento encontrado")
 }
 removeEvent("1234");


 function nextEvents() {
    const currentDate: Date = new Date();
    const filtrarEvento: Event[] = events.filter((event) => event.date > currentDate);
    console.log(`\n---------${chalk.bold('|Pŕoximos eventos|')}---------\n`);
    if (filtrarEvento.length > 0) { 
        filtrarEvento.forEach((event) => {
            console.log(`${chalk.bold.black('Evento ID:')} ${event.id} \n${chalk.bold.black('Nome:')} ${event.name} \n${chalk.bold.black('Data:')}${event.date.toLocaleDateString("pt-BR")}\n`);
            console.log(chalk.bold.cyan("------------------"))
        });
    } else {
        console.log('Nenhum evento futuro encontrado.');
    }
}

nextEvents();