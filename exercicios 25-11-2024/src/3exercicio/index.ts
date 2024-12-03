import * as eventService from './services/eventService';

eventService.createEvents("Casamento"           , new Date("2024-08-21T00:00:00"));
eventService.createEvents("Beach Tênis"         , new Date("2024-12-02T00:00:00"));
eventService.createEvents("Pedal"               , new Date("2025-06-16T00:00:00"));
eventService.createEvents("Comprar Tênis"       , new Date("2024-10-31T00:00:00"));
eventService.createEvents("Jantar com a família", new Date("2024-11-20T00:00:00"));

eventService.listEvents();

eventService.listEventsByName("Casamento");

eventService.removeEvent("1234");

eventService.nextEvents();