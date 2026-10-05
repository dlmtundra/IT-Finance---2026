function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6TwdUCC7fjx":
        Script1();
        break;
      case "6CjZ5cKpY3k":
        Script2();
        break;
      case "5r1rjzb2Yb3":
        Script3();
        break;
      case "6luNsyNHsL2":
        Script4();
        break;
      case "6bucJOfJnFQ":
        Script5();
        break;
      case "5r0K13fcCFh":
        Script6();
        break;
      case "6HcACuhGNMv":
        Script7();
        break;
      case "5sykh5lDfbu":
        Script8();
        break;
      case "5sbZmMbL640":
        Script9();
        break;
      case "6OOkiUHtOeT":
        Script10();
        break;
      case "5sHpORIMyQh":
        Script11();
        break;
      case "6RXkYEfyYpn":
        Script12();
        break;
      case "5tUvpZYG7zr":
        Script13();
        break;
      case "6pqg9YR0rtD":
        Script14();
        break;
      case "6HOkcgCB24H":
        Script15();
        break;
      case "5zXpATed39o":
        Script16();
        break;
      case "5eJcX45dcNl":
        Script17();
        break;
      case "6G42eegCrWT":
        Script18();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('6QJytubGjTN');
const duration = 1250;
const easing = 'ease-out';
const id = '6BdJrHHdo2L';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6QJytubGjTN');
const duration = 1250;
const easing = 'ease-out';
const id = '6BdJrHHdo2L';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5nqKEcD4DqS');
const duration = 750;
const easing = 'ease-out';
const id = '6HynGfwvewa';
const growAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('5gVvGkU9grw');
const duration = 100;
const easing = 'linear';
const id = '6HynGfwvewa';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5wN2aJ8v7AE');
const duration = 5000;
const easing = 'ease-out';
const id = '6aQcWfCOXdc';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  player.once(() => {
const target = object('5sbYBIPbVlP');
const duration = 750;
const easing = 'ease-out';
const id = '6SvzEdz2lQm';
const pulseAmount = 0.1;
const delay = 3000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('5zk1rY9k3BV');
const duration = 750;
const easing = 'ease-out';
const id = '6l6bfaJRsMo';
const shrinkAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  const target = object('6pP3acy0vxb');
const duration = 750;
const easing = 'ease-out';
const id = '6HQUbTO85s1';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  player.once(() => {
const target = object('5qj77f4mRKJ');
const duration = 1250;
const easing = 'ease-out';
const id = '5vHlMdSRjJ3';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  player.once(() => {
const target = object('5wTBNnJDW4n');
const duration = 750;
const easing = 'ease-out';
const id = '6LrVA3WOi5n';
const growAmount = 0.3;
const delay = 896;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  player.once(() => {
const target = object('6NMshmLKGwI');
const duration = 500;
const easing = 'ease-out';
const id = '6UX607sinZ9';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  const target = object('63OL4qS7eHC');
const duration = 750;
const easing = 'ease-out';
const id = '6j1z7wSSwuj';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('5na89iWutOf');
const duration = 750;
const easing = 'ease-out';
const id = '6j1z7wSSwuj';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  player.once(() => {
const target = object('5iEpf2t0wIn');
const duration = 750;
const easing = 'ease-out';
const id = '6SvzEdz2lQm';
const pulseAmount = 0.1;
const delay = 3000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script15 = function()
{
  const target = object('5rAxvXzeJ2E');
const duration = 3000;
const easing = 'ease-out';
const id = '5cQsX0wPkOZ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('6BWkOYDgrym');
const duration = 3000;
const easing = 'ease-out';
const id = '6SIXCQHesHN';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  player.once(() => {
const target = object('6JVjszkEdvh');
const duration = 750;
const easing = 'ease-out';
const id = '6WHzz2nveai';
const pulseAmount = 0.07;
const delay = 1000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
