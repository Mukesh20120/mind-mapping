export const coordsData = [
    { coords: '305,251,321,267', noteKey: 'note1' },
    { coords: '209,134,225,150', noteKey: 'note2' },
    { coords: '288,26,304,42', noteKey: 'note3' },
    { coords: '423,46,439,62', noteKey: 'note4' },
    { coords: '714,340,730,356', noteKey: 'note5' },
    { coords: '483,350,499,366', noteKey: 'note6' }
  ]

export const notesData = {
    note1: `<html>
<head>
<title>
Note - Process Synchronization
</title>
<link rel="shortcut icon" type="image/png" href="../favicon.png"/>
</head>
<body>
<h2>
Process Synchronization
</h2>
<hr/>
<p>
Process syncronization is essential in multi process system where process share resouces or data the main goal is to ensure that processes do not interfere with each other and the shared data remain consistent
</p>
</body>
</html>
`,
    note2: `<html>
<head>
<title>
Note - Alice and Bob Cake Analogy
</title>
<link rel="shortcut icon" type="image/png" href="../favicon.png"/>
</head>
<body>
<h2>
Alice and Bob Cake Analogy
</h2>
<hr/>
<p>
Alice and bob making a cake together 
<br/>
1.Alice create the paste mix all the things 
<br/>
2.bob bake the cake  
<br/>
now what will happen alice make the
<br/>
paste but  he go to sleep Bob take the paste and
<br/>
bake it make the cake alice wake up and mix the
<br/>
paste what they made shit
</p>
</body>
</html>
`,
    note3: `<html>
<head>
<title>
Note - 1.Locks and Mutexes
</title>
<link rel="shortcut icon" type="image/png" href="../favicon.png"/>
</head>
<body>
<h2>
1.Locks and Mutexes
</h2>
<hr/>
<p>
Assume as sign on kitchen that the someone in the kitchen you can&apos;t enter 
<br/>
lock the shared data
<br/>
ensure that only one person can access the shared resouce (batter) at a time
</p>
</body>
</html>
`,
    note4: `<html>
<head>
<title>
Note - Semaphores
</title>
<link rel="shortcut icon" type="image/png" href="../favicon.png"/>
</head>
<body>
<h2>
Semaphores
</h2>
<hr/>
<p>
Semaphores assume as a light on the resouces that tell someone is using red light don&apos;t touch until it green
<br/>
It also used to resources like multiple oven so process can use one oven which is green
</p>
</body>
</html>
`,
    note5: `<html>
<head>
<title>
Note - Multi level Queue scheduling
</title>
<link rel="shortcut icon" type="image/png" href="../favicon.png"/>
</head>
<body>
<h2>
Multi level Queue scheduling
</h2>
<hr/>
<p>
Assume there is a restaurant where there are 3 category customer service provided
<br/>
1.VIP
<br/>
2.Regular customer
<br/>
3.Takeaway orders
<br/>

<br/>
all are served in order how they arrange if vip is there they treat vip first then regular and then takeaway
<br/>

<br/>
seperate queue
<br/>
fixed priority
<br/>
no moving between queue
</p>
</body>
</html>
`,
    note6: `<html>
<head>
<title>
Note - MultiLevel feedback queue
</title>
<link rel="shortcut icon" type="image/png" href="../favicon.png"/>
</head>
<body>
<h2>
MultiLevel feedback queue
</h2>
<hr/>
<p>
Assume there is a restaurant where there are 3 category customer service provided
<br/>
1.VIP
<br/>
2.Regular customer
<br/>
3.Takeaway orders
<br/>

<br/>
all are served in order how they arrange if vip is there they treat vip first then regular and then takeaway but this is different here the customer can move from one queue to other based on how much time they waited
<br/>

<br/>
seperate queue
<br/>
priority of customer change depend on how long they wait
<br/>
moving between queue allowed
</p>
</body>
</html>
`,
}