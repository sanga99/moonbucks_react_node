import React from 'react';


export function infoWindowTemplate (store) { 

    let driveThru, park = '';

    if(store.drive_thru == 0) { driveThru = "운영"}
    else { driveThru = "미운영" }

    if(store.park == 0) { park = "운영"}
    else { park = "미운영" }

    return (`
    <div style={{padding:}}>
        <header>
            <a><strong>${store.name}</strong></a> 
        </header>
        <container>
        <aside  className="gray">
            <span>매장규모 :</span>
            <span>${store.size}</span>/<span>${store.floor}</span>
        </aside>  
        <main>
            <section className="gray">
                    <div>${store.utilization}</div>
                    <div>${store.introduction}</div>
                <div>
                    <div>phone : ${store.phone}</div>
                    <div>주소 : ${store.address}</div>
                </div>
                <div>
                    <span>Drive Thru : ${driveThru}</span> /
                    <span>주차 : ${park}</span>
                </div>
                <div>
                    <span>${store.open}</span> ~ <span>${store.close}</span>
                    <span>${store.holiday}</span>
                </div>
            </section>
        </main>
        </container>
    </div>
`);
}
