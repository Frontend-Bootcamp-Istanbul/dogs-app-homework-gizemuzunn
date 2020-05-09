import React from "react";
import { DetailDog, Homepage, FilteredDogs } from "./containers";

const routes = [
    {
        path: "/",
        exact: true,
        component: Homepage,
        title: "Anasayfa"
    },
    {
        path: "/tur/:yazilanTur",
        exact: false,
        component: FilteredDogs,
        title: "Filtrelenmis Dogs"
    },
    {
        path: "/detail/:id",
        exact: false,
        component: DetailDog,
        title: "Detay"
    },
    {
        path: "/hakkinda",
        exact: false,
        component: () => { return <div>Hakkinda Doğdukları andan itibaren köpekler insanlara karşı sevgi doludurlar.

            Köpekler bu şekilde dünyaya gözlerini açan tek hayvan türüdür. Bu nedenle siz köpeğinize yakınlık gösterip alışana kadar o çoktan sizi benimsemiştir.</div> },
        title: "Hakkinda"
    },
];

export default routes;