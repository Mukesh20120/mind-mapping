export const notesData = {
  note1: `<html>
<head>
<title>
Note - Multi-master replica
</title>
<link rel="shortcut icon" type="image/png" href="../favicon.png"/>
</head>
<body>
<h2>
Multi-master replica
</h2>
<hr/>
<p>
Defination
<br/>
In multi master replica a unique id is generated by the server by adding k in the squence such that no same server have same id
<br/>

<br/>
Pros:
<br/>
easy to implement
<br/>

<br/>
Cons:
<br/>
1. Hard to scale when multiple data center
<br/>
2. id does&apos;t go with time accross multiple device
<br/>
3. New server added or removed hard to maintain
</p>
</body>
</html>
`,
  note2: `<html>
<head>
<title>
Note - UUID
</title>
<link rel="shortcut icon" type="image/png" href="../favicon.png"/>
</head>
<body>
<h2>
UUID
</h2>
<hr/>
<p>
Analogy 
<br/>
Imagine a party where every guest is wear a random generated tag and no two tag will be same 
<br/>

<br/>
Definition
<br/>
-UUID is 128 bit long hexadecimal
<br/>
-it is hexadecimal id
<br/>
-No two id identical
<br/>

<br/>

<br/>
Pros:
<br/>
-No synchronization issue as it generate the unique id
<br/>
-each server can have there own generator
<br/>

<br/>
Cons:
<br/>
-128 bit long
<br/>
-hexadecimal
<br/>
-it not go up with time
</p>
</body>
</html>
`,
  note3: `<html>
<head>
<title>
Note - Ticket Server
</title>
<link rel="shortcut icon" type="image/png" href="../favicon.png"/>
</head>
<body>
<h2>
Ticket Server
</h2>
<hr/>
<p>
Definition
<br/>
Only one server is responsible to generate the id for the other servers
<br/>

<br/>

<br/>
Pros:
<br/>
-easy to implement
<br/>

<br/>
Cons:
<br/>
-single point of failure and when another server we take for backup new problem arise data synchronization
</p>
</body>
</html>
`,
  note4: `<html>
<head>
<title>
Note - Twitter Snowflaw
</title>
<link rel="shortcut icon" type="image/png" href="../favicon.png"/>
</head>
<body>
<h2>
Twitter Snowflaw
</h2>
<hr/>
<p>
Definition
<br/>
It is generated by the twitter engineers to solve there problem of unique id for large number of users
<br/>
it is ordered and timely generated
<br/>
it consist of 64 bit which segment divided
<br/>
1 bit sign
<br/>
41 bit for time stamp
<br/>
5 bit for data center code
<br/>
5 bit for machine it
<br/>
12 bit for sequence number
<br/>

<br/>
Pros:
<br/>
-scalable
<br/>
-efficient
<br/>
-time scale 
<br/>

<br/>
cons:
<br/>
-clock drift
<br/>
-complex to setup
<br/>
-fixed length
<br/>

<br/>
solution: - Network Time protocol
</p>
</body>
</html>
`,
};

export const coordsData = [
  { coords: "568,38,584,54", noteKey: "note1" },
  { coords: "612,80,628,96", noteKey: "note2" },
  { coords: "681,26,697,42", noteKey: "note3" },
  { coords: "765,66,781,82", noteKey: "note4" },
  // { coords: '689,413,705,429', noteKey: 'note5' },
  // { coords: '245,1019,261,1035', noteKey: 'note6' },
  // { coords: '216,1136,232,1152', noteKey: 'note7' },
  // { coords: '165,1189,181,1205', noteKey: 'note8' },
  // { coords: '103,1154,119,1170', noteKey: 'note9' },
  // { coords: '303,1161,319,1177', noteKey: 'note10' },
  // { coords: '111,926,127,942', noteKey: 'note11' },
  // { coords: '399,1105,415,1121', noteKey: 'note12' },
  // { coords: '526,1092,542,1108', noteKey: 'note13' },
  // { coords: '580,1042,596,1058', noteKey: 'note14' },
  // { coords: '463,1060,479,1076', noteKey: 'note15' },
  // { coords: '294,892,310,908', noteKey: 'note16' },
  // { coords: '943,1083,959,1099', noteKey: 'note17' },
  // { coords: '1049,1109,1065,1125', noteKey: 'note18' },
  // { coords: '1076,1054,1092,1070', noteKey: 'note19' },
  // { coords: '1186,1092,1202,1108', noteKey: 'note20' },
  // { coords: '1131,877,1147,893', noteKey: 'note21' },
  // { coords: '1052,844,1068,860', noteKey: 'note22' }
];
