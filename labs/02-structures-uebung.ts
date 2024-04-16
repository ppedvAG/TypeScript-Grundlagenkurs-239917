/*
Wenden Sie an allen Elementen mit der Klasse 'red' folgende Stile dynamisch (in TS) an: 
color: 'red';
background-color: 'pink';

Fügen Sie den Elementen auch den Text 'Klasse angewendet' hinzu. 
*/

let myRedElements = document.getElementsByClassName('red');

for (const iterator of myRedElements) {
    (iterator as HTMLElement).style.color = 'red';
    (iterator as HTMLElement).style.backgroundColor = 'pink';
    if ('value' in iterator) {
        (iterator as any).value =  'Klasse angewendet';
    } else if ('textContent' in iterator) {
        iterator.textContent = 'Klasse angewendet';
    }
}